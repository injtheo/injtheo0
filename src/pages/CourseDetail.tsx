import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, CheckCircle2, Clock, Users, Star } from 'lucide-react';
import { useStore } from '../hooks/useStore';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const courses = useStore(state => state.courses);
  const progress = useStore(state => state.progress);
  const user = useStore(state => state.user);
  const setCurrentCourse = useStore(state => state.setCurrentCourse);

  const course = courses.find(c => c.id === id);
  const courseProgress = progress.find(p => p.courseId === id && p.userId === user?.id);

  if (!course) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-slate-700">课程未找到</h2>
        <Link to="/courses" className="text-blue-600 hover:underline mt-4 inline-block">
          返回课程中心
        </Link>
      </div>
    );
  }

  const difficultyLabels = ['入门', '初级', '中级', '高级', '专家'];

  return (
    <div className="space-y-8">
      <Link
        to="/courses"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800"
      >
        <ArrowLeft className="w-5 h-5" />
        返回课程中心
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            {courseProgress && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex justify-between text-white mb-2">
                  <span className="font-medium">学习进度</span>
                  <span className="font-bold">{Math.round(courseProgress.percentage)}%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                    style={{ width: `${courseProgress.percentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {course.category}
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {difficultyLabels[course.difficulty - 1]}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-slate-600">{course.description}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-slate-800 mb-6">课程章节</h2>
            <div className="space-y-4">
              {course.chapters.map((chapter, index) => {
                const isCompleted = courseProgress?.completedChapters.includes(chapter.id);
                return (
                  <div
                    key={chapter.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      isCompleted
                        ? 'border-green-200 bg-green-50'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${isCompleted ? 'text-green-700' : 'text-slate-800'}`}>
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {chapter.exercises.length} 道练习题
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
            <Link
              to={`/learn/${course.id}/0`}
              onClick={() => setCurrentCourse(course)}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              {courseProgress ? '继续学习' : '开始学习'}
            </Link>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>章节数</span>
                </div>
                <span className="font-bold text-slate-800">{course.chapters.length}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>学习者</span>
                </div>
                <span className="font-bold text-slate-800">1,234</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>评分</span>
                </div>
                <span className="font-bold text-slate-800">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
