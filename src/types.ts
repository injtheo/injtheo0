export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  thumbnail: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  question: string;
  type: 'choice' | 'code' | 'truefalse';
  options?: string[];
  answer: string;
  points: number;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  duration: number;
  questions: QuizQuestion[];
  passScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'choice' | 'code';
  options?: string[];
  answer: string;
  points: number;
}

export interface Progress {
  id: string;
  userId: string;
  courseId: string;
  completedChapters: string[];
  percentage: number;
  completed: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
}

export interface UserBadge {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: string;
}
