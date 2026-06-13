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
  type: 'single' | 'multiple' | 'truefalse' | 'essay' | 'choice' | 'true-false';
  options?: string[];
  answer: string | string[] | boolean;
  points: number;
  explanation?: string;
  tags?: string[];
  difficulty?: 1 | 2 | 3;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  category: string;
  estimatedTime?: string;
  datasetUrl?: string;
  thumbnail?: string;
  requirements?: string[];
  solution?: string;
  datasetDescription?: string;
  businessContext?: string;
  tasks: ProjectTask[];
}

export interface ProjectTask {
  id: string;
  title: string;
  description: string;
  steps: string[];
  solution: string;
  learningObjectives?: string[];
  prerequisites?: string[];
  commonMistakes?: string[] | Array<{ mistake: string; solution: string }>;
  extensions?: string[];
  learningGoals?: string[];
  extensionQuestions?: string[];
  tags?: string[];
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  duration?: number;
  timeLimit?: number;
  questions: QuizQuestion[];
  passScore?: number;
  passingScore?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'truefalse' | 'essay' | 'choice' | 'true-false';
  options?: string[];
  answer?: string | string[] | boolean;
  points: number;
  explanation?: string;
  tags?: string[];
  difficulty?: 1 | 2 | 3;
}

export interface Progress {
  id: string;
  userId: string;
  courseId: string;
  completedChapters: string[];
  percentage: number;
  completed: boolean;
}

export interface ProjectProgress {
  id: string;
  userId: string;
  projectId: string;
  completed: boolean;
  completedAt?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition?: string;
  requirement: {
    type: 'course_complete' | 'project_complete' | 'quiz_complete' | 'quiz_score';
    count?: number;
    score?: number;
  };
}

export interface UserBadge {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: string;
}
