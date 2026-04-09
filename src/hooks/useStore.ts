import { create } from 'zustand';
import type { User, Course, Progress, Badge, UserBadge } from '../types';
import { initialCourses, initialBadges } from '../utils/data';
import { storage, STORAGE_KEYS } from '../utils/storage';

interface AppState {
  user: User | null;
  courses: Course[];
  currentCourse: Course | null;
  currentChapterIndex: number;
  progress: Progress[];
  badges: Badge[];
  userBadges: UserBadge[];
  completedExercises: string[];
  quizResults: { [quizId: string]: { score: number; passed: boolean; completedAt: string } };
  learningStreak: { lastDate: string; count: number };

  setUser: (user: User) => void;
  setCurrentCourse: (course: Course | null) => void;
  setCurrentChapterIndex: (index: number) => void;
  updateProgress: (courseId: string, chapterId: string) => void;
  addPoints: (points: number) => void;
  completeExercise: (exerciseId: string) => void;
  saveQuizResult: (quizId: string, score: number, passed: boolean) => void;
  unlockBadge: (badgeId: string) => void;
  checkAndUpdateStreak: () => void;
}

const defaultUser: User = {
  id: 'user-1',
  name: '学习者',
  email: 'student@example.com',
  points: 0,
  level: 1
};

export const useStore = create<AppState>((set, get) => ({
  user: storage.get<User | null>(STORAGE_KEYS.USER, defaultUser),
  courses: initialCourses,
  currentCourse: null,
  currentChapterIndex: 0,
  progress: storage.get<Progress[]>(STORAGE_KEYS.PROGRESS, []),
  badges: initialBadges,
  userBadges: storage.get<UserBadge[]>(STORAGE_KEYS.USER_BADGES, []),
  completedExercises: storage.get<string[]>(STORAGE_KEYS.COMPLETED_EXERCISES, []),
  quizResults: storage.get<{ [quizId: string]: { score: number; passed: boolean; completedAt: string } }>(STORAGE_KEYS.QUIZ_RESULTS, {}),
  learningStreak: storage.get<{ lastDate: string; count: number }>(STORAGE_KEYS.LEARNING_STREAK, { lastDate: '', count: 0 }),

  setUser: (user) => {
    set({ user });
    storage.set(STORAGE_KEYS.USER, user);
  },

  setCurrentCourse: (course) => set({ currentCourse: course, currentChapterIndex: 0 }),

  setCurrentChapterIndex: (index) => set({ currentChapterIndex: index }),

  updateProgress: (courseId, chapterId) => {
    set((state) => {
      let progress = [...state.progress];
      const existingIndex = progress.findIndex(p => p.courseId === courseId && p.userId === state.user?.id);
      
      const course = state.courses.find(c => c.id === courseId);
      if (!course) return state;

      if (existingIndex >= 0) {
        const existing = progress[existingIndex];
        if (!existing.completedChapters.includes(chapterId)) {
          const newCompletedChapters = [...existing.completedChapters, chapterId];
          const percentage = (newCompletedChapters.length / course.chapters.length) * 100;
          progress[existingIndex] = {
            ...existing,
            completedChapters: newCompletedChapters,
            percentage,
            completed: newCompletedChapters.length === course.chapters.length
          };
        }
      } else {
        progress.push({
          id: `progress-${Date.now()}`,
          userId: state.user?.id || '',
          courseId,
          completedChapters: [chapterId],
          percentage: (1 / course.chapters.length) * 100,
          completed: course.chapters.length === 1
        });
      }

      storage.set(STORAGE_KEYS.PROGRESS, progress);
      return { ...state, progress };
    });
    
    get().checkAndUpdateStreak();
    get().checkBadges();
  },

  addPoints: (points) => {
    set((state) => {
      if (!state.user) return state;
      const newPoints = state.user.points + points;
      const newLevel = Math.floor(newPoints / 500) + 1;
      const updatedUser = { ...state.user, points: newPoints, level: newLevel };
      storage.set(STORAGE_KEYS.USER, updatedUser);
      return { ...state, user: updatedUser };
    });
    get().checkBadges();
  },

  completeExercise: (exerciseId) => {
    set((state) => {
      if (state.completedExercises.includes(exerciseId)) return state;
      const updated = [...state.completedExercises, exerciseId];
      storage.set(STORAGE_KEYS.COMPLETED_EXERCISES, updated);
      return { ...state, completedExercises: updated };
    });
    get().checkBadges();
  },

  saveQuizResult: (quizId, score, passed) => {
    set((state) => {
      const updatedResults = {
        ...state.quizResults,
        [quizId]: { score, passed, completedAt: new Date().toISOString() }
      };
      storage.set(STORAGE_KEYS.QUIZ_RESULTS, updatedResults);
      return { ...state, quizResults: updatedResults };
    });
    get().checkBadges();
  },

  unlockBadge: (badgeId) => {
    set((state) => {
      const existing = state.userBadges.find(ub => ub.badgeId === badgeId && ub.userId === state.user?.id);
      if (existing) return state;

      const newUserBadge: UserBadge = {
        id: `ub-${Date.now()}`,
        userId: state.user?.id || '',
        badgeId,
        earnedAt: new Date().toISOString()
      };

      const updated = [...state.userBadges, newUserBadge];
      storage.set(STORAGE_KEYS.USER_BADGES, updated);
      return { ...state, userBadges: updated };
    });
  },

  checkAndUpdateStreak: () => {
    set((state) => {
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      let { lastDate, count } = state.learningStreak;
      
      if (lastDate === today) {
        return state;
      } else if (lastDate === yesterday || lastDate === '') {
        count = lastDate === '' ? 1 : count + 1;
      } else {
        count = 1;
      }
      
      const updatedStreak = { lastDate: today, count };
      storage.set(STORAGE_KEYS.LEARNING_STREAK, updatedStreak);
      return { ...state, learningStreak: updatedStreak };
    });
    get().checkBadges();
  },

  checkBadges: () => {
    const state = get();
    const { user, progress, completedExercises, quizResults, learningStreak, badges, userBadges } = state;
    
    if (!user) return;

    const userBadgeIds = userBadges.filter(ub => ub.userId === user.id).map(ub => ub.badgeId);

    const completedChaptersCount = progress
      .filter(p => p.userId === user.id)
      .reduce((sum, p) => sum + p.completedChapters.length, 0);
    
    const completedCoursesCount = progress.filter(p => p.userId === user.id && p.completed).length;
    const passedQuizzesCount = Object.values(quizResults).filter(r => r.passed).length;

    if (completedChaptersCount >= 1 && !userBadgeIds.includes('badge-1')) {
      state.unlockBadge('badge-1');
    }
    if (completedExercises.length >= 10 && !userBadgeIds.includes('badge-2')) {
      state.unlockBadge('badge-2');
    }
    if (completedCoursesCount >= 3 && !userBadgeIds.includes('badge-3')) {
      state.unlockBadge('badge-3');
    }
    if (passedQuizzesCount >= 1 && !userBadgeIds.includes('badge-4')) {
      state.unlockBadge('badge-4');
    }
    if (user.points >= 1000 && !userBadgeIds.includes('badge-5')) {
      state.unlockBadge('badge-5');
    }
    if (completedChaptersCount >= 5 && !userBadgeIds.includes('badge-6')) {
      state.unlockBadge('badge-6');
    }
    if (completedExercises.length >= 50 && !userBadgeIds.includes('badge-7')) {
      state.unlockBadge('badge-7');
    }
    if (learningStreak.count >= 7 && !userBadgeIds.includes('badge-8')) {
      state.unlockBadge('badge-8');
    }
  }
}));
