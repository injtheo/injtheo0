import { Trophy, Star, Award, Calendar, Target, BookOpen, CheckCircle2, Compass } from 'lucide-react';
import { useStore } from '../hooks/useStore';

const iconMap: { [key: string]: any } = {
  star: Star,
  award: Award,
  'book-open': BookOpen,
  'check-circle': CheckCircle2,
  trophy: Trophy,
  compass: Compass,
  target: Target,
  calendar: Calendar
};

export default function Achievements() {
  const user = useStore(state => state.user);
  const badges = useStore(state => state.badges);
  const userBadges = useStore(state => state.userBadges);
  const progress = useStore(state => state.progress);
  const completedExercises = useStore(state => state.completedExercises);
  const quizResults = useStore(state => state.quizResults);
  const learningStreak = useStore(state => state.learningStreak);

  const userBadgeIds = userBadges.filter(ub => ub.userId === user?.id).map(ub => ub.badgeId);

  const stats = {
    totalBadges: badges.length,
    earnedBadges: userBadgeIds.length,
    completedChapters: progress.filter(p => p.userId === user?.id).reduce((sum, p) => sum + p.completedChapters.length, 0),
    completedExercises: completedExercises.length,
    passedQuizzes: Object.values(quizResults).filter(r => r.passed).length,
    learningStreak: learningStreak.count
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">成就中心</h1>
        <p className="text-slate-600 text-lg">每一份努力都值得被记录，每一次进步都值得庆祝</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{stats.earnedBadges}/{stats.totalBadges}</p>
          <p className="text-sm text-slate-500">徽章</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{stats.completedChapters}</p>
          <p className="text-sm text-slate-500">已学章节</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{stats.completedExercises}</p>
          <p className="text-sm text-slate-500">完成练习</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{stats.passedQuizzes}</p>
          <p className="text-sm text-slate-500">通过测评</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{stats.learningStreak}</p>
          <p className="text-sm text-slate-500">连续学习</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Star className="w-6 h-6 text-cyan-600" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{user?.points}</p>
          <p className="text-sm text-slate-500">总积分</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 mb-2">当前等级</p>
            <h2 className="text-4xl font-bold">Lv.{user?.level}</h2>
          </div>
          <div className="text-right">
            <p className="text-blue-100 mb-2">下一等级</p>
            <p className="text-lg">
              {user?.points} / {(user?.level || 1) * 500} 积分
            </p>
            <div className="w-48 bg-white/30 rounded-full h-3 mt-2">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${((user?.points || 0) % 500) / 5}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">徽章收藏</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => {
            const isEarned = userBadgeIds.includes(badge.id);
            const Icon = iconMap[badge.icon] || Trophy;

            return (
              <div
                key={badge.id}
                className={`bg-white rounded-2xl p-6 shadow-md transition-all duration-300 ${
                  isEarned ? 'hover:shadow-xl' : 'opacity-60 grayscale'
                }`}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  isEarned
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                    : 'bg-slate-200'
                }`}>
                  <Icon className={`w-10 h-10 ${isEarned ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 text-center mb-2">
                  {badge.name}
                </h3>
                <p className="text-sm text-slate-500 text-center mb-3">
                  {badge.description}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs text-slate-400">
                  <span className="bg-slate-100 px-2 py-1 rounded">
                    {badge.condition}
                  </span>
                </div>
                {isEarned && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">已获得</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
