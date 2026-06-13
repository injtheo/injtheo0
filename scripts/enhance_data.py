#!/usr/bin/env python3
"""
数据增强脚本：为所有练习题、测验题和项目任务添加完整字段

添加字段：
- 练习题/测验题：explanation（解析）、tags（知识点标签）、difficulty（难度）
- 项目任务：tags（知识点标签）
"""

import re
import os
import sys

# ============================================================
# 1. 解析数据 - 智能生成解析内容
# ============================================================

# 课程知识点映射（根据 ex-X-Y-Z 中的 X 即课程号，以及题目关键词生成解析）
COURSE_KNOWLEDGE = {
    1: {  # 数据分析基础
        'name': '数据分析基础',
        'base_tags': ['数据分析', '业务分析', '分析方法'],
        'style': 'concept',
        'keywords': {
            '描述性': {'tag': '描述性分析', 'concept': '描述性分析回答"发生了什么"，通过汇总数据呈现现状'},
            '诊断性': {'tag': '诊断性分析', 'concept': '诊断性分析回答"为什么发生"，通过数据挖掘找出原因'},
            '预测性': {'tag': '预测性分析', 'concept': '预测性分析回答"将会发生什么"，基于历史数据预测未来'},
            '规范性': {'tag': '规范性分析', 'concept': '规范性分析回答"应该怎么做"，通过优化模型指导决策'},
            '流程|步骤': {'tag': '分析流程', 'concept': '数据分析标准流程：问题定义→数据收集→数据清洗→数据探索→数据建模→数据可视化→结果呈现'},
            'CRISP': {'tag': 'CRISP-DM', 'concept': 'CRISP-DM包含6个阶段：业务理解、数据理解、数据准备、建模、评估、部署'},
            '工具|Excel|Python|SQL|Tableau': {'tag': '分析工具', 'concept': 'Excel适合基础分析，Python/SQL适合复杂处理，BI工具适合交互式可视化'},
            '业务|问题|定义': {'tag': '业务理解', 'concept': '业务理解是数据分析第一步，需要将模糊需求转化为可分析的数据问题'},
            'MECE': {'tag': 'MECE原则', 'concept': 'MECE即"相互独立，完全穷尽"，确保分析维度不重叠、不遗漏'},
            'SMART': {'tag': 'SMART原则', 'concept': 'SMART：Specific具体、Measurable可衡量、Achievable可实现、Relevant相关、Time-bound有时限'},
            'OMTM': {'tag': '北极星指标', 'concept': 'OMTM（One Metric That Matters）即唯一关键指标/北极星指标，聚焦核心业务目标'},
            '5W1H|What|Why|Where|When|Who|How': {'tag': '5W1H分析', 'concept': '5W1H从What/Why/Where/When/Who/How六个维度全面分析问题'},
            '假设|驱动': {'tag': '假设驱动', 'concept': '假设驱动分析：提出假设→设计验证→收集数据→验证结论，提高分析效率'},
            '领先|滞后|指标': {'tag': '指标体系', 'concept': '领先指标预测未来（如新注册用户），滞后指标反映过去（如月度销售额）'},
            '决策|目的|最终': {'tag': '数据驱动决策', 'concept': '数据分析的最终目的是支持业务决策，让数据说话，而非单纯生成报告'},
            '问题定义|第一步': {'tag': '问题定义', 'concept': '数据分析流程的第一步是问题定义，明确分析目标才能有效收集和分析数据'},
        }
    },
    2: {  # Excel数据处理
        'name': 'Excel数据处理',
        'base_tags': ['Excel', '数据处理', '表格操作'],
        'style': 'operation',
        'keywords': {
            '数据有效性|下拉列表': {'tag': '数据有效性', 'concept': '数据有效性可以限制输入类型、创建下拉列表，确保数据规范统一'},
            'Ctrl.*L|筛选': {'tag': '数据筛选', 'concept': 'Ctrl+Shift+L 是快速筛选数据的快捷键，也可通过数据选项卡设置筛选'},
            'Ctrl.*E|快速填充': {'tag': '快速填充', 'concept': 'Ctrl+E 智能识别数据模式进行快速填充，适合提取/合并/格式化数据'},
            '冻结|窗格': {'tag': '冻结窗格', 'concept': '冻结窗格在视图选项卡中，可固定首行或首列，便于查看大数据表'},
            'Alt.*=|自动求和|求和': {'tag': '自动求和', 'concept': 'Alt+= 一键自动求和，快速计算选定区域的合计值'},
            'Ctrl.*End|跳转': {'tag': '快捷导航', 'concept': 'Ctrl+End 跳转到最后一个有数据的单元格，Ctrl+Home 跳转到A1'},
            'VLOOKUP|HLOOKUP|查找': {'tag': 'VLOOKUP函数', 'concept': 'VLOOKUP按列垂直查找，语法：VLOOKUP(查找值, 查找范围, 返回列号, 匹配类型)'},
            'SUMIF|COUNTIF|条件': {'tag': '条件函数', 'concept': 'SUMIF/COUNTIF按条件汇总数据，SUMIFS支持多条件汇总'},
            'IF|嵌套|判断': {'tag': 'IF函数', 'concept': 'IF函数进行条件判断，语法：IF(条件, 满足时的值, 不满足时的值)，可多层嵌套'},
            'INDEX.*MATCH|INDEX|MATCH': {'tag': 'INDEX-MATCH', 'concept': 'INDEX+MATCH组合比VLOOKUP更灵活，支持左向查找和多条件匹配'},
            '透视表|PivotTable': {'tag': '数据透视表', 'concept': '数据透视表可快速汇总分析多维度数据，支持拖拽操作，实时更新'},
            '条件格式': {'tag': '条件格式', 'concept': '条件格式根据规则自动设置单元格格式，便于发现异常值和趋势'},
            '图表|可视化|折线|柱状|饼图': {'tag': '图表制作', 'concept': 'Excel图表：折线图看趋势、柱状图比大小、饼图看占比、散点图看相关性'},
            '函数|SUM|AVERAGE|MAX|MIN|COUNT': {'tag': '统计函数', 'concept': '常用统计函数：SUM求和、AVERAGE平均、MAX/MIN极值、COUNT计数'},
            '绝对引用|$|相对引用': {'tag': '单元格引用', 'concept': '相对引用(A1)复制时会变化，绝对引用($A$1)固定不变，混合引用($A1或A$1)部分固定'},
            '文本|分列|TEXT': {'tag': '文本处理', 'concept': '数据分列可按分隔符拆分文本，TEXT函数可格式化数字为文本'},
            '日期|DATEDIF|NOW|TODAY': {'tag': '日期函数', 'concept': 'TODAY返回当前日期，NOW返回当前时间，DATEDIF可计算日期间隔'},
        }
    },
    3: {  # Python数据分析
        'name': 'Python数据分析',
        'base_tags': ['Python', '编程基础', '数据分析'],
        'style': 'code',
        'keywords': {
            'pandas|Pandas|PANAS': {'tag': 'Pandas', 'concept': 'Pandas是Python数据分析核心库，提供DataFrame和Series两种主要数据结构'},
            'read_csv|read_excel|读取|导入': {'tag': '数据读取', 'concept': 'pd.read_csv()读取CSV文件，pd.read_excel()读取Excel文件，read_sql()从数据库读取'},
            'DataFrame|Series|数据结构': {'tag': '数据结构', 'concept': 'DataFrame是二维表格结构，Series是一维数组，是Pandas的两种核心数据结构'},
            '清洗|缺失值|null|NaN|isnull|dropna|fillna': {'tag': '数据清洗', 'concept': '处理缺失值：isnull()检测、dropna()删除、fillna()填充；drop_duplicates()去重'},
            '筛选|query|布尔索引|loc|iloc': {'tag': '数据筛选', 'concept': 'df.loc[]基于标签索引，df.iloc[]基于位置索引，布尔索引df[df["col"]>X]按条件筛选'},
            'groupby|分组|聚合|agg|聚合函数': {'tag': '数据聚合', 'concept': 'groupby分组后配合agg()/sum()/mean()等进行聚合分析，类似SQL的GROUP BY'},
            'merge|join|concat|合并|连接': {'tag': '数据合并', 'concept': 'pd.merge()类似SQL JOIN；pd.concat()沿轴堆叠数据；df.join()按索引合并'},
            '排序|sort_values|sort_index|排名': {'tag': '数据排序', 'concept': 'df.sort_values()按列值排序，df.sort_index()按索引排序，ascending控制升降序'},
            'numpy|NumPy|数组|array': {'tag': 'NumPy', 'concept': 'NumPy提供ndarray数组，支持向量化运算，是Pandas、Scikit-learn等库的基础'},
            '循环|for|while|遍历': {'tag': '循环控制', 'concept': 'for循环遍历固定序列，while循环按条件迭代；Python中优先使用列表推导式'},
            '函数|def|lambda|参数|返回': {'tag': '函数定义', 'concept': 'def定义命名函数，lambda创建匿名函数；可设置默认参数、可变参数*args/**kwargs'},
            '列表|字典|元组|集合|List|Dict': {'tag': '数据类型', 'concept': '列表[]可变有序，字典{key:val}键值对，元组()不可变，集合{}去重无序'},
            '切片|索引|索引方式': {'tag': '索引切片', 'concept': 'Python切片s[start:end:step]，左闭右开；索引从0开始，负数索引表示从末尾倒序'},
            'apply|map|applymap|映射': {'tag': '元素映射', 'concept': 'apply对列/行应用函数，map对Series元素映射，applymap对DataFrame逐元素应用'},
            'datetime|时间|日期|to_datetime|dt.': {'tag': '时间处理', 'concept': 'pd.to_datetime()转换日期，dt.year/month/day/weekday等提取时间维度'},
            'matplotlib|seaborn|plot|画图|图表': {'tag': '可视化', 'concept': 'Matplotlib是基础绘图库，Seaborn基于Matplotlib提供更美观的统计图表接口'},
            'describe|info|head|shape|查看数据': {'tag': '探索性分析', 'concept': 'df.head()查看前几行，df.describe()统计摘要，df.info()查看结构和缺失值'},
            'pivot|melt|透视|重塑|长宽表': {'tag': '数据重塑', 'concept': 'pivot_table创建透视表，melt将宽表转为长表，类似Excel数据透视功能'},
        }
    },
    4: {  # 数据可视化原理
        'name': '数据可视化原理',
        'base_tags': ['数据可视化', '图表设计', '可视化原则'],
        'style': 'chart',
        'keywords': {
            '折线|趋势|时间序列|line': {'tag': '折线图', 'concept': '折线图展示数据随时间变化的趋势，适合分析时间序列数据的变化规律'},
            '柱状|条形|比较|对比|bar': {'tag': '柱状图', 'concept': '柱状图用于对比不同类别数据的大小，适合展示分类变量的数值对比'},
            '饼图|占比|比例|pie': {'tag': '饼图', 'concept': '饼图展示各部分占总体的比例，适合显示构成比，但类别过多时不宜使用'},
            '散点|相关性|关系|scatter': {'tag': '散点图', 'concept': '散点图展示两个数值变量间的关系，可识别相关性、聚类和异常值'},
            '直方图|分布|频率|histogram': {'tag': '直方图', 'concept': '直方图展示数值变量的分布形态，可识别数据的集中趋势、离散程度和偏态'},
            '箱线图|四分位|离群值|box': {'tag': '箱线图', 'concept': '箱线图展示数据的四分位数结构，便于识别离群值和多组数据分布对比'},
            '热力图|密度|矩阵|heatmap': {'tag': '热力图', 'concept': '热力图用颜色深浅表示数值大小，适合展示相关性矩阵和空间密度数据'},
            '雷达|多维|综合评价|radar': {'tag': '雷达图', 'concept': '雷达图展示多维度指标，适合综合评价和能力对比，如企业/产品多维度评分'},
            '气泡图|第四维|bubble': {'tag': '气泡图', 'concept': '气泡图在散点图基础上增加气泡大小表示第三维度，可同时展示4个变量'},
            '桑基|流向|路径|sankey': {'tag': '桑基图', 'concept': '桑基图展示数据从一组到另一组的流动路径和流量大小，适合用户行为分析'},
            '图表选择|选择图表|适用场景': {'tag': '图表选择', 'concept': '图表选择原则：比较→柱状/条形，趋势→折线，构成→饼图/堆叠柱，相关→散点'},
            '设计原则|原则|设计|简洁|清晰': {'tag': '可视化设计', 'concept': '可视化设计原则：KISS简洁原则、突出重点、保持一致性、避免误导性图表'},
            '颜色|配色|色彩|color': {'tag': '色彩搭配', 'concept': '配色应考虑语义（红跌绿涨或反之）、色盲友好、对比度和情感表达'},
            'matplotlib|seaborn|plotly|Python可视化': {'tag': 'Python可视化', 'concept': 'Matplotlib基础灵活，Seaborn统计图表美观，Plotly交互式强，三者各有优势'},
            '仪表盘|dashboard|Dashboard': {'tag': '仪表盘', 'concept': '仪表盘整合多个相关指标图表，提供全局视图，支持交互式筛选和钻取'},
            '误导|误导性|错误|陷阱': {'tag': '可视化陷阱', 'concept': '常见陷阱：Y轴不从0开始放大差异、饼图超过5类、3D图表降低可读性、不当使用颜色'},
            '数据墨水|ink|Edward|Tufte': {'tag': '数据墨水比', 'concept': 'Tufte数据墨水比原则：最大化数据墨水，删除多余的非数据装饰元素'},
            '讲故事|story|叙事': {'tag': '数据叙事', 'concept': '好的可视化不仅展示数据，更能讲述故事，引导读者理解发现和结论'},
        }
    },
    5: {  # 商业智能与报表
        'name': '商业智能与报表',
        'base_tags': ['BI', '报表系统', '数据分析'],
        'style': 'business',
        'keywords': {
            'BI|商业智能|Business Intelligence': {'tag': '商业智能', 'concept': 'BI（商业智能）将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策'},
            '数据仓库|Data Warehouse|DW': {'tag': '数据仓库', 'concept': '数据仓库是面向主题、集成、相对稳定、反映历史变化的数据集合，用于支持管理决策'},
            '星型|雪花|schema|星型模式|维度建模': {'tag': '维度建模', 'concept': '星型模式：中心事实表+多个维度表；雪花模式对维度表进一步规范化'},
            '维度|事实|Dimension|Fact': {'tag': '维度与事实', 'concept': '维度表描述分析角度（时间、地区、产品），事实表存储度量数据（销售额、数量）'},
            'ETL|抽取|转换|加载|Extract|Transform|Load': {'tag': 'ETL', 'concept': 'ETL即数据抽取/转换/加载，将分散源系统数据经清洗转换后加载到数据仓库'},
            'DAX|度量值|计算列|Power BI': {'tag': 'DAX', 'concept': 'DAX是Power BI的数据分析表达式语言，用于创建度量值、计算列和层次结构'},
            'Power BI|Tableau|FineBI|工具': {'tag': 'BI工具', 'concept': '主流BI工具：Power BI微软生态友好，Tableau可视化强大，FineBI适合国内企业'},
            '报表|Report|日报|周报|月报': {'tag': '业务报表', 'concept': '业务报表按周期（日/周/月）呈现核心指标，是管理层了解业务状况的主要渠道'},
            'KPI|关键指标|Key Performance': {'tag': 'KPI', 'concept': 'KPI（关键绩效指标）是衡量业务表现的核心指标，应与战略目标紧密相关'},
            'OLAP|钻取|切片|切块|旋转|在线分析': {'tag': 'OLAP分析', 'concept': 'OLAP支持多维度分析操作：钻取查看详情、切片筛选特定维度、旋转改变视角'},
            'Slicer|切片器|筛选器': {'tag': '交互式筛选', 'concept': '切片器提供直观的可视化筛选控件，用户可快速过滤数据，实现交互式分析'},
            '钻取|drill|Drill-through|Drill-down': {'tag': '数据钻取', 'concept': '钻取从汇总数据深入明细数据，可向上钻取（汇总）或向下钻取（明细）'},
            '指标体系|指标': {'tag': '指标体系', 'concept': '指标体系是业务衡量的框架，应包含结果指标、过程指标、领先指标和健康指标'},
            '同比|环比|增长率|YOY|MOM': {'tag': '同比环比', 'concept': '同比（YoY）与去年同期比消除季节性影响，环比（MoM）与上期比看短期趋势变化'},
            '建模|模型|数据建模': {'tag': '数据建模', 'concept': 'BI数据建模设计表关系、度量和层次，是BI系统的核心设计工作，直接影响分析效率'},
        }
    },
    6: {  # 商务数据分析实战
        'name': '商务数据分析实战',
        'base_tags': ['商务分析', '业务分析', '实战案例'],
        'style': 'case',
        'keywords': {
            '商业模式|收入|盈利|Business Model': {'tag': '商业模式', 'concept': '商业模式描述企业如何创造价值、传递价值和获取价值，包括收入来源和成本结构'},
            '用户|客户|分析|生命周期|CLV|LTV': {'tag': '客户分析', 'concept': '客户分析包括客户画像、价值分层（RFM）、生命周期分析、留存与流失分析等'},
            'RFM|最近购买|购买频率|购买金额': {'tag': 'RFM分析', 'concept': 'RFM基于Recency(最近)、Frequency(频率)、Monetary(金额)三维度对客户价值分层'},
            '销售|Sales|销售额|销量|业绩': {'tag': '销售分析', 'concept': '销售分析包括销售趋势、产品结构、区域分布、渠道效果和销售团队绩效分析'},
            '营销|Campaign|ROI|转化率': {'tag': '营销分析', 'concept': '营销分析衡量渠道ROI、用户获取成本（CAC）、转化率和归因，优化营销投入'},
            '产品|Product|SKU|品类': {'tag': '产品分析', 'concept': '产品分析评估SKU表现、ABC分类、产品生命周期、交叉销售和捆绑销售效果'},
            '定价策略|价格|pricing|定价': {'tag': '定价策略', 'concept': '定价策略包括成本加成、竞争定价、价值定价、动态定价，需结合数据制定价格'},
            '市场|Market|份额|竞争|竞品': {'tag': '市场分析', 'concept': '市场分析评估市场规模、份额趋势、竞品策略，识别市场机会和威胁'},
            'A/B测试|AB测试|对照实验|实验': {'tag': 'A/B测试', 'concept': 'A/B测试将用户随机分组接受不同策略，通过统计检验比较效果差异，指导决策'},
            '漏斗|转化|流失|funnel|conversion': {'tag': '漏斗分析', 'concept': '漏斗分析追踪用户从浏览到购买各步骤的转化率，识别流失严重的环节'},
            '留存|churn|流失|retention': {'tag': '留存分析', 'concept': '留存率衡量用户持续使用情况， cohort分析按用户分组观察留存曲线，是产品健康度核心指标'},
            '客户获取|CAC|获客|acquisition': {'tag': '获客分析', 'concept': 'CAC（客户获取成本）衡量获取一个付费客户的成本，应与LTV对比评估健康度'},
            '用户增长|Growth|增长黑客': {'tag': '增长分析', 'concept': '增长分析关注AARRR漏斗（获客→激活→留存→收入→推荐），寻找增长杠杆'},
            '案例|Case|场景|实战': {'tag': '实战案例', 'concept': '案例分析将数据分析方法应用于具体业务场景，从问题定义到数据洞察再到建议'},
            '库存|Inventory|Stock|周转': {'tag': '库存分析', 'concept': '库存分析关注库存周转率、缺货率、滞销品识别、安全库存优化和ABC分类管理'},
            '成本|Cost|利润|Margin|毛利率': {'tag': '财务分析', 'concept': '财务分析关注收入、成本、毛利率、净利润，帮助企业评估经营健康度和盈利水平'},
        }
    },
    7: {  # 统计分析基础
        'name': '统计分析基础',
        'base_tags': ['统计学', '统计分析', '数据统计'],
        'style': 'statistics',
        'keywords': {
            '均值|平均|mean|平均数': {'tag': '均值', 'concept': '均值是数据总和除以个数，对极端值敏感，适合近似对称分布的数据'},
            '中位数|median|中间值': {'tag': '中位数', 'concept': '中位数将数据排序后取中间值，不受极端值影响，适合偏态分布的集中趋势度量'},
            '众数|mode|出现频率|最多': {'tag': '众数', 'concept': '众数是出现频率最高的值，可用于类别数据，可能有多个或不存在'},
            '方差|标准差|variance|std|standard': {'tag': '离散程度', 'concept': '方差衡量数据与均值的偏离程度，标准差是方差的平方根，具有相同单位更易解释'},
            '最大值|最小值|max|min|极值|范围|range': {'tag': '极值', 'concept': '最大值/最小值描述数据范围，极值易受异常值影响，需结合箱线图识别'},
            '四分位|分位数|quantile|percentile|IQR': {'tag': '分位数', 'concept': '四分位数将数据四等分，IQR（Q3-Q1）度量中间50%数据的离散程度，对极端值稳健'},
            '描述性统计|describe|汇总|摘要': {'tag': '描述性统计', 'concept': '描述性统计用数值和图表概括数据特征，包括集中趋势、离散程度、分布形态'},
            '假设检验|p值|P-value|显著性|t检验|t test|检验': {'tag': '假设检验', 'concept': '假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设'},
            '正态分布|高斯分布|normal distribution|钟形': {'tag': '正态分布', 'concept': '正态分布呈钟形曲线对称分布，约68%数据在均值±1σ、95%在±2σ、99.7%在±3σ'},
            '相关性|correlation|r值|相关系数|皮尔逊': {'tag': '相关性分析', 'concept': '皮尔逊相关系数r∈[-1,1]衡量线性相关程度，r=1完全正相关，注意相关≠因果'},
            '回归|regression|预测|线性回归': {'tag': '回归分析', 'concept': '线性回归建立因变量与自变量的线性关系Y=a+bX，可用于预测和解释变量影响'},
            '卡方|chi-square|独立性|拟合优度': {'tag': '卡方检验', 'concept': '卡方检验用于分类变量间的独立性检验和拟合优度检验，比较观察频数与期望频数'},
            '置信区间|confidence|interval|置信度': {'tag': '置信区间', 'concept': '置信区间给出参数估计的范围，95%置信区间意味着重复抽样有约95%概率覆盖真值'},
            '样本|sample|抽样|总体|population': {'tag': '抽样方法', 'concept': '总体是研究的全部对象，样本是从中抽取的部分；简单随机、分层、整群是常用抽样方法'},
            '偏态|skew|skewness|峰度|kurtosis|分布形态': {'tag': '分布形态', 'concept': '偏态系数>0右偏（长尾在右），<0左偏；峰度>0比正态分布尖峭，<0更平坦'},
            '概率|probability|分布|概率分布': {'tag': '概率分布', 'concept': '常用概率分布：二项（n次成功次数）、泊松（单位时间事件数）、正态（连续随机变量）'},
            '贝叶斯|bayes|后验|先验|条件概率': {'tag': '贝叶斯统计', 'concept': '贝叶斯定理：后验概率∝先验概率×似然，将先验知识与观测数据结合更新认知'},
            '因果|causal|因果推断|相关≠因果': {'tag': '因果推断', 'concept': '相关不等于因果！因果推断需要实验设计或特定方法（如DID、断点回归、工具变量）'},
        }
    },
    8: {  # 机器学习入门
        'name': '机器学习入门',
        'base_tags': ['机器学习', '算法', '模型'],
        'style': 'ml',
        'keywords': {
            '监督学习|supervised|标签|labeled data|分类|回归': {'tag': '监督学习', 'concept': '监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值'},
            '无监督学习|unsupervised|聚类|降维|无标签': {'tag': '无监督学习', 'concept': '无监督学习处理无标签数据，聚类发现分组，降维如PCA可视化高维数据'},
            '分类|classifier|预测类别|离散': {'tag': '分类算法', 'concept': '常用分类算法：逻辑回归、决策树、随机森林、SVM、KNN、朴素贝叶斯、神经网络'},
            '回归|regression|线性回归|连续值': {'tag': '回归算法', 'concept': '回归预测连续值，线性回归最基础，随机森林/GBDT/XGBoost是常用的非线性回归方法'},
            '聚类|cluster|K-means|K均值|分组': {'tag': '聚类算法', 'concept': 'K-means最常用聚类算法，通过迭代将数据分为K簇；需先确定K值；对初始质心敏感'},
            'KNN|k近邻|K-Nearest|neighbor': {'tag': 'KNN', 'concept': 'KNN基于距离分类，简单直观但计算量大，对高维数据和不相关特征敏感，需标准化特征'},
            '决策树|tree|Decision Tree|分裂|节点': {'tag': '决策树', 'concept': '决策树按特征递归分裂，易解释但易过拟合；CART二叉树、ID3/C4.5多叉树是常见类型'},
            '随机森林|Random Forest|集成|ensemble': {'tag': '随机森林', 'concept': '随机森林是Bagging集成方法，训练多棵决策树投票预测，减少过拟合，稳定性好'},
            '过拟合|overfit|欠拟合|underfit|泛化': {'tag': '过拟合与欠拟合', 'concept': '过拟合在训练集表现好但测试集差（记忆了噪声），欠拟合都差（模型太简单）；通过验证集诊断'},
            '特征工程|feature|特征选择|特征提取': {'tag': '特征工程', 'concept': '特征工程将原始数据转化为模型可用的特征，包括缺失值处理、编码、缩放、特征选择和特征交互'},
            '训练集|测试集|验证集|train|test|validation|划分': {'tag': '数据集划分', 'concept': '数据划分为训练集（训练模型）、验证集（调参）、测试集（最终评估）；70-30或80-20是常见比例'},
            '准确率|accuracy|精确率|precision|召回率|recall|F1|混淆矩阵': {'tag': '分类评估', 'concept': '分类评估：准确率=预测正确数/总数；精确率/召回率/F1对类别不平衡场景更重要；混淆矩阵可视化'},
            'MAE|MSE|RMSE|R²|决定系数|均方误差': {'tag': '回归评估', 'concept': '回归评估：MAE平均绝对误差、MSE均方误差、RMSE均方根误差、R²决定系数（0~1越大越好）'},
            '交叉验证|cross-validation|CV|KFold|k折': {'tag': '交叉验证', 'concept': 'K折交叉验证将数据K等分，每次用K-1份训练、1份验证，轮换K次，更稳定地评估模型'},
            '网格搜索|grid search|超参数|调参|parameter': {'tag': '超参数调优', 'concept': '网格搜索遍历超参数组合，配合交叉验证寻找最优参数；随机搜索在大范围搜索更高效'},
            '梯度下降|gradient descent|学习率|learning rate': {'tag': '优化算法', 'concept': '梯度下降沿负梯度方向迭代更新参数，学习率控制步长；SGD随机、Adam自适应是常用变体'},
            'SVM|支持向量机|Support Vector|核函数': {'tag': 'SVM', 'concept': 'SVM寻找最大间隔超平面分类，通过核函数（线性/RBF/多项式）处理非线性分类问题'},
            '逻辑回归|Logistic|sigmoid|概率': {'tag': '逻辑回归', 'concept': '逻辑回归用sigmoid函数将线性组合压缩到[0,1]作为类别概率，可解释性强，是分类基准模型'},
            '神经网络|Neural Network|deep learning|深度学习': {'tag': '神经网络', 'concept': '神经网络由多层神经元组成，深度学习是多层神经网络；CNN用于图像、RNN/LSTM用于序列'},
            'scikit-learn|sklearn|Python机器学习': {'tag': 'sklearn', 'concept': 'Scikit-learn是Python最流行的ML库，提供统一API，涵盖分类/回归/聚类/降维/预处理'},
        }
    },
    9: {  # SQL与数据库
        'name': 'SQL与数据库',
        'base_tags': ['SQL', '数据库', '数据查询'],
        'style': 'sql',
        'keywords': {
            'SELECT|查询|选择|select': {'tag': 'SELECT查询', 'concept': 'SELECT列名 FROM表名 WHERE条件；SELECT *选择所有列，SELECT DISTINCT去重查询'},
            'WHERE|条件|过滤|筛选': {'tag': 'WHERE筛选', 'concept': 'WHERE子句筛选行：=、<>、>、<、>=、<=，配合AND/OR/NOT组合多条件；也可用IN、BETWEEN、LIKE'},
            'JOIN|连接|LEFT|RIGHT|INNER|FULL|连接表': {'tag': 'JOIN连接', 'concept': 'INNER JOIN返回匹配行，LEFT JOIN保留左表所有行，RIGHT JOIN保留右表，FULL JOIN保留两表'},
            'GROUP BY|分组|聚合|分组查询': {'tag': '分组聚合', 'concept': 'GROUP BY按列分组，配合聚合函数（COUNT/SUM/AVG/MAX/MIN）；WHERE在分组前筛行，HAVING在分组后筛组'},
            'ORDER BY|排序|ASC|DESC|升序|降序': {'tag': '排序', 'concept': 'ORDER BY列名 ASC/DESC；ASC升序（默认）、DESC降序；可按多列排序'},
            '子查询|subquery|嵌套|嵌套查询|IN|EXISTS': {'tag': '子查询', 'concept': '子查询嵌套在主查询中，可出现在WHERE/FROM/SELECT中；IN/EXISTS/ANY/ALL配合使用'},
            '窗口函数|window|ROW_NUMBER|RANK|DENSE_RANK|OVER': {'tag': '窗口函数', 'concept': '窗口函数在分组内计算但不压缩行数：OVER(PARTITION BY列 ORDER BY列)；ROW_NUMBER/RANK/DENSE_RANK排名'},
            '聚合函数|COUNT|SUM|AVG|MAX|MIN': {'tag': '聚合函数', 'concept': 'COUNT计数、SUM求和、AVG平均、MAX最大值、MIN最小值；聚合函数忽略NULL值'},
            'INSERT|插入|新增|insert': {'tag': '插入数据', 'concept': 'INSERT INTO表(列) VALUES(值)；可插入单行、多行，或通过INSERT...SELECT从其他表批量插入'},
            'UPDATE|更新|修改|update': {'tag': '更新数据', 'concept': 'UPDATE表 SET列=值 WHERE条件；务必加WHERE否则修改全行！事务保护和先SELECT验证很重要'},
            'DELETE|删除|delete': {'tag': '删除数据', 'concept': 'DELETE FROM表 WHERE条件；务必加WHERE否则清空表；TRUNCATE快速清空整表（不可回滚）'},
            'CREATE TABLE|建表|创建表|表结构': {'tag': '建表语句', 'concept': 'CREATE TABLE表(列名 数据类型 约束)；常用约束：PRIMARY KEY、FOREIGN KEY、NOT NULL、UNIQUE、DEFAULT、CHECK'},
            '主键|PRIMARY KEY|PK|外键|FOREIGN KEY|FK': {'tag': '键与约束', 'concept': '主键唯一标识行（非空且唯一），外键引用其他表主键保证引用完整性；UNIQUE保证列值唯一'},
            '索引|index|性能|查询优化': {'tag': '索引优化', 'concept': '索引加速查询但占用空间和写入成本；常用B树索引；SELECT前使用EXPLAIN分析执行计划'},
            '事务|transaction|ACID|commit|rollback': {'tag': '事务', 'concept': '事务是原子操作单元，ACID特性：原子性Atomic、一致性Consistent、隔离性Isolated、持久性Durable'},
            '视图|VIEW|虚拟表': {'tag': '视图', 'concept': '视图是存储的查询结果，像虚拟表一样使用；简化复杂查询、提供安全层、隐藏表结构细节'},
            'NULL|空值|IS NULL|IS NOT NULL|空': {'tag': '空值处理', 'concept': 'NULL表示缺失值，判断NULL必须用IS NULL/IS NOT NULL（=NULL永远为false）；COALESCE返回第一个非空值'},
            'LIKE|模糊匹配|通配符|%|_': {'tag': '模糊查询', 'concept': 'LIKE模糊匹配：%匹配0或多个字符、_匹配单个字符；也可用REGEXP进行正则匹配（视数据库而定）'},
            'HAVING|分组筛选|having': {'tag': 'HAVING', 'concept': 'HAVING筛选GROUP BY后的分组结果，必须与GROUP BY配合；WHERE在分组前、HAVING在分组后筛选'},
            'LIMIT|TOP|限制行数|分页': {'tag': '限制行数', 'concept': 'LIMIT限制返回行数，MySQL用LIMIT m,n或LIMIT n OFFSET m实现分页；SQL Server用TOP、Oracle用ROWNUM'},
            'CTE|WITH|公用表表达式|Common Table': {'tag': 'CTE', 'concept': 'WITH别名AS(子查询)定义CTE，将复杂查询模块化，比嵌套子查询更易读，也可递归使用'},
        }
    },
    10: {  # 数据思维与行业应用
        'name': '数据思维与行业应用',
        'base_tags': ['数据思维', '行业应用', '数据分析'],
        'style': 'thinking',
        'keywords': {
            '思维|数据驱动|mindset|数据思维|思维方式': {'tag': '数据思维', 'concept': '数据思维是基于数据而非直觉进行决策的思维方式，强调客观、可度量、可验证'},
            '电商|零售|e-commerce|电子商务': {'tag': '电商分析', 'concept': '电商数据分析关注GMV、转化率、客单价、复购率、退货率、用户增长和商品策略优化'},
            '金融|银行|Fintech|风控|风险': {'tag': '金融分析', 'concept': '金融数据分析应用于风控评分、反欺诈、客户分群、营销响应预测和合规监管'},
            '医疗|健康|healthcare|医院|医学': {'tag': '医疗分析', 'concept': '医疗数据应用于疾病预测模型、临床路径优化、医院运营分析、药物研发和医疗质量监控'},
            '教育|learning|学习|学生': {'tag': '教育分析', 'concept': '教育数据分析学生学习行为、预测辍学风险、优化教学内容、个性化推荐和学习效果评估'},
            '物流|供应链|supply chain|库存|仓储': {'tag': '物流供应链', 'concept': '物流分析关注路径优化、库存管理、需求预测、成本控制、供应商评价和物流网络规划'},
            '互联网|产品|App|用户行为': {'tag': '互联网分析', 'concept': '互联网数据分析关注用户行为、产品迭代效果、DAU/MAU增长、渠道ROI和推荐系统优化'},
            '房地产|地产|房产': {'tag': '地产分析', 'concept': '房地产分析评估房价走势、地段价值、投资回报率、客户画像和市场供需动态'},
            '制造业|工业|工厂|production': {'tag': '制造业分析', 'concept': '制造业数据分析用于预测性维护、生产效率优化、质量控制、供应链协同和能耗管理'},
            '新媒体|内容|media|社交|social': {'tag': '内容分析', 'concept': '新媒体分析关注内容阅读量、互动率、粉丝增长、传播路径和内容效果归因分析'},
            '指标|metric|KPI|指标体系|北极星': {'tag': '指标体系', 'concept': '好的指标体系包含北极星指标（核心价值）、一级指标、二级指标，层层关联支撑业务'},
            '数据质量|脏数据|garbage in garbage out|质量': {'tag': '数据质量', 'concept': '数据质量五维度：准确性、完整性、一致性、及时性、唯一性；垃圾进垃圾出，数据质量决定分析质量'},
            '数据驱动|数据化|数据决策|culture': {'tag': '数据驱动文化', 'concept': '数据驱动文化将数据作为决策基础，需要数据素养、工具支持、高层推动和激励机制'},
            '商业洞察|insight|洞察|发现': {'tag': '商业洞察', 'concept': '商业洞察是从数据中发现的有价值信息，应回答"所以是什么？"，可转化为具体行动建议'},
            '沟通|storytelling|表达|汇报|呈现': {'tag': '数据沟通', 'concept': '有效数据沟通需将技术发现转化为业务语言，用故事线串联分析发现，配可视化辅助理解'},
            '伦理|隐私|伦理|合规|ethical|GDPR|个人信息': {'tag': '数据伦理', 'concept': '数据伦理关注隐私保护、数据合规使用、算法偏见和公平性，是数据从业者的职业责任'},
            '数据治理|治理|数据资产|元数据|主数据': {'tag': '数据治理', 'concept': '数据治理管理数据资产，包含数据标准、元数据管理、主数据管理、数据质量、数据安全等'},
            '数据产品|data product|推荐|画像': {'tag': '数据产品', 'concept': '数据产品将数据能力封装为产品，如推荐系统、用户画像、精准营销、风控评分等'},
        }
    }
}

