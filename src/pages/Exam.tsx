import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle2, AlertCircle, BookOpen, Award } from 'lucide-react';
import { useStore } from '../hooks/useStore';

export default function Exam() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 120分钟
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const getAnswerArray = (ans: string | string[] | boolean): string[] => {
    if (Array.isArray(ans)) return ans;
    if (typeof ans === 'boolean') return [ans ? 'true' : 'false'];
    return ans.split(',').filter(x => x);
  };
  
  const quizzes = useStore(state => state.quizzes);
  const quiz = quizzes[0];

  useEffect(() => {
    if (isCompleted || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isCompleted, timeLeft]);

  if (!quiz) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-xl text-slate-600">暂无考试</p>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleMultipleAnswer = (questionId: string, optionIndex: number, checked: boolean) => {
    setAnswers(prev => {
      const current = prev[questionId]?.split(',') || [];
      let updated;
      if (checked) {
        updated = [...current, optionIndex.toString()];
      } else {
        updated = current.filter(x => x !== optionIndex.toString());
      }
      return { ...prev, [questionId]: updated.join(',') };
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    quiz.questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (userAnswer === question.answer) {
        totalScore += question.points;
      } else if (question.type === 'multiple') {
        // 多选：部分对给部分分
        const userAnswers = (userAnswer || '').split(',').filter(x => x);
        const correctAnswers = getAnswerArray(question.answer);
        const allCorrect = userAnswers.length === correctAnswers.length && 
          userAnswers.every(x => correctAnswers.includes(x));
        if (allCorrect) {
          totalScore += question.points;
        } else if (userAnswers.some(x => correctAnswers.includes(x))) {
          totalScore += Math.floor(question.points * 0.5);
        }
      }
    });
    return totalScore;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setIsCompleted(true);
    setShowResults(true);
  };

  const totalScore = quiz.questions.reduce((sum, q) => sum + q.points, 0);
  const passed = score >= quiz.passScore;

  const currentQuestionData = quiz.questions[currentQuestion];

  return (
    <div className="space-y-8">
      {!showResults ? (
        <>
          {/* 考试头部 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
                  <p className="text-blue-100">完整测试你的数据分析能力</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">{formatTime(timeLeft)}</div>
                  <div className="text-blue-200 text-sm">剩余时间</div>
                </div>
              </div>
            </div>
            
            {/* 进度条 */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">
                  第 {currentQuestion + 1} 题 / 共 {quiz.questions.length} 题
                </span>
                <span className="text-sm text-slate-600">
                  总分 {totalScore} 分，及格 {quiz.passScore} 分
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* 题目区域 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {currentQuestionData.type === 'single' ? '单选题' : 
                   currentQuestionData.type === 'multiple' ? '多选题' : 
                   currentQuestionData.type === 'truefalse' ? '判断题' : '论述题'}
                </span>
                <span className="text-slate-500 text-sm">{currentQuestionData.points} 分</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                {currentQuestion + 1}. {currentQuestionData.question}
              </h2>

              {/* 题目内容 */}
              {currentQuestionData.type === 'single' && (
                <div className="space-y-3">
                  {currentQuestionData.options?.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        answers[currentQuestionData.id] === index.toString()
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestionData.id}`}
                        checked={answers[currentQuestionData.id] === index.toString()}
                        onChange={() => handleAnswer(currentQuestionData.id, index.toString())}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQuestionData.type === 'multiple' && (
                <div className="space-y-3">
                  {currentQuestionData.options?.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        (answers[currentQuestionData.id] || '').split(',').includes(index.toString())
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={(answers[currentQuestionData.id] || '').split(',').includes(index.toString())}
                        onChange={(e) => handleMultipleAnswer(currentQuestionData.id, index, e.target.checked)}
                        className="w-5 h-5 text-blue-600 rounded"
                      />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQuestionData.type === 'truefalse' && (
                <div className="space-y-3">
                  {['正确', '错误'].map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        answers[currentQuestionData.id] === index.toString()
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestionData.id}`}
                        checked={answers[currentQuestionData.id] === index.toString()}
                        onChange={() => handleAnswer(currentQuestionData.id, index.toString())}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQuestionData.type === 'essay' && (
                <div>
                  <textarea
                    value={answers[currentQuestionData.id] || ''}
                    onChange={(e) => handleAnswer(currentQuestionData.id, e.target.value)}
                    placeholder="请在此输入你的答案..."
                    className="w-full h-64 p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                  />
                  <p className="mt-3 text-sm text-slate-500">
                    * 论述题将在完成后显示参考答案，请自行评分
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentQuestion === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              上一题
            </button>

            {currentQuestion < quiz.questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                下一题
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                提交答卷
              </button>
            )}
          </div>
        </>
      ) : (
        /* 结果页面 */
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className={`p-8 text-center ${passed ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'} text-white`}>
              {passed ? (
                <CheckCircle2 className="w-24 h-24 mx-auto mb-4" />
              ) : (
                <AlertCircle className="w-24 h-24 mx-auto mb-4" />
              )}
              <h1 className="text-3xl font-bold mb-2">
                {passed ? '恭喜通过！' : '再接再厉！'}
              </h1>
              <p className="text-xl opacity-90">
                {passed ? '你的数据分析能力很棒！' : '继续学习，下次一定能通过！'}
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-4xl font-bold text-slate-800 mb-2">{score}</div>
                  <div className="text-slate-600">得分</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-4xl font-bold text-slate-800 mb-2">{totalScore}</div>
                  <div className="text-slate-600">总分</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-4xl font-bold text-slate-800 mb-2">{Math.round((score / totalScore) * 100)}%</div>
                  <div className="text-slate-600">正确率</div>
                </div>
              </div>

              {/* 题目详情 */}
              <h3 className="text-xl font-bold text-slate-800 mb-6">题目详情</h3>
              <div className="space-y-4">
                {quiz.questions.map((question, index) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.answer || 
                    (question.type === 'multiple' && (() => {
                      const userAnswers = (userAnswer || '').split(',').filter(x => x);
                      const correctAnswers = getAnswerArray(question.answer);
                      return userAnswers.length === correctAnswers.length && 
                        userAnswers.every(x => correctAnswers.includes(x));
                    })());
                  
                  return (
                    <div key={question.id} className={`p-6 rounded-xl border-2 ${
                      isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-sm font-medium text-slate-600">
                            {index + 1}. {question.type === 'single' ? '单选' : 
                             question.type === 'multiple' ? '多选' : 
                             question.type === 'truefalse' ? '判断' : '论述'}
                          </span>
                          <span className="text-sm text-slate-500 ml-3">{question.points} 分</span>
                        </div>
                        <span className={`text-sm font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✓ 正确' : '✗ 错误'}
                        </span>
                      </div>
                      <p className="text-slate-800 mb-4">{question.question}</p>
                      
                      {question.type !== 'essay' && (
                        <>
                          <div className="mb-4">
                            <p className="text-sm text-slate-600 mb-2">你的答案：</p>
                            <p className="text-slate-800">
                              {userAnswer ? userAnswer.split(',').map(i => question.options?.[parseInt(i)]).join(', ') : '未作答'}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-600 mb-2">正确答案：</p>
                            <p className="text-green-700 font-medium">
                              {getAnswerArray(question.answer).map((i: string) => question.options?.[parseInt(i)]).join(', ')}
                            </p>
                          </div>
                        </>
                      )}

                      {question.type === 'essay' && (
                        <div className="mt-4">
                          <p className="text-sm text-slate-600 mb-2">参考答案：</p>
                          <div className="bg-slate-100 rounded-lg p-4 text-slate-700 text-sm whitespace-pre-wrap">
                            {question.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setTimeLeft(120 * 60);
                    setIsCompleted(false);
                    setShowResults(false);
                    setScore(0);
                  }}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                >
                  重新考试
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  返回首页
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}