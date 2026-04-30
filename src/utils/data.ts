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
            points: 10
          },
          {
            id: 'ex-1-1-2',
            question: '以下哪项不属于数据分析流程的步骤？',
            type: 'single',
            options: ['问题定义', '数据收集', '数据清洗', '数据存储'],
            answer: '数据存储',
            points: 10
          },
          {
            id: 'ex-1-1-3',
            question: '询问"为什么会发生？"属于哪种分析类型？',
            type: 'single',
            options: ['描述性分析', '诊断性分析', '预测性分析', '规范性分析'],
            answer: '诊断性分析',
            points: 10
          },
          {
            id: 'ex-1-1-4',
            question: '以下哪些是常用的数据分析工具？（多选）',
            type: 'multiple',
            options: ['Excel', 'Python', 'SQL', 'Tableau', 'Word'],
            answer: ['Excel', 'Python', 'SQL', 'Tableau'],
            points: 15
          },
          {
            id: 'ex-1-1-5',
            question: '数据分析流程的第一步是什么？',
            type: 'single',
            options: ['数据收集', '问题定义', '数据清洗', '数据可视化'],
            answer: '问题定义',
            points: 10
          },
          {
            id: 'ex-1-1-6',
            question: 'CRISP-DM方法论包含几个阶段？',
            type: 'single',
            options: ['4个', '5个', '6个', '7个'],
            answer: '6个',
            points: 10
          },
          {
            id: 'ex-1-1-7',
            question: '在实际工作中，数据分析的最终目的是什么？',
            type: 'single',
            options: ['生成报告', '支持决策', '处理数据', '创建图表'],
            answer: '支持决策',
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
            type: 'single',
            options: ['分析不同用户群体的留存率差异', '直接增加用户奖励', '忽略数据直接制定策略', '只关注新用户'],
            answer: '分析不同用户群体的留存率差异',
            points: 10
          },
          {
            id: 'ex-1-2-2',
            question: 'MECE原则代表什么？',
            type: 'single',
            options: ['相互独立，完全穷尽', '多重假设，循环验证', '方法多样，效果显著', '数据驱动，决策优化'],
            answer: '相互独立，完全穷尽',
            points: 10
          },
          {
            id: 'ex-1-2-3',
            question: 'SMART原则中，S代表什么？',
            type: 'single',
            options: ['可衡量的', '具体的', '可实现的', '有时限的'],
            answer: '具体的',
            points: 10
          },
          {
            id: 'ex-1-2-4',
            question: 'OMTM指的是什么？',
            type: 'single',
            options: ['多维度指标体系', '唯一关键指标', '运营管理工具', '数据模型框架'],
            answer: '唯一关键指标',
            points: 10
          },
          {
            id: 'ex-1-2-5',
            question: '以下哪些属于5W1H分析法的要素？（多选）',
            type: 'multiple',
            options: ['What', 'Why', 'Where', 'When', 'Who', 'How'],
            answer: ['What', 'Why', 'Where', 'When', 'Who', 'How'],
            points: 15
          },
          {
            id: 'ex-1-2-6',
            question: '在假设驱动分析中，第一步应该做什么？',
            type: 'single',
            options: ['收集数据', '提出假设', '分析结果', '得出结论'],
            answer: '提出假设',
            points: 10
          },
          {
            id: 'ex-1-2-7',
            question: '以下哪个是领先指标的例子？',
            type: 'single',
            options: ['月度销售额', '新增注册用户数', '历史转化率', '季度利润'],
            answer: '新增注册用户数',
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
        content: '# Excel高效操作与数据规范\n\n## 工作表与单元格操作\n\n- **工作表管理**：\n  - 创建、重命名、移动、隐藏工作表\n  - 工作表标签颜色设置\n  - 工作表复制和删除\n- **单元格高级操作**：\n  - 合并/拆分单元格\n  - 冻结窗格（顶部/左侧）\n  - 行高和列宽调整\n  - 单元格格式设置\n- **视图管理**：\n  - 缩放控制\n  - 拆分窗口\n  - 并排查看\n  - 全屏模式\n\n## 数据输入规范\n\n- **数据有效性设置**：\n  - 限制输入类型（数字、日期、文本长度）\n  - 设置输入范围\n  - 自定义错误提示\n- **下拉列表创建**：\n  - 使用数据有效性创建下拉列表\n  - 动态下拉列表（基于其他单元格内容）\n  - 级联下拉列表（如：选择省份后显示对应城市）\n- **输入限制和提示**：\n  - 输入信息提示\n  - 错误警告设置\n  - 圈释无效数据\n- **自动填充技巧**：\n  - 填充序列（日期、数字、月份）\n  - 填充公式\n  - 快速填充（Ctrl+E）\n  - 自定义填充序列\n\n## 实战案例\n\n### 案例：学生成绩管理\n1. **数据输入**：创建学生信息表，包含姓名、学号、各科目成绩\n2. **数据验证**：为成绩设置0-100的输入范围\n3. **自动计算**：使用函数计算总分、平均分、排名\n4. **数据可视化**：创建成绩分布图表\n5. **数据筛选**：按成绩等级筛选学生',
        exercises: [
          {
            id: 'ex-2-1-1',
            question: '如何在Excel中创建下拉列表？',
            type: 'single',
            options: ['使用数据有效性', '手动输入', '使用函数', '使用宏'],
            answer: '使用数据有效性',
            points: 10
          },
          {
            id: 'ex-2-1-2',
            question: '以下哪个快捷键用于快速筛选数据？',
            type: 'single',
            options: ['Ctrl+F', 'Ctrl+Shift+L', 'Ctrl+D', 'Ctrl+R'],
            answer: 'Ctrl+Shift+L',
            points: 10
          },
          {
            id: 'ex-2-1-3',
            question: '快速填充功能的快捷键是什么？',
            type: 'single',
            options: ['Ctrl+D', 'Ctrl+R', 'Ctrl+E', 'Ctrl+F'],
            answer: 'Ctrl+E',
            points: 10
          },
          {
            id: 'ex-2-1-4',
            question: '冻结窗格功能在哪个菜单下？',
            type: 'single',
            options: ['文件', '编辑', '视图', '插入'],
            answer: '视图',
            points: 10
          },
          {
            id: 'ex-2-1-5',
            question: '自动求和的快捷键是什么？',
            type: 'single',
            options: ['Alt+=', 'Ctrl+=', 'Shift+=', 'Ctrl+Shift+='],
            answer: 'Alt+=',
            points: 10
          },
          {
            id: 'ex-2-1-6',
            question: '跳转到最后一个有数据单元格的快捷键是什么？',
            type: 'single',
            options: ['Ctrl+Home', 'Ctrl+End', 'Ctrl+Down', 'End'],
            answer: 'Ctrl+End',
            points: 10
          },
          {
            id: 'ex-2-1-7',
            question: '以下哪些是常用的Excel条件格式类型？（多选）',
            type: 'multiple',
            options: ['数据条', '色阶', '图标集', '数据透视表'],
            answer: ['数据条', '色阶', '图标集'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-2-2-2',
            question: '要在表格中查找特定值并返回对应结果，最灵活的组合是？',
            type: 'single',
            options: ['VLOOKUP', 'HLOOKUP', 'INDEX/MATCH', 'XLOOKUP'],
            answer: 'INDEX/MATCH',
            points: 10
          },
          {
            id: 'ex-2-2-3',
            question: 'IF函数的语法结构是什么？',
            type: 'single',
            options: ['IF(结果, 条件, 其他)', 'IF(条件, 结果, 其他)', 'IF(条件, 其他, 结果)', 'IF(结果, 其他, 条件)'],
            answer: 'IF(条件, 结果, 其他)',
            points: 10
          },
          {
            id: 'ex-2-2-4',
            question: 'VLOOKUP函数中，第四个参数FALSE表示什么？',
            type: 'single',
            options: ['近似匹配', '精确匹配', '模糊匹配', '反向匹配'],
            answer: '精确匹配',
            points: 10
          },
          {
            id: 'ex-2-2-5',
            question: 'INDEX/MATCH组合相比VLOOKUP的优势是什么？（多选）',
            type: 'multiple',
            options: ['支持从右向左查找', '更灵活', '性能更好', '语法更简单'],
            answer: ['支持从右向左查找', '更灵活', '性能更好'],
            points: 15
          },
          {
            id: 'ex-2-2-6',
            question: '处理公式错误的函数是什么？',
            type: 'single',
            options: ['IF', 'IFERROR', 'ERROR', 'HANDLE'],
            answer: 'IFERROR',
            points: 10
          },
          {
            id: 'ex-2-2-7',
            question: '计算两个日期之间相差的年数，应该使用哪个函数？',
            type: 'single',
            options: ['DATEDIF', 'DATE', 'YEAR', 'DAYS'],
            answer: 'DATEDIF',
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
        content: '# Python与数据分析环境\n\n## Python基础语法\n\n- **变量和数据类型**：\n  - 数值类型：整数、浮点数\n  - 文本类型：字符串\n  - 布尔类型：True/False\n  - 空值：None\n- **数据结构**：\n  - 列表（list）：有序、可变\n  - 字典（dict）：键值对\n  - 元组（tuple）：有序、不可变\n  - 集合（set）：无序、唯一\n- **控制流程**：\n  - 条件语句：if/elif/else\n  - 循环语句：for循环、while循环\n- **函数定义和使用**：\n  - 函数定义：def关键字\n  - 参数传递：位置参数、默认参数\n  - lambda函数：匿名函数\n\n## 开发环境搭建\n\n- **Anaconda安装和配置**：\n  - 下载和安装Anaconda\n  - 创建和管理虚拟环境\n  - 安装必要的包\n- **Jupyter Notebook/Lab使用**：\n  - 启动和使用Jupyter\n  - 单元格操作\n  - 魔法命令\n\n## 数据分析常用库\n\n- **NumPy**：数值计算库\n- **Pandas**：数据处理库\n- **Matplotlib**：数据可视化库\n- **Seaborn**：高级数据可视化库',
        exercises: [
          {
            id: 'ex-3-1-1',
            question: 'Python中用于存储键值对的数据结构是？',
            type: 'single',
            options: ['列表', '字典', '元组', '集合'],
            answer: '字典',
            points: 10
          },
          {
            id: 'ex-3-1-2',
            question: 'Python中用于创建匿名函数的关键字是？',
            type: 'single',
            options: ['def', 'lambda', 'function', 'return'],
            answer: 'lambda',
            points: 10
          },
          {
            id: 'ex-3-1-3',
            question: '以下哪个数据结构是不可变的？',
            type: 'single',
            options: ['列表', '字典', '元组', '集合'],
            answer: '元组',
            points: 10
          },
          {
            id: 'ex-3-1-4',
            question: 'Python中用于导入模块的关键字是？',
            type: 'single',
            options: ['import', 'include', 'require', 'load'],
            answer: 'import',
            points: 10
          },
          {
            id: 'ex-3-1-5',
            question: 'Jupyter Notebook中运行单元格的快捷键是什么？',
            type: 'single',
            options: ['Enter', 'Shift+Enter', 'Ctrl+Enter', 'Alt+Enter'],
            answer: 'Shift+Enter',
            points: 10
          },
          {
            id: 'ex-3-1-6',
            question: '以下哪些是Python数据分析常用库？（多选）',
            type: 'multiple',
            options: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Java'],
            answer: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
            points: 15
          },
          {
            id: 'ex-3-1-7',
            question: '在循环中跳出循环的关键字是？',
            type: 'single',
            options: ['break', 'continue', 'exit', 'stop'],
            answer: 'break',
            points: 10
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
            points: 10
          },
          {
            id: 'ex-3-2-2',
            question: 'Pandas中用于查看数据前几行的方法是？',
            type: 'single',
            options: ['head()', 'tail()', 'info()', 'describe()'],
            answer: 'head()',
            points: 10
          },
          {
            id: 'ex-3-2-3',
            question: 'Pandas中DataFrame的shape属性返回什么？',
            type: 'single',
            options: ['数据类型', '(行数, 列数)', '列名', '索引'],
            answer: '(行数, 列数)',
            points: 10
          },
          {
            id: 'ex-3-2-4',
            question: 'Pandas中按索引选择行的方法是？',
            type: 'single',
            options: ['df.loc[]', 'df.iloc[]', 'df[]', 'df.row()'],
            answer: 'df.loc[]',
            points: 10
          },
          {
            id: 'ex-3-2-5',
            question: 'Pandas中按位置选择行的方法是？',
            type: 'single',
            options: ['df.loc[]', 'df.iloc[]', 'df[]', 'df.row()'],
            answer: 'df.iloc[]',
            points: 10
          },
          {
            id: 'ex-3-2-6',
            question: 'Pandas中用于查看数据统计信息的方法是？',
            type: 'single',
            options: ['head()', 'tail()', 'info()', 'describe()'],
            answer: 'describe()',
            points: 10
          },
          {
            id: 'ex-3-2-7',
            question: '将DataFrame导出为CSV文件的方法是？',
            type: 'single',
            options: ['df.to_csv()', 'df.save_csv()', 'df.export_csv()', 'df.write_csv()'],
            answer: 'df.to_csv()',
            points: 10
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
            points: 10
          },
          {
            id: 'ex-3-3-2',
            question: 'Pandas中用于填充缺失值的方法是？',
            type: 'single',
            options: ['isna()', 'dropna()', 'fillna()', 'replace()'],
            answer: 'fillna()',
            points: 10
          },
          {
            id: 'ex-3-3-3',
            question: 'Pandas中用于检测缺失值的方法是？',
            type: 'single',
            options: ['isna()', 'duplicated()', 'dropna()', 'fillna()'],
            answer: 'isna()',
            points: 10
          },
          {
            id: 'ex-3-3-4',
            question: 'Pandas中用于删除重复值的方法是？',
            type: 'single',
            options: ['isna()', 'duplicated()', 'drop_duplicates()', 'fillna()'],
            answer: 'drop_duplicates()',
            points: 10
          },
          {
            id: 'ex-3-3-5',
            question: '将字符串列转换为日期时间类型应该使用哪个函数？',
            type: 'single',
            options: ['astype()', 'to_datetime()', 'to_date()', 'convert()'],
            answer: 'to_datetime()',
            points: 10
          },
          {
            id: 'ex-3-3-6',
            question: '去除字符串首尾空格应该使用哪个方法？',
            type: 'single',
            options: ['trim()', 'strip()', 'remove_space()', 'clean()'],
            answer: 'strip()',
            points: 10
          },
          {
            id: 'ex-3-3-7',
            question: '以下哪些是常用的缺失值填充方式？（多选）',
            type: 'multiple',
            options: ['均值填充', '中位数填充', '前向填充', '后向填充'],
            answer: ['均值填充', '中位数填充', '前向填充', '后向填充'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-3-4-2',
            question: '要创建透视表，应该使用哪个函数？',
            type: 'single',
            options: ['groupby()', 'pivot_table()', 'merge()', 'resample()'],
            answer: 'pivot_table()',
            points: 10
          },
          {
            id: 'ex-3-4-3',
            question: 'Pandas中用于合并两个DataFrame的方法是？',
            type: 'single',
            options: ['groupby()', 'merge()', 'concat()', 'join()'],
            answer: 'merge()',
            points: 10
          },
          {
            id: 'ex-3-4-4',
            question: 'Pandas中用于连接多个DataFrame的方法是？',
            type: 'single',
            options: ['groupby()', 'merge()', 'concat()', 'join()'],
            answer: 'concat()',
            points: 10
          },
          {
            id: 'ex-3-4-5',
            question: '时间序列数据中，按天汇总数据应该使用什么频率参数？',
            type: 'single',
            options: ['"H"', '"D"', '"W"', '"M"'],
            answer: '"D"',
            points: 10
          },
          {
            id: 'ex-3-4-6',
            question: '计算7天移动平均应该使用哪个方法？',
            type: 'single',
            options: ['resample()', 'rolling()', 'shift()', 'diff()'],
            answer: 'rolling()',
            points: 10
          },
          {
            id: 'ex-3-4-7',
            question: 'merge()方法支持哪些连接类型？（多选）',
            type: 'multiple',
            options: ['内连接', '左连接', '右连接', '外连接'],
            answer: ['内连接', '左连接', '右连接', '外连接'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-4-1-2',
            question: '展示数据随时间的变化趋势，最适合使用哪种图表？',
            type: 'single',
            options: ['柱状图', '折线图', '饼图', '散点图'],
            answer: '折线图',
            points: 10
          },
          {
            id: 'ex-4-1-3',
            question: '展示数据的分布情况，最适合使用哪种图表？',
            type: 'single',
            options: ['柱状图', '折线图', '直方图', '散点图'],
            answer: '直方图',
            points: 10
          },
          {
            id: 'ex-4-1-4',
            question: '展示两个变量之间的关系，最适合使用哪种图表？',
            type: 'single',
            options: ['折线图', '柱状图', '饼图', '散点图'],
            answer: '散点图',
            points: 10
          },
          {
            id: 'ex-4-1-5',
            question: '展示各部分占总体比例，最适合使用哪种图表？',
            type: 'single',
            options: ['折线图', '柱状图', '饼图', '散点图'],
            answer: '饼图',
            points: 10
          },
          {
            id: 'ex-4-1-6',
            question: '饼图适合展示多少个类别？',
            type: 'single',
            options: ['不超过3个', '不超过6个', '不超过10个', '任意数量'],
            answer: '不超过6个',
            points: 10
          },
          {
            id: 'ex-4-1-7',
            question: '以下哪些是常用的可视化图表类型？（多选）',
            type: 'multiple',
            options: ['柱状图', '折线图', '饼图', '热力图', '流程图'],
            answer: ['柱状图', '折线图', '饼图', '热力图'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-4-2-2',
            question: 'Matplotlib中用于创建子图的函数是？',
            type: 'single',
            options: ['subplot()', 'plot()', 'scatter()', 'bar()'],
            answer: 'subplot()',
            points: 10
          },
          {
            id: 'ex-4-2-3',
            question: 'Matplotlib中用于添加标题的函数是？',
            type: 'single',
            options: ['plt.title()', 'plt.label()', 'plt.header()', 'plt.caption()'],
            answer: 'plt.title()',
            points: 10
          },
          {
            id: 'ex-4-2-4',
            question: 'Matplotlib中用于绘制折线图的函数是？',
            type: 'single',
            options: ['plt.bar()', 'plt.plot()', 'plt.hist()', 'plt.scatter()'],
            answer: 'plt.plot()',
            points: 10
          },
          {
            id: 'ex-4-2-5',
            question: 'Seaborn中用于绘制箱线图的函数是？',
            type: 'single',
            options: ['heatmap()', 'scatterplot()', 'boxplot()', 'pairplot()'],
            answer: 'boxplot()',
            points: 10
          },
          {
            id: 'ex-4-2-6',
            question: 'Matplotlib中用于添加图例的函数是？',
            type: 'single',
            options: ['plt.legend()', 'plt.label()', 'plt.note()', 'plt.key()'],
            answer: 'plt.legend()',
            points: 10
          },
          {
            id: 'ex-4-2-7',
            question: 'Seaborn中用于绘制散点图的函数是？',
            type: 'single',
            options: ['lineplot()', 'scatterplot()', 'barplot()', 'histplot()'],
            answer: 'scatterplot()',
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
            type: 'single',
            options: ['价格', '部署方式', '响应速度和灵活性', '数据存储方式'],
            answer: '响应速度和灵活性',
            points: 10
          },
          {
            id: 'ex-5-1-2',
            question: 'BI系统的核心组件不包括以下哪项？',
            type: 'single',
            options: ['数据仓库', 'ETL', '报表工具', '编程语言'],
            answer: '编程语言',
            points: 10
          },
          {
            id: 'ex-5-1-3',
            question: '以下哪些是BI系统的部署模式？（多选）',
            type: 'multiple',
            options: ['本地部署', '云端部署', '混合部署', '手动部署'],
            answer: ['本地部署', '云端部署', '混合部署'],
            points: 15
          },
          {
            id: 'ex-5-1-4',
            question: 'BI选型时需要考虑哪些因素？（多选）',
            type: 'multiple',
            options: ['功能需求', '性能要求', '成本预算', '技术支持'],
            answer: ['功能需求', '性能要求', '成本预算', '技术支持'],
            points: 15
          },
          {
            id: 'ex-5-1-5',
            question: 'ETL代表什么？',
            type: 'single',
            options: ['提取、转换、加载', '提取、传输、加载', '提取、转换、存储', '提取、传输、存储'],
            answer: '提取、转换、加载',
            points: 10
          },
          {
            id: 'ex-5-1-6',
            question: '数据仓库的主要作用是什么？',
            type: 'single',
            options: ['存储原始数据', '存储处理后的数据', '存储日志文件', '存储配置文件'],
            answer: '存储处理后的数据',
            points: 10
          },
          {
            id: 'ex-5-1-7',
            question: '现代BI平台的核心特性包括哪些？（多选）',
            type: 'multiple',
            options: ['自助分析', '实时数据', '移动端支持', 'AI辅助分析'],
            answer: ['自助分析', '实时数据', '移动端支持', 'AI辅助分析'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-5-2-2',
            question: 'DAX中的星型模型是什么？',
            type: 'single',
            options: ['一种数据模型结构', '一种图表类型', '一种编程语言', '一种存储方式'],
            answer: '一种数据模型结构',
            points: 10
          },
          {
            id: 'ex-5-2-3',
            question: 'DAX中的计算列和度量值有什么区别？',
            type: 'single',
            options: ['计算列在数据刷新时计算，度量值在查询时计算', '计算列在查询时计算，度量值在数据刷新时计算', '没有区别', '计算列只能用于文本'],
            answer: '计算列在数据刷新时计算，度量值在查询时计算',
            points: 10
          },
          {
            id: 'ex-5-2-4',
            question: 'DAX中用于清除上下文的函数是？',
            type: 'single',
            options: ['SUM', 'CALCULATE', 'FILTER', 'ALL'],
            answer: 'ALL',
            points: 10
          },
          {
            id: 'ex-5-2-5',
            question: 'DAX中用于条件过滤的函数是？',
            type: 'single',
            options: ['SUM', 'CALCULATE', 'FILTER', 'ALL'],
            answer: 'FILTER',
            points: 10
          },
          {
            id: 'ex-5-2-6',
            question: '以下哪些是DAX的时间智能函数？（多选）',
            type: 'multiple',
            options: ['TOTALYTD', 'SAMEPERIODLASTYEAR', 'SUM', 'COUNT'],
            answer: ['TOTALYTD', 'SAMEPERIODLASTYEAR'],
            points: 15
          },
          {
            id: 'ex-5-2-7',
            question: 'DAX中用于迭代计算的函数是？（多选）',
            type: 'multiple',
            options: ['SUMX', 'COUNTX', 'MAXX', 'MINX'],
            answer: ['SUMX', 'COUNTX', 'MAXX', 'MINX'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-6-1-2',
            question: 'OMTM指的是什么？',
            type: 'single',
            options: ['多维度指标体系', '唯一关键指标', '运营管理工具', '数据模型框架'],
            answer: '唯一关键指标',
            points: 10
          },
          {
            id: 'ex-6-1-3',
            question: '电子商务的核心指标包括哪些？（多选）',
            type: 'multiple',
            options: ['GMV', '转化率', '客单价', 'MRR'],
            answer: ['GMV', '转化率', '客单价'],
            points: 15
          },
          {
            id: 'ex-6-1-4',
            question: '免费移动应用的核心指标包括哪些？（多选）',
            type: 'multiple',
            options: ['DAU', '留存率', 'ARPU', 'LTV'],
            answer: ['DAU', '留存率', 'ARPU', 'LTV'],
            points: 15
          },
          {
            id: 'ex-6-1-5',
            question: '指标之间的关联关系很重要，以下哪个是正确的？',
            type: 'single',
            options: ['指标之间没有关联', '指标之间是独立的', '指标之间存在因果关系', '指标只能单独使用'],
            answer: '指标之间存在因果关系',
            points: 10
          },
          {
            id: 'ex-6-1-6',
            question: '指标优先级排序的原则是什么？',
            type: 'single',
            options: ['按字母顺序', '按重要性和影响程度', '按创建时间', '随机排序'],
            answer: '按重要性和影响程度',
            points: 10
          },
          {
            id: 'ex-6-1-7',
            question: '指标监控仪表盘的作用是什么？',
            type: 'single',
            options: ['存储数据', '实时监控关键指标', '编写代码', '设计图表'],
            answer: '实时监控关键指标',
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
            type: 'single',
            options: ['销售预测', '客户分群', '库存优化', '市场分析'],
            answer: '客户分群',
            points: 10
          },
          {
            id: 'ex-6-2-2',
            question: 'RFM模型中的R表示什么？',
            type: 'single',
            options: ['消费金额', '消费频率', '最近一次消费', '客户价值'],
            answer: '最近一次消费',
            points: 10
          },
          {
            id: 'ex-6-2-3',
            question: '漏斗分析通常用于分析哪些业务场景？（多选）',
            type: 'multiple',
            options: ['用户注册流程', '购买转化流程', '产品使用流程', '员工离职流程'],
            answer: ['用户注册流程', '购买转化流程', '产品使用流程'],
            points: 15
          },
          {
            id: 'ex-6-2-4',
            question: 'A/B测试是一种什么方法？',
            type: 'single',
            options: ['数据存储方法', '通过对比不同方案来优化业务指标', '编程方法', '数据可视化方法'],
            answer: '通过对比不同方案来优化业务指标',
            points: 10
          },
          {
            id: 'ex-6-2-5',
            question: '留存分析通常关注哪些时间节点？（多选）',
            type: 'multiple',
            options: ['次日留存', '7日留存', '30日留存', '90日留存'],
            answer: ['次日留存', '7日留存', '30日留存', '90日留存'],
            points: 15
          },
          {
            id: 'ex-6-2-6',
            question: '用户行为路径分析的目的是什么？',
            type: 'single',
            options: ['存储用户数据', '了解用户如何使用产品', '编写代码', '设计界面'],
            answer: '了解用户如何使用产品',
            points: 10
          },
          {
            id: 'ex-6-2-7',
            question: '客户生命周期价值（CLV）的计算通常包括哪些因素？（多选）',
            type: 'multiple',
            options: ['平均购买频次', '平均客单价', '客户生命周期长度', '客户获取成本'],
            answer: ['平均购买频次', '平均客单价', '客户生命周期长度', '客户获取成本'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-7-1-2',
            question: '数据的算术平均数称为？',
            type: 'single',
            options: ['中位数', '众数', '均值', '方差'],
            answer: '均值',
            points: 10
          },
          {
            id: 'ex-7-1-3',
            question: '以下哪些是衡量集中趋势的指标？（多选）',
            type: 'multiple',
            options: ['均值', '中位数', '众数', '标准差'],
            answer: ['均值', '中位数', '众数'],
            points: 15
          },
          {
            id: 'ex-7-1-4',
            question: '以下哪些是衡量离散程度的指标？（多选）',
            type: 'multiple',
            options: ['方差', '标准差', '极差', '中位数'],
            answer: ['方差', '标准差', '极差'],
            points: 15
          },
          {
            id: 'ex-7-1-5',
            question: '当数据存在极端值时，哪个指标更能代表数据的集中趋势？',
            type: 'single',
            options: ['均值', '中位数', '众数', '标准差'],
            answer: '中位数',
            points: 10
          },
          {
            id: 'ex-7-1-6',
            question: '正态分布的特点是什么？（多选）',
            type: 'multiple',
            options: ['对称分布', '均值=中位数=众数', '呈钟形曲线', '偏态分布'],
            answer: ['对称分布', '均值=中位数=众数', '呈钟形曲线'],
            points: 15
          },
          {
            id: 'ex-7-1-7',
            question: '中心极限定理表明什么？',
            type: 'single',
            options: ['样本均值的分布趋近于正态分布', '数据必须是正态分布', '样本量越小越好', '不需要抽样'],
            answer: '样本均值的分布趋近于正态分布',
            points: 10
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
            points: 10
          },
          {
            id: 'ex-7-2-2',
            question: '常用的显著性水平包括？',
            type: 'single',
            options: ['0.01和0.1', '0.05和0.1', '0.05和0.01', '0.5和0.1'],
            answer: '0.05和0.01',
            points: 10
          },
          {
            id: 'ex-7-2-3',
            question: '原假设（H0）通常表示什么？',
            type: 'single',
            options: ['存在差异或有关系', '没有差异或没有关系', '数据错误', '需要更多数据'],
            answer: '没有差异或没有关系',
            points: 10
          },
          {
            id: 'ex-7-2-4',
            question: '备择假设（H1）通常表示什么？',
            type: 'single',
            options: ['存在差异或有关系', '没有差异或没有关系', '数据错误', '需要更多数据'],
            answer: '存在差异或有关系',
            points: 10
          },
          {
            id: 'ex-7-2-5',
            question: '比较两个均值是否有显著差异应该使用什么检验？',
            type: 'single',
            options: ['t检验', '卡方检验', 'ANOVA', '回归分析'],
            answer: 't检验',
            points: 10
          },
          {
            id: 'ex-7-2-6',
            question: '检验分类变量之间的独立性应该使用什么检验？',
            type: 'single',
            options: ['t检验', '卡方检验', 'ANOVA', '回归分析'],
            answer: '卡方检验',
            points: 10
          },
          {
            id: 'ex-7-2-7',
            question: '比较多组均值是否有显著差异应该使用什么检验？',
            type: 'single',
            options: ['t检验', '卡方检验', 'ANOVA', '回归分析'],
            answer: 'ANOVA',
            points: 10
          },
          {
            id: 'ex-7-2-8',
            question: '常用的置信水平包括哪些？（多选）',
            type: 'multiple',
            options: ['90%', '95%', '99%', '100%'],
            answer: ['90%', '95%', '99%'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-8-1-2',
            question: '以下哪个是用于评估分类模型的指标？',
            type: 'single',
            options: ['MSE', 'RMSE', '准确率', 'R² score'],
            answer: '准确率',
            points: 10
          },
          {
            id: 'ex-8-1-3',
            question: '模型在训练集上表现好但测试集上表现差，这是什么问题？',
            type: 'single',
            options: ['欠拟合', '过拟合', '无拟合', '正常现象'],
            answer: '过拟合',
            points: 10
          },
          {
            id: 'ex-8-1-4',
            question: '以下哪个是无监督学习的任务类型？',
            type: 'single',
            options: ['分类', '回归', '聚类', '预测'],
            answer: '聚类',
            points: 10
          },
          {
            id: 'ex-8-1-5',
            question: '以下哪些是监督学习的常见算法？（多选）',
            type: 'multiple',
            options: ['线性回归', '逻辑回归', '决策树', 'K-means'],
            answer: ['线性回归', '逻辑回归', '决策树'],
            points: 15
          },
          {
            id: 'ex-8-1-6',
            question: '以下哪些是无监督学习的常见算法？（多选）',
            type: 'multiple',
            options: ['K-means', 'PCA', '层次聚类', '线性回归'],
            answer: ['K-means', 'PCA', '层次聚类'],
            points: 15
          },
          {
            id: 'ex-8-1-7',
            question: '模型评估指标中，用于回归任务的是？（多选）',
            type: 'multiple',
            options: ['MSE', 'RMSE', 'R² score', '准确率'],
            answer: ['MSE', 'RMSE', 'R² score'],
            points: 15
          },
          {
            id: 'ex-8-1-8',
            question: '数据集通常分为哪几部分？（多选）',
            type: 'multiple',
            options: ['训练集', '验证集', '测试集', '数据集'],
            answer: ['训练集', '验证集', '测试集'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-8-2-2',
            question: 'L1正则化也被称为什么？',
            type: 'single',
            options: ['Ridge', 'Lasso', 'ElasticNet', 'SVM'],
            answer: 'Lasso',
            points: 10
          },
          {
            id: 'ex-8-2-3',
            question: 'L2正则化也被称为什么？',
            type: 'single',
            options: ['Ridge', 'Lasso', 'ElasticNet', 'SVM'],
            answer: 'Ridge',
            points: 10
          },
          {
            id: 'ex-8-2-4',
            question: '随机森林是一种什么类型的算法？',
            type: 'single',
            options: ['单一决策树', '集成学习算法', '聚类算法', '降维算法'],
            answer: '集成学习算法',
            points: 10
          },
          {
            id: 'ex-8-2-5',
            question: '决策树中用于选择特征的指标有哪些？（多选）',
            type: 'multiple',
            options: ['信息增益', '基尼系数', '信息增益比', '准确率'],
            answer: ['信息增益', '基尼系数', '信息增益比'],
            points: 15
          },
          {
            id: 'ex-8-2-6',
            question: '线性回归的目标是什么？',
            type: 'single',
            options: ['最小化预测值与实际值的差', '最大化准确率', '最小化方差', '最大化信息增益'],
            answer: '最小化预测值与实际值的差',
            points: 10
          },
          {
            id: 'ex-8-2-7',
            question: '以下哪些是集成学习算法？（多选）',
            type: 'multiple',
            options: ['随机森林', 'XGBoost', 'LightGBM', '线性回归'],
            answer: ['随机森林', 'XGBoost', 'LightGBM'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-8-3-2',
            question: 'PCA降维的主要目标是什么？',
            type: 'single',
            options: ['增加数据', '减少数据', '保留最大方差', '删除所有特征'],
            answer: '保留最大方差',
            points: 10
          },
          {
            id: 'ex-8-3-3',
            question: 'DBSCAN是一种什么类型的聚类算法？',
            type: 'single',
            options: ['基于距离的', '基于密度的', '基于层次的', '基于模型的'],
            answer: '基于密度的',
            points: 10
          },
          {
            id: 'ex-8-3-4',
            question: '层次聚类的两种方法是什么？（多选）',
            type: 'multiple',
            options: ['凝聚式', '分裂式', '基于密度的', '基于模型的'],
            answer: ['凝聚式', '分裂式'],
            points: 15
          },
          {
            id: 'ex-8-3-5',
            question: 't-SNE是一种什么类型的降维算法？',
            type: 'single',
            options: ['线性降维', '非线性降维', '基于距离的', '基于密度的'],
            answer: '非线性降维',
            points: 10
          },
          {
            id: 'ex-8-3-6',
            question: 'PCA的全称是什么？',
            type: 'single',
            options: ['主成分分析', '主成分回归', '概率主成分分析', '偏最小二乘'],
            answer: '主成分分析',
            points: 10
          },
          {
            id: 'ex-8-3-7',
            question: '以下哪些是常用的聚类算法？（多选）',
            type: 'multiple',
            options: ['K-means', 'DBSCAN', '层次聚类', 'PCA'],
            answer: ['K-means', 'DBSCAN', '层次聚类'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-9-1-2',
            question: 'SQL中用于去重的关键字是？',
            type: 'single',
            options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'SEPARATE'],
            answer: 'DISTINCT',
            points: 10
          },
          {
            id: 'ex-9-1-3',
            question: 'SQL中用于排序的关键字是？',
            type: 'single',
            options: ['WHERE', 'GROUP BY', 'ORDER BY', 'LIMIT'],
            answer: 'ORDER BY',
            points: 10
          },
          {
            id: 'ex-9-1-4',
            question: 'SQL中用于限制返回行数的关键字是？',
            type: 'single',
            options: ['WHERE', 'GROUP BY', 'ORDER BY', 'LIMIT'],
            answer: 'LIMIT',
            points: 10
          },
          {
            id: 'ex-9-1-5',
            question: 'SQL中常用的聚合函数有哪些？（多选）',
            type: 'multiple',
            options: ['COUNT', 'SUM', 'AVG', 'MAX', 'MIN'],
            answer: ['COUNT', 'SUM', 'AVG', 'MAX', 'MIN'],
            points: 15
          },
          {
            id: 'ex-9-1-6',
            question: 'SQL查询语句的执行顺序是？',
            type: 'single',
            options: ['SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY', 'FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY', 'FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY', 'WHERE -> FROM -> GROUP BY -> HAVING -> SELECT -> ORDER BY'],
            answer: 'FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY',
            points: 10
          },
          {
            id: 'ex-9-1-7',
            question: 'SQL中用于匹配模式的关键字是？',
            type: 'single',
            options: ['LIKE', 'MATCH', 'SEARCH', 'FIND'],
            answer: 'LIKE',
            points: 10
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
            points: 10
          },
          {
            id: 'ex-9-2-2',
            question: 'SQL窗口函数中，用于排名的函数是？',
            type: 'single',
            options: ['SUM()', 'AVG()', 'RANK()', 'COUNT()'],
            answer: 'RANK()',
            points: 10
          },
          {
            id: 'ex-9-2-3',
            question: 'SQL中用于计算日期差的函数是？',
            type: 'single',
            options: ['NOW()', 'DATE()', 'DATEDIFF()', 'YEAR()'],
            answer: 'DATEDIFF()',
            points: 10
          },
          {
            id: 'ex-9-2-4',
            question: 'SQL中返回两个表交集的JOIN类型是？',
            type: 'single',
            options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
            answer: 'INNER JOIN',
            points: 10
          },
          {
            id: 'ex-9-2-5',
            question: 'SQL窗口函数中，用于获取前一行数据的函数是？',
            type: 'single',
            options: ['LAG()', 'LEAD()', 'ROW_NUMBER()', 'RANK()'],
            answer: 'LAG()',
            points: 10
          },
          {
            id: 'ex-9-2-6',
            question: 'SQL窗口函数中，用于获取后一行数据的函数是？',
            type: 'single',
            options: ['LAG()', 'LEAD()', 'ROW_NUMBER()', 'RANK()'],
            answer: 'LEAD()',
            points: 10
          },
          {
            id: 'ex-9-2-7',
            question: '以下哪些是SQL窗口函数？（多选）',
            type: 'multiple',
            options: ['ROW_NUMBER()', 'RANK()', 'DENSE_RANK()', 'LAG()', 'LEAD()'],
            answer: ['ROW_NUMBER()', 'RANK()', 'DENSE_RANK()', 'LAG()', 'LEAD()'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-10-1-2',
            question: '从直觉决策到数据决策的转变需要什么？',
            type: 'single',
            options: ['只需要技术', '只需要数据', '数据、技术和文化的转变', '不需要任何改变'],
            answer: '数据、技术和文化的转变',
            points: 10
          },
          {
            id: 'ex-10-1-3',
            question: '数据讲故事的目的是什么？',
            type: 'single',
            options: ['娱乐观众', '将技术数据转化为业务洞察', '编写代码', '存储数据'],
            answer: '将技术数据转化为业务洞察',
            points: 10
          },
          {
            id: 'ex-10-1-4',
            question: '增长黑客框架的核心是什么？',
            type: 'single',
            options: ['随机尝试', '数据驱动的快速迭代', '传统营销', '不依赖数据'],
            answer: '数据驱动的快速迭代',
            points: 10
          },
          {
            id: 'ex-10-1-5',
            question: 'OKR与数据的关系是什么？',
            type: 'single',
            options: ['OKR与数据无关', 'OKR需要数据来衡量和跟踪', 'OKR只需要定性描述', '数据会干扰OKR'],
            answer: 'OKR需要数据来衡量和跟踪',
            points: 10
          },
          {
            id: 'ex-10-1-6',
            question: 'ROI计算的目的是什么？',
            type: 'single',
            options: ['计算投资回报率', '存储数据', '编写代码', '设计图表'],
            answer: '计算投资回报率',
            points: 10
          },
          {
            id: 'ex-10-1-7',
            question: '技术向业务转化的关键是什么？（多选）',
            type: 'multiple',
            options: ['使用业务语言', '关注业务价值', '提供可操作的建议', '只展示技术细节'],
            answer: ['使用业务语言', '关注业务价值', '提供可操作的建议'],
            points: 15
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
            points: 10
          },
          {
            id: 'ex-10-2-2',
            question: '金融行业数据分析的核心关注点包括哪些？（多选）',
            type: 'multiple',
            options: ['信用评分', '风险控制', '客户流失预测', '欺诈检测'],
            answer: ['信用评分', '风险控制', '客户流失预测', '欺诈检测'],
            points: 15
          },
          {
            id: 'ex-10-2-3',
            question: '运营行业数据分析的核心关注点包括哪些？（多选）',
            type: 'multiple',
            options: ['用户增长分析', '留存分析', '活动效果评估', '成本效益分析'],
            answer: ['用户增长分析', '留存分析', '活动效果评估', '成本效益分析'],
            points: 15
          },
          {
            id: 'ex-10-2-4',
            question: 'A/B测试的步骤包括哪些？（多选）',
            type: 'multiple',
            options: ['问题定义', '假设提出', '实验设计', '结果分析', '结论应用'],
            answer: ['问题定义', '假设提出', '实验设计', '结果分析', '结论应用'],
            points: 15
          },
          {
            id: 'ex-10-2-5',
            question: '信用评分模型常用的评估指标有哪些？（多选）',
            type: 'multiple',
            options: ['KS值', 'AUC', '准确率', '召回率'],
            answer: ['KS值', 'AUC'],
            points: 15
          },
          {
            id: 'ex-10-2-6',
            question: '用户增长分析的常用方法有哪些？（多选）',
            type: 'multiple',
            options: ['漏斗分析', '留存分析', '用户分群', '渠道分析'],
            answer: ['漏斗分析', '留存分析', '用户分群', '渠道分析'],
            points: 15
          },
          {
            id: 'ex-10-2-7',
            question: '营销效果评估的关键指标有哪些？（多选）',
            type: 'multiple',
            options: ['ROI', '转化率', '点击率', '曝光量'],
            answer: ['ROI', '转化率', '点击率', '曝光量'],
            points: 15
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
        points: 20
      },
      {
        id: 'q1-2',
        type: 'single',
        question: '以下哪项不属于数据分析的基本流程？',
        options: ['问题定义', '数据收集', '数据清洗', '数据存储', '数据分析'],
        answer: '数据存储',
        points: 20
      },
      {
        id: 'q1-3',
        type: 'multiple',
        question: '以下哪些是常用的数据分析工具？（多选）',
        options: ['Excel', 'Python', 'SQL', 'Photoshop'],
        answer: ['Excel', 'Python', 'SQL'],
        points: 20
      },
      {
        id: 'q1-4',
        type: 'true-false',
        question: '数据分析只需要掌握技术技能，不需要业务理解。',
        answer: false,
        points: 20
      },
      {
        id: 'q1-5',
        type: 'essay',
        question: '请简述数据分析的基本流程，并说明每个步骤的主要任务。',
        points: 20
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
        points: 20
      },
      {
        id: 'q2-2',
        type: 'single',
        question: '在Excel中创建下拉列表应该使用什么功能？',
        options: ['数据有效性', '条件格式', '数据透视表', '公式'],
        answer: '数据有效性',
        points: 20
      },
      {
        id: 'q2-3',
        type: 'true-false',
        question: '数据透视表只能用于汇总数据，不能用于分析数据。',
        answer: false,
        points: 20
      },
      {
        id: 'q2-4',
        type: 'multiple',
        question: '以下哪些是Excel中的聚合函数？（多选）',
        options: ['SUM', 'AVERAGE', 'IF', 'MAX', 'MIN'],
        answer: ['SUM', 'AVERAGE', 'MAX', 'MIN'],
        points: 20
      },
      {
        id: 'q2-5',
        type: 'essay',
        question: '请说明如何使用数据透视表分析销售数据，并列出至少3个分析维度。',
        points: 20
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
        points: 20
      },
      {
        id: 'q3-2',
        type: 'single',
        question: '如何检查DataFrame中的缺失值？',
        options: ['isna()', 'duplicated()', 'drop_duplicates()', 'fillna()'],
        answer: 'isna()',
        points: 20
      },
      {
        id: 'q3-3',
        type: 'multiple',
        question: 'Python中哪些是常用的数据结构？（多选）',
        options: ['列表', '字典', '元组', '集合', '数组'],
        answer: ['列表', '字典', '元组', '集合'],
        points: 20
      },
      {
        id: 'q3-4',
        type: 'true-false',
        question: 'groupby()函数可以按多个列进行分组。',
        answer: true,
        points: 20
      },
      {
        id: 'q3-5',
        type: 'essay',
        question: '请说明如何使用Pandas进行数据清洗，包括处理缺失值和重复值的方法。',
        points: 20
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
        points: 20
      },
      {
        id: 'q4-2',
        type: 'single',
        question: 'Matplotlib中用于创建子图的函数是？',
        options: ['plot()', 'subplot()', 'scatter()', 'bar()'],
        answer: 'subplot()',
        points: 20
      },
      {
        id: 'q4-3',
        type: 'multiple',
        question: '以下哪些是常用的可视化图表类型？（多选）',
        options: ['柱状图', '折线图', '饼图', '流程图', '热力图'],
        answer: ['柱状图', '折线图', '饼图', '热力图'],
        points: 20
      },
      {
        id: 'q4-4',
        type: 'true-false',
        question: '饼图适合展示大量类别的数据占比。',
        answer: false,
        points: 20
      },
      {
        id: 'q4-5',
        type: 'essay',
        question: '请说明如何选择合适的可视化图表，并列举3个常见场景及其对应的图表类型。',
        points: 20
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
        points: 20
      },
      {
        id: 'q5-2',
        type: 'single',
        question: 'BI系统的核心组件不包括以下哪项？',
        options: ['数据仓库', 'ETL', '报表工具', '编程语言'],
        answer: '编程语言',
        points: 20
      },
      {
        id: 'q5-3',
        type: 'true-false',
        question: '星型模型是BI数据建模中最简单的模型结构。',
        answer: true,
        points: 20
      },
      {
        id: 'q5-4',
        type: 'multiple',
        question: '以下哪些是DAX的常用函数类型？（多选）',
        options: ['聚合函数', '时间智能函数', '文本函数', '图像处理函数'],
        answer: ['聚合函数', '时间智能函数', '文本函数'],
        points: 20
      },
      {
        id: 'q5-5',
        type: 'essay',
        question: '请说明商业智能系统的基本架构，以及各组件的主要作用。',
        points: 20
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
        points: 20
      },
      {
        id: 'q6-2',
        type: 'single',
        question: 'SaaS行业的核心指标不包括以下哪项？',
        options: ['MRR', 'Churn率', 'GMV', 'LTV'],
        answer: 'GMV',
        points: 20
      },
      {
        id: 'q6-3',
        type: 'multiple',
        question: '漏斗分析通常用于分析哪些业务场景？（多选）',
        options: ['用户注册流程', '购买转化流程', '产品使用流程', '员工离职流程'],
        answer: ['用户注册流程', '购买转化流程', '产品使用流程'],
        points: 20
      },
      {
        id: 'q6-4',
        type: 'true-false',
        question: 'A/B测试是一种通过对比不同方案来优化业务指标的方法。',
        answer: true,
        points: 20
      },
      {
        id: 'q6-5',
        type: 'essay',
        question: '请设计一个电商平台的客户分群分析方案，说明使用的分析方法和预期结果。',
        points: 20
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
        points: 20
      },
      {
        id: 'q7-2',
        type: 'single',
        question: '在假设检验中，p值小于显著性水平表示什么？',
        options: ['接受原假设', '拒绝原假设', '无法判断', '数据无效'],
        answer: '拒绝原假设',
        points: 20
      },
      {
        id: 'q7-3',
        type: 'true-false',
        question: '中心极限定理表明，无论总体分布如何，样本均值的分布都趋近于正态分布。',
        answer: true,
        points: 20
      },
      {
        id: 'q7-4',
        type: 'multiple',
        question: '常用的描述统计指标包括哪些？（多选）',
        options: ['均值', '方差', '相关系数', '回归系数'],
        answer: ['均值', '方差'],
        points: 20
      },
      {
        id: 'q7-5',
        type: 'essay',
        question: '请说明假设检验的基本流程，并解释p值的含义。',
        points: 20
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
        points: 20
      },
      {
        id: 'q8-2',
        type: 'single',
        question: 'K-Means聚类中，确定K值的常用方法是？',
        options: ['准确率', '肘部法则', '交叉验证', '网格搜索'],
        answer: '肘部法则',
        points: 20
      },
      {
        id: 'q8-3',
        type: 'multiple',
        question: '以下哪些是常用的机器学习评估指标？（多选）',
        options: ['准确率', '精确率', '召回率', 'F1-score', 'MSE'],
        answer: ['准确率', '精确率', '召回率', 'F1-score', 'MSE'],
        points: 20
      },
      {
        id: 'q8-4',
        type: 'true-false',
        question: '过拟合是指模型在训练集上表现差，在测试集上表现好。',
        answer: false,
        points: 20
      },
      {
        id: 'q8-5',
        type: 'essay',
        question: '请比较监督学习和无监督学习的区别，并各举一个实际应用案例。',
        points: 20
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
        points: 20
      },
      {
        id: 'q9-2',
        type: 'single',
        question: 'LEFT JOIN返回什么结果？',
        options: ['两个表的交集', '左表所有记录和右表匹配记录', '右表所有记录和左表匹配记录', '两个表的所有记录'],
        answer: '左表所有记录和右表匹配记录',
        points: 20
      },
      {
        id: 'q9-3',
        type: 'true-false',
        question: 'SQL窗口函数可以在不分组的情况下计算累计值。',
        answer: true,
        points: 20
      },
      {
        id: 'q9-4',
        type: 'multiple',
        question: '以下哪些是SQL的聚合函数？（多选）',
        options: ['COUNT', 'CONCAT', 'SUM', 'AVG', 'SUBSTRING'],
        answer: ['COUNT', 'SUM', 'AVG'],
        points: 20
      },
      {
        id: 'q9-5',
        type: 'essay',
        question: '请说明INNER JOIN和LEFT JOIN的区别，并说明各自适合什么场景。',
        points: 20
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
        points: 20
      },
      {
        id: 'q10-2',
        type: 'single',
        question: '以下哪个不是数据分析的行业应用领域？',
        options: ['电商', '金融', '医疗', '娱乐'],
        answer: '娱乐',
        points: 20
      },
      {
        id: 'q10-3',
        type: 'true-false',
        question: 'A/B测试是验证业务假设的有效方法。',
        answer: true,
        points: 20
      },
      {
        id: 'q10-4',
        type: 'multiple',
        question: '数据沟通中需要注意哪些方面？（多选）',
        options: ['技术向业务转化', '数据可视化设计', '报告撰写技巧', '代码优化'],
        answer: ['技术向业务转化', '数据可视化设计', '报告撰写技巧'],
        points: 20
      },
      {
        id: 'q10-5',
        type: 'essay',
        question: '请选择一个你熟悉的行业，说明数据分析在该行业中的具体应用场景和价值。',
        points: 20
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
    description: '使用Excel对电商平台的销售数据进行清洗、分析和可视化呈现。',
    difficulty: 1,
    category: 'Excel分析',
    estimatedTime: '2-3小时',
    tasks: [
      {
        id: 'task-1-1',
        title: '数据导入与清洗',
        description: '导入销售数据CSV文件，处理缺失值和异常值，标准化数据格式。',
        steps: [
          '导入CSV文件并检查数据结构',
          '识别和处理缺失值（使用均值填充或删除）',
          '处理异常值（如负数销售额）',
          '标准化日期格式'
        ],
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("sales_data.csv")\n\n# 检查缺失值\nprint(df.isnull().sum())\n\n# 使用均值填充数值型缺失值\ndf["sales"].fillna(df["sales"].mean(), inplace=True)\n\n# 删除含缺失值的行（如果需要）\ndf.dropna(inplace=True)\n\n# 处理异常值：销售额不能为负\ndf = df[df["sales"] >= 0]\n\n# 标准化日期格式\ndf["date"] = pd.to_datetime(df["date"])\n\nprint(df.info())'
      },
      {
        id: 'task-1-2',
        title: '数据汇总分析',
        description: '使用数据透视表和函数对销售数据进行多维度汇总分析。',
        steps: [
          '创建数据透视表，按产品类别汇总销售额',
          '计算各产品类别的销售占比',
          '使用SUMIFS函数按时间范围汇总',
          '分析销售趋势'
        ],
        solution: '# Python代码示例\n# 按产品类别汇总\ncategory_sales = df.groupby("product_category")["sales"].sum().sort_values(ascending=False)\nprint(category_sales)\n\n# 计算销售占比\ncategory_pct = category_sales / category_sales.sum() * 100\nprint(category_pct)\n\n# 按月汇总\ndf["month"] = df["date"].dt.to_period("M")\nmonthly_sales = df.groupby("month")["sales"].sum()\nprint(monthly_sales)'
      },
      {
        id: 'task-1-3',
        title: '数据可视化',
        description: '创建专业的销售数据可视化图表，包括趋势图、占比图和对比图。',
        steps: [
          '创建月度销售趋势折线图',
          '创建产品类别销售占比饼图',
          '创建地区销售对比柱状图',
          '添加数据标签和格式化'
        ],
        solution: '# Python代码示例\nimport matplotlib.pyplot as plt\n\n# 设置中文字体\nplt.rcParams["font.sans-serif"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus"] = False\n\nfig, axes = plt.subplots(2, 2, figsize=(15, 10))\n\n# 1. 月度销售趋势\naxes[0, 0].plot(monthly_sales.index.astype(str), monthly_sales.values, marker="o")\naxes[0, 0].set_title("月度销售趋势")\naxes[0, 0].set_xlabel("月份")\naxes[0, 0].set_ylabel("销售额")\naxes[0, 0].grid(True)\n\n# 2. 产品类别占比\naxes[0, 1].pie(category_sales.values, labels=category_sales.index, autopct="%1.1f%%")\naxes[0, 1].set_title("产品类别销售占比")\n\n# 3. 地区销售对比\nregion_sales = df.groupby("region")["sales"].sum().sort_values(ascending=True)\naxes[1, 0].barh(region_sales.index, region_sales.values)\naxes[1, 0].set_title("各地区销售对比")\naxes[1, 0].set_xlabel("销售额")\n\nplt.tight_layout()\nplt.savefig("sales_analysis.png", dpi=150)\nplt.show()'
      }
    ]
  },
  {
    id: 'project-2',
    title: '用户行为数据分析',
    description: '使用Python分析用户行为数据，洞察用户路径和转化漏斗。',
    difficulty: 2,
    category: 'Python分析',
    estimatedTime: '3-4小时',
    tasks: [
      {
        id: 'task-2-1',
        title: '用户路径分析',
        description: '分析用户在产品中的行为路径，发现常见路径模式。',
        steps: [
          '加载用户行为数据',
          '按用户分组并排序行为序列',
          '统计各路径的出现频率',
          '可视化用户路径'
        ],
        solution: '# Python代码示例\n# 用户路径分析\nuser_paths = df.groupby("user_id")["page"].apply(lambda x: " -> ".join(x.astype(str)))\npath_counts = user_paths.value_counts().head(10)\nprint("Top 10 用户路径:")\nprint(path_counts)\n\n# 计算转化率\ndef calculate_conversion(paths, target_pages):\n    conversions = {}\n    for path in paths:\n        pages = path.split(" -> ")\n        for i, page in enumerate(target_pages):\n            if page in pages:\n                conversions[page] = conversions.get(page, 0) + 1\n    return conversions'
      },
      {
        id: 'task-2-2',
        title: '转化漏斗分析',
        description: '构建用户转化漏斗，分析各阶段的转化率。',
        steps: [
          '定义转化漏斗阶段',
          '计算各阶段用户数',
          '计算阶段转化率',
          '可视化漏斗图'
        ],
        solution: '# Python代码示例\n# 转化漏斗\nfunnel_stages = ["首页", "商品页", "加入购物车", "提交订单", "支付成功"]\nfunnel_data = {}\n\nfor stage in funnel_stages:\n    users = df[df["page"] == stage]["user_id"].nunique()\n    funnel_data[stage] = users\n\nprint("漏斗数据:", funnel_data)\n\n# 计算转化率\nfor i in range(1, len(funnel_stages)):\n    rate = funnel_data[funnel_stages[i]] / funnel_data[funnel_stages[i-1]] * 100\n    print(f"{funnel_stages[i-1]} -> {funnel_stages[i]}: {rate:.2f}%")'
      },
      {
        id: 'task-2-3',
        title: '用户留存分析',
        description: '计算用户留存率，分析用户粘性。',
        steps: [
          '定义用户首次活跃日期',
          '计算次日、7日、30日留存率',
          '分析留存曲线',
          '按用户群体对比留存'
        ],
        solution: '# Python代码示例\n# 留存分析\ndf["date"] = pd.to_datetime(df["date"])\nfirst_active = df.groupby("user_id")["date"].min().reset_index()\nfirst_active.columns = ["user_id", "first_date"]\n\ndf = df.merge(first_active, on="user_id")\ndf["days_since_first"] = (df["date"] - df["first_date"]).dt.days\n\n# 留存率计算\nretention = {}\nfor days in [1, 7, 30]:\n    retained_users = df[df["days_since_first"] == days]["user_id"].nunique()\n    total_users = first_active["user_id"].nunique()\n    retention[f"{days}日"] = retained_users / total_users * 100\n\nprint("留存率:", retention)'
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
        solution: '# Python代码示例\nimport pandas as pd\nfrom datetime import datetime\n\n# 计算RFM\nsnapshot_date = df["date"].max() + pd.Timedelta(days=1)\n\nrfm = df.groupby("customer_id").agg({\n    "date": lambda x: (snapshot_date - x.max()).days,  # Recency\n    "order_id": "nunique",  # Frequency\n    "amount": "sum"  # Monetary\n}).reset_index()\n\nrfm.columns = ["customer_id", "recency", "frequency", "monetary"]\nprint(rfm.head())'
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
        solution: '# Python代码示例\n# RFM评分（使用四分位数）\nrfm["R_score"] = pd.qcut(rfm["recency"], q=5, labels=[5, 4, 3, 2, 1])\nrfm["F_score"] = pd.qcut(rfm["frequency"].rank(method="first"), q=5, labels=[1, 2, 3, 4, 5])\nrfm["M_score"] = pd.qcut(rfm["monetary"].rank(method="first"), q=5, labels=[1, 2, 3, 4, 5])\n\n# 客户分群\ndef segment_customer(row):\n    if row["R_score"] >= 4 and row["F_score"] >= 4 and row["M_score"] >= 4:\n        return "高价值客户"\n    elif row["R_score"] >= 3 and row["F_score"] >= 3:\n        return "潜力客户"\n    elif row["R_score"] <= 2:\n        return "流失风险客户"\n    else:\n        return "一般客户"\n\nrfm["segment"] = rfm.apply(segment_customer, axis=1)\nprint(rfm["segment"].value_counts())'
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
        solution: '# Python代码示例\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\n# 标准化\nscaler = StandardScaler()\nrfm_scaled = scaler.fit_transform(rfm[["recency", "frequency", "monetary"]])\n\n# 肘部法则确定K值\ninertias = []\nK = range(2, 10)\nfor k in K:\n    kmeans = KMeans(n_clusters=k, random_state=42)\n    kmeans.fit(rfm_scaled)\n    inertias.append(kmeans.inertia_)\n\nplt.plot(K, inertias, "bo-")\nplt.xlabel("K值")\nplt.ylabel("惯性")\nplt.title("肘部法则")\nplt.show()\n\n# K-Means聚类\nkmeans = KMeans(n_clusters=4, random_state=42)\nrfm["cluster"] = kmeans.fit_predict(rfm_scaled)\n\n# 各簇特征\nprint(rfm.groupby("cluster")[["recency", "frequency", "monetary"]].mean())'
      }
    ]
  },
  {
    id: 'project-4',
    title: '销售预测分析',
    description: '使用时间序列分析方法预测未来销售趋势。',
    difficulty: 3,
    category: 'Python分析',
    estimatedTime: '4-5小时',
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
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 按日聚合\ndaily_sales = df.groupby("date")["sales"].sum().reset_index()\ndaily_sales = daily_sales.set_index("date")\n\n# 填充缺失日期\nidx = pd.date_range(daily_sales.index.min(), daily_sales.index.max())\ndaily_sales = daily_sales.reindex(idx, fill_value=0)\ndaily_sales.index.name = "date"\n\nprint(f"数据范围: {daily_sales.index.min()} 到 {daily_sales.index.max()}")\nprint(f"总天数: {len(daily_sales)}")\nprint(daily_sales.head(10))'
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
        solution: '# Python代码示例\nfrom statsmodels.tsa.seasonal import seasonal_decompose\n\n# 移动平均\ndaily_sales["MA7"] = daily_sales["sales"].rolling(window=7).mean()\ndaily_sales["MA30"] = daily_sales["sales"].rolling(window=30).mean()\n\n# 时间序列分解\ndecomposition = seasonal_decompose(daily_sales["sales"], model="additive", period=7)\n\n# 提取成分\ntrend = decomposition.trend\nseasonal = decomposition.seasonal\nresidual = decomposition.resid\n\nprint("趋势成分（最近7天）:", trend.tail(7))\nprint("季节成分（最近7天）:", seasonal.tail(7))'
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
        solution: '# Python代码示例\nfrom statsmodels.tsa.arima.model import ARIMA\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error\n\n# 划分数据集\ntrain_size = int(len(daily_sales) * 0.8)\ntrain = daily_sales["sales"][:train_size]\ntest = daily_sales["sales"][train_size:]\n\n# 训练ARIMA模型\nmodel = ARIMA(train, order=(5, 1, 0))\nmodel_fit = model.fit()\n\n# 预测\npredictions = model_fit.forecast(steps=len(test))\nmae = mean_absolute_error(test, predictions)\nrmse = np.sqrt(mean_squared_error(test, predictions))\n\nprint(f"MAE: {mae:.2f}")\nprint(f"RMSE: {rmse:.2f}")'
      }
    ]
  },
  {
    id: 'project-5',
    title: 'AB测试分析',
    description: '设计和分析A/B测试实验，评估产品改动的效果。',
    difficulty: 2,
    category: 'Python分析',
    estimatedTime: '3-4小时',
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
        solution: '# Python代码示例\nfrom scipy import stats\nimport numpy as np\n\n# 假设条件\nbaseline_rate = 0.10  # 基准转化率\nmde = 0.02  # 最小可检测效应 (20%相对提升)\nalpha = 0.05  # 显著性水平\npower = 0.80  # 统计功效\n\n# 计算样本量\np1 = baseline_rate\np2 = baseline_rate * (1 + mde)\n\nz_alpha = stats.norm.ppf(1 - alpha/2)\nz_beta = stats.norm.ppf(power)\n\nn = ((z_alpha * np.sqrt(2 * p1 * (1-p1)) + \n      z_beta * np.sqrt(p1*(1-p1) + p2*(1-p2)))**2 / (p2-p1)**2)\n\nprint(f"每组所需样本量: {int(np.ceil(n))}")\nprint(f"总样本量: {int(np.ceil(n * 2))}")'
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
        solution: '# Python代码示例\nfrom scipy.stats import chi2_contingency\nimport numpy as np\n\n# 实验数据\n# 对照组\ncontrol_views = 10000\ncontrol_conversions = 500\n\n# 实验组\nexperiment_views = 10000\nexperiment_conversions = 600\n\n# 计算转化率\ncontrol_rate = control_conversions / control_views\nexperiment_rate = experiment_conversions / experiment_views\n\nprint(f"对照组转化率: {control_rate:.4f} ({control_rate*100:.2f}%)")\nprint(f"实验组转化率: {experiment_rate:.4f} ({experiment_rate*100:.2f}%)")\nprint(f"相对提升: {(experiment_rate - control_rate) / control_rate * 100:.2f}%")\n\n# 卡方检验\ncontingency_table = [[control_conversions, control_views - control_conversions],\n                     [experiment_conversions, experiment_views - experiment_conversions]]\nchi2, p_value, dof, expected = chi2_contingency(contingency_table)\n\nprint(f"\\n卡方统计量: {chi2:.4f}")\nprint(f"p值: {p_value:.4f}")'
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
        solution: '# Python代码示例\nimport numpy as np\nfrom scipy import stats\n\n# 置信区间计算\np1 = experiment_conversions / experiment_views\np2 = control_conversions / control_views\nse = np.sqrt(p1*(1-p1)/experiment_views + p2*(1-p2)/control_views)\nz = stats.norm.ppf(0.975)\n\nci_lower = (p1 - p2) - z * se\nci_upper = (p1 - p2) + z * se\n\nprint("=" * 50)\nprint("A/B测试结果分析报告")\nprint("=" * 50)\nprint(f"实验组转化率: {p1*100:.2f}%")\nprint(f"对照组转化率: {p2*100:.2f}%")\nprint(f"绝对提升: {(p1-p2)*100:.2f}%")\nprint(f"相对提升: {(p1-p2)/p2*100:.2f}%")\nprint(f"95%置信区间: [{(ci_lower)*100:.2f}%, {(ci_upper)*100:.2f}%]")\nprint(f"p值: {p_value:.4f}")\n\nif p_value < 0.05 and ci_lower > 0:\n    print("\\n结论: 实验组显著优于对照组，建议上线新功能。")\nelse:\n    print("\\n结论: 未观察到显著差异，建议继续测试或调整方案。")'
      }
    ]
  },
  {
    id: 'project-6',
    title: 'SQL数据分析',
    description: '使用SQL进行复杂的数据查询和分析。',
    difficulty: 2,
    category: 'SQL分析',
    estimatedTime: '2-3小时',
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
        solution: '-- 基础查询分析\n-- 1. 查询每月销售额\nSELECT \n    DATE_FORMAT(order_date, "%Y-%m") as month,\n    COUNT(*) as order_count,\n    SUM(amount) as total_sales,\n    AVG(amount) as avg_order_value\nFROM orders\nWHERE order_date >= "2024-01-01"\nGROUP BY DATE_FORMAT(order_date, "%Y-%m")\nORDER BY month;\n\n-- 2. 按产品类别统计\nSELECT \n    p.category_name,\n    COUNT(DISTINCT o.customer_id) as customer_count,\n    SUM(o.amount) as total_sales\nFROM orders o\nJOIN products p ON o.product_id = p.product_id\nGROUP BY p.category_name\nHAVING total_sales > 10000\nORDER BY total_sales DESC;'
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
        solution: '-- 多表关联查询\n-- 查询每个客户的订单详情和产品信息\nSELECT \n    c.customer_name,\n    c.city,\n    o.order_id,\n    o.order_date,\n    p.product_name,\n    p.category_name,\n    oi.quantity,\n    oi.price,\n    (oi.quantity * oi.price) as line_total\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id\nINNER JOIN order_items oi ON o.order_id = oi.order_id\nINNER JOIN products p ON oi.product_id = p.product_id\nWHERE o.order_date >= "2024-01-01"\nORDER BY c.customer_name, o.order_date;'
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
        solution: '-- 窗口函数分析\n-- 1. 客户月度购买排名\nSELECT \n    customer_id,\n    DATE_FORMAT(order_date, "%Y-%m") as month,\n    SUM(amount) as monthly_sales,\n    ROW_NUMBER() OVER (PARTITION BY DATE_FORMAT(order_date, \"%Y-%m\") \n                        ORDER BY SUM(amount) DESC) as monthly_rank\nFROM orders\nGROUP BY customer_id, DATE_FORMAT(order_date, \"%Y-%m\")\nLIMIT 20;\n\n-- 2. 计算月环比增长\nWITH monthly_sales AS (\n    SELECT \n        DATE_FORMAT(order_date, \"%Y-%m\") as month,\n        SUM(amount) as sales\n    FROM orders\n    GROUP BY DATE_FORMAT(order_date, \"%Y-%m\")\n)\nSELECT \n    month,\n    sales,\n    LAG(sales) OVER (ORDER BY month) as prev_month_sales,\n    sales - LAG(sales) OVER (ORDER BY month) as growth_amount,\n    ROUND((sales - LAG(sales) OVER (ORDER BY month)) / \n          LAG(sales) OVER (ORDER BY month) * 100, 2) as growth_rate\nFROM monthly_sales\nORDER BY month;'
      }
    ]
  },
  {
    id: 'project-7',
    title: '数据可视化仪表板',
    description: '使用Python创建交互式数据可视化仪表板。',
    difficulty: 2,
    category: 'Python可视化',
    estimatedTime: '3-4小时',
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
        solution: '# Python代码示例\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport pandas as pd\n\n# 设置全局样式\nplt.style.use("seaborn-v0_8-whitegrid")\nsns.set_palette("husl")\n\n# 创建仪表板布局\nfig = plt.figure(figsize=(20, 12))\nfig.suptitle("销售数据分析仪表板", fontsize=24, fontweight="bold", y=1.02)\n\n# 创建子图布局\ngs = fig.add_gridspec(3, 3, hspace=0.3, wspace=0.3)\n\n# 1. KPI卡片区\nax1 = fig.add_subplot(gs[0, 0])\nax2 = fig.add_subplot(gs[0, 1])\nax3 = fig.add_subplot(gs[0, 2])\n\n# 2. 主图表区\nax4 = fig.add_subplot(gs[1, :2])\nax5 = fig.add_subplot(gs[1, 2])\n\n# 3. 底部图表区\nax6 = fig.add_subplot(gs[2, :])\n\nprint("仪表板布局设计完成！")\nprint("请继续添加具体图表内容。")'
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
        solution: '# Python代码示例\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom matplotlib.patches import FancyBboxPatch\n\ndef create_kpi_card(ax, title, value, unit="", change=None):\n    # 卡片背景\n    ax.add_patch(FancyBboxPatch((0.1, 0.1), 0.8, 0.8, \n                                 boxstyle="round,pad=0.02\", \n                                 facecolor=\"white\", \n                                 edgecolor=\"gray\",\n                                 linewidth=2,\n                                 transform=ax.transAxes))\n    \n    # 标题\n    ax.text(0.5, 0.75, title, fontsize=12, ha="center", \n            va="center", transform=ax.transAxes, color="gray")\n    \n    # 数值\n    ax.text(0.5, 0.5, f"{value}{unit}", fontsize=24, ha="center\", \n            va="center", transform=ax.transAxes, fontweight="bold")\n    \n    # 变化指示\n    if change is not None:\n        color = "green" if change > 0 else "red"\n        symbol = "↑" if change > 0 else "↓"\n        ax.text(0.5, 0.25, f"{symbol} {abs(change):.1f}%", fontsize=12, \n                ha="center", va="center", transform=ax.transAxes, color=color)\n    \n    ax.set_xlim(0, 1)\n    ax.set_ylim(0, 1)\n    ax.axis("off")\n\n# 创建KPI卡片\nfig, axes = plt.subplots(1, 4, figsize=(16, 4))\ncreate_kpi_card(axes[0], "总销售额", "¥1,234,567", "", 15.2)\ncreate_kpi_card(axes[1], "订单数", "8,901", "笔", 8.5)\ncreate_kpi_card(axes[2], "客单价", "¥138.7", "", -2.3)\ncreate_kpi_card(axes[3], "转化率", "3.45", "%", 0.8)\n\nplt.tight_layout()\nplt.show()'
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
        solution: '# Python代码示例\nimport plotly.express as px\nimport plotly.graph_objects as go\nfrom plotly.subplots import make_subplots\nimport pandas as pd\n\n# 创建交互式仪表板\nfig = make_subplots(\n    rows=2, cols=2,\n    subplot_titles=(\n        "月度销售额趋势\", \n        \"产品类别占比\", \n        \"地区销售对比\", \n        \"Top 10 产品\"\n    ),\n    specs=[\n        [{\"type\": \"scatter\"}, {\"type\": \"pie\"}],\n        [{\"type\": \"bar\"}, {\"type\": \"bar\"}]\n    ]\n)\n\n# 1. 月度趋势\nfig.add_trace(\n    go.Scatter(x=monthly_sales.index, y=monthly_sales.values, \n               mode=\"lines+markers\", name=\"销售额\"),\n    row=1, col=1\n)\n\n# 2. 饼图\nfig.add_trace(\n    go.Pie(labels=category_sales.index, values=category_sales.values,\n           hole=0.4, name=\"销售占比\"),\n    row=1, col=2\n)\n\n# 3. 地区柱状图\nfig.add_trace(\n    go.Bar(x=region_sales.values, y=region_sales.index, \n           orientation=\"h\", name=\"地区销售\"),\n    row=2, col=1\n)\n\n# 更新布局\nfig.update_layout(\n    height=800,\n    width=1200,\n    showlegend=True,\n    title_text=\"销售数据分析仪表板\"\n)\n\nfig.show()'
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
        solution: '# Python代码示例\nimport numpy as np\nimport pandas as pd\n\n# Z-score方法\ndef detect_outliers_zscore(data, threshold=3):\n    z_scores = np.abs((data - data.mean()) / data.std())\n    return z_scores > threshold\n\n# IQR方法\ndef detect_outliers_iqr(data, multiplier=1.5):\n    Q1 = data.quantile(0.25)\n    Q3 = data.quantile(0.75)\n    IQR = Q3 - Q1\n    lower_bound = Q1 - multiplier * IQR\n    upper_bound = Q3 + multiplier * IQR\n    return (data < lower_bound) | (data > upper_bound)\n\n# 检测异常\ndf["z_score_outlier"] = detect_outliers_zscore(df["amount"])\ndf["iqr_outlier"] = detect_outliers_iqr(df["amount"])\n\nprint(f"Z-score异常数: {df[\"z_score_outlier\"].sum()}\")\nprint(f"IQR异常数: {df[\"iqr_outlier\"].sum()}\")\n\n# 异常交易详情\noutliers = df[df["z_score_outlier"]].sort_values("amount", ascending=False)\nprint("\\n异常交易:")\nprint(outliers[[\"transaction_id\", \"amount\", \"customer_id\", \"date\"]].head(10))'
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
        solution: '# Python代码示例\nfrom sklearn.ensemble import IsolationForest\nfrom sklearn.preprocessing import StandardScaler\nimport pandas as pd\nimport numpy as np\n\n# 特征工程\nfeatures = ["amount", "quantity", "hour", "day_of_week"]\nX = df[features].copy()\n\n# 处理缺失值\nX = X.fillna(X.median())\n\n# 标准化\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n# 训练Isolation Forest\niso_forest = IsolationForest(\n    n_estimators=100,\n    contamination=0.01,  # 假设1%的数据是异常\n    random_state=42\n)\n\ndf["anomaly"] = iso_forest.fit_predict(X_scaled)\ndf["anomaly_score"] = iso_forest.decision_function(X_scaled)\n\n# 异常交易\nanomalies = df[df["anomaly"] == -1]\nprint(f"检测到的异常交易数: {len(anomalies)}\")\nprint(f"异常比例: {len(anomalies) / len(df) * 100:.2f}%\")\nprint("\\n异常交易详情:")\nprint(anomalies[[\"transaction_id\", \"amount\", \"anomaly_score\"]].head(10))'
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
        solution: '# Python代码示例\nimport pandas as pd\n\nanomalies = df[df["anomaly"] == -1]\nprint("异常交易总数:", len(anomalies))\nprint("异常交易总金额:", anomalies["amount"].sum())\n\nsuspicious = anomalies.groupby("customer_id").size().sort_values(ascending=False)\nprint(suspicious.head(10))\n\nprint("风控建议:")\nprint("1. 对高频异常交易客户进行人工审核")\nprint("2. 建立实时风控规则")'
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
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 识别用户首次活跃日期（Cohort Index）\ndf["order_date"] = pd.to_datetime(df["order_date"])\nfirst_purchase = df.groupby("customer_id")["order_date"].min().reset_index()\nfirst_purchase.columns = ["customer_id", "first_purchase_date"]\n\n# 合并Cohort信息\ndf = df.merge(first_purchase, on="customer_id")\n\n# 计算Cohort月份\ndf["cohort_month"] = df["first_purchase_date"].dt.to_period("M")\ndf["order_month"] = df["order_date"].dt.to_period("M")\ndf["cohort_index"] = (df["order_month"].astype(int) - df["cohort_month"].astype(int))\n\n# 构建Cohort矩阵\ncohort_data = df.groupby(["cohort_month", "cohort_index"])["customer_id"].nunique().reset_index()\ncohort_pivot = cohort_data.pivot(index="cohort_month", columns="cohort_index", values="customer_id")\n\nprint(\"Cohort用户留存矩阵:\")\nprint(cohort_pivot.head(10))'
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
        solution: '# Python代码示例\n# 计算留存率\ncohort_size = cohort_pivot.iloc[:, 0]\nretention_rate = cohort_pivot.divide(cohort_size, axis=0) * 100\n\n# 格式化显示\nretention_display = retention_rate.round(1).astype(str) + \"%\"\n\nprint(\"留存率矩阵 (%):\")\nprint(retention_display.head(10))\n\n# 平均留存率\navg_retention = retention_rate.mean()\nprint(\"\\n各月份平均留存率:\")\nprint(avg_retention.round(2))'
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
        solution: '# Python代码示例\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport pandas as pd\nimport numpy as np\n\n# 设置中文字体\nplt.rcParams["font.sans-serif\"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus\"] = False\n\n# 创建热力图\nfig, ax = plt.subplots(figsize=(15, 8))\n\n# 准备数据（取前12个月）\nretention_heatmap = retention_rate.iloc[:12, :12]\n\n# 绘制热力图\nsns.heatmap(retention_heatmap, \n            annot=True, \n            fmt=\".1f\", \n            cmap=\"YlGnBu\",\n            ax=ax,\n            vmin=0,\n            vmax=100,\n            cbar_kws={\"label\": \"留存率 (%)\"})\n\nax.set_title(\"用户留存率热力图\", fontsize=16, pad=20)\nax.set_xlabel(\"距首次购买月数\", fontsize=12)\nax.set_ylabel(\"用户首次购买月份\", fontsize=12)\n\nplt.tight_layout()\nplt.show()\n\n# 分析结论\nprint(\"\\n留存分析结论:\")\nprint(f\"1. 次月留存率: {retention_rate.iloc[:, 1].mean():.1f}%\")\nprint(f\"2. 3个月留存率: {retention_rate.iloc[:, 3].mean():.1f}%\")\nprint(f\"3. 6个月留存率: {retention_rate.iloc[:, 6].mean():.1f}%\")\nprint(\"\\n建议: 重点关注新用户的前30天运营，优化新手引导流程。\")'
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
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 加载数据\ndf = pd.read_csv("business_data.csv\")\n\n# 数据概览\nprint(\"=\" * 60)\nprint(\"数据概览\")\nprint(\"=\" * 60)\nprint(f\"\\n数据维度: {df.shape[0]} 行 x {df.shape[1]} 列\")\nprint(f\"\\n列名: {df.columns.tolist()}\")\n\n# 数据类型\nprint(f\"\\n数据类型:\")\nprint(df.dtypes)\n\n# 缺失值\nprint(f\"\\n缺失值统计:\")\nmissing = df.isnull().sum()\nmissing_pct = (missing / len(df) * 100).round(2)\nmissing_df = pd.DataFrame({\"缺失数\": missing, \"缺失率(%)\": missing_pct})\nprint(missing_df[missing_df[\"缺失数\"] > 0])\n\n# 数值统计\nprint(f\"\\n数值统计:\")\nprint(df.describe())'
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
        solution: '# Python代码示例\nimport pandas as pd\nimport numpy as np\n\n# 1. 用户分析\nprint(\"=\" * 60)\nprint(\"用户分析\")\nprint(\"=\" * 60)\n\n# 用户活跃度分布\nuser_activity = df.groupby("user_id").agg({\n    \"session_id\": \"count\",\n    \"page_views\": \"sum\",\n    \"duration\": \"mean\"\n}).round(2)\nuser_activity.columns = [\"访问次数\", \"浏览页数\", \"平均时长\"]\n\n# 用户分群\nuser_activity[\"用户类型\"] = pd.cut(\n    user_activity[\"访问次数\"],\n    bins=[0, 3, 10, 100],\n    labels=[\"低活跃\", \"中活跃\", \"高活跃\"]\n)\nprint(\"\\n用户类型分布:\")\nprint(user_activity[\"用户类型\"].value_counts())\n\n# 2. 产品分析\nprint(\"\\n\" + \"=\" * 60)\nprint(\"产品分析\")\nprint(\"=\" * 60)\n\nproduct_stats = df.groupby(\"product_name\").agg({\n    \"sales\": \"sum\",\n    \"quantity\": \"sum\",\n    \"customer_id\": \"nunique\"\n}).round(2)\nproduct_stats.columns = [\"销售额\", \"销量\", \"购买客户数\"]\nproduct_stats = product_stats.sort_values(\"销售额\", ascending=False)\nprint(\"\\nTop 10 产品:\")\nprint(product_stats.head(10))\n\n# 3. 时间趋势\nprint(\"\\n\" + \"=\" * 60)\nprint(\"时间趋势分析\")\nprint(\"=\" * 60)\n\ndf[\"date\"] = pd.to_datetime(df[\"date\"])\ndf[\"month\"] = df[\"date\"].dt.to_period(\"M\")\n\nmonthly_trend = df.groupby(\"month\").agg({\n    \"sales\": \"sum\",\n    \"order_id\": \"nunique\",\n    \"customer_id\": \"nunique\"\n}).round(2)\nmonthly_trend.columns = [\"销售额\", \"订单数\", \"客户数\"]\nprint(\"\\n月度趋势:\")\nprint(monthly_trend)\n\n# 4. 相关性分析\nprint(\"\\n\" + \"=\" * 60)\nprint(\"相关性分析\")\nprint(\"=\" * 60)\n\nnumeric_cols = [\"sales\", \"quantity\", \"price\", \"page_views\", \"duration\"]\ncorr_matrix = df[numeric_cols].corr()\nprint(\"\\n相关系数矩阵:\")\nprint(corr_matrix.round(3))'
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
        solution: '# Python代码示例\nimport pandas as pd\n\nreport = f"""数据分析报告\n\n1. 整体业绩\n   - 总销售额: {df["sales"].sum():.2f}\n   - 累计订单: {len(df["order_id"].unique())}\n   - 活跃客户: {len(df["customer_id"].unique())}\n\n2. 关键发现\n   - 用户活跃度与消费金额呈正相关\n   - 周末订单量较高\n   - 产品集中度较高\n\n3. 建议措施\n   - 建立用户分层运营体系\n   - 优化产品组合\n   - 增加营销活动"""\nprint(report)'
      }
    ]
  }
];