# 通用类型题的解析模板
TYPE_TEMPLATES = {
    'single': '本题考查的是{}知识点。正确答案描述的是{}，因此选此项。',
    'multiple': '本题考查{}相关知识。正确选项分别从不同角度描述了核心概念，需要全面理解才能选全。',
    'truefalse': '本题考察对核心概念的理解。{}',
    'essay': '论述题考查对知识的综合运用。建议从以下角度回答：①定义与背景；②核心概念解释；③实际应用举例；④个人理解或案例分析。'
}


def get_course_id(item_id):
    """从题目ID解析课程ID：ex-1-1-1 -> 1, q3-5 -> 3, task-2-1 -> 2"""
    m = re.search(r'(?:ex-|q|task-)(\d+)', item_id)
    if m:
        return int(m.group(1))
    return 1


def extract_answer_text(answer):
    """提取答案的可读形式"""
    if isinstance(answer, list):
        if len(answer) > 3:
            return '、'.join(answer[:3]) + '等'
        return '、'.join(answer)
    if isinstance(answer, bool):
        return '正确' if answer else '错误'
    return str(answer)


def match_keyword(question, options_str, course_info):
    """匹配关键词返回最合适的知识点解释"""
    combined_text = question + ' ' + options_str
    best_match = None
    best_score = 0
    
    for pattern, info in course_info['keywords'].items():
        try:
            matches = re.findall(pattern, combined_text, re.IGNORECASE)
            if matches:
                score = len(matches) * 10 + len(pattern.split('|')[0])
                if score > best_score:
                    best_score = score
                    best_match = info
        except re.error:
            if pattern in combined_text:
                if len(pattern) > best_score:
                    best_score = len(pattern)
                    best_match = info
    
    return best_match


