import { useState } from 'react';
import { BookOpen, Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { useStore } from '../hooks/useStore';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);
  const projects = useStore(state => state.projects);
  const user = useStore(state => state.user);
  const projectProgress = useStore(state => state.projectProgress);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const difficultyMatch = !selectedDifficulty || project.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const isProjectCompleted = (projectId: string) => {
    return projectProgress.some(p => p.projectId === projectId && p.userId === user?.id && p.completed);
  };

  const completedCount = projectProgress.filter(p => p.userId === user?.id && p.completed).length;

  return (
    <div className="space-y-8">
      {/* 头部区域 */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">实战训练</h1>
          <p className="text-xl text-blue-100 mb-6">
            通过真实项目实践，提升你的数据分析技能。10个实战项目，从入门到精通。
          </p>
          <div className="flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold">{completedCount}</p>
              <p className="text-blue-200">已完成项目</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{projects.length}</p>
              <p className="text-blue-200">总项目数</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{Math.round((completedCount / projects.length) * 100)}%</p>
              <p className="text-blue-200">完成进度</p>
            </div>
          </div>
        </div>
      </div>

      {/* 筛选区域 */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              类别
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category === 'all' ? '全部' : category}
                </button>
              ))}
            </div>
          </div>
          <div className="min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              难度
            </label>
            <div className="flex flex-wrap gap-2">
              {[null, 1, 2, 3].map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedDifficulty === diff
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {diff === null ? '全部' : diff === 1 ? '入门' : diff === 2 ? '简单' : '中等'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 项目网格 */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            项目列表 ({filteredProjects.length})
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isCompleted={isProjectCompleted(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}