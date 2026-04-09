import { BookOpen, CheckCircle2, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../hooks/useStore';

export default function Practice() {
  const courses = useStore(state => state.courses);
  const completedExercises = useStore(state => state.completedExercises);
  const completeExercise = useStore(state => state.completeExercise);
  const addPoints = useStore(state => state.addPoints);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});

  const allExercises = courses.flatMap(course => 
    course.chapters.flatMap(chapter => 
      chapter.exercises.map(exercise => ({
        ...exercise,
        courseId: course.id,
        courseTitle: course.title,
        chapterId: chapter.id,
        chapterTitle: chapter.title
      }))
    )
  );

  const filteredExercises = allExercises.filter(exercise => {
    const matchesSearch = exercise.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || exercise.courseId === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  const handleAnswerSelect = (exerciseId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const handleSubmitExercise = (exercise: any) => {
    const isCorrect = selectedAnswers[exercise.id] === exercise.answer;
    if (isCorrect) {
      completeExercise(exercise.id);
      addPoints(exercise.points);
    }
  };

  const stats = {
    total: allExercises.length,
    completed: completedExercises.length,
    percentage: Math.round((completedExercises.length / allExercises.length) * 100)
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">练习中心</h1>
        <p className="text-slate-600 text-lg">通过练习巩固所学知识，提升数据分析能力</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{stats.total}</p>
              <p className="text-slate-500">总题目数</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{stats.completed}</p>
              <p className="text-slate-500">已完成</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
              <div className="text-2xl font-bold text-yellow-600">%</div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{stats.percentage}%</p>
              <p className="text-slate-500">完成率</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="搜索题目..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-400" />
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="all">全部课程</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredExercises.map((exercise, index) => {
          const isCompleted = completedExercises.includes(exercise.id);
          const selectedAnswer = selectedAnswers[exercise.id];

          return (
            <div key={exercise.id} className={`bg-white rounded-2xl p-6 shadow-md ${isCompleted ? 'border-2 border-green-200' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {exercise.courseTitle}
                  </span>
                  <span className="text-xs font-medium text-slate-500 ml-2">
                    {exercise.chapterTitle}
                  </span>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  {exercise.points} 分
                </span>
              </div>

              <h3 className="text-lg font-medium text-slate-800 mb-4">
                {index + 1}. {exercise.question}
              </h3>

              {exercise.type === 'choice' && exercise.options && (
                <div className="space-y-3">
                  {exercise.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => !isCompleted && handleAnswerSelect(exercise.id, optIndex.toString())}
                      disabled={isCompleted}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isCompleted
                          ? optIndex.toString() === exercise.answer
                            ? 'border-green-500 bg-green-100'
                            : 'border-slate-200 opacity-50'
                          : selectedAnswer === optIndex.toString()
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {String.fromCharCode(65 + optIndex)}. {option}
                    </button>
                  ))}
                </div>
              )}

              {!isCompleted && selectedAnswer && (
                <button
                  onClick={() => handleSubmitExercise(exercise)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  提交答案
                </button>
              )}

              {isCompleted && (
                <div className="mt-4 flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">已完成 +{exercise.points} 积分</span>
                </div>
              )}
            </div>
          );
        })}

        {filteredExercises.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700 mb-2">未找到相关题目</h3>
            <p className="text-slate-500">尝试使用其他搜索条件</p>
          </div>
        )}
      </div>
    </div>
  );
}