def generate_explanation(item_id, question, q_type, options, answer):
    """为题目生成解析"""
    course_id = get_course_id(item_id)
    course_info = COURSE_KNOWLEDGE.get(course_id, COURSE_KNOWLEDGE[1])
    
    options_str = ' '.join(options) if options and isinstance(options, list) else ''
    
    # 尝试关键词匹配
    match = match_keyword(question, options_str, course_info)
    
    if q_type == 'essay':
        return '本题考查' + course_info['name'] + '综合应用能力。建议回答框架：\n①核心概念定义；\n②关键要点展开（至少3-4个要点）；\n③结合实际案例或应用场景；\n④个人理解总结与启示。评分要点：完整性(30%)、准确性(30%)、深度(20%)、表达(20%)。'
    
    if q_type == 'truefalse':
        answer_text = '正确' if answer in (True, '正确', 'true', 'True') else '错误'
        if match:
            return f"【答案】{answer_text}。【解析】{match['concept']}。这是{course_info['name']}的重要基础概念。"
        return f"【答案】{answer_text}。【解析】本题考查{course_info['name']}的基础概念，需要准确理解核心定义，避免混淆相关概念。"
    
    answer_text = extract_answer_text(answer)
    
    if match:
        return f"【答案】{answer_text}。【解析】{match['concept']}。这一知识点在{course_info['name']}中具有重要地位，是开展后续学习和实际应用的基础。"
    
    # 备用通用解析
    return f"【答案】{answer_text}。【解析】本题考查{course_info['name']}核心知识点。正确选项准确描述了该概念的核心内涵，其他选项存在概念混淆或描述不准确的问题。建议结合课程内容深入理解。"


