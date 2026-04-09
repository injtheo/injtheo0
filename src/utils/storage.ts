export const STORAGE_KEYS = {
  USER: 'data_edu_user',
  PROGRESS: 'data_edu_progress',
  USER_BADGES: 'data_edu_user_badges',
  COMPLETED_EXERCISES: 'data_edu_completed_exercises',
  QUIZ_RESULTS: 'data_edu_quiz_results',
  LEARNING_STREAK: 'data_edu_learning_streak'
};

export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage error:', error);
    }
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  }
};
