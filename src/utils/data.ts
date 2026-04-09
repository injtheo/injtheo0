import type { Course, Badge, Quiz } from '../types';

export const initialCourses: Course[] = [
  {
    id: 'course-1',
    title: '数据分析基础',
    description: '掌握数据分析的核心概念、方法和工具，从数据收集到可视化呈现的完整流程。',
    category: '基础课程',
    difficulty: 1,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20concepts%20and%20charts%20professional%20business%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-1-1',
        title: '数据分析概述',
        content: '# 数据分析概述\n\n数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，将它们加以汇总和理解并消化，以求最大化地开发数据的功能，发挥数据的作用。\n\n## 数据分析的目的\n\n- 描述性分析：发生了什么？\n- 诊断性分析：为什么会发生？\n- 预测性分析：将会发生什么？\n- 规范性分析：应该怎么做？\n\n## 数据分析流程\n\n1. 数据收集\n2. 数据清洗\n3. 数据探索\n4. 数据分析\n5. 数据可视化\n6. 结果呈现',
        exercises: [
          {
            id: 'ex-1-1-1',
            question: '数据分析的主要目的包括哪些？（多选）',
            type: 'choice',
            options: ['描述性分析', '诊断性分析', '预测性分析', '规范性分析'],
            answer: '0,1,2,3',
            points: 10
          }
        ]
      }
    ]
  }
];

export const initialBadges: Badge[] = [
  {
    id: 'badge-1',
    name: '初学者',
    description: '完成第一个课程章节',
    icon: 'star',
    condition: '完成1个章节'
  }
];

export const initialQuizzes: Quiz[] = [
  {
    id: 'quiz-1',
    courseId: 'course-1',
    title: '数据分析基础测试',
    duration: 30,
    passScore: 60,
    questions: [
      {
        id: 'q1',
        question: '数据分析的第一步通常是什么？',
        type: 'choice',
        options: ['数据可视化', '数据收集', '数据建模', '报告撰写'],
        answer: '1',
        points: 20
      }
    ]
  }
];
