import { Link } from 'react-router-dom';
import { Clock, Users, Star, BarChart2 } from 'lucide-react';
import { Course } from '../types';
import { useStore } from '../hooks/useStore';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const progress = useStore(state => state.progress);
  const user = useStore(state => state.user);

  const courseProgress = progress.find(p => p.courseId === course.id && p.userId === user?.id);

  const difficultyLabels = ['入门', '初级', '中级', '高级', '专家'];
  const difficultyColors = ['bg-green-100 text-green-700', 'bg-blue-100 text-blue-700', 'bg-yellow-100 text-yellow-700', 'bg-orange-100 text-orange-700', 'bg-red-100 text-red-700'];

  return (
    <Link
      to={`/courses/${course.id}`}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[course.difficulty - 1]}`}>
            {difficultyLabels[course.difficulty - 1]}
          </span>
        </div>
        {courseProgress && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm">
            <div className="px-4 py-2">
              <div className="flex justify-between text-white text-sm mb-1">
                <span>学习进度</span>
                <span>{Math.round(courseProgress.percentage)}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${courseProgress.percentage}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {course.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.chapters.length} 章节</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>1,234</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>4.8</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