def generate_tags(item_id, question, q_type, options):
    """为题目生成知识点标签"""
    course_id = get_course_id(item_id)
    course_info = COURSE_KNOWLEDGE.get(course_id, COURSE_KNOWLEDGE[1])
    
    options_str = ' '.join(options) if options and isinstance(options, list) else ''
    combined_text = question + ' ' + options_str
    
    tags = list(course_info['base_tags'])
    
    # 匹配关键词，收集对应的标签
    for pattern, info in course_info['keywords'].items():
        try:
            if re.search(pattern, combined_text, re.IGNORECASE):
                tag = info['tag']
                if tag not in tags:
                    tags.append(tag)
        except re.error:
            if pattern in combined_text:
                tag = info['tag']
                if tag not in tags:
                    tags.append(tag)
    
    # 根据题型添加标签
    if q_type == 'multiple':
        tags.append('多选题')
    elif q_type == 'single':
        tags.append('单选题')
    elif q_type == 'truefalse':
        tags.append('判断题')
    elif q_type == 'essay':
        tags.append('论述题')
    
    # 控制标签数量（2-6个）
    if len(tags) > 6:
        tags = tags[:6]
    elif len(tags) < 2:
        tags.append(course_info['name'])
    
    return tags


def generate_difficulty(item_id, question, q_type):
    """为题目生成难度级别 (1简单, 2中等, 3困难)"""
    # 判断因素
    score = 0
    
    # 论述题较难
    if q_type == 'essay':
        score += 2
    elif q_type == 'multiple':
        score += 1
    elif q_type == 'truefalse':
        score -= 1
    
    # 根据关键词判断
    hard_keywords = ['原理', '算法', '推断', '综合', '应用', '实现', '优化', '高级', '进阶', '实际', '模型', '测试', '验证', '贝叶斯', '卡方', '窗口', 'DAX', 'RFM', '假设检验', '神经网络', '因果']
    easy_keywords = ['什么是', '定义', '目的', '第一步', '包括', '以下', '快捷键', '函数', '基础', '概念', '核心', '概述', '概述']
    
    for kw in hard_keywords:
        if kw in question:
            score += 1
            break
    
    for kw in easy_keywords:
        if kw in question:
            score -= 1
            break
    
    # 课程难度递增（课程号越大，题目越难）
    course_id = get_course_id(item_id)
    if course_id >= 8:
        score += 1
    elif course_id <= 2:
        score -= 1
    
    # 映射到 1-3
    if score <= -1:
        return 1
    elif score <= 1:
        return 2
    else:
        return 3


