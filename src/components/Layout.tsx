import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Award, CheckSquare, Trophy, Briefcase, FileText } from 'lucide-react';
import { useStore } from '../hooks/useStore';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const user = useStore(state => state.user);

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/courses', icon: BookOpen, label: '课程' },
    { path: '/projects', icon: Briefcase, label: '项目' },
    { path: '/practice', icon: CheckSquare, label: '练习' },
    { path: '/exam', icon: FileText, label: '考试' },
    { path: '/achievements', icon: Trophy, label: '成就' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">数</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                商务数据分析平台
              </span>
            </Link>

            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-slate-700">{user?.name}</p>
                <p className="text-xs text-slate-500">
                  等级 {user?.level} · {user?.points} 积分
                </p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {user?.name[0]}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-slate-500">
            <p>© 2024 商务数据分析在线教育平台 · 专为商务数据分析与应用专业学生打造</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
