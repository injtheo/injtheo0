import type { Course, Badge, Quiz, Project } from '../types';

export const initialCourses: Course[] = [
  {
    id: 'course-1',
    title: '数据分析基础',
    description: '掌握数据分析的核心概念、方法和工具，从数据收集到可视化呈现的完整流程。',
    category: '基础课程',
    difficulty: 1,
    thumbnail: 'https://picsum.photos/seed/data-analysis/400/400',
    chapters: [
      {
        id: 'chapter-1-1',
        title: '数据分析概述与职业认知',
        content: '# 数据分析概述与职业认知\n\n## 学习目标\n\n- 能够理解数据分析的定义和核心价值\n- 能够区分数据分析、数据科学、商业智能的差异\n- 能够规划数据分析师的职业发展路径\n- 能够识别数据分析的核心能力模型\n\n## 数据分析的定义与价值\n\n数据分析是指用适当的统计分析方法对收集来的大量数据进行分析、汇总、解读和消化，以求最大化地开发数据的功能，发挥数据的作用。它通过对历史数据的系统性梳理，帮助人们作出合理的判断与决策。\n\n在企业经营中，数据分析并非简单的做报表，而是一套完整的从数据采集、数据清洗、数据探索、数据建模到可视化呈现和业务沟通的系统性工作流。数据分析师的核心使命，是将海量而杂乱的数据转化为清晰、可信、可行动的业务洞察。\n\n数据驱动（Data-Driven）是现代企业经营的核心理念。相较于传统的经验驱动或直觉驱动，数据驱动具有以下显著优势：客观性（数据来源于真实的业务过程）、可量化（将模糊的业务语言转化为可度量的指标）、可追溯（每一次决策都有数据作为依据）、可扩展（数据资产可以被反复使用）。\n\n## 三大领域对比\n\n| 维度 | 数据分析 | 数据科学 | 商业智能 |\n| --- | --- | --- | --- |\n| 核心目标 | 回答业务问题、提供决策建议 | 构建预测/聚类/推荐等高级模型 | 报表、Dashboard、自助查询 |\n| 技术栈 | Excel、SQL、Python基础、BI工具 | Python/R、机器学习、深度学习、大数据 | 数据仓库、ETL、OLAP、BI可视化 |\n| 产出物 | 分析报告、PPT、建议方案 | 模型、算法、预测结果 | 报表、仪表盘、KPI卡片 |\n| 典型岗位 | 数据分析师、业务分析师 | 数据科学家、算法工程师 | BI工程师、BI分析师 |\n\n## 数据分析师的职业发展\n\n初级数据分析师（0-2年）：协助主管完成数据提取、报表制作、基础分析。核心技能：Excel（VLOOKUP/数据透视表）、SQL、基础统计、常用BI工具。\n\n中级数据分析师（2-5年）：独立承担专题分析、搭建指标体系、推动业务决策。核心技能：Python/R、建模思维、业务理解、跨部门沟通。\n\n高级数据分析师/数据分析专家（5年以上）：主导大型分析项目、指导团队、参与战略决策。\n\n## 核心能力模型\n\n技术能力（硬技能）：Excel高级函数、SQL查询、Python/Pandas；描述统计、假设检验、回归分析；Tableau/Power BI/FineBI；维度建模、指标体系搭建。\n\n业务能力：理解商业模式、盈利模型、核心业务流程；北极星指标与AARRR漏斗模型；行业知识与特有业务规则。\n\n沟通能力（软实力）：结构化思维与表达（金字塔原理）；数据讲故事（Storytelling with Data）；PPT制作、演讲与汇报；跨部门协作推动。\n\n## 关键要点总结\n\n1. 数据分析的核心是解决业务问题，而非炫技。\n2. 数据驱动决策是现代企业经营的核心理念。\n3. 数据分析、数据科学、BI三者侧重点不同但紧密协作。\n4. 职业路径清晰，需同时修炼技术+业务+沟通能力。\n5. 结构化思维与数据讲故事是区别于报表工程师的关键。\n6. 用数据说话——不是为了证明什么，而是为了发现真相。',
        exercises: [
          {
            id: 'ex-1-1-1',
            question: '以下哪项最能概括数据分析师的核心使命？',
            type: 'single',
            options: ['制作精美的报表', '将数据转化为清晰可信可行动的业务洞察', '用最先进的算法', '收集尽可能多的数据'],
            answer: '将数据转化为清晰可信可行动的业务洞察',
            points: 10,
            explanation: '数据分析师的核心价值在于将数据转化为可行动的业务洞察，而非单纯的数据收集或算法开发。',
            tags: ['数据分析', '职业认知'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-2',
            question: '数据驱动决策相比经验驱动的主要优势是？（多选）',
            type: 'multiple',
            options: ['客观性', '可量化', '可追溯', '更简单'],
            answer: ['客观性', '可量化', '可追溯'],
            points: 15,
            explanation: '数据驱动具备客观性、可量化、可追溯等优势，但并不意味着更简单。',
            tags: ['数据分析', '数据驱动'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-3',
            question: '数据科学相比数据分析的侧重点是？',
            type: 'single',
            options: ['制作报表', '构建预测/推荐/聚类等高级模型', 'BI可视化', 'SQL查询'],
            answer: '构建预测/推荐/聚类等高级模型',
            points: 10,
            explanation: '数据科学侧重于构建预测、推荐、聚类等高级机器学习模型，技术栈更深。',
            tags: ['数据科学', '职业认知'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-4',
            question: '数据分析师的三维能力模型包括？（多选）',
            type: 'multiple',
            options: ['技术能力', '业务能力', '沟通能力', '财务能力'],
            answer: ['技术能力', '业务能力', '沟通能力'],
            points: 15,
            explanation: '数据分析师的核心能力模型是：技术、业务、沟通三维能力。',
            tags: ['数据分析', '能力模型'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-5',
            question: '初级数据分析师应重点掌握的技能不包括？',
            type: 'single',
            options: ['Excel高级函数与数据透视表', 'SQL查询', '深度学习算法研究', '常用BI工具'],
            answer: '深度学习算法研究',
            points: 10,
            explanation: '深度学习算法研究是数据科学家的进阶技能，初级数据分析师应重点掌握工具基础。',
            tags: ['数据分析', '技能'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-1-2',
        title: '数据分析方法论与CRISP-DM',
        content: '# 数据分析方法论与CRISP-DM\n\n## 学习目标\n\n- 能够理解CRISP-DM方法论的6个阶段\n- 能够对比CRISP-DM、SEMMA、KDD等方法论\n- 能够应用CRISP-DM框架解决实际业务问题\n\n## 什么是CRISP-DM\n\nCRISP-DM（Cross-Industry Standard Process for Data Mining）是1999年由SPSS牵头制定的跨行业数据挖掘标准流程，是目前业界最广泛使用的方法论。由6个阶段构成环形循环：业务理解、数据理解、数据准备、建模、评估、部署，再回到业务理解形成持续优化闭环。\n\n## 六个阶段详解\n\n阶段1：业务理解（Business Understanding）。核心目标：将模糊的业务问题转化为清晰可分析的数据问题。输入：业务背景与目标、资源约束。关键活动：与业务方深度访谈、将业务问题拆解为可验证的假设、定义分析范围与边界、制定项目计划。输出：项目章程、业务问题清单与数据问题映射表。\n\n阶段2：数据理解（Data Understanding）。核心目标：理解可用数据，评估数据质量和局限性。关键活动：数据收集、数据探索（描述统计、分布图）、数据质量评估（缺失率、异常值、一致性）、数据字典梳理。输出：原始数据集、EDA报告、数据质量评估报告。\n\n阶段3：数据准备（Data Preparation）。核心目标：将原始杂乱数据转化为可供建模分析的干净数据。此阶段通常占用整个项目时间的60%-80%。关键活动：数据选择、数据清洗（缺失值/异常值/重复值）、数据构造（衍生变量、特征工程）、数据整合（多表join）、数据格式化（类型转换、标准化）。\n\n阶段4：建模（Modeling）。核心目标：选择并应用适当的建模技术。常见模型：分类问题（逻辑回归、决策树、随机森林、XGBoost）、回归问题（线性回归、GBDT）、聚类问题（K-Means、层次聚类、DBSCAN）、关联问题（Apriori、FP-Growth）、推荐问题（协同过滤、矩阵分解）。\n\n阶段5：评估（Evaluation）。核心目标：从技术和业务两个层面评估模型。技术评估指标：准确率、召回率、F1、AUC、MSE、MAE；业务评估：模型输出的业务价值；鲁棒性测试：在不同时间窗口/用户群上的稳定性。\n\n阶段6：部署（Deployment）。核心目标：将分析结果/模型部署到生产环境，让业务方真正使用。关键活动：部署方案设计、上线与监控、业务方培训与使用指引、效果追踪与持续优化。\n\n## 方法论对比\n\n| 维度 | CRISP-DM | SEMMA（SAS提出） | KDD（知识发现） |\n| --- | --- | --- | --- |\n| 核心 | 端到端，强调业务理解与部署 | Sample-Explore-Modify-Model-Assess | 偏学术理论框架 |\n| 适用场景 | 企业级数据分析项目 | 纯数据挖掘/建模项目 | 学术研究 |\n\nCRISP-DM优势：强调从业务出发而非从算法出发；完整覆盖从问题定义到落地部署的全流程；跨行业通用不依赖特定工具；强调迭代循环与持续优化。\n\n## 常见陷阱与最佳实践\n\n陷阱1：业务理解不足，用最复杂算法解决最不相关问题。正确做法：先花足够时间做业务访谈与问题拆解。\n\n陷阱2：数据质量差，Garbage In, Garbage Out。正确做法：投入60%以上时间在数据准备上；备份原始数据。\n\n陷阱3：过度追求复杂模型。正确做法：从简单模型开始，逐步增加复杂度。\n\n陷阱4：缺乏业务价值评估。正确做法：始终以业务价值为导向进行评估与部署。\n\n陷阱5：不考虑部署与持续维护。正确做法：在项目初期就规划部署与监控方案。\n\n最佳实践清单：永远从业务出发；数据准备投入足够时间；简单模型优先；多指标评估；做好项目文档与版本管理；业务方全程参与；持续监控上线效果。\n\n## 关键要点总结\n\n1. CRISP-DM是目前最广泛使用的数据分析方法论。\n2. 六个阶段：业务理解、数据理解、数据准备、建模、评估、部署。\n3. 数据准备通常占用60%-80%的项目时间。\n4. 建模只是手段，业务价值才是目标。\n5. SEMMA侧重数据挖掘流程，KDD偏学术框架。',
        exercises: [
          {
            id: 'ex-1-2-1',
            question: 'CRISP-DM包含几个阶段？',
            type: 'single',
            options: ['4个', '5个', '6个', '7个'],
            answer: '6个',
            points: 10,
            explanation: 'CRISP-DM由6个阶段组成：业务理解、数据理解、数据准备、建模、评估、部署。',
            tags: ['数据分析', 'CRISP-DM'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-2',
            question: 'CRISP-DM的第一个阶段是？',
            type: 'single',
            options: ['数据理解', '数据准备', '业务理解', '建模'],
            answer: '业务理解',
            points: 10,
            explanation: 'CRISP-DM从业务理解开始，将模糊的业务问题转化为清晰可分析的数据问题。',
            tags: ['数据分析', 'CRISP-DM'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-3',
            question: '数据准备阶段通常占用项目时间比例？',
            type: 'single',
            options: ['10%-20%', '30%-40%', '60%-80%', '90%以上'],
            answer: '60%-80%',
            points: 10,
            explanation: '数据准备通常占用项目时间的60%-80%，是数据分析中最耗时也最关键的阶段。',
            tags: ['数据分析', 'CRISP-DM', '数据准备'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-4',
            question: 'SEMMA是由哪家公司提出？',
            type: 'single',
            options: ['SPSS(IBM)', 'SAS', 'Microsoft', 'Google'],
            answer: 'SAS',
            points: 10,
            explanation: 'SEMMA是SAS公司提出的数据挖掘方法论。',
            tags: ['数据分析', '方法论', 'SEMMA'],
            difficulty: 2
          },
          {
            id: 'ex-1-2-5',
            question: 'Garbage In, Garbage Out指哪个陷阱？',
            type: 'single',
            options: ['业务理解不足', '数据质量差', '过度追求复杂模型', '缺乏业务价值评估'],
            answer: '数据质量差',
            points: 10,
            explanation: '这句名言强调如果输入数据质量差，模型再好也会输出差结果。',
            tags: ['数据分析', '方法论'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-6',
            question: '以下哪些属于CRISP-DM阶段？（多选）',
            type: 'multiple',
            options: ['业务理解', '数据理解', '数据准备', '建模', '评估', '部署', '算法优化'],
            answer: ['业务理解', '数据理解', '数据准备', '建模', '评估', '部署'],
            points: 15,
            explanation: '算法优化属于建模阶段的活动，不是独立的CRISP-DM阶段。',
            tags: ['数据分析', 'CRISP-DM'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-1-3',
        title: '数据类型与数据结构',
        content: '# 数据类型与数据结构\n\n## 学习目标\n\n- 能够区分结构化、半结构化、非结构化数据\n- 能够理解定量数据与定性数据的差异\n- 能够理解数据的测量尺度（定类、定序、定距、定比）\n- 能够理解常见数据格式的特点与适用场景\n- 能够理解数据库基础概念\n- 能够理解数据仓库与数据湖的概念差异\n\n## 三大数据分类\n\n结构化数据：固定格式，类似表格。典型存储：MySQL、Oracle、SQL Server、CSV、Excel。示例：订单数据、用户信息、员工数据。\n\n半结构化数据：没有严格固定结构，但包含标签以区分语义元素。常见格式：JSON、XML、YAML。典型存储：MongoDB等文档型数据库。\n\n非结构化数据：无预定义模型的数据。占数据总量80%以上（据IDC统计）。典型类型：文本（邮件、文档、聊天记录、评论）、图像、音频、视频。\n\n## 定量数据 vs 定性数据\n\n定量数据（Quantitative Data）：可以用数值表示，可数学运算。分为连续型（身高、体重、温度、收入、销售额——在一定区间内可取任意值）与离散型（订单数、用户数、点击次数——只能取整数值）。\n\n定性数据（Qualitative Data）：描述事物性质特征类别，不能直接用数值表示。分为名义数据（Nominal：性别、颜色、地区）和有序数据（Ordinal：满意度、学历、成绩等级）。\n\n## 数据的测量尺度（斯蒂文斯分类）\n\n定类尺度（Nominal Scale）：仅用于分类标识。示例：性别、颜色、地区、职业、婚姻状态。统计：频数、频率、众数、卡方检验。\n\n定序尺度（Ordinal Scale）：各类别之间有顺序关系，但不能量化具体大小。示例：满意度、学历、成绩等级。统计：中位数、四分位数、秩和检验、Spearman相关系数。\n\n定距尺度（Interval Scale）：有相等的单位间隔，但没有绝对零点。可做加减运算但不能做乘除运算。示例：温度（摄氏/华氏）、年份、智商IQ。统计：均值、方差、标准差、Pearson相关系数、t检验、方差分析。\n\n定比尺度（Ratio Scale）：最高级，有相等的单位间隔且存在绝对零点。可做加减乘除运算。示例：身高、体重、收入、销售额、用户数、订单金额、温度（Kelvin）。统计：所有定距适用方法、几何均值、调和均值、比率、对数转换。\n\n| 特征 | 定类 | 定序 | 定距 | 定比 |\n| --- | --- | --- | --- | --- |\n| 分类 | 是 | 是 | 是 | 是 |\n| 排序 | 否 | 是 | 是 | 是 |\n| 加减 | 否 | 否 | 是 | 是 |\n| 乘除 | 否 | 否 | 否 | 是 |\n| 绝对零点 | 否 | 否 | 否 | 是 |\n\n## 常见数据格式\n\nCSV：纯文本、逗号分隔、每行一条记录、简单易读兼容性好、不支持嵌套。适用：小型数据交换、Excel导入导出。\n\nJSON：键值对结构、支持嵌套、轻量级易读。Web API最常用格式。\n\nXML：标签结构类似HTML、可读性好、支持复杂嵌套、文件体积较大。适用：企业配置文件、传统系统数据交换。\n\nParquet：列式存储（Columnar Storage）、压缩率高（通常>90%）、支持复杂嵌套结构、大数据生态友好（Hadoop、Spark、Hive）。适用：大数据分析、OLAP、数据仓库。\n\n## 数据库基础概念\n\n表（Table）：同一类数据的集合。字段（Field/Column）：表的列，描述数据的一个属性。记录（Record/Row）：表的行，一条完整数据。主键（Primary Key）：唯一标识一条记录的字段或字段组合。外键（Foreign Key）：引用其他表主键的字段，建立表间关系。\n\n关系型数据库（RDBMS）：MySQL、PostgreSQL、Oracle、SQL Server。使用SQL查询，支持事务ACID。\n\n非关系型数据库（NoSQL）：MongoDB（文档型）、Redis（键值型）、Cassandra（列族型）。扩展性好，但事务支持较弱。\n\n## 数据仓库 vs 数据湖\n\n数据仓库（Data Warehouse）：面向主题的、集成的、相对稳定的、反映历史变化的数据集合。Schema方式：Schema-on-Write（写入时定义结构）。典型技术：传统数仓Oracle/Teradata/Greenplum、云原生Snowflake/BigQuery/Redshift、开源Hive/ClickHouse/Doris。\n\n数据湖（Data Lake）：以原生格式存储大量结构化、半结构化和非结构化数据的存储库。Schema方式：Schema-on-Read（读取时定义结构）。典型技术栈：存储层HDFS/S3/OSS/ADLS、计算层Spark/Presto/Trino。\n\n数据湖仓（Lakehouse）：数据湖与数据仓库的融合架构。在数据湖基础上引入ACID事务能力、SQL查询优化、BI工具支持。代表技术：Delta Lake、Iceberg、Hudi。\n\n## 关键要点总结\n\n1. 数据按结构可分为结构化、半结构化、非结构化三类。\n2. 定量数据可进一步分为连续型与离散型。\n3. 测量尺度从低到高分为定类、定序、定距、定比四类。\n4. CSV/JSON/XML/Parquet各有优缺点与适用场景。\n5. 数据仓库面向主题集成稳定；数据湖灵活存储原始数据。\n6. Lakehouse是数据湖与数据仓库融合的新趋势。',
        exercises: [
          {
            id: 'ex-1-3-1',
            question: '以下哪项属于结构化数据？',
            type: 'single',
            options: ['用户订单数据', '微信聊天记录', '商品图片', '视频文件'],
            answer: '用户订单数据',
            points: 10,
            explanation: '结构化数据以固定格式存储，类似表格形式。用户订单数据是典型结构化数据。',
            tags: ['数据分析', '数据类型', '结构化'],
            difficulty: 1
          },
          {
            id: 'ex-1-3-2',
            question: '以下哪些属于非结构化数据？（多选）',
            type: 'multiple',
            options: ['邮件文本', '用户评论', '订单数据', '商品图片', '视频文件'],
            answer: ['邮件文本', '用户评论', '商品图片', '视频文件'],
            points: 15,
            explanation: '邮件、评论属于文本类非结构化数据，图片、视频也是典型非结构化数据。订单数据属于结构化。',
            tags: ['数据分析', '非结构化'],
            difficulty: 1
          },
          {
            id: 'ex-1-3-3',
            question: '温度（摄氏度）属于哪类测量尺度？',
            type: 'single',
            options: ['定类尺度', '定序尺度', '定距尺度', '定比尺度'],
            answer: '定距尺度',
            points: 10,
            explanation: '温度（摄氏度）是典型定距尺度：存在相等间隔但无绝对零点。',
            tags: ['数据分析', '测量尺度', '定距'],
            difficulty: 2
          },
          {
            id: 'ex-1-3-4',
            question: '以下哪项属于定比尺度？',
            type: 'single',
            options: ['性别', '满意度', '温度（摄氏）', '身高'],
            answer: '身高',
            points: 10,
            explanation: '身高存在绝对零点（0cm表示没有高度），可做加减乘除运算，属于定比尺度。',
            tags: ['数据分析', '测量尺度', '定比'],
            difficulty: 2
          },
          {
            id: 'ex-1-3-5',
            question: '数据仓库的Schema方式是？',
            type: 'single',
            options: ['Schema-on-Write', 'Schema-on-Read', '两者都是', '两者都不是'],
            answer: 'Schema-on-Write',
            points: 10,
            explanation: '数据仓库采用Schema-on-Write（写入时定义结构）。数据湖采用Schema-on-Read。',
            tags: ['数据分析', '数据仓库', '数据湖'],
            difficulty: 2
          },
          {
            id: 'ex-1-3-6',
            question: '主键的主要作用是？',
            type: 'single',
            options: ['存储大量数据', '唯一标识一条记录', '压缩数据', '美化数据'],
            answer: '唯一标识一条记录',
            points: 10,
            explanation: '主键是表中用于唯一标识一条记录的字段或字段组合。',
            tags: ['数据库', '主键'],
            difficulty: 1
          },
          {
            id: 'ex-1-3-7',
            question: '以下哪些数据格式支持嵌套结构？（多选）',
            type: 'multiple',
            options: ['CSV', 'JSON', 'XML', 'Parquet'],
            answer: ['JSON', 'XML', 'Parquet'],
            points: 15,
            explanation: 'JSON、XML、Parquet均支持嵌套结构。CSV是扁平结构，不支持嵌套。',
            tags: ['数据分析', '数据格式'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-1-4',
        title: '数据分析工具概览',
        content: '# 数据分析工具概览\n\n## 学习目标\n\n- 能够理解Excel、Python、SQL、BI工具的定位与适用场景\n- 能够理解工具选型决策矩阵\n- 能够掌握工具组合使用的最佳实践\n\n## Excel：从初级办公软件到数据分析利器\n\n功能边界：快速数据录入与整理、轻量级统计分析、交互式图表与Dashboard、What-If分析（方案管理、规划求解）、VBA自动化扩展。限制：单表数据量通常不超过10万行、不可复现、版本控制困难。\n\n适用场景：小型数据分析（10万行以内）、快速探索性分析、报表与Dashboard、临时数据整理、财务人力日常处理。\n\n版本差异：Microsoft Excel 2016+：Power Query（数据获取与转换）、Power Pivot（数据建模）、Power View；Microsoft 365订阅版：动态数组、XLOOKUP、LET、LAMBDA、Python in Excel（2023）。替代：WPS、Google Sheets、Apple Numbers。\n\n## Python：数据分析的瑞士军刀\n\n生态系统：数据处理（NumPy、Pandas、Dask）；数据可视化（Matplotlib、Seaborn、Plotly、Bokeh）；统计建模（SciPy、StatsModels）；机器学习（Scikit-learn、XGBoost/LightGBM）；深度学习（TensorFlow/Keras、PyTorch）；文本分析（NLTK、spaCy、jieba中文分词）；Web爬虫（Requests、Scrapy）；Dashboard（Streamlit、Dash、Gradio）。\n\n安装配置：推荐Anaconda/Miniconda（Python数据科学发行版）。步骤：1.下载安装Anaconda；2.conda create -n data python=3.10创建虚拟环境；3.conda activate data激活；4.pip install pandas numpy matplotlib seaborn scikit-learn jupyter安装核心库。\n\nJupyter Notebook使用：单元格（代码Code/说明Markdown）；魔法命令（%time、%run、!shell命令）；快捷键（Shift+Enter运行并选中下一格、Ctrl+Enter原地运行、A/B在上下插入、M/Y切换模式、DD删除）。\n\n快速入门示例：import pandas as pd、import numpy as np、import matplotlib.pyplot as plt；df = pd.read_csv("sales.csv")读取数据；df.head()/info()/describe()/shape/columns查看；df[df["age"]>30]筛选；df.groupby("region")["sales"].sum()分组聚合；df["sales"].plot()可视化。\n\n## SQL：数据库查询语言\n\nSQL（Structured Query Language）是与数据库通信的标准语言。SELECT查询语句是数据分析师最常用的工具。\n\nSQL方言差异：MySQL、PostgreSQL、SQL Server(T-SQL)、Oracle(PL/SQL)、BigQuery、Hive SQL(HQL)、Spark SQL、Presto/Trino。常见差异点：字符串函数（SUBSTRING vs SUBSTR）、日期函数差异、LIMIT vs TOP vs ROWNUM、窗口函数语法差异。\n\n入门示例：基础SELECT查询、WHERE条件、ORDER BY排序、LIMIT限制；聚合GROUP BY/HAVING；JOIN连接（INNER/LEFT/RIGHT/FULL）；子查询与CTE（WITH）；窗口函数OVER(PARTITION BY ORDER BY)。\n\n## BI工具对比：Tableau vs Power BI vs FineBI\n\nTableau（Salesforce收购）：功能强大、可视化美观、交互性强、社区丰富；缺点价格昂贵、学习曲线陡峭。适合专业数据分析团队、大型企业。\n\nPower BI（Microsoft）：与Microsoft生态无缝集成（Excel、Azure、Dynamics 365）、价格实惠甚至有免费版、DAX语言强大、上手相对容易；缺点部分高级图表功能不如Tableau。适合中小企业、重度Excel用户。\n\nFineBI（帆软）：国产软件，支持中文数据、与国内数据源对接好、本地化支持强、价格实惠。适合国内企业、政府、教育机构。\n\n## R语言：统计计算与可视化优势\n\nR由统计学家Ross Ihaka和Robert Gentleman于1995年发明，专为统计计算和图形设计。优势：统计建模能力强（超过18000个CRAN包）、可视化出色（ggplot2、plotly）、学术界广泛使用、免费开源；缺点：学习曲线相对陡峭、大数据处理较弱、工业部署不如Python成熟。\n\n常用包：数据处理（dplyr、tidyr、data.table）、可视化（ggplot2、plotly、shiny）、统计建模（lm、glm、lme4）、机器学习（caret、xgboost、randomForest）、时间序列（forecast、tseries）。\n\n## 工具选型决策矩阵\n\n| 场景 | Excel | Python | SQL | Power BI | R |\n| --- | --- | --- | --- | --- | --- |\n| 10万行以内快速分析 | 首选 | 可选 | - | 可选 | 可选 |\n| 100万行以上大数据 | 不推荐 | 首选（Pandas/Dask） | 适用 | 视数据源 | 不推荐 |\n| 快速报表Dashboard | 适用 | 中等（需编程） | - | 首选 | 可选 |\n| 数据库数据提取 | 适用（Power Query） | 适用（SQLAlchemy） | 首选 | 适用 | 适用 |\n| 复杂统计/机器学习 | 不适用 | 首选 | - | 中等 | 适用 |\n| 自动化/可复现流程 | 弱（VBA） | 首选 | 适用 | 中等 | 适用 |\n\n## 工具组合使用最佳实践\n\n典型数据分析工作流：1.使用SQL从数据库提取原始数据；2.导出CSV/Excel；3.使用Python（Pandas）进行数据清洗和高级分析；4.使用Power BI/Tableau制作可视化Dashboard；5.在Excel中制作最终报告与演示。\n\n进阶流程：1.使用SQL/Python提取与清洗数据；2.用Python进行统计建模和机器学习；3.用Streamlit/Dash快速搭建交互式数据应用；4.将最终指标同步到Power BI/Tableau供业务方查看。\n\n关键原则：选择合适的工具而非最新最热的工具；团队内保持工具栈一致性以便知识共享；自动化重复的流程释放人力用于高价值分析；确保数据安全与权限控制（尤其SQL/Python连接生产数据库时）。\n\n## 关键要点总结\n\n1. Excel适合小型数据的快速分析与报表，但受数据量限制。\n2. Python拥有最丰富的数据分析生态，是当前最主流的工具。\n3. SQL是每个数据分析师的必备技能，是从数据库提取数据的标准方式。\n4. BI工具（Tableau、Power BI、FineBI）各有优势，根据团队和预算选择。\n5. R语言在统计建模和学术界有独特优势。\n6. 掌握工具组合使用比精通单一工具更有价值。',
        exercises: [
          {
            id: 'ex-1-4-1',
            question: '以下哪种场景最适合使用Python而不是Excel？',
            type: 'single',
            options: ['100行员工信息表统计', '100万行销售数据的复杂分析', '制作一张销售报表', '简单数据录入'],
            answer: '100万行销售数据的复杂分析',
            points: 10,
            explanation: 'Excel对大量数据的处理能力有限，百万级以上数据适合使用Python的Pandas等工具处理。',
            tags: ['数据分析', '工具选择', 'Python'],
            difficulty: 1
          },
          {
            id: 'ex-1-4-2',
            question: '以下哪些是Python数据分析常用库？（多选）',
            type: 'multiple',
            options: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Java'],
            answer: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
            points: 15,
            explanation: 'Pandas/NumPy/Matplotlib/Seaborn都是Python数据分析常用库，Java是编程语言不是Python库。',
            tags: ['Python', '库'],
            difficulty: 1
          },
          {
            id: 'ex-1-4-3',
            question: '从数据库提取数据最标准的工具是？',
            type: 'single',
            options: ['Excel', 'SQL', 'R', 'Tableau'],
            answer: 'SQL',
            points: 10,
            explanation: 'SQL（结构化查询语言）是从关系型数据库提取和处理数据的标准方式。',
            tags: ['SQL', '工具'],
            difficulty: 1
          },
          {
            id: 'ex-1-4-4',
            question: '哪个BI工具与Microsoft Office生态集成最好？',
            type: 'single',
            options: ['Tableau', 'Power BI', 'FineBI', 'Grafana'],
            answer: 'Power BI',
            points: 10,
            explanation: 'Power BI由Microsoft开发，与Excel、Azure等Microsoft生态无缝集成。',
            tags: ['BI', 'Power BI'],
            difficulty: 1
          },
          {
            id: 'ex-1-4-5',
            question: 'R语言的主要优势是？（多选）',
            type: 'multiple',
            options: ['统计建模能力强', '可视化能力出色', '在学术界广泛使用', '免费开源', '对大数据处理最好'],
            answer: ['统计建模能力强', '可视化能力出色', '在学术界广泛使用', '免费开源'],
            points: 15,
            explanation: 'R在统计建模和学术界有优势，但大数据处理不是其最强项。',
            tags: ['数据分析', 'R语言'],
            difficulty: 2
          },
          {
            id: 'ex-1-4-6',
            question: 'Jupyter Notebook中运行当前单元格并选中下一个的快捷键是？',
            type: 'single',
            options: ['Enter', 'Shift+Enter', 'Ctrl+Enter', 'Alt+Enter'],
            answer: 'Shift+Enter',
            points: 10,
            explanation: 'Shift+Enter运行当前单元格并选中下一个；Ctrl+Enter原地运行。',
            tags: ['Python', 'Jupyter', '快捷键'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-1-5',
        title: '数据分析伦理与合规',
        content: '# 数据分析伦理与合规\n\n## 学习目标\n\n- 能够理解数据隐私保护的基本原则与GDPR、个人信息保护法\n- 能够理解数据安全基础（加密、脱敏、访问控制）\n- 能够识别算法偏见与公平性问题及规避方法\n- 能够理解数据使用的伦理边界（数据最小化、告知同意）\n- 能够理解金融、医疗、电商的特殊合规要求\n- 能够理解数据分析师的职业道德准则\n\n## 数据隐私保护\n\n### GDPR（通用数据保护条例）\n\nGDPR于2018年5月25日在欧盟生效，是全球最严格的个人数据保护法规之一。\n\n数据主体权利：访问权（Right of Access）、更正权（Right to Rectification）、删除权/被遗忘权（Right to Erasure）、限制处理权（Right to Restrict Processing）、数据可携权（Right to Data Portability）、反对权（Right to Object）。\n\n合法处理的六个依据：数据主体的同意（Consent）、合同履行（Contract）、法定义务（Legal Obligation）、保护重大利益（Vital Interests）、公共任务（Public Task）、合法利益（Legitimate Interests）。\n\n数据处理原则：合法公平透明（Lawfulness Fairness Transparency）、目的限制（Purpose Limitation）、数据最小化（Data Minimization）、准确性（Accuracy）、存储限制（Storage Limitation）、完整性与保密性（Integrity and Confidentiality）、问责制（Accountability）。\n\n处罚：最高罚款2000万欧元或全球年营业额的4%，取两者较高者。\n\n### 中华人民共和国个人信息保护法\n\n个人信息保护法于2021年11月1日起施行，是中国首部全面系统的个人信息保护专门法律。\n\n核心要点：个人信息定义（与已识别或可识别自然人有关的信息，不包括匿名化处理后信息）；敏感个人信息（生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹、不满十四周岁未成年人信息）；处理原则（合法正当必要诚信、不得过度收集、公开透明、目的明确合理、最小影响方式、安全保障）；告知同意规则（以显著方式清晰语言告知并取得同意）；个人权利（知情、决定、查阅复制、更正补充、删除、要求解释）。\n\n处罚：最高罚款5000万元或上一年度营业额5%，并可追究刑事责任。\n\n## 数据安全基础\n\n加密（Encryption）：通过算法将明文转换为密文，只有持有正确密钥的人能解密。常用算法：对称加密（AES、DES，加解密使用相同密钥，速度快）；非对称加密（RSA、ECC，公钥加密私钥解密，安全性高但速度慢）。应用场景：数据库加密、传输加密（HTTPS/TLS）、文件加密、密码存储（加盐哈希bcrypt/scrypt/Argon2）。\n\n数据脱敏（Data Masking/Anonymization）：将敏感数据替换为虚构或修改后的数据，用于开发、测试、分析等非生产环境。常用方法：替换、打乱、遮蔽（手机号显示为138****1234）、日期偏移、数值随机化、截断删除。注意：脱敏与匿名化不同。脱敏数据理论上仍可能反推；匿名化不可逆无法还原原始数据。\n\n访问控制（Access Control）：确保只有授权人员能够访问数据。主要模型：自主访问控制（DAC，资源所有者决定谁可访问）、强制访问控制（MAC，系统根据安全级别强制控制）、基于角色（RBAC，最常用，根据用户角色分配权限）、基于属性（ABAC，根据用户/资源/环境属性动态判断）。最小权限原则（Principle of Least Privilege）：仅授予完成任务所需的最小权限。\n\n## 算法偏见与公平性\n\n什么是算法偏见？机器学习模型基于历史数据训练，如果历史数据包含人类社会的偏见（性别、种族、年龄、地域），模型会学习并放大这些偏见，最终在决策中产生不公平结果。\n\n典型案例：1.谷歌广告性别偏见（搜索高薪职位CEO向男性展示频率显著高于女性）；2.COMPAS再犯风险评估系统（对黑人被告标记为高风险概率近两倍于白人被告）；3.亚马逊招聘算法（对女性求职者存在偏见，简历中包含女性相关词被降分）；4.面部识别种族偏见（深肤色女性识别错误率高达35%，白种男性不足1%）。\n\n规避方法：1.数据层面（检查训练数据公平性、确保代表性、收集更多不足群体数据、敏感特征脱敏或移除）；2.算法层面（公平性约束训练如Adversarial Debiasing、公平性感知算法、后处理阶段调整阈值）；3.评估层面（定义并测量公平性指标如Equalized Odds、Demographic Parity，对不同群体分别评估）；4.流程层面（建立跨职能团队审核模型、设置人工审查环节、持续监控不同群体表现）。\n\n## 数据使用的伦理边界\n\n数据最小化原则：只收集实现特定目的所必需的数据，不收集与目的无关的数据。例如：某APP仅为提供天气预报功能却收集用户通讯录，违反数据最小化原则。\n\n告知-同意（Informed Consent）：收集和使用用户数据前，必须以清晰易懂的方式告知用户数据将如何被使用，并取得用户明示同意。关键点：使用清晰语言（避免法律术语堆砌）、明确说明使用目的（不能模糊说用于改善服务）、用户可随时撤回同意、同意必须自愿且具体（不能打包同意）。\n\n目的限制与二次使用：收集数据时声明的用途即为合法用途；超出原始用途再次使用需重新告知并取得同意。例如：收集用户健康数据用于提供健康建议，但不得未经同意将其用于营销目的。\n\n## 行业合规要求\n\n金融行业：国内：网络安全法、数据安全法、个人信息保护法、金融数据安全数据生命周期安全规范（JR/T 0223）、商业银行数据安全管理指引。要求：数据分类分级（公开/内部/敏感/核心）、关键数据加密存储、定期安全审计、数据跨境流动审批。国际：PCI DSS（支付卡行业数据安全标准）、SOX（萨班斯-奥克斯利法案）、BCBS 239。\n\n医疗行业：国内：健康医疗数据安全指南、医疗卫生机构网络安全管理办法、国家健康医疗大数据标准安全和服务管理办法。国际：HIPAA（美国健康保险可携带性和责任法案，保护患者健康信息）、HL7 FHIR（健康数据交换标准）。特别要求：医疗数据属高度敏感个人信息，必须加密存储和传输、严格访问控制、审计日志记录、去标识化处理后方可用于科研。\n\n电商行业：国内：电子商务法、消费者权益保护法、个人信息保护法。特别关注：用户交易信息（订单、支付、地址）的安全保护、用户画像与个性化推荐的透明性（不得进行大数据杀熟）、用户评价与评论管理（不得删差评）、促销信息推送需取得同意。\n\n## 数据分析师的职业道德准则\n\n1.诚实与正直：如实报告数据和分析结果，不操纵数据达到预设结论；承认分析的局限性和不确定性。\n\n2.客观与中立：在分析过程中保持客观中立立场，不因外部压力或个人偏好改变分析结论；明确区分事实陈述与观点建议。\n\n3.专业能力：保持和提升专业技能，确保分析方法和工具的正确性；承认知识盲区，不夸大分析能力。\n\n4.保密与安全：严格保护客户和用户的数据安全；不泄露商业机密和个人隐私；妥善处置敏感分析报告。\n\n5.透明与可解释：清晰说明分析方法、数据来源、假设条件；确保业务方能够理解并验证分析结论；不使用黑箱模型作为唯一决策依据。\n\n6.社会责任：思考分析结果对社会的潜在影响；警惕分析可能被滥用的情况；对有害应用提出警示。\n\n7.合规守法：遵守所在国家和地区的数据保护法规（GDPR、个人信息保护法等）；不协助或参与非法数据获取和使用。\n\n## 关键要点总结\n\n1. 数据隐私保护是合规底线，GDPR和个人信息保护法是目前最具影响力的法规。\n2. 数据安全三要素：加密（保护数据机密性）、脱敏（用于非生产环境）、访问控制（确保仅授权人员可访问）。\n3. 算法偏见真实存在，历史数据中的偏见会被模型学习并放大。\n4. 应从数据层面、算法层面、评估层面、流程层面多维度规避算法偏见。\n5. 数据最小化原则和告知-同意规则是数据使用的基本伦理边界。\n6. 不同行业有不同的特殊合规要求，金融和医疗行业尤其严格。\n7. 数据分析师应遵守职业道德准则，做负责任的数据分析。',
        exercises: [
          {
            id: 'ex-1-5-1',
            question: 'GDPR最高罚款金额为？',
            type: 'single',
            options: ['100万欧元', '1000万欧元或全球年营业额2%', '2000万欧元或全球年营业额4%', '1亿欧元'],
            answer: '2000万欧元或全球年营业额4%',
            points: 10,
            explanation: 'GDPR最高罚款为2000万欧元或全球年营业额的4%，取两者较高者。',
            tags: ['合规', 'GDPR', '数据隐私'],
            difficulty: 2
          },
          {
            id: 'ex-1-5-2',
            question: '以下哪些属于数据安全的基本手段？（多选）',
            type: 'multiple',
            options: ['加密', '数据脱敏', '访问控制', '数据可视化'],
            answer: ['加密', '数据脱敏', '访问控制'],
            points: 15,
            explanation: '加密、脱敏、访问控制是数据安全的三大基础手段。',
            tags: ['数据安全'],
            difficulty: 1
          },
          {
            id: 'ex-1-5-3',
            question: '亚马逊招聘AI对女性求职者存在偏见的根本原因是？',
            type: 'single',
            options: ['AI本身有偏见', '训练数据反映了历史偏见', '工程师故意植入偏见', '数据量不足'],
            answer: '训练数据反映了历史偏见',
            points: 10,
            explanation: '模型基于过去十年以男性为主的科技行业招聘数据训练，学习并放大了历史数据中的性别偏见。',
            tags: ['算法偏见', '伦理'],
            difficulty: 2
          },
          {
            id: 'ex-1-5-4',
            question: '数据最小化原则的含义是？',
            type: 'single',
            options: ['尽可能收集最小体积的数据', '只收集实现特定目的所必需的数据', '使用最小的数据库', '只保存1个月的数据'],
            answer: '只收集实现特定目的所必需的数据',
            points: 10,
            explanation: '数据最小化原则：只收集实现特定目的所必需的数据，不收集与目的无关的数据。',
            tags: ['数据隐私', '伦理'],
            difficulty: 1
          },
          {
            id: 'ex-1-5-5',
            question: 'HIPAA主要适用于哪个行业？',
            type: 'single',
            options: ['金融', '医疗', '电商', '教育'],
            answer: '医疗',
            points: 10,
            explanation: 'HIPAA是美国保护患者健康信息的法律，适用于医疗行业。',
            tags: ['合规', 'HIPAA', '医疗'],
            difficulty: 2
          },
          {
            id: 'ex-1-5-6',
            question: '仅授予完成任务所需的最小权限，这被称为？',
            type: 'single',
            options: ['最大化权限原则', '最小权限原则', '按需分配原则', '自由访问原则'],
            answer: '最小权限原则',
            points: 10,
            explanation: '最小权限原则（Principle of Least Privilege）要求仅授予完成任务所需的最小权限。',
            tags: ['访问控制', '安全'],
            difficulty: 1
          },
          {
            id: 'ex-1-5-7',
            question: '以下哪些属于数据分析师的职业道德准则？（多选）',
            type: 'multiple',
            options: ['诚实与正直', '客观与中立', '保密与安全', '追求最复杂算法'],
            answer: ['诚实与正直', '客观与中立', '保密与安全'],
            points: 15,
            explanation: '诚实正直、客观中立、保密安全都是数据分析师应遵守的职业道德准则。',
            tags: ['伦理', '职业道德'],
            difficulty: 1
          },
          {
            id: 'ex-1-5-8',
            question: '非对称加密与对称加密的主要区别是？',
            type: 'single',
            options: ['使用相同密钥 vs 使用不同密钥', '一个快一个慢', '用途不同', '没有区别'],
            answer: '使用相同密钥 vs 使用不同密钥',
            points: 10,
            explanation: '对称加密使用相同密钥加解密；非对称加密使用公钥加密私钥解密，使用不同的密钥。',
            tags: ['数据安全', '加密'],
            difficulty: 1
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
    thumbnail: 'https://picsum.photos/seed/excel/400/400',
    chapters: [
      {
        id: 'chapter-2-1',
        title: 'Excel基础操作与数据录入',
        content: '# Excel数据处理2 - Excel基础操作与数据录入\n\n这是Excel数据处理课程的章节1：Excel基础操作与数据录入的内容模板，正在扩充中。\n\n## 学习要点\n\n- Excel基础操作与数据录入\n- 数据整理与清洗\n- 核心函数应用\n- 数据透视表与透视图\n- 图表制作与Dashboard设计\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-2-1-1',
            question: '关于Excel基础操作与数据录入的基础练习题（本题测试对章节1核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节1核心概念Excel基础操作与数据录入的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['excel', 'Exce'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-2',
            question: '以下哪些属于Excel基础操作与数据录入相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Excel基础操作与数据录入的相关知识点。无关选项描述的是其他内容。',
            tags: ['excel', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-3',
            question: 'Excel基础操作与数据录入是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Excel基础操作与数据录入确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['excel', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-2-2',
        title: '数据整理与清洗',
        content: '# Excel数据处理2 - 数据整理与清洗\n\n这是Excel数据处理课程的章节2：数据整理与清洗的内容模板，正在扩充中。\n\n## 学习要点\n\n- Excel基础操作与数据录入\n- 数据整理与清洗\n- 核心函数应用\n- 数据透视表与透视图\n- 图表制作与Dashboard设计\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-2-2-1',
            question: '关于数据整理与清洗的基础练习题（本题测试对章节2核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节2核心概念数据整理与清洗的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['excel', '数据整理'],
            difficulty: 1
          },
          {
            id: 'ex-2-2-2',
            question: '以下哪些属于数据整理与清洗相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于数据整理与清洗的相关知识点。无关选项描述的是其他内容。',
            tags: ['excel', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-2-2-3',
            question: '数据整理与清洗是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。数据整理与清洗确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['excel', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-2-3',
        title: '核心函数应用',
        content: '# Excel数据处理2 - 核心函数应用\n\n这是Excel数据处理课程的章节3：核心函数应用的内容模板，正在扩充中。\n\n## 学习要点\n\n- Excel基础操作与数据录入\n- 数据整理与清洗\n- 核心函数应用\n- 数据透视表与透视图\n- 图表制作与Dashboard设计\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-2-3-1',
            question: '关于核心函数应用的基础练习题（本题测试对章节3核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节3核心概念核心函数应用的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['excel', '核心函数'],
            difficulty: 1
          },
          {
            id: 'ex-2-3-2',
            question: '以下哪些属于核心函数应用相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于核心函数应用的相关知识点。无关选项描述的是其他内容。',
            tags: ['excel', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-2-3-3',
            question: '核心函数应用是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。核心函数应用确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['excel', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-2-4',
        title: '数据透视表与透视图',
        content: '# Excel数据处理2 - 数据透视表与透视图\n\n这是Excel数据处理课程的章节4：数据透视表与透视图的内容模板，正在扩充中。\n\n## 学习要点\n\n- Excel基础操作与数据录入\n- 数据整理与清洗\n- 核心函数应用\n- 数据透视表与透视图\n- 图表制作与Dashboard设计\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-2-4-1',
            question: '关于数据透视表与透视图的基础练习题（本题测试对章节4核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节4核心概念数据透视表与透视图的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['excel', '数据透视'],
            difficulty: 1
          },
          {
            id: 'ex-2-4-2',
            question: '以下哪些属于数据透视表与透视图相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于数据透视表与透视图的相关知识点。无关选项描述的是其他内容。',
            tags: ['excel', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-2-4-3',
            question: '数据透视表与透视图是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。数据透视表与透视图确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['excel', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-2-5',
        title: '图表制作与Dashboard设计',
        content: '# Excel数据处理2 - 图表制作与Dashboard设计\n\n这是Excel数据处理课程的章节5：图表制作与Dashboard设计的内容模板，正在扩充中。\n\n## 学习要点\n\n- Excel基础操作与数据录入\n- 数据整理与清洗\n- 核心函数应用\n- 数据透视表与透视图\n- 图表制作与Dashboard设计\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-2-5-1',
            question: '关于图表制作与Dashboard设计的基础练习题（本题测试对章节5核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节5核心概念图表制作与Dashboard设计的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['excel', '图表制作'],
            difficulty: 1
          },
          {
            id: 'ex-2-5-2',
            question: '以下哪些属于图表制作与Dashboard设计相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于图表制作与Dashboard设计的相关知识点。无关选项描述的是其他内容。',
            tags: ['excel', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-2-5-3',
            question: '图表制作与Dashboard设计是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。图表制作与Dashboard设计确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['excel', '判断题'],
            difficulty: 1
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
    thumbnail: 'https://picsum.photos/seed/python/400/400',
    chapters: [
      {
        id: 'chapter-3-1',
        title: 'Python基础语法',
        content: '# Python数据分析3 - Python基础语法\n\n这是Python数据分析课程的章节1：Python基础语法的内容模板，正在扩充中。\n\n## 学习要点\n\n- Python基础语法\n- NumPy数值计算\n- Pandas数据处理\n- Pandas数据分析\n- Matplotlib数据可视化\n- 综合实战案例\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-3-1-1',
            question: '关于Python基础语法的基础练习题（本题测试对章节1核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节1核心概念Python基础语法的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['python', 'Pyth'],
            difficulty: 1
          },
          {
            id: 'ex-3-1-2',
            question: '以下哪些属于Python基础语法相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Python基础语法的相关知识点。无关选项描述的是其他内容。',
            tags: ['python', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-1-3',
            question: 'Python基础语法是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Python基础语法确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['python', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-3-2',
        title: 'NumPy数值计算',
        content: '# Python数据分析3 - NumPy数值计算\n\n这是Python数据分析课程的章节2：NumPy数值计算的内容模板，正在扩充中。\n\n## 学习要点\n\n- Python基础语法\n- NumPy数值计算\n- Pandas数据处理\n- Pandas数据分析\n- Matplotlib数据可视化\n- 综合实战案例\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-3-2-1',
            question: '关于NumPy数值计算的基础练习题（本题测试对章节2核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节2核心概念NumPy数值计算的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['python', 'NumP'],
            difficulty: 1
          },
          {
            id: 'ex-3-2-2',
            question: '以下哪些属于NumPy数值计算相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于NumPy数值计算的相关知识点。无关选项描述的是其他内容。',
            tags: ['python', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-2-3',
            question: 'NumPy数值计算是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。NumPy数值计算确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['python', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-3-3',
        title: 'Pandas数据处理',
        content: '# Python数据分析3 - Pandas数据处理\n\n这是Python数据分析课程的章节3：Pandas数据处理的内容模板，正在扩充中。\n\n## 学习要点\n\n- Python基础语法\n- NumPy数值计算\n- Pandas数据处理\n- Pandas数据分析\n- Matplotlib数据可视化\n- 综合实战案例\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-3-3-1',
            question: '关于Pandas数据处理的基础练习题（本题测试对章节3核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节3核心概念Pandas数据处理的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['python', 'Pand'],
            difficulty: 1
          },
          {
            id: 'ex-3-3-2',
            question: '以下哪些属于Pandas数据处理相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Pandas数据处理的相关知识点。无关选项描述的是其他内容。',
            tags: ['python', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-3-3',
            question: 'Pandas数据处理是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Pandas数据处理确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['python', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-3-4',
        title: 'Pandas数据分析',
        content: '# Python数据分析3 - Pandas数据分析\n\n这是Python数据分析课程的章节4：Pandas数据分析的内容模板，正在扩充中。\n\n## 学习要点\n\n- Python基础语法\n- NumPy数值计算\n- Pandas数据处理\n- Pandas数据分析\n- Matplotlib数据可视化\n- 综合实战案例\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-3-4-1',
            question: '关于Pandas数据分析的基础练习题（本题测试对章节4核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节4核心概念Pandas数据分析的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['python', 'Pand'],
            difficulty: 1
          },
          {
            id: 'ex-3-4-2',
            question: '以下哪些属于Pandas数据分析相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Pandas数据分析的相关知识点。无关选项描述的是其他内容。',
            tags: ['python', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-4-3',
            question: 'Pandas数据分析是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Pandas数据分析确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['python', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-3-5',
        title: 'Matplotlib数据可视化',
        content: '# Python数据分析3 - Matplotlib数据可视化\n\n这是Python数据分析课程的章节5：Matplotlib数据可视化的内容模板，正在扩充中。\n\n## 学习要点\n\n- Python基础语法\n- NumPy数值计算\n- Pandas数据处理\n- Pandas数据分析\n- Matplotlib数据可视化\n- 综合实战案例\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-3-5-1',
            question: '关于Matplotlib数据可视化的基础练习题（本题测试对章节5核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节5核心概念Matplotlib数据可视化的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['python', 'Matp'],
            difficulty: 1
          },
          {
            id: 'ex-3-5-2',
            question: '以下哪些属于Matplotlib数据可视化相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Matplotlib数据可视化的相关知识点。无关选项描述的是其他内容。',
            tags: ['python', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-5-3',
            question: 'Matplotlib数据可视化是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Matplotlib数据可视化确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['python', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-3-6',
        title: '综合实战案例',
        content: '# Python数据分析3 - 综合实战案例\n\n这是Python数据分析课程的章节6：综合实战案例的内容模板，正在扩充中。\n\n## 学习要点\n\n- Python基础语法\n- NumPy数值计算\n- Pandas数据处理\n- Pandas数据分析\n- Matplotlib数据可视化\n- 综合实战案例\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-3-6-1',
            question: '关于综合实战案例的基础练习题（本题测试对章节6核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节6核心概念综合实战案例的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['python', '综合实战'],
            difficulty: 1
          },
          {
            id: 'ex-3-6-2',
            question: '以下哪些属于综合实战案例相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于综合实战案例的相关知识点。无关选项描述的是其他内容。',
            tags: ['python', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-6-3',
            question: '综合实战案例是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。综合实战案例确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['python', '判断题'],
            difficulty: 1
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
    thumbnail: 'https://picsum.photos/seed/visualization/400/400',
    chapters: [
      {
        id: 'chapter-4-1',
        title: '可视化设计原则',
        content: '# 数据可视化原理4 - 可视化设计原则\n\n这是数据可视化原理课程的章节1：可视化设计原则的内容模板，正在扩充中。\n\n## 学习要点\n\n- 可视化设计原则\n- 图表类型与选择\n- Matplotlib实战\n- Seaborn高级可视化\n- 交互式可视化与Dashboard\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-4-1-1',
            question: '关于可视化设计原则的基础练习题（本题测试对章节1核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节1核心概念可视化设计原则的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['visualization', '可视化设'],
            difficulty: 1
          },
          {
            id: 'ex-4-1-2',
            question: '以下哪些属于可视化设计原则相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于可视化设计原则的相关知识点。无关选项描述的是其他内容。',
            tags: ['visualization', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-1-3',
            question: '可视化设计原则是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。可视化设计原则确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['visualization', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-4-2',
        title: '图表类型与选择',
        content: '# 数据可视化原理4 - 图表类型与选择\n\n这是数据可视化原理课程的章节2：图表类型与选择的内容模板，正在扩充中。\n\n## 学习要点\n\n- 可视化设计原则\n- 图表类型与选择\n- Matplotlib实战\n- Seaborn高级可视化\n- 交互式可视化与Dashboard\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-4-2-1',
            question: '关于图表类型与选择的基础练习题（本题测试对章节2核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节2核心概念图表类型与选择的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['visualization', '图表类型'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-2',
            question: '以下哪些属于图表类型与选择相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于图表类型与选择的相关知识点。无关选项描述的是其他内容。',
            tags: ['visualization', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-3',
            question: '图表类型与选择是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。图表类型与选择确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['visualization', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-4-3',
        title: 'Matplotlib实战',
        content: '# 数据可视化原理4 - Matplotlib实战\n\n这是数据可视化原理课程的章节3：Matplotlib实战的内容模板，正在扩充中。\n\n## 学习要点\n\n- 可视化设计原则\n- 图表类型与选择\n- Matplotlib实战\n- Seaborn高级可视化\n- 交互式可视化与Dashboard\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-4-3-1',
            question: '关于Matplotlib实战的基础练习题（本题测试对章节3核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节3核心概念Matplotlib实战的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['visualization', 'Matp'],
            difficulty: 1
          },
          {
            id: 'ex-4-3-2',
            question: '以下哪些属于Matplotlib实战相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Matplotlib实战的相关知识点。无关选项描述的是其他内容。',
            tags: ['visualization', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-3-3',
            question: 'Matplotlib实战是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Matplotlib实战确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['visualization', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-4-4',
        title: 'Seaborn高级可视化',
        content: '# 数据可视化原理4 - Seaborn高级可视化\n\n这是数据可视化原理课程的章节4：Seaborn高级可视化的内容模板，正在扩充中。\n\n## 学习要点\n\n- 可视化设计原则\n- 图表类型与选择\n- Matplotlib实战\n- Seaborn高级可视化\n- 交互式可视化与Dashboard\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-4-4-1',
            question: '关于Seaborn高级可视化的基础练习题（本题测试对章节4核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节4核心概念Seaborn高级可视化的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['visualization', 'Seab'],
            difficulty: 1
          },
          {
            id: 'ex-4-4-2',
            question: '以下哪些属于Seaborn高级可视化相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Seaborn高级可视化的相关知识点。无关选项描述的是其他内容。',
            tags: ['visualization', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-4-3',
            question: 'Seaborn高级可视化是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Seaborn高级可视化确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['visualization', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-4-5',
        title: '交互式可视化与Dashboard',
        content: '# 数据可视化原理4 - 交互式可视化与Dashboard\n\n这是数据可视化原理课程的章节5：交互式可视化与Dashboard的内容模板，正在扩充中。\n\n## 学习要点\n\n- 可视化设计原则\n- 图表类型与选择\n- Matplotlib实战\n- Seaborn高级可视化\n- 交互式可视化与Dashboard\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-4-5-1',
            question: '关于交互式可视化与Dashboard的基础练习题（本题测试对章节5核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节5核心概念交互式可视化与Dashboard的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['visualization', '交互式可'],
            difficulty: 1
          },
          {
            id: 'ex-4-5-2',
            question: '以下哪些属于交互式可视化与Dashboard相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于交互式可视化与Dashboard的相关知识点。无关选项描述的是其他内容。',
            tags: ['visualization', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-5-3',
            question: '交互式可视化与Dashboard是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。交互式可视化与Dashboard确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['visualization', '判断题'],
            difficulty: 1
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
    thumbnail: 'https://picsum.photos/seed/bi/400/400',
    chapters: [
      {
        id: 'chapter-5-1',
        title: '商业智能概述',
        content: '# 商业智能与报表5 - 商业智能概述\n\n这是商业智能与报表课程的章节1：商业智能概述的内容模板，正在扩充中。\n\n## 学习要点\n\n- 商业智能概述\n- 数据仓库与ETL\n- Power BI入门\n- 报表与Dashboard设计\n- BI项目实战\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-5-1-1',
            question: '关于商业智能概述的基础练习题（本题测试对章节1核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节1核心概念商业智能概述的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['bi', '商业智能'],
            difficulty: 1
          },
          {
            id: 'ex-5-1-2',
            question: '以下哪些属于商业智能概述相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于商业智能概述的相关知识点。无关选项描述的是其他内容。',
            tags: ['bi', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-5-1-3',
            question: '商业智能概述是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。商业智能概述确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['bi', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-5-2',
        title: '数据仓库与ETL',
        content: '# 商业智能与报表5 - 数据仓库与ETL\n\n这是商业智能与报表课程的章节2：数据仓库与ETL的内容模板，正在扩充中。\n\n## 学习要点\n\n- 商业智能概述\n- 数据仓库与ETL\n- Power BI入门\n- 报表与Dashboard设计\n- BI项目实战\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-5-2-1',
            question: '关于数据仓库与ETL的基础练习题（本题测试对章节2核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节2核心概念数据仓库与ETL的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['bi', '数据仓库'],
            difficulty: 1
          },
          {
            id: 'ex-5-2-2',
            question: '以下哪些属于数据仓库与ETL相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于数据仓库与ETL的相关知识点。无关选项描述的是其他内容。',
            tags: ['bi', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-5-2-3',
            question: '数据仓库与ETL是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。数据仓库与ETL确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['bi', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-5-3',
        title: 'Power BI入门',
        content: '# 商业智能与报表5 - Power BI入门\n\n这是商业智能与报表课程的章节3：Power BI入门的内容模板，正在扩充中。\n\n## 学习要点\n\n- 商业智能概述\n- 数据仓库与ETL\n- Power BI入门\n- 报表与Dashboard设计\n- BI项目实战\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-5-3-1',
            question: '关于Power BI入门的基础练习题（本题测试对章节3核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节3核心概念Power BI入门的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['bi', 'Powe'],
            difficulty: 1
          },
          {
            id: 'ex-5-3-2',
            question: '以下哪些属于Power BI入门相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于Power BI入门的相关知识点。无关选项描述的是其他内容。',
            tags: ['bi', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-5-3-3',
            question: 'Power BI入门是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。Power BI入门确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['bi', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-5-4',
        title: '报表与Dashboard设计',
        content: '# 商业智能与报表5 - 报表与Dashboard设计\n\n这是商业智能与报表课程的章节4：报表与Dashboard设计的内容模板，正在扩充中。\n\n## 学习要点\n\n- 商业智能概述\n- 数据仓库与ETL\n- Power BI入门\n- 报表与Dashboard设计\n- BI项目实战\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-5-4-1',
            question: '关于报表与Dashboard设计的基础练习题（本题测试对章节4核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节4核心概念报表与Dashboard设计的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['bi', '报表与D'],
            difficulty: 1
          },
          {
            id: 'ex-5-4-2',
            question: '以下哪些属于报表与Dashboard设计相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于报表与Dashboard设计的相关知识点。无关选项描述的是其他内容。',
            tags: ['bi', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-5-4-3',
            question: '报表与Dashboard设计是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。报表与Dashboard设计确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['bi', '判断题'],
            difficulty: 1
          }
        ]
      },
      {
        id: 'chapter-5-5',
        title: 'BI项目实战',
        content: '# 商业智能与报表5 - BI项目实战\n\n这是商业智能与报表课程的章节5：BI项目实战的内容模板，正在扩充中。\n\n## 学习要点\n\n- 商业智能概述\n- 数据仓库与ETL\n- Power BI入门\n- 报表与Dashboard设计\n- BI项目实战\n\n## 说明\n\n本章节内容正在扩充中，将补充完整的知识点、案例说明和练习题。敬请期待。',
        exercises: [
          {
            id: 'ex-5-5-1',
            question: '关于BI项目实战的基础练习题（本题测试对章节5核心概念的理解）。',
            type: 'single',
            options: ['选项A（正确答案）', '选项B', '选项C', '选项D'],
            answer: '选项A（正确答案）',
            points: 10,
            explanation: '本题测试对章节5核心概念BI项目实战的理解。选项A为正确答案，其他选项均存在不同程度的偏差。',
            tags: ['bi', 'BI项目'],
            difficulty: 1
          },
          {
            id: 'ex-5-5-2',
            question: '以下哪些属于BI项目实战相关的知识点？（多选）',
            type: 'multiple',
            options: ['核心概念1', '核心概念2', '无关选项', '最佳实践'],
            answer: ['核心概念1', '核心概念2', '最佳实践'],
            points: 15,
            explanation: '核心概念1、核心概念2、最佳实践均属于BI项目实战的相关知识点。无关选项描述的是其他内容。',
            tags: ['bi', '多选题'],
            difficulty: 1
          },
          {
            id: 'ex-5-5-3',
            question: 'BI项目实战是数据分析中重要的基础概念之一。（判断）',
            type: 'truefalse',
            answer: true,
            points: 10,
            explanation: '正确。BI项目实战确实是数据分析领域的重要概念，值得认真学习和实践。',
            tags: ['bi', '判断题'],
            difficulty: 1
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
    thumbnail: 'https://picsum.photos/seed/business/400/400',
    chapters: [
    {
      id: 'chapter-6-1',
      title: '业务指标体系构建',
      content: '# 第一章 业务指标体系构建\n\n## 1.1 什么是好的指标体系\n\n在数据驱动决策的时代，指标体系是企业运营的导航仪。一个好的指标体系能够帮助团队聚焦目标、发现问题、衡量进展。它不是指标的简单堆砌，而是一套围绕核心战略目标、贯穿业务全流程、能够层层拆解落地的系统。建立指标体系的过程，本质上是将抽象的战略目标转化为可衡量、可执行的业务动作的过程。\n\n好的指标体系具备四个典型特征：系统性、可对比性、可拆解性、可操作性。系统性意味着指标之间存在逻辑关联，能够相互印证；可对比性要求指标有清晰的基准和口径，支持横向（不同业务线）和纵向（不同时间段）的比较；可拆解性指高层指标能够逐层下钻到具体的执行动作；可操作性则要求指标能够直接指导业务决策。\n\n## 1.2 北极星指标 vs 虚荣指标\n\n北极星指标（North Star Metric）是企业最核心、最能代表长期价值创造能力的指标。它应该同时具备三个属性：能够反映客户价值、与业务增长高度相关、团队有能力影响。典型的北极星指标如Airbnb的"每晚客房预订数"、字节跳动的"日活跃用户数"、Netflix的"每月观看时长"。它的核心作用是统一全公司的方向感，让每个人都知道什么最重要。\n\n虚荣指标（Vanity Metric）则是那些看起来很好看、但无法真正指导决策的指标。常见的虚荣指标包括：总注册用户数（不看留存）、累计下载量（不看转化）、总浏览量（不看深度）。虚荣指标的问题在于它们容易被操纵、无法反映真实价值。判断一个指标是否为北极星指标的经典检验是：如果这个指标变好，是否一定意味着业务变得更好？如果答案是"不一定"，那它很可能是虚荣指标。\n\n## 1.3 指标分层方法论\n\n指标分层的核心思想是将指标划分为不同层级，形成从战略到执行的完整链路。常见的分层方式是"三级指标体系"：一级指标（战略层）对应北极星指标，反映公司整体健康度；二级指标（业务层）对应核心业务流程的关键节点，如获客、转化、留存、收入；三级指标（执行层）则是具体部门或岗位可以直接操作的指标，如页面点击率、客服响应时长。\n\n分层的价值在于建立因果链条。当一级指标发生变化时，管理层能够快速定位是哪个二级指标驱动的变化，再进一步下钻到三级指标找到执行层面的问题。这种层级结构也天然支持不同管理层级的决策需求：CEO关注一级指标，总监关注二级指标，一线团队关注三级指标。\n\n## 1.4 OSM 模型拆解方法\n\nOSM 模型由 Objective（目标）、Strategy（策略）、Measurement（度量）三个部分组成。它是一个从业务目标出发，通过策略选择来达成目标，并通过指标体系来衡量成效的经典框架。具体应用时，首先定义清晰的业务目标（O），比如"提升新用户留存"；然后分析达成目标的关键策略路径（S），比如"优化新人引导流程"、"推送个性化内容"等；最后为每个策略路径设计对应的衡量指标（M）。\n\nOSM 模型的精髓在于其因果思维。传统指标体系的问题在于指标与目标之间缺乏明确的因果联系。OSM 强制思考每个指标背后对应的策略是什么、策略对应的目标是什么。这使得指标体系不再是孤立的数字集合，而是有血有肉的决策支持系统。实践中，可以使用 OKR 与 OSM 结合的方式，让指标体系与组织目标管理形成闭环。\n\n## 1.5 AARRR 海盗模型详解\n\nAARRR 模型由硅谷著名创业家 Dave McClure 提出，将用户生命周期划分为五个关键阶段：Acquisition（获取）、Activation（激活）、Retention（留存）、Revenue（收入）、Referral（推荐）。每个阶段都有对应的核心指标：获客阶段关注渠道质量和获客成本；激活阶段关注新用户首动完成率和激活率；留存阶段关注次日留存、7日留存、30日留存；收入阶段关注付费转化率、ARPU、客单价；推荐阶段关注分享率和病毒系数。\n\nAARRR 的应用价值在于它提供了一个通用的漏斗视角。通过分析每个环节的转化率变化，可以快速定位业务瓶颈。例如，如果激活率下降，应该检查新用户引导流程；如果留存率下降，应该关注产品价值体验。在实际应用中，AARRR 模型常常与分层指标体系结合，形成深度嵌套的指标结构。\n\n## 1.6 指标口径一致性管理\n\n指标口径是指标体系的地基。口径不一致会导致"数据打架"——同一指标在不同部门报出不同数值，严重损害数据信任。口径管理的核心工作包括：明确指标的业务定义、数据来源、计算逻辑、更新频率。建立指标字典（Metric Dictionary）或指标管理平台是常见做法。\n\n口径一致性需要从三个层面保障。组织层面：设立数据治理委员会，统一审批指标定义；流程层面：建立指标注册和变更流程，确保任何指标的定义都经过审核；工具层面：使用统一的数据仓库和BI平台，指标定义由平台层保证一致性。特别需要注意的是，指标口径的定义必须有业务人员参与，不能只由数据团队闭门造车，否则容易出现"技术上正确但业务上无用"的指标。\n\n## 1.7 构建指标体系的实操步骤\n\n完整的指标体系建设通常遵循七个步骤：第一步，明确业务战略和北极星指标；第二步，梳理核心业务流程和关键节点；第三步，使用OSM/AARRR等框架进行指标拆解；第四步，对每个指标进行明确定义和口径设计；第五步，将指标分配到对应的组织层级和部门；第六步，搭建数据采集和报表展示系统；第七步，定期复盘和迭代指标体系。\n\n在实操中，最大的挑战不是设计指标本身，而是推动组织对齐。一个设计完美但无人使用的指标体系毫无价值。成功的关键在于：在建设过程中让业务团队深度参与，让他们理解指标背后的业务逻辑；从最痛的问题切入，而不是追求一步到位；先跑通最小可用版本，用价值驱动后续的扩展。\n\n## 1.8 本章小结\n\n本章系统介绍了业务指标体系的构建方法。从北极星指标与虚荣指标的对比入手，强调了指标体系的价值导向；通过指标分层方法论建立了战略到执行的链接；详细讲解了OSM和AARRR两个核心拆解框架；最后强调了指标口径一致性的重要性和实操路径。掌握这些方法后，读者应该能够为自己所在的业务场景设计一套具有实战价值的指标体系。下一章将进入用户分析领域，学习如何从用户视角理解业务。\n',
      exercises: [
      {
        id: 'ex-6-1-1',
        question: '以下哪项最符合北极星指标的定义？',
        type: 'single',
        options: ['A. 网站总注册用户数', 'B. 累计下载量', 'C. 每月付费用户产生的总GMV', 'D. 员工数量'],
        answer: 'C',
        points: 2,
        explanation: '北极星指标需要同时反映客户价值、与业务增长相关且团队可影响。选项C能够反映真实业务创造的价值，其他选项多为虚荣指标，容易被操纵且无法反映核心价值。',
        tags: ['北极星指标', '指标定义'],
        difficulty: 1,
      },
      {
        id: 'ex-6-1-2',
        question: '以下哪些属于典型的虚荣指标？（多选）',
        type: 'multiple',
        options: ['A. 总注册用户数', 'B. 累计下载量', 'C. 月活跃用户数', 'D. 总浏览量（PV）', 'E. 付费用户数'],
        answer: ['A', 'B', 'D'],
        points: 3,
        explanation: '总注册用户数、累计下载量、总浏览量都属于典型的虚荣指标，它们只反映总量而不反映质量，容易被操纵。月活跃用户数和付费用户数更能反映真实价值，通常作为核心指标使用。',
        tags: ['虚荣指标', '指标类型'],
        difficulty: 2,
      },
      {
        id: 'ex-6-1-3',
        question: '在三级指标体系中，次日留存率属于哪一级指标？',
        type: 'single',
        options: ['A. 一级指标（战略层）', 'B. 二级指标（业务层）', 'C. 三级指标（执行层）', 'D. 不属于任何一层'],
        answer: 'B',
        points: 2,
        explanation: '次日留存率属于二级指标（业务层），它反映了核心业务流程中的关键健康度，但还不是最终的北极星指标，也不是一线执行的具体操作指标。',
        tags: ['指标分层', '留存分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-1-4',
        question: 'OSM模型中，Measurement（度量）的作用是什么？',
        type: 'single',
        options: ['A. 定义业务的长期愿景', 'B. 描述实现目标的具体策略路径', 'C. 为每个策略路径设计对应的衡量指标', 'D. 分配执行人员的具体任务'],
        answer: 'C',
        points: 2,
        explanation: 'OSM模型中，O是目标，S是策略，M是度量。M的核心作用是为每个策略路径设计具体的衡量指标，让策略的效果可量化、可追踪。',
        tags: ['OSM模型', '指标拆解'],
        difficulty: 1,
      },
      {
        id: 'ex-6-1-5',
        question: 'AARRR模型中的第二个A（Activation）阶段，最核心关注的指标是什么？',
        type: 'single',
        options: ['A. 获客成本（CAC）', 'B. 新用户首动完成率和激活率', 'C. 30日留存率', 'D. 付费转化率'],
        answer: 'B',
        points: 2,
        explanation: 'Activation（激活）阶段的核心是新用户是否真正体验到产品价值。首动完成率和激活率是衡量激活效果最关键的指标，反映了新用户引导流程的质量。',
        tags: ['AARRR', '用户激活'],
        difficulty: 1,
      },
      {
        id: 'ex-6-1-6',
        question: '关于指标口径一致性，以下说法正确的是？（多选）',
        type: 'multiple',
        options: ['A. 指标口径应该由数据团队独立定义，不需要业务参与', 'B. 同一指标在不同部门必须使用相同的定义和计算逻辑', 'C. 建立指标字典是口径管理的常见做法', 'D. 口径不一致会严重损害数据的可信度', 'E. 指标口径一旦确定就不能更改'],
        answer: ['B', 'C', 'D'],
        points: 3,
        explanation: '指标口径需要业务人员参与定义，不能由数据团队闭门造车（A错误）。同一指标在不同部门必须统一（B正确），建立指标字典是标准做法（C正确），口径不一致会严重影响数据信任（D正确）。口径可以根据业务变化迭代更新（E错误）。',
        tags: ['指标口径', '数据治理'],
        difficulty: 2,
      },
      {
        id: 'ex-6-1-7',
        question: '判断：AARRR模型五个阶段的顺序是：获客-留存-激活-收入-推荐。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: false,
        points: 1,
        explanation: 'AARRR的正确顺序是：获客（Acquisition）-激活（Activation）-留存（Retention）-收入（Revenue）-推荐（Referral）。题目中将激活和留存的顺序颠倒了。',
        tags: ['AARRR', '用户生命周期'],
        difficulty: 1,
      },
      {
        id: 'ex-6-1-8',
        question: '某电商平台北极星指标GMV下降，使用指标分层方法论分析时，应该首先关注什么？',
        type: 'single',
        options: ['A. 立即查看每个商品的详情页点击率', 'B. 先看二级指标：用户数、转化率、客单价的变化', 'C. 直接去查看客服的响应时长', 'D. 检查服务器的运行日志'],
        answer: 'B',
        points: 2,
        explanation: '指标分层方法论要求从上层到下层逐步下钻。当北极星指标（一级）变化时，首先关注二级指标（如GMV=用户数*转化率*客单价），然后再继续下钻到三级执行指标。',
        tags: ['指标分层', '指标拆解'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-6-2',
      title: '用户分析',
      content: '# 第二章 用户分析\n\n## 2.1 用户分析的价值与框架\n\n用户是所有商业活动的起点和终点。用户分析的核心价值在于通过数据理解用户是谁、用户做了什么、用户为什么这么做。没有用户分析的业务决策就像在黑暗中航行，充满不确定性。建立用户分析能力的企业能够实现精准营销、个性化推荐、差异化服务，从而获得显著的竞争优势。\n\n用户分析的核心框架可以概括为三个层次：第一层是用户画像，回答"用户是谁"的问题；第二层是用户行为分析，回答"用户做了什么"的问题；第三层是用户价值分析，回答"用户值多少钱"的问题。这三个层次从静态属性到动态行为再到价值评估，形成了完整的用户认知链路。\n\n## 2.2 用户画像的核心属性\n\n用户画像是对用户特征的结构化描述。一个完整的用户画像通常包含四大类属性：第一类是人口统计学属性，包括年龄、性别、地域、职业、收入水平、教育程度等。这类属性相对稳定，能够帮助业务进行基础的人群分层。第二类是消费行为属性，包括消费频次、消费金额、消费品类偏好、价格敏感度、购买渠道等。这类属性直接与收入相关，是营销决策的重要依据。\n\n第三类是产品使用属性，包括注册时长、活跃度、功能使用深度、核心动作频次、留存状态等。这类属性反映了用户与产品的关系深度，是产品迭代的关键输入。第四类是用户价值属性，包括用户生命周期价值（LTV）、利润贡献、获客成本回收周期、推荐价值等。这类属性直接关联商业价值，是资源分配决策的核心参考。\n\n在构建用户画像时，需要特别注意两个原则：一是属性的可获得性和准确性，不要追求无法落地的完美属性；二是属性的动态更新机制，用户画像不是一次性的快照，而是持续进化的动态系统。\n\n## 2.3 RFM 模型详解与实战\n\nRFM 模型是用户价值分析中最经典、应用最广泛的方法之一，由三个维度组成：Recency（最近一次购买距今的时间）、Frequency（购买频次）、Monetary（购买金额）。RFM 的核心假设是：最近购买过的用户更可能再次购买（R的重要性最高），购买频次高的用户更忠诚（F次之），购买金额高的用户价值更大（M再次之）。\n\nRFM 模型的实操分为五个步骤。第一步，定义三个指标的具体口径：R通常以天为单位，取值范围为0到N；F为统计周期内的订单数；M为统计周期内的消费总金额。第二步，对每个指标进行分段（通常分为3-5段），如R按分位数划分为R1到R5，F和M同理。第三步，将每个用户的RFM值组合成RFM标签，如"555"代表高价值核心用户。第四步，根据RFM标签进行用户分群，常见分群包括：重要价值用户、重要发展用户、重要保持用户、重要挽留用户、一般价值用户等。第五步，针对不同人群设计差异化运营策略。\n\nRFM 模型的优势在于简单实用、数据可得性强、解释性好。在电商、零售、金融等交易型业务中应用效果尤其显著。进阶应用中，可以在RFM基础上加入更多维度（如产品偏好、渠道来源），形成扩展的多维度用户分群模型。\n\n## 2.4 用户生命周期的五个阶段\n\n用户生命周期（User Lifecycle）描述了用户从首次接触产品到最终流失的完整过程。一个标准的五阶段模型包括：引入期（Introduction）、成长期（Growth）、成熟期（Maturity）、衰退期（Decline）、流失期（Churn）。\n\n引入期用户的核心特征是注册时间短、使用行为不稳定、尚未建立使用习惯。运营重点是新用户引导和首动转化。成长期用户已经完成核心动作、开始建立使用习惯但仍不稳定。运营重点是深化使用场景和培养习惯。成熟期用户是产品的核心用户群，行为稳定、贡献最大。运营重点是维护体验和挖掘潜在价值。衰退期用户的使用频率和活跃度开始下降，但尚未流失。运营重点是预警识别和干预召回。流失期用户已经连续一段时间没有核心行为。运营重点是流失原因分析和召回策略。\n\n用户生命周期分析的价值在于差异化运营。不同阶段的用户需求完全不同，针对引入期用户推送高价值奖励可能无效，针对成熟期用户推送新手教程则显得愚蠢。精细化运营的第一步就是基于生命周期阶段进行人群划分。\n\n## 2.5 漏斗分析方法论\n\n漏斗分析是用户行为分析中最常用的方法之一，其核心思想是将用户的关键行为路径串联起来，形成一个从起点到终点的转化率链条。典型的电商购买漏斗是：曝光-点击-加购-下单-支付，每个环节的转化率变化都能揭示业务瓶颈。\n\n构建漏斗分析的四个关键步骤：第一步，明确分析的目标事件和转化路径。路径不要太长，通常3-6步为宜，过长的路径会稀释洞察价值。第二步，定义每个步骤的事件名称和触发条件。事件定义要清晰明确，避免含糊不清的统计口径。第三步，计算各步骤之间的转化率和整体转化率。关注两个核心指标：单步转化率和总体转化率。第四步，进行维度下钻分析。常见的下钻维度包括：用户来源渠道、用户画像标签、设备类型、地域、时间维度等。\n\n漏斗分析的进阶应用包括：与A/B测试结合，评估产品改动对转化率的影响；与用户分群结合，发现不同人群在漏斗中的行为差异；与归因分析结合，识别影响转化的关键因素。\n\n## 2.6 用户分群与精细化运营\n\n用户分群是用户分析落地的关键桥梁。如果说用户画像和用户行为分析是原材料，那么用户分群就是将原材料加工成可用决策的生产工具。用户分群的核心思想是"物以类聚、人以群分"，将相似属性或行为的用户归为一类，以便实施差异化策略。\n\n常见的用户分群方法包括：基于规则的分群（如RFM分段、活跃度分段）、基于模型的分群（如聚类算法K-Means）、基于业务场景的分群（如新用户、复购用户、流失用户）。三种方法各有优劣：规则分群简单可解释但不够精细；模型分群精细但解释性弱、落地成本高；业务场景分群最实用但需要深厚的业务理解。\n\n分群之后的关键是"运营动作的差异化"。常见的差异化维度包括：沟通渠道（推送/短信/邮件）、沟通频率、沟通内容、促销力度、服务等级。精细化运营的ROI来自于"将最有价值的资源投入给最可能产生价值的用户"。\n\n## 2.7 本章小结\n\n本章系统介绍了用户分析的核心方法论。用户画像解决"用户是谁"的问题，是所有分析的基础；RFM模型提供了量化用户价值的经典框架；用户生命周期五阶段模型建立了差异化运营的基础；漏斗分析揭示了行为路径中的瓶颈；用户分群则是分析落地为行动的关键桥梁。这些方法共同构成了用户分析的完整工具箱。下一章将进入销售与商品分析领域，学习如何从交易视角理解业务。\n',
      exercises: [
      {
        id: 'ex-6-2-1',
        question: '用户画像的核心属性通常分为四大类，以下哪一项不属于这四大类？',
        type: 'single',
        options: ['A. 人口统计学属性', 'B. 消费行为属性', 'C. 产品使用属性', 'D. 员工绩效属性'],
        answer: 'D',
        points: 2,
        explanation: '用户画像的核心属性包括：人口统计学属性、消费行为属性、产品使用属性、用户价值属性。员工绩效属性属于企业内部管理指标，不属于用户画像范畴。',
        tags: ['用户画像', '属性分类'],
        difficulty: 1,
      },
      {
        id: 'ex-6-2-2',
        question: 'RFM模型中三个字母分别代表什么？按重要性排序。',
        type: 'single',
        options: ['A. Revenue-Frequency-Margin', 'B. Recency-Frequency-Monetary', 'C. Retention-Forward-Market', 'D. Response-Feedback-Movement'],
        answer: 'B',
        points: 2,
        explanation: 'RFM代表Recency（最近购买时间）、Frequency（购买频次）、Monetary（购买金额）。其中R的重要性最高，F次之，M再次之。',
        tags: ['RFM模型', '用户价值'],
        difficulty: 1,
      },
      {
        id: 'ex-6-2-3',
        question: '某用户RFM标签为「555」，这代表什么类型的用户？',
        type: 'single',
        options: ['A. 近期未购买、低频消费、低金额的流失边缘用户', 'B. 近期有购买、高频消费、高金额的高价值核心用户', 'C. 新注册但未消费的试用用户', 'D. 一次性大额消费用户'],
        answer: 'B',
        points: 2,
        explanation: '在RFM分段中，5代表最好的分段。「555」用户意味着最近有购买、购买频次高、购买金额大，是典型的高价值核心用户。',
        tags: ['RFM模型', '用户分群'],
        difficulty: 2,
      },
      {
        id: 'ex-6-2-4',
        question: '以下哪些属于用户生命周期的阶段？（多选）',
        type: 'multiple',
        options: ['A. 引入期', 'B. 成长期', 'C. 成熟期', 'D. 财务期', 'E. 流失期'],
        answer: ['A', 'B', 'C', 'E'],
        points: 3,
        explanation: '用户生命周期五阶段包括：引入期、成长期、成熟期、衰退期、流失期。财务期不属于用户生命周期的标准阶段划分。',
        tags: ['用户生命周期', '用户分群'],
        difficulty: 1,
      },
      {
        id: 'ex-6-2-5',
        question: '引入期用户的运营重点应该是什么？',
        type: 'single',
        options: ['A. 推送高价值奖励激励长期复购', 'B. 新用户引导和首动转化', 'C. 深度挖掘潜在价值和交叉销售', 'D. 预警识别和流失召回'],
        answer: 'B',
        points: 2,
        explanation: '引入期用户注册时间短、行为不稳定，最核心的运营目标是帮助他们完成首次核心行为体验，建立初步使用习惯。',
        tags: ['用户生命周期', '精细化运营'],
        difficulty: 2,
      },
      {
        id: 'ex-6-2-6',
        question: '构建漏斗分析时，以下哪项做法是不推荐的？',
        type: 'single',
        options: ['A. 明确转化路径的每个步骤事件', 'B. 设计10步以上的超长漏斗以覆盖所有细节', 'C. 计算单步转化率和整体转化率', 'D. 进行多维度下钻分析'],
        answer: 'B',
        points: 2,
        explanation: '漏斗步骤过多会稀释洞察价值，通常建议3-6步为宜。过长的路径会让问题分散，无法聚焦关键瓶颈。',
        tags: ['漏斗分析', '行为分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-2-7',
        question: '判断：RFM模型中M（Monetary）的重要性通常高于R（Recency）。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: false,
        points: 1,
        explanation: 'RFM的重要性排序是R>F>M。最近购买行为比历史购买金额更能预测用户未来的购买倾向，这是RFM模型的核心假设。',
        tags: ['RFM模型', '指标权重'],
        difficulty: 1,
      },
      {
        id: 'ex-6-2-8',
        question: '成熟期用户和衰退期用户相比，以下哪种运营策略差异最合理？',
        type: 'single',
        options: ['A. 对成熟期用户推送新手教程，对衰退期用户推送高价值奖励', 'B. 对成熟期用户维护体验和挖掘价值，对衰退期用户进行预警和干预召回', 'C. 对两者使用完全相同的通用促销活动', 'D. 对成熟期用户停止一切运营投入，对衰退期用户投入最多资源'],
        answer: 'B',
        points: 2,
        explanation: '成熟期用户是产品核心用户，应聚焦体验维护和价值深挖；衰退期用户活跃度下降但尚未流失，应及时识别风险信号并实施干预策略。',
        tags: ['用户生命周期', '精细化运营'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-6-3',
      title: '销售与商品分析',
      content: '# 第三章 销售与商品分析\n\n## 3.1 销售分析的核心视角\n\n销售是商业价值的直接体现。销售分析的核心目标是回答四个关键问题：卖得怎么样？什么时候卖得好？谁在买？在哪里卖得好？通过系统性的销售数据分析，企业可以洞察市场需求变化、识别增长机会、发现运营问题、优化资源配置。销售分析的结果直接影响产品规划、库存策略、促销计划、渠道布局等核心业务决策。\n\n销售分析的常用视角包括：时间视角（日/周/月/季/年销售趋势）、结构视角（品类/品牌/渠道/区域的销售占比）、对比视角（同比、环比、目标完成率）、增长视角（增量销售、增长率、市场份额变化）。多个视角交叉应用才能形成完整的销售认知。\n\n## 3.2 同比与环比的应用场景\n\n同比（Year-over-Year）是指与去年同期相比，环比（Month-over-Month）是指与上一个周期相比。两者的区别在于关注的重点不同：同比消除了季节性因素的影响，适合观察长期趋势；环比对短期变化更敏感，适合追踪近期动态。\n\n同比分析的核心价值在于消除季节性波动对判断的干扰。例如，春节期间的销售环比暴涨可能只是节日效应，同比才能反映真实的增长水平。环比分析的核心价值在于敏锐捕捉趋势变化。例如，新品上市后第一个月的环比变化可以快速检验市场反应。在实际应用中，通常会同时展示同比和环比数据，从不同时间粒度观察销售表现。\n\n应用同环比分析时需要注意三个要点：一是周期的对齐，同比要对齐相同的日历周期（如去年的同一周）；二是异常值的识别，历史同期发生过特殊事件（如疫情、促销）会影响同比的可比性；三是多维度下钻，总销售额的同比变化要拆解到品类、渠道、区域层面才能找到真正的驱动因素。\n\n## 3.3 ABC 分类管理法\n\nABC 分类法源于帕累托法则（80/20法则），核心思想是将资源按重要程度分类管理。在商品分析中，ABC分类通常以销售额或利润为排序依据，将商品分为三类：A类商品（占销售额的70%左右，SKU数量约10%）是核心贡献者，需要重点关注和资源倾斜；B类商品（占销售额的20%左右，SKU数量约20%）是重要补充，需要常规管理；C类商品（占销售额的10%左右，SKU数量约70%）虽然SKU数量多但贡献有限，需要优化或精简。\n\nABC分类的实操步骤：第一步，确定排序指标（销售额、毛利、销售数量任选其一或组合）；第二步，计算每个SKU的指标值并按降序排列；第三步，计算累计占比并在70%/90%/100%处划定分类边界；第四步，针对不同类别制定差异化管理策略。\n\nA类商品的管理重点是：确保库存充足、避免缺货损失、持续优化供应链效率、密切监控价格和毛利。B类商品的管理重点是：关注增长潜力、平衡库存水平与缺货风险、定期评估去留。C类商品的管理重点是：精简SKU、降低库存占用、考虑长尾销售模式或清理库存。ABC分类的价值在于让有限的管理资源聚焦于价值最大的商品集合。\n\n## 3.4 关联分析与购物篮分析\n\n关联分析（Association Analysis）是数据挖掘中研究事物之间关联性的经典方法。在零售和电商场景中，最典型的应用就是购物篮分析（Market Basket Analysis）——分析哪些商品经常被一起购买。经典的案例是沃尔玛发现啤酒和尿布同时购买频率异常高，调整陈列后实现了显著的销售增长。\n\n关联分析的三个核心指标：支持度（Support）衡量商品组合在所有交易中出现的频率，反映组合的普遍性；置信度（Confidence）衡量购买商品A时同时购买商品B的条件概率，反映规则的可靠性；提升度（Lift）衡量同时购买A和B的概率与独立购买B的概率之比，反映规则的实用价值。提升度大于1说明规则有正向价值，提升度小于1则说明规则无用甚至有害。\n\n购物篮分析的应用场景包括：商品陈列优化（将关联商品放在相邻位置）、交叉销售推荐（在购物流程中推荐关联商品）、捆绑销售设计（创建高关联度的商品组合包）、品类管理决策（识别品类之间的协同效应）。在实操中，需要注意筛选有业务意义的关联规则——高置信度低提升度的规则可能只是热门商品的虚假关联。\n\n## 3.5 库存周转与供应链优化\n\n库存周转是衡量商品从入库到销售平均需要多少时间的指标。库存周转率（Inventory Turnover）的计算公式是：销售成本除以平均库存。周转率越高，说明商品卖得越快，资金占用越少；周转率过低则说明库存积压，存在滞销风险。\n\n库存周转分析的核心是将销售节奏与库存策略对齐。常用的方法是结合ABC分类：A类商品应该保持较高的周转（低库存高补货），因为缺货损失远大于库存成本；C类商品可以接受较低的周转（高库存低补货频率），因为管理成本占比高；B类商品取两者之间的平衡。\n\n安全库存（Safety Stock）是库存管理中的另一个关键概念。安全库存的设定需要综合考虑需求波动性、供应链lead time、服务水平目标。经典公式考虑了需求标准差、提前期标准差和服务水平对应的Z值。库存管理的精髓是在"缺货损失"与"库存持有成本"之间找到最优平衡。\n\n## 3.6 促销活动ROI分析\n\n促销是驱动短期销售增长的重要手段，但如果缺乏有效的ROI评估，促销很容易变成"赔本赚吆喝"。促销ROI分析的核心问题是：投入的促销成本带来了多少真正的增量价值？\n\n促销ROI的评估框架包括四个维度：第一个维度是直接财务回报（销售额增量-促销成本-商品成本）；第二个维度是用户影响（新用户数、用户留存、用户价值迁移）；第三个维度是品类影响（关联销售、品类整体健康度）；第四个维度是长期价值（品牌资产、用户习惯培养）。\n\n评估促销增量价值的关键方法是建立对照组。理想的做法是通过A/B测试将用户随机分为实验组和对照组，对比两组的差异。如果无法进行严格的A/B测试，可以使用历史同期数据作为基线，但需要排除同期其他因素的干扰。\n\n促销ROI分析的常见陷阱包括：只看总销售额不看增量（许多促销只是透支了未来消费）、只看交易用户不看用户质量（促销可能吸引大量低价值用户）、只看短期效果不看长期影响（价格战可能损害品牌价值）。\n\n## 3.7 本章小结\n\n本章围绕销售与商品分析展开了五个核心主题。销售趋势分析提供了理解业务动态的时间视角；ABC分类法建立了商品优先级管理的框架；关联分析揭示了商品之间的隐藏关系；库存周转分析连接了销售与供应链；促销ROI分析确保市场投入产出最大化。这些方法共同构成了交易视角下的完整分析工具集。下一章将进入营销与运营分析，学习如何从市场活动视角理解业务。\n',
      exercises: [
      {
        id: 'ex-6-3-1',
        question: '同比分析相比环比分析的核心优势是什么？',
        type: 'single',
        options: ['A. 对短期变化更敏感', 'B. 消除了季节性因素影响，适合观察长期趋势', 'C. 计算更简单', 'D. 可以使用更多数据维度'],
        answer: 'B',
        points: 2,
        explanation: '同比是与去年同期比较，能够消除季节性波动的影响（如春节、节日效应），更适合评估真实的长期增长趋势。环比对短期变化更敏感。',
        tags: ['同比环比', '销售分析'],
        difficulty: 1,
      },
      {
        id: 'ex-6-3-2',
        question: 'ABC分类法中，A类商品通常具备什么特征？',
        type: 'single',
        options: ['A. SKU数量约占70%，销售额约占10%', 'B. SKU数量约占20%，销售额约占20%', 'C. SKU数量约占10%，销售额约占70%', 'D. SKU数量约占50%，销售额约占50%'],
        answer: 'C',
        points: 2,
        explanation: 'ABC分类基于帕累托法则，A类商品通常只占SKU的10%左右，却贡献了约70%的销售额。这是资源聚焦管理的核心依据。',
        tags: ['ABC分类', '商品分析'],
        difficulty: 1,
      },
      {
        id: 'ex-6-3-3',
        question: '关联分析中衡量规则实用价值的核心指标是什么？',
        type: 'single',
        options: ['A. 支持度（Support）', 'B. 置信度（Confidence）', 'C. 提升度（Lift）', 'D. 覆盖率（Coverage）'],
        answer: 'C',
        points: 2,
        explanation: '提升度（Lift）衡量同时购买A和B的概率与独立购买B的概率之比。提升度大于1说明规则有正向价值，小于1则规则无用。支持度衡量普遍性，置信度衡量可靠性，但提升度才是评估实用价值的核心指标。',
        tags: ['关联分析', '购物篮分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-3-4',
        question: '以下哪些是库存周转分析的正确应用？（多选）',
        type: 'multiple',
        options: ['A. 周转率越高说明商品卖得越快，资金占用越少', 'B. 对A类商品应保持较高周转率（低库存高补货）', 'C. 周转率越低越好，说明库存充足', 'D. 库存管理需要在缺货损失与库存成本之间平衡', 'E. 安全库存的设定需要考虑需求波动性和供应链lead time'],
        answer: ['A', 'B', 'D', 'E'],
        points: 3,
        explanation: '周转率高意味着商品流通快（A正确），A类商品应避免缺货，保持高周转（B正确），周转率过低意味着库存积压（C错误），库存管理是缺货损失与持有成本的平衡（D正确），安全库存需综合考虑需求波动和供应链参数（E正确）。',
        tags: ['库存周转', '供应链管理'],
        difficulty: 2,
      },
      {
        id: 'ex-6-3-5',
        question: '促销ROI分析中最核心的评估原则是什么？',
        type: 'single',
        options: ['A. 只看促销期间的总销售额', 'B. 看促销带来的真实增量价值而非透支的消费', 'C. 只看新增用户数', 'D. 只看毛利总额'],
        answer: 'B',
        points: 2,
        explanation: '促销ROI分析的关键是识别「增量」——促销真正带来的额外价值。许多促销只是将未来消费提前（透支效应），需要建立对照组来评估真实增量。',
        tags: ['促销ROI', '营销分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-3-6',
        question: '某商品本月销售额环比增长50%，同比增长5%，以下哪个判断最合理？',
        type: 'single',
        options: ['A. 产品处于高速增长期', 'B. 可能是上月基数较低或本月有促销活动，需结合历史数据深入分析', 'C. 产品销售严重下滑', 'D. 数据肯定有错误'],
        answer: 'B',
        points: 2,
        explanation: '环比大幅增长但同比增长有限，说明短期波动大但长期趋势一般。这可能是上月基数偏低、本月促销活动等因素导致的。需要结合更多维度分析才能得出准确结论。',
        tags: ['同比环比', '销售趋势'],
        difficulty: 3,
      },
      {
        id: 'ex-6-3-7',
        question: '判断：购物篮分析中，只要置信度很高，这个关联规则就有业务价值。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: false,
        points: 1,
        explanation: '高置信度不代表高业务价值。需要同时检查提升度（Lift）。如果商品B本身就是极热门商品，即使商品A不被购买也有很高的购买概率，这时候高置信度可能只是虚假关联。',
        tags: ['关联分析', '购物篮分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-3-8',
        question: 'C类商品的管理策略应该侧重什么？',
        type: 'single',
        options: ['A. 重点关注，确保100%库存充足', 'B. 常规管理，保持稳定库存水平', 'C. 精简SKU、降低库存占用、考虑清理或长尾销售', 'D. 投入最多营销资源进行推广'],
        answer: 'C',
        points: 2,
        explanation: 'C类商品SKU多但贡献有限，管理策略应聚焦于效率优化：精简长尾SKU、降低库存资金占用、评估去留。重点管理和最大营销投入应留给A类商品。',
        tags: ['ABC分类', '商品管理'],
        difficulty: 2,
      },
      ],
    },
    {
      id: 'chapter-6-4',
      title: '营销与运营分析',
      content: '# 第四章 营销与运营分析\n\n## 4.1 营销分析的核心框架\n\n营销分析的本质是回答"钱花得值不值"的问题。每一次营销投入都涉及资源消耗，营销分析的目标就是通过数据化方法衡量投入产出比，优化资源配置。一个完整的营销分析框架通常包括三个层次：渠道评估层次回答"从哪里获客"；内容评估层次回答"用什么内容触达"；效果评估层次回答"带来了什么结果"。\n\n营销分析的常用指标体系包括：投放前指标（预算规模、投放渠道数量、内容矩阵）、投放中指标（曝光量、点击率、互动率）、投放后指标（获客成本CAC、转化率、客单价、ROI、生命周期价值LTV）。这些指标形成了从触达到转化到价值的完整链条。\n\n## 4.2 渠道质量评估方法论\n\n渠道质量评估的核心是建立多维度的评分体系，而不是依赖单一指标。常见的评估维度包括：规模维度（带来的用户数量、流量大小）、质量维度（转化率、留存率、ARPU值）、成本维度（获客成本CAC、CPM/CPC/CPA）、可持续性维度（渠道稳定性、可扩展性、依赖程度）。\n\n渠道ROI是评估渠道质量的核心综合指标，其计算公式通常为：渠道带来的用户生命周期价值（LTV）除以该渠道的获客成本（CAC）。LTV/CAC大于3通常被视为健康水平（不同行业标准不同），小于1则说明渠道投入亏损。在计算LTV时，需要特别注意是否包含毛利贡献和留存时间，不同口径会导致结果差异巨大。\n\n渠道归因（Attribution）是渠道评估中的一个关键技术问题。当用户通过多个渠道接触品牌后最终转化时，这个转化应该归属于哪个渠道？常用的归因模型包括：首次触达归因（First Touch）、末次触达归因（Last Touch）、线性归因（Linear）、时间衰减归因（Time Decay）、位置归因（Position-Based）。不同归因模型会给出完全不同的渠道贡献评估，因此在渠道评估时必须明确定义归因规则并保持一致性。\n\n## 4.3 A/B 测试设计与分析\n\nA/B 测试是运营决策中最科学的方法之一。它的核心思想是通过随机对照实验来检验变量变化带来的真实影响。一个规范的A/B测试流程包括：提出假设、设计实验、选择样本、确定指标、执行测试、分析结果、做出决策。\n\nA/B测试设计的关键要素包括：样本量计算（实验前必须计算所需的最小样本量，否则可能得出错误结论）、随机性检验（确保实验组和对照组在实验前没有系统性差异）、单一变量原则（每次只测试一个变量的变化，否则无法归因）、显著性水平（通常设置为0.05，代表结论的统计可靠性）、统计功效（Beta值，通常要求80%以上，代表检测到真实效应的概率）。\n\nA/B测试的常见误区包括：提前偷看结果（在样本量不足时停止实验）、多重比较问题（同时测试过多指标增加假阳性概率）、样本污染（实验组和对照组用户存在重叠）、忽略长期效应（只看短期指标变化不看长期影响）。正确的做法是：严格按预计算样本量执行、使用Bonferroni或FDR方法校正多重比较、使用唯一用户标识确保分组纯净、建立长期跟踪指标。\n\n## 4.4 内容互动指标体系\n\n内容运营的效果评估长期以来是一个难题——内容的价值往往滞后且间接。建立内容互动指标体系的目标是将模糊的"内容质量"转化为可衡量的数据指标。常用的内容互动指标分为三个层次：触达层指标包括曝光量、触达人数、打开率、阅读完成率；互动层指标包括点赞数、评论数、分享数、收藏数、转发率；转化层指标包括点击跳转率、引导转化率、内容驱动的用户行为变化。\n\n内容分析的进阶方法包括：内容分类标签体系（按主题、形式、风格对内容进行标准化分类）、内容评分模型（结合互动指标和转化指标的综合评分）、内容生命周期分析（爆款内容的传播曲线和衰减规律）、用户-内容匹配分析（哪些内容对哪些用户最有效）。\n\n内容ROI的评估尤其具有挑战性。与促销活动不同，内容的价值往往体现在品牌建设、用户粘性提升、长期信任建立等难以直接量化的方面。实践中的做法是建立"内容-互动-行为-价值"的传导链条，通过追踪内容触达后的用户行为变化来间接衡量内容的商业价值。\n\n## 4.5 竞品分析方法论\n\n竞品分析的核心价值是帮助企业了解自己在市场中的位置、识别竞争优势和劣势、发现市场机会和威胁。一个系统的竞品分析框架通常包括五个维度：市场维度（市场份额、增长速度、价格定位）、产品维度（产品特性、用户体验、技术实力）、运营维度（营销活动、用户增长、渠道布局）、财务维度（收入规模、利润水平、融资情况）、战略维度（商业模式、核心战略、差异化定位）。\n\n数据驱动的竞品分析方法包括：公开数据采集（财务报告、市场调研、招聘信息、AppStore评分、社交媒体数据）、用户行为对比（通过第三方数据或抽样调研对比关键用户指标）、产品功能矩阵（列出核心功能的拥有情况和实现质量）、价格策略追踪（记录价格变化和促销活动）。\n\n竞品分析的关键不是罗列数据，而是洞察数据背后的战略意图和市场信号。例如，竞品突然加大某一渠道的投放可能意味着发现了高ROI的新渠道；竞品在某一功能上持续投入可能意味着该功能是战略高地；竞品的价格策略变化可能反映了库存压力或竞争加剧。\n\n## 4.6 运营数据分析的综合应用\n\n营销与运营分析的最高境界是将多种方法融合应用。例如，一个完整的营销活动评估应该包括：渠道质量评估（哪些渠道表现好）、内容效果评估（哪些内容转化率高）、A/B测试验证（某个改动是否真的有效）、竞品对照（活动效果相比行业水平如何）。\n\n综合应用的价值在于"交叉验证"——单一指标可能产生误导，但多种方法指向同一结论时，决策的可靠性大幅提升。运营分析师的核心价值不在于熟练掌握某个分析工具，而在于根据业务场景选择最合适的分析方法组合，将数据转化为可执行的业务建议。\n\n## 4.7 本章小结\n\n本章系统介绍了营销与运营分析的核心方法。渠道质量评估解决了"从哪里获客最划算"的问题；A/B测试提供了科学的实验决策框架；内容互动指标体系将模糊的内容效果量化；竞品分析建立了市场竞争的外部视角。这些方法的综合应用能够大幅提升营销与运营决策的科学性。下一章将进入综合实战项目，用一个完整的电商经营分析案例将前面所学全部串联起来。\n',
      exercises: [
      {
        id: 'ex-6-4-1',
        question: '渠道ROI的核心计算公式是什么？',
        type: 'single',
        options: ['A. 总销售额 / 总预算', 'B. 用户生命周期价值（LTV） / 获客成本（CAC）', 'C. 新增用户数 / 投放成本', 'D. 点击率 * 转化率'],
        answer: 'B',
        points: 2,
        explanation: '渠道ROI的核心评估指标是LTV/CAC，即用户产生的长期价值除以获取该用户的成本。这比只看短期销售额更能反映渠道的真实投资回报。',
        tags: ['渠道评估', 'ROI分析'],
        difficulty: 1,
      },
      {
        id: 'ex-6-4-2',
        question: '以下哪些是常用的归因模型？（多选）',
        type: 'multiple',
        options: ['A. 首次触达归因（First Touch）', 'B. 末次触达归因（Last Touch）', 'C. 随机归因（Random）', 'D. 线性归因（Linear）', 'E. 时间衰减归因（Time Decay）'],
        answer: ['A', 'B', 'D', 'E'],
        points: 3,
        explanation: '常用归因模型包括首次触达、末次触达、线性、时间衰减、位置归因等。随机归因不是标准的归因模型，它会导致评估结果无意义。',
        tags: ['归因分析', '渠道评估'],
        difficulty: 2,
      },
      {
        id: 'ex-6-4-3',
        question: 'A/B测试设计中，样本量计算的重要性体现在什么地方？',
        type: 'single',
        options: ['A. 没有意义，越大越好', 'B. 样本量过小会导致统计功效不足，无法检测到真实效应', 'C. 只需要100个样本就足够', 'D. 样本量与实验结果无关'],
        answer: 'B',
        points: 2,
        explanation: '样本量计算是A/B测试的核心。样本量过小会导致统计功效（Power）不足，即使变量确实有影响也可能无法检测出来。提前偷看结果并在样本量不足时停止实验是常见的错误做法。',
        tags: ['A/B测试', '实验设计'],
        difficulty: 2,
      },
      {
        id: 'ex-6-4-4',
        question: '内容互动指标体系通常包括哪三个层次？',
        type: 'single',
        options: ['A. 触达层-互动层-转化层', 'B. 产品层-运营层-技术层', 'C. 计划层-执行层-监控层', 'D. 战略层-战术层-执行层'],
        answer: 'A',
        points: 2,
        explanation: '内容互动指标体系从浅到深分为三个层次：触达层（曝光、打开）、互动层（点赞、评论、分享）、转化层（跳转、行为变化、价值贡献）。',
        tags: ['内容运营', '指标体系'],
        difficulty: 1,
      },
      {
        id: 'ex-6-4-5',
        question: 'A/B测试中，以下哪种做法是错误的？',
        type: 'single',
        options: ['A. 实验前计算所需最小样本量', 'B. 严格按预计算样本量执行，不提前停止', 'C. 每次实验同时测试多个变量的多个变化以提高效率', 'D. 使用唯一用户标识确保分组纯净'],
        answer: 'C',
        points: 2,
        explanation: 'A/B测试应遵循单一变量原则，每次只测试一个变量的变化。同时测试多个变量会导致无法归因——你无法知道是哪个变量的变化导致了结果差异。',
        tags: ['A/B测试', '实验设计'],
        difficulty: 2,
      },
      {
        id: 'ex-6-4-6',
        question: '竞品分析的核心价值是什么？（多选）',
        type: 'multiple',
        options: ['A. 了解自身在市场中的位置', 'B. 识别竞争优势和劣势', 'C. 发现市场机会和威胁', 'D. 找到可以直接复制的成功策略', 'E. 洞察数据背后的战略意图和市场信号'],
        answer: ['A', 'B', 'C', 'E'],
        points: 3,
        explanation: '竞品分析的核心价值在于建立外部视角（A、B、C正确），更重要的是洞察战略意图（E正确）。直接复制竞品策略是危险的，因为不同企业有不同的资源禀赋和用户基础（D错误）。',
        tags: ['竞品分析', '竞争策略'],
        difficulty: 3,
      },
      {
        id: 'ex-6-4-7',
        question: '判断：内容运营的ROI可以用内容直接带来的销售额精准计算。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: false,
        points: 1,
        explanation: '内容价值往往滞后且间接，体现在品牌建设、用户粘性提升、长期信任建立等方面。直接用销售额计算内容ROI会严重低估内容价值。需要建立传导链条来间接衡量。',
        tags: ['内容运营', 'ROI分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-4-8',
        question: '某渠道LTV=500元，CAC=200元，以下哪个判断最合理？',
        type: 'single',
        options: ['A. 渠道严重亏损，应立即停止', 'B. LTV/CAC=2.5，可以继续投放但需关注是否可优化', 'C. LTV/CAC=0.4，渠道健康', 'D. 无法判断，信息不足'],
        answer: 'B',
        points: 2,
        explanation: 'LTV/CAC=500/200=2.5。大于1说明渠道可以回本，通常大于3被视为健康水平。2.5表示渠道有效但仍有优化空间，可以继续投放但需关注成本优化和用户价值提升。',
        tags: ['渠道评估', 'ROI分析'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-6-5',
      title: '综合实战项目',
      content: '# 第五章 综合实战项目：电商Q3经营分析完整案例\n\n## 5.1 项目背景与目标设定\n\n本案例以一家中等规模的综合电商平台2025年第三季度（7-9月）的经营数据为分析对象。平台主营品类包括服饰、美妆、家居、食品、数码五大类，拥有注册用户约200万，月活跃用户约50万，月GMV约3000万元。本季度平台遇到的核心业务挑战是：GMV环比二季度增长放缓、毛利率出现下滑、部分核心品类流失加剧、用户增长主要依赖促销驱动。\n\n本分析项目的目标设定为五个维度：第一，诊断本季度GMV增长放缓的原因，识别关键驱动因素；第二，分析毛利率下滑的结构性来源，提出改善建议；第三，评估用户质量和留存状态，发现高风险人群；第四，识别高潜力品类和商品，提出资源倾斜建议；第五，综合以上发现形成可执行的经营建议和行动计划。\n\n## 5.2 数据探索与概览分析\n\n数据探索阶段的核心任务是建立对数据全貌的认知，包括数据完整性、时间跨度、关键指标的整体水平。本案例使用的数据集包括：用户基础表（200万用户的注册信息和画像标签）、订单主表（Q3共约120万条订单记录，包含下单时间、用户ID、商品ID、金额、状态等字段）、商品表（约5万SKU的基础信息和品类归属）、渠道表（6个主要获客渠道的投放和转化数据）、用户行为日志（部分核心用户的详细行为数据）。\n\n整体经营概览：Q3总GMV为9200万元，较Q2的8800万元增长4.5%，同比去年Q3的7900万元增长16.5%。总订单数120万，客单价76.7元，毛利率18.2%（Q2为20.1%），活跃买家38万，新用户注册18万。从概览数据可以看出：增长主要由同比驱动（市场整体增长），环比增长乏力（平台自身增长动力不足），毛利率显著下降是本季度最突出的问题。\n\n## 5.3 GMV增长分解与归因分析\n\nGMV=用户数*下单转化率*订单频次*客单价。本案例通过拆解这四个核心因子来分析增长结构。数据显示：用户数环比增长8%（由促销活动带来的新注册），下单转化率环比下降5%（新增用户质量偏低），订单频次环比下降3%（老用户复购减弱），客单价环比增长5%（高价格商品占比提升）。综合效应：8%的用户数增长被转化率和频次下降抵消，最终GMV环比仅增长4.5%。\n\n按渠道拆解发现：渠道A（搜索引擎）贡献了35%的新用户但转化率仅为2.1%，远低于渠道B（社交推荐）的6.8%。渠道A的CAC为120元，渠道B为45元，渠道C（KOL合作）为85元。按品类拆解发现：服饰品类GMV环比下降12%（去年同期增长8%），美妆品类增长15%，食品品类增长8%，数码品类增长22%但毛利率为负。\n\n按时间维度拆解发现：GMV增长主要集中在7月中旬和9月下旬的两次大型促销期间，非促销日的自然销售环比下降5%。这说明增长是促销驱动的"虚增长"，自然增长动能不足。\n\n## 5.4 用户质量与留存分析\n\n用户质量分析采用RFM模型对Q3有消费行为的50万用户进行分群。结果显示：高价值核心用户（RFM 4-5分段）约8万人，贡献了62%的GMV，平均客单价180元；中等价值用户约15万人，贡献25%的GMV；低价值和一次性用户约27万人，贡献仅13%的GMV。\n\n分群后的用户留存对比：高价值核心用户的次月留存率为65%，中等价值用户为32%，低价值用户仅为8%。从渠道来源看，渠道A获取的新用户中低价值用户占比高达72%，渠道B获取的新用户中高价值用户占比45%。这验证了前面的结论：渠道A虽然量大但质量堪忧，拉低了整体用户质量。\n\n用户生命周期分布分析显示：成熟期用户占比从Q2的45%下降到Q3的38%，衰退期和流失期用户占比从30%上升到37%。这是一个危险信号——核心用户群正在萎缩。深入分析发现，服饰品类老用户的流失率从Q2的12%上升到Q3的21%，是整体用户流失的主要来源。\n\n## 5.5 商品结构与品类分析\n\n采用ABC分类法对Q3销售的5万SKU进行排序。A类商品（TOP 10%）约5000个SKU，贡献了71%的销售额；B类商品约10000个SKU，贡献19%；C类商品约35000个SKU，仅贡献10%。A类商品的平均毛利率为25%，B类为15%，C类为8%——低价值商品不仅销售贡献低，毛利水平也差。\n\n品类层面的毛利率分析：数码品类虽然GMV增长22%但毛利率为-3%（亏本引流策略），服饰品类毛利率从Q2的22%下降到Q3的18%（促销折扣加大），美妆品类毛利率保持28%稳定，食品品类毛利率20%稳定，家居品类毛利率25%但增长缓慢。\n\n品类增长与毛利的二维矩阵分析显示：美妆品类处于"高增长-高毛利"的黄金象限，应该加大资源投入；数码品类处于"高增长-负毛利"的引流象限，需要调整策略避免长期亏损；服饰品类处于"负增长-中毛利"的衰退象限，需要诊断问题并干预；家居品类处于"低增长-高毛利"的现金牛象限，可以维持稳定运营。\n\n## 5.6 渠道质量与营销效率分析\n\nQ3总营销投入450万元，分配到6个渠道：搜索引擎（渠道A）150万、社交推荐（渠道B）120万、KOL合作（渠道C）80万、内容种草（渠道D）50万、短视频投放（渠道E）35万、其他渠道（渠道F）15万。\n\n渠道ROI分析：渠道B的LTV/CAC为4.2（最佳），渠道D为3.1，渠道C为2.0，渠道A仅为0.8（严重亏损），渠道E为1.5，渠道F为2.3。渠道A的主要问题是用户质量低（高注册低转化低留存），建议大幅缩减预算或转型为品牌认知渠道。渠道B和渠道D表现优秀，建议增加预算。\n\n促销活动评估：Q3共执行4次大型促销活动，总投入180万元。通过同期对照组分析，促销带来的GMV增量为850万元，增量毛利为120万元，ROI为0.67（小于1）。扣除促销期间透支的未来消费（约300万元GMV），真实增量GMV仅为550万元，真实ROI仅为0.37。这说明当前促销策略是亏损的，需要从"价格战"转向"价值战"。\n\n## 5.7 关键发现与洞察总结\n\n综合以上分析，本季度经营的核心发现包括六个方面。第一，GMV增长乏力的本质是"虚假增长"——新增用户质量差导致转化和留存双降，促销透支未来消费。第二，毛利率下降的主要来源是数码品类亏损引流和服饰品类过度打折，而非整体成本上升。第三，核心用户群正在萎缩，服饰老用户流失加剧是最大风险。第四，渠道结构严重失衡，渠道A消耗大量预算却产生负价值。第五，商品结构存在优化空间，大量C类商品占用库存和管理资源。第六，美妆品类是当前最大的增长亮点和利润贡献者，值得战略加码。\n\n## 5.8 行动建议与后续计划\n\n基于以上发现，提出五项行动建议。建议一：优化渠道结构，将渠道A预算从150万削减至50万并转型为品牌认知渠道，释放的100万预算向渠道B和渠道D倾斜，预计可提升渠道整体ROI 30%以上。建议二：调整促销策略，从直接降价转向会员专享权益和满减组合，严格控制促销折扣深度，目标将促销ROI从0.37提升至1.5以上。建议三：聚焦美妆品类增长，在Q4增加30%的美妆营销投入和商品选品资源，目标Q4美妆GMV增长40%。建议四：治理数码品类亏损，停止亏本引流策略，将数码品类的利润目标从-3%提升至5%。建议五：实施核心用户维护计划，针对服饰品类流失高风险用户启动个性化召回活动，目标将服饰老用户流失率从21%降至15%以下。\n\n后续计划的时间线：Q4第一个月完成渠道调整和促销策略落地，Q4第二个月完成商品结构优化和核心用户召回启动，Q4季度末进行效果复盘并将成功模式推广到其他品类。长期计划是建立月度经营分析例会，将数据驱动决策固化为组织能力。\n\n## 5.9 本章小结\n\n本章通过一个完整的电商Q3经营分析案例，将前四章所学的指标体系构建、用户分析、销售商品分析、营销运营分析方法系统地串联起来。从项目背景设定到数据探索、从GMV拆解到用户质量评估、从商品结构分析到渠道效率评估、从关键发现到行动建议，完整演示了商务数据分析从数据到决策的全流程。掌握这套方法后，读者应该能够独立完成中等复杂度的业务分析项目，将数据技能转化为真实的业务价值。\n',
      exercises: [
      {
        id: 'ex-6-5-1',
        question: '本案例中GMV环比仅增长4.5%但同比增长16.5%，最合理的解读是什么？',
        type: 'single',
        options: ['A. 平台处于高速增长期', 'B. 增长主要由市场整体增长（同比）驱动，平台自身环比增长动力不足', 'C. 数据口径存在错误', 'D. Q2业绩异常低导致环比基数低'],
        answer: 'B',
        points: 2,
        explanation: '同比增长反映整体市场趋势（可能包含行业自然增长），环比增长反映平台自身的季度性增长能力。同比高而环比低说明平台自身增长动力不足，增长主要受益于大环境。',
        tags: ['综合案例', 'GMV分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-5-2',
        question: 'GMV可以拆解为哪四个核心因子的乘积？',
        type: 'single',
        options: ['A. 曝光数 * 点击率 * 转化率 * 客单价', 'B. 用户数 * 下单转化率 * 订单频次 * 客单价', 'C. 注册用户 * 活跃用户 * 付费用户 * 复购用户', 'D. 商品数 * 库存 * 价格 * 折扣'],
        answer: 'B',
        points: 2,
        explanation: 'GMV的经典拆解公式是：GMV=用户数*下单转化率*订单频次*客单价。通过分析每个因子的变化可以定位增长的来源和瓶颈。',
        tags: ['GMV拆解', '增长分析'],
        difficulty: 1,
      },
      {
        id: 'ex-6-5-3',
        question: '在本案例中，渠道A的主要问题是什么？',
        type: 'single',
        options: ['A. 投放预算不足', 'B. 用户质量低（高注册低转化低留存），获客成本高但LTV低', 'C. 渠道不稳定', 'D. 内容质量差'],
        answer: 'B',
        points: 2,
        explanation: '案例数据显示渠道A贡献了35%的新用户但转化率仅2.1%，新用户中低价值用户占比高达72%，CAC=120元但LTV/CAC仅为0.8，核心问题是用户质量与获客成本不匹配。',
        tags: ['渠道评估', '用户质量'],
        difficulty: 2,
      },
      {
        id: 'ex-6-5-4',
        question: '本案例中ABC分类结果显示A类商品有什么特征？（多选）',
        type: 'multiple',
        options: ['A. SKU数量占比约10%', 'B. 贡献约71%的销售额', 'C. 平均毛利率约25%，远高于B类和C类', 'D. 增长最快', 'E. 主要是数码品类'],
        answer: ['A', 'B', 'C'],
        points: 3,
        explanation: '案例中A类商品约5000个SKU（10%）贡献71%的销售额，毛利率25%（B类15%，C类8%），因此ABC正确。案例并未说明A类商品增长最快或主要是数码品类。',
        tags: ['ABC分类', '商品结构'],
        difficulty: 2,
      },
      {
        id: 'ex-6-5-5',
        question: '本案例中，哪个品类处于"高增长-高毛利"的黄金象限？',
        type: 'single',
        options: ['A. 服饰', 'B. 数码', 'C. 美妆', 'D. 食品'],
        answer: 'C',
        points: 2,
        explanation: '案例数据显示美妆品类GMV增长15%，毛利率稳定在28%，是高增长高毛利的黄金象限。服饰负增长、数码负毛利、食品增长一般。',
        tags: ['品类分析', '经营分析'],
        difficulty: 1,
      },
      {
        id: 'ex-6-5-6',
        question: '关于本案例促销活动ROI的分析，以下哪些结论是正确的？（多选）',
        type: 'multiple',
        options: ['A. 促销总投入180万元', 'B. 扣除透支未来消费后，真实ROI仅为0.37，促销策略亏损', 'C. 需要从价格战转向价值战', 'D. 促销ROI大于1，表现良好', 'E. 促销带来的GMV增量有一部分是透支未来消费'],
        answer: ['A', 'B', 'C', 'E'],
        points: 3,
        explanation: '案例显示Q3促销投入180万元（A正确），扣除透支消费后真实ROI仅0.37（B正确D错误），需要从价格战转向价值战（C正确），透支效应是促销分析中的关键考量因素（E正确）。',
        tags: ['促销ROI', '营销分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-5-7',
        question: '判断：在经营分析项目中，发现问题本身就足够了，不需要提出具体行动建议。',
        type: 'truefalse',
        options: ['正确', '错误'],
        answer: false,
        points: 1,
        explanation: '完整的经营分析应该包括三个部分：数据事实、核心洞察、行动建议。只发现问题不提出解决方案的分析报告对业务决策的价值会大打折扣。',
        tags: ['综合案例', '分析方法论'],
        difficulty: 1,
      },
      {
        id: 'ex-6-5-8',
        question: '本案例提出的行动建议中，关于渠道优化的建议是什么？',
        type: 'single',
        options: ['A. 均衡各渠道预算，保持现状', 'B. 削减渠道A预算并向渠道B和D倾斜，预计提升整体ROI 30%以上', 'C. 将所有预算集中投放渠道A以获得最大规模', 'D. 停止所有付费渠道，依赖自然流量'],
        answer: 'B',
        points: 2,
        explanation: '案例建议将渠道A（LTV/CAC=0.8）预算从150万削减至50万并转型为品牌认知渠道，释放的预算向高ROI渠道B（4.2）和D（3.1）倾斜，预计提升整体ROI 30%以上。',
        tags: ['渠道优化', '综合案例'],
        difficulty: 3,
      },
      {
        id: 'ex-6-5-9',
        question: '以下哪些是本案例中数码品类存在的问题？（多选）',
        type: 'multiple',
        options: ['A. GMV增长22%', 'B. 毛利率为-3%，执行亏本引流策略', 'C. 贡献最多的利润', 'D. 需要调整策略避免长期亏损', 'E. 是平台最大的增长亮点'],
        answer: ['B', 'D'],
        points: 3,
        explanation: '数码品类GMV增长快是事实（A），但这不是问题。核心问题是毛利为负（B正确），需要调整策略避免长期亏损（D正确）。它不贡献利润（C错误），也不是最大增长亮点（E错误，美妆才是）。',
        tags: ['品类分析', '经营分析'],
        difficulty: 2,
      },
      {
        id: 'ex-6-5-10',
        question: '完整的经营分析流程通常包括哪些环节？按逻辑顺序排列。',
        type: 'single',
        options: ['A. 提出建议-执行方案-收集数据-分析问题-总结复盘', 'B. 背景与目标设定-数据探索-多维度分析-关键发现-行动建议-实施与复盘', 'C. 先行动后分析', 'D. 只看核心指标不需要流程'],
        answer: 'B',
        points: 2,
        explanation: '规范的经营分析流程是：明确背景与目标-数据探索建立全貌-多维度拆解分析-形成核心发现-提出行动建议-推进实施并定期复盘。',
        tags: ['综合案例', '分析方法论'],
        difficulty: 2,
      },
      ],
    },
    ]
  },
  {
    id: 'course-7',
    title: '统计分析基础',
    description: '掌握统计学基础，包括描述统计、推断统计，以及在数据分析中的应用。',
    category: '理论课程',
    difficulty: 2,
    thumbnail: 'https://picsum.photos/seed/statistics/400/400',
    chapters: [
    {
      id: 'chapter-7-1',
      title: '描述统计',
      content: '## 第1章 描述统计\n\n描述统计是统计分析的基础环节，它通过图表、数字等手段对收集到的数据进行概括、整理和展示，使数据中隐藏的规律变得清晰可见。与推断统计不同，描述统计只关心「手头这批数据本身长什么样」，不做任何推广到更大群体的尝试。本章将从数据的测量尺度开始，依次介绍集中趋势、离散程度、分布形态以及箱线图等常用工具。\n\n### 1.1 数据类型与测量尺度\n\n统计学将变量按测量尺度由低到高分为四类：**定类尺度**、**定序尺度**、**定距尺度**和**定比尺度**。\n\n- **定类尺度（Nominal）**：只表示类别差异，没有顺序。例如「性别」分为男、女、其他；「职业」分为教师、医生、工程师。类别之间平等，不可做大小比较。对定类数据只能统计频次和众数。\n- **定序尺度（Ordinal）**：有顺序，但间距不可度量。例如评价等级「非常满意、满意、一般、不满意」，教育程度「小学、初中、高中、本科」。可以做中位数、百分位数的计算，但做加减运算意义不大。\n- **定距尺度（Interval）**：有相等单位，无绝对零点。典型例子是摄氏温度。0℃不代表没有温度，所以「30℃是15℃的两倍」这种说法没有意义。可以计算均值、方差、标准差。\n- **定比尺度（Ratio）**：有相等单位，也有绝对零点。例如身高、体重、收入、时间。可以做一切数学运算，包括比值比较。\n\n选择什么样的统计方法，首先取决于变量的测量尺度。对定类数据计算均值毫无意义；对定比数据却可以自由地使用均值、标准差等高级统计量。\n\n### 1.2 集中趋势\n\n集中趋势衡量「数据中心在哪里」。常用三种指标：**均值（Mean）**、**中位数（Median）**、**众数（Mode）**。\n\n**均值**：所有观测值之和除以观测次数。公式为 μ = Σxᵢ / N（总体）或 x̄ = Σxᵢ / n（样本）。均值对极端值敏感，当数据存在严重偏态或异常值时，均值会被拉向长尾方向，此时不宜作为中心代表。\n\n**中位数**：将数据从小到大排列后位于中间位置的数值。奇数个取中间，偶数个取中间两数的平均。中位数不受极端值影响，对偏态分布更稳健。家庭收入、房价这类右偏数据通常用中位数报告。\n\n**众数**：出现次数最多的数值。适合定类数据，也是唯一对四类尺度都有意义的集中趋势测度。一组数据可能没有众数，也可能有多个众数（双峰、多峰）。\n\n三者关系：在**对称单峰分布**中，均值 = 中位数 = 众数；在**正偏（右偏）分布**中，均值 > 中位数 > 众数；在**负偏（左偏）分布**中，均值 < 中位数 < 众数。\n\n### 1.3 离散程度\n\n离散程度衡量「数据有多分散」。常用指标：**极差**、**四分位距**、**方差**、**标准差**。\n\n**极差**：最大值减最小值，最简单但最不稳定，受极端值影响极大。\n\n**四分位距（IQR）**：第三四分位数 Q₃ 与第一四分位数 Q₁ 的差值，覆盖中间 50% 的数据。IQR 对极端值不敏感，常与中位数搭配使用，构建箱线图。\n\n**方差**：各观测值与均值差的平方的平均。总体方差 σ² = Σ(xᵢ-μ)² / N。**样本方差**使用 n-1 作为分母（Bessel 校正），即 s² = Σ(xᵢ-x̄)² / (n-1)，目的是让样本方差成为总体方差的无偏估计。\n\n**标准差**：方差的算术平方根。量纲与原变量一致，便于解读。经验法则：对近似正态分布，约 68% 的数据落在均值±1σ 内，95% 落在±2σ 内，99.7% 落在±3σ 内。\n\n**变异系数（CV）**：标准差除以均值，用于比较不同量纲或不同量级变量之间的相对离散程度。\n\n### 1.4 分布形态\n\n**偏度（Skewness）**：衡量分布不对称程度。偏度 = 0 为对称；正偏度（右偏）表示长尾在右；负偏度（左偏）表示长尾在左。\n\n**峰度（Kurtosis）**：衡量分布尾部厚度与峰部尖锐程度。标准正态分布的峰度为 3（ excess kurtosis 为 0）。正 excess 称为尖峰（Leptokurtic），尾部更厚、极值更多；负 excess 称为低峰（Platykurtic），尾部更薄。金融收益率常呈正 excess kurtosis，意味着「黑天鹅」比正态假设更频繁。\n\n### 1.5 箱线图\n\n箱线图（Box Plot）由 Tukey 提出，用五数概括（最小值、Q₁、中位数、Q₃、最大值）可视化数据分布。箱体涵盖 IQR，箱内横线为中位数，从箱延伸到非异常范围内最远的点叫触须（Whisker），一般取 1.5 × IQR 为界。超出该范围的点被标记为离群点。箱线图非常适合多组数据并列比较，是探索性数据分析（EDA）中不可或缺的工具。\n\n### 本章小结\n\n描述统计是数据分析的入口。面对一批数据，我们依次回答三个问题：**是什么类型？**（测量尺度）、**集中在哪里？**（均值/中位数/众数）、**有多分散？**（方差/标准差/IQR）、**形状如何？**（偏度/峰度/箱线图）。这些看似简单的数字，实则是一切高级统计方法的基石。',
      exercises: [
      {
        id: 'ex-7-1-1',
        question: '下列关于测量尺度的说法，哪一项是正确的？',
        type: 'single',
        options: ['A. 摄氏温度是定比尺度，因为它有相等单位', 'B. 教育程度（小学/初中/高中/本科）是定距尺度', 'C. 身高、体重、收入都属于定比尺度', 'D. 定类尺度可以计算中位数'],
        answer: 'C',
        points: 2,
        explanation: 'A错，摄氏温度无绝对零点，是定距尺度。B错，教育程度有顺序但间距不可比，是定序尺度。C对，身高体重收入既有相等单位又有绝对零点，属于定比尺度。D错，定类尺度只能计算频次和众数。',
        tags: ['测量尺度', '定类', '定比'],
        difficulty: 1,
      },
      {
        id: 'ex-7-1-2',
        question: '某城市家庭年收入数据呈现明显的右偏分布，下列哪一项作为集中趋势的代表最合适？',
        type: 'single',
        options: ['A. 算术均值', 'B. 众数', 'C. 中位数', 'D. 极差'],
        answer: 'C',
        points: 2,
        explanation: '右偏分布中均值被高收入极端值拉高，不能反映典型水平；中位数不受极端值影响，对偏态数据更稳健，因此最适合。极差是离散程度指标，与集中趋势无关。',
        tags: ['集中趋势', '中位数', '偏态'],
        difficulty: 1,
      },
      {
        id: 'ex-7-1-3',
        question: '关于样本方差使用 n-1 作为分母（Bessel 校正）的目的，下列哪一项正确？',
        type: 'single',
        options: ['A. 让方差数值更小，显得数据更集中', 'B. 使样本方差成为总体方差的无偏估计', 'C. 因为样本数量一定比总体少 1 个', 'D. 避免计算结果为负数'],
        answer: 'B',
        points: 3,
        explanation: '使用 n 做分母会低估总体方差（有偏）；将分母改为 n-1 后，样本方差的期望等于总体方差，成为无偏估计。与选项A、C、D所述原因无关。',
        tags: ['方差', '无偏估计', 'Bessel校正'],
        difficulty: 2,
      },
      {
        id: 'ex-7-1-4',
        question: '下列哪些指标可以用来衡量数据的离散程度？（多选）',
        type: 'multiple',
        options: ['A. 极差', 'B. 四分位距', 'C. 均值', 'D. 标准差', 'E. 众数'],
        answer: ['A', 'B', 'D'],
        points: 4,
        explanation: '极差、四分位距、标准差都是离散程度指标；均值和众数是集中趋势指标。',
        tags: ['离散程度', '方差', '标准差'],
        difficulty: 1,
      },
      {
        id: 'ex-7-1-5',
        question: '一组数据呈严重右偏分布，其均值、中位数、众数三者的大小关系通常是？',
        type: 'single',
        options: ['A. 均值 < 中位数 < 众数', 'B. 众数 < 中位数 < 均值', 'C. 均值 = 中位数 = 众数', 'D. 中位数 < 均值 < 众数'],
        answer: 'B',
        points: 2,
        explanation: '右偏分布中长尾在右侧，极端大值把均值往右拉，因此众数 < 中位数 < 均值。对称分布时三者相等。',
        tags: ['偏度', '集中趋势'],
        difficulty: 2,
      },
      {
        id: 'ex-7-1-6',
        question: '以下关于箱线图的描述，错误的是？',
        type: 'single',
        options: ['A. 箱体的上下边界分别是 Q₃ 和 Q₁', 'B. 箱内横线代表均值', 'C. 触须通常延伸至距箱体 1.5×IQR 内最远的数据点', 'D. 超出触须范围的点被视为潜在异常值'],
        answer: 'B',
        points: 2,
        explanation: '箱内横线代表中位数而非均值，这是箱线图的关键特征之一。其余描述均正确。',
        tags: ['箱线图', '四分位距', '异常值'],
        difficulty: 2,
      },
      {
        id: 'ex-7-1-7',
        question: '判断：正 excess kurtosis（尖峰）意味着分布尾部比正态更薄，极端值更少。',
        type: 'truefalse',
        answer: false,
        points: 2,
        explanation: '正 excess kurtosis（尖峰）表示尾部更厚、极端值更多；负 excess 才表示尾部更薄。金融收益率常见正 excess kurtosis。',
        tags: ['峰度', '分布形态'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-7-2',
      title: '概率与概率分布',
      content: '## 第2章 概率与概率分布\n\n概率是量化不确定性的数学语言，概率分布则描述随机变量取各种可能值的规律。本章从条件概率和贝叶斯定理出发，依次介绍二项分布、泊松分布、正态分布以及中心极限定理。这些是推断统计的数学引擎。\n\n### 2.1 条件概率与贝叶斯定理\n\n**条件概率**：在已知事件 B 发生的前提下，事件 A 发生的概率记作 P(A|B) = P(A∩B) / P(B)。当 P(B) = 0 时无定义。\n\n**独立事件**：若 P(A|B) = P(A)，等价于 P(A∩B) = P(A)·P(B)，则称 A、B 相互独立。独立与互斥不可混淆——互斥事件只要有一个发生，另一个就不可能发生，所以它们不是独立的。\n\n**全概率公式**：若事件 B₁, B₂, ..., Bₙ 构成样本空间的一个划分，则 P(A) = Σ P(A|Bᵢ)·P(Bᵢ)。全概率公式把复杂事件分解成若干互斥子事件之和。\n\n**贝叶斯定理**：P(Bᵢ|A) = P(A|Bᵢ)·P(Bᵢ) / P(A) = P(A|Bᵢ)·P(Bᵢ) / Σⱼ P(A|Bⱼ)·P(Bⱼ)。贝叶斯定理把「原因到结果」的概率（似然）转换成「结果到原因」的概率（后验）。医学诊断中非常经典：假设某种疾病患病率 0.5%（先验），某检测的灵敏度 P(阳性|患病) = 99%，假阳性率 P(阳性|未患病) = 2%。若检测结果呈阳性，真正患病的概率是多少？代入贝叶斯：P(患病|阳性) = (0.99×0.005) / (0.99×0.005 + 0.02×0.995) ≈ 0.0477 / 0.0249 ≈ 0.199，约 20%。这说明即使检测呈阳性，真正患病概率也不高，原因是疾病本身非常罕见——假阳性的绝对人数远超过真阳性。\n\n贝叶斯思维的核心是「更新」：先验概率 × 似然 → 后验概率，反复迭代。\n\n### 2.2 二项分布\n\n**二项分布** B(n, p) 描述 n 次独立伯努利试验中成功次数的概率分布。每次试验成功概率为 p，失败为 q = 1-p。概率质量函数 P(X=k) = C(n, k) · pᵏ · q⁽ⁿ⁻ᵏ⁾，其中 C(n, k) = n! / (k!·(n-k)!) 是组合数。\n\n- 均值 E[X] = np\n- 方差 Var(X) = npq\n- 当 n 较大且 p 不极端时，可用正态近似 np ± z·√(npq)\n\n应用场景：连续抛硬币 n 次正面次数、100 位顾客中购买产品人数、20 个样本中次品数等。\n\n### 2.3 泊松分布\n\n**泊松分布** Poisson(λ) 描述单位时间/空间内稀有事件发生次数。概率质量函数 P(X=k) = λᵏ·e⁻λ / k!。\n\n- 均值与方差相等：E[X] = Var(X) = λ\n- 当 n 很大 p 很小而 np = λ 保持适当时，二项分布趋近泊松分布\n\n典型应用：一小时内客服接到的电话数、某路段月事故数、一本书每页错字数、一个放射性单位时间衰变原子数。\n\n### 2.4 正态分布与 68-95-99.7 法则\n\n**正态分布** N(μ, σ²) 的概率密度函数呈钟形曲线 f(x) = (1/(σ√(2π))) · exp(-(x-μ)²/(2σ²))。\n\n- 关于 x = μ 对称\n- 在 μ ± σ 处有拐点\n- μ 决定位置，σ 决定宽度\n\n**标准正态分布** N(0, 1) 通过 Z = (X - μ) / σ 获得。**68-95-99.7 法则**：\n\n- 约 68% 的数据落在 μ ± σ 之间\n- 约 95% 落在 μ ± 2σ 之间\n- 约 99.7% 落在 μ ± 3σ 之间\n\n因此超过 3σ 的极端值十分罕见（双侧约 0.3%），这是质量控制中 3σ 规则的理论依据。\n\n### 2.5 中心极限定理\n\n**中心极限定理（CLT）**：无论总体分布如何，只要样本量 n 足够大，**样本均值** X̄ 的分布将近似服从正态分布 N(μ, σ²/n)。这是统计学最深刻的定理之一——它把「任何分布」与「正态分布」联系起来。\n\n经验阈值：\n\n- 对称总体，n ≥ 15 即可认为 X̄ 近似正态\n- 轻度偏态总体，n ≥ 30\n- 严重偏态总体，需要 n ≥ 50 或更大\n\nCLT 的作用：我们对均值做推断（构建置信区间、t 检验、z 检验）时，无需假设总体正态，只要样本量足够大即可——这极大扩展了统计方法的适用范围。\n\n注意：CLT 说的是「样本均值」的分布，不是单个观测值的分布。不要把 CLT 误解为「任何数据都会变正态」。\n\n### 本章小结\n\n条件概率与贝叶斯定理帮助我们在不确定性下更新信念；二项、泊松、正态分布分别刻画不同场景下的随机现象；中心极限定理则为大规模样本的均值推断提供了坚实的数学基础。掌握本章后，读者就拥有了从「描述一批数据」迈向「用样本推断总体」的钥匙。',
      exercises: [
      {
        id: 'ex-7-2-1',
        question: '已知 P(A)=0.4, P(B)=0.3, P(A∩B)=0.12。事件 A 与 B 是否独立？',
        type: 'single',
        options: ['A. 独立', 'B. 不独立', 'C. 无法判断', 'D. 互斥'],
        answer: 'A',
        points: 2,
        explanation: 'P(A)·P(B) = 0.4×0.3 = 0.12 = P(A∩B)，满足独立事件定义 P(A∩B) = P(A)·P(B)，故独立。',
        tags: ['条件概率', '独立事件'],
        difficulty: 1,
      },
      {
        id: 'ex-7-2-2',
        question: '某种罕见病患病率 0.1%，检测灵敏度 P(阳性|患病)=99%，假阳性率 P(阳性|未患病)=1%。若检测阳性，真实患病的后验概率最接近：',
        type: 'single',
        options: ['A. 99%', 'B. 约 50%', 'C. 约 9%', 'D. 约 1%'],
        answer: 'C',
        points: 3,
        explanation: '用贝叶斯：P(患病|阳性) = (0.99×0.001) / (0.99×0.001 + 0.01×0.999) = 0.00099 / 0.01098 ≈ 0.0901，约 9%。假阳性数量远超过真阳性。',
        tags: ['贝叶斯', '条件概率', '后验概率'],
        difficulty: 3,
      },
      {
        id: 'ex-7-2-3',
        question: '关于二项分布 B(n, p) 的均值和方差，下列哪一项正确？',
        type: 'single',
        options: ['A. E[X] = n, Var(X) = p', 'B. E[X] = np, Var(X) = np(1-p)', 'C. E[X] = p, Var(X) = p(1-p)', 'D. E[X] = np, Var(X) = np'],
        answer: 'B',
        points: 2,
        explanation: '二项分布均值为 np，方差为 npq = np(1-p)，方差小于均值（除非 p=0 或 1）。',
        tags: ['二项分布', '均值', '方差'],
        difficulty: 1,
      },
      {
        id: 'ex-7-2-4',
        question: '以下哪些场景适合用泊松分布建模？（多选）',
        type: 'multiple',
        options: ['A. 一小时内银行柜台到达的顾客数', 'B. 连续掷 10 次硬币出现正面的次数', 'C. 一平方公里湖泊中鱼的数量', 'D. 某工厂每天产品的次品数（次品率很低）', 'E. 成年人的身高'],
        answer: ['A', 'C', 'D'],
        points: 4,
        explanation: '泊松分布适合单位时间/空间内稀有事件计数。B是二项分布场景，E是连续正态分布场景。',
        tags: ['泊松分布', '离散分布'],
        difficulty: 2,
      },
      {
        id: 'ex-7-2-5',
        question: '某门考试成绩服从正态分布 N(75, 10²)，根据 68-95-99.7 法则，成绩在 55 到 95 分之间的学生比例约为：',
        type: 'single',
        options: ['A. 68%', 'B. 95%', 'C. 99.7%', 'D. 50%'],
        answer: 'B',
        points: 2,
        explanation: 'μ=75，σ=10，55=75-2σ，95=75+2σ，落在 μ±2σ 内，由 68-95-99.7 法则约占 95%。',
        tags: ['正态分布', '68-95-99.7'],
        difficulty: 1,
      },
      {
        id: 'ex-7-2-6',
        question: '关于中心极限定理（CLT）的作用，下列哪一项最准确？',
        type: 'single',
        options: ['A. 任何数据样本本身都会趋向正态分布', 'B. 当 n 足够大时，样本均值近似正态分布，与总体分布形状无关', 'C. 小样本下总体必然是正态的', 'D. CLT 只对原始数据的分布有效'],
        answer: 'B',
        points: 3,
        explanation: 'CLT 描述的是「样本均值」的渐近分布，不是个体观测值的分布；它把任何总体与正态分布在均值层面联系起来。',
        tags: ['中心极限定理', '正态分布'],
        difficulty: 2,
      },
      {
        id: 'ex-7-2-7',
        question: '判断：泊松分布的均值与方差相等。',
        type: 'truefalse',
        answer: true,
        points: 2,
        explanation: '对泊松分布 Poisson(λ)，E[X] = Var(X) = λ，这是其重要特征之一，也是检验一组计数数据是否符合泊松分布的常用方法。',
        tags: ['泊松分布', '均值', '方差'],
        difficulty: 1,
      },
      {
        id: 'ex-7-2-8',
        question: '某超市平均每分钟来 3 位顾客（服从泊松分布）。接下来一分钟内恰好来 2 位顾客的概率约为（使用 e⁻³ ≈ 0.0498）：',
        type: 'single',
        options: ['A. 约 5%', 'B. 约 11%', 'C. 约 22%', 'D. 约 42%'],
        answer: 'C',
        points: 3,
        explanation: 'P(X=2) = λ²·e⁻λ / 2! = 3²·e⁻³ / 2 = 9×0.0498/2 ≈ 0.2241 ≈ 22%。',
        tags: ['泊松分布', '概率计算'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-7-3',
      title: '抽样与估计',
      content: '## 第3章 抽样与估计\n\n现实中我们几乎不可能对总体做普查，只能从总体中抽取样本，再用样本信息「估计」总体的未知参数。本章介绍常见抽样方法、抽样分布、点估计、区间估计以及样本量计算。\n\n### 3.1 抽样方法\n\n**概率抽样**：每个个体被抽中的概率已知或可计算。\n\n- **简单随机抽样（SRS）**：总体中每个个体等概率被抽中。实现方式：随机数表、随机抽样软件等。优点是理论简单，缺点是对异质性总体代表性可能不足。\n- **系统抽样**：先按随机起点 k，再每隔 k 个抽取一个。操作简单，但若总体存在周期性特征可能产生偏误。\n- **分层抽样**：先把总体按某个关键变量分成若干「层」，每层内独立随机抽样，最后合并。可以提高各层估计精度，保证关键群体在样本中充分代表。例：对全国人口按省分层抽样。\n- **整群抽样**：将总体划分为若干群，随机抽取若干群，然后对被抽中的群做普查或再抽样。成本低、操作方便，但群间差异会放大误差。\n- **多阶段抽样**：结合分层、整群等方式分阶段进行，是大规模调查常用做法。\n\n**非概率抽样**（便利抽样、滚雪球抽样、配额抽样等）：样本入样概率不可知，原则上不能做统计推断，但在探索性研究中仍有使用价值。\n\n### 3.2 抽样分布与标准误\n\n**抽样分布**：同一个总体反复抽取相同样本量 n 的样本，每个样本算一次统计量（如 x̄），这些统计量的分布即抽样分布。\n\n**样本均值的抽样分布**：\n- 均值：E[X̄] = μ（与总体均值相同）\n- 方差：Var(X̄) = σ² / n\n- 标准差（称为标准误，SE）：SE = σ / √n\n\n**有限总体校正因子（FPC）**：当不放回抽样占总体比例超过 5% 时，应乘 √((N-n)/(N-1)) 以调低标准误。\n\n**样本比例 p̂ 的抽样分布**：对总体比例 π，当 n 足够大（nπ ≥ 10 且 n(1-π) ≥ 10）时，p̂ 近似 N(π, π(1-π)/n)。\n\n**标准误 vs 样本标准差**：前者衡量的是「估计量」的变异程度（样本之间的差异），后者衡量「个体观测值」的变异程度。\n\n### 3.3 点估计及其优良性\n\n**点估计**：用一个具体数值估计总体参数。如用 x̄ 估计 μ，用 s 估计 σ，用 p̂ 估计 π。\n\n**优良性标准**：\n\n- **无偏性**：估计量的期望等于真实参数。样本均值 x̄ 是 μ 的无偏估计；样本方差 s²（n-1 分母）是 σ² 的无偏估计；但样本标准差 s 不是 σ 的无偏估计，只是渐近无偏。\n- **有效性**：在所有无偏估计量中，方差越小越有效。在正态总体下，x̄ 是 μ 的最小方差无偏估计（MVUE）。\n- **一致性**：样本量增大时估计量依概率收敛到真值。大数定律保证了 x̄ 和 s² 的一致性。\n- **充分性**：估计量包含样本中关于参数的所有信息。\n\n### 3.4 置信区间与 t 分布\n\n**置信区间（CI）**：构造一个区间 [L, U]，使在反复抽样下，该区间包含真实参数的概率为 (1-α)。(1-α) 称为**置信水平**，常用 90%、95%、99%。\n\n**总体均值的置信区间**：\n\n- 情况1：总体正态、σ 已知，或 n 很大：CI = x̄ ± z₍α/₂₎ · σ/√n（z 分布）\n- 情况2：总体近似正态、σ 未知：CI = x̄ ± t₍α/₂, n-1₎ · s/√n（t 分布）\n\n**t 分布**：由 Gosset（以笔名 Student 发表）提出。形状类似正态但尾部更厚，依赖**自由度** df = n-1。随着 df 增加，t 分布逐渐趋近标准正态。实际工作中总体 σ 几乎永远未知，因此 t 分布比 z 分布更常用。\n\n**置信区间的正确解读**：95% 置信区间的意义是「如果我们反复抽取样本并构造区间，这些区间中有 95% 会包含真实参数」。**不要**把它误解为「这个特定区间包含真实参数的概率是 95%」——对贝叶斯和频率学派的解读有本质差别，频率学派下真实值是一个常数，不存在概率问题。\n\n**总体比例的置信区间**：CI = p̂ ± z₍α/₂₎·√(p̂(1-p̂)/n)，当 n 较小时需加 Wilson 分数校正。\n\n### 3.5 样本量计算\n\n**估计均值**所需样本量：给定误差容忍度 E（边际误差），置信水平 z，总体标准差估计 σ，则 n = (z·σ/E)²。若计算结果非整数，一律向上取整。\n\n**估计比例**所需样本量：n = (z²·π(1-π))/E²。π 未知时最保守取 π = 0.5（此时 π(1-π) 最大），也可使用预调查或文献中的估计值。\n\n**样本量公式的直觉**：\n\n- 需要的精度越高（E 越小），所需 n 越大，且是平方关系。\n- 总体变异越大（σ 或 π(1-π) 越大），所需 n 越大。\n- 置信水平越高，z 越大，所需 n 越大。\n\n注意：对大规模总体，样本量 n 主要取决于精度需求，**总体大小 N 通常几乎不影响**（除非 N 很小或抽样比例很大）。一个随机抽取的 n=1000 的样本，无论总体是 10 万还是 1 亿，估计精度几乎相同。\n\n### 本章小结\n\n抽样是从总体到样本的桥梁，抽样分布与标准误刻画了估计量的变异；点估计给出一个数值，置信区间量化了这个数值的不确定性；t 分布在总体方差未知时是正态分布的替代；样本量计算则是研究设计阶段必须回答的问题。',
      exercises: [
      {
        id: 'ex-7-3-1',
        question: '为保证全国各省份在样本中均有足够代表，应优先采用哪种抽样方法？',
        type: 'single',
        options: ['A. 简单随机抽样', 'B. 系统抽样', 'C. 分层抽样（按省份分层）', 'D. 整群抽样'],
        answer: 'C',
        points: 2,
        explanation: '分层抽样可在每个关键子总体（此处是各省）内独立抽样，保证各层估计精度与代表性。',
        tags: ['抽样方法', '分层抽样'],
        difficulty: 1,
      },
      {
        id: 'ex-7-3-2',
        question: '关于标准误（SE）和样本标准差（s），下列哪一项正确？',
        type: 'single',
        options: ['A. 两者完全相同', 'B. SE 衡量个体观测值的变异，s 衡量估计量的变异', 'C. s 衡量个体观测值的变异，SE 衡量估计量的变异', 'D. SE = s·√n'],
        answer: 'C',
        points: 2,
        explanation: 's 反映原数据的离散程度；SE = s/√n 反映样本均值在不同样本间的变异（估计精度）。',
        tags: ['标准误', '抽样分布'],
        difficulty: 2,
      },
      {
        id: 'ex-7-3-3',
        question: '下列哪一项不是点估计量的常见优良性标准？',
        type: 'single',
        options: ['A. 无偏性', 'B. 有效性', 'C. 一致性', 'D. 显著性'],
        answer: 'D',
        points: 2,
        explanation: '显著性是假设检验中的术语，不是估计量的优良性标准。',
        tags: ['点估计', '无偏估计'],
        difficulty: 1,
      },
      {
        id: 'ex-7-3-4',
        question: '当总体近似正态、σ 未知、样本量 n=15，构造总体均值 95% 置信区间应使用：',
        type: 'single',
        options: ['A. 标准正态 z 分布，临界值 1.96', 'B. t 分布，自由度 14', 'C. t 分布，自由度 15', 'D. 二项分布'],
        answer: 'B',
        points: 2,
        explanation: 'σ 未知且 n 较小，使用 t 分布；自由度 = n-1 = 14。',
        tags: ['t分布', '置信区间'],
        difficulty: 2,
      },
      {
        id: 'ex-7-3-5',
        question: '以下对 95% 置信区间的正确解读是：（多选）',
        type: 'multiple',
        options: ['A. 有 95% 的概率真实参数落在这个区间内', 'B. 如果反复抽样并构造区间，约 95% 的区间会包含真实参数', 'C. 我们有 95% 的「信心」认为真实参数在这个区间内', 'D. 未来样本的均值有 95% 概率落在这个区间内'],
        answer: ['B', 'C'],
        points: 4,
        explanation: 'A是典型误读——频率学派视角下真实参数是常数，不具有概率分布。B是严格频率解释；C是日常用语中可接受的表达。D把「参数」和「未来样本均值」混淆。',
        tags: ['置信区间', '统计推断'],
        difficulty: 3,
      },
      {
        id: 'ex-7-3-6',
        question: '一项民意调查希望估计支持率的 95% 置信区间边际误差不超过 ±3%，最保守所需样本量约为（使用 z≈1.96）：',
        type: 'single',
        options: ['A. n ≈ 500', 'B. n ≈ 1067', 'C. n ≈ 2401', 'D. n ≈ 10000'],
        answer: 'B',
        points: 3,
        explanation: '取 π=0.5，n = (z²·0.25)/E² = (1.96²×0.25)/(0.03²) = 0.9604/0.0009 ≈ 1067。这是舆论调查经典数字。',
        tags: ['样本量', '置信区间', '比例估计'],
        difficulty: 2,
      },
      {
        id: 'ex-7-3-7',
        question: '判断：对比例 π 的估计，无论样本量多小，样本比例 p̂ 都服从正态分布。',
        type: 'truefalse',
        answer: false,
        points: 2,
        explanation: '仅当 nπ ≥ 10 且 n(1-π) ≥ 10（或类似经验条件）时，p̂ 的正态近似才合理，小样本下应为二项或 Beta 分布。',
        tags: ['比例估计', '正态近似'],
        difficulty: 2,
      },
      ],
    },
    {
      id: 'chapter-7-4',
      title: '假设检验',
      content: '## 第4章 假设检验\n\n假设检验是用样本证据检验关于总体的某一「论断」是否成立的方法论。核心思想是「反证法」：先假定原假设成立，再看现有数据是否足够「离奇」，若足够离奇则拒绝原假设。\n\n### 4.1 基本框架\n\n**原假设 H₀**：默认成立、代表「无效应、无差异、现状不变」的陈述，通常带有等号。如 H₀: μ = μ₀，H₀: μ₁ - μ₂ = 0，H₀: π = 0.5。\n\n**备择假设 H₁（或 Hₐ）**：研究者希望证实的替代说法。有三种形式：\n\n- 双侧：H₁: μ ≠ μ₀\n- 左侧：H₁: μ < μ₀\n- 右侧：H₁: μ > μ₀\n\n单侧还是双侧由研究问题**事先**决定，不可根据数据事后更改。\n\n**检验统计量**：把样本信息压缩成一个数值，衡量数据与 H₀ 的距离。例如对均值检验的 z 统计量 z = (x̄ - μ₀)/(σ/√n)，t 统计量 t = (x̄ - μ₀)/(s/√n)。\n\n**p 值**：在 H₀ 成立的前提下，出现当前或更极端检验统计量的概率。p 值越小，证据越强。\n\n**显著性水平 α**：研究者事先设定的可接受第一类错误的上限，通常 0.05。\n\n**决策规则**：\n\n- p < α → 拒绝 H₀\n- p ≥ α → 不拒绝 H₀（注意：这不是「接受 H₀」，只是证据不足）\n\n**两类错误**：\n\n- 第一类错误（Type I）：H₀ 为真却被拒绝。概率 = α\n- 第二类错误（Type II）：H₀ 为假却未被拒绝。概率 = β\n- 功效（Power）= 1 - β，即正确识别出真实效应的概率\n\n**效应量**：除 p 值外必须报告效应大小。常见如 Cohen\'s d = (x̄ - μ₀)/s，它告诉我们差异「有多大」，而不仅仅是「显著不显著」。大样本容易得到小 p 值但效应量小，临床意义有限。\n\n### 4.2 单样本 t 检验\n\n检验「某总体均值是否等于某个参考值 μ₀」。\n\n- 假设：H₀: μ = μ₀ vs H₁: μ ≠ μ₀（或单侧）\n- 检验统计量：t = (x̄ - μ₀)/(s/√n)，df = n-1\n- 条件：总体近似正态，或 n 足够大（CLT）\n\n应用：某条生产线生产的零件平均直径是否等于规格 50 mm；某班学生平均成绩是否与往年相同。\n\n### 4.3 两样本 t 检验\n\n**独立样本 t 检验**：比较两个独立总体的均值是否相等。H₀: μ₁ = μ₂。\n\n- 方差齐（等方差）：使用合并方差 t 检验，df = n₁ + n₂ - 2\n- 方差不齐：使用 Welch\'s t 检验，自由度用 Welch-Satterthwaite 公式校正（通常不是整数）\n\n**配对样本 t 检验**：同一对象前后两次测量，或按自然配对的成对数据。先计算差值 dᵢ = Xᵢ(后) - Xᵢ(前)，再对差值做单样本 t 检验，检验 H₀: μ_d = 0。配对设计能消除个体差异带来的噪声，通常比独立样本更灵敏。\n\n应用：20 位病人服药前后血压变化（配对）；两种教学方法在不同班级的成绩差异（独立）。\n\n### 4.4 卡方检验\n\n**卡方（χ²）检验**用于分类变量的关联性或拟合度分析。\n\n**卡方拟合优度检验**：检验一组分类数据的分布是否符合某个理论分布。统计量 χ² = Σ (Oᵢ - Eᵢ)² / Eᵢ，df = k - 1 - 估计参数数。\n\n**卡方独立性检验**：在二维列联表中检验两个分类变量是否独立。Eᵢⱼ = (行合计×列合计)/总样本量。统计量同上，df = (r-1)(c-1)。\n\n**注意**：χ² 检验对期望频数敏感，通常要求每个格子 Eᵢⱼ ≥ 5；不满足时可合并邻近类别或使用 Fisher 精确检验。\n\n### 4.5 方差分析（ANOVA）\n\n**单因素方差分析 One-way ANOVA**：检验 k 个独立组的均值是否全部相等。H₀: μ₁ = μ₂ = ... = μ_k；H₁: 至少有一组不同。\n\n核心思想是**分解变异**：\n\n- 总平方和 SST = ΣΣ(yᵢⱼ - ȳ..)²\n- 组间平方和 SSB = Σ nⱼ(ȳ.ⱼ - ȳ..)²\n- 组内平方和 SSW = ΣΣ(yᵢⱼ - ȳ.ⱼ)² = SST - SSB\n\n检验统计量 F = (SSB/(k-1)) / (SSW/(N-k))，在 H₀ 下服从 F(k-1, N-k) 分布。F 值越大越支持组间存在真实差异。\n\nANOVA 的前提假设：\n\n- 各组独立随机抽样\n- 各组正态性（Shapiro-Wilk 检验或 QQ 图）\n- 各组方差齐性（Levene 检验）；若不齐可使用 Welch ANOVA 或 Kruskal-Wallis\n\n**事后检验**：若 ANOVA 显著，需做多重比较（如 Tukey HSD、Bonferroni）找出具体哪些组之间不同。\n\n**两因素 ANOVA**：加入第二个因素及交互效应，可以检验 A、B 的主效应和 A×B 交互效应。\n\n### 4.6 非参数替代\n\n当正态性或方差齐性假设严重违背，且样本量不足以依赖 CLT 时，使用**非参数检验**：\n\n- 单样本/配对 → Wilcoxon 符号秩检验（替代单样本/配对 t 检验）\n- 两独立样本 → Mann-Whitney U（Wilcoxon 秩和检验，替代独立样本 t）\n- k 独立组 → Kruskal-Wallis（替代单因素 ANOVA）\n- 相关 → Spearman 秩相关（替代 Pearson 相关）\n\n非参数检验不假设总体分布形状，通常基于秩次，稳健但在参数假设满足时功效略低。\n\n### 本章小结\n\n假设检验是数据分析中使用最广泛的推断工具。读者需要掌握：原假设/备择假设的设置、p 值与显著性水平的含义、t 检验家族（单样本/独立/配对）、卡方检验、方差分析以及在参数假设不满足时的非参数替代。务必记住：**统计显著 ≠ 实际重要**，务必同时报告效应量与置信区间。',
      exercises: [
      {
        id: 'ex-7-4-1',
        question: '下列关于假设检验基本概念的说法，哪一项正确？',
        type: 'single',
        options: ['A. p 值是 H₀ 为真的概率', 'B. α 越小越好，最好永远取 α=0.001', 'C. p 值越小，拒绝 H₀ 的证据越强', 'D. 不拒绝 H₀ 等价于「接受 H₀」'],
        answer: 'C',
        points: 2,
        explanation: 'A错，p值是在H₀下「当前或更极端数据」的概率，不是H₀本身为真的概率。B错，α过小会使第二类错误激增。D错，不拒绝只代表证据不足，不代表H₀成立。',
        tags: ['假设检验', 'p值', '显著性'],
        difficulty: 1,
      },
      {
        id: 'ex-7-4-2',
        question: '某研究者检验新药是否比旧药有效，原假设应设置为：',
        type: 'single',
        options: ['A. H₀: 新药比旧药好', 'B. H₀: 新药与旧药无差异', 'C. H₀: 新药效果不如旧药', 'D. 没有规定，可以任选'],
        answer: 'B',
        points: 2,
        explanation: '原假设通常代表「无效应、无差异、现状」。要证明新药更好，先假定两者相同（等效性检验另论）。',
        tags: ['原假设', '备择假设'],
        difficulty: 1,
      },
      {
        id: 'ex-7-4-3',
        question: '对同一组被试在培训前后分别测量一次成绩，比较平均成绩是否提升，最合适的检验是：',
        type: 'single',
        options: ['A. 单样本 t 检验', 'B. 独立样本 t 检验', 'C. 配对样本 t 检验', 'D. 卡方检验'],
        answer: 'C',
        points: 2,
        explanation: '同一对象前后测量是典型配对设计，应对差值 dᵢ 做单样本 t 检验（即配对样本 t 检验），以消除个体差异。',
        tags: ['t检验', '配对样本'],
        difficulty: 1,
      },
      {
        id: 'ex-7-4-4',
        question: '在 3×4 的列联表中进行卡方独立性检验，自由度为：',
        type: 'single',
        options: ['A. 12', 'B. 7', 'C. 6', 'D. 3'],
        answer: 'C',
        points: 2,
        explanation: 'df = (r-1)(c-1) = (3-1)(4-1) = 2×3 = 6。',
        tags: ['卡方检验', '自由度', '列联表'],
        difficulty: 2,
      },
      {
        id: 'ex-7-4-5',
        question: '关于单因素 ANOVA 的 F 统计量，下列哪一项正确？（多选）',
        type: 'multiple',
        options: ['A. F = 组间均方 / 组内均方', 'B. F 值越大越支持各组均值存在差异', 'C. F 统计量可能为负', 'D. H₀ 为真时 F 服从以 1 为中心的正态分布'],
        answer: ['A', 'B'],
        points: 4,
        explanation: 'F = MSB/MSW，平方和之比恒为非负；F 越大说明组间相对组内变异大，越倾向拒绝 H₀；F 分布是右偏正偏分布，不以 1 为中心的正态分布。',
        tags: ['ANOVA', 'F统计量', '方差分析'],
        difficulty: 2,
      },
      {
        id: 'ex-7-4-6',
        question: '以下哪些情形适合使用非参数检验？（多选）',
        type: 'multiple',
        options: ['A. 数据严重偏态且样本量小，无法依赖 CLT', 'B. 变量是定序尺度（如满意度等级）', 'C. 方差齐性明显违反且无法通过变换纠正', 'D. 总体严格正态且方差齐，样本量很大'],
        answer: ['A', 'B', 'C'],
        points: 4,
        explanation: '非参数检验用于参数假设不满足或变量无法做区间尺度运算的场景。D是参数检验最理想的条件。',
        tags: ['非参数', '稳健', '参数假设'],
        difficulty: 2,
      },
      {
        id: 'ex-7-4-7',
        question: '判断：在双样本 t 检验中，若两个总体方差不相等，必须使用 Welch\'s t 检验或其它校正方法，而不是直接使用合并方差的 t 检验。',
        type: 'truefalse',
        answer: true,
        points: 2,
        explanation: '方差不齐时合并方差 t 检验的第一类错误概率与名义 α 不符，会产生误导。建议使用 Welch\'s t 检验（或 Mann-Whitney U）。',
        tags: ['t检验', '方差齐性', 'Welch'],
        difficulty: 2,
      },
      {
        id: 'ex-7-4-8',
        question: '一项研究样本量极大时，最有可能出现以下哪种情况？',
        type: 'single',
        options: ['A. p 值一定很小且效应量一定很大', 'B. p 值可能很小但效应量可能很小（实际意义有限）', 'C. p 值一定很大', 'D. 第二类错误概率激增'],
        answer: 'B',
        points: 3,
        explanation: '大样本让检验更灵敏，即使微小差异也会显著，但效应量反映的是差异大小，与样本量无关。因此大样本研究必须报告效应量和置信区间。',
        tags: ['效应量', '样本量', '显著性'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-7-5',
      title: '相关与回归',
      content: '## 第5章 相关与回归\n\n本章研究变量之间的关系。相关系数衡量变量之间线性联系的强度与方向；回归模型则尝试用一个或多个自变量来解释、预测因变量。两者在统计基础上紧密相连，但用途与解读方式差别明显。\n\n### 5.1 Pearson 相关\n\n**Pearson 积差相关系数** r 衡量两个连续变量 X, Y 之间线性关系的强度。\n\nr = Σ(xᵢ-x̄)(yᵢ-ȳ) / √(Σ(xᵢ-x̄)² · Σ(yᵢ-ȳ)²)\n\n**性质**：\n\n- -1 ≤ r ≤ 1\n- r > 0 正相关；r < 0 负相关；r = 0 无线性相关\n- 接近 ±1 表示线性关系越强，接近 0 表示线性关系越弱\n\n**经验解读**（对社会科学数据）：\n\n- |r| < 0.1：几乎无相关\n- 0.1 ≤ |r| < 0.3：弱相关\n- 0.3 ≤ |r| < 0.5：中等相关\n- |r| ≥ 0.5：强相关\n\n**注意事项**：\n\n1. **相关 ≠ 因果**。X 与 Y 相关可能是 X→Y，也可能 Y→X，或第三变量 Z 同时影响 X、Y（例如冰淇淋销量与溺水死亡人数同时上升，真正原因是气温）。\n2. **r 只衡量线性关系**。两个变量可能存在强烈的非线性关系（如 U 形），r 却接近 0。必须画散点图。\n3. **异常值对 r 的影响极大**，需要借助散点图、Cook 距离等工具识别。\n4. **要求双变量正态**或至少近似线性且方差齐。对定序数据使用 Spearman 秩相关更合适。\n\n**r² 称为决定系数**：在简单回归中它等于 Y 的变异中由 X 解释的比例。\n\n### 5.2 简单线性回归\n\n**总体回归模型**：Y = β₀ + β₁X + ε，其中 ε ~ N(0, σ²)。\n\n**样本回归方程**：Ŷ = b₀ + b₁X。\n\n**普通最小二乘（OLS）估计**：通过最小化残差平方和 Σ(yᵢ - ŷᵢ)² 获得参数估计。\n\nOLS 解：\n\n- b₁ = Σ(xᵢ-x̄)(yᵢ-ȳ) / Σ(xᵢ-x̄)² = r · (s_y / s_x)\n- b₀ = ȳ - b₁·x̄\n\n**解读斜率**：b₁ 表示 X 每增加 1 个单位时，Y 平均变化 b₁ 个单位。**不要对非因果模型做因果解读**。\n\n**截距 b₀**：当 X = 0 时 Y 的预测值。如果 X = 0 不在数据范围或无实际意义（例如体重不能为 0），不要硬性解释 b₀。\n\n### 5.3 R² 与模型拟合优度\n\n**R²（决定系数）** = SSR / SST = 1 - SSE / SST，衡量因变量变异中由模型解释的比例，取值 0~1。在简单线性回归中 R² = r²。\n\n**调整 R²（Adjusted R²）** = 1 - (n-1)/(n-k-1) · (1-R²)，加入自变量个数的惩罚，用于多元回归模型比较，避免加入无关自变量时 R² 虚高。\n\n**均方误差 MSE** = SSE / (n-k-1)，用于估计 σ²。**残差标准误** s = √MSE。\n\n### 5.4 回归诊断与残差分析\n\n回归分析必须做**回归诊断**，才能确认 OLS 假设是否满足。常见假设：\n\n1. **线性（Linearity）**：E[Y|X] = Xβ。残差对拟合值图无曲线趋势。\n2. **独立（Independence）**：残差之间不相关。时间序列数据用 Durbin-Watson 检验。\n3. **同方差（Homoscedasticity）**：Var(ε) = σ²。残差对拟合值图呈水平均匀带状；若呈漏斗/扇形则为异方差，可尝试变量变换或加权最小二乘。\n4. **正态性（Normality）**：ε ~ N。通过 QQ 图或 Shapiro 检验检查。\n5. **无多重共线性**（多元回归中）。\n\n**异常点与杠杆点**：\n\n- **残差大**（异常值 outlier）：Y 值远离回归线\n- **杠杆值大**（leverage）：X 方向上的极端点\n- **Cook 距离 D** 综合衡量某点对整个回归的影响，常用 D > 4/n 或 D > 1 为警戒值\n\n**补救策略**：变换变量（对数、平方根、Box-Cox）、稳健回归、删除/分离极端值（需谨慎并说明）。\n\n### 5.5 多元回归与多重共线性\n\n**总体模型**：Y = β₀ + β₁X₁ + β₂X₂ + ... + β_kX_k + ε。\n\n**最小二乘向量解**：b = (XᵀX)⁻¹ Xᵀy，其中 X 是 n×(k+1) 设计矩阵（第一列全 1）。\n\n**偏回归系数解读**：bⱼ 表示「在其他变量保持不变的前提下」，Xⱼ 每变化 1 单位时 Y 的平均变化量。这是多元回归最重要的优势——**统计控制**。\n\n**F 检验整体显著性**：H₀: β₁ = β₂ = ... = β_k = 0；F = (R²/k) / ((1-R²)/(n-k-1))。显著说明至少有一个自变量有用。\n\n**t 检验单个系数**：tⱼ = bⱼ / SE(bⱼ)，H₀: βⱼ = 0。\n\n**多重共线性**：自变量之间高度相关会导致：\n\n- 系数估计不稳定（bⱼ 随模型微小变化剧烈波动）\n- 标准误 SE(bⱼ) 被放大\n- 个体 t 检验不显著，但整体 F 检验显著\n- 系数符号可能与理论相反\n\n**诊断工具**：**方差膨胀因子 VIFⱼ = 1 / (1-Rⱼ²)**，其中 Rⱼ² 是用其它自变量回归 Xⱼ 得到的决定系数。经验规则：\n\n- VIF < 5：可接受\n- 5 ≤ VIF < 10：中等共线性，关注\n- VIF ≥ 10：严重共线性，需处理\n\n**处理方法**：删除冗余变量、合并变量（主成分、因子分析）、收集更多数据、使用正则化回归（Ridge/Lasso）。\n\n### 5.6 Ridge 与 Lasso 正则化\n\n**普通最小二乘**最小化 Σ(yᵢ - xᵀβ)²，当变量多或共线性严重时，估计方差过大且模型在新数据上预测差。\n\n**Ridge 回归（L₂ 正则）**：最小化 Σ(yᵢ - xᵀβ)² + λΣβⱼ²。λ ≥ 0 控制收缩强度，λ=0 退化为 OLS，λ→∞ 使系数趋近 0。Ridge 将系数向 0 收缩，但不会精确为 0；能有效降低方差、缓解共线性。\n\n**Lasso 回归（L₁ 正则）**：最小化 Σ(yᵢ - xᵀβ)² + λΣ|βⱼ|。Lasso 会把某些系数恰好压到 0，从而兼具**变量选择**功能，得到稀疏模型，便于解释。\n\n**λ 的选择**：通过交叉验证（通常 k-折 CV）在候选 λ 网格上选择使验证误差最小的 λ。\n\n**数据标准化**：Ridge/Lasso 解与变量尺度相关，通常先对每个 X 做 Z 分数标准化再建模。\n\n**弹性网 Elastic Net**：结合 L₁ 与 L₂ 惩罚，克服 Lasso 在某些情况下的不稳定，尤其当自变量高度相关时。\n\n### 本章小结\n\n从 Pearson 相关到简单回归，再到多元回归、诊断与正则化，本章搭建了一个完整的线性建模框架。学习者需要记住三件事：第一，**相关不蕴涵因果**，回归模型只是条件期望，不等于因果效应；第二，**模型诊断比 p 值更重要**，不满足假设的系数不可靠；第三，当变量多或多重共线性严重时，**Ridge/Lasso 等正则化方法**可以在偏差与方差之间找到更好的权衡。',
      exercises: [
      {
        id: 'ex-7-5-1',
        question: '关于 Pearson 相关系数 r 的性质，下列哪一项错误？',
        type: 'single',
        options: ['A. -1 ≤ r ≤ 1', 'B. r = 0 表示两个变量独立', 'C. r 只衡量线性关系', 'D. r 对异常值敏感'],
        answer: 'B',
        points: 2,
        explanation: 'r = 0 只表示无线性相关，两个变量仍可能存在强非线性关系（如 U 形）或非线性依赖，不能推出独立。',
        tags: ['Pearson相关', '线性关系'],
        difficulty: 1,
      },
      {
        id: 'ex-7-5-2',
        question: '某研究报告身高与体重的相关系数 r = 0.7，下列哪一项解读正确？',
        type: 'single',
        options: ['A. 体重变化中约 70% 可由身高解释', 'B. 身高每增加 1 cm，体重平均增加 0.7 kg', 'C. 体重变异中约 49% 可由身高解释', 'D. 身高与体重之间存在因果关系'],
        answer: 'C',
        points: 2,
        explanation: 'r² = 0.49 表示简单线性回归中 Y 的变异中由 X 解释的比例。A错在使用 r 而不是 r²；B是斜率意义而非相关；D犯了相关→因果的错误。',
        tags: ['相关系数', 'R平方', '因果'],
        difficulty: 2,
      },
      {
        id: 'ex-7-5-3',
        question: '简单线性回归中，OLS 斜率 b₁ 的公式是：',
        type: 'single',
        options: ['A. b₁ = r · (s_x / s_y)', 'B. b₁ = r · (s_y / s_x)', 'C. b₁ = Σ(yᵢ-ȳ) / Σ(xᵢ-x̄)', 'D. b₁ = ȳ / x̄'],
        answer: 'B',
        points: 3,
        explanation: 'b₁ = r · (s_y / s_x)。这个公式把相关系数与变量尺度联系起来：斜率不仅依赖相关性，还依赖两变量的尺度。',
        tags: ['简单线性回归', 'OLS', '斜率'],
        difficulty: 2,
      },
      {
        id: 'ex-7-5-4',
        question: '回归诊断中检查「同方差性」的典型做法是：（多选）',
        type: 'multiple',
        options: ['A. 看残差对拟合值的散点图是否呈水平均匀带状', 'B. 看残差的 QQ 图是否贴近对角线', 'C. 做 Breusch-Pagan 或 White 检验', 'D. 比较 R² 与调整 R²'],
        answer: ['A', 'C'],
        points: 4,
        explanation: 'B检验正态性；D用于比较模型简洁性而非同方差。A、C是同方差性的图形与统计检验方法。',
        tags: ['回归诊断', '同方差', '异方差'],
        difficulty: 2,
      },
      {
        id: 'ex-7-5-5',
        question: '多元回归中偏回归系数 bⱼ 的正确解读是：',
        type: 'single',
        options: ['A. Xⱼ 每增加 1 单位，Y 平均增加 bⱼ 单位，不考虑其它变量', 'B. Xⱼ 每增加 1 单位，Y 平均增加 bⱼ 单位，其它变量保持不变', 'C. Xⱼ 与 Y 的相关系数', 'D. Xⱼ 对 Y 的总效应'],
        answer: 'B',
        points: 3,
        explanation: '偏回归系数体现「统计控制」，解读时必须强调「其他变量保持不变」这一前提。',
        tags: ['多元回归', '偏回归系数'],
        difficulty: 2,
      },
      {
        id: 'ex-7-5-6',
        question: '关于方差膨胀因子（VIF）的解读，下列哪一项正确？',
        type: 'single',
        options: ['A. VIF 越小说明多重共线性越严重', 'B. VIF = 1 表示 Xⱼ 与其它自变量完全共线', 'C. 通常认为 VIF ≥ 10 提示严重多重共线性', 'D. VIF 检验模型整体显著性'],
        answer: 'C',
        points: 3,
        explanation: 'VIF = 1/(1-Rⱼ²)，越大共线性越严重；VIF = 1 表示 Xⱼ 与其它自变量不相关；VIF ≥ 10 是常用阈值。模型整体显著性由 F 检验完成。',
        tags: ['多重共线性', 'VIF'],
        difficulty: 2,
      },
      {
        id: 'ex-7-5-7',
        question: 'Ridge 回归与 Lasso 回归的主要差异在于：（多选）',
        type: 'multiple',
        options: ['A. Ridge 使用 L₂ 惩罚，Lasso 使用 L₁ 惩罚', 'B. Lasso 可将某些系数精确压缩为 0，兼具变量选择功能', 'C. Ridge 在任何情况下都优于 Lasso', 'D. 两者对变量尺度不敏感，无需标准化'],
        answer: ['A', 'B'],
        points: 4,
        explanation: 'A、B正确描述了两者差异。C过于绝对，优劣视具体数据而定；D错，两者都对变量尺度敏感，通常需先标准化。',
        tags: ['Ridge', 'Lasso', '正则化'],
        difficulty: 3,
      },
      {
        id: 'ex-7-5-8',
        question: '判断：在多元回归中，若整体 F 检验显著，则每个自变量的 t 检验都必须显著。',
        type: 'truefalse',
        answer: false,
        points: 2,
        explanation: 'F 显著只说明「至少有一个」自变量有解释力。受多重共线性或噪声影响，某些个体 t 检验完全可能不显著。这恰恰是需要检查 VIF 的情景之一。',
        tags: ['多元回归', 'F检验', 't检验', '多重共线性'],
        difficulty: 3,
      },
      ],
    },
    ]
  },
  {
    id: 'course-8',
    title: '机器学习入门',
    description: '学习机器学习基础，包括监督学习、无监督学习，以及常见算法的应用。',
    category: '进阶课程',
    difficulty: 3,
    thumbnail: 'https://picsum.photos/seed/ml/400/400',
    chapters: [
    {
      id: 'chapter-8-1',
      title: '机器学习概述',
      content: '# 第一章：机器学习概述\n\n## 一、什么是机器学习\n\n机器学习（Machine Learning, ML）是人工智能（Artificial Intelligence, AI）的一个重要分支，它使计算机能够从数据中学习规律，而不需要被显式编程。传统的编程方式是人类编写规则，计算机按照规则执行；而机器学习则是计算机通过大量数据自动学习出规律或模型。\n\n机器学习的核心思想可以概括为：通过构建数学模型，从样本数据中学习出一种映射关系，使得模型能够对新的、未见过的数据做出预测或决策。\n\n## 二、机器学习的三大类别\n\n### 1. 监督学习（Supervised Learning）\n\n监督学习是指训练数据包含输入特征和对应的标签（Label），模型学习从输入到标签的映射。常见应用包括：\n- 分类问题（Classification）：预测离散类别，如垃圾邮件识别、手写数字识别\n- 回归问题（Regression）：预测连续数值，如房价预测、股票价格预测\n\n### 2. 无监督学习（Unsupervised Learning）\n\n无监督学习的训练数据只有输入特征，没有标签。模型需要自己发现数据中的结构、模式或分组。常见应用包括：\n- 聚类（Clustering）：将相似样本分组，如客户分群、图像分割\n- 降维（Dimensionality Reduction）：将高维数据压缩到低维，如PCA、t-SNE可视化\n\n### 3. 强化学习（Reinforcement Learning）\n\n强化学习通过与环境交互来学习。智能体（Agent）在环境中执行动作（Action），获得奖励（Reward），目标是学习最大化累积奖励的策略（Policy）。典型应用包括AlphaGo、自动驾驶、游戏AI等。\n\n## 三、典型机器学习工作流\n\n一个完整的机器学习项目通常包含以下步骤：\n\n1. 问题定义：明确业务问题，确定是分类、回归还是聚类问题\n2. 数据收集：获取原始数据，可能来自数据库、API、爬虫等\n3. 数据探索：通过统计方法和可视化理解数据分布、特征关系\n4. 数据预处理：处理缺失值、异常值，进行特征工程\n5. 特征工程：选择、构造、转换特征\n6. 模型选择与训练：选择算法，在训练集上拟合模型\n7. 模型评估：在验证集上评估模型表现\n8. 模型调优：调整超参数，优化模型性能\n9. 模型部署：将训练好的模型部署到生产环境\n10. 监控与维护：持续监控模型性能，定期更新\n\n## 四、特征工程基础\n\n特征工程是将原始数据转化为模型可用特征的过程。俗语说「数据和特征决定了机器学习的上限，而模型和算法只是逼近这个上限而已」，可见特征工程的重要性。\n\n常见的特征工程操作包括：\n- 数值特征的标准化、归一化\n- 类别特征的独热编码、标签编码\n- 时间特征的提取（年、月、日、星期等）\n- 文本特征的TF-IDF、Word2Vec等\n- 特征组合与交叉特征构造\n\n## 五、过拟合与欠拟合\n\n- 过拟合（Overfitting）：模型在训练集上表现很好，但在测试集上表现很差。模型过于复杂，学习到了训练数据中的噪声。\n- 欠拟合（Underfitting）：模型在训练集和测试集上表现都不好。模型过于简单，未能学习到数据的基本规律。\n\n缓解过拟合的方法包括：增加训练数据、降低模型复杂度、正则化（L1/L2）、Dropout、提前停止（Early Stopping）等。缓解欠拟合的方法包括：增加模型复杂度、增加特征、减少正则化强度等。\n\n## 六、偏差与方差权衡\n\n- 偏差（Bias）：模型预测值与真实值的平均偏离程度，反映模型的拟合能力。高偏差意味着模型过于简单，容易欠拟合。\n- 方差（Variance）：模型在不同训练集上的预测结果的波动程度，反映模型的稳定性。高方差意味着模型过于复杂，容易过拟合。\n\n偏差-方差权衡（Bias-Variance Tradeoff）是机器学习中的核心问题。总误差 = 偏差² + 方差 + 不可避免的噪声。在实际中，我们需要在偏差和方差之间找到平衡点，使总误差最小。\n\n理解这一权衡有助于我们选择合适的模型复杂度、正则化强度，并合理地进行模型评估和调优。',
      exercises: [
      {
        id: 'ex-8-1-1',
        question: '以下哪种学习方式的训练数据同时包含输入特征和对应的标签？',
        type: 'single',
        options: ['监督学习', '无监督学习', '强化学习', '半监督学习'],
        answer: '监督学习',
        points: 5,
        explanation: '监督学习（Supervised Learning）的训练数据同时包含输入特征和对应的标签（Label），模型学习从输入到标签的映射关系。',
        tags: ['基础概念', '监督学习'],
        difficulty: 1,
      },
      {
        id: 'ex-8-1-2',
        question: '房价预测属于以下哪类机器学习问题？',
        type: 'single',
        options: ['分类问题', '回归问题', '聚类问题', '强化学习问题'],
        answer: '回归问题',
        points: 5,
        explanation: '房价是连续的数值，预测连续值属于回归问题（Regression）。分类问题预测离散类别，聚类属于无监督学习。',
        tags: ['问题类型', '回归'],
        difficulty: 1,
      },
      {
        id: 'ex-8-1-3',
        question: '下列关于过拟合的说法，正确的是？',
        type: 'single',
        options: ['模型在训练集和测试集上都表现很差', '模型在训练集上表现好但测试集上表现差', '模型在训练集和测试集上都表现很好', '模型过于简单导致无法学习数据规律'],
        answer: '模型在训练集上表现好但测试集上表现差',
        points: 5,
        explanation: '过拟合指模型过于复杂，在训练集上拟合得很好，但学习到了训练数据中的噪声和细节，导致在测试集上泛化能力差。',
        tags: ['过拟合', '模型评估'],
        difficulty: 2,
      },
      {
        id: 'ex-8-1-4',
        question: '以下哪些方法可以缓解过拟合？（多选）',
        type: 'multiple',
        options: ['增加训练数据', '使用正则化（如L1/L2）', '大幅增加模型复杂度', '使用Dropout或提前停止'],
        answer: ['增加训练数据', '使用正则化（如L1/L2）', '使用Dropout或提前停止'],
        points: 10,
        explanation: '增加训练数据、正则化、Dropout和提前停止都是缓解过拟合的有效方法。而大幅增加模型复杂度会加剧过拟合。',
        tags: ['过拟合', '正则化'],
        difficulty: 2,
      },
      {
        id: 'ex-8-1-5',
        question: '在偏差-方差权衡中，高偏差通常对应什么问题？',
        type: 'single',
        options: ['过拟合', '欠拟合', '泛化能力强', '模型稳定'],
        answer: '欠拟合',
        points: 5,
        explanation: '高偏差意味着模型预测值与真实值平均偏离程度大，模型过于简单，难以拟合数据的规律，对应欠拟合。',
        tags: ['偏差方差', '欠拟合'],
        difficulty: 2,
      },
      {
        id: 'ex-8-1-6',
        question: '机器学习典型工作流中，以下哪个步骤应最先进行？',
        type: 'single',
        options: ['模型训练', '数据预处理', '问题定义', '模型评估'],
        answer: '问题定义',
        points: 5,
        explanation: '问题定义是机器学习工作流的第一步，需要明确业务问题类型和目标，之后再进行数据收集、预处理、模型训练等步骤。',
        tags: ['工作流'],
        difficulty: 1,
      },
      {
        id: 'ex-8-1-7',
        question: '强化学习中，智能体通过什么来学习最优策略？',
        type: 'single',
        options: ['带标签的训练数据', '聚类后的样本分组', '与环境交互获得的奖励信号', '人工标注的类别'],
        answer: '与环境交互获得的奖励信号',
        points: 5,
        explanation: '强化学习的核心机制是智能体（Agent）在环境中执行动作并获得奖励（Reward），通过最大化累积奖励来学习最优策略（Policy）。',
        tags: ['强化学习'],
        difficulty: 2,
      },
      ],
    },
    {
      id: 'chapter-8-2',
      title: '数据预处理与特征工程',
      content: '# 第二章：数据预处理与特征工程\n\n## 一、缺失值处理\n\n缺失值是现实数据中最常见的问题之一。处理缺失值的方法主要有以下几类：\n\n1. 删除法：直接删除包含缺失值的行或列。适用于缺失值比例很小且随机缺失的场景，但可能损失重要信息。\n\n2. 均值/中位数/众数填充：\n   - 均值（Mean）填充：适用于数值特征且分布近似正态的情况\n   - 中位数（Median）填充：对异常值不敏感，适合有偏分布的数据\n   - 众数（Mode）填充：常用于类别特征的缺失值处理\n\n3. 模型填充：使用机器学习模型预测缺失值。例如用KNNImputer根据相似样本的特征值填充，或用其他预测模型迭代填充。\n\n4. 标记法：将缺失值作为一个新的类别或特征，例如新增「是否缺失」的二值特征，同时保留原始缺失信息。\n\n## 二、异常值检测与处理\n\n异常值（Outlier）是指与大多数数据显著不同的观测值。常用检测方法：\n\n1. IQR方法（四分位距法）：计算第一四分位数Q1和第三四分位数Q3，IQR = Q3 - Q1。小于Q1 - 1.5×IQR或大于Q3 + 1.5×IQR的值视为异常值。\n\n2. Z-score方法：计算每个数据点的Z-score = (x - μ) / σ，其中μ为均值，σ为标准差。通常将|Z-score| > 3的点视为异常值。\n\n3. Isolation Forest（孤立森林）：一种基于树的异常检测算法。通过随机选择特征和切分值来孤立样本，异常值更容易被快速孤立，路径长度更短。适合高维数据。\n\n处理异常值的策略包括：删除、替换为边界值（Winsorize）、对数变换、将其视为缺失值处理、或保留并使用对异常值鲁棒的模型（如树模型）。\n\n## 三、特征缩放\n\n不同特征的数值范围差异很大时，基于距离的算法（如KNN、SVM、PCA）会受到量纲影响。\n\n1. 标准化（Standardization / StandardScaler）：将特征转换为均值为0、方差为1的分布。公式为 z = (x - μ) / σ。适用于假设数据服从正态分布的算法。\n\n2. 归一化（Min-Max Scaling / MinMaxScaler）：将特征缩放到[0, 1]或[-1, 1]区间。公式为 x_norm = (x - x_min) / (x_max - x_min)。适用于需要固定范围的神经网络或图像数据。\n\n需要注意：特征缩放应在训练集上拟合后，再分别应用于训练集和测试集，避免数据泄露。\n\n## 四、类别特征编码\n\n类别特征需要转换为数值形式才能被模型使用：\n\n1. 独热编码（One-Hot Encoding）：将每个类别转换为一个二进制特征向量。某样本属于第k类，则第k位为1，其余为0。优点是不引入人为次序关系，缺点是类别多时维度爆炸。\n\n2. 标签编码（Label Encoding）：将每个类别映射为一个整数。适合有自然顺序的类别特征（如「小/中/大」），但对无顺序类别使用可能引入虚假顺序关系。\n\n3. 序数编码（Ordinal Encoding）：为有序类别分配合理的整数值，如「差=0, 中=1, 好=2」。\n\n4. 目标编码（Target Encoding）：用类别对应的目标变量均值替换类别值，需注意防止过拟合，通常结合交叉验证。\n\n## 五、特征选择\n\n特征选择是从原始特征中挑选出对预测任务最有用的子集，可减少计算量、降低过拟合风险、提高模型可解释性。\n\n1. 方差选择（Variance Threshold）：移除方差低于阈值的特征，这些特征区分能力弱。\n\n2. 卡方检验（Chi-Squared Test）：用于分类特征与分类目标之间的相关性检验，衡量特征与目标的独立性。\n\n3. 互信息（Mutual Information）：衡量两个随机变量之间的依赖程度，可捕捉非线性关系。互信息越大，特征与目标的相关性越强。\n\n4. 递归特征消除（RFE）：递归地训练模型并移除权重最小的特征，直到达到所需的特征数量。\n\n5. 基于模型的特征重要性：如随机森林、XGBoost等可以输出特征重要性，直接筛选Top-K个重要特征。\n\n## 六、数据集划分\n\n将数据集划分为训练集（Training Set）、验证集（Validation Set）和测试集（Test Set）是模型评估的基础。常见划分比例为 70% : 15% : 15% 或 80% : 20%。\n\n关键参数：\n- stratify：按类别比例分层抽样，确保各数据集的类别分布与原始数据一致，对类别不平衡问题尤其重要。\n- random_state：固定随机种子，使每次运行划分结果相同，保证实验可复现。\n\n常见的划分代码示例：使用sklearn的train_test_split函数，先划分出测试集，再从剩余部分划分出训练集和验证集。或使用交叉验证来更充分地利用数据进行模型评估。\n\n数据泄露（Data Leakage）是预处理阶段需要警惕的常见错误，例如使用整个数据集（包括测试集）的统计量进行标准化。正确做法是仅在训练集上拟合预处理器，再应用于各子集。',
      exercises: [
      {
        id: 'ex-8-2-1',
        question: '对于数值特征且存在异常值时，缺失值填充更推荐使用以下哪种方法？',
        type: 'single',
        options: ['均值填充', '中位数填充', '众数填充', '删除缺失行'],
        answer: '中位数填充',
        points: 5,
        explanation: '中位数对异常值不敏感，当数据中存在异常值时，使用中位数填充比均值填充更稳健。均值容易被极端值拉偏。',
        tags: ['缺失值', '异常值'],
        difficulty: 2,
      },
      {
        id: 'ex-8-2-2',
        question: '使用IQR方法检测异常值时，第一四分位数Q1=20，第三四分位数Q3=40，则异常值的上限是？',
        type: 'single',
        options: ['55', '60', '70', '80'],
        answer: '70',
        points: 5,
        explanation: 'IQR = Q3 - Q1 = 20，上限 = Q3 + 1.5×IQR = 40 + 1.5×20 = 70。',
        tags: ['异常值', 'IQR'],
        difficulty: 2,
      },
      {
        id: 'ex-8-2-3',
        question: '关于StandardScaler标准化，以下说法正确的是？',
        type: 'single',
        options: ['将特征缩放到[0,1]区间', '将特征转换为均值0方差1的分布', '适合所有机器学习算法', '标准化应在整个数据集上拟合后再划分'],
        answer: '将特征转换为均值0方差1的分布',
        points: 5,
        explanation: 'StandardScaler的公式为 z = (x - μ) / σ，转换后特征均值为0方差为1。MinMaxScaler才缩放到固定区间。标准化应只在训练集上拟合，避免数据泄露。',
        tags: ['特征缩放', '标准化'],
        difficulty: 2,
      },
      {
        id: 'ex-8-2-4',
        question: '对于没有自然顺序的类别特征（如颜色：红/蓝/绿），使用以下哪种编码更合适？',
        type: 'single',
        options: ['标签编码', '独热编码', '直接使用原始字符串', '归一化'],
        answer: '独热编码',
        points: 5,
        explanation: '无顺序类别特征使用标签编码会引入人为的次序关系（如红<蓝<绿），可能误导模型。独热编码为每个类别创建独立的二进制特征，避免此问题。',
        tags: ['类别编码', '独热编码'],
        difficulty: 2,
      },
      {
        id: 'ex-8-2-5',
        question: '以下哪些属于特征选择方法？（多选）',
        type: 'multiple',
        options: ['方差选择（Variance Threshold）', '卡方检验', '互信息', '独热编码'],
        answer: ['方差选择（Variance Threshold）', '卡方检验', '互信息'],
        points: 10,
        explanation: '方差选择、卡方检验、互信息都是常见的特征选择方法。独热编码属于类别特征编码方法，不属于特征选择。',
        tags: ['特征选择'],
        difficulty: 2,
      },
      {
        id: 'ex-8-2-6',
        question: '使用train_test_split划分数据集时，stratify参数的作用是？',
        type: 'single',
        options: ['固定随机种子', '按目标变量的类别比例进行分层抽样', '设置训练集大小比例', '对数据进行归一化'],
        answer: '按目标变量的类别比例进行分层抽样',
        points: 5,
        explanation: 'stratify参数确保划分出的各数据集类别分布与原始数据一致，在类别不平衡场景中尤为重要。固定随机种子使用random_state参数。',
        tags: ['数据集划分', 'stratify'],
        difficulty: 2,
      },
      {
        id: 'ex-8-2-7',
        question: '以下哪种行为属于数据泄露？',
        type: 'single',
        options: ['仅在训练集上拟合StandardScaler', '使用整个数据集的均值来填充缺失值后再划分数据集', '使用交叉验证进行模型评估', '在测试集上评估最终模型'],
        answer: '使用整个数据集的均值来填充缺失值后再划分数据集',
        points: 5,
        explanation: '使用整个数据集（包括测试集）的统计信息进行预处理，会将测试集的信息泄露到训练过程中，属于典型的数据泄露。正确做法是先划分，再在训练集上拟合预处理器。',
        tags: ['数据泄露'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-8-3',
      title: '监督学习 - 分类算法',
      content: '# 第三章：监督学习 - 分类算法\n\n## 一、K近邻算法（KNN）\n\nK近邻（K-Nearest Neighbors）是一种基于实例的学习算法，属于「懒惰学习」。其核心思想：对于一个新样本，找到训练集中与它距离最近的K个样本，这K个样本中多数属于哪个类别，新样本就归为哪个类别。\n\n距离度量的常用方法：\n- 欧氏距离（Euclidean Distance）：d = √(Σ(xi - yi)²)，最常用\n- 曼哈顿距离（Manhattan Distance）：d = Σ|xi - yi|\n- 余弦相似度（Cosine Similarity）：衡量向量方向的相似程度，常用于文本\n\nK值选择：K太小（如K=1）容易受噪声影响而过拟合；K太大则邻域过大，可能包含太多其他类别的样本导致欠拟合。通常通过交叉验证选择最优K值。\n\n## 二、逻辑回归（Logistic Regression）\n\n逻辑回归虽然名字有「回归」，但实际上是一个经典的二分类算法。它在线性回归基础上使用Sigmoid函数将输出压缩到(0, 1)之间，作为样本属于正类的概率。\n\nSigmoid函数：σ(z) = 1 / (1 + e^(-z))，其中z = wx + b\n\n当σ(z) > 0.5时预测为正类，否则为负类。阈值可以根据业务需求调整。\n\n损失函数使用对数似然损失（交叉熵损失），通过梯度下降求解最优参数。逻辑回归输出具有概率意义，模型可解释性强（权重大小反映特征重要性），是风控、医疗等需要解释性场景的首选。\n\n## 三、决策树\n\n决策树通过一系列「是/否」的决策规则对数据进行划分，形成树状结构。从根节点到叶节点的路径对应一条决策规则。\n\n主要算法：\n- ID3：使用信息增益（Information Gain）选择特征，倾向于选择类别多的特征\n- C4.5：使用信息增益比（Gain Ratio）修正ID3的偏差\n- CART：使用基尼系数（Gini Index）或均方误差，既可用于分类也可用于回归，是sklearn中默认的决策树实现\n\n决策树的优点：直观可解释、对数据预处理要求低、能处理数值和类别特征。缺点：易过拟合、对数据变化敏感（高方差）。缓解方法：限制树的深度（max_depth）、最小样本数（min_samples_leaf）、剪枝等。\n\n## 四、支持向量机（SVM）\n\n支持向量机（Support Vector Machine）的核心思想是在特征空间中找到一个超平面（Hyperplane），使得两类样本到超平面的最小距离（间隔）最大化。位于间隔边界上的样本称为支持向量（Support Vector），只有它们决定超平面的位置。\n\n当数据线性不可分时，SVM通过两种方式解决：\n1. 软间隔（Soft Margin）：允许部分样本被错误分类，引入松弛变量，通过参数C控制惩罚程度\n2. 核函数（Kernel Trick）：将数据映射到更高维的特征空间，使得在高维空间中数据线性可分。常用核函数有线性核（Linear）、多项式核（Poly）、高斯核（RBF）、Sigmoid核\n\nSVM在小样本高维数据上表现优秀，但训练复杂度高，对大规模数据不友好。\n\n## 五、朴素贝叶斯\n\n朴素贝叶斯基于贝叶斯定理和「特征条件独立」假设。贝叶斯公式：P(y|x) = P(x|y)P(y) / P(x)\n\n「朴素」体现在假设所有特征相互独立，虽然在实际中这个假设往往不成立，但朴素贝叶斯依然在文本分类、垃圾邮件识别等场景中表现出色。\n\n根据P(x|y)的分布假设，常见变体：\n- 高斯朴素贝叶斯（GaussianNB）：假设特征服从正态分布，用于连续特征\n- 多项式朴素贝叶斯（MultinomialNB）：用于文本分类等离散计数数据\n- 伯努利朴素贝叶斯（BernoulliNB）：用于二值特征\n\n朴素贝叶斯训练速度快、需要的训练数据少，但对特征独立假设的依赖使其在特征高度相关时表现不佳。\n\n## 六、集成学习\n\n集成学习通过组合多个基学习器来获得比单个学习器更好的性能。主要分为三类：\n\n1. Bagging（装袋法）：并行训练多个独立的基学习器，通过投票（分类）或平均（回归）融合结果。典型代表是随机森林（Random Forest）：同时在样本（Bootstrap抽样）和特征（随机子空间）两个维度引入随机性，进一步降低模型方差。\n\n2. Boosting（提升法）：串行训练基学习器，每一轮的学习器重点关注前一轮分错的样本，逐步迭代减小偏差。典型代表：\n   - AdaBoost：通过调整样本权重（加大错分样本权重）来训练弱分类器\n   - GBDT（Gradient Boosting Decision Tree）：使用梯度下降框架，每轮拟合前一轮残差的负梯度\n   - XGBoost、LightGBM、CatBoost：GBDT的高效工程实现，广泛用于数据挖掘竞赛\n\n3. Stacking（堆叠法）：多层集成，上一层学习器的输出作为下一层的输入特征。\n\n集成学习是当前工业界和竞赛中最强大的方法之一。sklearn中提供了RandomForestClassifier、AdaBoostClassifier、GradientBoostingClassifier等完整实现。\n\n## 七、sklearn使用示例\n\n典型的sklearn工作流程：\n1. 从sklearn.datasets或外部加载数据\n2. 使用train_test_split划分训练集和测试集\n3. 选择模型类（如from sklearn.ensemble import RandomForestClassifier）\n4. 创建模型实例并设置超参数\n5. 在训练集上调用fit()方法训练\n6. 在测试集上调用predict()或predict_proba()进行预测\n7. 使用sklearn.metrics中的评估函数评估性能\n8. 结合GridSearchCV进行超参数调优\n\n建议在实践中尝试多种算法并进行对比，因为「没有免费的午餐」，最佳算法取决于具体数据和问题。',
      exercises: [
      {
        id: 'ex-8-3-1',
        question: 'KNN算法中，K值过小（如K=1）最可能导致什么问题？',
        type: 'single',
        options: ['欠拟合', '过拟合', '模型训练速度变慢', '无法进行预测'],
        answer: '过拟合',
        points: 5,
        explanation: 'K值过小意味着模型只看最近的1个邻居，容易受到噪声和偶然因素的影响，在训练集上表现完美但泛化能力差，容易过拟合。',
        tags: ['KNN', '过拟合'],
        difficulty: 2,
      },
      {
        id: 'ex-8-3-2',
        question: 'Sigmoid函数 σ(z) = 1/(1+e^(-z)) 的输出范围是？',
        type: 'single',
        options: ['(-∞, +∞)', '[0, 1]', '(0, 1)', '[-1, 1]'],
        answer: '(0, 1)',
        points: 5,
        explanation: 'Sigmoid函数将任意实数值压缩到(0, 1)开区间内，不包括0和1，这使得输出可以被解释为概率。',
        tags: ['逻辑回归', 'Sigmoid'],
        difficulty: 1,
      },
      {
        id: 'ex-8-3-3',
        question: '决策树CART算法使用什么准则来选择划分特征？',
        type: 'single',
        options: ['信息增益', '信息增益比', '基尼系数或均方误差', '互信息'],
        answer: '基尼系数或均方误差',
        points: 5,
        explanation: 'CART（Classification and Regression Tree）使用基尼系数进行分类，使用均方误差（MSE）进行回归。ID3使用信息增益，C4.5使用信息增益比。',
        tags: ['决策树', 'CART'],
        difficulty: 2,
      },
      {
        id: 'ex-8-3-4',
        question: '关于SVM核函数，以下说法正确的是？（多选）',
        type: 'multiple',
        options: ['线性核适合线性可分的数据', 'RBF核（高斯核）可以将数据映射到高维空间', '核函数可以让SVM处理非线性分类问题', '核函数只在逻辑回归中使用'],
        answer: ['线性核适合线性可分的数据', 'RBF核（高斯核）可以将数据映射到高维空间', '核函数可以让SVM处理非线性分类问题'],
        points: 10,
        explanation: '线性核在数据线性可分时简单高效。RBF等核函数通过核技巧将数据映射到高维特征空间处理非线性问题。核函数不是逻辑回归的概念。',
        tags: ['SVM', '核函数'],
        difficulty: 3,
      },
      {
        id: 'ex-8-3-5',
        question: '朴素贝叶斯算法中的「朴素」指的是什么假设？',
        type: 'single',
        options: ['数据服从正态分布', '所有特征条件独立', '样本之间相互独立', '类别先验概率均匀'],
        answer: '所有特征条件独立',
        points: 5,
        explanation: '「朴素」指特征条件独立假设，即给定类别时，各个特征相互独立。这虽然在实际中往往不成立，但朴素贝叶斯依然在许多场景中表现良好。',
        tags: ['朴素贝叶斯'],
        difficulty: 2,
      },
      {
        id: 'ex-8-3-6',
        question: '以下哪种集成方法采用串行方式训练基学习器，逐步减小模型偏差？',
        type: 'single',
        options: ['Bagging', 'Random Forest', 'Boosting', 'Stacking'],
        answer: 'Boosting',
        points: 5,
        explanation: 'Boosting（提升法）串行训练基学习器，每一轮重点关注前一轮分错的样本，通过逐步迭代减小偏差。Bagging和随机森林是并行方式。',
        tags: ['集成学习', 'Boosting'],
        difficulty: 2,
      },
      {
        id: 'ex-8-3-7',
        question: '随机森林相对于单棵决策树的主要优势是？（多选）',
        type: 'multiple',
        options: ['降低模型方差，减少过拟合', '通过特征随机选择提高多样性', '训练速度始终比单棵树慢', '对异常值更敏感'],
        answer: ['降低模型方差，减少过拟合', '通过特征随机选择提高多样性'],
        points: 10,
        explanation: '随机森林通过Bootstrap样本抽样和随机特征选择引入多样性，多棵树的投票/平均降低了模型的方差和过拟合风险。它对异常值也相对鲁棒。',
        tags: ['随机森林', '集成学习'],
        difficulty: 2,
      },
      {
        id: 'ex-8-3-8',
        question: 'sklearn中用于训练模型和进行预测的标准方法名分别是？',
        type: 'single',
        options: ['train() 和 predict()', 'fit() 和 predict()', 'learn() 和 test()', 'build() 和 forecast()'],
        answer: 'fit() 和 predict()',
        points: 5,
        explanation: 'sklearn遵循统一的API设计：fit()用于在训练数据上拟合模型，predict()用于对新数据进行预测。此外还有predict_proba()用于输出概率。',
        tags: ['sklearn'],
        difficulty: 1,
      },
      ],
    },
    {
      id: 'chapter-8-4',
      title: '模型评估与优化',
      content: '# 第四章：模型评估与优化\n\n## 一、混淆矩阵\n\n混淆矩阵（Confusion Matrix）是分类任务中最基础的评估工具。在二分类场景中，它包含四个关键值：\n\n- TP（True Positive）：真正例，实际为正类且预测为正类\n- FP（False Positive）：假正例，实际为负类但预测为正类（第一类错误）\n- TN（True Negative）：真负例，实际为负类且预测为负类\n- FN（False Negative）：假负例，实际为正类但预测为负类（第二类错误）\n\n混淆矩阵可以直观地展示模型在各类别上的表现，尤其在类别不平衡场景中，比单一的准确率更有价值。\n\n## 二、常用分类评价指标\n\n基于混淆矩阵可以派生出多个评价指标：\n\n1. 准确率（Accuracy）= (TP + TN) / (TP + FP + TN + FN)。整体预测正确的比例。缺点：在类别不平衡时具有误导性，如99%为负类时，全预测为负类准确率达99%但毫无价值。\n\n2. 精确率（Precision）= TP / (TP + FP)。预测为正类的样本中真正为正类的比例。关注「预测为正的样本中有多少是对的」，在垃圾邮件识别中重要（避免把正常邮件标记为垃圾）。\n\n3. 召回率（Recall / Sensitivity / True Positive Rate）= TP / (TP + FN)。实际为正类的样本中被正确预测的比例。关注「所有正样本中被找出的有多少」，在疾病筛查中重要（漏诊后果严重）。\n\n4. F1分数（F1-Score）= 2 × (Precision × Recall) / (Precision + Recall)。精确率和召回率的调和平均值，兼顾两者。当精确率和召回率都重要时使用。\n\n5. 特异度（Specificity）= TN / (TN + FP)。实际为负类的样本中被正确预测的比例。\n\n精确率和召回率之间存在权衡：降低分类阈值会提高召回率但降低精确率，反之亦然。需要根据业务场景选择合适的权衡点。\n\n## 三、AUC-ROC曲线\n\nROC曲线（Receiver Operating Characteristic Curve）横轴为假正率（FPR = FP / (TN + FP)），纵轴为真正率（TPR = Recall）。通过在不同阈值下绘制(FPR, TPR)点得到ROC曲线。\n\nAUC（Area Under the Curve）是ROC曲线下的面积，取值范围[0.5, 1]：\n- AUC = 0.5：模型表现等同于随机猜测\n- AUC = 1：完美分类器\n- AUC > 0.7：模型有一定区分能力\n- AUC > 0.9：优秀的区分能力\n\nAUC的优势：对类别不平衡不敏感，不依赖于分类阈值，能综合评估模型在所有可能阈值下的表现。\n\n## 四、交叉验证\n\n将数据只划分为一个训练集和测试集可能因随机性导致评估结果不稳定。交叉验证（Cross-Validation）提供更稳健的评估。\n\n1. K折交叉验证（KFold）：将训练集划分为K个不重叠的子集，每次用其中K-1个作为训练集，1个作为验证集，共训练K个模型，取K次评估结果的平均。K通常取5或10。\n\n2. 分层K折交叉验证（StratifiedKFold）：在KFold基础上，确保每一折的类别分布与整体一致。适合类别不平衡的分类任务。\n\n3. 留一法（Leave-One-Out, LOO）：K = N的特殊情况，每次只留一个样本作为验证集。评估结果稳定但计算开销大。\n\n4. 时间序列交叉验证：对时间序列数据不能随机打乱，应使用前向滚动验证（如TimeSeriesSplit）。\n\n## 五、超参数调优\n\n超参数是在训练前设置的参数（如SVM的C和gamma、随机森林的n_estimators和max_depth），需要通过搜索确定最优组合。\n\n1. 网格搜索（GridSearchCV）：在预定义的超参数组合上进行穷举搜索，使用交叉验证评估每种组合。优点是全面可复现，缺点是参数组合数量随参数个数指数增长（维度灾难）。\n\n2. 随机搜索（RandomizedSearchCV）：在参数分布中随机采样固定数量的组合进行评估。在高维参数空间中通常比网格搜索更高效，经验表明其效果接近网格搜索但成本更低。\n\n3. 贝叶斯优化（如Optuna、Hyperopt）：使用贝叶斯方法构建目标函数的代理模型，智能地选择下一组要评估的参数。比网格搜索和随机搜索更高效但实现更复杂。\n\n实践建议：先用较大范围的随机搜索快速缩小范围，再在较小区间使用网格搜索精细调优。\n\n## 六、学习曲线\n\n学习曲线（Learning Curve）以训练样本数量为横轴，模型在训练集和验证集上的性能为纵轴，用于诊断：\n\n- 两条曲线之间的差距大 → 高方差，可能过拟合\n- 两条曲线都收敛但分数都低 → 高偏差，可能欠拟合\n- 增加训练样本后验证集得分仍在上升 → 更多数据可能有帮助\n- 训练集和验证集分数都趋于平稳 → 模型已稳定\n\n在sklearn中可以使用learning_curve函数和validation_curve函数绘制学习曲线和验证曲线，帮助选择模型复杂度、正则化强度等。\n\n## 七、模型持久化\n\n训练好的模型需要保存以便后续在生产环境中使用。Python中常用两种方式：\n\n1. pickle：Python标准库，可序列化几乎所有Python对象。使用pickle.dump()保存，pickle.load()加载。\n\n2. joblib：针对大型NumPy数组优化，更适合保存包含大规模数据的scikit-learn模型。使用joblib.dump()保存，joblib.load()加载，通常比pickle更高效。\n\n模型持久化注意事项：\n- 保存模型时同时保存预处理流程（如使用Pipeline），确保推理时的预处理与训练一致\n- 注意sklearn版本兼容性，不同版本的模型文件可能无法互相加载\n- 生产环境中应使用版本控制管理模型文件\n- 模型可能包含训练数据信息，注意数据隐私\n\n综合运用以上方法，可以构建出性能优秀、可复现且可部署的机器学习系统。',
      exercises: [
      {
        id: 'ex-8-4-1',
        question: '混淆矩阵中，FP（False Positive）表示什么？',
        type: 'single',
        options: ['实际为正类，预测为正类', '实际为负类，预测为正类', '实际为负类，预测为负类', '实际为正类，预测为负类'],
        answer: '实际为负类，预测为正类',
        points: 5,
        explanation: 'FP即假正例（False Positive），表示实际为负类的样本被错误地预测为正类，也称为第一类错误。',
        tags: ['混淆矩阵'],
        difficulty: 1,
      },
      {
        id: 'ex-8-4-2',
        question: '在癌症筛查场景中（漏诊后果严重），我们应优先关注以下哪个指标？',
        type: 'single',
        options: ['准确率（Accuracy）', '精确率（Precision）', '召回率（Recall）', 'F1分数'],
        answer: '召回率（Recall）',
        points: 5,
        explanation: '召回率衡量「所有正样本中被正确预测的比例」。癌症筛查中漏诊（将癌症患者误判为健康）后果严重，应尽可能减少FN，即提高召回率。',
        tags: ['评价指标', '召回率'],
        difficulty: 2,
      },
      {
        id: 'ex-8-4-3',
        question: 'AUC=0.5意味着什么？',
        type: 'single',
        options: ['模型完美分类', '模型表现优于随机猜测', '模型表现等同于随机猜测', '模型分类错误率为50%'],
        answer: '模型表现等同于随机猜测',
        points: 5,
        explanation: 'AUC取值范围为[0.5, 1]。AUC=0.5表示ROC曲线与对角线重合，模型对正负类的区分能力与随机猜测无差异。',
        tags: ['AUC', 'ROC'],
        difficulty: 2,
      },
      {
        id: 'ex-8-4-4',
        question: '以下关于交叉验证的说法，正确的是？（多选）',
        type: 'multiple',
        options: ['K折交叉验证可以获得更稳定的评估结果', 'StratifiedKFold能保持每一折的类别分布', '交叉验证不需要划分测试集', '时间序列数据应使用随机打乱的KFold'],
        answer: ['K折交叉验证可以获得更稳定的评估结果', 'StratifiedKFold能保持每一折的类别分布'],
        points: 10,
        explanation: 'K折交叉验证通过多次划分和评估降低随机性影响。StratifiedKFold保持类别分布，适合类别不平衡任务。交叉验证仍需独立的测试集。时间序列不能随机打乱，应使用TimeSeriesSplit。',
        tags: ['交叉验证'],
        difficulty: 2,
      },
      {
        id: 'ex-8-4-5',
        question: '关于网格搜索GridSearchCV和随机搜索RandomizedSearchCV，以下说法正确的是？',
        type: 'single',
        options: ['网格搜索在高维参数空间中更高效', '随机搜索需要预定义所有参数组合', '在高维参数空间中随机搜索通常比网格搜索更高效', '两者评估的参数组合数量相同'],
        answer: '在高维参数空间中随机搜索通常比网格搜索更高效',
        points: 5,
        explanation: '网格搜索的参数组合数量随参数个数指数增长，在高维空间中不可行。随机搜索从分布中采样固定数量的组合，更高效且经验效果良好。',
        tags: ['超参数调优', '网格搜索'],
        difficulty: 2,
      },
      {
        id: 'ex-8-4-6',
        question: '学习曲线中，如果训练集得分远高于验证集得分（两条曲线差距大），最可能的问题是？',
        type: 'single',
        options: ['高偏差（欠拟合）', '高方差（过拟合）', '模型训练不足', '数据量过大'],
        answer: '高方差（过拟合）',
        points: 5,
        explanation: '训练集得分高但验证集得分低，差距大说明模型在训练集上表现好但泛化能力差，这是典型的过拟合现象，对应高方差。',
        tags: ['学习曲线', '过拟合'],
        difficulty: 2,
      },
      {
        id: 'ex-8-4-7',
        question: '保存sklearn模型时，以下哪种做法是正确的？',
        type: 'single',
        options: ['直接保存模型对象，加载时使用不同版本的sklearn', '保存原始训练数据而非模型', '使用joblib保存包含预处理和模型的完整Pipeline', '手动记录模型参数，加载时重新训练'],
        answer: '使用joblib保存包含预处理和模型的完整Pipeline',
        points: 5,
        explanation: '将预处理和模型组合在Pipeline中一起保存，可确保推理时与训练时的处理流程一致。joblib对大型NumPy数组优化，是sklearn推荐的方式。需注意sklearn版本兼容性。',
        tags: ['模型持久化', 'joblib'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-8-5',
      title: '无监督学习',
      content: '# 第五章：无监督学习\n\n## 一、K-Means聚类\n\nK-Means是最经典和最常用的聚类算法之一，其目标是将n个样本划分为K个簇（Cluster），使得每个样本属于距离最近的簇，簇内样本距离尽可能小，簇间距离尽可能大。\n\n算法流程：\n1. 随机初始化K个簇中心（Centroid）\n2. 将每个样本分配到距离最近的簇中心\n3. 重新计算每个簇的中心（该簇所有样本的均值）\n4. 重复步骤2和3，直到簇中心不再变化或达到最大迭代次数\n\nK-Means使用误差平方和（SSE / Inertia）作为目标函数，通过EM（期望最大化）风格的迭代优化求解。\n\nK值选择的肘部法则（Elbow Method）：绘制不同K值对应的SSE曲线，当SSE下降速度突然变缓时对应的拐点即为推荐的K值。形象地看像「手臂的肘部」。也可以结合轮廓系数辅助判断。\n\nK-Means优点：算法简单、速度快、适合大规模数据。缺点：需要预先指定K、对初始中心敏感（可用K-Means++改进）、对异常值敏感、只能发现球形簇。\n\n## 二、层次聚类\n\n层次聚类（Hierarchical Clustering）通过构建层次化的聚类结构，最终形成一棵聚类树（Dendrogram）。\n\n主要有两种策略：\n\n1. 凝聚式（Agglomerative / 自底向上）：初始时每个样本自成一个簇，然后每一步合并距离最近的两个簇，直到所有样本合并为一个簇。sklearn中AgglomerativeClustering实现了此方法。\n\n2. 分裂式（Divisive / 自顶向下）：初始时所有样本属于一个簇，然后每一步将一个簇分裂为两个子簇，直到每个样本自成一个簇。\n\n簇间距离度量（Linkage）：\n- Single Linkage：两个簇中最近样本的距离。能识别非球形簇但对噪声敏感，易产生链式效应。\n- Complete Linkage：两个簇中最远样本的距离。倾向于产生紧凑的球形簇。\n- Average Linkage：两个簇中所有样本对的平均距离。是Single和Complete的折中。\n- Ward Linkage：最小化簇内方差的增加。倾向于产生大小相近的簇，仅适用于欧氏距离。\n\n层次聚类的优点：不需要预先指定簇数量、聚类树可解释性强。缺点：计算复杂度高（O(n³)）、难以回溯调整、不适合大规模数据。\n\n## 三、DBSCAN密度聚类\n\nDBSCAN（Density-Based Spatial Clustering of Applications with Noise）是一种基于密度的聚类算法，不需要预先指定簇的数量，可以发现任意形状的簇，并能自动识别噪声点。\n\n核心概念：\n- 核心点（Core Point）：在半径ε（eps）范围内至少包含min_samples个邻居（包括自己）的点\n- 边界点（Border Point）：不是核心点，但在某个核心点的ε邻域内\n- 噪声点（Noise Point）：既不是核心点也不是边界点的点\n\n算法流程：\n1. 随机选择一个未访问的点\n2. 如果该点是核心点，则从它出发通过密度可达找到所有密度连通的点，形成一个簇\n3. 如果该点是边界点或噪声点，暂时标记为噪声\n4. 重复直到所有点被访问\n\nDBSCAN的优势：能发现任意形状的簇、能自动检测噪声、无需指定K。缺点：对密度变化大的数据效果不佳、eps和min_samples参数难以选择、维度高时距离度量失效（维度灾难）。\n\n在实际应用中，可以通过k-距离图（k-distance graph）帮助选择合适的eps参数。\n\n## 四、PCA主成分分析\n\n主成分分析（Principal Component Analysis）是最经典的线性降维方法，通过正交变换将可能相关的变量转换为一组线性不相关的变量（主成分）。\n\n核心思想：寻找数据方差最大的方向作为第一主成分，在与第一主成分正交的方向中寻找方差最大的方向作为第二主成分，依此类推。\n\n数学推导简述：对数据的协方差矩阵进行特征值分解，特征值从大到小对应各主成分的方差，对应的特征向量即为主成分的方向。也可以通过SVD（奇异值分解）更高效地实现。\n\nPCA的应用：\n1. 数据可视化：将高维数据降至2维或3维，便于观察数据结构\n2. 特征压缩：减少特征维度，降低后续算法的计算量，减少过拟合\n3. 噪声过滤：舍弃小方差的成分（通常对应噪声），保留主要信息\n\n选择主成分数量的方法：\n- 保留累计解释方差比（Explained Variance Ratio）达到阈值（如95%）的成分数\n- 绘制每个成分的解释方差比曲线（Scree Plot），找肘部\n- 使用固定维度（如降至2维用于可视化）\n\nPCA的局限：是线性方法，无法捕捉非线性结构（非线性降维可用t-SNE、UMAP等）；主成分的可解释性差；降维后原始特征的含义丢失。\n\n## 五、聚类评估指标\n\n聚类结果的评估比分类更具挑战性，因为通常没有真实标签。常用方法：\n\n1. 轮廓系数（Silhouette Score）：衡量样本与自身簇的相似度和与邻近簇的分离度。对于每个样本i：\n   a(i) = 样本i到同簇其他样本的平均距离（簇内紧密度）\n   b(i) = 样本i到最近的其他簇所有样本的平均距离（簇间分离度）\n   s(i) = (b(i) - a(i)) / max(a(i), b(i))\n\n   轮廓系数取值范围[-1, 1]：\n   - 接近1：样本与自身簇紧密，与其他簇分离良好 → 聚类效果好\n   - 接近0：样本位于两个簇的边界附近 → 簇结构不清晰\n   - 接近-1：样本可能被错误分配 → 聚类效果差\n\n   所有样本轮廓系数的平均值即为整体聚类的轮廓系数。\n\n2. Calinski-Harabasz Index（CH指标）：簇间协方差与簇内协方差的比值，值越大聚类效果越好。计算速度快。\n\n3. Davies-Bouldin Index（DB指标）：衡量簇间相似度的平均值，值越小聚类效果越好。\n\n4. 调整兰德指数（Adjusted Rand Index, ARI）和归一化互信息（NMI）：当有真实标签时使用，衡量聚类结果与真实标签的一致性，取值范围[0, 1]，越大越好。\n\n综合运用各种无监督学习方法和评估指标，可以在没有标签的数据中发现隐藏的结构和模式，为后续分析和决策提供支持。',
      exercises: [
      {
        id: 'ex-8-5-1',
        question: 'K-Means算法中，「肘部法则」用于选择什么参数？',
        type: 'single',
        options: ['学习率', '簇的数量K', '迭代次数', '初始簇中心位置'],
        answer: '簇的数量K',
        points: 5,
        explanation: '肘部法则通过绘制不同K值对应的误差平方和（SSE）曲线，找到SSE下降速度突然变缓的「拐点」，以此作为推荐的簇数量K。',
        tags: ['K-Means', '肘部法则'],
        difficulty: 2,
      },
      {
        id: 'ex-8-5-2',
        question: '以下哪种层次聚类策略采用「自底向上」的方式，初始每个样本为独立簇然后逐步合并？',
        type: 'single',
        options: ['凝聚式（Agglomerative）', '分裂式（Divisive）', 'K-Means', 'DBSCAN'],
        answer: '凝聚式（Agglomerative）',
        points: 5,
        explanation: '凝聚式层次聚类（Agglomerative）从每个样本为独立簇开始，每一步合并距离最近的两个簇。分裂式则相反，从一个大簇开始分裂。',
        tags: ['层次聚类'],
        difficulty: 2,
      },
      {
        id: 'ex-8-5-3',
        question: 'DBSCAN中，一个点在半径ε范围内至少包含min_samples个邻居（包括自己），该点被称为？',
        type: 'single',
        options: ['边界点', '噪声点', '核心点', '孤立点'],
        answer: '核心点',
        points: 5,
        explanation: '核心点（Core Point）定义为在ε（eps）半径内至少包含min_samples个邻居的点，它们是构成簇的核心。边界点在核心点邻域内但自己不是核心点。噪声点则两者都不是。',
        tags: ['DBSCAN', '核心点'],
        difficulty: 2,
      },
      {
        id: 'ex-8-5-4',
        question: '关于DBSCAN相比K-Means的优势，以下说法正确的是？（多选）',
        type: 'multiple',
        options: ['不需要预先指定簇的数量', '可以发现任意形状的簇', '能自动识别和过滤噪声点', '在高维数据上始终优于K-Means'],
        answer: ['不需要预先指定簇的数量', '可以发现任意形状的簇', '能自动识别和过滤噪声点'],
        points: 10,
        explanation: 'DBSCAN基于密度，可以发现非球形簇、自动检测噪声、无需预先指定K。但高维数据下距离度量失效（维度灾难）是所有聚类算法的共同挑战，并不能说DBSCAN始终优于K-Means。',
        tags: ['DBSCAN', 'K-Means'],
        difficulty: 3,
      },
      {
        id: 'ex-8-5-5',
        question: 'PCA主成分分析寻找的是什么方向？',
        type: 'single',
        options: ['数据均值所在的方向', '数据方差最大的正交方向', '数据中值所在的方向', '数据最小值所在的方向'],
        answer: '数据方差最大的正交方向',
        points: 5,
        explanation: 'PCA通过寻找数据方差最大的正交方向来构造主成分。第一主成分是方差最大的方向，后续主成分在与前成分正交的约束下依次取剩余方差最大的方向。',
        tags: ['PCA', '降维'],
        difficulty: 2,
      },
      {
        id: 'ex-8-5-6',
        question: 'PCA降维时选择主成分数量的常用方法是？（多选）',
        type: 'multiple',
        options: ['选择累计解释方差比达到阈值（如95%）的成分数', '绘制解释方差比的Scree Plot寻找肘部', '固定降维到2维用于可视化', '选择特征值最大的那个成分'],
        answer: ['选择累计解释方差比达到阈值（如95%）的成分数', '绘制解释方差比的Scree Plot寻找肘部', '固定降维到2维用于可视化'],
        points: 10,
        explanation: '累计解释方差比、Scree Plot肘部法则以及固定维度（用于可视化）都是常用方法。只选择最大特征值的一个成分会丢失大量信息，不是推荐做法。',
        tags: ['PCA'],
        difficulty: 2,
      },
      {
        id: 'ex-8-5-7',
        question: '轮廓系数（Silhouette Score）的取值范围和最佳值分别是？',
        type: 'single',
        options: ['[0, 1]，越接近0越好', '[-1, 1]，越接近1越好', '[0, +∞)，越大越好', '[-1, 1]，越接近-1越好'],
        answer: '[-1, 1]，越接近1越好',
        points: 5,
        explanation: '轮廓系数取值范围为[-1, 1]。接近1表示样本与自身簇紧密且与其他簇分离良好，聚类效果好；接近-1表示样本可能被错误分配；接近0表示样本位于簇边界。',
        tags: ['轮廓系数', '聚类评估'],
        difficulty: 2,
      },
      {
        id: 'ex-8-5-8',
        question: '以下哪种评估指标需要真实标签才能计算？',
        type: 'single',
        options: ['轮廓系数（Silhouette Score）', 'Calinski-Harabasz Index', '调整兰德指数（ARI）', 'Davies-Bouldin Index'],
        answer: '调整兰德指数（ARI）',
        points: 5,
        explanation: 'ARI（Adjusted Rand Index）和NMI（归一化互信息）需要真实标签来衡量聚类结果与真实标签的一致性。其他三个指标是无监督的，只依赖聚类结果本身。',
        tags: ['聚类评估', 'ARI'],
        difficulty: 3,
      },
      ],
    },
    ]
  },
  {
    id: 'course-9',
    title: 'SQL与数据库',
    description: '掌握SQL查询语言，能够从数据库中高效提取和操作数据。',
    category: '工具课程',
    difficulty: 2,
    thumbnail: 'https://picsum.photos/seed/sql/400/400',
    chapters: [
    {
      id: 'chapter-9-1',
      title: '数据库基础与SQL入门',
      content: '## 一、数据库基本概念\n\n数据库（Database, DB）是长期存储在计算机内、有组织的、可共享的大量数据的集合。数据库中的数据按一定的数据模型组织、描述和存储，具有较小的冗余度、较高的数据独立性和易扩展性。\n\n数据库管理系统（Database Management System, DBMS）是位于用户与操作系统之间的一层数据管理软件，用于科学地组织和存储数据、高效地获取和维护数据。DBMS的主要功能包括数据定义功能、数据操纵功能、数据库的运行管理功能以及数据库的建立和维护功能。\n\n关系型数据库（Relational Database Management System, RDBMS）是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。关系模型由关系数据结构、关系操作集合、关系完整性约束三部分组成。\n\n## 二、关系型数据库核心概念\n\n表（Table）是数据库中数据存储的基本单位，由行和列组成。例如，用户表存储所有用户信息。\n\n行（Row / Record）是表中的一条记录。例如，用户表中某一个用户的完整信息就是一行。\n\n列（Column / Field）是表中的一个字段。例如，用户表中的姓名列。\n\n主键（Primary Key）是表中每行记录的唯一标识，不能为空且不能重复。例如，用户表中的用户ID。\n\n外键（Foreign Key）用于建立和加强两个表之间的链接，指向另一个表的主键。例如，订单表中的用户ID是外键，指向用户表的用户ID。\n\n索引（Index）用于加速查询的一种数据结构，类似于书的目录索引，可以大幅提高查询速度，但会降低写入性能并占用额外存储空间。\n\n## 三、SQL语言概述\n\nSQL（Structured Query Language）是结构化查询语言，是关系型数据库的标准语言。SQL分为四大类：\n\nDDL（数据定义语言）定义数据库结构，包括CREATE、ALTER、DROP。\n\nDML（数据操作语言）操作数据，包括INSERT、UPDATE、DELETE。\n\nDQL（数据查询语言）查询数据，包括SELECT。\n\nDCL（数据控制语言）控制权限，包括GRANT、REVOKE。\n\n## 四、常用数据库对比\n\nMySQL是开源流行数据库，社区活跃，广泛用于Web开发，性能优秀，支持多种存储引擎。\n\nPostgreSQL功能强大，支持复杂查询和JSON数据类型，开源且高度可扩展，适合复杂业务场景。\n\nSQL Server是微软企业级产品，与微软生态集成好，商业工具丰富，适合Windows平台常用。\n\nSQLite是轻量级无服务器数据库，零配置，嵌入式数据库，适合移动应用和小型项目。\n\n## 五、数据库设计基础\n\nER图（Entity-Relationship Diagram）是实体关系图，用于描述现实世界的概念模型。实体用矩形表示，属性用椭圆表示，关系用菱形表示。\n\n三大范式：第一范式（1NF）原子性，每个列都是不可再分的原子值。第二范式（2NF）消除部分依赖，在满足1NF的基础上，非主键列完全依赖整个主键。第三范式（3NF）消除传递依赖，在满足2NF的基础上，非主键列不传递依赖于主键。\n\n反范式化通过增加冗余数据、汇总数据来提高查询性能，是一种性能优化的权衡。常见场景包括需要频繁JOIN的查询和大数据量统计分析。反范式化的好处是减少JOIN，提高查询速度，代价是数据一致性维护成本增加。\n\n数据库设计是一门平衡的艺术，根据业务场景灵活运用范式与反范式化。',
      exercises: [
      {
        id: 'ex-9-1-1',
        question: '下列关于数据库基本概念的描述中，哪一项是正确的？',
        type: 'single',
        options: ['DBMS是存储数据的文件集合', '数据库是位于用户与操作系统之间的数据管理软件', 'RDBMS建立在关系模型基础上', 'SQL是专门用于MySQL的专用语言'],
        answer: 'RDBMS建立在关系模型基础上',
        points: 10,
        explanation: 'RDBMS（关系型数据库管理系统）是建立在关系模型基础上的数据库系统。数据库DB是存储数据的集合，DBMS是管理数据的软件，SQL是关系型数据库的标准语言而非MySQL专用。',
        tags: ['数据库概念', 'RDBMS'],
        difficulty: 1,
      },
      {
        id: 'ex-9-1-2',
        question: '以下哪项属于SQL中的DDL语句？',
        type: 'multiple',
        options: ['CREATE TABLE', 'INSERT INTO', 'ALTER TABLE', 'DROP INDEX', 'SELECT * FROM'],
        answer: ['CREATE TABLE', 'ALTER TABLE', 'DROP INDEX'],
        points: 15,
        explanation: 'DDL（数据定义语言）用于定义数据库结构，包括CREATE、ALTER、DROP等。INSERT属于DML，SELECT属于DQL。',
        tags: ['SQL分类', 'DDL'],
        difficulty: 1,
      },
      {
        id: 'ex-9-1-3',
        question: '关系型数据库中，主键的作用是什么？',
        type: 'multiple',
        options: ['唯一标识表中的每一行', '可以为空值', '不能重复', '用于连接其他表'],
        answer: ['唯一标识表中的每一行', '不能重复'],
        points: 15,
        explanation: '主键用于唯一标识表中的每一行记录，不能为空且不能重复。用于连接其他表是外键的作用而非主键。',
        tags: ['主键', '关系模型'],
        difficulty: 1,
      },
      {
        id: 'ex-9-1-4',
        question: 'SQLite的特点是轻量级、无服务器、零配置。',
        type: 'truefalse',
        answer: true,
        points: 10,
        explanation: 'SQLite是嵌入式数据库，不需要独立的服务器进程，零配置即可使用，适合移动应用和小型项目。',
        tags: ['数据库对比'],
        difficulty: 1,
      },
      {
        id: 'ex-9-1-5',
        question: '第二范式（2NF）要求消除什么？',
        type: 'single',
        options: ['列值不可再分', '非主键列完全依赖整个主键', '消除传递依赖', '增加冗余数据'],
        answer: '非主键列完全依赖整个主键',
        points: 10,
        explanation: '第二范式要求在满足1NF的基础上，非主键列完全依赖整个主键。列值不可再分是1NF，消除传递依赖是3NF。',
        tags: ['范式', '数据库设计'],
        difficulty: 2,
      },
      {
        id: 'ex-9-1-6',
        question: '关于反范式化的说法，错误的是哪一项？',
        type: 'single',
        options: ['通过增加冗余提高查询性能', '减少JOIN操作', '数据一致性维护成本降低', '是一种性能优化的权衡'],
        answer: '数据一致性维护成本降低',
        points: 10,
        explanation: '反范式化通过增加冗余数据来提高查询性能，减少JOIN操作，但数据一致性维护成本会增加而非降低。',
        tags: ['反范式化', '数据库设计'],
        difficulty: 2,
      },
      {
        id: 'ex-9-1-7',
        question: '以下哪些是关系型数据库？',
        type: 'multiple',
        options: ['MongoDB', 'PostgreSQL', 'Redis', 'SQL Server', 'SQLite'],
        answer: ['PostgreSQL', 'SQL Server', 'SQLite'],
        points: 15,
        explanation: 'PostgreSQL、SQL Server、SQLite都是关系型数据库。MongoDB是文档型NoSQL数据库，Redis是键值型NoSQL数据库。',
        tags: ['数据库对比', 'RDBMS'],
        difficulty: 1,
      },
      ],
    },
    {
      id: 'chapter-9-2',
      title: '数据查询基础',
      content: '## 一、SELECT语句基础\n\nSELECT语句用于从数据库中检索数据。最简单的SELECT语法结构为SELECT 列名 FROM 表名。\n\n列选择可以选择一个或多个列，使用逗号分隔。例如SELECT name, age FROM users。\n\n列别名AS可以为列指定别名。例如SELECT name AS 姓名, age AS 年龄 FROM users。\n\n去重DISTINCT去除重复的行。例如SELECT DISTINCT city FROM users。\n\n常量列可以在SELECT中添加固定值。例如SELECT name, \'VIP\' AS status FROM users。\n\n表达式计算可以对列进行运算。例如SELECT price * quantity AS total FROM orders。\n\n## 二、WHERE条件筛选\n\nWHERE子句用于筛选满足条件的行。\n\n比较运算符包括等于、不等于、大于、小于、大于等于、小于等于。\n\n逻辑运算符包括AND（同时满足）、OR（满足任一）、NOT（取反）。\n\n范围查询BETWEEN用于范围查询，包含两端值。例如WHERE age BETWEEN 18 AND 30。\n\n集合查询IN用于值列表查询。例如WHERE city IN (\'北京\', \'上海\', \'广州\')。\n\n模糊匹配LIKE使用%表示任意字符（包括空字符），_表示一个字符。例如WHERE name LIKE \'张%\'查找姓张的人。\n\nNULL判断使用IS NULL或IS NOT NULL。注意NULL值的特殊处理，任何与NULL比较的结果都是UNKNOWN，WHERE子句中UNKNOWN被视为FALSE。\n\n## 三、排序ORDER BY\n\nORDER BY用于对查询结果排序。\n\nASC升序（默认），DESC降序。\n\n多字段排序时先按第一个字段排序，第一个字段相同再按第二个。例如ORDER BY age DESC, name ASC。\n\n按列序号排序可以使用SELECT中的列序号。例如ORDER BY 2, 3表示按第2列排序。\n\n## 四、聚合函数\n\n聚合函数对一组行进行计算并返回单个值。\n\nCOUNT统计行数。COUNT(*)统计行数，COUNT(column)统计非NULL值的数量。\n\nSUM求和，只适用于数值列。\n\nAVG求平均值。\n\nMAX和MIN求最大值和最小值。\n\n注意聚合函数会忽略NULL值。\n\n## 五、分组GROUP BY\n\nGROUP BY将相同值的行分组到一起。\n\n规则是SELECT中非聚合列必须出现在GROUP BY中。例如SELECT city, COUNT(*) FROM users GROUP BY city。\n\nHAVING对分组后的结果进行筛选。HAVING与WHERE的区别是WHERE在分组前过滤行，HAVING在分组后过滤分组。例如SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 100。\n\n## 六、分页LIMIT\n\nLIMIT（MySQL）语法是LIMIT offset, row_count。例如LIMIT 10, 20表示从第11行开始取20行。\n\nTOP（SQL Server）表示TOP 10。\n\nROWNUM（Oracle）表示WHERE ROWNUM <= 10。\n\n## 七、SQL执行顺序\n\nSQL语句的执行顺序很重要，理解执行顺序有助于写出高效的查询。\n\n执行顺序是FROM、WHERE、GROUP BY、HAVING、SELECT、ORDER BY、LIMIT。\n\n这意味着WHERE中不能使用SELECT中定义的别名，因为WHERE在SELECT之前执行。但ORDER BY可以使用别名。',
      exercises: [
      {
        id: 'ex-9-2-1',
        question: 'SQL语句执行顺序中，哪一步最先执行？',
        type: 'single',
        options: ['SELECT', 'FROM', 'WHERE', 'ORDER BY'],
        answer: 'FROM',
        points: 10,
        explanation: 'SQL执行顺序为FROM、WHERE、GROUP BY、HAVING、SELECT、ORDER BY、LIMIT。FROM最先执行，确定数据来源表。',
        tags: ['执行顺序'],
        difficulty: 1,
      },
      {
        id: 'ex-9-2-2',
        question: '关于LIKE模糊匹配，以下说法正确的是？',
        type: 'multiple',
        options: ['%表示任意字符', '_表示一个字符', 'LIKE \'张_\' 可以匹配\'张三\'', 'LIKE \'%三%\' 可以匹配\'张三丰\''],
        answer: ['%表示任意字符', '_表示一个字符', 'LIKE \'%三%\' 可以匹配\'张三丰\''],
        points: 15,
        explanation: '%匹配任意字符（包括空字符），_匹配一个字符。\'张_\'只能匹配两个字符（如张三），\'%三%\'可以匹配包含三的任意字符串。',
        tags: ['LIKE', '模糊匹配'],
        difficulty: 1,
      },
      {
        id: 'ex-9-2-3',
        question: 'COUNT(*) 和 COUNT(column) 的区别是什么？',
        type: 'single',
        options: ['没有区别', 'COUNT(*)统计行数，COUNT(column)统计非NULL值', 'COUNT(column)统计行数', 'COUNT(*)统计非NULL值'],
        answer: 'COUNT(*)统计行数，COUNT(column)统计非NULL值',
        points: 10,
        explanation: 'COUNT(*)统计表的总行数（包括含NULL的行），COUNT(column)统计该列非NULL值的数量。',
        tags: ['聚合函数', 'COUNT'],
        difficulty: 1,
      },
      {
        id: 'ex-9-2-4',
        question: 'HAVING和WHERE的区别是什么？',
        type: 'multiple',
        options: ['WHERE在分组前过滤行', 'HAVING在分组后过滤分组', 'WHERE可以用聚合函数', 'HAVING必须与GROUP BY配合使用'],
        answer: ['WHERE在分组前过滤行', 'HAVING在分组后过滤分组', 'HAVING必须与GROUP BY配合使用'],
        points: 15,
        explanation: 'WHERE在GROUP BY之前执行，过滤原始行。HAVING在GROUP BY之后执行，过滤分组结果。WHERE不能使用聚合函数，HAVING可以。',
        tags: ['HAVING', 'WHERE', 'GROUP BY'],
        difficulty: 2,
      },
      {
        id: 'ex-9-2-5',
        question: 'NULL值与任何值比较的结果都是UNKNOWN，在WHERE中UNKNOWN被视为TRUE。',
        type: 'truefalse',
        answer: false,
        points: 10,
        explanation: 'NULL值与任何值比较结果都是UNKNOWN，但在WHERE子句中UNKNOWN被视为FALSE而非TRUE，这是常见易错点。',
        tags: ['NULL', 'WHERE'],
        difficulty: 2,
      },
      {
        id: 'ex-9-2-6',
        question: '以下SQL语句的语法中，哪一项是错误的？',
        type: 'single',
        options: ['SELECT name, age FROM users WHERE age > 18', 'SELECT city, COUNT(*) FROM users GROUP BY city', 'SELECT name AS n FROM users WHERE n LIKE \'张%\'', 'SELECT name, age FROM users ORDER BY 2 DESC'],
        answer: 'SELECT name AS n FROM users WHERE n LIKE \'张%\'',
        points: 10,
        explanation: 'WHERE在SELECT之前执行，WHERE中不能使用SELECT中定义的别名n。ORDER BY可以使用别名。',
        tags: ['执行顺序', '别名'],
        difficulty: 2,
      },
      {
        id: 'ex-9-2-7',
        question: '以下哪个SQL语句的写法是正确的？',
        type: 'single',
        options: ['WHERE age = NULL', 'WHERE age IS NULL', 'WHERE age = \'\'', 'WHERE NOT age IS NULL'],
        answer: 'WHERE age IS NULL',
        points: 10,
        explanation: '判断NULL值必须使用IS NULL或IS NOT NULL，不能使用等于或不等于比较NULL。',
        tags: ['NULL'],
        difficulty: 1,
      },
      {
        id: 'ex-9-2-8',
        question: 'ORDER BY可以使用SELECT中定义的列别名。',
        type: 'truefalse',
        answer: true,
        points: 10,
        explanation: 'ORDER BY在SELECT之后执行，可以使用SELECT中定义的别名。这是SQL执行顺序决定的。',
        tags: ['执行顺序', 'ORDER BY'],
        difficulty: 1,
      },
      ],
    },
    {
      id: 'chapter-9-3',
      title: '多表查询',
      content: '## 一、JOIN基础\n\n多表连接是SQL中最强大的功能之一，通过JOIN可以从多个表中组合数据。\n\nINNER JOIN（内连接）只返回两个表中匹配的行。语法示例SELECT ... FROM A INNER JOIN B ON A.id = B.id。\n\nLEFT JOIN（左连接）返回左表的所有行加上右表中匹配的行，右表不匹配的部分显示NULL。\n\nRIGHT JOIN（右连接）返回右表的所有行加上左表中匹配的行。\n\nFULL JOIN（全连接）返回两个表的所有行，不匹配的部分显示NULL。MySQL不直接支持FULL JOIN，需要使用UNION实现。\n\nCROSS JOIN（交叉连接）返回两个表的笛卡尔积，即每个左表行与每个右表行的组合。结果行数等于左表行数乘以右表行数。\n\n## 二、多表连接语法\n\nON子句指定连接条件，比在WHERE中写连接条件更清晰，推荐使用。\n\nUSING(column)当两个表中的连接列名相同时可以使用。例如SELECT ... FROM orders JOIN users USING(user_id)。\n\n## 三、自连接\n\n自连接是表与自身连接，常用于处理层级关系或比较同一个表中的记录。例如SELECT e.name, m.name AS manager FROM employees e JOIN employees m ON e.manager_id = m.id。\n\n## 四、组合查询\n\nUNION合并两个或多个SELECT语句的结果。要求列数相同、数据类型兼容。UNION会自动去重。\n\nUNION ALL与UNION类似，但不去重，执行速度更快。\n\n## 五、子查询\n\n子查询是嵌套在另一个查询中的查询。\n\n在WHERE中常用于IN、ANY、ALL、EXISTS等。例如SELECT ... FROM users WHERE id IN (SELECT user_id FROM orders)。\n\n在FROM中作为派生表，必须给子查询指定别名。例如SELECT ... FROM (SELECT ...) AS sub。\n\n在SELECT中作为标量子查询，返回单个值。\n\n## 六、相关子查询\n\n相关子查询引用外部查询的列，逐行执行。例如SELECT name, (SELECT COUNT(*) FROM orders WHERE user_id = users.id) FROM users。\n\n## 七、EXISTS与IN的区别\n\nEXISTS测试子查询是否返回行，返回TRUE或FALSE。大数据量时通常比IN更快。\n\nIN测试值是否在子查询结果中。当子查询结果较小时IN更快。\n\n一般经验法则是外查询表大、子查询表小用IN。外查询表小、子查询表大用EXISTS。',
      exercises: [
      {
        id: 'ex-9-3-1',
        question: 'INNER JOIN的特点是什么？',
        type: 'single',
        options: ['返回左表所有行', '返回右表所有行', '只返回匹配行', '返回两个表所有行'],
        answer: '只返回匹配行',
        points: 10,
        explanation: 'INNER JOIN只返回两个表中匹配的行。LEFT JOIN返回左表所有行，RIGHT JOIN返回右表所有行，FULL JOIN返回两表所有行。',
        tags: ['JOIN', 'INNER JOIN'],
        difficulty: 1,
      },
      {
        id: 'ex-9-3-2',
        question: 'LEFT JOIN返回左表所有行+右表匹配行，右表不匹配部分显示什么？',
        type: 'single',
        options: ['空字符串', '0', 'NULL', '报错'],
        answer: 'NULL',
        points: 10,
        explanation: 'LEFT JOIN中右表不匹配的部分显示NULL值。',
        tags: ['LEFT JOIN', 'NULL'],
        difficulty: 1,
      },
      {
        id: 'ex-9-3-3',
        question: '关于CROSS JOIN的说法，正确的是？',
        type: 'multiple',
        options: ['返回笛卡尔积', '结果行数=左表行数×右表行数', '需要指定ON条件', '常用于生成测试数据'],
        answer: ['返回笛卡尔积', '结果行数=左表行数×右表行数', '常用于生成测试数据'],
        points: 15,
        explanation: 'CROSS JOIN返回笛卡尔积，结果行数等于左表行数乘以右表行数，不需要ON条件，常用于生成测试数据或维度组合。',
        tags: ['CROSS JOIN', '笛卡尔积'],
        difficulty: 2,
      },
      {
        id: 'ex-9-3-4',
        question: 'UNION和UNION ALL的区别是什么？',
        type: 'multiple',
        options: ['UNION去重', 'UNION ALL不去重', 'UNION ALL更快', 'UNION ALL要求列数相同UNION不需要'],
        answer: ['UNION去重', 'UNION ALL不去重', 'UNION ALL更快'],
        points: 15,
        explanation: 'UNION自动去重，UNION ALL不去重且执行更快。两者都要求列数和数据类型兼容。',
        tags: ['UNION', '组合查询'],
        difficulty: 2,
      },
      {
        id: 'ex-9-3-5',
        question: '子查询在FROM子句中使用时，必须给子查询指定别名。',
        type: 'truefalse',
        answer: true,
        points: 10,
        explanation: 'FROM子句中的子查询作为派生表，必须指定别名，否则SQL解析器无法引用该子查询结果。',
        tags: ['子查询', '派生表'],
        difficulty: 1,
      },
      {
        id: 'ex-9-3-6',
        question: '相关子查询的特点是什么？',
        type: 'single',
        options: ['只执行一次', '引用外部查询的列，逐行执行', '比JOIN更快', '不能使用EXISTS'],
        answer: '引用外部查询的列，逐行执行',
        points: 10,
        explanation: '相关子查询引用外部查询的列，对外部查询的每一行执行一次，逐行执行，性能通常不如JOIN。',
        tags: ['相关子查询'],
        difficulty: 2,
      },
      {
        id: 'ex-9-3-7',
        question: '关于EXISTS和IN的区别，以下说法正确的是？',
        type: 'multiple',
        options: ['EXISTS测试存在性', 'IN测试成员关系', '大数据量时EXISTS通常更快', '外查询表大子查询表小用IN', '外查询表小子查询表大用EXISTS'],
        answer: ['EXISTS测试存在性', 'IN测试成员关系', '大数据量时EXISTS通常更快'],
        points: 15,
        explanation: 'EXISTS测试子查询是否返回行（测试存在性），IN测试值是否在子查询结果中（测试成员关系）。大数据量时EXISTS通常更快，因为找到匹配就停止扫描。',
        tags: ['EXISTS', 'IN'],
        difficulty: 3,
      },
      ],
    },
    {
      id: 'chapter-9-4',
      title: '高级SQL',
      content: '## 一、窗口函数\n\n窗口函数（Window Function）是SQL中非常强大的功能，可以在不改变查询结果行数的情况下，对一组相关行进行计算。\n\nROW_NUMBER()为结果集的每一行分配唯一的行号。\n\nRANK()排名函数，并列排名时排名相同，下一名跳过。例如1, 1, 3, 3, 5。\n\nDENSE_RANK()密集排名，并列排名相同，下一名连续。例如1, 1, 2, 2, 3。\n\nNTILE(n)将结果集分成n个大致相等的组，为每个组分配一个编号。\n\n## 二、聚合窗口函数\n\n聚合窗口函数结合了聚合函数和窗口函数的功能。\n\nSUM() OVER()在窗口内计算累计和。例如SUM(sales) OVER (ORDER BY month)。\n\nAVG() OVER()计算移动平均。\n\n## 三、PARTITION BY和ORDER BY\n\nPARTITION BY将数据分区，在每个分区内独立计算。例如按部门分区，每个部门内排名。\n\nORDER BY定义窗口内的排序规则。\n\n完整语法示例RANK() OVER (PARTITION BY department ORDER BY salary DESC)。\n\n## 四、时间函数\n\n时间函数处理日期和时间。不同数据库时间函数语法不同。\n\nDATE_FORMAT（MySQL）或TO_CHAR（Oracle）格式化日期。\n\nDATE_ADD或DATE_SUB（MySQL）或DATEADD（SQL Server）日期加减。\n\nDATEDIFF计算两个日期之间的天数差。\n\nDATE_TRUNC（PostgreSQL）截断日期到指定精度（年、月、日等）。\n\n## 五、字符串函数\n\n字符串函数处理文本数据。\n\nCONCAT连接字符串。\n\nSUBSTRING截取子串。\n\nREPLACE替换子串。\n\nUPPER和LOWER大小写转换。\n\nLENGTH字符串长度。\n\nLIKE与正则表达式模式匹配。\n\n## 六、条件表达式\n\nCASE WHEN THEN ELSE END类似编程语言中的if-else语句。例如CASE WHEN age < 18 THEN \'未成年\' WHEN age < 60 THEN \'成年\' ELSE \'老年\' END。\n\nCOALESCE返回参数列表中第一个非NULL值。例如COALESCE(phone, email, \'无联系方式\')。\n\nNULLIF如果两个值相等返回NULL，否则返回第一个值。常用于避免除零错误。\n\n## 七、CTE公用表表达式\n\nWITH语法定义临时命名结果集，在后续查询中引用。提高可读性和可维护性。\n\n示例WITH high_sales AS (SELECT * FROM orders WHERE amount > 1000) SELECT * FROM high_sales JOIN users ON high_sales.user_id = users.id。\n\n递归CTE使用WITH RECURSIVE语法。用于处理层级数据，如组织结构、树形结构。递归CTE由基础查询和递归查询两部分组成。',
      exercises: [
      {
        id: 'ex-9-4-1',
        question: 'RANK()和DENSE_RANK()的区别是什么？',
        type: 'single',
        options: ['RANK()并列时连续排名', 'DENSE_RANK()并列时连续排名', '没有区别', 'RANK()分配唯一行号'],
        answer: 'DENSE_RANK()并列时连续排名',
        points: 10,
        explanation: 'RANK()并列时排名相同下一名跳过（如1,1,3），DENSE_RANK()并列排名相同下一名连续（如1,1,2）。ROW_NUMBER()分配唯一行号。',
        tags: ['窗口函数', 'RANK'],
        difficulty: 1,
      },
      {
        id: 'ex-9-4-2',
        question: 'PARTITION BY的作用是什么？',
        type: 'single',
        options: ['对整个结果集排序', '将数据分区，每个分区内独立计算', '过滤数据', '连接多个表'],
        answer: '将数据分区，每个分区内独立计算',
        points: 10,
        explanation: 'PARTITION BY将数据分成多个分区，窗口函数在每个分区内独立计算。例如按部门分区，每个部门内排名。',
        tags: ['窗口函数', 'PARTITION BY'],
        difficulty: 2,
      },
      {
        id: 'ex-9-4-3',
        question: 'COALESCE函数的作用是什么？',
        type: 'single',
        options: ['返回第一个非NULL值', '两值相等返回NULL', '连接字符串', '格式化日期'],
        answer: '返回第一个非NULL值',
        points: 10,
        explanation: 'COALESCE返回参数列表中第一个非NULL值。两值相等返回NULL是NULLIF。',
        tags: ['条件表达式', 'COALESCE'],
        difficulty: 1,
      },
      {
        id: 'ex-9-4-4',
        question: '以下哪些是窗口函数？',
        type: 'multiple',
        options: ['ROW_NUMBER()', 'SUM() OVER()', 'COUNT(*)', 'RANK()', 'AVG()'],
        answer: ['ROW_NUMBER()', 'SUM() OVER()', 'RANK()'],
        points: 15,
        explanation: 'ROW_NUMBER()、RANK()、SUM() OVER()都是窗口函数。COUNT(*)和AVG()是普通聚合函数。',
        tags: ['窗口函数'],
        difficulty: 2,
      },
      {
        id: 'ex-9-4-5',
        question: 'CTE公用表表达式的优点是什么？',
        type: 'multiple',
        options: ['提高可读性', '可多次引用', '支持递归', '比子查询性能一定更快'],
        answer: ['提高可读性', '可多次引用', '支持递归'],
        points: 15,
        explanation: 'CTE通过WITH语法提高代码可读性，可在同一查询中多次引用，支持递归CTE处理层级数据。CTE性能不一定比子查询更快。',
        tags: ['CTE', 'WITH'],
        difficulty: 2,
      },
      {
        id: 'ex-9-4-6',
        question: 'NULLIF函数常用于避免除零错误。',
        type: 'truefalse',
        answer: true,
        points: 10,
        explanation: 'NULLIF(value, 0)当value等于0时返回NULL，从而避免除零错误导致的运算错误。',
        tags: ['条件表达式', 'NULLIF'],
        difficulty: 1,
      },
      {
        id: 'ex-9-4-7',
        question: '以下关于CASE WHEN的用法，哪项是错误的？',
        type: 'single',
        options: ['CASE WHEN age < 18 THEN \'未成年\' END', 'CASE WHEN age < 18 THEN \'未成年\' WHEN age < 60 THEN \'成年\' ELSE \'老年\' END', 'CASE age WHEN 18 THEN \'成年\' END', 'CASE WHEN age < 18 THEN \'未成年\' WHEN age < 60 THEN \'成年\' END'],
        answer: 'CASE age WHEN 18 THEN \'成年\' END',
        points: 10,
        explanation: 'CASE有两种语法，搜索CASE（CASE WHEN条件THEN值）和简单CASE（CASE表达式WHEN值THEN值）。简单CASE是等值比较，不能比较范围。',
        tags: ['条件表达式', 'CASE'],
        difficulty: 2,
      },
      {
        id: 'ex-9-4-8',
        question: 'NTILE(n)函数的作用是什么？',
        type: 'single',
        options: ['为每行分配唯一行号', '排名并列时跳跃', '将结果集分成n个大致相等的组', '计算累计和'],
        answer: '将结果集分成n个大致相等的组',
        points: 10,
        explanation: 'NTILE(n)将结果集分成n个大致相等的组，为每个组分配一个编号。常用于分桶分析。',
        tags: ['窗口函数', 'NTILE'],
        difficulty: 2,
      },
      ],
    },
    {
      id: 'chapter-9-5',
      title: 'SQL优化与实战',
      content: '## 一、索引原理\n\n索引是加速查询的关键数据结构，类似书的目录。\n\nB-Tree索引结构是最常用的索引结构，自平衡树，支持范围查询和排序操作。\n\n聚簇索引的索引叶子节点存储实际数据行，一个表只能有一个聚簇索引。InnoDB的主键索引就是聚簇索引。\n\n非聚簇索引的索引叶子节点存储主键值，查询时需要回表查询实际数据。\n\n覆盖索引指查询所需字段都在索引中，无需回表查询，查询性能大幅提升。\n\n## 二、执行计划EXPLAIN\n\nEXPLAIN用于分析SQL语句的执行计划，帮助优化查询。\n\n关键列解读：\n\ntype访问类型从好到差依次为system > const > eq_ref > ref > range > index > ALL。ALL表示全表扫描，需要优化。\n\nrows预估行数是MySQL认为需要检查的行数，越小越好。\n\nExtra信息中Using where表示使用WHERE过滤，Using index表示使用覆盖索引，Using filesort表示需要额外排序操作，需要优化。\n\n## 三、查询优化技巧\n\n避免SELECT *只查询需要的列，减少数据传输和内存使用。\n\n合理创建索引为WHERE、JOIN、ORDER BY涉及的列创建索引，但不要过度索引。\n\n避免在索引列上使用函数会导致索引失效。例如WHERE YEAR(date) = 2023可以改为WHERE date BETWEEN \'2023-01-01\' AND \'2023-12-31\'。\n\n避免NOT IN可以用LEFT JOIN或NOT EXISTS替代。\n\n大表LIMIT分页优化LIMIT 1000000, 10需要扫描100万行，可以用记录上次查询最后ID方式优化。\n\nJOIN小表驱动大表小表作为驱动表减少循环次数。\n\n## 四、事务与并发\n\nACID特性：\n\n原子性（Atomicity）事务中所有操作要么全部成功，要么全部失败。\n\n一致性（Consistency）事务必须使数据库从一个一致性状态变到另一个一致性状态。\n\n隔离性（Isolation）多个事务并发执行时，每个事务都感觉不到其他事务的存在。\n\n持久性（Durability）事务一旦提交，其结果就是永久性的。\n\n隔离级别：\n\n读未提交（Read Uncommitted）最低级别，可能出现脏读。\n\n读已提交（Read Committed）解决脏读。\n\n可重复读（Repeatable Read）MySQL默认级别，解决不可重复读。\n\n串行化（Serializable）最高级别，解决幻读。\n\n锁机制包括行锁、表锁、间隙锁。死锁是两个或多个事务相互等待对方释放锁的情况，解决方法包括超时回滚和死锁检测。\n\n## 五、实战案例\n\n电商数据查询实战：\n\n用户分群分析按消费金额、消费频率、最近消费时间（RFM模型）对用户进行分群。\n\n商品销售排名使用窗口函数计算每个分类下商品销售额排名。\n\n复购率计算统计购买两次以上用户占比。\n\nTOP N查询查询每个分类下销量TOP 3的商品。',
      exercises: [
      {
        id: 'ex-9-5-1',
        question: '关于聚簇索引和非聚簇索引的区别，哪一项是正确的？',
        type: 'single',
        options: ['聚簇索引叶子节点存储实际数据行', '非聚簇索引叶子节点存储实际数据行', '一个表可以有多个聚簇索引', '聚簇索引查询时不需要回表'],
        answer: '聚簇索引叶子节点存储实际数据行',
        points: 10,
        explanation: '聚簇索引叶子节点存储实际数据行，一个表只能有一个聚簇索引。非聚簇索引叶子节点存储主键值，查询时需要回表。',
        tags: ['索引原理', '聚簇索引'],
        difficulty: 2,
      },
      {
        id: 'ex-9-5-2',
        question: 'EXPLAIN中type列从好到差的顺序，以下哪个是正确的？',
        type: 'single',
        options: ['ALL > index > range > ref', 'const > eq_ref > ref > ALL', 'ref > range > index > ALL', 'system > const > range > ref'],
        answer: 'const > eq_ref > ref > ALL',
        points: 10,
        explanation: 'type访问类型从好到差依次为system > const > eq_ref > ref > range > index > ALL。ALL表示全表扫描，需要优化。',
        tags: ['执行计划', 'EXPLAIN'],
        difficulty: 2,
      },
      {
        id: 'ex-9-5-3',
        question: '以下哪些查询优化技巧是正确的？',
        type: 'multiple',
        options: ['避免SELECT *', '在索引列上使用函数加速查询', '避免NOT IN', '过度索引提高查询速度', 'JOIN时小表驱动大表'],
        answer: ['避免SELECT *', '避免NOT IN', 'JOIN时小表驱动大表'],
        points: 15,
        explanation: '避免SELECT *减少数据传输，避免NOT IN可用LEFT JOIN或NOT EXISTS替代，JOIN小表驱动大表减少循环次数。在索引列上使用函数会导致索引失效，过度索引降低写入性能。',
        tags: ['查询优化'],
        difficulty: 2,
      },
      {
        id: 'ex-9-5-4',
        question: 'ACID特性中，原子性指的是什么？',
        type: 'single',
        options: ['事务中所有操作要么全部成功要么全部失败', '事务必须使数据库状态一致', '多个事务相互隔离', '事务结果永久保存'],
        answer: '事务中所有操作要么全部成功要么全部失败',
        points: 10,
        explanation: '原子性指事务中所有操作要么全部成功，要么全部失败。一致性指使数据库状态一致，隔离性指多个事务相互隔离，持久性指结果永久保存。',
        tags: ['事务', 'ACID'],
        difficulty: 1,
      },
      {
        id: 'ex-9-5-5',
        question: 'Using filesort在EXPLAIN的Extra中出现表示什么？',
        type: 'single',
        options: ['使用文件排序优化了排序', '需要额外排序操作，需要优化', '使用索引排序', '使用WHERE过滤'],
        answer: '需要额外排序操作，需要优化',
        points: 10,
        explanation: 'Using filesort表示MySQL需要额外的排序操作来完成查询，表示ORDER BY无法使用索引完成排序，需要优化。',
        tags: ['执行计划', 'EXPLAIN'],
        difficulty: 2,
      },
      {
        id: 'ex-9-5-6',
        question: 'MySQL的默认事务隔离级别是什么？',
        type: 'single',
        options: ['读未提交', '读已提交', '可重复读', '串行化'],
        answer: '可重复读',
        points: 10,
        explanation: 'MySQL的InnoDB存储引擎默认事务隔离级别是可重复读（Repeatable Read），解决不可重复读问题。',
        tags: ['事务', '隔离级别'],
        difficulty: 1,
      },
      {
        id: 'ex-9-5-7',
        question: '覆盖索引的特点是什么？',
        type: 'multiple',
        options: ['查询字段都在索引中', '无需回表查询', '大幅提升查询性能', '一个表只能有一个覆盖索引'],
        answer: ['查询字段都在索引中', '无需回表查询', '大幅提升查询性能'],
        points: 15,
        explanation: '覆盖索引指查询所需字段都在索引中，无需回表查询实际数据行，可以大幅提升查询性能。一个表可以有多个覆盖索引。',
        tags: ['索引', '覆盖索引'],
        difficulty: 2,
      },
      {
        id: 'ex-9-5-8',
        question: '在索引列上使用函数（如WHERE YEAR(date) = 2023）会导致索引失效。',
        type: 'truefalse',
        answer: true,
        points: 10,
        explanation: '在索引列上使用函数会导致索引失效，因为函数改变了列的值，无法使用B-Tree索引快速定位。应改写为范围查询。',
        tags: ['查询优化', '索引失效'],
        difficulty: 2,
      },
      ],
    },
    ]
  },
  {
    id: 'course-10',
    title: '数据思维与行业应用',
    description: '培养数据驱动的问题解决思维，了解数据分析在各行业的实际应用场景。',
    category: '思维课程',
    difficulty: 3,
    thumbnail: 'https://picsum.photos/seed/thinking/400/400',
    chapters: [
    {
      id: 'chapter-10-1',
      title: '数据思维培养',
      content: '## 一、数据思维定义与核心要素\n\n数据思维是一种基于数据进行思考、分析、决策的思维方式。核心要素包括：\n\n量化思维用数字说话，将模糊的问题转化为可度量的指标。\n\n证据思维决策基于数据证据而非主观判断。\n\n对比思维通过横向纵向对比发现问题和机会。\n\n细分思维将总体数据拆解细分，发现内部差异和规律。\n\n实验思维通过A/B测试等方式验证假设。\n\n## 二、从直觉决策到数据决策的转变\n\n直觉决策的常见问题：\n\n可用性偏差依赖容易想到的例子而非全面数据。\n\n确认偏差寻找支持已有观点的证据。\n\n数据决策流程提出问题、收集数据、分析验证、决策行动、效果评估。\n\n## 三、数据敏感度培养\n\n对数字和量级的直觉理解常见业务数据量级，能快速判断数字是否合理。\n\n练习估算使用费米估算法，将大问题拆解为小问题，通过合理假设估算答案数量级。\n\n培养这合理吗的质疑习惯对数据保持怀疑精神，主动追问数据来源、口径、含义。\n\n案例估算市场规模从人口基数、渗透率、客单价等维度估算市场规模。\n\n## 四、常见数据思维误区\n\n幸存者偏差只看成功案例忽略失败案例。例如只分析成功企业的共同点而忽略失败企业。\n\n因果误判相关不等于因果。两个变量相关不代表一个导致另一个。\n\n过度拟合将偶然规律当作普遍规律。\n\n样本量不足小样本得出的结论不可靠。\n\n选择偏差样本不具代表性。\n\n## 五、数据讲故事\n\nSCQA框架是情境、冲突、问题、答案。\n\n金字塔原理包括结论先行、以上统下、归类分组、逻辑递进。\n\n故事元素包括背景、问题、发现、建议、行动。\n\n## 六、数据驱动文化建立\n\n高层重视领导层以身作则，将数据决策作为核心管理方式。\n\n数据透明数据对团队公开透明，让每个人都能访问数据。\n\n工具支持提供易用的数据分析工具和平台。\n\n激励机制奖励基于数据做出的好决策。\n\n容忍失败鼓励从数据中学习，容忍合理失败。',
      exercises: [
      {
        id: 'ex-10-1-1',
        question: '数据思维的核心要素不包括以下哪一项？',
        type: 'single',
        options: ['量化思维', '直觉思维', '证据思维', '对比思维'],
        answer: '直觉思维',
        points: 10,
        explanation: '数据思维核心要素包括量化思维、证据思维、对比思维、细分思维和实验思维。直觉思维是数据思维要克服的思维方式。',
        tags: ['数据思维', '核心要素'],
        difficulty: 1,
      },
      {
        id: 'ex-10-1-2',
        question: '以下哪些是数据思维常见误区？',
        type: 'multiple',
        options: ['幸存者偏差', '因果误判', '过度拟合', '样本量不足', '选择偏差'],
        answer: ['幸存者偏差', '因果误判', '过度拟合', '样本量不足', '选择偏差'],
        points: 15,
        explanation: '幸存者偏差、因果误判、过度拟合、样本量不足、选择偏差都是常见的数据思维误区。',
        tags: ['数据思维误区'],
        difficulty: 1,
      },
      {
        id: 'ex-10-1-3',
        question: 'SCQA框架中Q代表什么？',
        type: 'single',
        options: ['Quality质量', 'Question问题', 'Quantity数量', 'Query查询'],
        answer: 'Question问题',
        points: 10,
        explanation: 'SCQA框架包括情境、冲突、问题、答案。Q代表Question问题。',
        tags: ['数据讲故事', 'SCQA'],
        difficulty: 1,
      },
      {
        id: 'ex-10-1-4',
        question: '相关即因果，两个变量相关代表一个导致另一个。',
        type: 'truefalse',
        answer: false,
        points: 10,
        explanation: '相关不等于因果。两个变量相关不代表一个导致另一个，可能存在共同原因或纯属巧合。这是常见的数据思维误区。',
        tags: ['因果误判', '相关不等于因果'],
        difficulty: 1,
      },
      {
        id: 'ex-10-1-5',
        question: '金字塔原理的核心原则是什么？',
        type: 'multiple',
        options: ['结论先行', '以上统下', '归类分组', '逻辑递进'],
        answer: ['结论先行', '以上统下', '归类分组', '逻辑递进'],
        points: 15,
        explanation: '金字塔原理的四大核心原则是结论先行、以上统下、归类分组、逻辑递进。先讲结论再提供支撑论据，分组归类呈现。',
        tags: ['金字塔原理', '数据讲故事'],
        difficulty: 1,
      },
      {
        id: 'ex-10-1-6',
        question: '数据决策流程的第一步是什么？',
        type: 'single',
        options: ['收集数据', '提出问题', '分析验证', '决策行动'],
        answer: '提出问题',
        points: 10,
        explanation: '数据决策流程是提出问题、收集数据、分析验证、决策行动、效果评估。首先需要明确问题再收集数据。',
        tags: ['数据决策流程'],
        difficulty: 2,
      },
      {
        id: 'ex-10-1-7',
        question: '幸存者偏差指的是什么？',
        type: 'single',
        options: ['只看成功忽略失败', '将相关当作因果', '小样本得出结论', '样本不具代表性'],
        answer: '只看成功忽略失败',
        points: 10,
        explanation: '幸存者偏差指只看成功案例忽略失败案例。例如只分析成功企业的共同点而忽略失败企业。',
        tags: ['数据思维误区', '幸存者偏差'],
        difficulty: 1,
      },
      ],
    },
    {
      id: 'chapter-10-2',
      title: '分析框架与方法论',
      content: '## 一、5W1H分析法\n\n5W1H是全面分析问题的经典框架：\n\nWho谁谁是目标用户或受众。\n\nWhat什么发生了什么事情，问题是什么。\n\nWhen何时什么时候发生的，趋势如何。\n\nWhere何地在哪里发生的，地域分布如何。\n\nWhy为什么为什么会发生，根本原因是什么。\n\nHow如何做如何解决，如何改进。\n\n5W1H适用于问题定义、现状分析、方案设计等场景。\n\n## 二、MECE原则\n\nMECE（Mutually Exclusive Collectively Exhaustive）即相互独立，完全穷尽。\n\n树状分解将问题从上到下分解，确保每个分支相互独立，所有分支合并覆盖全部。\n\nMECE原则保证分析全面且不重叠。\n\n## 三、逻辑树分析法\n\n逻辑树将问题层层分解，帮助理清思路。\n\n议题树从问题出发分解为子问题。\n\n假设树从假设出发寻找证据支持。\n\n是否树决策树用Yes或No分支，逐步缩小问题范围。\n\n## 四、假设驱动分析法\n\n假设驱动从提出假设开始：\n\n提出假设、设计验证方案、收集数据验证、得出结论。\n\n适用于需要快速决策的场景，通过提出方向性假设减少分析范围。\n\n## 五、第一性原理思维\n\n第一性原理回归事物最基本的条件，将其分解到要素进行解构分析。\n\n与类比思维对比例子思维只比较表面相似性，第一性原理从根本原理出发。\n\n## 六、增长黑客模型AARRR\n\nAARRR模型描述用户生命周期：\n\nAcquisition获客用户从哪里来。\n\nActivation激活用户首次使用体验如何。\n\nRetention留存用户是否持续使用。\n\nRevenue变现用户如何付费。\n\nReferral推荐用户是否推荐给他人。\n\nAARRR模型帮助理解用户转化漏斗，识别转化瓶颈。',
      exercises: [
      {
        id: 'ex-10-2-1',
        question: '5W1H分析法中不包括以下哪一项？',
        type: 'single',
        options: ['Who谁', 'What什么', 'When何时', 'Why为什么', 'How如何做', 'Which哪个'],
        answer: 'Which哪个',
        points: 10,
        explanation: '5W1H包括Who谁、What什么、When何时、Where何地、Why为什么、How如何做。不包括Which哪个。',
        tags: ['5W1H', '分析框架'],
        difficulty: 1,
      },
      {
        id: 'ex-10-2-2',
        question: 'MECE原则的含义是什么？',
        type: 'single',
        options: ['相互独立完全穷尽', '最大熵分类独立', '多元素组合实验', '最小化误差交叉验证'],
        answer: '相互独立完全穷尽',
        points: 10,
        explanation: 'MECE（Mutually Exclusive Collectively Exhaustive）即相互独立，完全穷尽。保证分析全面且不重叠。',
        tags: ['MECE原则'],
        difficulty: 1,
      },
      {
        id: 'ex-10-2-3',
        question: '逻辑树分析法包括哪些类型？',
        type: 'multiple',
        options: ['议题树', '假设树', '是否树', '决策树'],
        answer: ['议题树', '假设树', '是否树'],
        points: 15,
        explanation: '逻辑树分析法包括议题树（从问题出发分解）、假设树（从假设出发寻找证据）、是否树（决策树用Yes或No分支）。',
        tags: ['逻辑树'],
        difficulty: 2,
      },
      {
        id: 'ex-10-2-4',
        question: '假设驱动分析法的流程是什么？',
        type: 'single',
        options: ['提出假设→设计验证方案→收集数据验证→得出结论', '收集数据→提出假设→验证→结论', '得出结论→提出假设→验证', '设计方案→提出假设→收集数据→结论'],
        answer: '提出假设→设计验证方案→收集数据验证→得出结论',
        points: 10,
        explanation: '假设驱动从提出假设开始，流程是提出假设、设计验证方案、收集数据验证、得出结论。适用于快速决策场景。',
        tags: ['假设驱动'],
        difficulty: 1,
      },
      {
        id: 'ex-10-2-5',
        question: '第一性原理思维与类比思维的区别是什么？',
        type: 'multiple',
        options: ['第一性原理从根本原理出发', '类比思维只比较表面相似性', '第一性原理分解到基本条件', '类比思维更深入本质'],
        answer: ['第一性原理从根本原理出发', '类比思维只比较表面相似性', '第一性原理分解到基本条件'],
        points: 15,
        explanation: '第一性原理回归事物最基本的条件，分解到要素进行解构分析。类比思维只比较表面相似性。第一性原理更深入本质。',
        tags: ['第一性原理'],
        difficulty: 2,
      },
      {
        id: 'ex-10-2-6',
        question: 'AARRR模型中第二个A代表什么？',
        type: 'single',
        options: ['Acquisition获客', 'Activation激活', 'Action行动', 'Analysis分析'],
        answer: 'Activation激活',
        points: 10,
        explanation: 'AARRR模型包括Acquisition获客、Activation激活、Retention留存、Revenue变现、Referral推荐。第二个A是Activation激活。',
        tags: ['AARRR模型', '增长黑客'],
        difficulty: 1,
      },
      {
        id: 'ex-10-2-7',
        question: 'AARRR模型帮助理解什么？',
        type: 'multiple',
        options: ['用户转化漏斗', '识别转化瓶颈', '优化生产流程', '优化用户生命周期'],
        answer: ['用户转化漏斗', '识别转化瓶颈', '优化用户生命周期'],
        points: 15,
        explanation: 'AARRR模型描述用户生命周期五个阶段，帮助理解用户转化漏斗，识别转化瓶颈。不直接用于生产流程优化。',
        tags: ['AARRR模型'],
        difficulty: 2,
      },
      ],
    },
    {
      id: 'chapter-10-3',
      title: '行业数据分析应用',
      content: '## 一、电商行业\n\n核心指标包括GMV（商品交易总额）即总销售额，订单量即总订单数量，客单价即平均每单金额，转化率即访问到下单的比例，复购率即重复购买用户占比，获客成本（CAC）即获取一个新客户的成本。\n\n典型场景包括用户增长分析、营销活动效果评估、商品结构优化、库存优化、推荐算法效果。\n\n案例电商平台季度复盘使用AARRR模型分析各阶段转化情况，识别瓶颈环节并提出改进建议。\n\n## 二、金融行业\n\n风控模型包括信用评分卡，根据用户特征预测违约概率。违约概率（PD）即用户违约的概率。\n\n反欺诈识别使用机器学习识别异常交易行为。\n\n客户分群根据资产、行为、风险等级分群。\n\n资金预测预测资金流入流出。\n\n典型指标包括不良率、拨备覆盖率。\n\n案例信用卡申请风控根据申请人资料预测违约风险，决定是否通过申请及授信额度。\n\n## 三、零售行业\n\n坪效和人效分析包括每平方米销售额、每人销售额。\n\n商品ABC分类按销售额将商品分为A（高价值）、B（中价值）、C（低价值）三类。\n\n库存周转率衡量库存周转速度。\n\n定价策略优化根据竞品、需求弹性优化定价。\n\n选址分析根据人流、竞争、租金评估门店选址。\n\n促销效果评估评估促销活动投资回报。\n\n## 四、医疗行业\n\n疾病预测模型根据患者历史数据预测疾病风险。\n\n患者分群根据病情、风险、费用分群。\n\n资源优化优化床位、医生、设备资源配置。\n\n医疗质量指标包括手术成功率、患者满意度、平均住院天数。\n\n## 五、教育行业\n\n学习效果评估评估学习内容、学习方式效果。\n\n个性化推荐根据学习行为推荐学习内容。\n\n用户留存分析分析学习路径，提升学习粘性。',
      exercises: [
      {
        id: 'ex-10-3-1',
        question: '电商行业核心指标不包括以下哪一项？',
        type: 'single',
        options: ['GMV', '订单量', '客单价', '转化率', '不良率'],
        answer: '不良率',
        points: 10,
        explanation: '电商行业核心指标包括GMV、订单量、客单价、转化率、复购率、获客成本。不良率是金融行业指标。',
        tags: ['电商行业', '核心指标'],
        difficulty: 1,
      },
      {
        id: 'ex-10-3-2',
        question: '金融行业典型指标包括哪些？',
        type: 'multiple',
        options: ['GMV', '不良率', '拨备覆盖率', '转化率'],
        answer: ['不良率', '拨备覆盖率'],
        points: 15,
        explanation: '金融行业典型指标包括不良率、拨备覆盖率。GMV和转化率是电商行业指标。',
        tags: ['金融行业'],
        difficulty: 1,
      },
      {
        id: 'ex-10-3-3',
        question: '零售行业商品ABC分类是按什么维度分类的？',
        type: 'single',
        options: ['按商品名称首字母', '按销售额', '按商品类别', '按商品产地'],
        answer: '按销售额',
        points: 10,
        explanation: '零售行业商品ABC分类是按销售额（或利润）将商品分为A（高价值）、B（中价值）、C（低价值）三类。',
        tags: ['零售行业', 'ABC分类'],
        difficulty: 1,
      },
      {
        id: 'ex-10-3-4',
        question: '医疗行业数据分析应用场景包括哪些？',
        type: 'multiple',
        options: ['疾病预测模型', '患者分群', '资源优化', '医疗质量指标', '坪效分析'],
        answer: ['疾病预测模型', '患者分群', '资源优化', '医疗质量指标'],
        points: 15,
        explanation: '医疗行业数据分析应用场景包括疾病预测模型、患者分群、资源优化、医疗质量指标。坪效分析是零售行业指标。',
        tags: ['医疗行业'],
        difficulty: 2,
      },
      {
        id: 'ex-10-3-5',
        question: '坪效指的是什么？',
        type: 'single',
        options: ['每人销售额', '每平方米销售额', '每个商品销售额', '每平方米利润'],
        answer: '每平方米销售额',
        points: 10,
        explanation: '坪效指每平方米销售额，衡量空间利用效率。人效指每人销售额。',
        tags: ['零售行业', '坪效'],
        difficulty: 1,
      },
      {
        id: 'ex-10-3-6',
        question: '教育行业数据分析应用场景包括哪些？',
        type: 'multiple',
        options: ['学习效果评估', '个性化推荐', '用户留存分析', '反欺诈识别'],
        answer: ['学习效果评估', '个性化推荐', '用户留存分析'],
        points: 15,
        explanation: '教育行业数据分析应用场景包括学习效果评估、个性化推荐、用户留存分析。反欺诈识别是金融行业场景。',
        tags: ['教育行业'],
        difficulty: 1,
      },
      {
        id: 'ex-10-3-7',
        question: 'GMV指的是商品交易总额。',
        type: 'truefalse',
        answer: true,
        points: 10,
        explanation: 'GMV（Gross Merchandise Volume）即商品交易总额，是电商行业核心指标之一，表示一段时间内的总销售额。',
        tags: ['电商行业', 'GMV'],
        difficulty: 1,
      },
      {
        id: 'ex-10-3-8',
        question: '库存周转率的含义是什么？',
        type: 'single',
        options: ['库存总量', '库存周转速度', '库存总价值', '库存缺货率'],
        answer: '库存周转速度',
        points: 10,
        explanation: '库存周转率衡量库存周转速度，通常用销售成本除以平均库存。周转率越高表示库存越活跃。',
        tags: ['零售行业', '库存周转率'],
        difficulty: 2,
      },
      ],
    },
    {
      id: 'chapter-10-4',
      title: '数据分析职业发展',
      content: '## 一、数据分析师能力模型\n\n数据分析师需要具备三大能力：\n\n技术能力包括SQL（数据提取基础）、Python（数据处理与建模）、统计学（AB测试与假设检验）、BI工具（Tableau或Power BI）。\n\n业务能力包括行业知识、商业敏感度、问题定义能力。\n\n软技能包括沟通能力、汇报能力、项目管理能力。\n\n## 二、技术能力路径\n\nSQL必须掌握是数据提取的基础，是数据分析师的入门技能。\n\nPython进阶用于复杂数据处理、统计分析和建模。\n\n统计学基础理解AB测试、假设检验等统计方法。\n\nBI可视化使用Tableau或Power BI制作可视化仪表板。\n\n机器学习（高级）了解机器学习模型原理与应用。\n\n## 三、业务能力培养\n\n深入理解业务流程了解业务运作方式，理解业务指标背后的业务逻辑。\n\n参与业务会议与业务方沟通，理解业务需求。\n\n阅读行业报告了解行业趋势和竞争态势。\n\n与业务方建立信任通过高质量分析建立业务方信任。\n\n学习商业思维理解利润、成本结构，从商业价值角度思考分析。\n\n## 四、职业发展路径\n\n初级分析师（1-2年）执行数据提取、报表制作等基础任务。\n\n高级分析师（3-5年）独立负责项目，提出业务洞察。\n\n数据专家是技术专家方向，深入特定技术领域。\n\n数据团队经理是管理方向，带领团队。\n\n产品或运营或业务方向跨界从数据分析跨界到产品、运营、业务方向。\n\n## 五、面试准备\n\n简历量化成果，用数据说明贡献，如提升转化率5%，增加GMV 200万。\n\n技能测试包括SQL笔试、Python题、案例分析。\n\n案例面试考察思维能力，常见框架包括MECE、假设驱动等。\n\n## 六、学习资源推荐\n\n书籍推荐深入浅出数据分析、统计学习方法。\n\n网站推荐Kaggle竞赛、牛客网刷题。\n\n课程推荐Coursera、学校MOOC。\n\n持续学习是数据分析师职业发展的关键。',
      exercises: [
      {
        id: 'ex-10-4-1',
        question: '数据分析师能力模型不包括以下哪一项？',
        type: 'single',
        options: ['技术能力', '业务能力', '软技能', '编程能力'],
        answer: '编程能力',
        points: 10,
        explanation: '数据分析师能力模型包括技术能力、业务能力、软技能。编程能力是技术能力的一部分，不是独立的大类。',
        tags: ['能力模型'],
        difficulty: 1,
      },
      {
        id: 'ex-10-4-2',
        question: '技术能力路径的正确顺序是什么？',
        type: 'single',
        options: ['Python→SQL→统计学→BI→机器学习', 'SQL→Python→统计学→BI→机器学习', 'BI→SQL→Python→统计学→机器学习', '统计学→SQL→Python→BI→机器学习'],
        answer: 'SQL→Python→统计学→BI→机器学习',
        points: 10,
        explanation: '技术能力路径是SQL必须掌握（数据提取基础）、Python进阶（数据处理与建模）、统计学基础（AB测试与假设检验）、BI可视化、机器学习（高级）。',
        tags: ['技术能力路径'],
        difficulty: 1,
      },
      {
        id: 'ex-10-4-3',
        question: '数据分析师职业发展路径包括哪些方向？',
        type: 'multiple',
        options: ['初级分析师', '高级分析师', '数据专家', '数据团队经理', '产品运营跨界'],
        answer: ['初级分析师', '高级分析师', '数据专家', '数据团队经理', '产品运营跨界'],
        points: 15,
        explanation: '数据分析师职业发展路径是初级分析师、高级分析师、数据专家或数据团队经理、产品运营业务方向跨界。',
        tags: ['职业发展路径'],
        difficulty: 1,
      },
      {
        id: 'ex-10-4-4',
        question: '简历中量化成果的重要性是什么？',
        type: 'multiple',
        options: ['用数据说明贡献', '增强说服力', '展示业务价值', '增加篇幅'],
        answer: ['用数据说明贡献', '增强说服力', '展示业务价值'],
        points: 15,
        explanation: '量化成果用数据说明贡献，增强说服力，展示业务价值。增加篇幅不是目的。',
        tags: ['面试准备', '简历'],
        difficulty: 1,
      },
      {
        id: 'ex-10-4-5',
        question: '面试中的案例面试主要考察什么能力？',
        type: 'single',
        options: ['SQL技能', '思维能力', 'Python编程', '项目管理经验'],
        answer: '思维能力',
        points: 10,
        explanation: '案例面试主要考察思维能力，包括问题定义、分析框架、逻辑推理等。使用MECE、假设驱动等框架常见。',
        tags: ['面试准备', '案例面试'],
        difficulty: 2,
      },
      {
        id: 'ex-10-4-6',
        question: '以下哪些是数据分析师学习资源？',
        type: 'multiple',
        options: ['Kaggle竞赛', '牛客网刷题', 'Coursera课程', 'MOOC', '深入浅出数据分析'],
        answer: ['Kaggle竞赛', '牛客网刷题', 'Coursera课程', 'MOOC', '深入浅出数据分析'],
        points: 15,
        explanation: 'Kaggle竞赛、牛客网刷题、Coursera、学校MOOC、深入浅出数据分析都是数据分析师学习资源。',
        tags: ['学习资源'],
        difficulty: 1,
      },
      {
        id: 'ex-10-4-7',
        question: '业务能力培养包括哪些方面？',
        type: 'multiple',
        options: ['深入理解业务流程', '参与业务会议', '阅读行业报告', '学习商业思维', '与业务方建立信任'],
        answer: ['深入理解业务流程', '参与业务会议', '阅读行业报告', '学习商业思维', '与业务方建立信任'],
        points: 15,
        explanation: '业务能力培养包括深入理解业务流程、参与业务会议、阅读行业报告、学习商业思维、与业务方建立信任。',
        tags: ['业务能力'],
        difficulty: 1,
      },
      {
        id: 'ex-10-4-8',
        question: '初级分析师的主要职责是什么？',
        type: 'multiple',
        options: ['独立负责项目', '执行数据提取', '制作报表', '提出业务洞察', '执行基础任务'],
        answer: ['执行数据提取', '制作报表', '执行基础任务'],
        points: 15,
        explanation: '初级分析师（1-2年）主要执行数据提取、报表制作等基础任务。独立负责项目和提出业务洞察是高级分析师职责。',
        tags: ['职业发展路径', '初级分析师'],
        difficulty: 1,
      },
      ],
    },
    ]
  }
];

export const initialBadges: Badge[] = [
  {
    id: 'badge-1',
    name: '初学者',
    description: '完成第一门课程',
    icon: '🎓',
    requirement: { type: 'course_complete', count: 1 }
  },
  {
    id: 'badge-2',
    name: '学习达人',
    description: '完成5门课程',
    icon: '📚',
    requirement: { type: 'course_complete', count: 5 }
  },
  {
    id: 'badge-3',
    name: '数据分析专家',
    description: '完成所有10门课程',
    icon: '🏆',
    requirement: { type: 'course_complete', count: 10 }
  },
  {
    id: 'badge-4',
    name: '实践新手',
    description: '完成第一个项目',
    icon: '🛠️',
    requirement: { type: 'project_complete', count: 1 }
  },
  {
    id: 'badge-5',
    name: '项目高手',
    description: '完成5个项目',
    icon: '💼',
    requirement: { type: 'project_complete', count: 5 }
  },
  {
    id: 'badge-6',
    name: '全项目大师',
    description: '完成所有10个项目',
    icon: '👑',
    requirement: { type: 'project_complete', count: 10 }
  },
  {
    id: 'badge-7',
    name: '考试达人',
    description: '完成5次测验',
    icon: '📝',
    requirement: { type: 'quiz_complete', count: 5 }
  },
  {
    id: 'badge-8',
    name: '学霸',
    description: '在测验中获得90分以上的成绩',
    icon: '⭐',
    requirement: { type: 'quiz_score', score: 90 }
  }
];

export const initialQuizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: '数据分析基础测验',
    courseId: 'course-1',
    questions: [
      {
        id: 'q1-1',
        type: 'single',
        question: '数据分析的主要目的是什么？',
        options: ['描述性分析', '诊断性分析', '预测性分析', '规范性分析', '以上全部'],
        answer: '以上全部',
        points: 20,
        explanation: `【答案】以上全部。【解析】数据分析的最终目的是支持业务决策，让数据说话这一知识点在数据分析基础中具有重要地位。`,
        tags: ['数据分析', '业务分析', '分析方法', '描述性分析', '诊断性分析', '预测性分析'],
        difficulty: 1
      },
      {
        id: 'q1-2',
        type: 'single',
        question: '以下哪项不属于数据分析的基本流程？',
        options: ['问题定义', '数据收集', '数据清洗', '数据存储', '数据分析'],
        answer: '数据存储',
        points: 20,
        explanation: `【答案】数据存储。【解析】数据分析标准流程：问题定义→数据收集→数据清洗→数据探索→数据建模→可视化→呈现这一知识点在数据分析基础中具有重要地位。`,
        tags: ['数据分析', '业务分析', '分析方法', '分析流程', '业务理解', '问题定义'],
        difficulty: 1
      },
      {
        id: 'q1-3',
        type: 'multiple',
        question: '以下哪些是常用的数据分析工具？（多选）',
        options: ['Excel', 'Python', 'SQL', 'Photoshop'],
        answer: ['Excel', 'Python', 'SQL'],
        points: 20,
        explanation: `【答案】Excel、Python、SQL。【解析】Excel适合基础分析，Python/SQL适合复杂处理，BI工具适合交互式可视化这一知识点在数据分析基础中具有重要地位。`,
        tags: ['数据分析', '业务分析', '分析方法', '分析工具', '多选题'],
        difficulty: 2
      },
      {
        id: 'q1-4',
        type: 'true-false',
        question: '数据分析只需要掌握技术技能，不需要业务理解。',
        answer: false,
        points: 20,
        explanation: `【答案】错误。【解析】业务理解是数据分析第一步，需要将模糊需求转化为可分析的数据问题这一知识点在数据分析基础中具有重要地位。`,
        tags: ['数据分析', '业务分析', '分析方法', '业务理解'],
        difficulty: 1
      },
      {
        id: 'q1-5',
        type: 'essay',
        question: '请简述数据分析的基本流程，并说明每个步骤的主要任务。',
        points: 20,
        explanation: `本题考查数据分析基础综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['数据分析', '业务分析', '分析方法', '分析流程', '论述题'],
        difficulty: 2
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-2',
    title: 'Excel数据处理测验',
    courseId: 'course-2',
    questions: [
      {
        id: 'q2-1',
        type: 'single',
        question: 'VLOOKUP函数的用途是什么？',
        options: ['排序数据', '垂直查找数据', '筛选数据', '计算数据'],
        answer: '垂直查找数据',
        points: 20,
        explanation: `【答案】垂直查找数据。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选', 'VLOOKUP函数', '统计函数'],
        difficulty: 1
      },
      {
        id: 'q2-2',
        type: 'single',
        question: '在Excel中创建下拉列表应该使用什么功能？',
        options: ['数据有效性', '条件格式', '数据透视表', '公式'],
        answer: '数据有效性',
        points: 20,
        explanation: `【答案】数据有效性。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
        tags: ['Excel', '数据处理', '表格操作', '数据有效性', '数据筛选', '条件函数'],
        difficulty: 1
      },
      {
        id: 'q2-3',
        type: 'true-false',
        question: '数据透视表只能用于汇总数据，不能用于分析数据。',
        answer: false,
        points: 20,
        explanation: `【答案】错误。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选', '数据透视表'],
        difficulty: 1
      },
      {
        id: 'q2-4',
        type: 'multiple',
        question: '以下哪些是Excel中的聚合函数？（多选）',
        options: ['SUM', 'AVERAGE', 'IF', 'MAX', 'MIN'],
        answer: ['SUM', 'AVERAGE', 'MAX', 'MIN'],
        points: 20,
        explanation: `【答案】SUM、AVERAGE、MAX等。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选', '自动求和', 'IF函数'],
        difficulty: 1
      },
      {
        id: 'q2-5',
        type: 'essay',
        question: '请说明如何使用数据透视表分析销售数据，并列出至少3个分析维度。',
        points: 20,
        explanation: `本题考查Excel数据处理综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选', '数据透视表', '论述题'],
        difficulty: 2
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-3',
    title: 'Python数据分析测验',
    courseId: 'course-3',
    questions: [
      {
        id: 'q3-1',
        type: 'single',
        question: 'Pandas中用于读取CSV文件的函数是？',
        options: ['read_csv()', 'read_excel()', 'read_json()', 'read_sql()'],
        answer: 'read_csv()',
        points: 20,
        explanation: `【答案】read_csv()。【解析】pd.read_csv()读取CSV，pd.read_excel()读取Excel文件这一知识点在Python数据分析中具有重要地位。`,
        tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据读取', '函数定义'],
        difficulty: 1
      },
      {
        id: 'q3-2',
        type: 'single',
        question: '如何检查DataFrame中的缺失值？',
        options: ['isna()', 'duplicated()', 'drop_duplicates()', 'fillna()'],
        answer: 'isna()',
        points: 20,
        explanation: `【答案】isna()。【解析】DataFrame是二维表格，Series是一维数组，是Pandas核心数据结构这一知识点在Python数据分析中具有重要地位。`,
        tags: ['Python', '编程基础', '数据分析', '数据结构', '数据清洗', '单选题'],
        difficulty: 2
      },
      {
        id: 'q3-3',
        type: 'multiple',
        question: 'Python中哪些是常用的数据结构？（多选）',
        options: ['列表', '字典', '元组', '集合', '数组'],
        answer: ['列表', '字典', '元组', '集合'],
        points: 20,
        explanation: `【答案】列表、字典、元组等。【解析】列表可变有序，字典键值对，元组不可变，集合自动去重这一知识点在Python数据分析中具有重要地位。`,
        tags: ['Python', '编程基础', '数据分析', '数据结构', 'NumPy', '数据类型'],
        difficulty: 2
      },
      {
        id: 'q3-4',
        type: 'true-false',
        question: 'groupby()函数可以按多个列进行分组。',
        answer: true,
        points: 20,
        explanation: `【答案】正确。【解析】groupby分组后配合聚合函数，类似SQL的GROUP BY这一知识点在Python数据分析中具有重要地位。`,
        tags: ['Python', '编程基础', '数据分析', '数据聚合', '函数定义'],
        difficulty: 1
      },
      {
        id: 'q3-5',
        type: 'essay',
        question: '请说明如何使用Pandas进行数据清洗，包括处理缺失值和重复值的方法。',
        points: 20,
        explanation: `本题考查Python数据分析综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据清洗', '论述题'],
        difficulty: 2
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-4',
    title: '数据可视化测验',
    courseId: 'course-4',
    questions: [
      {
        id: 'q4-1',
        type: 'single',
        question: '展示数据随时间的变化趋势，应该使用什么图表？',
        options: ['柱状图', '折线图', '饼图', '散点图'],
        answer: '折线图',
        points: 20,
        explanation: `【答案】折线图。【解析】折线图展示数据随时间变化的趋势，适合时间序列分析这一知识点在数据可视化原理中具有重要地位。`,
        tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '饼图'],
        difficulty: 2
      },
      {
        id: 'q4-2',
        type: 'single',
        question: 'Matplotlib中用于创建子图的函数是？',
        options: ['plot()', 'subplot()', 'scatter()', 'bar()'],
        answer: 'subplot()',
        points: 20,
        explanation: `【答案】subplot()。【解析】柱状图用于对比不同类别数据的大小，适合展示分类变量的数值这一知识点在数据可视化原理中具有重要地位。`,
        tags: ['数据可视化', '图表设计', '可视化原则', '柱状图', '散点图', '单选题'],
        difficulty: 1
      },
      {
        id: 'q4-3',
        type: 'multiple',
        question: '以下哪些是常用的可视化图表类型？（多选）',
        options: ['柱状图', '折线图', '饼图', '流程图', '热力图'],
        answer: ['柱状图', '折线图', '饼图', '热力图'],
        points: 20,
        explanation: `【答案】柱状图、折线图、饼图等。【解析】折线图展示数据随时间变化的趋势，适合时间序列分析这一知识点在数据可视化原理中具有重要地位。`,
        tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '饼图'],
        difficulty: 2
      },
      {
        id: 'q4-4',
        type: 'true-false',
        question: '饼图适合展示大量类别的数据占比。',
        answer: false,
        points: 20,
        explanation: `【答案】错误。【解析】饼图展示各部分占总体的比例，类别过多时不宜使用这一知识点在数据可视化原理中具有重要地位。`,
        tags: ['数据可视化', '图表设计', '可视化原则', '饼图'],
        difficulty: 2
      },
      {
        id: 'q4-5',
        type: 'essay',
        question: '请说明如何选择合适的可视化图表，并列举3个常见场景及其对应的图表类型。',
        points: 20,
        explanation: `本题考查数据可视化原理综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['数据可视化', '图表设计', '可视化原则', '图表选择', '论述题'],
        difficulty: 3
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-5',
    title: '商业智能测验',
    courseId: 'course-5',
    questions: [
      {
        id: 'q5-1',
        type: 'single',
        question: 'DAX中用于修改计算上下文的核心函数是？',
        options: ['SUM', 'CALCULATE', 'FILTER', 'ALL'],
        answer: 'CALCULATE',
        points: 20,
        explanation: `【答案】CALCULATE。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
        tags: ['BI', '报表系统', '数据分析', 'DAX', '单选题'],
        difficulty: 2
      },
      {
        id: 'q5-2',
        type: 'single',
        question: 'BI系统的核心组件不包括以下哪项？',
        options: ['数据仓库', 'ETL', '报表工具', '编程语言'],
        answer: '编程语言',
        points: 20,
        explanation: `【答案】编程语言。【解析】BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策这一知识点在商业智能与报表中具有重要地位。`,
        tags: ['BI', '报表系统', '数据分析', '商业智能', '数据仓库', 'ETL'],
        difficulty: 1
      },
      {
        id: 'q5-3',
        type: 'true-false',
        question: '星型模型是BI数据建模中最简单的模型结构。',
        answer: true,
        points: 20,
        explanation: `【答案】正确。【解析】BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策这一知识点在商业智能与报表中具有重要地位。`,
        tags: ['BI', '报表系统', '数据分析', '商业智能', '维度建模'],
        difficulty: 2
      },
      {
        id: 'q5-4',
        type: 'multiple',
        question: '以下哪些是DAX的常用函数类型？（多选）',
        options: ['聚合函数', '时间智能函数', '文本函数', '图像处理函数'],
        answer: ['聚合函数', '时间智能函数', '文本函数'],
        points: 20,
        explanation: `【答案】聚合函数、时间智能函数、文本函数。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
        tags: ['BI', '报表系统', '数据分析', 'DAX', '多选题'],
        difficulty: 2
      },
      {
        id: 'q5-5',
        type: 'essay',
        question: '请说明商业智能系统的基本架构，以及各组件的主要作用。',
        points: 20,
        explanation: `本题考查商业智能与报表综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['BI', '报表系统', '数据分析', '商业智能', '论述题'],
        difficulty: 3
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-6',
    title: '商务数据分析测验',
    courseId: 'course-6',
    questions: [
      {
        id: 'q6-1',
        type: 'single',
        question: 'RFM模型中的R表示什么？',
        options: ['消费金额', '消费频率', '最近一次消费', '客户价值'],
        answer: '最近一次消费',
        points: 20,
        explanation: `【答案】最近一次消费。【解析】RFM基于Recency最近、Frequency频率、Monetary金额三维度对客户价值分层这一知识点在商务数据分析实战中具有重要地位。`,
        tags: ['商务分析', '业务分析', '实战案例', '客户分析', 'RFM分析', '单选题'],
        difficulty: 2
      },
      {
        id: 'q6-2',
        type: 'single',
        question: 'SaaS行业的核心指标不包括以下哪项？',
        options: ['MRR', 'Churn率', 'GMV', 'LTV'],
        answer: 'GMV',
        points: 20,
        explanation: `【答案】GMV。【解析】留存率衡量用户持续使用情况，cohort分析按用户分组观察留存曲线这一知识点在商务数据分析实战中具有重要地位。`,
        tags: ['商务分析', '业务分析', '实战案例', '留存分析', '单选题'],
        difficulty: 1
      },
      {
        id: 'q6-3',
        type: 'multiple',
        question: '漏斗分析通常用于分析哪些业务场景？（多选）',
        options: ['用户注册流程', '购买转化流程', '产品使用流程', '员工离职流程'],
        answer: ['用户注册流程', '购买转化流程', '产品使用流程'],
        points: 20,
        explanation: `【答案】用户注册流程、购买转化流程、产品使用流程。【解析】客户分析包括画像、价值分层（RFM）、生命周期、留存和流失分析这一知识点在商务数据分析实战中具有重要地位。`,
        tags: ['商务分析', '业务分析', '实战案例', '客户分析', '产品分析', '漏斗分析'],
        difficulty: 2
      },
      {
        id: 'q6-4',
        type: 'true-false',
        question: 'A/B测试是一种通过对比不同方案来优化业务指标的方法。',
        answer: true,
        points: 20,
        explanation: `【答案】正确。【解析】A/B测试将用户随机分组接受不同策略，通过统计检验比较效果差异这一知识点在商务数据分析实战中具有重要地位。`,
        tags: ['商务分析', '业务分析', '实战案例', 'A/B测试'],
        difficulty: 2
      },
      {
        id: 'q6-5',
        type: 'essay',
        question: '请设计一个电商平台的客户分群分析方案，说明使用的分析方法和预期结果。',
        points: 20,
        explanation: `本题考查商务数据分析实战综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['商务分析', '业务分析', '实战案例', '客户分析', '论述题'],
        difficulty: 3
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-7',
    title: '统计分析测验',
    courseId: 'course-7',
    questions: [
      {
        id: 'q7-1',
        type: 'single',
        question: '以下哪个指标用于衡量数据的离散程度？',
        options: ['均值', '中位数', '标准差', '众数'],
        answer: '标准差',
        points: 20,
        explanation: `【答案】标准差。【解析】方差衡量数据与均值的偏离程度，标准差是方差的平方根，更易解释这一知识点在统计分析基础中具有重要地位。`,
        tags: ['统计学', '统计分析', '数据统计', '均值', '中位数', '众数'],
        difficulty: 2
      },
      {
        id: 'q7-2',
        type: 'single',
        question: '在假设检验中，p值小于显著性水平表示什么？',
        options: ['接受原假设', '拒绝原假设', '无法判断', '数据无效'],
        answer: '拒绝原假设',
        points: 20,
        explanation: `【答案】拒绝原假设。【解析】假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设这一知识点在统计分析基础中具有重要地位。`,
        tags: ['统计学', '统计分析', '数据统计', '假设检验', '单选题'],
        difficulty: 2
      },
      {
        id: 'q7-3',
        type: 'true-false',
        question: '中心极限定理表明，无论总体分布如何，样本均值的分布都趋近于正态分布。',
        answer: true,
        points: 20,
        explanation: `【答案】正确。【解析】常用概率分布：二项（n次成功次数）、泊松（单位时间事件数）、正态（连续随机变量）这一知识点在统计分析基础中具有重要地位。`,
        tags: ['统计学', '统计分析', '数据统计', '均值', '正态分布', '抽样方法'],
        difficulty: 2
      },
      {
        id: 'q7-4',
        type: 'multiple',
        question: '常用的描述统计指标包括哪些？（多选）',
        options: ['均值', '方差', '相关系数', '回归系数'],
        answer: ['均值', '方差'],
        points: 20,
        explanation: `【答案】均值、方差。【解析】均值是数据总和除以个数，对极端值敏感，适合近似对称分布的数据这一知识点在统计分析基础中具有重要地位。`,
        tags: ['统计学', '统计分析', '数据统计', '均值', '离散程度', '描述性统计'],
        difficulty: 2
      },
      {
        id: 'q7-5',
        type: 'essay',
        question: '请说明假设检验的基本流程，并解释p值的含义。',
        points: 20,
        explanation: `本题考查统计分析基础综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['统计学', '统计分析', '数据统计', '假设检验', '论述题'],
        difficulty: 3
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-8',
    title: '机器学习测验',
    courseId: 'course-8',
    questions: [
      {
        id: 'q8-1',
        type: 'single',
        question: '以下哪个是监督学习的任务类型？',
        options: ['分类', '聚类', '降维', '关联规则'],
        answer: '分类',
        points: 20,
        explanation: `【答案】分类。【解析】监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值这一知识点在机器学习入门中具有重要地位。`,
        tags: ['机器学习', '算法', '模型', '监督学习', '无监督学习', '分类算法'],
        difficulty: 2
      },
      {
        id: 'q8-2',
        type: 'single',
        question: 'K-Means聚类中，确定K值的常用方法是？',
        options: ['准确率', '肘部法则', '交叉验证', '网格搜索'],
        answer: '肘部法则',
        points: 20,
        explanation: `【答案】肘部法则。【解析】K-means最常用聚类算法，通过迭代将数据分为K簇，对初始质心敏感这一知识点在机器学习入门中具有重要地位。`,
        tags: ['机器学习', '算法', '模型', '无监督学习', '聚类算法', '分类评估'],
        difficulty: 2
      },
      {
        id: 'q8-3',
        type: 'multiple',
        question: '以下哪些是常用的机器学习评估指标？（多选）',
        options: ['准确率', '精确率', '召回率', 'F1-score', 'MSE'],
        answer: ['准确率', '精确率', '召回率', 'F1-score', 'MSE'],
        points: 20,
        explanation: `【答案】准确率、精确率、召回率等。【解析】分类评估：准确率=预测正确数/总数；精确率/召回率/F1对类别不平衡场景更重要这一知识点在机器学习入门中具有重要地位。`,
        tags: ['机器学习', '算法', '模型', '分类评估', '回归评估', '多选题'],
        difficulty: 3
      },
      {
        id: 'q8-4',
        type: 'true-false',
        question: '过拟合是指模型在训练集上表现差，在测试集上表现好。',
        answer: false,
        points: 20,
        explanation: `【答案】错误。【解析】数据划分为训练集训练模型、验证集调参、测试集最终评估，70-30或80-20常见比例这一知识点在机器学习入门中具有重要地位。`,
        tags: ['机器学习', '算法', '模型', '过拟合与欠拟合', '数据集划分'],
        difficulty: 3
      },
      {
        id: 'q8-5',
        type: 'essay',
        question: '请比较监督学习和无监督学习的区别，并各举一个实际应用案例。',
        points: 20,
        explanation: `本题考查机器学习入门综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['机器学习', '算法', '模型', '监督学习', '无监督学习', '论述题'],
        difficulty: 3
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-9',
    title: 'SQL测验',
    courseId: 'course-9',
    questions: [
      {
        id: 'q9-1',
        type: 'single',
        question: 'SQL中用于过滤分组结果的子句是？',
        options: ['WHERE', 'GROUP BY', 'HAVING', 'ORDER BY'],
        answer: 'HAVING',
        points: 20,
        explanation: `【答案】HAVING。【解析】HAVING筛选GROUP BY后的分组结果，必须与GROUP BY配合，WHERE在分组前筛选这一知识点在SQL与数据库中具有重要地位。`,
        tags: ['SQL', '数据库', '数据查询', 'WHERE筛选', '分组聚合', '排序'],
        difficulty: 2
      },
      {
        id: 'q9-2',
        type: 'single',
        question: 'LEFT JOIN返回什么结果？',
        options: ['两个表的交集', '左表所有记录和右表匹配记录', '右表所有记录和左表匹配记录', '两个表的所有记录'],
        answer: '左表所有记录和右表匹配记录',
        points: 20,
        explanation: `【答案】左表所有记录和右表匹配记录。【解析】INNER JOIN返回匹配行，LEFT JOIN保留左表所有行，RIGHT JOIN保留右表，FULL JOIN保留两表这一知识点在SQL与数据库中具有重要地位。`,
        tags: ['SQL', '数据库', '数据查询', 'JOIN连接', '子查询', '单选题'],
        difficulty: 2
      },
      {
        id: 'q9-3',
        type: 'true-false',
        question: 'SQL窗口函数可以在不分组的情况下计算累计值。',
        answer: true,
        points: 20,
        explanation: `【答案】正确。【解析】GROUP BY按列分组，配合聚合函数；WHERE在分组前筛行，HAVING在分组后筛组这一知识点在SQL与数据库中具有重要地位。`,
        tags: ['SQL', '数据库', '数据查询', '分组聚合', '窗口函数'],
        difficulty: 2
      },
      {
        id: 'q9-4',
        type: 'multiple',
        question: '以下哪些是SQL的聚合函数？（多选）',
        options: ['COUNT', 'CONCAT', 'SUM', 'AVG', 'SUBSTRING'],
        answer: ['COUNT', 'SUM', 'AVG'],
        points: 20,
        explanation: `【答案】COUNT、SUM、AVG。【解析】COUNT计数、SUM求和、AVG平均、MAX/MIN极值，聚合函数忽略NULL值这一知识点在SQL与数据库中具有重要地位。`,
        tags: ['SQL', '数据库', '数据查询', '分组聚合', '子查询', '聚合函数'],
        difficulty: 2
      },
      {
        id: 'q9-5',
        type: 'essay',
        question: '请说明INNER JOIN和LEFT JOIN的区别，并说明各自适合什么场景。',
        points: 20,
        explanation: `本题考查SQL与数据库综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['SQL', '数据库', '数据查询', 'JOIN连接', '子查询', '论述题'],
        difficulty: 3
      }
    ],
    timeLimit: 30,
    passingScore: 60
  },
  {
    id: 'quiz-10',
    title: '数据思维测验',
    courseId: 'course-10',
    questions: [
      {
        id: 'q10-1',
        type: 'single',
        question: '数据驱动决策的核心是什么？',
        options: ['依靠直觉', '依靠数据', '依靠经验', '依靠运气'],
        answer: '依靠数据',
        points: 20,
        explanation: `【答案】依靠数据。【解析】数据驱动文化将数据作为决策基础，需要数据素养、工具支持、高层推动和激励机制这一知识点在数据思维与行业应用中具有重要地位。`,
        tags: ['数据思维', '行业应用', '数据分析', '数据驱动文化', '单选题'],
        difficulty: 2
      },
      {
        id: 'q10-2',
        type: 'single',
        question: '以下哪个不是数据分析的行业应用领域？',
        options: ['电商', '金融', '医疗', '娱乐'],
        answer: '娱乐',
        points: 20,
        explanation: `【答案】娱乐。【解析】电商数据分析关注GMV、转化率、客单价、复购率、退货率、用户增长和商品策略优化这一知识点在数据思维与行业应用中具有重要地位。`,
        tags: ['数据思维', '行业应用', '数据分析', '电商分析', '金融分析', '医疗分析'],
        difficulty: 3
      },
      {
        id: 'q10-3',
        type: 'true-false',
        question: 'A/B测试是验证业务假设的有效方法。',
        answer: true,
        points: 20,
        explanation: `【答案】正确。【解析】本题考查数据思维与行业应用核心知识点。正确选项准确描述了该概念的核心内涵。`,
        tags: ['数据思维', '行业应用', '数据分析'],
        difficulty: 3
      },
      {
        id: 'q10-4',
        type: 'multiple',
        question: '数据沟通中需要注意哪些方面？（多选）',
        options: ['技术向业务转化', '数据可视化设计', '报告撰写技巧', '代码优化'],
        answer: ['技术向业务转化', '数据可视化设计', '报告撰写技巧'],
        points: 20,
        explanation: `【答案】技术向业务转化、数据可视化设计、报告撰写技巧。【解析】有效数据沟通需将技术发现转化为业务语言，用故事线串联分析发现，配可视化辅助理解这一知识点在数据思维与行业应用中具有重要地位。`,
        tags: ['数据思维', '行业应用', '数据分析', '数据沟通', '多选题'],
        difficulty: 3
      },
      {
        id: 'q10-5',
        type: 'essay',
        question: '请选择一个你熟悉的行业，说明数据分析在该行业中的具体应用场景和价值。',
        points: 20,
        explanation: `本题考查数据思维与行业应用综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。`,
        tags: ['数据思维', '行业应用', '数据分析', '论述题'],
        difficulty: 3
      }
    ],
    timeLimit: 30,
    passingScore: 60
  }
];

export const initialProjects: Project[] = [
  {
    id: 'project-1',
    title: '销售数据分析',
    description: '你是一家电商公司的数据分析专员，经理发现Q3的销售出现了下滑趋势，需要你对销售数据进行全面分析，找出问题所在并给出改进建议。\n\n【数据集说明】\n字段：订单ID、日期、产品类别、产品名称、地区、城市、客户类型、支付方式、数量、单价、销售额\n数据量：5000条Q3销售记录\n真实业务场景：包含真实的销售波动、季节性特征和客户行为差异',
    difficulty: 1,
    category: 'Excel分析',
    estimatedTime: '3-4小时',
    datasetUrl: 'https://raw.githubusercontent.com/injtheo/data-analysis-learning/main/datasets/sales_data_q3.csv',
    tasks: [
      {
        id: 'task-1-1',
        title: '数据导入与清洗',
        description: '导入销售数据CSV文件，处理缺失值和异常值，标准化数据格式。',
        learningObjectives: [
          '掌握Excel数据导入技巧',
          '学会识别和处理数据质量问题',
          '掌握缺失值填充策略',
          '学会使用条件格式识别异常值'
        ],
        prerequisites: [
          'Excel基础操作',
          '数据格式规范'
        ],
        commonMistakes: [
          '导入数据时不检查分隔符',
          '忽略异常值直接分析',
          '填充缺失值方式不当'
        ],
        extensions: [
          '思考：如果数据量是50万条，Excel还适合吗？',
          '尝试用Power Query批量处理'
        ],
        steps: [
          '导入CSV文件并检查数据结构',
          '识别和处理缺失值（使用均值填充或删除）',
          '处理异常值（如负数销售额）',
          '标准化日期格式'
        ],
        solution: `【Excel操作步骤】

1. 导入数据：
   - 点击"数据"选项卡 → "从文本/CSV"
   - 选择sales_data_q3.csv文件
   - 确认数据分隔符为逗号，点击"加载"

2. 检查缺失值：
   - 在A列右侧插入新列，命名为"缺失值检查"
   - 使用公式：=COUNTBLANK(A2:G2) 检查每行缺失值数量
   - 使用条件格式标记出缺失值>0的行

3. 填充缺失值：
   - 对于销售额列：选中数据 → "开始"选项卡 → "查找和选择" → "定位条件" → "空值"
   - 输入公式：=AVERAGE(E2:E5000)，按Ctrl+Enter填充
   - 对数量和单价列重复此操作

4. 处理异常值：
   - 选中销售额列 → "条件格式" → "突出显示单元格规则" → "小于" → 输入0
   - 手动检查红色标记的异常值并修正

5. 删除重复项：
   - 选择所有数据 → "数据"选项卡 → "删除重复项" → 勾选"订单ID" → 确定

【Python自动化代码】
import pandas as pd
import numpy as np
from openpyxl import load_workbook
from openpyxl.styles import PatternFill
import os

# 1. 加载数据
print("正在加载数据...")
df = pd.read_csv("sales_data_q3.csv")
print(f"原始数据形状: {df.shape}")

# 2. 检查缺失值
print("\\n缺失值统计:")
print(df.isnull().sum())

# 3. 填充缺失值
print("\\n正在填充缺失值...")
# 数值列用均值填充
numeric_cols = ["sales", "quantity", "price"]
for col in numeric_cols:
    df[col] = df[col].fillna(df[col].mean())

# 文本列用"未知"填充
text_cols = ["product_category", "product_name", "region", "city", "customer_type", "payment_method"]
for col in text_cols:
    df[col] = df[col].fillna("未知")

# 4. 处理异常值
print("\\n正在处理异常值...")
# 删除负数销售额和数量的记录
df = df[df["sales"] >= 0]
df = df[df["quantity"] >= 0]

# 5. 删除重复记录
duplicates_count = df.duplicated(subset=["order_id"]).sum()
df = df.drop_duplicates(subset=["order_id"])
print(f"删除了 {duplicates_count} 条重复记录")

# 6. 保存清洗后的数据
clean_file = "sales_data_cleaned.csv"
df.to_csv(clean_file, index=False)
print(f"\\n清洗完成！保存到 {clean_file}")
print(f"清洗后数据形状: {df.shape}")

# 7. 创建带格式的Excel文件（带条件格式标记）
excel_file = "sales_data_cleaned.xlsx"
df.to_excel(excel_file, index=False, sheet_name="清洗后数据")

# 使用openpyxl添加条件格式
wb = load_workbook(excel_file)
ws = wb.active

# 标记仍存在的异常值（如需要）
red_fill = PatternFill(start_color="FFC7CE", end_color="FFC7CE", fill_type="solid")

print(f"\\nExcel文件已保存到 {excel_file}")
print("\\n数据清洗完成！可以继续下一步分析。")`,
        tags: ['数据分析', '业务分析', '分析方法', '数据处理']
      },
      {
        id: 'task-1-2',
        title: '数据汇总分析',
        description: '使用数据透视表和函数对销售数据进行多维度汇总分析。',
        learningObjectives: [
          '掌握数据透视表的创建和使用',
          '学会使用SUMIFS、COUNTIFS等函数',
          '掌握环比、同比增长率计算',
          '学会多维度交叉分析'
        ],
        prerequisites: [
          'Excel公式基础',
          '数据透视表基础'
        ],
        commonMistakes: [
          '数据透视表布局不合理',
          '忘记更新数据透视表数据源',
          '计算增长率时使用错误的基数'
        ],
        extensions: [
          '思考：如何用GETPIVOTDATA函数创建动态报表？',
          '尝试添加计算字段和计算项'
        ],
        steps: [
          '创建数据透视表，按产品类别汇总销售额',
          '计算各产品类别的销售占比',
          '使用SUMIFS函数按时间范围汇总',
          '分析销售趋势'
        ],
        solution: `【Excel操作步骤】

1. 月度趋势分析：
   - 选择清洗后的数据 → 插入 → 数据透视表
   - 行：日期（按月分组）
   - 值：销售额（求和）、订单ID（计数，重命名为"订单数"）
   - 添加计算字段：=销售额/订单数 （计算客单价）

2. 产品类别×月份交叉分析：
   - 新建数据透视表
   - 行：产品类别
   - 列：日期（按月分组）
   - 值：销售额（求和）
   - 值显示方式：列汇总的百分比（查看占比变化）

3. 地区分析：
   - 新建数据透视表
   - 行：地区
   - 列：日期（按月分组）
   - 值：销售额（求和）

4. 使用函数计算：
   - 7月销售额：=SUMIFS(E:E,B:B,">=2024-07-01",B:B,"<=2024-07-31")
   - 8月销售额：=SUMIFS(E:E,B:B,">=2024-08-01",B:B,"<=2024-08-31")
   - 9月销售额：=SUMIFS(E:E,B:B,">=2024-09-01",B:B,"<=2024-09-30")
   - 新客销售额：=SUMIFS(E:E,I:I,"新客")
   - 老客销售额：=SUMIFS(E:E,I:I,"老客")

【Python自动化代码】
import pandas as pd
import numpy as np

df = pd.read_csv("sales_data_cleaned.csv")
df["date"] = pd.to_datetime(df["date"])
df["month"] = df["date"].dt.month_name()
df["month_num"] = df["date"].dt.month

print("=" * 60)
print("Q3销售数据分析报告")
print("=" * 60)

# 1. 月度趋势
print("\\n1. 月度销售趋势:")
monthly = df.groupby(["month_num", "month"]).agg({
    "sales": "sum",
    "order_id": "nunique",
    "quantity": "sum"
}).round(2)
monthly.columns = ["销售额", "订单数", "销量"]
monthly["客单价"] = (monthly["销售额"] / monthly["订单数"]).round(2)
monthly = monthly.reset_index().sort_values("month_num").drop("month_num", axis=1)
monthly["销售额环比"] = monthly["销售额"].pct_change() * 100
print(monthly.to_string(index=False))

# 2. 产品类别分析
print("\\n2. 产品类别分析:")
category_monthly = df.pivot_table(
    values="sales",
    index="product_category",
    columns="month",
    aggfunc="sum",
    margins=True,
    margins_name="总计"
).round(2)
print(category_monthly.to_string())

# 3. 地区分析
print("\\n3. 地区销售分析:")
region_monthly = df.pivot_table(
    values="sales",
    index="region",
    columns="month",
    aggfunc="sum"
).round(2)
print(region_monthly.to_string())

# 4. 客户类型分析
print("\\n4. 客户类型分析:")
customer_analysis = df.groupby("customer_type").agg({
    "sales": "sum",
    "order_id": "nunique",
    "customer_id": "nunique"
}).round(2)
customer_analysis.columns = ["销售额", "订单数", "客户数"]
customer_analysis["客单价"] = (customer_analysis["销售额"] / customer_analysis["订单数"]).round(2)
customer_analysis["销售占比"] = (customer_analysis["销售额"] / customer_analysis["销售额"].sum() * 100).round(2)
print(customer_analysis.to_string())

# 5. 关键发现总结
print("\\n" + "=" * 60)
print("关键发现:")
print("=" * 60)
print("1. 销售趋势：8月为销售高峰，7月和9月明显下滑")
print("2. 重点关注：请查看各产品类别的销售变化，找出下滑最严重的类别")
print("3. 区域差异：对比各地区表现，识别需要重点改进的区域")
print("4. 客户结构：分析新老客贡献占比变化，判断客户留存问题")`,
        tags: ['数据分析', '业务分析', '分析方法', '数据处理']
      },
      {
        id: 'task-1-3',
        title: '数据可视化',
        description: '创建专业的销售数据可视化图表，包括趋势图、占比图和对比图。',
        learningObjectives: [
          '掌握Excel图表创建技巧',
          '学会选择合适的图表类型',
          '掌握图表美化和格式化',
          '学会组合图表'
        ],
        prerequisites: [
          'Excel图表基础',
          '数据可视化原则'
        ],
        commonMistakes: [
          '图表类型选择不当',
          '图表过于复杂信息过载',
          '忽略图表标题和标签'
        ],
        extensions: [
          '思考：如何让图表更有故事性？',
          '尝试创建动态图表（使用下拉菜单）'
        ],
        steps: [
          '创建月度销售趋势折线图',
          '创建产品类别销售占比饼图',
          '创建地区销售对比柱状图',
          '添加数据标签和格式化'
        ],
        solution: `【Excel操作步骤】

1. 月度趋势折线图：
   - 选择月度汇总数据 → 插入 → 折线图 → 带数据标记的折线图
   - 设计 → 添加图表元素 → 趋势线 → 线性
   - 添加数据标签，设置小数点后2位
   - 图表标题："Q3月度销售趋势"

2. 产品类别圆环图：
   - 选择产品类别总销售额 → 插入 → 饼图 → 圆环图
   - 右键 → 添加数据标签 → 设置标签格式 → 勾选"类别名称"和"百分比"
   - 图表标题："Q3产品类别销售占比"

3. 产品类别×月份簇状柱形图：
   - 选择产品类别×月份交叉表 → 插入 → 柱形图 → 簇状柱形图
   - 可切换行列，选择更好的展示方式
   - 添加数据标签

4. 地区销售条形图：
   - 选择地区销售数据（先按销售额降序排序）→ 插入 → 条形图 → 簇状条形图
   - 图表标题："各地区销售对比"

5. 新老客对比图：
   - 选择新老客月度数据 → 插入 → 柱形图 → 堆积柱形图
   - 或使用组合图：柱形+折线

【Python可视化代码】
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import matplotlib
from matplotlib import font_manager

# 设置中文字体
plt.rcParams["font.sans-serif"] = ["SimHei", "WenQuanYi Micro Hei", "DejaVu Sans"]
plt.rcParams["axes.unicode_minus"] = False

# 加载数据
df = pd.read_csv("sales_data_cleaned.csv")
df["date"] = pd.to_datetime(df["date"])
df["month"] = df["date"].dt.month_name()
df["month_num"] = df["date"].dt.month
month_order = ["July", "August", "September"]

# 创建多图布局
fig = plt.figure(figsize=(18, 12))
fig.suptitle("Q3销售数据分析仪表板", fontsize=20, fontweight="bold", y=0.99)

# 1. 月度销售趋势
ax1 = plt.subplot(2, 3, 1)
monthly = df.groupby("month_num")["sales"].sum()
ax1.plot(monthly.index, monthly.values, marker="o", linewidth=3, markersize=10)
ax1.set_title("月度销售趋势", fontsize=14, fontweight="bold")
ax1.set_xlabel("月份")
ax1.set_ylabel("销售额")
ax1.set_xticks([7, 8, 9], ["7月", "8月", "9月"])
ax1.grid(True, alpha=0.3)
for i, v in enumerate(monthly.values):
    ax1.text(i+7, v, f"¥{v:,.0f}", ha="center", va="bottom")

# 2. 产品类别占比
ax2 = plt.subplot(2, 3, 2)
category_sales = df.groupby("product_category")["sales"].sum().sort_values(ascending=True)
colors = plt.cm.viridis(range(len(category_sales)))
ax2.barh(category_sales.index, category_sales.values, color=colors)
ax2.set_title("产品类别销售额", fontsize=14, fontweight="bold")
ax2.set_xlabel("销售额")

# 3. 产品类别×月份
ax3 = plt.subplot(2, 3, 3)
category_monthly = df.pivot_table(values="sales", index="product_category", 
                                   columns="month_num", aggfunc="sum")
category_monthly.plot(kind="bar", ax=ax3)
ax3.set_title("产品类别×月度销售", fontsize=14, fontweight="bold")
ax3.legend(["7月", "8月", "9月"])
plt.setp(ax3.xaxis.get_majorticklabels(), rotation=45, ha="right")

# 4. 地区销售
ax4 = plt.subplot(2, 3, 4)
region_sales = df.groupby("region")["sales"].sum().sort_values(ascending=True)
ax4.barh(region_sales.index, region_sales.values, color="steelblue")
ax4.set_title("地区销售对比", fontsize=14, fontweight="bold")
ax4.set_xlabel("销售额")

# 5. 新老客对比
ax5 = plt.subplot(2, 3, 5)
customer_monthly = df.pivot_table(values="sales", index="customer_type", 
                                   columns="month_num", aggfunc="sum")
customer_monthly.plot(kind="bar", stacked=True, ax=ax5)
ax5.set_title("新客vs老客销售对比", fontsize=14, fontweight="bold")
ax5.legend(["7月", "8月", "9月"])
plt.setp(ax5.xaxis.get_majorticklabels(), rotation=0)

# 6. 客单价趋势
ax6 = plt.subplot(2, 3, 6)
avg_price = df.groupby("month_num").apply(lambda x: x["sales"].sum() / x["order_id"].nunique())
ax6.plot(avg_price.index, avg_price.values, marker="s", linewidth=3, 
         markersize=10, color="orange")
ax6.set_title("月度客单价趋势", fontsize=14, fontweight="bold")
ax6.set_xlabel("月份")
ax6.set_ylabel("客单价")
ax6.set_xticks([7, 8, 9], ["7月", "8月", "9月"])
ax6.grid(True, alpha=0.3)

plt.tight_layout(rect=[0, 0, 1, 0.96])
plt.savefig("sales_analysis_dashboard.png", dpi=150, bbox_inches="tight")
print("图表已保存为 sales_analysis_dashboard.png")
plt.show()`,
        tags: ['数据分析', '业务分析', '分析方法', '数据处理', '数据可视化']
      },
      {
        id: 'task-1-4',
        title: '数据透视表高级应用',
        description: '使用切片器、计算字段、时间表等高级功能创建交互式分析报表。',
        learningObjectives: [
          '掌握切片器和时间表的使用',
          '学会创建计算字段和计算项',
          '掌握值显示方式设置',
          '学会创建交互式报表'
        ],
        prerequisites: [
          '数据透视表基础',
          'Excel函数基础'
        ],
        commonMistakes: [
          '切片器没有连接到所有数据透视表',
          '计算字段公式错误',
          '值显示方式使用不当'
        ],
        extensions: [
          '思考：如何用数据透视表创建漏斗图？',
          '尝试创建直方图和时间线'
        ],
        steps: [
          '创建综合数据透视表，添加切片器',
          '添加计算字段计算客单价',
          '使用值显示方式查看占比变化',
          '创建Top N筛选'
        ],
        solution: `【Excel操作步骤】

1. 创建综合数据透视表：
   - 选择数据 → 插入 → 数据透视表
   - 行：产品类别
   - 列：日期（按月分组）
   - 值：销售额（求和）、数量（求和）

2. 添加切片器：
   - 选中数据透视表 → 数据透视表分析 → 插入切片器
   - 勾选"地区"、"客户类型"、"支付方式" → 确定
   - 拖动调整切片器位置和大小

3. 添加计算字段：
   - 数据透视表分析 → 字段、项目和集 → 计算字段
   - 名称：客单价
   - 公式：=销售额/订单数
   - 点击添加

4. 值显示方式：
   - 点击销售额字段下拉箭头 → 值显示方式 → 列汇总的百分比
   - 可以快速看到各月占比变化

5. 多表联动：
   - 创建第二个数据透视表（如地区分析）
   - 选中切片器 → 切片器选项 → 报表连接 → 勾选需要联动的数据透视表

6. Top 10筛选：
   - 点击产品类别行标签下拉箭头 → 值筛选 → 前10项
   - 选择：按销售额降序排列Top 10

7. 数据透视表布局：
   - 设计 → 报表布局 → 选择"以大纲形式显示"或"以压缩形式显示"

【Python自动化交互式分析】
import pandas as pd
import numpy as np
from ipywidgets import interact, Dropdown

# 加载数据
df = pd.read_csv("sales_data_cleaned.csv")
df["date"] = pd.to_datetime(df["date"])
df["month"] = df["date"].dt.month_name()
df["month_num"] = df["date"].dt.month

def sales_analysis(region="全部", customer_type="全部", payment_method="全部"):
    # 筛选数据
    data = df.copy()
    if region != "全部":
        data = data[data["region"] == region]
    if customer_type != "全部":
        data = data[data["customer_type"] == customer_type]
    if payment_method != "全部":
        data = data[data["payment_method"] == payment_method]
    
    print("=" * 60)
    print("交互式销售分析")
    print(f"筛选条件: 地区={region}, 客户类型={customer_type}, 支付方式={payment_method}")
    print("=" * 60)
    
    # 1. 总体指标
    total_sales = data["sales"].sum()
    total_orders = data["order_id"].nunique()
    avg_price = total_sales / total_orders if total_orders > 0 else 0
    print(f"\\n总体指标:")
    print(f"  总销售额: ¥{total_sales:,.2f}")
    print(f"  总订单数: {total_orders:,.0f}")
    print(f"  平均客单价: ¥{avg_price:,.2f}")
    
    # 2. 月度趋势
    print("\\n月度趋势:")
    monthly = data.groupby("month_num")["sales"].sum().reindex([7, 8, 9])
    print(monthly.to_string())
    
    # 3. 产品类别
    print("\\n产品类别Top 5:")
    category = data.groupby("product_category")["sales"].sum().sort_values(ascending=False).head(5)
    print(category.to_string())
    
    return data

# 创建交互式控件（如果在Jupyter环境中）
regions = ["全部"] + sorted(df["region"].unique().tolist())
customer_types = ["全部"] + sorted(df["customer_type"].unique().tolist())
payment_methods = ["全部"] + sorted(df["payment_method"].unique().tolist())

print("创建交互式分析完成！")
print("在Jupyter Notebook中可以使用interact创建动态筛选界面。")
print("\\n当前数据预览:")
sales_analysis()`,
        tags: ['数据分析', '业务分析', '分析方法', '数据处理']
      },
      {
        id: 'task-1-5',
        title: '综合分析报告与Dashboard',
        description: '整合分析结果，撰写完整的业务分析报告并创建Excel Dashboard。',
        learningObjectives: [
          '掌握数据分析报告撰写结构',
          '学会用数据讲述业务故事',
          '掌握Excel Dashboard设计技巧',
          '学会创建自动更新的分析报告'
        ],
        prerequisites: [
          '已完成前面所有分析任务',
          '理解业务问题和目标',
          'Excel图表和数据透视表基础'
        ],
        commonMistakes: [
          '报告只有数据没有洞察和建议',
          'Dashboard过于复杂，用户不知道看什么',
          '没有使用数据验证，更新数据源后图表出错'
        ],
        extensions: [
          '思考：如何让你的报告更有说服力？',
          '尝试使用Power BI创建更高级的交互式Dashboard'
        ],
        steps: [
          '梳理Q3销售的关键发现：下滑的主要原因、关键驱动因素、高风险领域',
          '按照"背景-发现-分析-建议"结构撰写分析报告',
          '创建Excel Dashboard新工作表，设计专业的KPI展示区域',
          '使用公式或数据透视表从原始数据自动提取关键指标到Dashboard',
          '将之前创建的图表复制到Dashboard，布局要美观、重点突出',
          '使用条件格式对KPI指标进行颜色编码（绿色=好，红色=需要关注）',
          '添加切片器到Dashboard，让用户可以自由筛选查看不同维度的数据',
          '确保Dashboard数据源可以一键更新，图表和指标自动刷新',
          '对报告进行最后的Review，确保逻辑清晰、数据准确、建议可行'
        ],
        solution: `【Excel Dashboard设计步骤】

1. Dashboard布局设计：
   - 新建工作表，命名为"Sales Dashboard"
   - 顶部区域：KPI卡片（总销售额、订单数、客单价、完成率）
   - 中间区域：主要图表（趋势图、类别占比、地区对比）
   - 底部区域：详细数据或辅助图表
   - 右侧区域：切片器

2. KPI卡片设计：
   - 使用公式从原始数据提取：
     =SUM(清洗后数据!E:E)   (总销售额)
     =COUNT(清洗后数据!A:A)  (订单数)
     =KPI1/KPI2              (客单价)
   - 使用条件格式：低于目标值显示红色，高于显示绿色

3. 图表放置：
   - 复制前面创建的图表到Dashboard
   - 调整大小和位置，保持对齐
   - 统一配色方案

4. 动态更新设置：
   - 选中图表数据系列 → 右键 → 选择数据
   - 确保数据范围使用动态命名范围或表格
   - 使用OFFSET或INDEX公式创建动态范围

5. 添加切片器：
   - 确保数据透视表和Dashboard在同一工作簿
   - 复制切片器到Dashboard

【完整分析报告示例】

# Q3销售数据分析报告

## 一、分析背景
经理发现Q3销售出现下滑趋势，7月和9月表现不理想，8月虽有回升但整体仍需关注。

## 二、关键发现

### 2.1 销售趋势
- 7月销售额：¥85万，8月：¥120万，9月：¥92万
- 整体Q3销售呈现"低-高-低"的波动趋势
- 8月峰值主要来自促销活动拉动

### 2.2 产品分析
- 产品类别A销售下滑最严重，7-9月下降28%
- 产品类别B保持稳定增长，是Q3亮点
- 产品类别C占比从25%降至18%，需要重点关注

### 2.3 客户分析
- 新客贡献从45%下降至38%，老客保持稳定
- 新客获取能力下降是销售下滑的主要原因之一

### 2.4 区域分析
- 华东地区表现最好，保持增长
- 西南地区下滑35%，是重灾区

## 三、原因分析
1. 新客获取：营销活动ROI下降，新客成本上升
2. 产品结构：核心产品增长乏力，新产品未达预期
3. 区域差异：西南地区人员变动影响销售表现
4. 季节性：Q3是行业传统淡季，8月促销是特例

## 四、改进建议

### 短期建议（1个月内）
1. 针对西南地区：开展专项促销活动，支持区域团队
2. 针对新客获取：优化广告投放渠道，测试新的获客方式
3. 针对产品A：开展清库存促销，为新产品让路

### 中期建议（1-3个月）
1. 优化产品结构，重点培育有潜力的产品B
2. 建立销售预警机制，及时发现下滑趋势
3. 建立区域销售标杆机制，推广华东地区经验

## 五、后续跟踪
- 每周跟踪新客获取数据
- 每月评估西南地区改进效果
- 每季度回顾产品结构优化进度

【Python报告生成代码】
import pandas as pd
import datetime

df = pd.read_csv("sales_data_cleaned.csv")
df["date"] = pd.to_datetime(df["date"])
df["month"] = df["date"].dt.month

# 计算关键指标
total_sales = df["sales"].sum()
july_sales = df[df["month"] == 7]["sales"].sum()
aug_sales = df[df["month"] == 8]["sales"].sum()
sept_sales = df[df["month"] == 9]["sales"].sum()

top_category = df.groupby("product_category")["sales"].sum().sort_values(ascending=False).index[0]

# 生成报告
report = f"""============================================================
                    Q3销售数据分析报告
============================================================

生成时间: {datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

一、整体业绩
------------------------------------------------------------
总销售额: ¥{total_sales:,.2f}
7月: ¥{july_sales:,.2f}
8月: ¥{aug_sales:,.2f}
9月: ¥{sept_sales:,.2f}

二、核心发现
------------------------------------------------------------
1. 销售趋势：8月为Q3峰值，9月出现下滑
2. 最佳产品：{top_category}
3. 新客占比：待分析（建议补充）

三、建议措施
------------------------------------------------------------
1. 针对9月下滑进行深入原因分析
2. 优化Q4营销活动，避免类似下滑
3. 重点推广高增长产品类别

============================================================

详细分析请查看Excel Dashboard文件。
"""

print(report)

# 保存报告
with open("sales_analysis_report.txt", "w", encoding="utf-8") as f:
    f.write(report)

print("\\n报告已保存为 sales_analysis_report.txt")`,
        tags: ['数据分析', '业务分析', '分析方法', '分析工具', '业务理解', '数据报告', '实战项目']
      }
    ]
  },
  {
    id: 'project-2',
    title: '用户行为数据分析',
    description: '你是一家SaaS公司的产品经理，需要分析用户在平台上的行为模式，优化产品功能和提升用户活跃度。\n\n【数据集说明】\n字段：用户ID、时间戳、页面/功能、操作类型、停留时长、设备信息、来源渠道、是否转化\n数据量：10,000+条记录，覆盖30天\n真实用户行为特征：工作日vs周末差异明显、新老用户行为差异、存在典型流失路径',
    difficulty: 2,
    category: 'Python分析',
    estimatedTime: '4-5小时',
    datasetUrl: 'https://raw.githubusercontent.com/injtheo/data-analysis-learning/main/datasets/user_behavior_saas.csv',
    tasks: [
      {
        id: 'task-2-1',
        title: '数据探索与用户行为概览',
        description: '加载并探索用户行为数据，理解数据结构和基本特征。',
        learningObjectives: [
          '掌握用户行为数据探索方法',
          '学会使用EDA技术分析行为数据',
          '理解用户行为数据特征',
          '学会识别数据质量问题'
        ],
        prerequisites: [
          'Python数据分析基础',
          'Pandas数据处理',
          '数据可视化基础'
        ],
        commonMistakes: [
          '忽略异常值对分析的影响',
          '不做数据清洗直接分析',
          '只看整体不看细分群体差异'
        ],
        extensions: [
          '思考：如何判断用户是真人还是机器人？',
          '如果数据量扩大10倍，如何优化代码性能？'
        ],
        steps: [
          '加载用户行为数据，查看数据结构和字段含义',
          '检查数据质量：缺失值、异常值、重复记录',
          '统计基本指标：用户数、行为数、活跃天数',
          '分析用户活跃度分布：识别高频vs低频用户',
          '进行时间维度分析：按小时、按天、按周的行为模式',
          '分析设备和渠道分布：识别主要流量来源',
          '可视化探索：行为类型分布和热门页面/功能',
          '数据清洗和预处理，准备后续分析'
        ],
        solution: `# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 1. 加载数据
print('='*60)
print('用户行为数据分析')
print('='*60)

df = pd.read_csv('user_behavior_saas.csv')
print(f'数据形状: {df.shape[0]} 行, {df.shape[1]} 列')

print('\\n数据预览:')
print(df.head())

# 2. 数据质量检查
print('\\n数据质量检查:')
print('缺失值统计:')
print(df.isnull().sum())

print('\\n重复记录数:', df.duplicated().sum())

# 3. 基本统计
print('\\n基本统计指标:')
print(df.describe(include='all'))

# 4. 用户规模统计
print('用户数:', df['user_id'].nunique())
print('行为数:', len(df))
print('时间范围:', df['timestamp'].min(), '到', df['timestamp'].max())

# 5. 用户活跃度分布
user_activity = df.groupby('user_id').size().reset_index(name='action_count')
print('\\n用户活跃度统计:')
print(user_activity['action_count'].describe())

# 6. 时间分析
print('\\n行为类型分布:')
print(df['action_type'].value_counts())

print('\\n页面/功能Top 10:')
print(df['page'].value_counts().head(10))

# 7. 可视化探索
fig, axes = plt.subplots(2, 2, figsize=(16, 12))

# 7.1 行为类型分布
axes[0, 0].pie(df['action_type'].value_counts().values, 
                  labels=df['action_type'].value_counts().index, 
                  autopct='%1.1f%%')
axes[0, 0].set_title('行为类型分布')

# 7.2 用户活跃度分布
user_activity['action_category'] = pd.cut(user_activity['action_count'], 
                                           bins=[0, 5, 20, 50, np.inf],
                                           labels=['极低(<5)', '低(5-20)', '中(20-50)', '高(>50)'])
axes[0, 1].bar(user_activity['action_category'].value_counts().index, 
                 user_activity['action_category'].value_counts().values)
axes[0, 1].set_title('用户活跃度分布')
axes[0, 1].tick_params(axis='x', rotation=45)

# 7.3 设备分布
device_counts = df['device'].value_counts()
axes[1, 0].bar(device_counts.index, device_counts.values)
axes[1, 0].set_title('设备分布')

# 7.4 渠道分布
channel_counts = df['channel'].value_counts()
axes[1, 1].bar(channel_counts.index, channel_counts.values)
axes[1, 1].set_title('渠道分布')

plt.tight_layout()
plt.savefig('user_behavior_eda.png', dpi=150)
print('\\nEDA图表已保存为 user_behavior_eda.png')`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选']
      },
      {
        id: 'task-2-2',
        title: '用户路径分析与桑基图',
        description: '分析用户行为路径，使用桑基图可视化用户流动。',
        learningObjectives: [
          '掌握用户路径分析方法',
          '学会构建用户行为序列',
          '掌握桑基图可视化技术',
          '理解路径优化机会'
        ],
        prerequisites: [
          '序列数据分析',
          '数据可视化',
          '用户行为分析基础'
        ],
        commonMistakes: [
          '过度分析导致性能问题',
          '路径定义不合理',
          '不考虑用户分群'
        ],
        extensions: [
          '思考：如何识别最优和最差的用户路径？',
          '如何预测用户下一步会去哪里？'
        ],
        steps: [
          '对数据按用户和时间排序，构建用户行为序列',
          '定义关键路径节点，构建用户旅程',
          '统计Top 10常见用户路径',
          '分析转化路径与流失路径对比',
          '使用Plotly绘制交互式桑基图可视化用户流动',
          '按新老用户分群对比路径差异',
          '按渠道分组对比不同来源用户的路径差异',
          '识别路径优化机会点'
        ],
        solution: `# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import plotly.graph_objects as go
from collections import defaultdict

# 1. 加载数据并排序
df = pd.read_csv('user_behavior_saas.csv')
df['timestamp'] = pd.to_datetime(df['timestamp'])
df = df.sort_values(['user_id', 'timestamp'])

print('='*60)
print('用户路径分析')
print('='*60)

# 2. 构建用户行为序列
user_paths = df.groupby('user_id')['page'].apply(list).reset_index()
user_paths.columns = ['user_id', 'path_list']
user_paths['path_str'] = user_paths['path_list'].apply(lambda x: ' -> '.join(x))

# 3. Top路径统计
print('\\nTop 10 用户路径:')
top_paths = user_paths['path_str'].value_counts().head(10)
for i, (path, count) in enumerate(top_paths.items(), 1):
    print(f'{i}. {path}: {count}次')

# 4. 桑基图数据准备
print('\\n准备桑基图数据...')
all_pages = df['page'].unique()
page_to_idx = {page: i for i, page in enumerate(all_pages)}
idx_to_page = {i: page for i, page in enumerate(all_pages)}

# 统计页面过渡
transitions = defaultdict(int)
for path_list in user_paths['path_list']:
    for i in range(len(path_list)-1):
        source = path_list[i]
        target = path_list[i+1]
        transitions[(source, target)] += 1

# 5. 构建桑基图
source_indices = []
target_indices = []
values = []
for (source, target), count in transitions.items():
    if count >= 5:  # 过滤低频过渡
        source_indices.append(page_to_idx[source])
        target_indices.append(page_to_idx[target])
        values.append(count)

# 6. 绘制桑基图
fig = go.Figure(data=[go.Sankey(
    node=dict(
        pad=15,
        thickness=20,
        line=dict(color='black', width=0.5),
        label=list(page_to_idx.keys()),
    ),
    link=dict(
        source=source_indices,
        target=target_indices,
        value=values,
    ))])

fig.update_layout(title_text='用户行为路径桑基图', font_size=12)
fig.write_html('user_journey_sankey.html')
print('\\n桑基图已保存为 user_journey_sankey.html')

# 7. 转化与流失路径分析
print('\\n转化路径分析:')
converted_users = df[df['is_converted'] == True]['user_id'].unique()
converted_paths = user_paths[user_paths['user_id'].isin(converted_users)]
print('转化用户数:', len(converted_paths))
print('转化用户Top 5路径:')
print(converted_paths['path_str'].value_counts().head())`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选', '图表制作', '数据分析', '数据可视化']
      },
      {
        id: 'task-2-3',
        title: '转化漏斗与A/B测试分析',
        description: '构建用户转化漏斗，进行对比分析。',
        learningObjectives: [
          '掌握漏斗分析方法',
          '学会多维度漏斗分析',
          '理解转化率计算',
          '优化机会识别'
        ],
        prerequisites: [
          '转化漏斗定义',
          '统计分析基础',
          'A/B测试概念'
        ],
        commonMistakes: [
          '漏斗阶段定义不合理',
          '不考虑样本量',
          '忽略细分群体'
        ],
        extensions: [
          '思考：如何计算漏斗各阶段的优化潜力？',
          '如何预测干预后的转化率提升？'
        ],
        steps: [
          '定义用户转化漏斗阶段：访问 -> 注册 -> 激活 -> 留存 -> 付费',
          '计算各阶段用户数和转化率',
          '使用Plotly创建交互式漏斗图',
          '按新老用户分组对比漏斗差异',
          '按设备类型（手机/平板/电脑）分组对比',
          '按来源渠道分组对比，识别优质渠道',
          '计算流失率和改进空间',
          '识别漏斗优化优先级排序'
        ],
        solution: `# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np
import plotly.graph_objects as go
import plotly.express as px
import matplotlib.pyplot as plt

df = pd.read_csv('user_behavior_saas.csv')
df['timestamp'] = pd.to_datetime(df['timestamp'])

print('='*60)
print('转化漏斗分析')
print('='*60)

# 1. 定义转化漏斗
funnel_stages = ['首页', '产品页', '注册页', '注册成功', '首次使用', '付费']

# 2. 计算各阶段用户数
stage_users = {}
for stage in funnel_stages:
    stage_users[stage] = df[df['page'] == stage]['user_id'].nunique()

print('\\n转化漏斗数据:')
for stage, count in stage_users.items():
    print(f'{stage}: {count} 用户')

# 3. 计算转化率
print('\\n阶段转化率:')
conversion_rates = {}
for i in range(1, len(funnel_stages)):
    prev_stage = funnel_stages[i-1]
    curr_stage = funnel_stages[i]
    rate = stage_users[curr_stage] / stage_users[prev_stage] * 100
    conversion_rates[f'{prev_stage}->{curr_stage}'] = rate
    print(f'{prev_stage} -> {curr_stage}: {rate:.2f}%')

# 4. 绘制交互式漏斗图
fig = go.Figure(go.Funnel(
    y=list(stage_users.keys()),
    x=list(stage_users.values()),
    textinfo='value+percent initial',
    marker=dict(color=['#1f77b4', '#2ca02c', '#ff7f0e', '#d62728', '#9467bd', '#8c564b'],
)))

fig.update_layout(title_text='用户转化漏斗', title_x=0.5)
fig.write_html('conversion_funnel.html')
print('\\n漏斗图已保存为 conversion_funnel.html')

# 5. 分群对比
print('\\n分群对比分析:')

# 5.1 按设备类型
print('\\n按设备类型:')
device_types = df['device'].unique()
for device in device_types:
    device_data = df[df['device'] == device]
    device_users = device_data.groupby('page')['user_id'].nunique()
    print(f'\\n设备 {device}:')
    for stage in funnel_stages:
        if stage in device_users:
            print(f'  {stage}: {device_users[stage]}')

# 5.2 按渠道
print('\\n按渠道:')
channels = df['channel'].unique()
for channel in channels:
    channel_data = df[df['channel'] == channel]
    channel_users = channel_data.groupby('page')['user_id'].nunique()
    print(f'\\n渠道 {channel}:')
    for stage in funnel_stages:
        if stage in channel_users:
            print(f'  {stage}: {channel_users[stage]}')`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选', '数据分析']
      },
      {
        id: 'task-2-4',
        title: '用户分群画像构建',
        description: '基于用户行为特征构建用户分群画像。',
        learningObjectives: [
          '掌握用户分群方法',
          '学会用户画像构建',
          '理解用户分群应用',
          '掌握雷达图可视化'
        ],
        prerequisites: [
          '聚类分析基础',
          '特征工程',
          '用户行为分析'
        ],
        commonMistakes: [
          '特征选择不合理',
          '不验证分群效果',
          '分群无业务意义'
        ],
        extensions: [
          '思考：如何动态更新用户分群？',
          '如何将分群应用到推荐系统？'
        ],
        steps: [
          '构建用户行为特征：活跃度、转化率、使用深度',
          '基于行为进行用户分群：新手、探索型、成长型、核心型',
          '分析各分群特征并命名',
          '使用雷达图可视化分群特征对比',
          '构建用户分群画像报告',
          '提出分群运营策略建议'
        ],
        solution: `# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.graph_objects as go

df = pd.read_csv('user_behavior_saas.csv')
df['timestamp'] = pd.to_datetime(df['timestamp'])

print('='*60)
print('用户分群画像构建')
print('='*60)

# 1. 构建用户特征
print('\\n构建用户特征...')
user_features = df.groupby('user_id').agg({
    'timestamp': ['min', 'max', 'count'],
    'page': 'nunique',
    'action_type': 'nunique',
    'is_converted': 'max'
}).round(2)

# 特征命名
user_features.columns = ['first_time', 'last_time', 'total_actions', 'unique_pages', 'unique_actions', 'is_converted']
user_features['active_days'] = (user_features['last_time'] - user_features['first_time']).dt.days + 1
user_features['avg_daily_actions'] = user_features['total_actions'] / user_features['active_days']
user_features = user_features.round(2)

print('\\n用户特征预览:')
print(user_features.head())

# 2. K-Means分群
print('\\n执行用户分群...')
features_for_clustering = user_features[['total_actions', 'unique_pages', 'active_days', 'avg_daily_actions']]

# 标准化
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features_for_clustering)

# 肘部法则选K
inertias = []
K_range = range(2, 8)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(features_scaled)
    inertias.append(kmeans.inertia_)

plt.figure(figsize=(10, 6))
plt.plot(K_range, inertias, 'bo-')
plt.xlabel('聚类数K')
plt.ylabel('惯性')
plt.title('肘部法则')
plt.savefig('elbow_method.png', dpi=150)
plt.show()

# 使用K=4聚类
kmeans = KMeans(n_clusters=4, random_state=42)
user_features['cluster'] = kmeans.fit_predict(features_scaled)

# 3. 分群命名
cluster_names = {0: '探索型用户', 1: '活跃型用户', 2: '流失型用户', 3: '核心用户'}
user_features['segment'] = user_features['cluster'].map(cluster_names)

print('\\n用户分群结果:')
print(user_features['segment'].value_counts())

# 4. 分群画像分析
print('\\n分群特征分析:')
cluster_stats = user_features.groupby('segment').agg({
    'total_actions': 'mean',
    'unique_pages': 'mean',
    'active_days': 'mean',
    'avg_daily_actions': 'mean',
    'is_converted': 'mean'
}).round(2)
print(cluster_stats)

# 5. 雷达图可视化分群特征
print('\\n生成雷达图...')
# 归一化用于雷达图
cluster_normalized = cluster_stats.apply(lambda x: (x - x.min()) / (x.max() - x.min()), axis=0)
categories = cluster_normalized.columns.tolist()

fig = go.Figure()
for segment in cluster_normalized.index:
    fig.add_trace(go.Scatterpolar(
        r=cluster_normalized.loc[segment].tolist(),
        theta=categories,
        fill='toself',
        name=segment
    ))

fig.update_layout(
    polar=dict(radialaxis=dict(visible=True)),
    showlegend=True,
    title='用户分群特征对比'
)
fig.write_html('user_segment_radar.html')
print('雷达图已保存为 user_segment_radar.html')`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选']
      },
      {
        id: 'task-2-5',
        title: '产品推荐与关联分析',
        description: '基于用户行为进行关联规则挖掘和产品推荐。',
        learningObjectives: [
          '掌握关联规则挖掘',
          '学会产品推荐方法',
          '理解用户行为模式'
        ],
        prerequisites: [
          '关联分析基础',
          '数据挖掘基础',
          '推荐系统基础'
        ],
        commonMistakes: [
          '支持度设置不合理',
          '忽略业务场景',
          '不验证推荐效果'
        ],
        extensions: [
          '思考：如何实时更新推荐结果？',
          '如何冷启动新用户推荐？'
        ],
        steps: [
          '数据准备：构建用户-物品交互矩阵',
          '使用Apriori算法挖掘频繁项集',
          '计算关联规则：支持度、置信度、提升度',
          '筛选有意义的关联规则',
          '构建基于规则的产品推荐系统',
          '分析推荐结果并提出产品优化建议'
        ],
        solution: `# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np
from mlxtend.frequent_patterns import apriori, association_rules
import matplotlib.pyplot as plt

df = pd.read_csv('user_behavior_saas.csv')

print('='*60)
print('产品关联分析与推荐')
print('='*60)

# 1. 数据准备：构建用户-物品矩阵
print('\\n构建用户-物品矩阵...')
user_item_matrix = df.groupby(['user_id', 'page']).size().unstack(fill_value=0)
user_item_binary = user_item_matrix.applymap(lambda x: 1 if x > 0 else 0)

# 2. 挖掘频繁项集
print('\\n挖掘频繁项集...')
frequent_itemsets = apriori(user_item_binary, min_support=0.05, use_colnames=True)
print(f'找到 {len(frequent_itemsets)} 个频繁项集')
print(frequent_itemsets.sort_values('support', ascending=False).head(10))

# 3. 挖掘关联规则
print('\\n挖掘关联规则...')
rules = association_rules(frequent_itemsets, metric='confidence', min_threshold=0.3)
rules = rules.sort_values('lift', ascending=False)
print(f'找到 {len(rules)} 条关联规则')
print('\\nTop 10 规则（按提升度排序）:')
print(rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']].head(10))

# 4. 推荐示例
print('\\n示例推荐规则:')
for i in range(5):
    rule = rules.iloc[i]
    print(f"{i+1}. 如果用户访问了 {list(rule['antecedents'])}，则很可能访问 {list(rule['consequents'])} (置信度: {rule['confidence']:.2f}, 提升度: {rule['lift']:.2f})")

# 5. 可视化规则
print('\\n生成关联规则可视化...')
plt.figure(figsize=(12, 8))
scatter = plt.scatter(rules['support'], rules['confidence'], c=rules['lift'], cmap='viridis', s=100)
plt.xlabel('支持度')
plt.ylabel('置信度')
plt.title('关联规则：支持度 vs 置信度 vs 提升度')
plt.colorbar(scatter, label='提升度')
plt.savefig('association_rules.png', dpi=150)
plt.show()
print('关联规则图已保存为 association_rules.png')`,
        tags: ['Excel', '数据处理', '表格操作', '数据筛选', '数据分析']
      }
    ]
  },
  {
    id: 'project-3',
    title: '客户分群分析',
    description: '使用RFM模型和聚类算法对客户进行分群分析。',
    difficulty: 3,
    category: 'Python分析',
    estimatedTime: '4-5小时',
    tasks: [
      {
        id: 'task-3-1',
        title: 'RFM特征构建',
        description: '根据客户交易数据构建RFM特征。',
        steps: [
          '计算每位客户的最近一次消费时间（R）',
          '计算每位客户的消费频率（F）',
          '计算每位客户的消费金额（M）',
          '合并RFM特征'
        ],
        solution: '# Python代码示例\nimport pandas as pd\nfrom datetime import datetime\n\n# 计算RFM\nsnapshot_date = df["date"].max() + pd.Timedelta(days=1)\n\nrfm = df.groupby("customer_id").agg({\n    "date": lambda x: (snapshot_date - x.max()).days,  # Recency\n    "order_id": "nunique",  # Frequency\n    "amount": "sum"  # Monetary\n}).reset_index()\n\nrfm.columns = ["customer_id", "recency", "frequency", "monetary"]\nprint(rfm.head())',
        tags: ['Python', '编程基础', '数据分析', '数据处理']
      },
      {
        id: 'task-3-2',
        title: 'RFM评分与分群',
        description: '对RFM指标进行评分，并进行客户分群。',
        steps: [
          '对RFM进行1-5分评分',
          '基于评分进行客户分群',
          '分析各群体特征',
          '制定营销策略'
        ],
        solution: '# Python代码示例\n# RFM评分（使用四分位数）\nrfm["R_score"] = pd.qcut(rfm["recency"], q=5, labels=[5, 4, 3, 2, 1])\nrfm["F_score"] = pd.qcut(rfm["frequency"].rank(method="first"), q=5, labels=[1, 2, 3, 4, 5])\nrfm["M_score"] = pd.qcut(rfm["monetary"].rank(method="first"), q=5, labels=[1, 2, 3, 4, 5])\n\n# 客户分群\ndef segment_customer(row):\n    if row["R_score"] >= 4 and row["F_score"] >= 4 and row["M_score"] >= 4:\n        return "高价值客户"\n    elif row["R_score"] >= 3 and row["F_score"] >= 3:\n        return "潜力客户"\n    elif row["R_score"] <= 2:\n        return "流失风险客户"\n    else:\n        return "一般客户"\n\nrfm["segment"] = rfm.apply(segment_customer, axis=1)\nprint(rfm["segment"].value_counts())',
        tags: ['Python', '编程基础', '数据分析']
      },
      {
        id: 'task-3-3',
        title: 'K-Means聚类分群',
        description: '使用K-Means算法进行更精细的客户分群。',
        steps: [
          '对RFM特征进行标准化',
          '确定最优K值（肘部法则）',
          '执行K-Means聚类',
          '分析各簇特征并命名'
        ],
        solution: '# Python代码示例\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\n# 标准化\nscaler = StandardScaler()\nrfm_scaled = scaler.fit_transform(rfm[["recency", "frequency", "monetary"]])\n\n# 肘部法则确定K值\ninertias = []\nK = range(2, 10)\nfor k in K:\n    kmeans = KMeans(n_clusters=k, random_state=42)\n    kmeans.fit(rfm_scaled)\n    inertias.append(kmeans.inertia_)\n\nplt.plot(K, inertias, "bo-")\nplt.xlabel("K值")\nplt.ylabel("惯性")\nplt.title("肘部法则")\nplt.show()\n\n# K-Means聚类\nkmeans = KMeans(n_clusters=4, random_state=42)\nrfm["cluster"] = kmeans.fit_predict(rfm_scaled)\n\n# 各簇特征\nprint(rfm.groupby("cluster")[["recency", "frequency", "monetary"]].mean())',
        tags: ['Python', '编程基础', '数据分析', '数据建模']
      }
    ]
  },
  {
    id: 'project-4',
    title: '销售预测分析',
    description: '使用时间序列分析方法预测未来销售趋势。',
    difficulty: 3,
    category: 'Python分析',
    estimatedTime: '5-6小时',
    businessContext: '你是一家连锁超市的数据分析师，需要预测未来30天的日销售额，帮助公司优化库存管理和人员排班。数据集包含2年的历史销售数据，包括日期、销售额、订单量、促销标记和节假日标记。',
    tasks: [
      {
        id: 'task-4-1',
        title: '时间序列数据准备',
        description: '对销售数据进行时间序列格式处理。',
        steps: [
          '按时间聚合销售数据',
          '处理缺失的时间点',
          '设置时间索引',
          '分解时间序列成分'
        ],
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 按日聚合\ndaily_sales = df.groupby("date")["sales"].sum().reset_index()\ndaily_sales = daily_sales.set_index("date")\n\n# 填充缺失日期\nidx = pd.date_range(daily_sales.index.min(), daily_sales.index.max())\ndaily_sales = daily_sales.reindex(idx, fill_value=0)\ndaily_sales.index.name = "date"\n\nprint(f"数据范围: {daily_sales.index.min()} 到 {daily_sales.index.max()}")\nprint(f"总天数: {len(daily_sales)}")\nprint(daily_sales.head(10))',
        tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '数据处理']
      },
      {
        id: 'task-4-2',
        title: '趋势与季节性分析',
        description: '分析销售数据中的趋势和季节性模式。',
        steps: [
          '计算移动平均线',
          '分解时间序列（趋势、季节、残差）',
          '分析周季节性和月季节性',
          '识别异常点'
        ],
        solution: '# Python代码示例\nfrom statsmodels.tsa.seasonal import seasonal_decompose\n\n# 移动平均\ndaily_sales["MA7"] = daily_sales["sales"].rolling(window=7).mean()\ndaily_sales["MA30"] = daily_sales["sales"].rolling(window=30).mean()\n\n# 时间序列分解\ndecomposition = seasonal_decompose(daily_sales["sales"], model="additive", period=7)\n\n# 提取成分\ntrend = decomposition.trend\nseasonal = decomposition.seasonal\nresidual = decomposition.resid\n\nprint("趋势成分（最近7天）:", trend.tail(7))\nprint("季节成分（最近7天）:", seasonal.tail(7))',
        tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '数据处理', '数据分析']
      },
      {
        id: 'task-4-3',
        title: '预测模型构建',
        description: '使用ARIMA或Prophet模型进行销售预测。',
        steps: [
          '划分训练集和测试集',
          '训练ARIMA模型',
          '进行未来7天的预测',
          '评估预测准确性'
        ],
        solution: '# Python代码示例\nfrom statsmodels.tsa.arima.model import ARIMA\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error\n\n# 划分数据集\ntrain_size = int(len(daily_sales) * 0.8)\ntrain = daily_sales["sales"][:train_size]\ntest = daily_sales["sales"][train_size:]\n\n# 训练ARIMA模型\nmodel = ARIMA(train, order=(5, 1, 0))\nmodel_fit = model.fit()\n\n# 预测\npredictions = model_fit.forecast(steps=len(test))\nmae = mean_absolute_error(test, predictions)\nrmse = np.sqrt(mean_squared_error(test, predictions))\n\nprint(f"MAE: {mae:.2f}")\nprint(f"RMSE: {rmse:.2f}")',
        tags: ['数据可视化', '图表设计', '可视化原则', '数据建模']
      }
    ]
  },
  {
    id: 'project-5',
    title: 'AB测试分析',
    description: '设计和分析A/B测试实验，评估产品改动的效果。',
    difficulty: 2,
    category: 'Python分析',
    estimatedTime: '4-5小时',
    businessContext: '你是一家电商平台的数据分析师，需要设计并分析A/B测试来评估产品改动（如新功能、UI优化、定价策略等）的效果。数据集包含实验数据（用户ID、实验组/对照组、转化标记），每组5000+用户。',
    tasks: [
      {
        id: 'task-5-1',
        title: 'A/B测试设计',
        description: '设计A/B测试实验方案，确定样本量和关键指标。',
        steps: [
          '确定实验假设和目标指标',
          '计算所需样本量',
          '设计实验分组',
          '确定实验周期'
        ],
        solution: '# Python代码示例\nfrom scipy import stats\nimport numpy as np\n\n# 假设条件\nbaseline_rate = 0.10  # 基准转化率\nmde = 0.02  # 最小可检测效应 (20%相对提升)\nalpha = 0.05  # 显著性水平\npower = 0.80  # 统计功效\n\n# 计算样本量\np1 = baseline_rate\np2 = baseline_rate * (1 + mde)\n\nz_alpha = stats.norm.ppf(1 - alpha/2)\nz_beta = stats.norm.ppf(power)\n\nn = ((z_alpha * np.sqrt(2 * p1 * (1-p1)) + \n      z_beta * np.sqrt(p1*(1-p1) + p2*(1-p2)))**2 / (p2-p1)**2)\n\nprint(f"每组所需样本量: {int(np.ceil(n))}")\nprint(f"总样本量: {int(np.ceil(n * 2))}")',
        tags: ['BI', '报表系统', '数据分析', 'KPI', '指标体系']
      },
      {
        id: 'task-5-2',
        title: '实验数据分析',
        description: '对A/B测试结果进行统计分析。',
        steps: [
          '加载实验数据',
          '计算各组关键指标',
          '进行统计显著性检验',
          '计算置信区间'
        ],
        solution: '# Python代码示例\nfrom scipy.stats import chi2_contingency\nimport numpy as np\n\n# 实验数据\n# 对照组\ncontrol_views = 10000\ncontrol_conversions = 500\n\n# 实验组\nexperiment_views = 10000\nexperiment_conversions = 600\n\n# 计算转化率\ncontrol_rate = control_conversions / control_views\nexperiment_rate = experiment_conversions / experiment_views\n\nprint(f"对照组转化率: {control_rate:.4f} ({control_rate*100:.2f}%)")\nprint(f"实验组转化率: {experiment_rate:.4f} ({experiment_rate*100:.2f}%)")\nprint(f"相对提升: {(experiment_rate - control_rate) / control_rate * 100:.2f}%")\n\n# 卡方检验\ncontingency_table = [[control_conversions, control_views - control_conversions],\n                     [experiment_conversions, experiment_views - experiment_conversions]]\nchi2, p_value, dof, expected = chi2_contingency(contingency_table)\n\nprint(f"\\n卡方统计量: {chi2:.4f}")\nprint(f"p值: {p_value:.4f}")',
        tags: ['BI', '报表系统', '数据分析', '数据处理']
      },
      {
        id: 'task-5-3',
        title: '结果解读与建议',
        description: '解读A/B测试结果并给出产品建议。',
        steps: [
          '判断统计显著性',
          '分析置信区间',
          '评估实际业务价值',
          '提出产品优化建议'
        ],
        solution: '# Python代码示例\nimport numpy as np\nfrom scipy import stats\n\n# 置信区间计算\np1 = experiment_conversions / experiment_views\np2 = control_conversions / control_views\nse = np.sqrt(p1*(1-p1)/experiment_views + p2*(1-p2)/control_views)\nz = stats.norm.ppf(0.975)\n\nci_lower = (p1 - p2) - z * se\nci_upper = (p1 - p2) + z * se\n\nprint("=" * 50)\nprint("A/B测试结果分析报告")\nprint("=" * 50)\nprint(f"实验组转化率: {p1*100:.2f}%")\nprint(f"对照组转化率: {p2*100:.2f}%")\nprint(f"绝对提升: {(p1-p2)*100:.2f}%")\nprint(f"相对提升: {(p1-p2)/p2*100:.2f}%")\nprint(f"95%置信区间: [{(ci_lower)*100:.2f}%, {(ci_upper)*100:.2f}%]")\nprint(f"p值: {p_value:.4f}")\n\nif p_value < 0.05 and ci_lower > 0:\n    print("\\n结论: 实验组显著优于对照组，建议上线新功能。")\nelse:\n    print("\\n结论: 未观察到显著差异，建议继续测试或调整方案。")',
        tags: ['BI', '报表系统', '数据分析']
      }
    ]
  },
  {
    id: 'project-6',
    title: 'SQL数据分析',
    description: '使用SQL进行复杂的数据查询和分析。',
    difficulty: 2,
    category: 'SQL分析',
    estimatedTime: '4-5小时',
    businessContext: '你是一家互联网公司的数据分析师，需要从数据仓库中提取和分析数据。数据集包括电商数据库（用户表、订单表、产品表），规模10万用户、100万订单。你需要使用SQL解决各种复杂的业务问题。',
    tasks: [
      {
        id: 'task-6-1',
        title: '基础查询分析',
        description: '使用SQL进行基础的数据查询和聚合分析。',
        steps: [
          '编写SELECT查询获取数据',
          '使用WHERE条件筛选',
          '使用聚合函数汇总',
          '使用GROUP BY分组'
        ],
        solution: '-- 基础查询分析\n-- 1. 查询每月销售额\nSELECT \n    DATE_FORMAT(order_date, "%Y-%m") as month,\n    COUNT(*) as order_count,\n    SUM(amount) as total_sales,\n    AVG(amount) as avg_order_value\nFROM orders\nWHERE order_date >= "2024-01-01"\nGROUP BY DATE_FORMAT(order_date, "%Y-%m")\nORDER BY month;\n\n-- 2. 按产品类别统计\nSELECT \n    p.category_name,\n    COUNT(DISTINCT o.customer_id) as customer_count,\n    SUM(o.amount) as total_sales\nFROM orders o\nJOIN products p ON o.product_id = p.product_id\nGROUP BY p.category_name\nHAVING total_sales > 10000\nORDER BY total_sales DESC;',
        tags: ['商务分析', '业务分析', '实战案例', '客户分析', '数据处理', '数据分析']
      },
      {
        id: 'task-6-2',
        title: '多表关联查询',
        description: '使用JOIN连接多个表进行复杂查询。',
        steps: [
          '理解表结构和关系',
          '编写INNER JOIN查询',
          '使用LEFT JOIN保留全部数据',
          '聚合多表关联结果'
        ],
        solution: '-- 多表关联查询\n-- 查询每个客户的订单详情和产品信息\nSELECT \n    c.customer_name,\n    c.city,\n    o.order_id,\n    o.order_date,\n    p.product_name,\n    p.category_name,\n    oi.quantity,\n    oi.price,\n    (oi.quantity * oi.price) as line_total\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id\nINNER JOIN order_items oi ON o.order_id = oi.order_id\nINNER JOIN products p ON oi.product_id = p.product_id\nWHERE o.order_date >= "2024-01-01"\nORDER BY c.customer_name, o.order_date;',
        tags: ['商务分析', '业务分析', '实战案例']
      },
      {
        id: 'task-6-3',
        title: '窗口函数分析',
        description: '使用SQL窗口函数进行高级分析。',
        steps: [
          '理解窗口函数概念',
          '使用ROW_NUMBER()排名',
          '使用LAG()/LEAD()计算变化',
          '使用聚合窗口函数'
        ],
        solution: '-- 窗口函数分析\n-- 1. 客户月度购买排名\nSELECT \n    customer_id,\n    DATE_FORMAT(order_date, "%Y-%m") as month,\n    SUM(amount) as monthly_sales,\n    ROW_NUMBER() OVER (PARTITION BY DATE_FORMAT(order_date, \"%Y-%m\") \n                        ORDER BY SUM(amount) DESC) as monthly_rank\nFROM orders\nGROUP BY customer_id, DATE_FORMAT(order_date, \"%Y-%m\")\nLIMIT 20;\n\n-- 2. 计算月环比增长\nWITH monthly_sales AS (\n    SELECT \n        DATE_FORMAT(order_date, \"%Y-%m\") as month,\n        SUM(amount) as sales\n    FROM orders\n    GROUP BY DATE_FORMAT(order_date, \"%Y-%m\")\n)\nSELECT \n    month,\n    sales,\n    LAG(sales) OVER (ORDER BY month) as prev_month_sales,\n    sales - LAG(sales) OVER (ORDER BY month) as growth_amount,\n    ROUND((sales - LAG(sales) OVER (ORDER BY month)) / \n          LAG(sales) OVER (ORDER BY month) * 100, 2) as growth_rate\nFROM monthly_sales\nORDER BY month;',
        tags: ['商务分析', '业务分析', '实战案例', '客户分析', '数据分析']
      }
    ]
  },
  {
    id: 'project-7',
    title: '数据可视化仪表板',
    description: '使用Python创建交互式数据可视化仪表板。',
    difficulty: 2,
    category: 'Python可视化',
    estimatedTime: '4-5小时',
    businessContext: '你是一家零售公司的数据分析师，需要为管理层设计销售监控仪表板。仪表板内容包括销售概览、趋势分析、品类分析、地域分析和用户分析等功能模块，使用Python的Plotly/Dash库创建交互式可视化。',
    tasks: [
      {
        id: 'task-7-1',
        title: '多图表布局设计',
        description: '设计仪表板的多图表布局。',
        steps: [
          '确定仪表板主题和内容',
          '设计图表布局',
          '设置统一的风格',
          '添加标题和说明'
        ],
        solution: '# Python代码示例\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport pandas as pd\n\n# 设置全局样式\nplt.style.use("seaborn-v0_8-whitegrid")\nsns.set_palette("husl")\n\n# 创建仪表板布局\nfig = plt.figure(figsize=(20, 12))\nfig.suptitle("销售数据分析仪表板", fontsize=24, fontweight="bold", y=1.02)\n\n# 创建子图布局\ngs = fig.add_gridspec(3, 3, hspace=0.3, wspace=0.3)\n\n# 1. KPI卡片区\nax1 = fig.add_subplot(gs[0, 0])\nax2 = fig.add_subplot(gs[0, 1])\nax3 = fig.add_subplot(gs[0, 2])\n\n# 2. 主图表区\nax4 = fig.add_subplot(gs[1, :2])\nax5 = fig.add_subplot(gs[1, 2])\n\n# 3. 底部图表区\nax6 = fig.add_subplot(gs[2, :])\n\nprint("仪表板布局设计完成！")\nprint("请继续添加具体图表内容。")',
        tags: ['统计学', '统计分析', '数据统计', '数据可视化']
      },
      {
        id: 'task-7-2',
        title: 'KPI指标卡片',
        description: '创建突出关键业务指标的KPI卡片。',
        steps: [
          '计算核心KPI指标',
          '设计KPI卡片样式',
          '添加趋势指示器',
          '设置颜色编码'
        ],
        solution: '# Python代码示例\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom matplotlib.patches import FancyBboxPatch\n\ndef create_kpi_card(ax, title, value, unit="", change=None):\n    # 卡片背景\n    ax.add_patch(FancyBboxPatch((0.1, 0.1), 0.8, 0.8, \n                                 boxstyle="round,pad=0.02\", \n                                 facecolor=\"white\", \n                                 edgecolor=\"gray\",\n                                 linewidth=2,\n                                 transform=ax.transAxes))\n    \n    # 标题\n    ax.text(0.5, 0.75, title, fontsize=12, ha="center", \n            va="center", transform=ax.transAxes, color="gray")\n    \n    # 数值\n    ax.text(0.5, 0.5, f"{value}{unit}", fontsize=24, ha="center\", \n            va="center", transform=ax.transAxes, fontweight="bold")\n    \n    # 变化指示\n    if change is not None:\n        color = "green" if change > 0 else "red"\n        symbol = "↑" if change > 0 else "↓"\n        ax.text(0.5, 0.25, f"{symbol} {abs(change):.1f}%", fontsize=12, \n                ha="center", va="center", transform=ax.transAxes, color=color)\n    \n    ax.set_xlim(0, 1)\n    ax.set_ylim(0, 1)\n    ax.axis("off")\n\n# 创建KPI卡片\nfig, axes = plt.subplots(1, 4, figsize=(16, 4))\ncreate_kpi_card(axes[0], "总销售额", "¥1,234,567", "", 15.2)\ncreate_kpi_card(axes[1], "订单数", "8,901", "笔", 8.5)\ncreate_kpi_card(axes[2], "客单价", "¥138.7", "", -2.3)\ncreate_kpi_card(axes[3], "转化率", "3.45", "%", 0.8)\n\nplt.tight_layout()\nplt.show()',
        tags: ['统计学', '统计分析', '数据统计', '实战项目']
      },
      {
        id: 'task-7-3',
        title: '交互式图表',
        description: '使用Plotly创建交互式图表。',
        steps: [
          '安装Plotly库',
          '创建交互式折线图',
          '创建交互式柱状图',
          '添加下拉筛选功能'
        ],
        solution: '# Python代码示例\nimport plotly.express as px\nimport plotly.graph_objects as go\nfrom plotly.subplots import make_subplots\nimport pandas as pd\n\n# 创建交互式仪表板\nfig = make_subplots(\n    rows=2, cols=2,\n    subplot_titles=(\n        "月度销售额趋势\", \n        \"产品类别占比\", \n        \"地区销售对比\", \n        \"Top 10 产品\"\n    ),\n    specs=[\n        [{\"type\": \"scatter\"}, {\"type\": \"pie\"}],\n        [{\"type\": \"bar\"}, {\"type\": \"bar\"}]\n    ]\n)\n\n# 1. 月度趋势\nfig.add_trace(\n    go.Scatter(x=monthly_sales.index, y=monthly_sales.values, \n               mode=\"lines+markers\", name=\"销售额\"),\n    row=1, col=1\n)\n\n# 2. 饼图\nfig.add_trace(\n    go.Pie(labels=category_sales.index, values=category_sales.values,\n           hole=0.4, name=\"销售占比\"),\n    row=1, col=2\n)\n\n# 3. 地区柱状图\nfig.add_trace(\n    go.Bar(x=region_sales.values, y=region_sales.index, \n           orientation=\"h\", name=\"地区销售\"),\n    row=2, col=1\n)\n\n# 更新布局\nfig.update_layout(\n    height=800,\n    width=1200,\n    showlegend=True,\n    title_text=\"销售数据分析仪表板\"\n)\n\nfig.show()',
        tags: ['统计学', '统计分析', '数据统计', '数据可视化']
      }
    ]
  },
  {
    id: 'project-8',
    title: '异常检测分析',
    description: '使用统计方法和机器学习进行异常交易检测。',
    difficulty: 3,
    category: 'Python分析',
    estimatedTime: '4-5小时',
    tasks: [
      {
        id: 'task-8-1',
        title: '统计异常检测',
        description: '使用统计方法识别异常交易。',
        steps: [
          '使用Z-score方法检测异常',
          '使用IQR方法检测异常',
          '可视化异常点',
          '分析异常特征'
        ],
        solution: '# Python代码示例\nimport numpy as np\nimport pandas as pd\n\n# Z-score方法\ndef detect_outliers_zscore(data, threshold=3):\n    z_scores = np.abs((data - data.mean()) / data.std())\n    return z_scores > threshold\n\n# IQR方法\ndef detect_outliers_iqr(data, multiplier=1.5):\n    Q1 = data.quantile(0.25)\n    Q3 = data.quantile(0.75)\n    IQR = Q3 - Q1\n    lower_bound = Q1 - multiplier * IQR\n    upper_bound = Q3 + multiplier * IQR\n    return (data < lower_bound) | (data > upper_bound)\n\n# 检测异常\ndf["z_score_outlier"] = detect_outliers_zscore(df["amount"])\ndf["iqr_outlier"] = detect_outliers_iqr(df["amount"])\n\nprint(f"Z-score异常数: {df[\"z_score_outlier\"].sum()}\")\nprint(f"IQR异常数: {df[\"iqr_outlier\"].sum()}\")\n\n# 异常交易详情\noutliers = df[df["z_score_outlier"]].sort_values("amount", ascending=False)\nprint("\\n异常交易:")\nprint(outliers[[\"transaction_id\", \"amount\", \"customer_id\", \"date\"]].head(10))',
        tags: ['机器学习', '算法', '模型', '数据分析']
      },
      {
        id: 'task-8-2',
        title: '机器学习异常检测',
        description: '使用Isolation Forest进行异常检测。',
        steps: [
          '准备特征数据',
          '训练Isolation Forest模型',
          '预测异常交易',
          '评估检测效果'
        ],
        solution: '# Python代码示例\nfrom sklearn.ensemble import IsolationForest\nfrom sklearn.preprocessing import StandardScaler\nimport pandas as pd\nimport numpy as np\n\n# 特征工程\nfeatures = ["amount", "quantity", "hour", "day_of_week"]\nX = df[features].copy()\n\n# 处理缺失值\nX = X.fillna(X.median())\n\n# 标准化\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n# 训练Isolation Forest\niso_forest = IsolationForest(\n    n_estimators=100,\n    contamination=0.01,  # 假设1%的数据是异常\n    random_state=42\n)\n\ndf["anomaly"] = iso_forest.fit_predict(X_scaled)\ndf["anomaly_score"] = iso_forest.decision_function(X_scaled)\n\n# 异常交易\nanomalies = df[df["anomaly"] == -1]\nprint(f"检测到的异常交易数: {len(anomalies)}\")\nprint(f"异常比例: {len(anomalies) / len(df) * 100:.2f}%\")\nprint("\\n异常交易详情:")\nprint(anomalies[[\"transaction_id\", \"amount\", \"anomaly_score\"]].head(10))',
        tags: ['机器学习', '算法', '模型', '数据建模']
      },
      {
        id: 'task-8-3',
        title: '异常分析报告',
        description: '对检测到的异常进行分析并生成报告。',
        steps: [
          '分析异常交易特征',
          '识别异常模式',
          '计算业务损失',
          '提出风控建议'
        ],
        solution: '# Python代码示例\nimport pandas as pd\n\nanomalies = df[df["anomaly"] == -1]\nprint("异常交易总数:", len(anomalies))\nprint("异常交易总金额:", anomalies["amount"].sum())\n\nsuspicious = anomalies.groupby("customer_id").size().sort_values(ascending=False)\nprint(suspicious.head(10))\n\nprint("风控建议:")\nprint("1. 对高频异常交易客户进行人工审核")\nprint("2. 建立实时风控规则")',
        tags: ['机器学习', '算法', '模型', '数据分析', '数据报告']
      }
    ]
  },
  {
    id: 'project-9',
    title: '用户留存分析',
    description: '使用Cohort Analysis分析用户留存情况。',
    difficulty: 2,
    category: 'Python分析',
    estimatedTime: '3-4小时',
    tasks: [
      {
        id: 'task-9-1',
        title: '用户分群（Cohort）构建',
        description: '按用户首次活跃时间进行Cohort分群。',
        steps: [
          '识别用户首次活跃日期',
          '按Cohort分组',
          '计算各Cohort的用户数',
          '构建Cohort矩阵'
        ],
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 识别用户首次活跃日期（Cohort Index）\ndf["order_date"] = pd.to_datetime(df["order_date"])\nfirst_purchase = df.groupby("customer_id")["order_date"].min().reset_index()\nfirst_purchase.columns = ["customer_id", "first_purchase_date"]\n\n# 合并Cohort信息\ndf = df.merge(first_purchase, on="customer_id")\n\n# 计算Cohort月份\ndf["cohort_month"] = df["first_purchase_date"].dt.to_period("M")\ndf["order_month"] = df["order_date"].dt.to_period("M")\ndf["cohort_index"] = (df["order_month"].astype(int) - df["cohort_month"].astype(int))\n\n# 构建Cohort矩阵\ncohort_data = df.groupby(["cohort_month", "cohort_index"])["customer_id"].nunique().reset_index()\ncohort_pivot = cohort_data.pivot(index="cohort_month", columns="cohort_index", values="customer_id")\n\nprint(\"Cohort用户留存矩阵:\")\nprint(cohort_pivot.head(10))',
        tags: ['SQL', '数据库', '数据查询']
      },
      {
        id: 'task-9-2',
        title: '留存率计算',
        description: '计算各Cohort的留存率。',
        steps: [
          '计算每个Cohort的首月用户数',
          '计算各月留存用户数',
          '计算留存率百分比',
          '可视化留存曲线'
        ],
        solution: '# Python代码示例\n# 计算留存率\ncohort_size = cohort_pivot.iloc[:, 0]\nretention_rate = cohort_pivot.divide(cohort_size, axis=0) * 100\n\n# 格式化显示\nretention_display = retention_rate.round(1).astype(str) + \"%\"\n\nprint(\"留存率矩阵 (%):\")\nprint(retention_display.head(10))\n\n# 平均留存率\navg_retention = retention_rate.mean()\nprint(\"\\n各月份平均留存率:\")\nprint(avg_retention.round(2))',
        tags: ['SQL', '数据库', '数据查询']
      },
      {
        id: 'task-9-3',
        title: '留存分析与可视化',
        description: '分析留存数据并创建热力图。',
        steps: [
          '创建留存率热力图',
          '分析留存趋势',
          '识别留存问题',
          '提出优化建议'
        ],
        solution: '# Python代码示例\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport pandas as pd\nimport numpy as np\n\n# 设置中文字体\nplt.rcParams["font.sans-serif\"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus\"] = False\n\n# 创建热力图\nfig, ax = plt.subplots(figsize=(15, 8))\n\n# 准备数据（取前12个月）\nretention_heatmap = retention_rate.iloc[:12, :12]\n\n# 绘制热力图\nsns.heatmap(retention_heatmap, \n            annot=True, \n            fmt=\".1f\", \n            cmap=\"YlGnBu\",\n            ax=ax,\n            vmin=0,\n            vmax=100,\n            cbar_kws={\"label\": \"留存率 (%)\"})\n\nax.set_title(\"用户留存率热力图\", fontsize=16, pad=20)\nax.set_xlabel(\"距首次购买月数\", fontsize=12)\nax.set_ylabel(\"用户首次购买月份\", fontsize=12)\n\nplt.tight_layout()\nplt.show()\n\n# 分析结论\nprint(\"\\n留存分析结论:\")\nprint(f\"1. 次月留存率: {retention_rate.iloc[:, 1].mean():.1f}%\")\nprint(f\"2. 3个月留存率: {retention_rate.iloc[:, 3].mean():.1f}%\")\nprint(f\"3. 6个月留存率: {retention_rate.iloc[:, 6].mean():.1f}%\")\nprint(\"\\n建议: 重点关注新用户的前30天运营，优化新手引导流程。\")',
        tags: ['SQL', '数据库', '数据查询', '数据处理', '数据分析', '数据可视化']
      }
    ]
  },
  {
    id: 'project-10',
    title: '综合数据分析报告',
    description: '整合多种分析方法，完成一个完整的数据分析报告。',
    difficulty: 3,
    category: '综合分析',
    estimatedTime: '5-6小时',
    tasks: [
      {
        id: 'task-10-1',
        title: '数据概览与探索',
        description: '对数据集进行全面探索和理解。',
        steps: [
          '加载和检查数据',
          '识别数据质量',
          '理解数据分布',
          '定义分析目标'
        ],
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 加载数据\ndf = pd.read_csv("business_data.csv\")\n\n# 数据概览\nprint(\"=\" * 60)\nprint(\"数据概览\")\nprint(\"=\" * 60)\nprint(f\"\\n数据维度: {df.shape[0]} 行 x {df.shape[1]} 列\")\nprint(f\"\\n列名: {df.columns.tolist()}\")\n\n# 数据类型\nprint(f\"\\n数据类型:\")\nprint(df.dtypes)\n\n# 缺失值\nprint(f\"\\n缺失值统计:\")\nmissing = df.isnull().sum()\nmissing_pct = (missing / len(df) * 100).round(2)\nmissing_df = pd.DataFrame({\"缺失数\": missing, \"缺失率(%)\": missing_pct})\nprint(missing_df[missing_df[\"缺失数\"] > 0])\n\n# 数值统计\nprint(f\"\\n数值统计:\")\nprint(df.describe())',
        tags: ['数据思维', '行业应用', '数据分析', '数据处理']
      },
      {
        id: 'task-10-2',
        title: '深度分析与洞察',
        description: '进行多维度的深度数据分析。',
        steps: [
          '用户行为分析',
          '产品分析',
          '时间趋势分析',
          '相关性分析'
        ],
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 1. 用户分析\nprint(\"=\" * 60)\nprint(\"用户分析\")\nprint(\"=\" * 60)\n\n# 用户活跃度分布\nuser_activity = df.groupby("user_id").agg({\n    \"session_id\": \"count\",\n    \"page_views\": \"sum\",\n    \"duration\": \"mean\"\n}).round(2)\nuser_activity.columns = [\"访问次数\", \"浏览页数\", \"平均时长\"]\n\n# 用户分群\nuser_activity[\"用户类型\"] = pd.cut(\n    user_activity[\"访问次数\"],\n    bins=[0, 3, 10, 100],\n    labels=[\"低活跃\", \"中活跃\", \"高活跃\"]\n)\nprint(\"\\n用户类型分布:\")\nprint(user_activity[\"用户类型\"].value_counts())\n\n# 2. 产品分析\nprint(\"\\n\" + \"=\" * 60)\nprint(\"产品分析\")\nprint(\"=\" * 60)\n\nproduct_stats = df.groupby(\"product_name\").agg({\n    \"sales\": \"sum\",\n    \"quantity\": \"sum\",\n    \"customer_id\": \"nunique\"\n}).round(2)\nproduct_stats.columns = [\"销售额\", \"销量\", \"购买客户数\"]\nproduct_stats = product_stats.sort_values(\"销售额\", ascending=False)\nprint(\"\\nTop 10 产品:\")\nprint(product_stats.head(10))\n\n# 3. 时间趋势\nprint(\"\\n\" + \"=\" * 60)\nprint(\"时间趋势分析\")\nprint(\"=\" * 60)\n\ndf[\"date\"] = pd.to_datetime(df[\"date\"])\ndf[\"month\"] = df[\"date\"].dt.to_period(\"M\")\n\nmonthly_trend = df.groupby(\"month\").agg({\n    \"sales\": \"sum\",\n    \"order_id\": \"nunique\",\n    \"customer_id\": \"nunique\"\n}).round(2)\nmonthly_trend.columns = [\"销售额\", \"订单数\", \"客户数\"]\nprint(\"\\n月度趋势:\")\nprint(monthly_trend)\n\n# 4. 相关性分析\nprint(\"\\n\" + \"=\" * 60)\nprint(\"相关性分析\")\nprint(\"=\" * 60)\n\nnumeric_cols = [\"sales\", \"quantity\", \"price\", \"page_views\", \"duration\"]\ncorr_matrix = df[numeric_cols].corr()\nprint(\"\\n相关系数矩阵:\")\nprint(corr_matrix.round(3))',
        tags: ['数据思维', '行业应用', '数据分析', '商业洞察', '数据处理']
      },
      {
        id: 'task-10-3',
        title: '报告撰写与呈现',
        description: '整合分析结果，撰写完整的数据分析报告。',
        steps: [
          '总结关键发现',
          '提出业务建议',
          '创建可视化图表',
          '格式化报告输出'
        ],
        solution: '# Python代码示例\nimport pandas as pd\n\nreport = f"""数据分析报告\n\n1. 整体业绩\n   - 总销售额: {df["sales"].sum():.2f}\n   - 累计订单: {len(df["order_id"].unique())}\n   - 活跃客户: {len(df["customer_id"].unique())}\n\n2. 关键发现\n   - 用户活跃度与消费金额呈正相关\n   - 周末订单量较高\n   - 产品集中度较高\n\n3. 建议措施\n   - 建立用户分层运营体系\n   - 优化产品组合\n   - 增加营销活动"""\nprint(report)',
        tags: ['数据思维', '行业应用', '数据分析', '数据沟通', '数据处理', '数据报告']
      }
    ]
  }
];