def generate_task_tags(task_id, title, description):
    """为项目任务生成标签"""
    course_id = get_course_id(task_id)
    course_info = COURSE_KNOWLEDGE.get(course_id, COURSE_KNOWLEDGE[1])
    
    combined_text = title + ' ' + description
    tags = list(course_info['base_tags'])
    
    for pattern, info in course_info['keywords'].items():
        try:
            if re.search(pattern, combined_text, re.IGNORECASE):
                if info['tag'] not in tags:
                    tags.append(info['tag'])
        except re.error:
            if pattern in combined_text:
                if info['tag'] not in tags:
                    tags.append(info['tag'])
    
    # 添加任务相关标签
    task_keywords = {
        '数据|导入|清洗|处理': '数据处理',
        '分析|汇总|透视|统计': '数据分析',
        '可视化|图表|画图|图': '数据可视化',
        '报告|呈现|汇报|展示': '数据报告',
        '模型|预测|机器学习|聚类|分类': '数据建模',
        '案例|实战|项目|业务': '实战项目',
    }
    for pattern, tag in task_keywords.items():
        if re.search(pattern, combined_text):
            if tag not in tags:
                tags.append(tag)
    
    if len(tags) > 8:
        tags = tags[:8]
    
    return tags


# ============================================================
# 2. 文件处理 - 增强 TypeScript 数据文件
# ============================================================

