import { Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isCompleted?: boolean;
}

export default function ProjectCard({ project, isCompleted }: ProjectCardProps) {
  const difficultyColors = {
    1: 'bg-green-100 text-green-700',
    2: 'bg-yellow-100 text-yellow-700',
    3: 'bg-orange-100 text-orange-700',
    4: 'bg-red-100 text-red-700',
    5: 'bg-purple-100 text-purple-700'
  };

  const difficultyLabels = {
    1: '入门',
    2: '简单',
    3: '中等',
    4: '较难',
    5: '困难'
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {isCompleted && (
          <div className="absolute top-4 right-4">
            <div className="bg-green-500 text-white rounded-full p-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[project.difficulty]}`}>
            {difficultyLabels[project.difficulty]}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">技能要求：</p>
          <div className="flex flex-wrap gap-2">
            {project.requirements.slice(0, 2).map((req, i) => (
              <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                {req}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            开始项目
          </Link>
        </div>
      </div>
    </div>
  );
}