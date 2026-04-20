import { useState, useEffect } from 'react';
import { Clock, Award, CheckCircle2, XCircle, Play, RotateCcw } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { initialQuizzes } from '../utils/data';

export default function Quiz() {
  const courses = useStore(state => state.courses);
  const quizResults = useStore(state => state.quizResults);
  const saveQuizResult = useStore(state => state.saveQuizResult);
  const addPoints = useStore(state => state.addPoints);

  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const quiz = selectedQuiz ? initialQuizzes.find(q => q.id === selectedQuiz) : null;
  const course = quiz ? courses.find(c => c.id === quiz.courseId) : null;

  useEffect(() => {
    let timer: number;
    if (isStarted && timeLeft > 0 && !isFinished) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isStarted && !isFinished) {
      handleFinish();
    }
    return () => clearInterval(timer);
  }, [isStarted, timeLeft, isFinished]);

  const startQuiz = (quizId: string) => {
    setSelectedQuiz(quizId);
    const q = initialQuizzes.find(q => q.id === quizId);
    if (q) {
      setTimeLeft(q.duration * 60);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setIsStarted(true);
      setIsFinished(false);
      setScore(0);
    }
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    if (!quiz) return;

    let totalScore = 0;
    let maxScore = 0;

    quiz.questions.forEach(question => {
      maxScore += question.points;
      if (selectedAnswers[question.id] === question.answer) {
        totalScore += question.points;
      }
    });

    const percentage = Math.round((totalScore / maxScore) * 100);
    const passed = percentage >= quiz.passScore;

    setScore(percentage);
    setIsFinished(true);
    setIsStarted(false);
    saveQuizResult(quiz.id, percentage, passed);

    if (passed) {
      addPoints(100);
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setIsStarted(false);
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!selectedQuiz) {
    return (
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">测评中心</h1>
          <p className="text-slate-600 text-lg">检验学习成果，提升数据分析能力</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialQuizzes.map(quiz => {
            const course = courses.find(c => c.id === quiz.courseId);
            const result = quizResults[quiz.id];

            return (
              <div key={quiz.id} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {course?.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{quiz.duration} 分钟</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">{quiz.title}</h3>
                <p className="text-slate-500 text-sm mb-4">
                  {quiz.questions.length} 道题目 · 及格分 {quiz.passScore}%
                </p>

                {result ? (
                  <div className="space-y-3">
                    <div className={`p-4 rounded-xl ${result.passed ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {result.passed ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                        <span className={`font-bold ${result.passed ? 'text-green-700' : 'text-red-700'}`}>
                          {result.passed ? '已通过' : '未通过'}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-slate-800">{result.score}%</p>
                    </div>
                    <button
                      onClick={() => startQuiz(quiz.id)}
                      className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 px-4 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                      重新测试
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => startQuiz(quiz.id)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-600 transition-all"
                  >
                    <Play className="w-5 h-5" />
                    开始测试
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (isFinished && quiz) {
    const passed = score >= quiz.passScore;
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed ? (
              <Award className="w-12 h-12 text-green-600" />
            ) : (
              <XCircle className="w-12 h-12 text-red-600" />
            )}
          </div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {passed ? '恭喜通过！' : '继续加油！'}
          </h2>
          <p className="text-slate-600 mb-6">{quiz.title}</p>
          
          <div className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {score}%
          </div>

          {passed && (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-6 inline-block">
              <p className="text-yellow-700 font-medium">🎉 获得 100 积分奖励！</p>
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-medium hover:bg-slate-200 transition-colors"
            >
              返回列表
            </button>
            <button
              onClick={() => startQuiz(quiz.id)}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              再测一次
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!quiz) return null;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">{quiz.title}</h2>
            <p className="text-slate-500">
              题目 {currentQuestionIndex + 1} / {quiz.questions.length}
            </p>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
            timeLeft < 60 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
          }`}>
            <Clock className="w-5 h-5" />
            <span className="font-mono font-bold text-xl">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-2">
            {quiz.questions.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 rounded-full transition-all ${
                  index < currentQuestionIndex
                    ? 'bg-blue-500'
                    : index === currentQuestionIndex
                    ? 'bg-blue-500'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-md">
        <h3 className="text-xl font-medium text-slate-800 mb-6">
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </h3>

        {currentQuestion.type === 'single' && currentQuestion.options && (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion.id, index.toString())}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswers[currentQuestion.id] === index.toString()
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              currentQuestionIndex === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            上一题
          </button>
          
          {currentQuestionIndex === quiz.questions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all"
            >
              提交答卷
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              下一题
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