def find_matching_brace(text, start_idx):
    """找到与起始位置 { 匹配的 }"""
    count = 1
    i = start_idx
    in_string = None
    escape = False
    
    while i < len(text) and count > 0:
        c = text[i]
        
        if escape:
            escape = False
            i += 1
            continue
        
        if c == '\\':
            escape = True
            i += 1
            continue
        
        if in_string:
            if c == in_string:
                in_string = None
        else:
            if c in ('"', "'", '`'):
                in_string = c
            elif c == '{':
                count += 1
            elif c == '}':
                count -= 1
        
        i += 1
    
    return i - 1 if count == 0 else -1


def parse_item_properties(item_text):
    """解析一个题目对象的属性（简化版，只提取需要的字段）"""
    props = {}
    
    # 提取 id
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", item_text)
    if id_match:
        props['id'] = id_match.group(1)
    
    # 提取 question
    q_match = re.search(r"question:\s*['\"`](.+?)['\"`]", item_text, re.DOTALL)
    if q_match:
        props['question'] = q_match.group(1)
    
    # 提取 type
    type_match = re.search(r"type:\s*['\"]([^'\"]+)['\"]", item_text)
    if type_match:
        props['type'] = type_match.group(1)
    
    # 提取 options
    options_match = re.search(r"options:\s*\[([^\]]*)\]", item_text, re.DOTALL)
    if options_match:
        options_str = options_match.group(1)
        options = re.findall(r"['\"`]([^'\"`]+)['\"`]", options_str)
        props['options'] = options
    
    # 提取 answer
    answer_match = re.search(r"answer:\s*(['\"`]?)([^,}\n]+?)\1(?=[,}\n])", item_text)
    if answer_match:
        val = answer_match.group(2).strip()
        if val.startswith('['):
            arr_match = re.search(r"answer:\s*\[([^\]]*)\]", item_text, re.DOTALL)
            if arr_match:
                props['answer'] = re.findall(r"['\"`]([^'\"`]+?)['\"`]", arr_match.group(1))
            else:
                props['answer'] = []
        elif val.lower() in ('true', 'false'):
            props['answer'] = val.lower() == 'true'
        else:
            props['answer'] = val.strip('"\'` ')
    else:
        # 尝试数组形式
        arr_match = re.search(r"answer:\s*\[([^\]]*)\]", item_text, re.DOTALL)
        if arr_match:
            props['answer'] = re.findall(r"['\"`]([^'\"`]+?)['\"`]", arr_match.group(1))
    
    return props


