import type { Course, Badge, Quiz } from '../types';

export const initialCourses: Course[] = [
  {
    id: 'course-1',
    title: '数据分析基础与思维构建',
    description: '建立正确的数据分析思维框架，理解完整流程，掌握业务问题转化能力。',
    category: '基础课程',
    difficulty: 1,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20concepts%20and%20charts%20professional%20business%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-1-1',
        title: '数据分析概述与流程',
        content: '# 数据分析概述与流程\n\n## 数据分析的定义、目的与价值\n- 数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，将它们加以汇总和理解并消化，以求最大化地开发数据的功能，发挥数据的作用。\n- 从数据到信息到知识的转化过程。\n\n## 经典数据分析流程\n1. 问题定义\n2. 数据抽取\n3. 数据准备\n4. 数据探索与可视化\n5. 预测建模\n6. 模型评估\n7. 部署\n\n## 定量分析与定性分析\n- 定量分析：基于数值数据的分析，注重统计显著性\n- 定性分析：基于非数值数据的分析，注重解释和理解\n- 两者的应用场景和互补性',
        exercises: [
          {
            id: 'ex-1-1-1',
            question: '数据分析的完整流程包括哪些步骤？（多选）',
            type: 'choice',
            options: ['问题定义', '数据抽取', '数据准备', '数据探索', '预测建模', '模型评估', '部署'],
            answer: '0,1,2,3,4,5,6',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-1-2',
        title: '业务理解与问题定义',
        content: '# 业务理解与问题定义\n\n## 业务需求转化\n- 如何将模糊的业务需求（如"提升用户留存"）转化为清晰、可分析的数据问题\n- 识别业务目标和约束条件\n\n## 分析目标设定\n- 明确分析目标和成功指标\n- 制定合理的假设和验证方法\n- 确定数据需求和分析范围\n\n## 案例练习\n- 实际业务场景的问题拆解练习\n- 学习使用MECE原则（相互独立，完全穷尽）进行问题分析',
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
      },
      {
        id: 'chapter-1-3',
        title: '数据分析师知识体系',
        content: '# 数据分析师知识体系\n\n## 跨学科知识需求\n- 计算机科学（工具）：编程、数据库、数据处理\n- 数学与统计学（基础）：概率、统计推断、假设检验\n- 机器学习（方法）：监督学习、无监督学习\n- 业务领域知识（上下文）：行业知识、业务流程\n\n## 数据素养与数据伦理\n- 数据质量评估\n- 数据隐私保护\n- 数据伦理原则\n- 避免数据偏见和歧视\n\n## 职业发展路径\n- 数据分析师的技能树\n- 从初级到高级的能力要求\n- 持续学习的重要性',
        exercises: [
          {
            id: 'ex-1-3-1',
            question: '数据分析师需要具备的核心知识领域包括哪些？（多选）',
            type: 'choice',
            options: ['计算机科学', '数学与统计学', '机器学习', '业务领域知识'],
            answer: '0,1,2,3',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-1-4',
        title: '数据与指标初识',
        content: '# 数据与指标初识\n\n## 数据类型\n- 类别型数据：定类（性别、地区）、定序（满意度等级）\n- 数值型数据：离散（计数）、连续（身高、温度）\n\n## 指标体系概念\n- 北极星指标：最核心的业务指标\n- 过程指标：影响北极星指标的中间指标\n- 滞后指标与领先指标\n- 虚荣指标与有意义指标\n\n## 指标设计原则\n- SMART原则（具体、可衡量、可达成、相关、有时限）\n- 指标的层次结构\n- 指标的选择和权衡',
        exercises: [
          {
            id: 'ex-1-4-1',
            question: '以下哪个属于类别型数据？',
            type: 'choice',
            options: ['用户年龄', '销售金额', '用户性别', '访问时长'],
            answer: '2',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: 'Excel数据处理与分析实战',
    description: '精通Excel这一最普及的数据处理工具，实现高效的数据操作、分析与初步可视化。',
    category: '工具课程',
    difficulty: 1,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=excel%20spreadsheet%20with%20charts%20and%20data%20professional%20business%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-2-1',
        title: 'Excel高效操作与数据规范',
        content: '# Excel高效操作与数据规范\n\n## 工作表与单元格操作\n- 工作表管理：创建、重命名、移动、隐藏\n- 单元格高级操作：合并、拆分、冻结窗格\n- 视图管理：缩放、拆分窗口、并排查看\n\n## 数据输入规范\n- 数据有效性设置\n- 下拉列表创建\n- 输入限制和提示\n- 自动填充技巧\n\n## 数据导入\n- 从文本文件导入\n- 从网页获取数据\n- 从数据库导入\n- 数据连接管理',
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
        content: '# 核心数据处理功能\n\n## 数据整理\n- 排序：多条件排序、自定义排序\n- 筛选：自动筛选、高级筛选\n- 删除重复项\n- 分列功能\n\n## 核心函数\n- 查找函数：VLOOKUP、XLOOKUP、INDEX/MATCH\n- 统计函数：SUMIFS、COUNTIFS、AVERAGEIFS\n- 逻辑函数：IF、IFERROR、AND、OR\n- 文本函数：TEXT、LEFT、RIGHT、MID\n- 日期函数：TODAY、NOW、DATEDIF\n\n## 名称定义与动态引用\n- 定义名称的方法\n- 名称的使用场景\n- 动态范围的创建',
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
      },
      {
        id: 'chapter-2-3',
        title: '数据分析与汇总',
        content: '# 数据分析与汇总\n\n## 数据透视表与透视图\n- 创建数据透视表\n- 多维数据汇总\n- 切片器和日程表\n- 计算字段和计算项\n- 数据透视图的创建和美化\n\n## 其他汇总方法\n- 分类汇总\n- 合并计算\n- 数据表格\n\n## 模拟分析\n- 单变量求解\n- 模拟运算表\n- 方案管理器\n- 规划求解',
        exercises: [
          {
            id: 'ex-2-3-1',
            question: '要快速汇总大量数据并进行多维度分析，最佳工具是？',
            type: 'choice',
            options: ['函数', '数据透视表', '排序', '筛选'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2-4',
        title: '数据可视化与仪表板雏形',
        content: '# 数据可视化与仪表板雏形\n\n## 常用商务图表\n- 柱状图和条形图\n- 折线图\n- 饼图和环形图\n- 散点图\n- 组合图表\n\n## 条件格式\n- 数据条\n- 色阶\n- 图标集\n- 公式规则\n\n## 动态图表\n- 迷你图\n- 控件使用（下拉框、单选按钮）\n- 动态范围图表\n\n## 仪表板设计\n- 布局规划\n- 图表组合\n- 交互设计\n- 美化技巧',
        exercises: [
          {
            id: 'ex-2-4-1',
            question: '要展示数据的变化趋势，最适合使用哪种图表？',
            type: 'choice',
            options: ['柱状图', '折线图', '饼图', '散点图'],
            answer: '1',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Python数据分析核心（Pandas）',
    description: '掌握使用Python（Pandas库）进行数据操控的核心能力，处理更复杂、更大规模的数据。',
    category: '编程课程',
    difficulty: 2,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20programming%20code%20with%20data%20visualization%20charts%20professional&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-3-1',
        title: 'Python与数据分析环境',
        content: '# Python与数据分析环境\n\n## Python基础语法\n- 变量和数据类型\n- 数据结构：列表、字典、元组、集合\n- 控制流程：if/else、for循环、while循环\n- 函数定义和使用\n\n## 开发环境搭建\n- Anaconda安装和配置\n- Jupyter Notebook/Lab使用\n- VS Code配置\n- 包管理：pip和conda\n\n## AI协作工具\n- IDE中使用Copilot\n- 与ChatGPT协同编写代码\n- 代码优化和调试技巧',
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
        content: '# Pandas数据结构与数据读写\n\n## 核心数据结构\n- Series：一维标签数组\n- DataFrame：二维表格结构\n- Index：索引对象\n- 数据类型：数值、文本、日期等\n\n## 数据I/O\n- 读取CSV文件\n- 读取Excel文件\n- 读取JSON文件\n- 读取HTML表格\n- 读取SQL数据库\n- 数据导出',
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
        content: '# 数据清洗与预处理\n\n## 缺失值处理\n- 识别缺失值：isna()\n- 删除缺失值：dropna()\n- 填充缺失值：fillna()\n\n## 重复值处理\n- 检测重复值：duplicated()\n- 删除重复值：drop_duplicates()\n\n## 数据类型转换\n- astype()方法\n- to_datetime()函数\n- 文本到数值的转换\n\n## 字符串处理\n- str属性的使用\n- 字符串方法：split、replace、strip等\n- 正则表达式应用',
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
      },
      {
        id: 'chapter-3-4',
        title: '数据操作与转换',
        content: '# 数据操作与转换\n\n## 数据选择与筛选\n- 标签选择：loc[]\n- 位置选择：iloc[]\n- 布尔索引\n- 条件筛选\n\n## 数据排序与排名\n- sort_values()\n- sort_index()\n- rank()方法\n\n## 数据合并与连接\n- concat()：横向和纵向合并\n- merge()：数据库风格的连接\n- join()：基于索引的连接\n\n## 数据重塑\n- pivot()和pivot_table()\n- melt()：宽表转长表\n- stack()和unstack()',
        exercises: [
          {
            id: 'ex-3-4-1',
            question: '要基于标签选择数据，应该使用哪个方法？',
            type: 'choice',
            options: ['iloc[]', 'loc[]', 'ix[]', 'iat[]'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3-5',
        title: '数据分组与聚合',
        content: '# 数据分组与聚合\n\n## groupby操作\n- 基本分组：groupby()\n- 拆分-应用-组合流程\n- 多列分组\n\n## 聚合函数\n- 内置聚合函数：sum、mean、count等\n- 自定义聚合函数\n- agg()方法的使用\n\n## 分组转换与过滤\n- transform()：返回与原数据形状相同的结果\n- filter()：根据分组结果过滤数据\n- apply()：更灵活的分组操作',
        exercises: [
          {
            id: 'ex-3-5-1',
            question: 'Pandas中用于分组操作的方法是？',
            type: 'choice',
            options: ['groupby()', 'aggregate()', 'transform()', 'filter()'],
            answer: '0',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3-6',
        title: '时间序列数据处理',
        content: '# 时间序列数据处理\n\n## 日期时间类型\n- datetime64类型\n- to_datetime()函数\n- 日期时间格式化\n\n## 时间序列索引\n- DatetimeIndex\n- 时间戳和时期\n- 时区处理\n\n## 时间序列操作\n- 重采样：resample()\n- 窗口计算：rolling()\n- 移动平均\n- 时间差计算',
        exercises: [
          {
            id: 'ex-3-6-1',
            question: 'Pandas中用于时间序列重采样的方法是？',
            type: 'choice',
            options: ['resample()', 'rolling()', 'shift()', 'diff()'],
            answer: '0',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    title: '数据可视化原理与工具',
    description: '掌握可视化设计原则，并能用多种工具（Python、Excel、BI）有效传达数据洞察。',
    category: '技能课程',
    difficulty: 2,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20data%20visualization%20dashboards%20charts%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-4-1',
        title: '可视化设计原则',
        content: '# 可视化设计原则\n\n## 视觉编码\n- 位置编码\n- 长度编码\n- 颜色编码\n- 形状编码\n- 大小编码\n\n## 图表选择指南\n- 比较数据：柱状图、条形图\n- 趋势分析：折线图\n- 占比分析：饼图、环形图\n- 分布分析：直方图、散点图\n- 关系分析：散点图、热力图\n\n## 避免误导\n- 图表扭曲\n- 尺度误导\n- 过度装饰\n- 信息过载\n\n## 设计原则\n- 简洁性\n- 准确性\n- 一致性\n- 可读性',
        exercises: [
          {
            id: 'ex-4-1-1',
            question: '要展示不同类别之间的比较，最适合使用哪种图表？',
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
        content: '# Python可视化（Matplotlib & Seaborn）\n\n## Matplotlib基础\n- 图形构成：Figure、Axes\n- 基本图表：线图、散点图、柱状图\n- 图表元素：标题、标签、图例\n- 样式设置：颜色、线型、标记\n\n## Seaborn高级统计绘图\n- 分布图：distplot、kdeplot\n- 关系图：relplot、scatterplot\n- 分类图：catplot、boxplot\n- 热力图：heatmap\n- 配对图：pairplot\n\n## Pandas内置绘图\n- DataFrame.plot()方法\n- 快速数据探索\n- 常见图表类型',
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
      },
      {
        id: 'chapter-4-3',
        title: '商业智能（BI）工具可视化',
        content: '# 商业智能（BI）工具可视化\n\n## Power BI基础\n- 工作区和报表创建\n- 数据连接\n- 数据模型建立\n- 可视化控件使用\n\n## Tableau基础\n- 工作簿和工作表\n- 数据连接\n- 拖放式可视化\n- 计算字段创建\n\n## 交互式仪表板\n- 筛选器设置\n- 突出显示\n- 页面导航\n- 交互行为配置\n\n## 最佳实践\n- 仪表板布局\n- 颜色方案\n- 交互设计\n- 性能优化',
        exercises: [
          {
            id: 'ex-4-3-1',
            question: 'Power BI和Tableau都属于哪种类型的工具？',
            type: 'choice',
            options: ['编程语言', '数据库', '商业智能工具', '办公软件'],
            answer: '2',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-4-4',
        title: '故事化呈现与报告',
        content: '# 故事化呈现与报告\n\n## 数据故事结构\n- 引言：问题背景\n- 数据洞察：关键发现\n- 分析过程：方法和步骤\n- 结论和建议\n\n## 报告设计\n- 目标受众分析\n- 内容组织\n- 视觉层次\n- 叙事流程\n\n## 不同场景的报告\n- 高管报告：简洁明了\n- 业务部门报告：详细具体\n- 技术团队报告：方法和实现\n\n## 工具选择\n- Jupyter Notebook报告\n- Power BI报告\n- Tableau故事\n- 传统PPT报告',
        exercises: [
          {
            id: 'ex-4-4-1',
            question: '数据故事的基本结构包括哪些部分？（多选）',
            type: 'choice',
            options: ['引言', '数据洞察', '分析过程', '结论和建议'],
            answer: '0,1,2,3',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    title: '商业智能（BI）与自动化报表',
    description: '构建可复用、自动化的数据报表系统，实现数据驱动的日常决策支持。',
    category: '实战课程',
    difficulty: 3,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20intelligence%20dashboard%20analytics%20report%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-5-1',
        title: 'BI系统概念与架构',
        content: '# BI系统概念与架构\n\n## BI系统概述\n- 商业智能的定义和价值\n- 传统BI vs. 敏捷BI\n- 现代BI平台的核心特性\n\n## BI架构组成\n- 数据仓库/数据湖\n- ETL流程\n- 数据模型\n- 报表和仪表板\n- 数据分析工具\n\n## 部署模式\n- 本地部署\n- 云端部署\n- 混合部署\n\n## 选型考虑因素\n- 功能需求\n- 性能要求\n- 成本预算\n- 技术支持',
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
        content: '# 数据建模与DAX/Power Pivot\n\n## 数据模型设计\n- 星型模型\n- 雪花模型\n- 表间关系建立\n-  cardinality（基数）关系\n\n## DAX语言基础\n- 计算列 vs. 度量值\n- 上下文概念\n- 迭代函数\n- 时间智能函数\n\n## 核心DAX函数\n- CALCULATE：上下文修改\n- FILTER：条件过滤\n- ALL：清除上下文\n- SUMX/COUNTX：迭代计算\n- 时间智能：TOTALYTD、SAMEPERIODLASTYEAR\n\n## Power Pivot使用\n- 数据模型创建\n- 关系管理\n- 计算字段创建\n- 与Excel的集成',
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
      },
      {
        id: 'chapter-5-3',
        title: '高级报表与交互设计',
        content: '# 高级报表与交互设计\n\n## 高级视觉效果\n- 自定义视觉对象\n- R和Python可视化集成\n- 地图可视化\n- 卡片和KPI指标\n\n## 交互功能\n- 书签和按钮\n- 动态参数\n- 钻取功能\n- 同步筛选\n\n## 移动端设计\n- 响应式布局\n- 移动端优化\n- 触摸友好设计\n\n## 性能优化\n- DAX优化\n- 数据模型优化\n- 查询性能\n- 缓存策略',
        exercises: [
          {
            id: 'ex-5-3-1',
            question: '在Power BI中，用于创建复杂交互的功能是？',
            type: 'choice',
            options: ['书签', '筛选器', '切片器', '图例'],
            answer: '0',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-5-4',
        title: '报表部署、共享与自动化',
        content: '# 报表部署、共享与自动化\n\n## 报表发布\n- Power BI Service\n- Tableau Server/Online\n- 权限管理\n- 工作区协作\n\n## 数据刷新\n- 刷新计划设置\n- 网关配置\n- 数据源连接管理\n- 刷新监控\n\n## 自动化流程\n- Power Query（M语言）自动化\n- Python脚本集成\n- 与其他系统的集成\n- 告警和通知\n\n## 最佳实践\n- 版本控制\n- 文档化\n- 培训和支持\n- 持续改进',
        exercises: [
          {
            id: 'ex-5-4-1',
            question: '在Power BI中，用于设置数据自动刷新的组件是？',
            type: 'choice',
            options: ['网关', '书签', '切片器', '钻取'],
            answer: '0',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    title: '商务数据分析实战与业务融合',
    description: '整合前五门课程技能，在真实的商业场景中解决复杂问题，并量化分析价值。',
    category: '实战课程',
    difficulty: 3,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20analytics%20case%20study%20meeting%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-6-1',
        title: '商业模式与指标体系',
        content: '# 商业模式与指标体系\n\n## 六大商业模式\n- 电子商务：GMV、转化率、客单价\n- SaaS：MRR、 churn率、LTV\n- 免费移动应用：DAU、留存率、ARPU\n- 媒体网站：PV、UV、广告收入\n- 用户生成内容：内容量、互动率、用户增长\n- 双边市场：供给端和需求端指标\n\n## 关键指标（OMTM）\n- 识别第一关键指标\n- 指标优先级排序\n- 指标之间的关联\n- 指标监控仪表盘\n\n## 指标体系设计\n- 北极星指标设定\n- 过程指标选择\n- 指标分解\n- 行业基准对比',
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
        content: '# 全流程综合案例实战\n\n## 销售与客户分析\n- 客户分群（RFM模型）\n- 销售趋势预测\n- 产品关联分析\n- 客户生命周期价值\n\n## 运营与用户体验分析\n- 漏斗转化分析\n- 留存分析\n- A/B测试\n- 用户行为路径分析\n\n## 市场与舆情分析\n- 社交媒体数据采集\n- 情感分析\n- 主题挖掘\n- 品牌声誉监测\n\n## 供应链与库存分析\n- 需求预测\n- 库存优化\n- 供应商绩效评估\n- 物流成本分析',
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
      },
      {
        id: 'chapter-6-3',
        title: '分析结论推进与价值衡量',
        content: '# 分析结论推进与价值衡量\n\n## 分析报告撰写\n- 不同受众的报告风格\n- 结构化报告模板\n- 数据可视化最佳实践\n- 行动建议的提出\n\n## 结论转化为行动\n- 与业务团队的有效沟通\n- 落地计划制定\n- 资源分配建议\n- 实施监控\n\n## 价值衡量\n- ROI计算\n- 业务影响评估\n- 长期价值分析\n- 成功指标设定\n\n## 持续改进\n- 分析结果复盘\n- 方法优化\n- 工具升级\n- 知识沉淀',
        exercises: [
          {
            id: 'ex-6-3-1',
            question: '衡量数据分析项目价值的主要指标是？',
            type: 'choice',
            options: ['分析报告数量', 'ROI', '使用的工具数量', '分析时间'],
            answer: '1',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-6-4',
        title: '前沿拓展与职业发展',
        content: '# 前沿拓展与职业发展\n\n## 数据分析与AI结合\n- 机器学习模型在分析中的应用\n- 预测性分析\n- 个性化推荐\n- 异常检测\n\n## 数据中台与治理\n- 数据中台概念\n- 数据治理框架\n- 数据质量管控\n- 数据安全与合规\n\n## 职业发展路径\n- 数据分析师\n- 高级数据分析师\n- 数据科学家\n- 分析经理\n- 首席数据官\n\n## 能力持续提升\n- 技术技能更新\n- 业务知识深化\n- 软技能培养\n- 行业网络建设',
        exercises: [
          {
            id: 'ex-6-4-1',
            question: '数据分析师的职业发展路径不包括？',
            type: 'choice',
            options: ['高级数据分析师', '数据科学家', '分析经理', '软件工程师'],
            answer: '3',
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
  },
  {
    id: 'quiz-2',
    courseId: 'course-2',
    title: 'Excel数据处理测试',
    duration: 30,
    passScore: 60,
    questions: [
      {
        id: 'q2-1',
        question: 'Excel中VLOOKUP函数的作用是？',
        type: 'choice',
        options: ['求和', '查找', '计数', '平均值'],
        answer: '1',
        points: 20
      }
    ]
  },
  {
    id: 'quiz-3',
    courseId: 'course-3',
    title: 'Python数据分析测试',
    duration: 30,
    passScore: 60,
    questions: [
      {
        id: 'q3-1',
        question: 'Pandas中用于数据清洗的主要方法是？',
        type: 'choice',
        options: ['plot()', 'dropna()', 'sum()', 'mean()'],
        answer: '1',
        points: 20
      }
    ]
  },
  {
    id: 'quiz-4',
    courseId: 'course-4',
    title: '数据可视化测试',
    duration: 30,
    passScore: 60,
    questions: [
      {
        id: 'q4-1',
        question: '展示占比关系最适合使用哪种图表？',
        type: 'choice',
        options: ['折线图', '饼图', '散点图', '柱状图'],
        answer: '1',
        points: 20
      }
    ]
  },
  {
    id: 'quiz-5',
    courseId: 'course-5',
    title: '商业智能与报表测试',
    duration: 30,
    passScore: 60,
    questions: [
      {
        id: 'q5-1',
        question: 'ETL中的E代表什么？',
        type: 'choice',
        options: ['Extract', 'Export', 'Edit', 'Enhance'],
        answer: '0',
        points: 20
      }
    ]
  },
  {
    id: 'quiz-6',
    courseId: 'course-6',
    title: '商务数据分析实战测试',
    duration: 30,
    passScore: 60,
    questions: [
      {
        id: 'q6-1',
        question: 'A/B测试的主要目的是？',
        type: 'choice',
        options: ['数据可视化', '比较两个版本的效果', '数据清洗', '预测未来趋势'],
        answer: '1',
        points: 20
      }
    ]
  }
];
