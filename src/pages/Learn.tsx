import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft, BookOpen, AlertCircle, Lightbulb, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useStore } from '../hooks/useStore';

export default function Learn() {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const courses = useStore(state => state.courses);
  const currentChapterIndex = useStore(state => state.currentChapterIndex);
  const setCurrentChapterIndex = useStore(state => state.setCurrentChapterIndex);
  const updateProgress = useStore(state => state.updateProgress);
  const addPoints = useStore(state => state.addPoints);
  const completeExercise = useStore(state => state.completeExercise);
  const completedExercises = useStore(state => state.completedExercises);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string[] }>({});
  const [showExplanation, setShowExplanation] = useState<{ [key: string]: boolean }>({});

  const course = courses.find(c => c.id === courseId);
  const initialChapterIndex = parseInt(chapterId || '0');
  
  useEffect(() => {
    if (!isNaN(initialChapterIndex) && initialChapterIndex !== currentChapterIndex) {
      setCurrentChapterIndex(initialChapterIndex);
    }
  }, [initialChapterIndex, currentChapterIndex, setCurrentChapterIndex]);

  if (!course) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-slate-700">课程未找到</h2>
        <Link to="/courses" className="text-blue-600 hover:underline mt-4 inline-block">
          返回课程中心
        </Link>
      </div>
    );
  }

  const chapter = course.chapters[currentChapterIndex];

  const handleNext = () => {
    if (currentChapterIndex < course.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };

  const handleCompleteChapter = () => {
    updateProgress(course.id, chapter.id);
    addPoints(50);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAnswerSelect = (exerciseId: string, answer: string, isMultiple: boolean) => {
    setSelectedAnswers(prev => {
      const current = prev[exerciseId] || [];
      if (isMultiple) {
        if (current.includes(answer)) {
          return { ...prev, [exerciseId]: current.filter(a => a !== answer) };
        } else {
          return { ...prev, [exerciseId]: [...current, answer] };
        }
      } else {
        return { ...prev, [exerciseId]: [answer] };
      }
    });
  };

  const handleSubmitExercise = (exercise: any) => {
    const userAnswers = selectedAnswers[exercise.id] || [];
    let isCorrect = false;
    
    if (Array.isArray(exercise.answer)) {
      isCorrect = userAnswers.length === exercise.answer.length &&
        userAnswers.every(a => exercise.answer.includes(a));
    } else {
      isCorrect = userAnswers.length === 1 && userAnswers[0] === exercise.answer.toString();
    }
    
    if (isCorrect) {
      completeExercise(exercise.id);
      addPoints(exercise.points);
    }
    
    setShowExplanation(prev => ({ ...prev, [exercise.id]: true }));
  };

  const getDifficultyLabel = (level: number) => {
    const labels = { 1: '简单', 2: '中等', 3: '困难' };
    return labels[level] || '未知';
  };

  const getDifficultyColor = (level: number) => {
    const colors = {
      1: 'bg-green-100 text-green-700',
      2: 'bg-yellow-100 text-yellow-700',
      3: 'bg-red-100 text-red-700'
    };
    return colors[level] || 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="space-y-6">
      <Link
        to={`/courses/${courseId}`}
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800"
      >
        <ArrowLeft className="w-5 h-5" />
        返回课程详情
      </Link>

      {showSuccess && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg z-50 animate-bounce">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-bold">章节完成！获得 50 积分</span>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-4 shadow-md sticky top-24">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              课程目录
            </h3>
            <div className="space-y-2">
              {course.chapters.map((ch, index) => (
                <button
                  key={ch.id}
                  onClick={() => setCurrentChapterIndex(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    index === currentChapterIndex
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{index + 1}.</span>
                    <span className="text-sm">{ch.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">{chapter.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{chapter.content}</ReactMarkdown>
            </div>

            <button
              onClick={handleCompleteChapter}
              className="mt-8 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              标记章节完成
            </button>
          </div>

          {chapter.exercises.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">章节练习</h2>
              <div className="space-y-8">
                {chapter.exercises.map((exercise, index) => {
                  const isCompleted = completedExercises.includes(exercise.id);
                  const userAnswers = selectedAnswers[exercise.id] || [];
                  const showExpl = showExplanation[exercise.id] || isCompleted;
                  const isMultiple = exercise.type === 'multiple';

                  const checkAnswer = (option: string, optIndex: number) => {
                    const answerStr = Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer];
                    return answerStr.some(a => a === option || a === optIndex.toString());
                  };

                  return (
                    <div key={exercise.id} className={`p-6 rounded-xl border-2 ${isCompleted ? 'border-green-200 bg-green-50' : 'border-slate-200'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex flex-wrap gap-2">
                          <h3 className="text-lg font-medium text-slate-800">
                            {index + 1}. {exercise.question}
                            {exercise.type === 'multiple' && <span className="text-blue-500 ml-2">(多选)</span>}
                            {exercise.type === 'truefalse' && <span className="text-purple-500 ml-2">(判断)</span>}
                          </h3>
                          {exercise.difficulty && (
                            <span className={`text-xs font-medium px-2 py-1 rounded ${getDifficultyColor(exercise.difficulty)}`}>
                              {getDifficultyLabel(exercise.difficulty)}
                            </span>
                          )}
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {exercise.points} 分
                        </span>
                      </div>

                      {exercise.options && (
                        <div className="space-y-3">
                          {exercise.options.map((option, optIndex) => {
                            const isSelected = userAnswers.includes(optIndex.toString());
                            const isCorrectAnswer = checkAnswer(option, optIndex);
                            
                            let buttonClass = 'border-slate-200 hover:border-blue-300';
                            if (showExpl) {
                              if (isCorrectAnswer) {
                                buttonClass = 'border-green-500 bg-green-100';
                              } else if (isSelected && !isCorrectAnswer) {
                                buttonClass = 'border-red-500 bg-red-100';
                              } else {
                                buttonClass = 'border-slate-200 opacity-50';
                              }
                            } else if (isSelected) {
                              buttonClass = 'border-blue-500 bg-blue-50';
                            }

                            return (
                              <button
                                key={optIndex}
                                onClick={() => !isCompleted && handleAnswerSelect(exercise.id, optIndex.toString(), isMultiple)}
                                disabled={isCompleted}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${buttonClass}`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full border border-slate-300 font-medium">
                                    {String.fromCharCode(65 + optIndex)}
                                  </span>
                                  <span className="flex-1">{option}</span>
                                  {showExpl && isCorrectAnswer && (
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                  )}
                                  {showExpl && isSelected && !isCorrectAnswer && (
                                    <AlertCircle className="w-5 h-5 text-red-600" />
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {exercise.type === 'truefalse' && !exercise.options && (
                        <div className="flex gap-4">
                          {['正确', '错误'].map((option, optIndex) => {
                            const isSelected = userAnswers.includes(optIndex.toString());
                            const correctAnswer = exercise.answer === true ? '0' : '1';
                            const isCorrectAnswer = optIndex.toString() === correctAnswer;
                            
                            let buttonClass = 'border-slate-200 hover:border-blue-300';
                            if (showExpl) {
                              if (isCorrectAnswer) {
                                buttonClass = 'border-green-500 bg-green-100';
                              } else if (isSelected && !isCorrectAnswer) {
                                buttonClass = 'border-red-500 bg-red-100';
                              } else {
                                buttonClass = 'border-slate-200 opacity-50';
                              }
                            } else if (isSelected) {
                              buttonClass = 'border-blue-500 bg-blue-50';
                            }

                            return (
                              <button
                                key={optIndex}
                                onClick={() => !isCompleted && handleAnswerSelect(exercise.id, optIndex.toString(), false)}
                                disabled={isCompleted}
                                className={`flex-1 p-4 rounded-lg border-2 transition-all ${buttonClass}`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {!isCompleted && userAnswers.length > 0 && (
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

                      {showExpl && exercise.explanation && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-blue-800">答案解析</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed">{exercise.explanation}</p>
                        </div>
                      )}

                      {exercise.tags && exercise.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Tag className="w-4 h-4 text-slate-400" />
                          {exercise.tags.slice(0, 5).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentChapterIndex === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentChapterIndex === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              上一章
            </button>
            <button
              onClick={handleNext}
              disabled={currentChapterIndex === course.chapters.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentChapterIndex === course.chapters.length - 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              下一章
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