def escape_for_ts(text):
    """将文本转义为可放入TypeScript字符串"""
    # 我们将使用反引号字符串，需要转义反引号和 ${}
    text = text.replace('\\', '\\\\')
    text = text.replace('`', '\\`')
    text = text.replace('${', '\\${')
    # 将换行转义
    return text


def enhance_item_block(item_text, item_type='exercise'):
    """增强单个题目对象，添加 explanation, tags, difficulty"""
    
    # 如果已经包含 explanation，跳过
    if 'explanation:' in item_text:
        return item_text
    
    props = parse_item_properties(item_text)
    if 'id' not in props:
        return item_text
    
    item_id = props.get('id', '')
    question = props.get('question', '')
    q_type = props.get('type', 'single')
    options = props.get('options', [])
    answer = props.get('answer', '')
    
    # 生成新字段值
    explanation = generate_explanation(item_id, question, q_type, options, answer)
    tags = generate_tags(item_id, question, q_type, options)
    difficulty = generate_difficulty(item_id, question, q_type)
    
    # 构建 TypeScript 属性字符串
    tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'
    exp_escaped = escape_for_ts(explanation)
    
    # 找到 points: X 行，在其后插入新字段
    # 匹配最后一个 points 属性行
    points_pattern = r"(points:\s*\d+)"
    match = list(re.finditer(points_pattern, item_text))
    
    if match:
        last_points = match[-1]
        insert_pos = last_points.end()
        
        # 检查是否已经有新字段（可能部分处理过）
        rest = item_text[insert_pos:]
        if 'explanation:' in rest or 'tags:' in rest or 'difficulty:' in rest:
            return item_text
        
        # 确定缩进
        line_start = item_text.rfind('\n', 0, last_points.start())
        if line_start >= 0:
            indent = item_text[line_start+1:last_points.start()]
        else:
            indent = '    '
        
        new_fields = f""",\n{indent}explanation: `{exp_escaped}`,\n{indent}tags: {tags_str},\n{indent}difficulty: {difficulty}"""
        
        item_text = item_text[:insert_pos] + new_fields + item_text[insert_pos:]
    
    return item_text


def find_exercise_blocks(text):
    """找到所有 exercises: [...] 中的题目对象"""
    result = []
    
    # 查找 exercises: [
    for match in re.finditer(r"exercises:\s*\[", text):
        start = match.end()
        # 找到匹配的 ]
        depth = 1
        i = start
        in_string = None
        escape = False
        while i < len(text) and depth > 0:
            c = text[i]
            if escape:
                escape = False
                i += 1
                continue
            if c == '\\':
                escape = True
                i += 1
                continue
            if in_string:
                if c == in_string:
                    in_string = None
            else:
                if c in ('"', "'", '`'):
                    in_string = c
                elif c == '[':
                    depth += 1
                elif c == ']':
                    depth -= 1
            i += 1
        end = i - 1
        result.append((start, end, text[start:end]))
    
    return result


def find_quiz_blocks(text):
    """找到所有测验题目 questions: [...]"""
    result = []
    # 需要找到测验部分的 questions
    for match in re.finditer(r"(questions:\s*\[)", text):
        # 检查是否在 quizzes 部分（而不是 exercises 部分）
        pos = match.start()
        
        # 找到这个 questions 数组的结尾
        start = match.end()
        depth = 1
        i = start
        in_string = None
        escape = False
        while i < len(text) and depth > 0:
            c = text[i]
            if escape:
                escape = False
                i += 1
                continue
            if c == '\\':
                escape = True
                i += 1
                continue
            if in_string:
                if c == in_string:
                    in_string = None
            else:
                if c in ('"', "'", '`'):
                    in_string = c
                elif c == '[':
                    depth += 1
                elif c == ']':
                    depth -= 1
            i += 1
        end = i - 1
        result.append((start, end, text[start:end]))
    
    return result


def enhance_array_content(content, item_type='exercise'):
    """增强数组内容，处理数组中的每个对象"""
    # 找到每个 { ... } 对象块
    result = content
    items = []
    
    # 从内容中提取对象块
    pos = 0
    while pos < len(result):
        # 查找下一个对象起始 {
        obj_start = result.find('{', pos)
        if obj_start < 0:
            break
        
        # 跳过简单对象
        # 检查这个对象是否包含 id: 'ex-' 或类似模式
        obj_end = find_matching_brace(result, obj_start + 1)
        if obj_end < 0:
            break
        
        obj_text = result[obj_start:obj_end+1]
        
        # 检查是否是我们关心的题目类型
        if re.search(r"id:\s*['\"](ex-|q\d+-|task-)", obj_text):
            items.append((obj_start, obj_end, obj_text))
        
        pos = obj_end + 1
    
    # 从后向前替换，避免位置偏移
    for start, end, item_text in reversed(items):
        enhanced = enhance_item_block(item_text, item_type)
        result = result[:start] + enhanced + result[end+1:]
    
    return result


