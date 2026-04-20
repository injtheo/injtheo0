import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, BookOpen, Code2, Award, FileText, Play, Terminal } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Editor from '@monaco-editor/react';
import { useStore } from '../hooks/useStore';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [showSolution, setShowSolution] = useState(false);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const projects = useStore(state => state.projects);
  const user = useStore(state => state.user);
  const projectProgress = useStore(state => state.projectProgress);
  const updateProjectProgress = useStore(state => state.updateProjectProgress);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('运行中...');
    
    // 模拟代码运行
    setTimeout(() => {
      setOutput('代码执行成功！\n\n注意：这是一个模拟环境，实际代码不会真正执行。\n在真实环境中，你可以使用Python环境运行代码。');
      setIsRunning(false);
    }, 1000);
  };

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-4">项目不存在</p>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            返回项目列表
          </Link>
        </div>
      </div>
    );
  }

  const isCompleted = projectProgress.some(p => p.projectId === project.id && p.userId === user?.id && p.completed);

  const handleComplete = () => {
    updateProjectProgress(project.id, true);
  };

  const difficultyLabels = {
    1: '入门',
    2: '简单',
    3: '中等',
    4: '较难',
    5: '困难'
  };

  return (
    <div className="space-y-8">
      {/* 返回按钮 */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        返回项目列表
      </Link>

      {/* 项目头部 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  {difficultyLabels[project.difficulty]}
                </span>
                {isCompleted && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    已完成
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-slate-800">{project.title}</h1>
            </div>
            {!isCompleted && (
              <button
                onClick={handleComplete}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                标记完成
              </button>
            )}
          </div>
          <p className="text-lg text-slate-600">{project.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧内容 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 任务列表 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              任务步骤
            </h2>
            <div className="space-y-4">
              {project.tasks.map((task, index) => (
                <div key={task.id} className="border-l-4 border-blue-500 pl-6 py-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800">{task.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-3">{task.description}</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-slate-700 mb-2">实施步骤：</p>
                    <ul className="space-y-1">
                      {task.steps.map((step, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 代码编辑器 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-green-600" />
              代码编辑器
            </h2>
            <div className="space-y-4">
              <div className="h-96 border border-slate-200 rounded-lg overflow-hidden">
                <Editor
                  height="100%"
                  language="python"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  options={{
                    minimap: { enabled: true },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    tabSize: 4,
                    automaticLayout: true,
                  }}
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2 disabled:bg-green-400 disabled:cursor-not-allowed"
                >
                  <Play className="w-5 h-5" />
                  {isRunning ? '运行中...' : '运行代码'}
                </button>
                <button
                  onClick={() => setCode('')}
                  className="px-6 py-3 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
                >
                  清空代码
                </button>
              </div>
              {output && (
                <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">{output}</pre>
                </div>
              )}
            </div>
          </div>

          {/* 参考答案 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-600" />
                参考答案
              </h2>
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors"
              >
                {showSolution ? '隐藏答案' : '查看答案'}
              </button>
            </div>
            {showSolution && (
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                <div className="markdown-body prose prose-invert max-w-none p-6">
                  <ReactMarkdown>{project.solution}</ReactMarkdown>
                </div>
              </div>
            )}
            {!showSolution && (
              <div className="text-center py-12 text-slate-500">
                <Code2 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                <p>点击"查看答案"查看参考答案代码</p>
                <p className="text-sm mt-2">建议先自己尝试，再看答案哦</p>
              </div>
            )}
          </div>
        </div>

        {/* 右侧侧边栏 */}
        <div className="space-y-6">
          {/* 技能要求 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              技能要求
            </h3>
            <ul className="space-y-2">
              {project.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* 数据集说明 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              数据集说明
            </h3>
            <p className="text-slate-600 text-sm">{project.datasetDescription}</p>
          </div>

          {/* 学习提示 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">学习提示</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">💡</span>
                先理解任务要求，再动手实现
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">💡</span>
                可以参考相关课程的内容
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">💡</span>
                独立完成后再看参考答案
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">💡</span>
                完成后标记为已完成
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}