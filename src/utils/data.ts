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
        content: '# 数据分析概述\n\n数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，将它们加以汇总和理解并消化，以求最大化地开发数据的功能，发挥数据的作用。\n\n## 数据分析的目的\n\n- **描述性分析**：发生了什么？（例如：本月销售额是多少？）\n- **诊断性分析**：为什么会发生？（例如：为什么本月销售额下降？）\n- **预测性分析**：将会发生什么？（例如：下个月销售额会是多少？）\n- **规范性分析**：应该怎么做？（例如：如何提高销售额？）\n\n## 数据分析流程\n\n1. **问题定义**：明确业务问题和分析目标\n2. **数据收集**：获取相关数据，确保数据质量\n3. **数据清洗**：处理缺失值、异常值和重复数据\n4. **数据探索**：发现数据中的模式和关系\n5. **数据建模**：应用统计或机器学习方法\n6. **数据可视化**：创建直观的图表展示结果\n7. **结果呈现**：向 stakeholders 传达分析见解\n\n## 实际案例\n\n### 案例：电商平台销售分析\n\n- **问题**：为什么最近3个月销售额下降？\n- **数据收集**：销售数据、用户行为数据、市场数据\n- **分析步骤**：\n  1. 分析销售额趋势\n  2. 按产品类别分析\n  3. 分析用户购买行为\n  4. 对比竞争对手数据\n- **结果**：发现某类产品销售额大幅下降，原因是竞争对手推出了更具性价比的产品\n- **建议**：调整定价策略，加强产品差异化\n\n## 数据分析工具\n\n- **Excel**：适合基础数据分析和可视化\n- **Python**：适合复杂数据分析和机器学习\n- **SQL**：适合从数据库中提取和处理数据\n- **BI工具**：如Tableau、Power BI，适合创建交互式仪表板\n- **R**：适合统计分析和数据可视化',
        exercises: [
          {
            id: 'ex-1-1-1',
            question: '数据分析的主要目的包括哪些？（多选）',
            type: 'multiple',
            options: ['描述性分析', '诊断性分析', '预测性分析', '规范性分析'],
            answer: ['描述性分析', '诊断性分析', '预测性分析', '规范性分析'],
            points: 10,
            explanation: `【答案】描述性分析、诊断性分析、预测性分析等。【解析】描述性分析回答"发生了什么"，通过汇总数据呈现现状这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '描述性分析', '诊断性分析', '预测性分析'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-2',
            question: '以下哪项不属于数据分析流程的步骤？',
            type: 'single',
            options: ['问题定义', '数据收集', '数据清洗', '数据存储'],
            answer: '数据存储',
            points: 10,
            explanation: `【答案】数据存储。【解析】数据分析标准流程：问题定义→数据收集→数据清洗→数据探索→数据建模→可视化→呈现这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '分析流程', '业务理解', '问题定义'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-3',
            question: '询问"为什么会发生？"属于哪种分析类型？',
            type: 'single',
            options: ['描述性分析', '诊断性分析', '预测性分析', '规范性分析'],
            answer: '诊断性分析',
            points: 10,
            explanation: `【答案】诊断性分析。【解析】诊断性分析回答"为什么发生"，通过数据挖掘找出原因这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '描述性分析', '诊断性分析', '预测性分析'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-4',
            question: '以下哪些是常用的数据分析工具？（多选）',
            type: 'multiple',
            options: ['Excel', 'Python', 'SQL', 'Tableau', 'Word'],
            answer: ['Excel', 'Python', 'SQL', 'Tableau'],
            points: 15,
            explanation: `【答案】Excel、Python、SQL等。【解析】Excel适合基础分析，Python/SQL适合复杂处理，BI工具适合交互式可视化这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '分析工具', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-1-1-5',
            question: '数据分析流程的第一步是什么？',
            type: 'single',
            options: ['数据收集', '问题定义', '数据清洗', '数据可视化'],
            answer: '问题定义',
            points: 10,
            explanation: `【答案】问题定义。【解析】业务理解是数据分析第一步，需要将模糊需求转化为可分析的数据问题这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '分析流程', '业务理解', '问题定义'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-6',
            question: 'CRISP-DM方法论包含几个阶段？',
            type: 'single',
            options: ['4个', '5个', '6个', '7个'],
            answer: '6个',
            points: 10,
            explanation: `【答案】6个。【解析】CRISP-DM包含6个阶段：业务理解、数据理解、数据准备、建模、评估、部署这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', 'CRISP-DM', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-1-1-7',
            question: '在实际工作中，数据分析的最终目的是什么？',
            type: 'single',
            options: ['生成报告', '支持决策', '处理数据', '创建图表'],
            answer: '支持决策',
            points: 10,
            explanation: `【答案】支持决策。【解析】数据分析的最终目的是支持业务决策，让数据说话这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '数据驱动决策', '单选题'],
            difficulty: 1
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
            type: 'single',
            options: ['分析不同用户群体的留存率差异', '直接增加用户奖励', '忽略数据直接制定策略', '只关注新用户'],
            answer: '分析不同用户群体的留存率差异',
            points: 10,
            explanation: `【答案】分析不同用户群体的留存率差异。【解析】本题考查数据分析基础核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据分析', '业务分析', '分析方法', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-2',
            question: 'MECE原则代表什么？',
            type: 'single',
            options: ['相互独立，完全穷尽', '多重假设，循环验证', '方法多样，效果显著', '数据驱动，决策优化'],
            answer: '相互独立，完全穷尽',
            points: 10,
            explanation: `【答案】相互独立，完全穷尽。【解析】MECE即"相互独立，完全穷尽"，确保分析维度不重叠、不遗漏这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', 'MECE原则', '假设驱动', '数据驱动决策'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-3',
            question: 'SMART原则中，S代表什么？',
            type: 'single',
            options: ['可衡量的', '具体的', '可实现的', '有时限的'],
            answer: '具体的',
            points: 10,
            explanation: `【答案】具体的。【解析】SMART：Specific具体、Measurable可衡量、Achievable可实现、Relevant相关、Time-bound有时限这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', 'SMART原则', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-4',
            question: 'OMTM指的是什么？',
            type: 'single',
            options: ['多维度指标体系', '唯一关键指标', '运营管理工具', '数据模型框架'],
            answer: '唯一关键指标',
            points: 10,
            explanation: `【答案】唯一关键指标。【解析】领先指标预测未来，滞后指标反映过去，共同构成业务监控体系这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '分析工具', '北极星指标', '指标体系'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-5',
            question: '以下哪些属于5W1H分析法的要素？（多选）',
            type: 'multiple',
            options: ['What', 'Why', 'Where', 'When', 'Who', 'How'],
            answer: ['What', 'Why', 'Where', 'When', 'Who', 'How'],
            points: 15,
            explanation: `【答案】What、Why、Where等。【解析】5W1H从六个维度全面分析问题这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '5W1H分析', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-1-2-6',
            question: '在假设驱动分析中，第一步应该做什么？',
            type: 'single',
            options: ['收集数据', '提出假设', '分析结果', '得出结论'],
            answer: '提出假设',
            points: 10,
            explanation: `【答案】提出假设。【解析】假设驱动分析：提出假设→设计验证→收集数据→验证结论这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '假设驱动', '问题定义', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-1-2-7',
            question: '以下哪个是领先指标的例子？',
            type: 'single',
            options: ['月度销售额', '新增注册用户数', '历史转化率', '季度利润'],
            answer: '新增注册用户数',
            points: 10,
            explanation: `【答案】新增注册用户数。【解析】领先指标预测未来，滞后指标反映过去，共同构成业务监控体系这一知识点在数据分析基础中具有重要地位。`,
            tags: ['数据分析', '业务分析', '分析方法', '指标体系', '单选题'],
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
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=excel%20spreadsheet%20with%20charts%20and%20data%20professional%20business%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-2-1',
        title: 'Excel高效操作与数据规范',
        content: '# Excel高效操作与数据规范\n\n## 工作表与单元格操作\n\n- **工作表管理**：\n  - 创建、重命名、移动、隐藏工作表\n  - 工作表标签颜色设置\n  - 工作表复制和删除\n- **单元格高级操作**：\n  - 合并/拆分单元格\n  - 冻结窗格（顶部/左侧）\n  - 行高和列宽调整\n  - 单元格格式设置\n- **视图管理**：\n  - 缩放控制\n  - 拆分窗口\n  - 并排查看\n  - 全屏模式\n\n## 数据输入规范\n\n- **数据有效性设置**：\n  - 限制输入类型（数字、日期、文本长度）\n  - 设置输入范围\n  - 自定义错误提示\n- **下拉列表创建**：\n  - 使用数据有效性创建下拉列表\n  - 动态下拉列表（基于其他单元格内容）\n  - 级联下拉列表（如：选择省份后显示对应城市）\n- **输入限制和提示**：\n  - 输入信息提示\n  - 错误警告设置\n  - 圈释无效数据\n- **自动填充技巧**：\n  - 填充序列（日期、数字、月份）\n  - 填充公式\n  - 快速填充（Ctrl+E）\n  - 自定义填充序列\n\n## 实战案例\n\n### 案例：学生成绩管理\n1. **数据输入**：创建学生信息表，包含姓名、学号、各科目成绩\n2. **数据验证**：为成绩设置0-100的输入范围\n3. **自动计算**：使用函数计算总分、平均分、排名\n4. **数据可视化**：创建成绩分布图表\n5. **数据筛选**：按成绩等级筛选学生',
        exercises: [
          {
            id: 'ex-2-1-1',
            question: '如何在Excel中创建下拉列表？',
            type: 'single',
            options: ['使用数据有效性', '手动输入', '使用函数', '使用宏'],
            answer: '使用数据有效性',
            points: 10,
            explanation: `【答案】使用数据有效性。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据有效性', '数据筛选', '统计函数'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-2',
            question: '以下哪个快捷键用于快速筛选数据？',
            type: 'single',
            options: ['Ctrl+F', 'Ctrl+Shift+L', 'Ctrl+D', 'Ctrl+R'],
            answer: 'Ctrl+Shift+L',
            points: 10,
            explanation: `【答案】Ctrl+Shift+L。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', 'IF函数', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-3',
            question: '快速填充功能的快捷键是什么？',
            type: 'single',
            options: ['Ctrl+D', 'Ctrl+R', 'Ctrl+E', 'Ctrl+F'],
            answer: 'Ctrl+E',
            points: 10,
            explanation: `【答案】Ctrl+E。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', '快速填充', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-4',
            question: '冻结窗格功能在哪个菜单下？',
            type: 'single',
            options: ['文件', '编辑', '视图', '插入'],
            answer: '视图',
            points: 10,
            explanation: `【答案】视图。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', '冻结窗格', '图表制作'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-5',
            question: '自动求和的快捷键是什么？',
            type: 'single',
            options: ['Alt+=', 'Ctrl+=', 'Shift+=', 'Ctrl+Shift+='],
            answer: 'Alt+=',
            points: 10,
            explanation: `【答案】Alt+=。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', '自动求和', 'IF函数'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-6',
            question: '跳转到最后一个有数据单元格的快捷键是什么？',
            type: 'single',
            options: ['Ctrl+Home', 'Ctrl+End', 'Ctrl+Down', 'End'],
            answer: 'Ctrl+End',
            points: 10,
            explanation: `【答案】Ctrl+End。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', '快速填充', '快捷导航'],
            difficulty: 1
          },
          {
            id: 'ex-2-1-7',
            question: '以下哪些是常用的Excel条件格式类型？（多选）',
            type: 'multiple',
            options: ['数据条', '色阶', '图标集', '数据透视表'],
            answer: ['数据条', '色阶', '图标集'],
            points: 15,
            explanation: `【答案】数据条、色阶、图标集。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', '条件函数', '数据透视表'],
            difficulty: 2
          }
        ]
      },
      {
        id: 'chapter-2-2',
        title: '核心数据处理功能',
        content: '# 核心数据处理功能\n\n## 数据整理\n\n- **排序**：\n  - 单条件排序\n  - 多条件排序\n  - 自定义排序（如月份、星期）\n  - 按颜色排序\n- **筛选**：\n  - 自动筛选\n  - 高级筛选\n  - 按条件筛选\n  - 按颜色筛选\n- **数据清理**：\n  - 删除重复项\n  - 分列功能（将文本按分隔符拆分）\n  - 查找和替换\n  - 去除空格\n\n## 核心函数\n\n- **查找函数**：\n  - VLOOKUP：垂直查找\n  - HLOOKUP：水平查找\n  - INDEX/MATCH：更灵活的查找组合\n- **统计函数**：\n  - SUM：求和\n  - SUMIF/SUMIFS：单/多条件求和\n  - COUNT/COUNTIF/COUNTIFS：计数\n  - AVERAGE/AVERAGEIF/AVERAGEIFS：平均值\n- **逻辑函数**：\n  - IF：条件判断\n  - IFERROR：错误处理\n  - AND/OR/NOT：逻辑运算\n\n## 数据透视表\n\n- **创建数据透视表**：\n  - 选择数据源\n  - 布局设计\n  - 字段设置\n- **数据透视表功能**：\n  - 数据汇总\n  - 数据分组\n  - 计算字段\n  - 切片器和时间轴',
        exercises: [
          {
            id: 'ex-2-2-1',
            question: '要根据条件求和，应该使用哪个函数？',
            type: 'single',
            options: ['SUM', 'SUMIF', 'SUMIFS', 'COUNTIFS'],
            answer: 'SUMIFS',
            points: 10,
            explanation: `【答案】SUMIFS。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', '自动求和', '条件函数'],
            difficulty: 1
          },
          {
            id: 'ex-2-2-2',
            question: '要在表格中查找特定值并返回对应结果，最灵活的组合是？',
            type: 'single',
            options: ['VLOOKUP', 'HLOOKUP', 'INDEX/MATCH', 'XLOOKUP'],
            answer: 'INDEX/MATCH',
            points: 10,
            explanation: `【答案】INDEX/MATCH。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', 'VLOOKUP函数', 'INDEX-MATCH'],
            difficulty: 1
          },
          {
            id: 'ex-2-2-3',
            question: 'IF函数的语法结构是什么？',
            type: 'single',
            options: ['IF(结果, 条件, 其他)', 'IF(条件, 结果, 其他)', 'IF(条件, 其他, 结果)', 'IF(结果, 其他, 条件)'],
            answer: 'IF(条件, 结果, 其他)',
            points: 10,
            explanation: `【答案】。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', '条件函数', 'IF函数'],
            difficulty: 1
          },
          {
            id: 'ex-2-2-4',
            question: 'VLOOKUP函数中，第四个参数FALSE表示什么？',
            type: 'single',
            options: ['近似匹配', '精确匹配', '模糊匹配', '反向匹配'],
            answer: '精确匹配',
            points: 10,
            explanation: `【答案】精确匹配。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', 'VLOOKUP函数', '统计函数'],
            difficulty: 1
          },
          {
            id: 'ex-2-2-5',
            question: 'INDEX/MATCH组合相比VLOOKUP的优势是什么？（多选）',
            type: 'multiple',
            options: ['支持从右向左查找', '更灵活', '性能更好', '语法更简单'],
            answer: ['支持从右向左查找', '更灵活', '性能更好'],
            points: 15,
            explanation: `【答案】支持从右向左查找、更灵活、性能更好。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', 'VLOOKUP函数', 'INDEX-MATCH'],
            difficulty: 2
          },
          {
            id: 'ex-2-2-6',
            question: '处理公式错误的函数是什么？',
            type: 'single',
            options: ['IF', 'IFERROR', 'ERROR', 'HANDLE'],
            answer: 'IFERROR',
            points: 10,
            explanation: `【答案】IFERROR。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', 'IF函数', '统计函数'],
            difficulty: 1
          },
          {
            id: 'ex-2-2-7',
            question: '计算两个日期之间相差的年数，应该使用哪个函数？',
            type: 'single',
            options: ['DATEDIF', 'DATE', 'YEAR', 'DAYS'],
            answer: 'DATEDIF',
            points: 10,
            explanation: `【答案】DATEDIF。【解析】Ctrl+Shift+L快速筛选数据，可按多条件过滤这一知识点在Excel数据处理中具有重要地位。`,
            tags: ['Excel', '数据处理', '表格操作', '数据筛选', 'IF函数', '统计函数'],
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
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20programming%20code%20with%20data%20visualization%20charts%20professional&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-3-1',
        title: 'Python与数据分析环境',
        content: '# Python与数据分析环境\n\n## Python基础语法\n\n- **变量和数据类型**：\n  - 数值类型：整数、浮点数\n  - 文本类型：字符串\n  - 布尔类型：True/False\n  - 空值：None\n- **数据结构**：\n  - 列表（list）：有序、可变\n  - 字典（dict）：键值对\n  - 元组（tuple）：有序、不可变\n  - 集合（set）：无序、唯一\n- **控制流程**：\n  - 条件语句：if/elif/else\n  - 循环语句：for循环、while循环\n- **函数定义和使用**：\n  - 函数定义：def关键字\n  - 参数传递：位置参数、默认参数\n  - lambda函数：匿名函数\n\n## 开发环境搭建\n\n- **Anaconda安装和配置**：\n  - 下载和安装Anaconda\n  - 创建和管理虚拟环境\n  - 安装必要的包\n- **Jupyter Notebook/Lab使用**：\n  - 启动和使用Jupyter\n  - 单元格操作\n  - 魔法命令\n\n## 数据分析常用库\n\n- **NumPy**：数值计算库\n- **Pandas**：数据处理库\n- **Matplotlib**：数据可视化库\n- **Seaborn**：高级数据可视化库',
        exercises: [
          {
            id: 'ex-3-1-1',
            question: 'Python中用于存储键值对的数据结构是？',
            type: 'single',
            options: ['列表', '字典', '元组', '集合'],
            answer: '字典',
            points: 10,
            explanation: `【答案】字典。【解析】列表可变有序，字典键值对，元组不可变，集合自动去重这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '数据结构', '数据类型', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-1-2',
            question: 'Python中用于创建匿名函数的关键字是？',
            type: 'single',
            options: ['def', 'lambda', 'function', 'return'],
            answer: 'lambda',
            points: 10,
            explanation: `【答案】lambda。【解析】def定义命名函数，lambda创建匿名函数，可设置默认参数和可变参数这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '函数定义', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-1-3',
            question: '以下哪个数据结构是不可变的？',
            type: 'single',
            options: ['列表', '字典', '元组', '集合'],
            answer: '元组',
            points: 10,
            explanation: `【答案】元组。【解析】列表可变有序，字典键值对，元组不可变，集合自动去重这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '数据结构', '数据类型', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-1-4',
            question: 'Python中用于导入模块的关键字是？',
            type: 'single',
            options: ['import', 'include', 'require', 'load'],
            answer: 'import',
            points: 10,
            explanation: `【答案】import。【解析】pd.read_csv()读取CSV，pd.read_excel()读取Excel文件这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '数据读取', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-1-5',
            question: 'Jupyter Notebook中运行单元格的快捷键是什么？',
            type: 'single',
            options: ['Enter', 'Shift+Enter', 'Ctrl+Enter', 'Alt+Enter'],
            answer: 'Shift+Enter',
            points: 10,
            explanation: `【答案】Shift+Enter。【解析】本题考查Python数据分析核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['Python', '编程基础', '数据分析', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-1-6',
            question: '以下哪些是Python数据分析常用库？（多选）',
            type: 'multiple',
            options: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Java'],
            answer: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
            points: 15,
            explanation: `【答案】Pandas、NumPy、Matplotlib等。【解析】Matplotlib基础绘图库，Seaborn提供更美观的统计图表接口这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', 'NumPy', '可视化'],
            difficulty: 2
          },
          {
            id: 'ex-3-1-7',
            question: '在循环中跳出循环的关键字是？',
            type: 'single',
            options: ['break', 'continue', 'exit', 'stop'],
            answer: 'break',
            points: 10,
            explanation: `【答案】break。【解析】for循环遍历序列，while循环按条件迭代，优先使用列表推导式这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '循环控制', '单选题'],
            difficulty: 2
          }
        ]
      },
      {
        id: 'chapter-3-2',
        title: 'Pandas数据结构与数据读写',
        content: '# Pandas数据结构与数据读写\n\n## 核心数据结构\n\n### DataFrame\n- 二维表格结构\n- 由多个Series组成\n- 行和列都有索引\n- 适合处理结构化数据\n- 常用属性和方法：shape, columns, index, info(), describe()\n\n### Series\n- 一维标签数组\n- 可以存储任何数据类型\n- 具有索引和值\n\n## 数据I/O\n\n### 读取文件\n- **CSV文件**：`pd.read_csv()`\n  - 常用参数：`sep`, `header`, `index_col`, `parse_dates`\n- **Excel文件**：`pd.read_excel()`\n  - 支持多个工作表：`sheet_name`参数\n- **JSON文件**：`pd.read_json()`\n\n### 数据导出\n- **导出为CSV**：`df.to_csv()`\n- **导出为Excel**：`df.to_excel()`\n\n## 数据查看与基本操作\n\n- **数据查看**：\n  - `head()`：查看前几行\n  - `tail()`：查看后几行\n  - `info()`：查看数据信息\n  - `describe()`：查看数据统计信息\n- **数据选择**：\n  - 按列选择：`df["column"]`\n  - 按行选择：`df.loc[]`, `df.iloc[]`\n  - 条件选择：`df[condition]`',
        exercises: [
          {
            id: 'ex-3-2-1',
            question: 'Pandas中用于读取CSV文件的函数是？',
            type: 'single',
            options: ['read_csv()', 'read_excel()', 'read_json()', 'read_sql()'],
            answer: 'read_csv()',
            points: 10,
            explanation: `【答案】read_csv()。【解析】pd.read_csv()读取CSV，pd.read_excel()读取Excel文件这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据读取', '函数定义'],
            difficulty: 1
          },
          {
            id: 'ex-3-2-2',
            question: 'Pandas中用于查看数据前几行的方法是？',
            type: 'single',
            options: ['head()', 'tail()', 'info()', 'describe()'],
            answer: 'head()',
            points: 10,
            explanation: `【答案】head()。【解析】df.head()查看前几行，df.describe()统计摘要，df.info()查看结构这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '探索性分析', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-2-3',
            question: 'Pandas中DataFrame的shape属性返回什么？',
            type: 'single',
            options: ['数据类型', '(行数, 列数)', '列名', '索引'],
            answer: '(行数, 列数)',
            points: 10,
            explanation: `【答案】。【解析】DataFrame是二维表格，Series是一维数组，是Pandas核心数据结构这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据结构', '数据类型'],
            difficulty: 2
          },
          {
            id: 'ex-3-2-4',
            question: 'Pandas中按索引选择行的方法是？',
            type: 'single',
            options: ['df.loc[]', 'df.iloc[]', 'df[]', 'df.row()'],
            answer: 'df.loc[]',
            points: 10,
            explanation: `【答案】df.loc[]。【解析】df.loc[]基于标签索引，df.iloc[]基于位置索引，布尔索引按条件筛选这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据筛选', '索引切片'],
            difficulty: 2
          },
          {
            id: 'ex-3-2-5',
            question: 'Pandas中按位置选择行的方法是？',
            type: 'single',
            options: ['df.loc[]', 'df.iloc[]', 'df[]', 'df.row()'],
            answer: 'df.iloc[]',
            points: 10,
            explanation: `【答案】df.iloc[]。【解析】df.loc[]基于标签索引，df.iloc[]基于位置索引，布尔索引按条件筛选这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据筛选', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-2-6',
            question: 'Pandas中用于查看数据统计信息的方法是？',
            type: 'single',
            options: ['head()', 'tail()', 'info()', 'describe()'],
            answer: 'describe()',
            points: 10,
            explanation: `【答案】describe()。【解析】df.head()查看前几行，df.describe()统计摘要，df.info()查看结构这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '探索性分析', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-2-7',
            question: '将DataFrame导出为CSV文件的方法是？',
            type: 'single',
            options: ['df.to_csv()', 'df.save_csv()', 'df.export_csv()', 'df.write_csv()'],
            answer: 'df.to_csv()',
            points: 10,
            explanation: `【答案】df.to_csv()。【解析】DataFrame是二维表格，Series是一维数组，是Pandas核心数据结构这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '数据结构', '单选题'],
            difficulty: 2
          }
        ]
      },
      {
        id: 'chapter-3-3',
        title: '数据清洗与预处理',
        content: '# 数据清洗与预处理\n\n## 缺失值处理\n\n- **识别缺失值**：\n  - `isna()`：检测缺失值\n  - `notna()`：检测非缺失值\n- **删除缺失值**：\n  - `dropna()`：删除包含缺失值的行或列\n- **填充缺失值**：\n  - `fillna()`：填充缺失值\n  - 常用填充方式：常数、均值、中位数、前向填充、后向填充\n\n## 重复值处理\n\n- **检测重复值**：`duplicated()`\n- **删除重复值**：`drop_duplicates()`\n\n## 数据类型转换\n\n- **astype()方法**：\n  - 基本类型转换：`df["column"].astype(int)`\n- **to_datetime()函数**：\n  - 转换为日期时间类型：`pd.to_datetime(df["date"])`\n\n## 字符串处理\n\n- **str属性的使用**：`df["column"].str.method()`\n- **常用字符串方法**：\n  - `split()`：拆分字符串\n  - `replace()`：替换字符串\n  - `strip()`：去除首尾空格\n  - `lower()/upper()`：大小写转换',
        exercises: [
          {
            id: 'ex-3-3-1',
            question: 'Pandas中用于检测重复值的方法是？',
            type: 'single',
            options: ['isna()', 'duplicated()', 'drop_duplicates()', 'fillna()'],
            answer: 'duplicated()',
            points: 10,
            explanation: `【答案】duplicated()。【解析】Pandas是Python数据分析核心库，提供DataFrame和Series数据结构这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据清洗', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-3-2',
            question: 'Pandas中用于填充缺失值的方法是？',
            type: 'single',
            options: ['isna()', 'dropna()', 'fillna()', 'replace()'],
            answer: 'fillna()',
            points: 10,
            explanation: `【答案】fillna()。【解析】处理缺失值：isnull检测、dropna删除、fillna填充；drop_duplicates去重这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据清洗', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-3-3',
            question: 'Pandas中用于检测缺失值的方法是？',
            type: 'single',
            options: ['isna()', 'duplicated()', 'dropna()', 'fillna()'],
            answer: 'isna()',
            points: 10,
            explanation: `【答案】isna()。【解析】Pandas是Python数据分析核心库，提供DataFrame和Series数据结构这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据清洗', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-3-4',
            question: 'Pandas中用于删除重复值的方法是？',
            type: 'single',
            options: ['isna()', 'duplicated()', 'drop_duplicates()', 'fillna()'],
            answer: 'drop_duplicates()',
            points: 10,
            explanation: `【答案】drop_duplicates()。【解析】Pandas是Python数据分析核心库，提供DataFrame和Series数据结构这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据清洗', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-3-5',
            question: '将字符串列转换为日期时间类型应该使用哪个函数？',
            type: 'single',
            options: ['astype()', 'to_datetime()', 'to_date()', 'convert()'],
            answer: 'to_datetime()',
            points: 10,
            explanation: `【答案】to_datetime()。【解析】pd.to_datetime()转换日期，dt.year/month/day/weekday提取时间维度这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '函数定义', '时间处理', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-3-3-6',
            question: '去除字符串首尾空格应该使用哪个方法？',
            type: 'single',
            options: ['trim()', 'strip()', 'remove_space()', 'clean()'],
            answer: 'strip()',
            points: 10,
            explanation: `【答案】strip()。【解析】本题考查Python数据分析核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['Python', '编程基础', '数据分析', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-3-7',
            question: '以下哪些是常用的缺失值填充方式？（多选）',
            type: 'multiple',
            options: ['均值填充', '中位数填充', '前向填充', '后向填充'],
            answer: ['均值填充', '中位数填充', '前向填充', '后向填充'],
            points: 15,
            explanation: `【答案】均值填充、中位数填充、前向填充等。【解析】处理缺失值：isnull检测、dropna删除、fillna填充；drop_duplicates去重这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '数据清洗', '多选题'],
            difficulty: 2
          }
        ]
      },
      {
        id: 'chapter-3-4',
        title: '数据聚合与分析',
        content: '# 数据聚合与分析\n\n## 数据分组与聚合\n\n- **groupby操作**：\n  - 按单个列分组：`df.groupby("column")`\n  - 按多个列分组：`df.groupby(["column1", "column2"])`\n- **聚合函数**：\n  - 内置聚合函数：sum, mean, count, max, min\n  - 多个聚合函数：`agg(["sum", "mean"])`\n\n## 数据合并与连接\n\n- **merge()**：根据键合并数据\n  - 合并类型：内连接、左连接、右连接、外连接\n  - 参数：`how`, `on`\n- **concat()**：连接多个DataFrame\n  - 参数：`axis`, `join`\n\n## 时间序列分析\n\n- **日期时间索引**：\n  - 设置日期时间索引：`df.set_index("date")`\n- **时间重采样**：\n  - 向下采样：`df.resample("D").sum()`\n- **移动窗口**：\n  - 移动平均：`df.rolling(window=7).mean()`',
        exercises: [
          {
            id: 'ex-3-4-1',
            question: 'Pandas中用于按列分组的方法是？',
            type: 'single',
            options: ['groupby()', 'pivot_table()', 'merge()', 'concat()'],
            answer: 'groupby()',
            points: 10,
            explanation: `【答案】groupby()。【解析】groupby分组后配合聚合函数，类似SQL的GROUP BY这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据聚合', '数据合并'],
            difficulty: 2
          },
          {
            id: 'ex-3-4-2',
            question: '要创建透视表，应该使用哪个函数？',
            type: 'single',
            options: ['groupby()', 'pivot_table()', 'merge()', 'resample()'],
            answer: 'pivot_table()',
            points: 10,
            explanation: `【答案】pivot_table()。【解析】pivot_table创建透视表，melt将宽表转为长表，类似Excel透视功能这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '数据聚合', '数据合并', '函数定义'],
            difficulty: 1
          },
          {
            id: 'ex-3-4-3',
            question: 'Pandas中用于合并两个DataFrame的方法是？',
            type: 'single',
            options: ['groupby()', 'merge()', 'concat()', 'join()'],
            answer: 'merge()',
            points: 10,
            explanation: `【答案】merge()。【解析】pd.merge类似SQL JOIN，pd.concat沿轴堆叠数据，df.join按索引合并这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据结构', '数据聚合'],
            difficulty: 2
          },
          {
            id: 'ex-3-4-4',
            question: 'Pandas中用于连接多个DataFrame的方法是？',
            type: 'single',
            options: ['groupby()', 'merge()', 'concat()', 'join()'],
            answer: 'concat()',
            points: 10,
            explanation: `【答案】concat()。【解析】pd.merge类似SQL JOIN，pd.concat沿轴堆叠数据，df.join按索引合并这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', 'Pandas', '数据结构', '数据聚合'],
            difficulty: 2
          },
          {
            id: 'ex-3-4-5',
            question: '时间序列数据中，按天汇总数据应该使用什么频率参数？',
            type: 'single',
            options: ['"H"', '"D"', '"W"', '"M"'],
            answer: '"D"',
            points: 10,
            explanation: `【答案】。【解析】pd.to_datetime()转换日期，dt.year/month/day/weekday提取时间维度这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '函数定义', '时间处理', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-4-6',
            question: '计算7天移动平均应该使用哪个方法？',
            type: 'single',
            options: ['resample()', 'rolling()', 'shift()', 'diff()'],
            answer: 'rolling()',
            points: 10,
            explanation: `【答案】rolling()。【解析】本题考查Python数据分析核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['Python', '编程基础', '数据分析', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-3-4-7',
            question: 'merge()方法支持哪些连接类型？（多选）',
            type: 'multiple',
            options: ['内连接', '左连接', '右连接', '外连接'],
            answer: ['内连接', '左连接', '右连接', '外连接'],
            points: 15,
            explanation: `【答案】内连接、左连接、右连接等。【解析】pd.merge类似SQL JOIN，pd.concat沿轴堆叠数据，df.join按索引合并这一知识点在Python数据分析中具有重要地位。`,
            tags: ['Python', '编程基础', '数据分析', '数据合并', '多选题'],
            difficulty: 2
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
        content: '# 可视化设计原则\n\n## 视觉编码\n\n### 基本视觉通道\n- **位置编码**：最准确的编码方式，适合定量数据\n- **长度编码**：适合比较数据大小\n- **颜色编码**：适合分类数据和连续数据\n- **大小编码**：适合表示数量大小\n\n### 编码效率\n- 位置 > 长度 > 角度 > 颜色 > 形状 > 大小\n\n## 图表选择指南\n\n### 比较数据\n- **柱状图**：比较不同类别的数据大小\n- **条形图**：适合类别名称较长的情况\n- **分组柱状图**：比较多个维度的数据\n- **堆叠柱状图**：展示部分与整体的关系\n\n### 趋势分析\n- **折线图**：展示数据随时间的变化趋势\n- **面积图**：强调趋势的累积效果\n- **堆叠面积图**：展示多个系列的累积效果\n\n### 占比分析\n- **饼图**：展示整体的组成部分（建议不超过6个）\n- **环形图**：突出中心信息\n- **堆叠柱状图**：同时展示占比和总量\n\n### 分布分析\n- **直方图**：展示数据的分布情况\n- **箱线图**：展示数据的统计特征\n- **密度图**：展示数据的概率分布\n\n### 关系分析\n- **散点图**：展示两个变量之间的关系\n- **热力图**：展示矩阵数据的关系强度\n- **气泡图**：展示三个变量的关系',
        exercises: [
          {
            id: 'ex-4-1-1',
            question: '展示不同类别之间的比较，最适合使用哪种图表？',
            type: 'single',
            options: ['折线图', '柱状图', '饼图', '散点图'],
            answer: '柱状图',
            points: 10,
            explanation: `【答案】柱状图。【解析】柱状图用于对比不同类别数据的大小，适合展示分类变量的数值这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '饼图'],
            difficulty: 2
          },
          {
            id: 'ex-4-1-2',
            question: '展示数据随时间的变化趋势，最适合使用哪种图表？',
            type: 'single',
            options: ['柱状图', '折线图', '饼图', '散点图'],
            answer: '折线图',
            points: 10,
            explanation: `【答案】折线图。【解析】折线图展示数据随时间变化的趋势，适合时间序列分析这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '饼图'],
            difficulty: 2
          },
          {
            id: 'ex-4-1-3',
            question: '展示数据的分布情况，最适合使用哪种图表？',
            type: 'single',
            options: ['柱状图', '折线图', '直方图', '散点图'],
            answer: '直方图',
            points: 10,
            explanation: `【答案】直方图。【解析】直方图展示数值变量的分布形态，识别集中趋势和离散程度这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '散点图'],
            difficulty: 2
          },
          {
            id: 'ex-4-1-4',
            question: '展示两个变量之间的关系，最适合使用哪种图表？',
            type: 'single',
            options: ['折线图', '柱状图', '饼图', '散点图'],
            answer: '散点图',
            points: 10,
            explanation: `【答案】散点图。【解析】散点图展示两个数值变量间的关系，可识别相关性和异常值这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '饼图'],
            difficulty: 2
          },
          {
            id: 'ex-4-1-5',
            question: '展示各部分占总体比例，最适合使用哪种图表？',
            type: 'single',
            options: ['折线图', '柱状图', '饼图', '散点图'],
            answer: '饼图',
            points: 10,
            explanation: `【答案】饼图。【解析】饼图展示各部分占总体的比例，类别过多时不宜使用这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '饼图'],
            difficulty: 2
          },
          {
            id: 'ex-4-1-6',
            question: '饼图适合展示多少个类别？',
            type: 'single',
            options: ['不超过3个', '不超过6个', '不超过10个', '任意数量'],
            answer: '不超过6个',
            points: 10,
            explanation: `【答案】不超过6个。【解析】饼图展示各部分占总体的比例，类别过多时不宜使用这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '饼图', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-4-1-7',
            question: '以下哪些是常用的可视化图表类型？（多选）',
            type: 'multiple',
            options: ['柱状图', '折线图', '饼图', '热力图', '流程图'],
            answer: ['柱状图', '折线图', '饼图', '热力图'],
            points: 15,
            explanation: `【答案】柱状图、折线图、饼图等。【解析】折线图展示数据随时间变化的趋势，适合时间序列分析这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '饼图'],
            difficulty: 2
          }
        ]
      },
      {
        id: 'chapter-4-2',
        title: 'Python可视化（Matplotlib & Seaborn）',
        content: '# Python可视化（Matplotlib & Seaborn）\n\n## Matplotlib基础\n\n### 图形构成\n- **Figure**：整个图形对象\n- **Axes**：子图对象，包含坐标轴、标题等\n- **Axis**：坐标轴对象\n\n### 基本图表类型\n- **线图**：`plt.plot()`\n- **散点图**：`plt.scatter()`\n- **柱状图**：`plt.bar()`\n- **直方图**：`plt.hist()`\n- **饼图**：`plt.pie()`\n\n### 图表元素设置\n- **标题**：`plt.title()`\n- **轴标签**：`plt.xlabel()`, `plt.ylabel()`\n- **图例**：`plt.legend()`\n- **网格**：`plt.grid()`\n\n## Seaborn高级统计绘图\n\n### 分布图\n- **distplot**：直方图和密度图的组合\n- **kdeplot**：核密度估计图\n\n### 关系图\n- **relplot**：关系图的高级接口\n- **scatterplot**：散点图\n- **lineplot**：折线图\n\n### 分类图\n- **catplot**：分类图的高级接口\n- **boxplot**：箱线图\n- **violinplot**：小提琴图\n- **barplot**：柱状图\n\n### 热力图\n- **heatmap**：热力图\n- **clustermap**：层次聚类热力图',
        exercises: [
          {
            id: 'ex-4-2-1',
            question: 'Seaborn中用于绘制热力图的函数是？',
            type: 'single',
            options: ['heatmap()', 'scatterplot()', 'boxplot()', 'pairplot()'],
            answer: 'heatmap()',
            points: 10,
            explanation: `【答案】heatmap()。【解析】热力图用颜色深浅表示数值大小，适合展示相关性矩阵和空间密度这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '散点图', '箱线图', '热力图'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-2',
            question: 'Matplotlib中用于创建子图的函数是？',
            type: 'single',
            options: ['subplot()', 'plot()', 'scatter()', 'bar()'],
            answer: 'subplot()',
            points: 10,
            explanation: `【答案】subplot()。【解析】柱状图用于对比不同类别数据的大小，适合展示分类变量的数值这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '柱状图', '散点图', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-3',
            question: 'Matplotlib中用于添加标题的函数是？',
            type: 'single',
            options: ['plt.title()', 'plt.label()', 'plt.header()', 'plt.caption()'],
            answer: 'plt.title()',
            points: 10,
            explanation: `【答案】plt.title()。【解析】本题考查数据可视化原理核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-4',
            question: 'Matplotlib中用于绘制折线图的函数是？',
            type: 'single',
            options: ['plt.bar()', 'plt.plot()', 'plt.hist()', 'plt.scatter()'],
            answer: 'plt.plot()',
            points: 10,
            explanation: `【答案】plt.plot()。【解析】折线图展示数据随时间变化的趋势，适合时间序列分析这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '散点图'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-5',
            question: 'Seaborn中用于绘制箱线图的函数是？',
            type: 'single',
            options: ['heatmap()', 'scatterplot()', 'boxplot()', 'pairplot()'],
            answer: 'boxplot()',
            points: 10,
            explanation: `【答案】boxplot()。【解析】箱线图展示四分位数结构，便于识别离群值和多组数据分布对比这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '散点图', '箱线图', '热力图'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-6',
            question: 'Matplotlib中用于添加图例的函数是？',
            type: 'single',
            options: ['plt.legend()', 'plt.label()', 'plt.note()', 'plt.key()'],
            answer: 'plt.legend()',
            points: 10,
            explanation: `【答案】plt.legend()。【解析】本题考查数据可视化原理核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-4-2-7',
            question: 'Seaborn中用于绘制散点图的函数是？',
            type: 'single',
            options: ['lineplot()', 'scatterplot()', 'barplot()', 'histplot()'],
            answer: 'scatterplot()',
            points: 10,
            explanation: `【答案】scatterplot()。【解析】散点图展示两个数值变量间的关系，可识别相关性和异常值这一知识点在数据可视化原理中具有重要地位。`,
            tags: ['数据可视化', '图表设计', '可视化原则', '折线图', '柱状图', '散点图'],
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
            type: 'single',
            options: ['价格', '部署方式', '响应速度和灵活性', '数据存储方式'],
            answer: '响应速度和灵活性',
            points: 10,
            explanation: `【答案】响应速度和灵活性。【解析】BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', '商业智能', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-1-2',
            question: 'BI系统的核心组件不包括以下哪项？',
            type: 'single',
            options: ['数据仓库', 'ETL', '报表工具', '编程语言'],
            answer: '编程语言',
            points: 10,
            explanation: `【答案】编程语言。【解析】BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', '商业智能', '数据仓库', 'ETL'],
            difficulty: 1
          },
          {
            id: 'ex-5-1-3',
            question: '以下哪些是BI系统的部署模式？（多选）',
            type: 'multiple',
            options: ['本地部署', '云端部署', '混合部署', '手动部署'],
            answer: ['本地部署', '云端部署', '混合部署'],
            points: 15,
            explanation: `【答案】本地部署、云端部署、混合部署。【解析】BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', '商业智能', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-1-4',
            question: 'BI选型时需要考虑哪些因素？（多选）',
            type: 'multiple',
            options: ['功能需求', '性能要求', '成本预算', '技术支持'],
            answer: ['功能需求', '性能要求', '成本预算', '技术支持'],
            points: 15,
            explanation: `【答案】功能需求、性能要求、成本预算等。【解析】BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', '商业智能', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-1-5',
            question: 'ETL代表什么？',
            type: 'single',
            options: ['提取、转换、加载', '提取、传输、加载', '提取、转换、存储', '提取、传输、存储'],
            answer: '提取、转换、加载',
            points: 10,
            explanation: `【答案】提取、转换、加载。【解析】ETL即数据抽取/转换/加载，将分散源系统数据经清洗转换后加载到数据仓库这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', 'ETL', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-1-6',
            question: '数据仓库的主要作用是什么？',
            type: 'single',
            options: ['存储原始数据', '存储处理后的数据', '存储日志文件', '存储配置文件'],
            answer: '存储处理后的数据',
            points: 10,
            explanation: `【答案】存储处理后的数据。【解析】数据仓库是面向主题、集成、相对稳定、反映历史变化的数据集合这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', '数据仓库', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-1-7',
            question: '现代BI平台的核心特性包括哪些？（多选）',
            type: 'multiple',
            options: ['自助分析', '实时数据', '移动端支持', 'AI辅助分析'],
            answer: ['自助分析', '实时数据', '移动端支持', 'AI辅助分析'],
            points: 15,
            explanation: `【答案】自助分析、实时数据、移动端支持等。【解析】BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', '商业智能', '多选题'],
            difficulty: 2
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
            type: 'single',
            options: ['SUM', 'CALCULATE', 'FILTER', 'ALL'],
            answer: 'CALCULATE',
            points: 10,
            explanation: `【答案】CALCULATE。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', 'DAX', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-2-2',
            question: 'DAX中的星型模型是什么？',
            type: 'single',
            options: ['一种数据模型结构', '一种图表类型', '一种编程语言', '一种存储方式'],
            answer: '一种数据模型结构',
            points: 10,
            explanation: `【答案】一种数据模型结构。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', '维度建模', 'DAX', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-2-3',
            question: 'DAX中的计算列和度量值有什么区别？',
            type: 'single',
            options: ['计算列在数据刷新时计算，度量值在查询时计算', '计算列在查询时计算，度量值在数据刷新时计算', '没有区别', '计算列只能用于文本'],
            answer: '计算列在数据刷新时计算，度量值在查询时计算',
            points: 10,
            explanation: `【答案】计算列在数据刷新时计算，度量值在查询时计算。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', 'DAX', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-2-4',
            question: 'DAX中用于清除上下文的函数是？',
            type: 'single',
            options: ['SUM', 'CALCULATE', 'FILTER', 'ALL'],
            answer: 'ALL',
            points: 10,
            explanation: `【答案】ALL。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', 'DAX', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-2-5',
            question: 'DAX中用于条件过滤的函数是？',
            type: 'single',
            options: ['SUM', 'CALCULATE', 'FILTER', 'ALL'],
            answer: 'FILTER',
            points: 10,
            explanation: `【答案】FILTER。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', 'DAX', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-2-6',
            question: '以下哪些是DAX的时间智能函数？（多选）',
            type: 'multiple',
            options: ['TOTALYTD', 'SAMEPERIODLASTYEAR', 'SUM', 'COUNT'],
            answer: ['TOTALYTD', 'SAMEPERIODLASTYEAR'],
            points: 15,
            explanation: `【答案】TOTALYTD、SAMEPERIODLASTYEAR。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', 'DAX', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-5-2-7',
            question: 'DAX中用于迭代计算的函数是？（多选）',
            type: 'multiple',
            options: ['SUMX', 'COUNTX', 'MAXX', 'MINX'],
            answer: ['SUMX', 'COUNTX', 'MAXX', 'MINX'],
            points: 15,
            explanation: `【答案】SUMX、COUNTX、MAXX等。【解析】DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列这一知识点在商业智能与报表中具有重要地位。`,
            tags: ['BI', '报表系统', '数据分析', 'DAX', '多选题'],
            difficulty: 2
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
            type: 'multiple',
            options: ['MRR', 'churn率', 'LTV', 'GMV'],
            answer: ['MRR', 'churn率', 'LTV'],
            points: 10,
            explanation: `【答案】MRR、churn率、LTV。【解析】留存率衡量用户持续使用情况，cohort分析按用户分组观察留存曲线这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '商业模式', '留存分析', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-1-2',
            question: 'OMTM指的是什么？',
            type: 'single',
            options: ['多维度指标体系', '唯一关键指标', '运营管理工具', '数据模型框架'],
            answer: '唯一关键指标',
            points: 10,
            explanation: `【答案】唯一关键指标。【解析】本题考查商务数据分析实战核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['商务分析', '业务分析', '实战案例', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-1-3',
            question: '电子商务的核心指标包括哪些？（多选）',
            type: 'multiple',
            options: ['GMV', '转化率', '客单价', 'MRR'],
            answer: ['GMV', '转化率', '客单价'],
            points: 15,
            explanation: `【答案】GMV、转化率、客单价。【解析】营销分析衡量渠道ROI、用户获取成本、转化率和归因，优化营销投入这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '营销分析', '漏斗分析', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-1-4',
            question: '免费移动应用的核心指标包括哪些？（多选）',
            type: 'multiple',
            options: ['DAU', '留存率', 'ARPU', 'LTV'],
            answer: ['DAU', '留存率', 'ARPU', 'LTV'],
            points: 15,
            explanation: `【答案】DAU、留存率、ARPU等。【解析】留存率衡量用户持续使用情况，cohort分析按用户分组观察留存曲线这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '留存分析', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-1-5',
            question: '指标之间的关联关系很重要，以下哪个是正确的？',
            type: 'single',
            options: ['指标之间没有关联', '指标之间是独立的', '指标之间存在因果关系', '指标只能单独使用'],
            answer: '指标之间存在因果关系',
            points: 10,
            explanation: `【答案】指标之间存在因果关系。【解析】本题考查商务数据分析实战核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['商务分析', '业务分析', '实战案例', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-1-6',
            question: '指标优先级排序的原则是什么？',
            type: 'single',
            options: ['按字母顺序', '按重要性和影响程度', '按创建时间', '随机排序'],
            answer: '按重要性和影响程度',
            points: 10,
            explanation: `【答案】按重要性和影响程度。【解析】本题考查商务数据分析实战核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['商务分析', '业务分析', '实战案例', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-1-7',
            question: '指标监控仪表盘的作用是什么？',
            type: 'single',
            options: ['存储数据', '实时监控关键指标', '编写代码', '设计图表'],
            answer: '实时监控关键指标',
            points: 10,
            explanation: `【答案】实时监控关键指标。【解析】本题考查商务数据分析实战核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['商务分析', '业务分析', '实战案例', '单选题'],
            difficulty: 2
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
            type: 'single',
            options: ['销售预测', '客户分群', '库存优化', '市场分析'],
            answer: '客户分群',
            points: 10,
            explanation: `【答案】客户分群。【解析】客户分析包括画像、价值分层（RFM）、生命周期、留存和流失分析这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '客户分析', 'RFM分析', '销售分析'],
            difficulty: 2
          },
          {
            id: 'ex-6-2-2',
            question: 'RFM模型中的R表示什么？',
            type: 'single',
            options: ['消费金额', '消费频率', '最近一次消费', '客户价值'],
            answer: '最近一次消费',
            points: 10,
            explanation: `【答案】最近一次消费。【解析】RFM基于Recency最近、Frequency频率、Monetary金额三维度对客户价值分层这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '客户分析', 'RFM分析', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-2-3',
            question: '漏斗分析通常用于分析哪些业务场景？（多选）',
            type: 'multiple',
            options: ['用户注册流程', '购买转化流程', '产品使用流程', '员工离职流程'],
            answer: ['用户注册流程', '购买转化流程', '产品使用流程'],
            points: 15,
            explanation: `【答案】用户注册流程、购买转化流程、产品使用流程。【解析】客户分析包括画像、价值分层（RFM）、生命周期、留存和流失分析这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '客户分析', '产品分析', '漏斗分析'],
            difficulty: 2
          },
          {
            id: 'ex-6-2-4',
            question: 'A/B测试是一种什么方法？',
            type: 'single',
            options: ['数据存储方法', '通过对比不同方案来优化业务指标', '编程方法', '数据可视化方法'],
            answer: '通过对比不同方案来优化业务指标',
            points: 10,
            explanation: `【答案】通过对比不同方案来优化业务指标。【解析】A/B测试将用户随机分组接受不同策略，通过统计检验比较效果差异这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', 'A/B测试', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-2-5',
            question: '留存分析通常关注哪些时间节点？（多选）',
            type: 'multiple',
            options: ['次日留存', '7日留存', '30日留存', '90日留存'],
            answer: ['次日留存', '7日留存', '30日留存', '90日留存'],
            points: 15,
            explanation: `【答案】次日留存、7日留存、30日留存等。【解析】留存率衡量用户持续使用情况，cohort分析按用户分组观察留存曲线这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '客户分析', '留存分析', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-6-2-6',
            question: '用户行为路径分析的目的是什么？',
            type: 'single',
            options: ['存储用户数据', '了解用户如何使用产品', '编写代码', '设计界面'],
            answer: '了解用户如何使用产品',
            points: 10,
            explanation: `【答案】了解用户如何使用产品。【解析】客户分析包括画像、价值分层（RFM）、生命周期、留存和流失分析这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '客户分析', '产品分析', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-6-2-7',
            question: '客户生命周期价值（CLV）的计算通常包括哪些因素？（多选）',
            type: 'multiple',
            options: ['平均购买频次', '平均客单价', '客户生命周期长度', '客户获取成本'],
            answer: ['平均购买频次', '平均客单价', '客户生命周期长度', '客户获取成本'],
            points: 15,
            explanation: `【答案】平均购买频次、平均客单价、客户生命周期长度等。【解析】客户分析包括画像、价值分层（RFM）、生命周期、留存和流失分析这一知识点在商务数据分析实战中具有重要地位。`,
            tags: ['商务分析', '业务分析', '实战案例', '客户分析', '获客分析', '财务分析'],
            difficulty: 2
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
        content: '# 描述统计与概率基础\n\n## 描述统计\n\n- **集中趋势**：\n  - 均值：数据的算术平均\n  - 中位数：数据排序后的中间值\n  - 众数：出现频率最高的值\n- **离散程度**：\n  - 方差：数据与其均值的偏差平方的平均\n  - 标准差：方差的平方根\n  - 四分位数：将数据分成四等份的三个点\n\n## 概率基础\n\n- **概率定义**：\n  - 古典概型\n  - 统计概型\n  - 条件概率\n- **概率分布**：\n  - 离散分布：二项分布、泊松分布\n  - 连续分布：正态分布、均匀分布\n- **中心极限定理**：\n  - 大量独立随机变量的和趋近于正态分布',
        exercises: [
          {
            id: 'ex-7-1-1',
            question: '以下哪个是衡量数据离散程度的指标？',
            type: 'single',
            options: ['均值', '中位数', '标准差', '众数'],
            answer: '标准差',
            points: 10,
            explanation: `【答案】标准差。【解析】方差衡量数据与均值的偏离程度，标准差是方差的平方根，更易解释这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '中位数', '众数'],
            difficulty: 2
          },
          {
            id: 'ex-7-1-2',
            question: '数据的算术平均数称为？',
            type: 'single',
            options: ['中位数', '众数', '均值', '方差'],
            answer: '均值',
            points: 10,
            explanation: `【答案】均值。【解析】均值是数据总和除以个数，对极端值敏感，适合近似对称分布的数据这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '中位数', '众数'],
            difficulty: 2
          },
          {
            id: 'ex-7-1-3',
            question: '以下哪些是衡量集中趋势的指标？（多选）',
            type: 'multiple',
            options: ['均值', '中位数', '众数', '标准差'],
            answer: ['均值', '中位数', '众数'],
            points: 15,
            explanation: `【答案】均值、中位数、众数。【解析】中位数将数据排序后取中间值，不受极端值影响，适合偏态分布这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '中位数', '众数'],
            difficulty: 2
          },
          {
            id: 'ex-7-1-4',
            question: '以下哪些是衡量离散程度的指标？（多选）',
            type: 'multiple',
            options: ['方差', '标准差', '极差', '中位数'],
            answer: ['方差', '标准差', '极差'],
            points: 15,
            explanation: `【答案】方差、标准差、极差。【解析】方差衡量数据与均值的偏离程度，标准差是方差的平方根，更易解释这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '中位数', '离散程度', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-7-1-5',
            question: '当数据存在极端值时，哪个指标更能代表数据的集中趋势？',
            type: 'single',
            options: ['均值', '中位数', '众数', '标准差'],
            answer: '中位数',
            points: 10,
            explanation: `【答案】中位数。【解析】中位数将数据排序后取中间值，不受极端值影响，适合偏态分布这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '中位数', '众数'],
            difficulty: 2
          },
          {
            id: 'ex-7-1-6',
            question: '正态分布的特点是什么？（多选）',
            type: 'multiple',
            options: ['对称分布', '均值=中位数=众数', '呈钟形曲线', '偏态分布'],
            answer: ['对称分布', '均值=中位数=众数', '呈钟形曲线'],
            points: 15,
            explanation: `【答案】对称分布、均值=中位数=众数、呈钟形曲线。【解析】正态分布呈钟形对称，约68%数据在均值±1σ、95%在±2σ、99.7%在±3σ这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '中位数', '众数'],
            difficulty: 2
          },
          {
            id: 'ex-7-1-7',
            question: '中心极限定理表明什么？',
            type: 'single',
            options: ['样本均值的分布趋近于正态分布', '数据必须是正态分布', '样本量越小越好', '不需要抽样'],
            answer: '样本均值的分布趋近于正态分布',
            points: 10,
            explanation: `【答案】样本均值的分布趋近于正态分布。【解析】常用概率分布：二项（n次成功次数）、泊松（单位时间事件数）、正态（连续随机变量）这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '正态分布', '抽样方法'],
            difficulty: 2
          }
        ]
      },
      {
        id: 'chapter-7-2',
        title: '假设检验与置信区间',
        content: '# 假设检验与置信区间\n\n## 假设检验\n\n- **原假设与备择假设**：\n  - 原假设（H0）：通常表示没有差异或没有关系\n  - 备择假设（H1）：通常表示存在差异或有关系\n- **显著性水平**：\n  - 常用的显著性水平：0.05、0.01\n  - 表示拒绝原假设的风险\n- **p值**：\n  - 观察到的样本数据在原假设为真时出现的概率\n  - p值越小，越有理由拒绝原假设\n- **检验类型**：\n  - t检验：比较两个均值是否有显著差异\n  - 卡方检验：检验分类变量之间的独立性\n  - ANOVA：比较多组均值是否有显著差异\n\n## 置信区间\n\n- **置信区间定义**：\n  - 在置信水平下，总体参数的可能范围\n  - 常用置信水平：95%、99%\n- **置信水平**：\n  - 如果多次抽样，约有95%的置信区间包含真实参数\n- **置信区间计算**：\n  - 点估计 ± 临界值 × 标准误差',
        exercises: [
          {
            id: 'ex-7-2-1',
            question: '在假设检验中，p值小于显著性水平通常表示？',
            type: 'single',
            options: ['接受原假设', '拒绝原假设', '数据无效', '需要更多数据'],
            answer: '拒绝原假设',
            points: 10,
            explanation: `【答案】拒绝原假设。【解析】假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '假设检验', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-7-2-2',
            question: '常用的显著性水平包括？',
            type: 'single',
            options: ['0.01和0.1', '0.05和0.1', '0.05和0.01', '0.5和0.1'],
            answer: '0.05和0.01',
            points: 10,
            explanation: `【答案】0.05和0.01。【解析】假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '假设检验', '单选题'],
            difficulty: 1
          },
          {
            id: 'ex-7-2-3',
            question: '原假设（H0）通常表示什么？',
            type: 'single',
            options: ['存在差异或有关系', '没有差异或没有关系', '数据错误', '需要更多数据'],
            answer: '没有差异或没有关系',
            points: 10,
            explanation: `【答案】没有差异或没有关系。【解析】本题考查统计分析基础核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['统计学', '统计分析', '数据统计', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-7-2-4',
            question: '备择假设（H1）通常表示什么？',
            type: 'single',
            options: ['存在差异或有关系', '没有差异或没有关系', '数据错误', '需要更多数据'],
            answer: '存在差异或有关系',
            points: 10,
            explanation: `【答案】存在差异或有关系。【解析】本题考查统计分析基础核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['统计学', '统计分析', '数据统计', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-7-2-5',
            question: '比较两个均值是否有显著差异应该使用什么检验？',
            type: 'single',
            options: ['t检验', '卡方检验', 'ANOVA', '回归分析'],
            answer: 't检验',
            points: 10,
            explanation: `【答案】t检验。【解析】假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '假设检验', '回归分析'],
            difficulty: 2
          },
          {
            id: 'ex-7-2-6',
            question: '检验分类变量之间的独立性应该使用什么检验？',
            type: 'single',
            options: ['t检验', '卡方检验', 'ANOVA', '回归分析'],
            answer: '卡方检验',
            points: 10,
            explanation: `【答案】卡方检验。【解析】假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '假设检验', '回归分析', '卡方检验'],
            difficulty: 2
          },
          {
            id: 'ex-7-2-7',
            question: '比较多组均值是否有显著差异应该使用什么检验？',
            type: 'single',
            options: ['t检验', '卡方检验', 'ANOVA', '回归分析'],
            answer: 'ANOVA',
            points: 10,
            explanation: `【答案】ANOVA。【解析】假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '均值', '假设检验', '回归分析'],
            difficulty: 2
          },
          {
            id: 'ex-7-2-8',
            question: '常用的置信水平包括哪些？（多选）',
            type: 'multiple',
            options: ['90%', '95%', '99%', '100%'],
            answer: ['90%', '95%', '99%'],
            points: 15,
            explanation: `【答案】90%、95%、99%。【解析】置信区间给出参数估计的范围，95%置信区间意味着重复抽样有约95%概率覆盖真值这一知识点在统计分析基础中具有重要地位。`,
            tags: ['统计学', '统计分析', '数据统计', '置信区间', '多选题'],
            difficulty: 2
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
        content: '# 机器学习基础概念\n\n## 机器学习类型\n\n### 监督学习\n- **定义**：使用标记数据进行训练\n- **任务类型**：\n  - **分类**：预测离散标签（如垃圾邮件识别）\n  - **回归**：预测连续值（如房价预测）\n- **常见算法**：线性回归、逻辑回归、决策树、随机森林、支持向量机\n\n### 无监督学习\n- **定义**：使用未标记数据进行训练\n- **任务类型**：\n  - **聚类**：将相似数据分组（如客户分群）\n  - **降维**：减少数据维度（如PCA）\n  - **关联规则**：发现数据中的关联关系\n- **常见算法**：K-means、层次聚类、DBSCAN、PCA、t-SNE\n\n### 强化学习\n- **定义**：通过与环境交互学习最优策略\n- **核心概念**：状态、动作、奖励\n\n## 模型评估\n\n### 数据集划分\n- **训练集**：用于训练模型（60-80%）\n- **验证集**：用于调优模型（10-20%）\n- **测试集**：用于评估模型性能（10-20%）\n\n### 评估指标\n\n#### 分类任务指标\n- **准确率**：正确预测的比例\n- **精确率**：预测为正例中实际为正例的比例\n- **召回率**：实际为正例中被正确预测的比例\n- **F1-score**：精确率和召回率的调和平均\n\n#### 回归任务指标\n- **均方误差（MSE）**：预测值与实际值之差的平方和的平均值\n- **R² score**：模型解释数据方差的比例',
        exercises: [
          {
            id: 'ex-8-1-1',
            question: '以下哪个是监督学习的任务类型？',
            type: 'single',
            options: ['分类', '聚类', '降维', '关联规则'],
            answer: '分类',
            points: 10,
            explanation: `【答案】分类。【解析】监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '无监督学习', '分类算法'],
            difficulty: 2
          },
          {
            id: 'ex-8-1-2',
            question: '以下哪个是用于评估分类模型的指标？',
            type: 'single',
            options: ['MSE', 'RMSE', '准确率', 'R² score'],
            answer: '准确率',
            points: 10,
            explanation: `【答案】准确率。【解析】分类评估：准确率=预测正确数/总数；精确率/召回率/F1对类别不平衡场景更重要这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '分类算法', '分类评估'],
            difficulty: 3
          },
          {
            id: 'ex-8-1-3',
            question: '模型在训练集上表现好但测试集上表现差，这是什么问题？',
            type: 'single',
            options: ['欠拟合', '过拟合', '无拟合', '正常现象'],
            answer: '过拟合',
            points: 10,
            explanation: `【答案】过拟合。【解析】过拟合在训练集表现好但测试集差（记忆了噪声），欠拟合都差（模型太简单）这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '过拟合与欠拟合', '数据集划分', '单选题'],
            difficulty: 3
          },
          {
            id: 'ex-8-1-4',
            question: '以下哪个是无监督学习的任务类型？',
            type: 'single',
            options: ['分类', '回归', '聚类', '预测'],
            answer: '聚类',
            points: 10,
            explanation: `【答案】聚类。【解析】无监督学习处理无标签数据，聚类发现分组，降维如PCA可视化高维数据这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '无监督学习', '分类算法'],
            difficulty: 2
          },
          {
            id: 'ex-8-1-5',
            question: '以下哪些是监督学习的常见算法？（多选）',
            type: 'multiple',
            options: ['线性回归', '逻辑回归', '决策树', 'K-means'],
            answer: ['线性回归', '逻辑回归', '决策树'],
            points: 15,
            explanation: `【答案】线性回归、逻辑回归、决策树。【解析】监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '回归算法', '聚类算法'],
            difficulty: 3
          },
          {
            id: 'ex-8-1-6',
            question: '以下哪些是无监督学习的常见算法？（多选）',
            type: 'multiple',
            options: ['K-means', 'PCA', '层次聚类', '线性回归'],
            answer: ['K-means', 'PCA', '层次聚类'],
            points: 15,
            explanation: `【答案】K-means、PCA、层次聚类。【解析】K-means最常用聚类算法，通过迭代将数据分为K簇，对初始质心敏感这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '无监督学习', '回归算法'],
            difficulty: 3
          },
          {
            id: 'ex-8-1-7',
            question: '模型评估指标中，用于回归任务的是？（多选）',
            type: 'multiple',
            options: ['MSE', 'RMSE', 'R² score', '准确率'],
            answer: ['MSE', 'RMSE', 'R² score'],
            points: 15,
            explanation: `【答案】MSE、RMSE、R² score。【解析】回归评估：MAE平均绝对误差、MSE均方误差、R²决定系数越大越好这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '回归算法', '分类评估'],
            difficulty: 3
          },
          {
            id: 'ex-8-1-8',
            question: '数据集通常分为哪几部分？（多选）',
            type: 'multiple',
            options: ['训练集', '验证集', '测试集', '数据集'],
            answer: ['训练集', '验证集', '测试集'],
            points: 15,
            explanation: `【答案】训练集、验证集、测试集。【解析】数据划分为训练集训练模型、验证集调参、测试集最终评估，70-30或80-20常见比例这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '数据集划分', '多选题'],
            difficulty: 3
          }
        ]
      },
      {
        id: 'chapter-8-2',
        title: '分类与回归算法',
        content: '# 分类与回归算法\n\n## 分类算法\n\n### 逻辑回归\n- 二分类问题\n- Sigmoid函数\n- 决策边界\n- 多分类扩展（Softmax）\n\n### 决策树\n- 信息增益\n- 基尼系数\n- 剪枝策略\n- 特征重要性\n\n### 集成方法\n- **随机森林**：多棵决策树的集成\n- **梯度提升**：GBDT、XGBoost、LightGBM\n- **Adaboost**：自适应提升\n\n## 回归算法\n\n### 线性回归\n- 最小二乘法\n- 梯度下降\n- 正则化：L1（Lasso）、L2（Ridge）\n\n### 回归树\n- CART算法\n- 决策树回归\n- 随机森林回归\n\n## 实战案例\n\n### 案例：客户流失预测\n1. 数据准备：收集客户行为数据\n2. 特征工程：提取有意义的特征\n3. 模型训练：使用逻辑回归、随机森林等\n4. 模型评估：使用准确率、召回率、F1-score\n5. 模型优化：调参和特征选择\n6. 结果解释：分析重要特征',
        exercises: [
          {
            id: 'ex-8-2-1',
            question: '逻辑回归用于解决什么问题？',
            type: 'single',
            options: ['回归问题', '分类问题', '聚类问题', '降维问题'],
            answer: '分类问题',
            points: 10,
            explanation: `【答案】分类问题。【解析】监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '无监督学习', '分类算法'],
            difficulty: 2
          },
          {
            id: 'ex-8-2-2',
            question: 'L1正则化也被称为什么？',
            type: 'single',
            options: ['Ridge', 'Lasso', 'ElasticNet', 'SVM'],
            answer: 'Lasso',
            points: 10,
            explanation: `【答案】Lasso。【解析】SVM寻找最大间隔超平面分类，通过核函数（线性/RBF/多项式）处理非线性分类问题这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', 'SVM', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-8-2-3',
            question: 'L2正则化也被称为什么？',
            type: 'single',
            options: ['Ridge', 'Lasso', 'ElasticNet', 'SVM'],
            answer: 'Ridge',
            points: 10,
            explanation: `【答案】Ridge。【解析】SVM寻找最大间隔超平面分类，通过核函数（线性/RBF/多项式）处理非线性分类问题这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', 'SVM', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-8-2-4',
            question: '随机森林是一种什么类型的算法？',
            type: 'single',
            options: ['单一决策树', '集成学习算法', '聚类算法', '降维算法'],
            answer: '集成学习算法',
            points: 10,
            explanation: `【答案】集成学习算法。【解析】随机森林是Bagging集成方法，训练多棵决策树投票预测，减少过拟合，稳定性好这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '无监督学习', '聚类算法', '决策树'],
            difficulty: 3
          },
          {
            id: 'ex-8-2-5',
            question: '决策树中用于选择特征的指标有哪些？（多选）',
            type: 'multiple',
            options: ['信息增益', '基尼系数', '信息增益比', '准确率'],
            answer: ['信息增益', '基尼系数', '信息增益比'],
            points: 15,
            explanation: `【答案】信息增益、基尼系数、信息增益比。【解析】特征工程将原始数据转化为模型可用的特征，包括缺失值处理、编码、缩放和交互特征这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '决策树', '特征工程', '分类评估'],
            difficulty: 3
          },
          {
            id: 'ex-8-2-6',
            question: '线性回归的目标是什么？',
            type: 'single',
            options: ['最小化预测值与实际值的差', '最大化准确率', '最小化方差', '最大化信息增益'],
            answer: '最小化预测值与实际值的差',
            points: 10,
            explanation: `【答案】最小化预测值与实际值的差。【解析】回归预测连续值，线性回归最基础，随机森林/GBDT/XGBoost是非线性回归常用方法这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '回归算法', '分类评估'],
            difficulty: 2
          },
          {
            id: 'ex-8-2-7',
            question: '以下哪些是集成学习算法？（多选）',
            type: 'multiple',
            options: ['随机森林', 'XGBoost', 'LightGBM', '线性回归'],
            answer: ['随机森林', 'XGBoost', 'LightGBM'],
            points: 15,
            explanation: `【答案】随机森林、XGBoost、LightGBM。【解析】随机森林是Bagging集成方法，训练多棵决策树投票预测，减少过拟合，稳定性好这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '回归算法', '随机森林'],
            difficulty: 3
          }
        ]
      },
      {
        id: 'chapter-8-3',
        title: '聚类与降维',
        content: '# 聚类与降维\n\n## 聚类算法\n\n### K-Means\n- 原理：最小化簇内距离\n- 步骤：初始化、分配、更新\n- K值选择：肘部法则\n- 优缺点分析\n\n### 层次聚类\n- 凝聚式：从下往上合并\n- 分裂式：从上往下分裂\n- 树状图解读\n- 距离度量：单连接、完全连接、平均连接\n\n### DBSCAN\n- 基于密度的方法\n- 核心点、边界点、噪声点\n- eps和min_samples参数\n- 优点：发现任意形状的簇\n\n## 降维算法\n\n### PCA\n- 主成分分析\n- 方差最大化\n- 特征值分解\n- 主成分数量选择\n\n### t-SNE\n- 非线性降维\n- 保持局部结构\n- 用于可视化',
        exercises: [
          {
            id: 'ex-8-3-1',
            question: 'K-Means聚类中，K值通常用什么方法确定？',
            type: 'single',
            options: ['准确率', '肘部法则', '交叉验证', '网格搜索'],
            answer: '肘部法则',
            points: 10,
            explanation: `【答案】肘部法则。【解析】K-means最常用聚类算法，通过迭代将数据分为K簇，对初始质心敏感这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '无监督学习', '聚类算法', '分类评估'],
            difficulty: 2
          },
          {
            id: 'ex-8-3-2',
            question: 'PCA降维的主要目标是什么？',
            type: 'single',
            options: ['增加数据', '减少数据', '保留最大方差', '删除所有特征'],
            answer: '保留最大方差',
            points: 10,
            explanation: `【答案】保留最大方差。【解析】无监督学习处理无标签数据，聚类发现分组，降维如PCA可视化高维数据这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '无监督学习', '特征工程', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-8-3-3',
            question: 'DBSCAN是一种什么类型的聚类算法？',
            type: 'single',
            options: ['基于距离的', '基于密度的', '基于层次的', '基于模型的'],
            answer: '基于密度的',
            points: 10,
            explanation: `【答案】基于密度的。【解析】无监督学习处理无标签数据，聚类发现分组，降维如PCA可视化高维数据这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '无监督学习', '聚类算法', '单选题'],
            difficulty: 3
          },
          {
            id: 'ex-8-3-4',
            question: '层次聚类的两种方法是什么？（多选）',
            type: 'multiple',
            options: ['凝聚式', '分裂式', '基于密度的', '基于模型的'],
            answer: ['凝聚式', '分裂式'],
            points: 15,
            explanation: `【答案】凝聚式、分裂式。【解析】决策树按特征递归分裂，易解释但易过拟合，CART二叉树是常用类型这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '无监督学习', '聚类算法', '决策树'],
            difficulty: 3
          },
          {
            id: 'ex-8-3-5',
            question: 't-SNE是一种什么类型的降维算法？',
            type: 'single',
            options: ['线性降维', '非线性降维', '基于距离的', '基于密度的'],
            answer: '非线性降维',
            points: 10,
            explanation: `【答案】非线性降维。【解析】无监督学习处理无标签数据，聚类发现分组，降维如PCA可视化高维数据这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '无监督学习', '单选题'],
            difficulty: 3
          },
          {
            id: 'ex-8-3-6',
            question: 'PCA的全称是什么？',
            type: 'single',
            options: ['主成分分析', '主成分回归', '概率主成分分析', '偏最小二乘'],
            answer: '主成分分析',
            points: 10,
            explanation: `【答案】主成分分析。【解析】监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '监督学习', '回归算法', '逻辑回归'],
            difficulty: 2
          },
          {
            id: 'ex-8-3-7',
            question: '以下哪些是常用的聚类算法？（多选）',
            type: 'multiple',
            options: ['K-means', 'DBSCAN', '层次聚类', 'PCA'],
            answer: ['K-means', 'DBSCAN', '层次聚类'],
            points: 15,
            explanation: `【答案】K-means、DBSCAN、层次聚类。【解析】K-means最常用聚类算法，通过迭代将数据分为K簇，对初始质心敏感这一知识点在机器学习入门中具有重要地位。`,
            tags: ['机器学习', '算法', '模型', '无监督学习', '聚类算法', '多选题'],
            difficulty: 3
          }
        ]
      }
    ]
  },
  {
    id: 'course-9',
    title: 'SQL与数据库',
    description: '掌握SQL查询语言，能够从数据库中高效提取和操作数据。',
    category: '工具课程',
    difficulty: 2,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=database%20SQL%20queries%20tables%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-9-1',
        title: 'SQL基础查询',
        content: '# SQL基础查询\n\n## SELECT语句\n\n- 基本语法：`SELECT column1, column2 FROM table`\n- 所有列：`SELECT * FROM table`\n- 列别名：`SELECT column AS alias FROM table`\n- 去重：`SELECT DISTINCT column FROM table`\n\n## WHERE子句\n\n- 比较运算符：`=`, `>`, `<`, `>=`, `<=`, `<>`\n- 逻辑运算符：`AND`, `OR`, `NOT`\n- 空值判断：`IS NULL`, `IS NOT NULL`\n- 模式匹配：`LIKE`, `%`, `_`\n- 范围判断：`BETWEEN ... AND ...`\n- 列表判断：`IN (...)`\n\n## ORDER BY子句\n\n- 升序排序：`ORDER BY column ASC`（默认）\n- 降序排序：`ORDER BY column DESC`\n- 多列排序：`ORDER BY column1 ASC, column2 DESC`\n\n## 聚合函数\n\n- COUNT：计数\n- SUM：求和\n- AVG：平均值\n- MAX：最大值\n- MIN：最小值\n\n## GROUP BY子句\n\n- 基本语法：`GROUP BY column`\n- HAVING子句：过滤分组后的结果',
        exercises: [
          {
            id: 'ex-9-1-1',
            question: 'SQL中用于过滤分组结果的子句是？',
            type: 'single',
            options: ['WHERE', 'GROUP BY', 'HAVING', 'ORDER BY'],
            answer: 'HAVING',
            points: 10,
            explanation: `【答案】HAVING。【解析】HAVING筛选GROUP BY后的分组结果，必须与GROUP BY配合，WHERE在分组前筛选这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', 'WHERE筛选', '分组聚合', '排序'],
            difficulty: 2
          },
          {
            id: 'ex-9-1-2',
            question: 'SQL中用于去重的关键字是？',
            type: 'single',
            options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'SEPARATE'],
            answer: 'DISTINCT',
            points: 10,
            explanation: `【答案】DISTINCT。【解析】子查询嵌套在主查询中，可出现在WHERE/FROM/SELECT中，IN/EXISTS/ANY/ALL配合使用这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', '子查询', '键与约束', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-9-1-3',
            question: 'SQL中用于排序的关键字是？',
            type: 'single',
            options: ['WHERE', 'GROUP BY', 'ORDER BY', 'LIMIT'],
            answer: 'ORDER BY',
            points: 10,
            explanation: `【答案】ORDER BY。【解析】ORDER BY列名 ASC/DESC，ASC升序（默认）、DESC降序，可按多列排序这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', 'WHERE筛选', '分组聚合', '排序'],
            difficulty: 2
          },
          {
            id: 'ex-9-1-4',
            question: 'SQL中用于限制返回行数的关键字是？',
            type: 'single',
            options: ['WHERE', 'GROUP BY', 'ORDER BY', 'LIMIT'],
            answer: 'LIMIT',
            points: 10,
            explanation: `【答案】LIMIT。【解析】LIMIT限制返回行数，MySQL用LIMIT m,n或LIMIT n OFFSET m实现分页；SQL Server用TOP这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', 'WHERE筛选', '分组聚合', '排序'],
            difficulty: 2
          },
          {
            id: 'ex-9-1-5',
            question: 'SQL中常用的聚合函数有哪些？（多选）',
            type: 'multiple',
            options: ['COUNT', 'SUM', 'AVG', 'MAX', 'MIN'],
            answer: ['COUNT', 'SUM', 'AVG', 'MAX', 'MIN'],
            points: 15,
            explanation: `【答案】COUNT、SUM、AVG等。【解析】COUNT计数、SUM求和、AVG平均、MAX/MIN极值，聚合函数忽略NULL值这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', '分组聚合', '子查询', '聚合函数'],
            difficulty: 2
          },
          {
            id: 'ex-9-1-6',
            question: 'SQL查询语句的执行顺序是？',
            type: 'single',
            options: ['SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY', 'FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY', 'FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY', 'WHERE -> FROM -> GROUP BY -> HAVING -> SELECT -> ORDER BY'],
            answer: 'FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY',
            points: 10,
            explanation: `【答案】FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY。【解析】GROUP BY按列分组，配合聚合函数；WHERE在分组前筛行，HAVING在分组后筛组这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', 'SELECT查询', 'WHERE筛选', '分组聚合'],
            difficulty: 2
          },
          {
            id: 'ex-9-1-7',
            question: 'SQL中用于匹配模式的关键字是？',
            type: 'single',
            options: ['LIKE', 'MATCH', 'SEARCH', 'FIND'],
            answer: 'LIKE',
            points: 10,
            explanation: `【答案】LIKE。【解析】LIKE模糊匹配，%匹配0或多个字符、_匹配单个字符，也可用REGEXP正则匹配这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', '子查询', '键与约束', '模糊查询'],
            difficulty: 2
          }
        ]
      },
      {
        id: 'chapter-9-2',
        title: 'SQL高级查询',
        content: '# SQL高级查询\n\n## 多表查询\n\n### JOIN操作\n- **INNER JOIN**：返回两个表的交集\n- **LEFT JOIN**：返回左表所有记录和右表匹配记录\n- **RIGHT JOIN**：返回右表所有记录和左表匹配记录\n- **FULL OUTER JOIN**：返回两个表的所有记录\n\n## 子查询\n\n### 标量子查询\n- 返回单个值\n- 用于WHERE子句\n\n### 表子查询\n- 返回临时表\n- 用于FROM子句\n\n## 常用函数\n\n### 字符串函数\n- CONCAT：连接字符串\n- SUBSTRING：提取子串\n- UPPER/LOWER：大小写转换\n- LENGTH：字符串长度\n\n### 日期函数\n- NOW：当前日期时间\n- DATE：提取日期部分\n- DATEDIFF：计算日期差\n\n## 窗口函数\n\n### 聚合窗口函数\n- SUM() OVER()：累计求和\n- AVG() OVER()：移动平均\n\n### 排名窗口函数\n- ROW_NUMBER()：行号\n- RANK()：排名（并列）\n- DENSE_RANK()：密集排名\n\n### LAG和LEAD\n- LAG()：获取前一行\n- LEAD()：获取后一行',
        exercises: [
          {
            id: 'ex-9-2-1',
            question: 'SQL中返回左表所有记录和右表匹配记录的JOIN类型是？',
            type: 'single',
            options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
            answer: 'LEFT JOIN',
            points: 10,
            explanation: `【答案】LEFT JOIN。【解析】INNER JOIN返回匹配行，LEFT JOIN保留左表所有行，RIGHT JOIN保留右表，FULL JOIN保留两表这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', 'JOIN连接', '子查询', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-9-2-2',
            question: 'SQL窗口函数中，用于排名的函数是？',
            type: 'single',
            options: ['SUM()', 'AVG()', 'RANK()', 'COUNT()'],
            answer: 'RANK()',
            points: 10,
            explanation: `【答案】RANK()。【解析】窗口函数在分组内计算但不压缩行数：OVER(PARTITION BY列 ORDER BY列)；ROW_NUMBER/RANK/DENSE_RANK排名这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', '窗口函数', '聚合函数', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-9-2-3',
            question: 'SQL中用于计算日期差的函数是？',
            type: 'single',
            options: ['NOW()', 'DATE()', 'DATEDIFF()', 'YEAR()'],
            answer: 'DATEDIFF()',
            points: 10,
            explanation: `【答案】DATEDIFF()。【解析】本题考查SQL与数据库核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['SQL', '数据库', '数据查询', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-9-2-4',
            question: 'SQL中返回两个表交集的JOIN类型是？',
            type: 'single',
            options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
            answer: 'INNER JOIN',
            points: 10,
            explanation: `【答案】INNER JOIN。【解析】INNER JOIN返回匹配行，LEFT JOIN保留左表所有行，RIGHT JOIN保留右表，FULL JOIN保留两表这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', 'JOIN连接', '子查询', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-9-2-5',
            question: 'SQL窗口函数中，用于获取前一行数据的函数是？',
            type: 'single',
            options: ['LAG()', 'LEAD()', 'ROW_NUMBER()', 'RANK()'],
            answer: 'LAG()',
            points: 10,
            explanation: `【答案】LAG()。【解析】窗口函数在分组内计算但不压缩行数：OVER(PARTITION BY列 ORDER BY列)；ROW_NUMBER/RANK/DENSE_RANK排名这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', '窗口函数', '模糊查询', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-9-2-6',
            question: 'SQL窗口函数中，用于获取后一行数据的函数是？',
            type: 'single',
            options: ['LAG()', 'LEAD()', 'ROW_NUMBER()', 'RANK()'],
            answer: 'LEAD()',
            points: 10,
            explanation: `【答案】LEAD()。【解析】窗口函数在分组内计算但不压缩行数：OVER(PARTITION BY列 ORDER BY列)；ROW_NUMBER/RANK/DENSE_RANK排名这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', '窗口函数', '模糊查询', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-9-2-7',
            question: '以下哪些是SQL窗口函数？（多选）',
            type: 'multiple',
            options: ['ROW_NUMBER()', 'RANK()', 'DENSE_RANK()', 'LAG()', 'LEAD()'],
            answer: ['ROW_NUMBER()', 'RANK()', 'DENSE_RANK()', 'LAG()', 'LEAD()'],
            points: 15,
            explanation: `【答案】ROW_NUMBER()、RANK()、DENSE_RANK()等。【解析】窗口函数在分组内计算但不压缩行数：OVER(PARTITION BY列 ORDER BY列)；ROW_NUMBER/RANK/DENSE_RANK排名这一知识点在SQL与数据库中具有重要地位。`,
            tags: ['SQL', '数据库', '数据查询', '窗口函数', '模糊查询', '多选题'],
            difficulty: 3
          }
        ]
      }
    ]
  },
  {
    id: 'course-10',
    title: '数据思维与行业应用',
    description: '培养数据驱动的问题解决思维，了解数据分析在各行业的实际应用场景。',
    category: '思维课程',
    difficulty: 3,
    thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20thinking%20business%20intelligence%20strategy%20professional%20style&image_size=square_hd',
    chapters: [
      {
        id: 'chapter-10-1',
        title: '数据驱动决策',
        content: '# 数据驱动决策\n\n## 数据驱动思维\n\n- 从直觉决策到数据决策\n- 数据驱动文化建立\n- 数据讲故事\n\n## 决策框架\n\n- A/B测试框架\n- 增长黑客框架\n- OKR与数据关联\n- ROI计算\n\n## 数据沟通\n\n- 技术向业务转化\n- 数据可视化设计\n- 报告撰写技巧',
        exercises: [
          {
            id: 'ex-10-1-1',
            question: '数据驱动决策的核心是什么？',
            type: 'single',
            options: ['依靠直觉', '依靠数据', '依靠经验', '依靠运气'],
            answer: '依靠数据',
            points: 10,
            explanation: `【答案】依靠数据。【解析】数据驱动文化将数据作为决策基础，需要数据素养、工具支持、高层推动和激励机制这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '数据驱动文化', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-1-2',
            question: '从直觉决策到数据决策的转变需要什么？',
            type: 'single',
            options: ['只需要技术', '只需要数据', '数据、技术和文化的转变', '不需要任何改变'],
            answer: '数据、技术和文化的转变',
            points: 10,
            explanation: `【答案】数据、技术和文化的转变。【解析】数据驱动文化将数据作为决策基础，需要数据素养、工具支持、高层推动和激励机制这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '数据驱动文化', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-1-3',
            question: '数据讲故事的目的是什么？',
            type: 'single',
            options: ['娱乐观众', '将技术数据转化为业务洞察', '编写代码', '存储数据'],
            answer: '将技术数据转化为业务洞察',
            points: 10,
            explanation: `【答案】将技术数据转化为业务洞察。【解析】商业洞察是从数据中发现的有价值信息，应回答"所以是什么"，可转化为行动建议这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '商业洞察', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-1-4',
            question: '增长黑客框架的核心是什么？',
            type: 'single',
            options: ['随机尝试', '数据驱动的快速迭代', '传统营销', '不依赖数据'],
            answer: '数据驱动的快速迭代',
            points: 10,
            explanation: `【答案】数据驱动的快速迭代。【解析】数据驱动文化将数据作为决策基础，需要数据素养、工具支持、高层推动和激励机制这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '数据驱动文化', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-1-5',
            question: 'OKR与数据的关系是什么？',
            type: 'single',
            options: ['OKR与数据无关', 'OKR需要数据来衡量和跟踪', 'OKR只需要定性描述', '数据会干扰OKR'],
            answer: 'OKR需要数据来衡量和跟踪',
            points: 10,
            explanation: `【答案】OKR需要数据来衡量和跟踪。【解析】本题考查数据思维与行业应用核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据思维', '行业应用', '数据分析', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-1-6',
            question: 'ROI计算的目的是什么？',
            type: 'single',
            options: ['计算投资回报率', '存储数据', '编写代码', '设计图表'],
            answer: '计算投资回报率',
            points: 10,
            explanation: `【答案】计算投资回报率。【解析】本题考查数据思维与行业应用核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据思维', '行业应用', '数据分析', '单选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-1-7',
            question: '技术向业务转化的关键是什么？（多选）',
            type: 'multiple',
            options: ['使用业务语言', '关注业务价值', '提供可操作的建议', '只展示技术细节'],
            answer: ['使用业务语言', '关注业务价值', '提供可操作的建议'],
            points: 15,
            explanation: `【答案】使用业务语言、关注业务价值、提供可操作的建议。【解析】本题考查数据思维与行业应用核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据思维', '行业应用', '数据分析', '多选题'],
            difficulty: 3
          }
        ]
      },
      {
        id: 'chapter-10-2',
        title: '行业数据分析应用',
        content: '# 行业数据分析应用\n\n## 电商行业\n\n- 用户行为分析\n- 商品推荐系统\n- 库存优化\n- 营销效果分析\n\n## 金融行业\n\n- 信用评分\n- 风险控制\n- 客户流失预测\n- 欺诈检测\n\n## 运营行业\n\n- 用户增长分析\n- 留存分析\n- 活动效果评估\n- 成本效益分析\n\n## 实际案例分析\n\n### 案例：电商用户增长\n1. **问题定义**：如何提升新用户转化率？\n2. **数据分析**：分析用户行为路径\n3. **假设提出**：优化注册流程可以提升转化率\n4. **实验设计**：A/B测试\n5. **结果分析**：统计显著性检验\n6. **结论应用**：推广成功的方案\n\n### 案例：金融风控建模\n1. **问题定义**：如何降低贷款违约率？\n2. **数据收集**：历史贷款数据、用户画像\n3. **特征工程**：构建风控特征\n4. **模型训练**：信用评分模型\n5. **模型评估**：KS值、AUC\n6. **模型部署**：实时风控决策',
        exercises: [
          {
            id: 'ex-10-2-1',
            question: '电商行业数据分析的核心关注点包括哪些？（多选）',
            type: 'multiple',
            options: ['用户行为分析', '商品推荐系统', '库存优化', '所有选项'],
            answer: ['用户行为分析', '商品推荐系统', '库存优化'],
            points: 10,
            explanation: `【答案】用户行为分析、商品推荐系统、库存优化。【解析】数据产品将数据能力封装为产品，如推荐系统、用户画像、精准营销、风控评分等这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '电商分析', '物流供应链', '互联网分析'],
            difficulty: 2
          },
          {
            id: 'ex-10-2-2',
            question: '金融行业数据分析的核心关注点包括哪些？（多选）',
            type: 'multiple',
            options: ['信用评分', '风险控制', '客户流失预测', '欺诈检测'],
            answer: ['信用评分', '风险控制', '客户流失预测', '欺诈检测'],
            points: 15,
            explanation: `【答案】信用评分、风险控制、客户流失预测等。【解析】金融数据分析应用于风控评分、反欺诈、客户分群、营销响应预测和合规监管这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '金融分析', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-2-3',
            question: '运营行业数据分析的核心关注点包括哪些？（多选）',
            type: 'multiple',
            options: ['用户增长分析', '留存分析', '活动效果评估', '成本效益分析'],
            answer: ['用户增长分析', '留存分析', '活动效果评估', '成本效益分析'],
            points: 15,
            explanation: `【答案】用户增长分析、留存分析、活动效果评估等。【解析】本题考查数据思维与行业应用核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据思维', '行业应用', '数据分析', '多选题'],
            difficulty: 2
          },
          {
            id: 'ex-10-2-4',
            question: 'A/B测试的步骤包括哪些？（多选）',
            type: 'multiple',
            options: ['问题定义', '假设提出', '实验设计', '结果分析', '结论应用'],
            answer: ['问题定义', '假设提出', '实验设计', '结果分析', '结论应用'],
            points: 15,
            explanation: `【答案】问题定义、假设提出、实验设计等。【解析】本题考查数据思维与行业应用核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据思维', '行业应用', '数据分析', '多选题'],
            difficulty: 3
          },
          {
            id: 'ex-10-2-5',
            question: '信用评分模型常用的评估指标有哪些？（多选）',
            type: 'multiple',
            options: ['KS值', 'AUC', '准确率', '召回率'],
            answer: ['KS值', 'AUC'],
            points: 15,
            explanation: `【答案】KS值、AUC。【解析】好的指标体系包含北极星指标、一级指标、二级指标，层层关联支撑业务这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '指标体系', '多选题'],
            difficulty: 3
          },
          {
            id: 'ex-10-2-6',
            question: '用户增长分析的常用方法有哪些？（多选）',
            type: 'multiple',
            options: ['漏斗分析', '留存分析', '用户分群', '渠道分析'],
            answer: ['漏斗分析', '留存分析', '用户分群', '渠道分析'],
            points: 15,
            explanation: `【答案】漏斗分析、留存分析、用户分群等。【解析】本题考查数据思维与行业应用核心知识点。正确选项准确描述了该概念的核心内涵。`,
            tags: ['数据思维', '行业应用', '数据分析', '多选题'],
            difficulty: 3
          },
          {
            id: 'ex-10-2-7',
            question: '营销效果评估的关键指标有哪些？（多选）',
            type: 'multiple',
            options: ['ROI', '转化率', '点击率', '曝光量'],
            answer: ['ROI', '转化率', '点击率', '曝光量'],
            points: 15,
            explanation: `【答案】ROI、转化率、点击率等。【解析】好的指标体系包含北极星指标、一级指标、二级指标，层层关联支撑业务这一知识点在数据思维与行业应用中具有重要地位。`,
            tags: ['数据思维', '行业应用', '数据分析', '指标体系', '多选题'],
            difficulty: 3
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