def find_task_blocks(text):
    """找到项目任务的 tasks: [...]"""
    result = []
    for match in re.finditer(r"tasks:\s*\[", text):
        start = match.end()
        depth = 1
        i = start
        in_string = None
        escape = False
        while i < len(text) and depth > 0:
            c = text[i]
            if escape:
                escape = False
                i += 1
                continue
            if c == '\\':
                escape = True
                i += 1
                continue
            if in_string:
                if c == in_string:
                    in_string = None
            else:
                if c in ('"', "'", '`'):
                    in_string = c
                elif c == '[':
                    depth += 1
                elif c == ']':
                    depth -= 1
            i += 1
        end = i - 1
        result.append((start, end, text[start:end]))
    
    return result


def parse_task_properties(task_text):
    """解析任务对象的基本属性"""
    props = {}
    
    id_match = re.search(r"id:\s*['\"](task-[^'\"]+)['\"]", task_text)
    if id_match:
        props['id'] = id_match.group(1)
    
    title_match = re.search(r"title:\s*['\"`]([^'\"`]+)['\"`]", task_text)
    if title_match:
        props['title'] = title_match.group(1)
    
    desc_match = re.search(r"description:\s*['\"`]([^'\"`]+)['\"`]", task_text)
    if desc_match:
        props['description'] = desc_match.group(1)
    
    return props


def enhance_task_block(task_text):
    """增强单个任务对象，添加 tags"""
    
    props = parse_task_properties(task_text)
    if 'id' not in props:
        return task_text
    
    # 如果已有 tags，跳过
    last_match = list(re.finditer(r"tags:\s*\[", task_text))
    if last_match:
        return task_text
    
    task_id = props.get('id', '')
    title = props.get('title', '')
    description = props.get('description', '')
    
    tags = generate_task_tags(task_id, title, description)
    tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'
    
    # 在 solution 字段行之后插入 tags
    # 找到 solution: `...` 结束位置
    sol_match = re.search(r"(solution:\s*`[^`]*`)", task_text, re.DOTALL)
    if sol_match:
        insert_pos = sol_match.end()
    else:
        # 尝试找到 solution 字符串属性
        sol_match = re.search(r"(solution:\s*['\"][^'\"]*['\"])", task_text)
        if sol_match:
            insert_pos = sol_match.end()
        else:
            return task_text
    
    # 确定缩进
    line_start = task_text.rfind('\n', 0, (sol_match.start() if sol_match else 0))
    if line_start >= 0 and sol_match:
        indent = task_text[line_start+1:sol_match.start()]
    else:
        indent = '    '
    
    new_fields = f",\n{indent}tags: {tags_str}"
    
    # 检查 tags 是否已经存在于插入点之后
    after = task_text[insert_pos:insert_pos+50]
    if 'tags:' in after:
        return task_text
    
    return task_text[:insert_pos] + new_fields + task_text[insert_pos:]


def enhance_tasks_content(content):
    """增强任务数组内容"""
    result = content
    items = []
    
    pos = 0
    while pos < len(result):
        obj_start = result.find('{', pos)
        if obj_start < 0:
            break
        obj_end = find_matching_brace(result, obj_start + 1)
        if obj_end < 0:
            break
        
        obj_text = result[obj_start:obj_end+1]
        if 'task-' in obj_text and 'id:' in obj_text:
            items.append((obj_start, obj_end, obj_text))
        
        pos = obj_end + 1
    
    for start, end, item_text in reversed(items):
        enhanced = enhance_task_block(item_text)
        result = result[:start] + enhanced + result[end+1:]
    
    return result


def process_file(input_file, output_file=None):
    """主处理函数"""
    print(f"读取文件: {input_file}")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_len = len(content)
    print(f"原始文件大小: {original_len} 字符")
    
    # 1. 处理 exercises
    print("\n=== 处理章节练习题 ===")
    exercise_blocks = find_exercise_blocks(content)
    print(f"找到 {len(exercise_blocks)} 个 exercises 数组")
    
    # 从后向前处理
    for start, end, block_content in reversed(exercise_blocks):
        enhanced = enhance_array_content(block_content, 'exercise')
        content = content[:start] + enhanced + content[end:]
        count = enhanced.count("explanation:")
        print(f"  - 处理了约 {count} 道练习题")
    
    # 2. 处理测验题
    print("\n=== 处理测验题 ===")
    quiz_blocks = find_quiz_blocks(content)
    # 过滤 - 只处理测验部分（有 quiz id）
    valid_quiz_blocks = []
    for start, end, block_content in quiz_blocks:
        # 检查这个 block 是不是测验题（包含 q1-1 这样的 id，而非 ex-）
        if re.search(r"id:\s*['\"]q\d+-", block_content):
            valid_quiz_blocks.append((start, end, block_content))
    
    print(f"找到 {len(valid_quiz_blocks)} 个测验 questions 数组")
    
    for start, end, block_content in reversed(valid_quiz_blocks):
        enhanced = enhance_array_content(block_content, 'quiz')
        content = content[:start] + enhanced + content[end:]
        count = enhanced.count("explanation:")
        print(f"  - 处理了约 {count} 道测验题")
    
    # 3. 处理项目任务
    print("\n=== 处理项目任务 ===")
    task_blocks = find_task_blocks(content)
    valid_task_blocks = []
    for start, end, block_content in task_blocks:
        if 'task-' in block_content:
            valid_task_blocks.append((start, end, block_content))
    
    print(f"找到 {len(valid_task_blocks)} 个 tasks 数组")
    
    for start, end, block_content in reversed(valid_task_blocks):
        enhanced = enhance_tasks_content(block_content)
        content = content[:start] + enhanced + content[end:]
        count = enhanced.count("tags:")
        print(f"  - 为约 {count} 个任务添加了 tags")
    
    # 写入输出
    if output_file is None:
        output_file = input_file
    
    print(f"\n写入文件: {output_file}")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    final_len = len(content)
    print(f"完成！新文件大小: {final_len} 字符（增加了 {final_len - original_len} 字符）")
    
    # 验证
    print("\n=== 验证统计 ===")
    ex_exp = content.count("explanation:")
    ex_tags = len(re.findall(r"id:\s*['\"]ex-[^'\"]+['\"]", content))
    quiz_tags = len(re.findall(r"id:\s*['\"]q\d+-[^'\"]+['\"]", content))
    task_count = len(re.findall(r"id:\s*['\"]task-[^'\"]+['\"]", content))
    
    print(f"练习题数量: {ex_tags} (含解析 {ex_exp} 个)")
    print(f"测验题数量: {quiz_tags}")
    print(f"项目任务数量: {task_count}")
    
    return content


# ============================================================
# 3. 运行
# ============================================================

if __name__ == '__main__':
    data_file = '/workspace/src/utils/data.ts'
    if len(sys.argv) > 1:
        data_file = sys.argv[1]
    
    if not os.path.exists(data_file):
        print(f"错误：文件不存在 {data_file}")
        sys.exit(1)
    
    process_file(data_file)
    print("\n数据增强完成！")
