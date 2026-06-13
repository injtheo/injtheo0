import { useState, useEffect } from 'react';
import { Clock, Award, CheckCircle2, XCircle, Play, RotateCcw, Lightbulb, Tag, User, History, ChevronDown, ChevronUp, FileText, AlertCircle } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { initialQuizzes } from '../utils/data';

interface StudentInfo {
  name: string;
  studentId: string;
  className: string;
  department: string;
  phone?: string;
  email?: string;
}

interface AnswerDetail {
  questionId: string;
  question: string;
  type: string;
  options?: string[];
  studentAnswer: string;
  correctAnswer: string | string[] | boolean;
  isCorrect: boolean;
  earnedPoints: number;
  totalPoints: number;
  explanation?: string;
  tags?: string[];
}

interface ExamRecord {
  recordId: string;
  studentInfo: StudentInfo;
  quizId: string;
  quizTitle: string;
  startTime: string;
  endTime: string;
  duration: number;
  totalScore: number;
  earnedScore: number;
  correctCount: number;
  wrongCount: number;
  percentage: number;
  passed: boolean;
  answers: AnswerDetail[];
}

const STORAGE_KEY = 'examRecords';

function getExamRecords(): ExamRecord[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function saveExamRecord(record: ExamRecord) {
  const records = getExamRecords();
  records.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}分${s}秒`;
}

type ViewMode = 'list' | 'info' | 'exam' | 'result' | 'history' | 'detail';

export default function Quiz() {
  const courses = useStore(state => state.courses);
  const addPoints = useStore(state => state.addPoints);

  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({ name: '', studentId: '', className: '', department: '' });
  const [agreedRules, setAgreedRules] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [multiAnswers, setMultiAnswers] = useState<{ [key: string]: string[] }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [lastRecord, setLastRecord] = useState<ExamRecord | null>(null);
  const [historyRecords, setHistoryRecords] = useState<ExamRecord[]>([]);
  const [detailRecord, setDetailRecord] = useState<ExamRecord | null>(null);
  const [showWrongOnly, setShowWrongOnly] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const quiz = selectedQuizId ? initialQuizzes.find(q => q.id === selectedQuizId) : null;
  const course = quiz ? courses.find(c => c.id === quiz.courseId) : null;

  useEffect(() => {
    let timer: number;
    if (viewMode === 'exam' && timeLeft > 0) {
      timer = window.setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && viewMode === 'exam') {
      handleFinish();
    }
    return () => clearInterval(timer);
  }, [viewMode, timeLeft]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!studentInfo.name.trim()) errors.name = '请输入姓名';
    if (!studentInfo.studentId.trim()) errors.studentId = '请输入学号';
    else if (studentInfo.studentId.length < 6) errors.studentId = '学号至少6位';
    if (!studentInfo.className.trim()) errors.className = '请输入班级';
    if (!studentInfo.department.trim()) errors.department = '请输入学院';
    if (studentInfo.phone && !/^1\d{10}$/.test(studentInfo.phone)) errors.phone = '手机号格式不正确';
    if (studentInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentInfo.email)) errors.email = '邮箱格式不正确';
    if (!agreedRules) errors.rules = '请同意考试规则';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const startExam = () => {
    if (!validateForm() || !quiz) return;
    setTimeLeft((quiz.timeLimit || quiz.duration || 25) * 60);
    setStartTime(new Date().toISOString());
    setCurrentQ(0);
    setSelectedAnswers({});
    setMultiAnswers({});
    setViewMode('exam');
  };

  const handleSingleAnswer = (qId: string, optIdx: string) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleMultiAnswer = (qId: string, optIdx: string) => {
    setMultiAnswers(prev => {
      const current = prev[qId] || [];
      if (current.includes(optIdx)) return { ...prev, [qId]: current.filter(a => a !== optIdx) };
      return { ...prev, [qId]: [...current, optIdx] };
    });
  };

  const handleFinish = () => {
    if (!quiz) return;
    let earnedScore = 0;
    let totalScore = 0;
    let correctCount = 0;
    let wrongCount = 0;
    const answers: AnswerDetail[] = [];

    quiz.questions.forEach(q => {
      totalScore += q.points;
      const userSingle = selectedAnswers[q.id] || '';
      const userMulti = multiAnswers[q.id] || [];
      let isCorrect = false;
      let studentAns = '';

      if (q.type === 'multiple') {
        studentAns = userMulti.sort().join(',');
        const correctAns = Array.isArray(q.answer) ? q.answer.map((a: string, i: number) => {
          const idx = q.options?.indexOf(a);
          return idx !== undefined && idx >= 0 ? idx.toString() : '';
        }).filter(Boolean).sort().join(',') : '';
        isCorrect = studentAns === correctAns && studentAns !== '';
      } else if (q.type === 'truefalse') {
        studentAns = userSingle;
        const correctBool = q.answer === true ? '0' : q.answer === false ? '1' : '';
        isCorrect = studentAns === correctBool;
      } else {
        studentAns = userSingle;
        if (q.options && q.answer !== undefined) {
          const correctIdx = q.options.indexOf(q.answer as string);
          isCorrect = studentAns === correctIdx.toString();
        }
      }

      if (isCorrect) { earnedScore += q.points; correctCount++; }
      else { wrongCount++; }

      answers.push({
        questionId: q.id,
        question: q.question,
        type: q.type,
        options: q.options,
        studentAnswer: studentAns,
        correctAnswer: q.answer,
        isCorrect,
        earnedPoints: isCorrect ? q.points : 0,
        totalPoints: q.points,
        explanation: q.explanation,
        tags: q.tags,
      });
    });

    const percentage = totalScore > 0 ? Math.round((earnedScore / totalScore) * 100) : 0;
    const passed = percentage >= (quiz.passingScore || quiz.passScore || 60);

    const record: ExamRecord = {
      recordId: `record-${Date.now()}`,
      studentInfo,
      quizId: quiz.id,
      quizTitle: quiz.title,
      startTime,
      endTime: new Date().toISOString(),
      duration: Math.round((Date.now() - new Date(startTime).getTime()) / 1000),
      totalScore,
      earnedScore,
      correctCount,
      wrongCount,
      percentage,
      passed,
      answers,
    };

    saveExamRecord(record);
    setLastRecord(record);
    setViewMode('result');

    if (passed) addPoints(100);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getOptionLabel = (ans: string | string[] | boolean, options?: string[]) => {
    if (typeof ans === 'boolean') return ans ? '正确' : '错误';
    if (Array.isArray(ans)) return ans.join('、');
    if (options) {
      const idx = options.indexOf(ans);
      if (idx >= 0) return `${String.fromCharCode(65 + idx)}. ${ans}`;
    }
    return String(ans);
  };

  const getStudentAnswerLabel = (ans: string, type: string, options?: string[]) => {
    if (type === 'truefalse') return ans === '0' ? '正确' : ans === '1' ? '错误' : '未作答';
    if (type === 'multiple') {
      if (!ans) return '未作答';
      return ans.split(',').sort().map(idx => {
        const i = parseInt(idx);
        return options?.[i] ? `${String.fromCharCode(65 + i)}.${options[i]}` : '';
      }).filter(Boolean).join('、');
    }
    if (options) {
      const i = parseInt(ans);
      return options[i] ? `${String.fromCharCode(65 + i)}.${options[i]}` : '未作答';
    }
    return ans || '未作答';
  };

  // ======== 考试记录列表 ========
  if (viewMode === 'history') {
    const records = getExamRecords();
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800">考试记录</h1>
          <button onClick={() => setViewMode('list')} className="text-blue-600 hover:underline">返回测评中心</button>
        </div>
        {records.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">暂无考试记录</p>
          </div>
        ) : (
          <div className="space-y-4">
            {records.sort((a, b) => new Date(b.endTime).getTime() - new Date(a.endTime).getTime()).map(r => (
              <div key={r.recordId} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{r.quizTitle}</h3>
                    <p className="text-slate-500 text-sm mt-1">
                      {r.studentInfo.name} ({r.studentInfo.studentId}) · {r.studentInfo.className}
                    </p>
                    <p className="text-slate-400 text-sm">{formatDate(r.endTime)} · 用时 {formatDuration(r.duration)}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${r.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {r.passed ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {r.passed ? '通过' : '未通过'}
                    </div>
                    <p className="text-2xl font-bold text-slate-800 mt-2">{r.percentage}%</p>
                    <p className="text-slate-400 text-sm">{r.correctCount}对 / {r.wrongCount}错</p>
                  </div>
                </div>
                <button onClick={() => { setDetailRecord(r); setShowWrongOnly(false); setViewMode('detail'); }}
                  className="mt-4 text-blue-600 hover:underline text-sm flex items-center gap-1">
                  <FileText className="w-4 h-4" /> 查看详情
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ======== 考试详情 ========
  if (viewMode === 'detail' && detailRecord) {
    const filteredAnswers = showWrongOnly ? detailRecord.answers.filter(a => !a.isCorrect) : detailRecord.answers;
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800">考试详情</h1>
          <button onClick={() => setViewMode('history')} className="text-blue-600 hover:underline">返回记录列表</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-center gap-2 mb-2"><User className="w-5 h-5 text-blue-600" /><span className="font-medium text-slate-700">学生信息</span></div>
            <p className="text-slate-800 font-medium">{detailRecord.studentInfo.name}</p>
            <p className="text-slate-500 text-sm">学号: {detailRecord.studentId}</p>
            <p className="text-slate-500 text-sm">{detailRecord.studentInfo.department} · {detailRecord.studentInfo.className}</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-blue-600" /><span className="font-medium text-slate-700">考试信息</span></div>
            <p className="text-slate-800 font-medium">{detailRecord.quizTitle}</p>
            <p className="text-slate-500 text-sm">{formatDate(detailRecord.startTime)}</p>
            <p className="text-slate-500 text-sm">用时: {formatDuration(detailRecord.duration)}</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-center gap-2 mb-2"><Award className="w-5 h-5 text-blue-600" /><span className="font-medium text-slate-700">成绩</span></div>
            <p className={`text-3xl font-bold ${detailRecord.passed ? 'text-green-600' : 'text-red-600'}`}>{detailRecord.percentage}%</p>
            <p className="text-slate-500 text-sm">{detailRecord.correctCount}对 / {detailRecord.wrongCount}错</p>
            <p className={`text-sm font-medium ${detailRecord.passed ? 'text-green-600' : 'text-red-600'}`}>{detailRecord.passed ? '✓ 通过' : '✗ 未通过'}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setShowWrongOnly(!showWrongOnly)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${showWrongOnly ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'}`}>
            {showWrongOnly ? '显示全部' : '只看错题'}
          </button>
          <span className="text-slate-500 text-sm">共 {filteredAnswers.length} 题</span>
        </div>
        <div className="space-y-4">
          {filteredAnswers.map((a, idx) => (
            <div key={a.questionId} className={`bg-white rounded-2xl p-6 shadow-md border-l-4 ${a.isCorrect ? 'border-green-500' : 'border-red-500'}`}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-slate-800">{idx + 1}. {a.question}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${a.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {a.isCorrect ? `+${a.earnedPoints}` : '0'} / {a.totalPoints}分
                </span>
              </div>
              {a.options && (
                <div className="space-y-2 mb-3">
                  {a.options.map((opt, oi) => {
                    const isCorrectOpt = Array.isArray(a.correctAnswer) ? a.correctAnswer.includes(opt) : opt === a.correctAnswer;
                    const isStudentOpt = a.type === 'multiple' ? (a.studentAnswer?.split(',').includes(oi.toString())) : a.studentAnswer === oi.toString();
                    let cls = 'border-slate-200';
                    if (isCorrectOpt) cls = 'border-green-500 bg-green-50';
                    else if (isStudentOpt && !isCorrectOpt) cls = 'border-red-500 bg-red-50';
                    return (
                      <div key={oi} className={`p-3 rounded-lg border-2 ${cls} flex items-center gap-2`}>
                        <span className="w-6 h-6 flex items-center justify-center rounded-full border text-sm">{String.fromCharCode(65 + oi)}</span>
                        <span className="flex-1">{opt}</span>
                        {isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                        {isStudentOpt && !isCorrectOpt && <XCircle className="w-4 h-4 text-red-600" />}
                      </div>
                    );
                  })}
                </div>
              )}
              {a.type === 'truefalse' && !a.options && (
                <div className="flex gap-3 mb-3">
                  {['正确', '错误'].map((label, li) => {
                    const isCorrectOpt = (a.correctAnswer === true && li === 0) || (a.correctAnswer === false && li === 1);
                    const isStudentOpt = (a.studentAnswer === '0' && li === 0) || (a.studentAnswer === '1' && li === 1);
                    let cls = 'border-slate-200';
                    if (isCorrectOpt) cls = 'border-green-500 bg-green-50';
                    else if (isStudentOpt && !isCorrectOpt) cls = 'border-red-500 bg-red-50';
                    return <div key={li} className={`flex-1 p-3 rounded-lg border-2 text-center ${cls}`}>{label}</div>;
                  })}
                </div>
              )}
              <div className="space-y-2 text-sm">
                <p><span className="text-slate-500">你的答案：</span><span className={a.isCorrect ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}>{getStudentAnswerLabel(a.studentAnswer, a.type, a.options) || '未作答'}</span></p>
                <p><span className="text-slate-500">正确答案：</span><span className="text-green-700 font-medium">{getOptionLabel(a.correctAnswer, a.options)}</span></p>
              </div>
              {a.explanation && (
                <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-1 mb-1"><Lightbulb className="w-4 h-4 text-blue-600" /><span className="text-sm font-medium text-blue-800">解析</span></div>
                  <p className="text-sm text-slate-700">{a.explanation}</p>
                </div>
              )}
              {a.tags && a.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {a.tags.slice(0, 4).map((t, ti) => <span key={ti} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs">{t}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ======== 学生信息填写 ========
  if (viewMode === 'info' && quiz) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{quiz.title}</h2>
          <p className="text-slate-500 mb-6">{quiz.questions.length} 道题目 · {(quiz.timeLimit || quiz.duration || 25)} 分钟 · 及格分 {(quiz.passingScore || quiz.passScore || 60)}%</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">姓名 <span className="text-red-500">*</span></label>
              <input type="text" value={studentInfo.name} onChange={e => setStudentInfo({...studentInfo, name: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="请输入姓名" />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">学号 <span className="text-red-500">*</span></label>
              <input type="text" value={studentInfo.studentId} onChange={e => setStudentInfo({...studentInfo, studentId: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="请输入学号" />
              {formErrors.studentId && <p className="text-red-500 text-sm mt-1">{formErrors.studentId}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">班级 <span className="text-red-500">*</span></label>
              <input type="text" value={studentInfo.className} onChange={e => setStudentInfo({...studentInfo, className: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="如：2024级数据科学1班" />
              {formErrors.className && <p className="text-red-500 text-sm mt-1">{formErrors.className}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">学院/系 <span className="text-red-500">*</span></label>
              <input type="text" value={studentInfo.department} onChange={e => setStudentInfo({...studentInfo, department: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="如：信息工程学院" />
              {formErrors.department && <p className="text-red-500 text-sm mt-1">{formErrors.department}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">手机号 <span className="text-slate-400">(选填)</span></label>
              <input type="text" value={studentInfo.phone || ''} onChange={e => setStudentInfo({...studentInfo, phone: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="11位手机号" />
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">邮箱 <span className="text-slate-400">(选填)</span></label>
              <input type="text" value={studentInfo.email || ''} onChange={e => setStudentInfo({...studentInfo, email: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="example@mail.com" />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <label className="flex items-center gap-2 mt-4">
              <input type="checkbox" checked={agreedRules} onChange={e => setAgreedRules(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-slate-600">我已阅读并同意考试规则，确认以上信息真实有效</span>
            </label>
            {formErrors.rules && <p className="text-red-500 text-sm">{formErrors.rules}</p>}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={() => setViewMode('list')} className="flex-1 px-6 py-3 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">返回</button>
            <button onClick={startExam} className="flex-1 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600">确认信息，开始考试</button>
          </div>
        </div>
      </div>
    );
  }

  // ======== 考试结果 ========
  if (viewMode === 'result' && lastRecord) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${lastRecord.passed ? 'bg-green-100' : 'bg-red-100'}`}>
            {lastRecord.passed ? <Award className="w-12 h-12 text-green-600" /> : <XCircle className="w-12 h-12 text-red-600" />}
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">{lastRecord.passed ? '恭喜通过！' : '继续加油！'}</h2>
          <p className="text-slate-600 mb-2">{lastRecord.quizTitle}</p>
          <p className="text-slate-400 text-sm">{lastRecord.studentInfo.name} · {lastRecord.studentInfo.className}</p>
          <div className="text-6xl font-bold my-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{lastRecord.percentage}%</div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-3"><p className="text-2xl font-bold text-green-700">{lastRecord.correctCount}</p><p className="text-sm text-green-600">正确</p></div>
            <div className="bg-red-50 rounded-xl p-3"><p className="text-2xl font-bold text-red-700">{lastRecord.wrongCount}</p><p className="text-sm text-red-600">错误</p></div>
            <div className="bg-blue-50 rounded-xl p-3"><p className="text-2xl font-bold text-blue-700">{formatDuration(lastRecord.duration)}</p><p className="text-sm text-blue-600">用时</p></div>
          </div>
          {lastRecord.passed && <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-6 inline-block"><p className="text-yellow-700 font-medium">🎉 获得 100 积分奖励！</p></div>}
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setViewMode('list'); setSelectedQuizId(null); }} className="px-6 py-3 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">返回列表</button>
            <button onClick={() => { setDetailRecord(lastRecord); setShowWrongOnly(false); setViewMode('detail'); }} className="px-6 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"><FileText className="w-5 h-5" />查看详情</button>
          </div>
        </div>
      </div>
    );
  }

  // ======== 答题界面 ========
  if (viewMode === 'exam' && quiz) {
    const q = quiz.questions[currentQ];
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800">{quiz.title}</h2>
              <p className="text-slate-500">题目 {currentQ + 1} / {quiz.questions.length}</p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${timeLeft < 60 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
              <Clock className="w-5 h-5" />
              <span className="font-mono font-bold text-xl">{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-1">
            {quiz.questions.map((_, i) => (
              <button key={i} onClick={() => setCurrentQ(i)}
                className={`flex-1 h-2 rounded-full transition-all ${i === currentQ ? "bg-blue-500" : i < currentQ ? "bg-blue-300" : "bg-slate-200"}`} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-medium text-slate-800">{currentQ + 1}. {q.question}</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{q.points}分</span>
          </div>
          {q.type === 'single' && q.options && (
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => handleSingleAnswer(q.id, i.toString())}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selectedAnswers[q.id] === i.toString() ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full border border-slate-300 font-medium">{String.fromCharCode(65 + i)}</span>
                    <span>{opt}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
          {q.type === 'multiple' && q.options && (
            <div className="space-y-3">
              <p className="text-sm text-blue-600 mb-2">（多选题，可选择多个选项）</p>
              {q.options.map((opt, i) => {
                const selected = (multiAnswers[q.id] || []).includes(i.toString());
                return (
                  <button key={i} onClick={() => handleMultiAnswer(q.id, i.toString())}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full border font-medium ${selected ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-slate-300'}`}>{String.fromCharCode(65 + i)}</span>
                      <span>{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
          {q.type === 'truefalse' && (
            <div className="flex gap-4">
              {['正确', '错误'].map((label, i) => (
                <button key={i} onClick={() => handleSingleAnswer(q.id, i.toString())}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all text-center font-medium ${selectedAnswers[q.id] === i.toString() ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                  {label}
                </button>
              ))}
            </div>
          )}
          <div className="flex justify-between mt-8">
            <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0}
              className={`px-6 py-3 rounded-xl font-medium ${currentQ === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>上一题</button>
            {currentQ === quiz.questions.length - 1 ? (
              <button onClick={handleFinish} className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700">提交答卷</button>
            ) : (
              <button onClick={() => setCurrentQ(currentQ + 1)} className="px-6 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700">下一题</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ======== 测验列表 ========
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">测评中心</h1>
        <p className="text-slate-600 text-lg">检验学习成果，提升数据分析能力</p>
      </div>

      <div className="flex justify-center">
        <button onClick={() => setViewMode('history')}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md text-slate-700 hover:bg-slate-50 font-medium">
          <History className="w-5 h-5" /> 我的考试记录
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialQuizzes.map(q => {
          const c = courses.find(co => co.id === q.courseId);
          return (
            <div key={q.id} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{c?.title}</span>
                <div className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{q.timeLimit || q.duration || 25} 分钟</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{q.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{q.questions.length} 道题目 · 及格分 {q.passingScore || q.passScore || 60}%</p>
              <button onClick={() => { setSelectedQuizId(q.id); setStudentInfo({ name: '', studentId: '', className: '', department: '' }); setAgreedRules(false); setFormErrors({}); setViewMode('info'); }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-600 transition-all">
                <Play className="w-5 h-5" /> 开始测试
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
