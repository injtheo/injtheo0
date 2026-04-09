import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, CheckSquare, Trophy, Zap } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { useStore } from '../hooks/useStore';

export default function Home() {
  const courses = useStore(state => state.courses);
  const user = useStore(state => state.user);
  const userBadges = useStore(state => state.userBadges);
  const badges = useStore(state => state.badges);
  const progress = useStore(state => state.progress);

  const recentBadges = [...userBadges]
    .filter(ub => ub.userId === user?.id)
    .sort((a, b) => new Date(b.earnedAt).getTime() - new Date(a.earnedAt).getTime())
    .slice(0, 3)
    .map(ub => badges.find(b => b.id === ub.badgeId))
    .filter(Boolean);

  const stats = {
    completedChapters: progress
      .filter(p => p.userId === user?.id)
      .reduce((sum, p) => sum + p.completedChapters.length, 0),
    completedCourses: progress.filter(p => p.userId === user?.id && p.completed).length,
    totalBadges: userBadges.filter(ub => ub.userId === user?.id).length
  };

  const features = [
    {
      icon: BookOpen,
      title: '完整课程体系',
      description: '6门核心课程，从基础到实战，全面覆盖商务数据分析技能'
    },
    {
      icon: CheckSquare,
      title: '学练测一体化',
      description: '学习、练习、测评相结合，巩固所学知识，提升实践能力'
    },
    {
      icon: Trophy,
      title: '成就激励系统',
      description: '丰富的徽章和积分系统，让学习更有动力和成就感'
    },
    {
      icon: Zap,
      title: '互动式学习',
      description: '沉浸式学习体验，让数据分析学习不再枯燥'
    }
  ];

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            开启你的
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              数据分析学习之旅
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            专为商务数据分析与应用专业学生打造的互动式在线学习平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              开始学习
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{stats.completedChapters}</p>
              <p className="text-slate-500">已学章节</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{stats.completedCourses}</p>
              <p className="text-slate-500">完成课程</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Trophy className="w-7 h-7 text-yellow-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{stats.totalBadges}</p>
              <p className="text-slate-500">获得徽章</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">核心功能</h2>
            <p className="text-slate-500 mt-2">全方位提升你的数据分析能力</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.description}</p>
            </div>
          );
        })}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">推荐课程</h2>
            <p className="text-slate-500 mt-2">开始你的数据分析学习</p>
          </div>
          <Link
            to="/courses"
            className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
          >
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {recentBadges.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">最新成就</h2>
            <p className="text-slate-500 mt-2">你的努力值得被看见</p>
          </div>
          <Link
            to="/achievements"
            className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
          >
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentBadges.map((badge, index) => badge && (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{badge.name}</h3>
                  <p className="text-slate-600 text-sm">{badge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}
    </div>
  );
}
