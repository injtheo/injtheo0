import type { Course, Badge, Quiz, Project } from '../types';

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
        title: '数据分析概述与流程',
        content: '# 数据分析概述\n\n数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，将它们加以汇总和理解并消化，以求最大化地开发数据的功能，发挥数据的作用。\n\n## 数据分析的目的\n\n- 描述性分析：发生了什么？\n- 诊断性分析：为什么会发生？\n- 预测性分析：将会发生什么？\n- 规范性分析：应该怎么做？\n\n## 数据分析流程\n\n1. 问题定义\n2. 数据收集\n3. 数据清洗\n4. 数据探索\n5. 数据建模\n6. 数据可视化\n7. 结果呈现',
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
      },
      {
        id: 'chapter-1-2',
        title: '业务理解与问题定义',
        content: '# 业务理解与问题定义\n\n## 业务需求转化\n\n如何将模糊的业务需求（如"提升用户留存"）转化为清晰、可分析的数据问题？\n\n- 明确业务目标\n- 识别关键指标\n- 定义分析范围\n- 确定数据需求\n\n## 案例练习\n\n通过实际业务场景的问题拆解练习，学习使用MECE原则（相互独立，完全穷尽）进行问题分析。',
        exercises: [
          {
            id: 'ex-1-2-1',
            question: '将"提升用户留存"转化为可分析的数据问题，以下哪个是合适的分析角度？',
            type: 'choice',
            options: ['分析不同用户群体的留存率差异', '直接增加用户奖励', '忽略数据直接制定策略', '只关注新用户'],
            answer: '0',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: 'Excel数据处理',
    description: '精通Excel这一最普及的数据处理工具，实现高效的数据操作、分析与初步可视化。',
    category: '工具课程',
    difficulty: 1,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=excel%20spreadsheet%20with%20charts%20and%20data%20professional%20business%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-2-1',
        title: 'Excel高效操作与数据规范',
        content: '# Excel高效操作与数据规范\n\n## 工作表与单元格操作\n\n- 工作表管理：创建、重命名、移动、隐藏\n- 单元格高级操作：合并、拆分、冻结窗格\n- 视图管理：缩放、拆分窗口、并排查看\n\n## 数据输入规范\n\n- 数据有效性设置\n- 下拉列表创建\n- 输入限制和提示\n- 自动填充技巧\n\n## 数据导入\n\n- 从文本文件导入\n- 从网页获取数据\n- 从数据库导入\n- 数据连接管理',
        exercises: [
          {
            id: 'ex-2-1-1',
            question: '如何在Excel中创建下拉列表？',
            type: 'choice',
            options: ['使用数据有效性', '手动输入', '使用函数', '使用宏'],
            answer: '0',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2-2',
        title: '核心数据处理功能',
        content: '# 核心数据处理功能\n\n## 数据整理\n\n- 排序：多条件排序、自定义排序\n- 筛选：自动筛选、高级筛选\n- 删除重复项\n- 分列功能\n\n## 核心函数\n\n- 查找函数：VLOOKUP、XLOOKUP、INDEX/MATCH\n- 统计函数：SUMIFS、COUNTIFS、AVERAGEIFS\n- 逻辑函数：IF、IFERROR、AND、OR\n- 文本函数：TEXT、LEFT、RIGHT、MID\n- 日期函数：TODAY、NOW、DATEDIF\n\n## 名称定义与动态引用\n\n- 定义名称的方法\n- 名称的使用场景\n- 动态范围的创建',
        exercises: [
          {
            id: 'ex-2-2-1',
            question: '要根据条件求和，应该使用哪个函数？',
            type: 'choice',
            options: ['SUM', 'SUMIF', 'SUMIFS', 'COUNTIFS'],
            answer: '2',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Python数据分析',
    description: '掌握使用Python（Pandas库）进行数据操控的核心能力，处理更复杂、更大规模的数据。',
    category: '编程课程',
    difficulty: 2,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20programming%20code%20with%20data%20visualization%20charts%20professional&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-3-1',
        title: 'Python与数据分析环境',
        content: '# Python与数据分析环境\n\n## Python基础语法\n\n- 变量和数据类型\n- 数据结构：列表、字典、元组、集合\n- 控制流程：if/else、for循环、while循环\n- 函数定义和使用\n\n## 开发环境搭建\n\n- Anaconda安装和配置\n- Jupyter Notebook/Lab使用\n- VS Code配置\n- 包管理：pip和conda\n\n## AI协作工具\n\n- IDE中使用Copilot\n- 与ChatGPT协同编写代码\n- 代码优化和调试技巧',
        exercises: [
          {
            id: 'ex-3-1-1',
            question: 'Python中用于存储键值对的数据结构是？',
            type: 'choice',
            options: ['列表', '字典', '元组', '集合'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3-2',
        title: 'Pandas数据结构与数据读写',
        content: '# Pandas数据结构与数据读写\n\n## 核心数据结构\n\n- Series：一维标签数组\n- DataFrame：二维表格结构\n- Index：索引对象\n- 数据类型：数值、文本、日期等\n\n## 数据I/O\n\n- 读取CSV文件\n- 读取Excel文件\n- 读取JSON文件\n- 读取HTML表格\n- 读取SQL数据库\n- 数据导出',
        exercises: [
          {
            id: 'ex-3-2-1',
            question: 'Pandas中用于读取CSV文件的函数是？',
            type: 'choice',
            options: ['read_csv()', 'read_excel()', 'read_json()', 'read_sql()'],
            answer: '0',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3-3',
        title: '数据清洗与预处理',
        content: '# 数据清洗与预处理\n\n## 缺失值处理\n\n- 识别缺失值：isna()\n- 删除缺失值：dropna()\n- 填充缺失值：fillna()\n\n## 重复值处理\n\n- 检测重复值：duplicated()\n- 删除重复值：drop_duplicates()\n\n## 数据类型转换\n\n- astype()方法\n- to_datetime()函数\n- 文本到数值的转换\n\n## 字符串处理\n\n- str属性的使用\n- 字符串方法：split、replace、strip等\n- 正则表达式应用',
        exercises: [
          {
            id: 'ex-3-3-1',
            question: 'Pandas中用于检测重复值的方法是？',
            type: 'choice',
            options: ['isna()', 'duplicated()', 'drop_duplicates()', 'fillna()'],
            answer: '1',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    title: '数据可视化原理',
    description: '掌握可视化设计原则，并能用多种工具（Python、Excel、BI）有效传达数据洞察。',
    category: '技能课程',
    difficulty: 2,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20data%20visualization%20dashboards%20charts%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-4-1',
        title: '可视化设计原则',
        content: '# 可视化设计原则\n\n## 视觉编码\n\n- 位置编码\n- 长度编码\n- 颜色编码\n- 形状编码\n- 大小编码\n\n## 图表选择指南\n\n- 比较数据：柱状图、条形图\n- 趋势分析：折线图\n- 占比分析：饼图、环形图\n- 分布分析：直方图、散点图\n- 关系分析：散点图、热力图\n\n## 避免误导\n\n- 图表扭曲\n- 尺度误导\n- 过度装饰\n- 信息过载\n\n## 设计原则\n\n- 简洁性\n- 准确性\n- 一致性\n- 可读性',
        exercises: [
          {
            id: 'ex-4-1-1',
            question: '展示不同类别之间的比较，最适合使用哪种图表？',
            type: 'choice',
            options: ['折线图', '柱状图', '饼图', '散点图'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-4-2',
        title: 'Python可视化（Matplotlib & Seaborn）',
        content: '# Python可视化（Matplotlib & Seaborn）\n\n## Matplotlib基础\n\n- 图形构成：Figure、Axes\n- 基本图表：线图、散点图、柱状图\n- 图表元素：标题、标签、图例\n- 样式设置：颜色、线型、标记\n\n## Seaborn高级统计绘图\n\n- 分布图：distplot、kdeplot\n- 关系图：relplot、scatterplot\n- 分类图：catplot、boxplot\n- 热力图：heatmap\n- 配对图：pairplot\n\n## Pandas内置绘图\n\n- DataFrame.plot()方法\n- 快速数据探索\n- 常见图表类型',
        exercises: [
          {
            id: 'ex-4-2-1',
            question: 'Seaborn中用于绘制热力图的函数是？',
            type: 'choice',
            options: ['heatmap()', 'scatterplot()', 'boxplot()', 'pairplot()'],
            answer: '0',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    title: '商业智能与报表',
    description: '构建可复用、自动化的数据报表系统，实现数据驱动的日常决策支持。',
    category: '实战课程',
    difficulty: 3,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20intelligence%20dashboard%20analytics%20report%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-5-1',
        title: 'BI系统概念与架构',
        content: '# BI系统概念与架构\n\n## BI系统概述\n\n- 商业智能的定义和价值\n- 传统BI vs. 敏捷BI\n- 现代BI平台的核心特性\n\n## BI架构组成\n\n- 数据仓库/数据湖\n- ETL流程\n- 数据模型\n- 报表和仪表板\n- 数据分析工具\n\n## 部署模式\n\n- 本地部署\n- 云端部署\n- 混合部署\n\n## 选型考虑因素\n\n- 功能需求\n- 性能要求\n- 成本预算\n- 技术支持',
        exercises: [
          {
            id: 'ex-5-1-1',
            question: '传统BI与敏捷BI的主要区别在于？',
            type: 'choice',
            options: ['价格', '部署方式', '响应速度和灵活性', '数据存储方式'],
            answer: '2',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-5-2',
        title: '数据建模与DAX/Power Pivot',
        content: '# 数据建模与DAX/Power Pivot\n\n## 数据模型设计\n\n- 星型模型\n- 雪花模型\n- 表间关系建立\n- cardinality（基数）关系\n\n## DAX语言基础\n\n- 计算列 vs. 度量值\n- 上下文概念\n- 迭代函数\n- 时间智能函数\n\n## 核心DAX函数\n\n- CALCULATE：上下文修改\n- FILTER：条件过滤\n- ALL：清除上下文\n- SUMX/COUNTX：迭代计算\n- 时间智能：TOTALYTD、SAMEPERIODLASTYEAR',
        exercises: [
          {
            id: 'ex-5-2-1',
            question: 'DAX中用于修改上下文的核心函数是？',
            type: 'choice',
            options: ['SUM', 'CALCULATE', 'FILTER', 'ALL'],
            answer: '1',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    title: '商务数据分析实战',
    description: '整合前5门课程技能，在真实的商业场景中解决复杂问题，并量化分析价值。',
    category: '实战课程',
    difficulty: 3,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20analytics%20case%20study%20meeting%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-6-1',
        title: '商业模式与指标体系',
        content: '# 商业模式与指标体系\n\n## 六大商业模式\n\n- 电子商务：GMV、转化率、客单价\n- SaaS：MRR、churn率、LTV\n- 免费移动应用：DAU、留存率、ARPU\n- 媒体网站：PV、UV、广告收入\n- 用户生成内容：内容量、互动率、用户增长\n- 双边市场：供给端和需求端指标\n\n## 关键指标（OMTM）\n\n- 识别第一关键指标\n- 指标优先级排序\n- 指标之间的关联\n- 指标监控仪表盘',
        exercises: [
          {
            id: 'ex-6-1-1',
            question: 'SaaS商业模式的核心指标包括哪些？（多选）',
            type: 'choice',
            options: ['MRR', 'churn率', 'LTV', 'GMV'],
            answer: '0,1,2',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-6-2',
        title: '全流程综合案例实战',
        content: '# 全流程综合案例实战\n\n## 销售与客户分析\n\n- 客户分群（RFM模型）\n- 销售趋势预测\n- 产品关联分析\n- 客户生命周期价值\n\n## 运营与用户体验分析\n\n- 漏斗转化分析\n- 留存分析\n- A/B测试\n- 用户行为路径分析',
        exercises: [
          {
            id: 'ex-6-2-1',
            question: 'RFM模型用于什么分析？',
            type: 'choice',
            options: ['销售预测', '客户分群', '库存优化', '市场分析'],
            answer: '1',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-7',
    title: '统计分析基础',
    description: '掌握统计学基础，包括描述统计、推断统计，以及在数据分析中的应用。',
    category: '理论课程',
    difficulty: 2,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=statistics%20charts%20probability%20distribution%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-7-1',
        title: '描述统计与概率基础',
        content: '# 描述统计与概率基础\n\n## 描述统计\n\n- 集中趋势：均值、中位数、众数\n- 离散程度：方差、标准差、四分位数\n- 分布形态：偏度、峰度\n\n## 概率基础\n\n- 概率定义\n- 概率分布\n- 正态分布\n- 中心极限定理',
        exercises: [
          {
            id: 'ex-7-1-1',
            question: '以下哪个是衡量数据离散程度的指标？',
            type: 'choice',
            options: ['均值', '中位数', '标准差', '众数'],
            answer: '2',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-7-2',
        title: '假设检验与置信区间',
        content: '# 假设检验与置信区间\n\n## 假设检验\n\n- 原假设与备择假设\n- 显著性水平\n- p值\n- 检验类型：t检验、卡方检验、ANOVA\n\n## 置信区间\n\n- 置信区间定义\n- 置信水平\n- 置信区间计算',
        exercises: [
          {
            id: 'ex-7-2-1',
            question: '在假设检验中，p值小于显著性水平通常表示？',
            type: 'choice',
            options: ['接受原假设', '拒绝原假设', '数据无效', '需要更多数据'],
            answer: '1',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-8',
    title: '机器学习入门',
    description: '学习机器学习基础，包括监督学习、无监督学习，以及常见算法的应用。',
    category: '进阶课程',
    difficulty: 3,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=machine%20learning%20algorithms%20neural%20networks%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-8-1',
        title: '机器学习基础概念',
        content: '# 机器学习基础概念\n\n## 机器学习类型\n\n- 监督学习：分类、回归\n- 无监督学习：聚类、降维\n- 强化学习\n\n## 模型评估\n\n- 训练集、验证集、测试集\n- 评估指标：准确率、精确率、召回率、F1-score\n- 过拟合与欠拟合',
        exercises: [
          {
            id: 'ex-8-1-1',
            question: '以下哪个属于监督学习任务？',
            type: 'choice',
            options: ['聚类', '分类', '降维', '关联规则挖掘'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-8-2',
        title: '常用算法与应用',
        content: '# 常用算法与应用\n\n## 分类算法\n\n- 逻辑回归\n- 决策树\n- 随机森林\n- 支持向量机\n- K近邻\n\n## 聚类算法\n\n- K-means\n- 层次聚类\n- DBSCAN\n\n## 降维算法\n\n- 主成分分析（PCA）\n- t-SNE',
        exercises: [
          {
            id: 'ex-8-2-1',
            question: 'K-means算法属于什么类型的机器学习算法？',
            type: 'choice',
            options: ['监督学习', '无监督学习', '强化学习', '深度学习'],
            answer: '1',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-9',
    title: 'SQL数据库操作',
    description: '掌握SQL语言，从基础查询到高级操作，能够高效地从数据库中获取和处理数据。',
    category: '工具课程',
    difficulty: 2,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20queries%20tables%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-9-1',
        title: 'SQL基础查询',
        content: '# SQL基础查询\n\n## 基本语法\n\n- SELECT、FROM、WHERE\n- 排序：ORDER BY\n- 过滤：WHERE、BETWEEN、IN、LIKE\n- 聚合函数：COUNT、SUM、AVG、MAX、MIN\n- 分组：GROUP BY、HAVING\n\n## 连接操作\n\n- 内连接\n- 左连接\n- 右连接\n- 全连接',
        exercises: [
          {
            id: 'ex-9-1-1',
            question: 'SQL中用于分组的子句是？',
            type: 'choice',
            options: ['WHERE', 'GROUP BY', 'ORDER BY', 'HAVING'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-9-2',
        title: 'SQL高级操作',
        content: '# SQL高级操作\n\n## 子查询\n\n- 子查询类型\n- 相关子查询\n- 嵌套子查询\n\n## 窗口函数\n\n- ROW_NUMBER\n- RANK、DENSE_RANK\n- 聚合窗口函数\n- 移动窗口函数\n\n## 性能优化\n\n- 索引使用\n- 查询优化\n- 执行计划',
        exercises: [
          {
            id: 'ex-9-2-1',
            question: '以下哪个窗口函数用于生成唯一的序号？',
            type: 'choice',
            options: ['RANK', 'DENSE_RANK', 'ROW_NUMBER', 'NTILE'],
            answer: '2',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-10',
    title: '数据产品思维',
    description: '培养数据产品思维，学习如何将数据分析转化为有价值的数据产品。',
    category: '综合课程',
    difficulty: 3,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20product%20dashboard%20analytics%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-10-1',
        title: '数据产品设计',
        content: '# 数据产品设计\n\n## 数据产品类型\n\n- 分析仪表板\n- 数据报告\n- 预测系统\n- 推荐系统\n- A/B测试平台\n\n## 设计原则\n\n- 用户导向\n- 简单易用\n- 可扩展\n- 可维护',
        exercises: [
          {
            id: 'ex-10-1-1',
            question: '数据产品设计的核心原则是？',
            type: 'choice',
            options: ['技术领先', '用户导向', '功能复杂', '成本最低'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-10-2',
        title: '数据产品交付与迭代',
        content: '# 数据产品交付与迭代\n\n## 开发流程\n\n- 需求分析\n- 原型设计\n- 数据准备\n- 开发实现\n- 测试上线\n\n## 迭代优化\n\n- 用户反馈收集\n- 数据分析\n- A/B测试\n- 持续改进',
        exercises: [
          {
            id: 'ex-10-2-1',
            question: '数据产品迭代的核心依据是？',
            type: 'choice',
            options: ['技术趋势', '用户反馈和数据', '竞争对手', '领导意见'],
            answer: '1',
            points: 10
          }
        ]
      }
    ]
  }
];

export const initialProjects: Project[] = [
  {
    id: 'project-1',
    title: '销售数据清洗与基础统计',
    description: '学习如何清洗销售数据，进行基础的统计分析，包括按城市统计销售额、计算总金额等。',
    difficulty: 1,
    category: '数据清洗',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sales%20data%20cleaning%20statistics%20professional%20style&image_size=square_hd',
    requirements: ['Excel或Python基础', '数据清洗概念'],
    datasetDescription: '包含销售记录的数据集，包括日期、城市、产品、数量、价格等字段。',
    tasks: [
      {
        id: 'task-1-1',
        title: '数据导入与检查',
        description: '读取CSV文件，检查数据完整性',
        steps: ['读取CSV文件', '检查数据完整性', '填充缺失城市']
      },
      {
        id: 'task-1-2',
        title: '数据清洗',
        description: '处理异常值和缺失值',
        steps: ['删除数量≤0的记录', '处理异常价格', '填充缺失值']
      },
      {
        id: 'task-1-3',
        title: '基础统计分析',
        description: '计算销售统计指标',
        steps: ['计算总金额', '按城市统计销售额', '生成统计报告']
      }
    ],
    solution: '# 项目1解决方案\n\n## 数据导入\n```python\nimport pandas as pd\n\ndf = pd.read_csv(\'sales_data.csv\')\nprint(df.head())\n```\n\n## 数据清洗\n```python\n# 删除数量≤0的记录\ndf = df[df[\'quantity\'] > 0]\n\n# 填充缺失城市\ndf[\'city\'] = df[\'city\'].fillna(\'Unknown\')\n\n# 计算总金额\ndf[\'total_amount\'] = df[\'quantity\'] * df[\'price\']\n```\n\n## 统计分析\n```python\n# 按城市统计销售额\ncity_sales = df.groupby(\'city\')[\'total_amount\'].sum().sort_values(ascending=False)\nprint(city_sales)\n```'
  },
  {
    id: 'project-2',
    title: '用户行为日志分析',
    description: '分析用户行为日志，包括时间戳处理、按小时统计浏览、购物车未支付检测等。',
    difficulty: 1,
    category: '用户行为',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20behavior%20analytics%20log%20analysis%20professional%20style&image_size=square_hd',
    requirements: ['时间序列数据处理', '数据探索分析'],
    datasetDescription: '用户行为日志数据集，包含用户ID、时间戳、行为类型、页面ID等字段。',
    tasks: [
      {
        id: 'task-2-1',
        title: '时间戳处理',
        description: '解析和处理时间戳数据',
        steps: ['将字符串时间转换为datetime', '提取小时、日期等字段']
      },
      {
        id: 'task-2-2',
        title: '用户行为分析',
        description: '统计用户行为模式',
        steps: ['按小时统计浏览量', '分析用户活跃时段', '统计不同行为类型']
      },
      {
        id: 'task-2-3',
        title: '购物车分析',
        description: '分析购物车未支付情况',
        steps: ['筛选购物车未支付记录', '计算未支付率', '分析未支付原因']
      }
    ],
    solution: '# 项目2解决方案\n\n## 时间戳处理\n```python\nimport pandas as pd\n\ndf = pd.read_csv(\'user_behavior.csv\')\ndf[\'timestamp\'] = pd.to_datetime(df[\'timestamp\'])\ndf[\'hour\'] = df[\'timestamp\'].dt.hour\n```\n\n## 用户行为分析\n```python\n# 按小时统计浏览量\nhourly_views = df[df[\'behavior_type\'] == \'view\'].groupby(\'hour\').size()\n\n# 用户总停留与页面数\nuser_stats = df.groupby(\'user_id\').agg({\n    \'timestamp\': [\'min\', \'max\'],\n    \'page_id\': \'nunique\'\n})\n```\n\n## 购物车分析\n```python\n# 购物车未支付检测\ncart_not_paid = df[(df[\'behavior_type\'] == \'cart\') & \
                   (~df[\'user_id\'].isin(df[df[\'behavior_type\'] == \'buy\'][\'user_id\']))]\n\nnot_paid_rate = len(cart_not_paid) / len(df[df[\'behavior_type\'] == \'cart\'])\nprint(f\'购物车未支付率: {not_paid_rate:.2%}\')\n```'
  },
  {
    id: 'project-3',
    title: '购物车分析',
    description: '深入分析购物车数据，包括商品频次统计、合并购物篮、共现订单检测等。',
    difficulty: 2,
    category: '商品分析',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cart%20analysis%20market%20basket%20analytics%20professional%20style&image_size=square_hd',
    requirements: ['数据透视表', '关联规则基础'],
    datasetDescription: '购物车数据，包含订单ID、商品ID、商品名称、数量、价格等字段。',
    tasks: [
      {
        id: 'task-3-1',
        title: '商品频次统计',
        description: '统计商品出现频率',
        steps: ['统计每个商品的出现次数', '绘制商品频次分布图']
      },
      {
        id: 'task-3-2',
        title: '购物篮合并',
        description: '按订单合并商品',
        steps: ['按订单ID分组', '合并商品列表', '生成购物篮数据']
      },
      {
        id: 'task-3-3',
        title: '共现订单检测',
        description: '分析商品共现关系',
        steps: ['生成共现矩阵', '计算商品组合频次', '识别热门商品组合']
      }
    ],
    solution: '# 项目3解决方案\n\n## 商品频次统计\n```python\nimport pandas as pd\n\ndf = pd.read_csv(\'cart_data.csv\')\nproduct_freq = df[\'product_name\'].value_counts()\nprint(product_freq.head(10))\n```\n\n## 购物篮合并\n```python\n# 按订单合并商品\nbaskets = df.groupby(\'order_id\')[\'product_name\'].apply(list)\nprint(baskets.head())\n```\n\n## 共现订单检测\n```python\nfrom itertools import combinations\nfrom collections import defaultdict\n\ncooccur = defaultdict(int)\nfor basket in baskets:\n    if len(basket) >= 2:\n        for pair in combinations(sorted(basket), 2):\n            cooccur[pair] += 1\n\ncooccur_df = pd.DataFrame(list(cooccur.items()), columns=[\'pair\', \'count\'])\ncooccur_df = cooccur_df.sort_values(\'count\', ascending=False)\nprint(cooccur_df.head(10))\n```'
  },
  {
    id: 'project-4',
    title: 'RFM客户价值分析',
    description: '使用RFM模型对客户进行分群，包括计算R、F、M值、分箱评分、标记客户类型等。',
    difficulty: 2,
    category: '客户分群',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=RFM%20analysis%20customer%20segmentation%20professional%20style&image_size=square_hd',
    requirements: ['客户分群概念', '数据透视表'],
    datasetDescription: '客户购买记录，包含客户ID、购买日期、金额、订单ID等字段。',
    tasks: [
      {
        id: 'task-4-1',
        title: '计算RFM值',
        description: '计算最近购买、购买频率、购买金额',
        steps: ['计算Recency：最近一次购买天数', '计算Frequency：购买次数', '计算Monetary：总购买金额']
      },
      {
        id: 'task-4-2',
        title: '分箱评分',
        description: '对RFM值进行分箱和评分',
        steps: ['将RFM值分别分为5个等级', '计算RFM综合得分', '生成评分分布']
      },
      {
        id: 'task-4-3',
        title: '客户类型标记',
        description: '根据RFM标记客户类型',
        steps: ['定义客户类型规则', '标记每个客户类型', '统计各类型客户数量']
      }
    ],
    solution: '# 项目4解决方案\n\n## 计算RFM值\n```python\nimport pandas as pd\nfrom datetime import datetime\n\ndf = pd.read_csv(\'customer_purchase.csv\')\ndf[\'purchase_date\'] = pd.to_datetime(df[\'purchase_date\'])\nreference_date = df[\'purchase_date\'].max() + pd.Timedelta(days=1)\n\nrfm = df.groupby(\'customer_id\').agg(\n    Recency=(\'purchase_date\', lambda x: (reference_date - x.max()).days),\n    Frequency=(\'order_id\', \'nunique\'),\n    Monetary=(\'amount\', \'sum\')\n).reset_index()\n```\n\n## 分箱评分\n```python\n# RFM分箱\nrfm[\'R_score\'] = pd.qcut(rfm[\'Recency\'], 5, labels=[5,4,3,2,1])\nrfm[\'F_score\'] = pd.qcut(rfm[\'Frequency\'], 5, labels=[1,2,3,4,5])\nrfm[\'M_score\'] = pd.qcut(rfm[\'Monetary\'], 5, labels=[1,2,3,4,5])\n\n# 计算综合得分\nrfm[\'RFM_score\'] = rfm[\'R_score\'].astype(str) + rfm[\'F_score\'].astype(str) + rfm[\'M_score\'].astype(str)\n```\n\n## 客户类型标记\n```python\n# 标记客户类型\ndef segment_customer(row):\n    if row[\'R_score\'] >= 4 and row[\'F_score\'] >=4 and row[\'M_score\'] >=4:\n        return \'VIP客户\'\n    elif row[\'R_score\'] >= 3 and row[\'F_score\'] >=3:\n        return \'活跃客户\'\n    elif row[\'R_score\'] <= 2:\n        return \'流失客户\'\n    else:\n        return \'普通客户\'\n\nrfm[\'customer_segment\'] = rfm.apply(segment_customer, axis=1)\nprint(rfm[\'customer_segment\'].value_counts())\n```'
  },
  {
    id: 'project-5',
    title: '时间序列趋势分析',
    description: '分析时间序列数据的趋势，包括日期重采样、移动平均、高峰日标记等。',
    difficulty: 2,
    category: '时间序列',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=time%20series%20analysis%20trend%20forecast%20professional%20style&image_size=square_hd',
    requirements: ['时间序列数据处理', '移动平均'],
    datasetDescription: '每日销售数据，包含日期、销售额、订单数等字段。',
    tasks: [
      {
        id: 'task-5-1',
        title: '日期重采样',
        description: '按不同时间粒度重采样',
        steps: ['将数据转换为时间序列', '按周、月重采样', '计算周期销售额']
      },
      {
        id: 'task-5-2',
        title: '移动平均计算',
        description: '计算移动平均平滑趋势',
        steps: ['计算7天移动平均', '计算30天移动平均', '绘制趋势对比图']
      },
      {
        id: 'task-5-3',
        title: '高峰日分析',
        description: '识别和分析高峰日',
        steps: ['标记销售额高于阈值的日期', '分析高峰日特征', '统计高峰日分布']
      }
    ],
    solution: '# 项目5解决方案\n\n## 日期重采样\n```python\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv(\'daily_sales.csv\')\ndf[\'date\'] = pd.to_datetime(df[\'date\'])\ndf = df.set_index(\'date\')\n\n# 周和月重采样\nweekly_sales = df[\'sales\'].resample(\'W\').sum()\nmonthly_sales = df[\'sales\'].resample(\'M\').sum()\n```\n\n## 移动平均\n```python\n# 计算移动平均\ndf[\'MA7\'] = df[\'sales\'].rolling(window=7).mean()\ndf[\'MA30\'] = df[\'sales\'].rolling(window=30).mean()\n\n# 绘制趋势图\nplt.figure(figsize=(12,6))\nplt.plot(df[\'sales\'], label=\'每日销售\', alpha=0.5)\nplt.plot(df[\'MA7\'], label=\'7日移动平均\')\nplt.plot(df[\'MA30\'], label=\'30日移动平均\')\nplt.legend()\nplt.show()\n```\n\n## 高峰日分析\n```python\n# 高峰日标记\nmean_sales = df[\'sales\'].mean()\nstd_sales = df[\'sales\'].std()\ndf[\'is_high_day\'] = df[\'sales\'] > mean_sales + 2 * std_sales\n\nprint(f\'高峰日数量: {df["is_high_day"].sum()}\')\nprint(df[df[\'is_high_day\']][[\'sales\']].describe())\n```'
  },
  {
    id: 'project-6',
    title: '用户分群K-Means聚类',
    description: '使用K-Means算法对用户进行聚类分析，包括特征标准化、聚类、簇中心分析等。',
    difficulty: 3,
    category: '机器学习',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=K-means%20clustering%20user%20segmentation%20professional%20style&image_size=square_hd',
    requirements: ['聚类算法基础', 'Python机器学习库'],
    datasetDescription: '用户行为特征数据，包含浏览量、购买量、停留时间、消费金额等字段。',
    tasks: [
      {
        id: 'task-6-1',
        title: '特征标准化',
        description: '对特征进行标准化处理',
        steps: ['选择特征变量', '标准化特征', '检查特征分布']
      },
      {
        id: 'task-6-2',
        title: 'K-Means聚类',
        description: '使用K-Means进行聚类',
        steps: ['选择聚类数K', '训练聚类模型', '生成聚类标签']
      },
      {
        id: 'task-6-3',
        title: '簇中心分析',
        description: '分析每个簇的特征',
        steps: ['计算各簇中心', '比较不同簇的特征', '为每个簇命名']
      }
    ],
    solution: '# 项目6解决方案\n\n## 特征标准化\n```python\nimport pandas as pd\nfrom sklearn.preprocessing import StandardScaler\n\ndf = pd.read_csv(\'user_features.csv\')\nfeatures = [\'page_views\', \'purchases\', \'stay_time\', \'spending\']\nX = df[features]\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n```\n\n## K-Means聚类\n```python\nfrom sklearn.cluster import KMeans\n\n# 选择K=4\nkmeans = KMeans(n_clusters=4, random_state=42)\ndf[\'cluster\'] = kmeans.fit_predict(X_scaled)\n```\n\n## 簇中心分析\n```python\n# 计算各簇中心\ncluster_centers = pd.DataFrame(\n    scaler.inverse_transform(kmeans.cluster_centers_),\n    columns=features\n)\ncluster_centers[\'cluster\'] = range(4)\n\nprint(\'聚类中心:\')\nprint(cluster_centers)\n\n# 统计各簇大小\nprint(df[\'cluster\'].value_counts())\n```'
  },
  {
    id: 'project-7',
    title: '异常订单检测',
    description: '使用不同方法检测异常订单，包括Z-score方法、IQR方法，对比两种方法的结果。',
    difficulty: 3,
    category: '异常检测',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anomaly%20detection%20outlier%20analysis%20professional%20style&image_size=square_hd',
    requirements: ['统计方法', '异常检测概念'],
    datasetDescription: '订单数据集，包含订单ID、金额、数量、客户ID等字段。',
    tasks: [
      {
        id: 'task-7-1',
        title: 'Z-score方法',
        description: '使用Z-score检测异常值',
        steps: ['计算Z-score', '设定阈值', '标记异常订单']
      },
      {
        id: 'task-7-2',
        title: 'IQR方法',
        description: '使用IQR方法检测异常值',
        steps: ['计算IQR', '确定异常范围', '标记异常订单']
      },
      {
        id: 'task-7-3',
        title: '方法对比',
        description: '对比两种方法的结果',
        steps: ['对比两种方法标记的异常', '分析差异原因', '选择合适的方法']
      }
    ],
    solution: '# 项目7解决方案\n\n## Z-score方法\n```python\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv(\'orders.csv\')\n\n# 计算Z-score\nz_scores = np.abs((df[\'amount\'] - df[\'amount\'].mean()) / df[\'amount\'].std())\ndf[\'zscore_anomaly\'] = z_scores > 3\n\nprint(f\'Z-score方法检测到的异常数: {df["zscore_anomaly"].sum()}\')\n```\n\n## IQR方法\n```python\n# IQR方法\nQ1 = df[\'amount\'].quantile(0.25)\nQ3 = df[\'amount\'].quantile(0.75)\nIQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\ndf[\'iqr_anomaly\'] = (df[\'amount\'] < lower_bound) | (df[\'amount\'] > upper_bound)\n\nprint(f\'IQR方法检测到的异常数: {df["iqr_anomaly"].sum()}\')\n```\n\n## 方法对比\n```python\n# 交叉表\nprint(pd.crosstab(df[\'zscore_anomaly\'], df[\'iqr_anomaly\']))\n\n# 分析异常订单\nanomalies = df[df[\'zscore_anomaly\'] | df[\'iqr_anomaly\']]\nprint(anomalies[[\'amount\', \'zscore_anomaly\', \'iqr_anomaly\']].describe())\n```'
  },
  {
    id: 'project-8',
    title: 'A/B测试效果分析',
    description: '分析A/B测试的效果，包括转化率计算、显著性检验，得出结论。',
    difficulty: 3,
    category: 'A/B测试',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A/B%20testing%20experiment%20analysis%20professional%20style&image_size=square_hd',
    requirements: ['假设检验', '统计学基础'],
    datasetDescription: 'A/B测试数据，包含用户ID、组别（A/B）、是否转化、访问日期等字段。',
    tasks: [
      {
        id: 'task-8-1',
        title: '基础指标统计',
        description: '计算两组的基础指标',
        steps: ['计算A组和B组的转化率', '计算样本量', '计算转化率差异']
      },
      {
        id: 'task-8-2',
        title: '卡方检验',
        description: '进行卡方显著性检验',
        steps: ['构建转换表', '计算卡方统计量', '计算p值']
      },
      {
        id: 'task-8-3',
        title: '结论与建议',
        description: '得出测试结论',
        steps: ['判断是否显著', '计算提升幅度', '给出建议']
      }
    ],
    solution: '# 项目8解决方案\n\n## 基础指标统计\n```python\nimport pandas as pd\n\ndf = pd.read_csv(\'ab_test_data.csv\')\n\n# 计算转化率\nconversion_rates = df.groupby(\'group\')[\'converted\'].agg([\'count\', \'sum\', \'mean\'])\nconversion_rates.columns = [\'total\', \'converted\', \'conversion_rate\']\nprint(conversion_rates)\n```\n\n## 卡方检验\n```python\nfrom scipy import stats\n\n# 构建转换表\ncontingency = pd.crosstab(df[\'group\'], df[\'converted\'])\nprint(\'转换表:\')\nprint(contingency)\n\n# 卡方检验\nchi2, p_value, dof, expected = stats.chi2_contingency(contingency)\nprint(f\'卡方统计量: {chi2:.4f}\')\nprint(f\'p值: {p_value:.4f}\')\n```\n\n## 结论\n```python\nlift = (conversion_rates.loc[\'B\', \'conversion_rate\'] - conversion_rates.loc[\'A\', \'conversion_rate\']) / conversion_rates.loc[\'A\', \'conversion_rate\'] * 100\n\nif p_value < 0.05:\n    print(f\'结果显著！B组比A组提升了{lift:.2f}%\')\nelse:\n    print(\'结果不显著，需要更多数据或调整实验\')\n```'
  },
  {
    id: 'project-9',
    title: '多表合并与数据整合',
    description: '合并多个数据表，包括内连接、左连接，找出未下单用户，计算转化率等。',
    difficulty: 2,
    category: '数据整合',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20merge%20join%20tables%20integration%20professional%20style&image_size=square_hd',
    requirements: ['SQL或Pandas合并', '数据关联'],
    datasetDescription: '多表数据，包括用户表、订单表、产品表、浏览记录表等。',
    tasks: [
      {
        id: 'task-9-1',
        title: '表连接操作',
        description: '连接不同的数据表',
        steps: ['用户表与订单表内连接', '用户表与浏览记录表左连接', '合并所有表']
      },
      {
        id: 'task-9-2',
        title: '未下单用户分析',
        description: '找出未下单用户',
        steps: ['筛选未下单用户', '分析未下单用户特征', '统计未下单用户数量']
      },
      {
        id: 'task-9-3',
        title: '转化率计算',
        description: '计算各环节转化率',
        steps: ['计算浏览到加购转化率', '计算加购到下单转化率', '计算整体漏斗转化率']
      }
    ],
    solution: '# 项目9解决方案\n\n## 表连接操作\n```python\nimport pandas as pd\n\nusers = pd.read_csv(\'users.csv\')\norders = pd.read_csv(\'orders.csv\')\nbrowsing = pd.read_csv(\'browsing.csv\')\n\n# 内连接\nuser_orders = pd.merge(users, orders, on=\'user_id\', how=\'inner\')\n\n# 左连接找出未下单用户\nuser_browsing = pd.merge(users, browsing, on=\'user_id\', how=\'left\')\n```\n\n## 未下单用户分析\n```python\n# 找出未下单用户\nusers_without_orders = users[~users[\'user_id\'].isin(orders[\'user_id\'])]\nprint(f\'未下单用户数: {len(users_without_orders)}\')\nprint(f\'下单率: {(1 - len(users_without_orders)/len(users)):.2%}\')\n```\n\n## 转化率计算\n```python\n# 计算各环节转化\nview_users = browsing[\'user_id\'].nunique()\ncart_users = orders[orders[\'has_cart\']][\'user_id\'].nunique()\nbuy_users = orders[\'user_id\'].nunique()\n\nview_to_cart = cart_users / view_users\ncart_to_buy = buy_users / cart_users\nview_to_buy = buy_users / view_users\n\nprint(f\'浏览→加购: {view_to_cart:.2%}\')\nprint(f\'加购→购买: {cart_to_buy:.2%}\')\nprint(f\'浏览→购买: {view_to_buy:.2%}\')\n```'
  },
  {
    id: 'project-10',
    title: '购物路径序列分析',
    description: '分析用户购物路径，包括路径序列合并、转化率计算、频次统计TOP3等。',
    difficulty: 3,
    category: '路径分析',
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20journey%20path%20analysis%20funnel%20professional%20style&image_size=square_hd',
    requirements: ['序列分析', '数据聚合'],
    datasetDescription: '用户浏览序列数据，包含用户ID、步骤顺序、页面类型、时间戳等字段。',
    tasks: [
      {
        id: 'task-10-1',
        title: '路径序列合并',
        description: '合并用户浏览路径',
        steps: ['按用户和会话分组', '按时间排序', '合并为路径序列']
      },
      {
        id: 'task-10-2',
        title: '转化率计算',
        description: '计算路径各环节转化率',
        steps: ['分析常见路径模式', '计算各路径的转化率', '对比不同路径的效果']
      },
      {
        id: 'task-10-3',
        title: '路径频次统计',
        description: '统计路径频次TOP3',
        steps: ['统计各路径频次', '找出TOP3路径', '分析这些路径的特征']
      }
    ],
    solution: '# 项目10解决方案\n\n## 路径序列合并\n```python\nimport pandas as pd\n\ndf = pd.read_csv(\'user_paths.csv\')\ndf[\'timestamp\'] = pd.to_datetime(df[\'timestamp\'])\n\n# 合并路径\npaths = df.sort_values([\'user_id\', \'session_id\', \'step_order\']).groupby([\'user_id\', \'session_id\'])[\'page_type\'].apply(list).reset_index()\npaths[\'path_str\'] = paths[\'page_type\'].apply(lambda x: \' → \'.join(x))\n```\n\n## 转化率计算\n```python\n# 计算包含购买的路径\npaths[\'has_purchase\'] = paths[\'page_type\'].apply(lambda x: \'purchase\' in x)\n\n# 分析以首页开始的路径\nhome_paths = paths[paths[\'page_type\'].apply(lambda x: x[0] == \'home\')]\nhome_conversion = home_paths[\'has_purchase\'].mean()\nprint(f\'首页开始的路径转化率: {home_conversion:.2%}\')\n```\n\n## 路径频次统计\n```python\n# TOP3路径\npath_counts = paths[\'path_str\'].value_counts().head(3)\nprint(\'TOP3路径:\')\nprint(path_counts)\n\n# 分析路径长度与转化关系\npaths[\'path_length\'] = paths[\'page_type\'].apply(len)\nlength_conversion = paths.groupby(\'path_length\')[\'has_purchase\'].mean()\nprint(\'不同路径长度的转化率:\')\nprint(length_conversion)\n```'
  }
];

export const initialBadges: Badge[] = [
  {
    id: 'badge-1',
    name: '初学者',
    description: '完成第一个课程章节',
    icon: 'star',
    condition: '完成1个章节'
  },
  {
    id: 'badge-2',
    name: '学习者',
    description: '完成3个课程章节',
    icon: 'book',
    condition: '完成3个章节'
  },
  {
    id: 'badge-3',
    name: '探索者',
    description: '完成6个课程章节',
    icon: 'compass',
    condition: '完成6个章节'
  },
  {
    id: 'badge-4',
    name: '实践者',
    description: '完成一门完整课程',
    icon: 'check-circle',
    condition: '完成1门课程'
  },
  {
    id: 'badge-5',
    name: '成就者',
    description: '完成3门课程',
    icon: 'award',
    condition: '完成3门课程'
  },
  {
    id: 'badge-6',
    name: '大师',
    description: '完成所有6门课程',
    icon: 'crown',
    condition: '完成6门课程'
  },
  {
    id: 'badge-7',
    name: '实战达人',
    description: '完成3个项目',
    icon: 'target',
    condition: '完成3个项目'
  },
  {
    id: 'badge-8',
    name: '项目专家',
    description: '完成6个项目',
    icon: 'trophy',
    condition: '完成6个项目'
  },
  {
    id: 'badge-9',
    name: '全栈分析师',
    description: '完成所有10个项目',
    icon: 'medal',
    condition: '完成10个项目'
  }
];

export const initialQuizzes: Quiz[] = [
  {
    id: 'quiz-1',
    courseId: 'all',
    title: '数据分析综合能力测试',
    duration: 120,
    passScore: 60,
    questions: [
      {
        id: 'q-1',
        question: '数据分析的完整流程通常包括哪些步骤？（多选）',
        type: 'multiple',
        options: ['问题定义', '数据收集', '数据清洗', '数据建模', '数据可视化', '结果呈现'],
        answer: '0,1,2,3,4,5',
        points: 5
      },
      {
        id: 'q-2',
        question: 'Python中Pandas库用于读取CSV文件的函数是？',
        type: 'single',
        options: ['read_csv()', 'read_excel()', 'read_json()', 'read_sql()'],
        answer: '0',
        points: 3
      },
      {
        id: 'q-3',
        question: '展示数据的变化趋势，最适合使用哪种图表？',
        type: 'single',
        options: ['柱状图', '折线图', '饼图', '散点图'],
        answer: '1',
        points: 3
      },
      {
        id: 'q-4',
        question: '在假设检验中，p值小于显著性水平通常表示拒绝原假设。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: '0',
        points: 2
      },
      {
        id: 'q-5',
        question: 'RFM模型中的M代表什么？',
        type: 'single',
        options: ['Recency（最近购买）', 'Frequency（购买频率）', 'Monetary（购买金额）', 'Margin（利润率）'],
        answer: '2',
        points: 3
      },
      {
        id: 'q-6',
        question: '以下哪些是数据可视化中应该避免的问题？（多选）',
        type: 'multiple',
        options: ['图表扭曲', '尺度误导', '过度装饰', '信息过载'],
        answer: '0,1,2,3',
        points: 5
      },
      {
        id: 'q-7',
        question: 'K-means算法属于监督学习。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: '1',
        points: 2
      },
      {
        id: 'q-8',
        question: 'SQL中用于分组的子句是？',
        type: 'single',
        options: ['WHERE', 'GROUP BY', 'ORDER BY', 'HAVING'],
        answer: '1',
        points: 3
      },
      {
        id: 'q-9',
        question: '以下哪些指标通常用于评估分类模型？（多选）',
        type: 'multiple',
        options: ['准确率', '精确率', '召回率', 'F1-score'],
        answer: '0,1,2,3',
        points: 5
      },
      {
        id: 'q-10',
        question: '在A/B测试中，p值小于0.05通常表示什么？',
        type: 'single',
        options: ['结果不显著', '结果显著', '样本量不足', '实验设计错误'],
        answer: '1',
        points: 3
      },
      {
        id: 'q-11',
        question: '数据清洗中，处理缺失值的常用方法包括哪些？（多选）',
        type: 'multiple',
        options: ['删除缺失值', '填充缺失值', '忽略缺失值', '插值法'],
        answer: '0,1,3',
        points: 5
      },
      {
        id: 'q-12',
        question: 'Excel中用于查找数据的函数是VLOOKUP。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: '0',
        points: 2
      },
      {
        id: 'q-13',
        question: '以下哪个是时间序列分析中常用的方法？',
        type: 'single',
        options: ['K-means', '移动平均', '决策树', '随机森林'],
        answer: '1',
        points: 3
      },
      {
        id: 'q-14',
        question: '数据产品设计的核心原则是什么？',
        type: 'single',
        options: ['技术领先', '用户导向', '功能复杂', '成本最低'],
        answer: '1',
        points: 3
      },
      {
        id: 'q-15',
        question: '请简述数据分析在企业决策中的作用。',
        type: 'essay',
        options: [],
        answer: '数据分析在企业决策中起着至关重要的作用，主要体现在以下几个方面：1. 帮助企业了解业务现状，发现问题和机会；2. 提供数据支持的决策依据，减少主观判断的风险；3. 优化业务流程，提高运营效率；4. 预测未来趋势，制定战略规划；5. 评估决策效果，持续改进。',
        points: 10
      }
    ]
  }
];
