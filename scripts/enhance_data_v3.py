#!/usr/bin/env python3
"""
数据增强脚本 V3：
- 练习题：添加 explanation, tags, difficulty
- 测验题：添加 explanation, tags, difficulty
- 项目任务：添加 tags

策略：逐行扫描，精确识别对象属性
"""

import re
import os
import sys

# ============================================================
# 1. 知识库
# ============================================================

COURSE_KNOWLEDGE = {
    1: {'name': '数据分析基础', 'base_tags': ['数据分析', '业务分析', '分析方法'],
        'keywords': {
            '描述性': {'tag': '描述性分析', 'concept': '描述性分析回答"发生了什么"，通过汇总数据呈现现状'},
            '诊断性': {'tag': '诊断性分析', 'concept': '诊断性分析回答"为什么发生"，通过数据挖掘找出原因'},
            '预测性': {'tag': '预测性分析', 'concept': '预测性分析回答"将会发生什么"，基于历史数据预测未来'},
            '规范性': {'tag': '规范性分析', 'concept': '规范性分析回答"应该怎么做"，通过优化模型指导决策'},
            '流程|步骤|分析流程': {'tag': '分析流程', 'concept': '数据分析标准流程：问题定义→数据收集→数据清洗→数据探索→数据建模→可视化→呈现'},
            'CRISP': {'tag': 'CRISP-DM', 'concept': 'CRISP-DM包含6个阶段：业务理解、数据理解、数据准备、建模、评估、部署'},
            '工具|Excel|Python|SQL|Tableau|BI': {'tag': '分析工具', 'concept': 'Excel适合基础分析，Python/SQL适合复杂处理，BI工具适合交互式可视化'},
            '业务|理解|问题|定义': {'tag': '业务理解', 'concept': '业务理解是数据分析第一步，需要将模糊需求转化为可分析的数据问题'},
            'MECE': {'tag': 'MECE原则', 'concept': 'MECE即"相互独立，完全穷尽"，确保分析维度不重叠、不遗漏'},
            'SMART': {'tag': 'SMART原则', 'concept': 'SMART：Specific具体、Measurable可衡量、Achievable可实现、Relevant相关、Time-bound有时限'},
            'OMTM|北极星': {'tag': '北极星指标', 'concept': 'OMTM即唯一关键指标/北极星指标，聚焦核心业务目标'},
            '5W1H|What|Why|Where|When|Who|How': {'tag': '5W1H分析', 'concept': '5W1H从六个维度全面分析问题'},
            '假设|驱动|假设驱动': {'tag': '假设驱动', 'concept': '假设驱动分析：提出假设→设计验证→收集数据→验证结论'},
            '领先|滞后|指标|KPI': {'tag': '指标体系', 'concept': '领先指标预测未来，滞后指标反映过去，共同构成业务监控体系'},
            '决策|目的|最终|为什么': {'tag': '数据驱动决策', 'concept': '数据分析的最终目的是支持业务决策，让数据说话'},
            '问题定义|第一步': {'tag': '问题定义', 'concept': '数据分析流程的第一步是问题定义，明确分析目标'},
        }},
    2: {'name': 'Excel数据处理', 'base_tags': ['Excel', '数据处理', '表格操作'],
        'keywords': {
            '数据有效性|下拉列表|下拉': {'tag': '数据有效性', 'concept': '数据有效性限制输入类型、创建下拉列表，确保数据规范'},
            '筛选|Ctrl.*L|Ctrl|L|': {'tag': '数据筛选', 'concept': 'Ctrl+Shift+L快速筛选数据，可按多条件过滤'},
            '快速填充|Ctrl.*E|Flash Fill': {'tag': '快速填充', 'concept': 'Ctrl+E智能识别数据模式进行快速填充，适合提取/合并/格式化'},
            '冻结|窗格': {'tag': '冻结窗格', 'concept': '冻结窗格在视图选项卡，固定首行或首列便于查看大数据表'},
            '自动求和|Alt.*=|SUM|求和': {'tag': '自动求和', 'concept': 'Alt+=一键自动求和，快速计算选定区域的合计值'},
            'Ctrl.*End|跳转|导航': {'tag': '快捷导航', 'concept': 'Ctrl+End跳转到最后一个有数据的单元格，Ctrl+Home跳转到A1'},
            'VLOOKUP|vlookup|查找引用': {'tag': 'VLOOKUP函数', 'concept': 'VLOOKUP按列垂直查找，支持精确匹配和近似匹配'},
            'SUMIF|COUNTIF|条件|多条件': {'tag': '条件函数', 'concept': 'SUMIF/COUNTIF按条件汇总数据，SUMIFS支持多条件'},
            'IF|判断|嵌套|IF函数': {'tag': 'IF函数', 'concept': 'IF函数进行条件判断，语法：IF(条件,满足值,不满足值)，可多层嵌套'},
            'INDEX.*MATCH|INDEX.*Match|索引匹配': {'tag': 'INDEX-MATCH', 'concept': 'INDEX+MATCH组合比VLOOKUP更灵活，支持左向查找'},
            '透视表|pivot|PivotTable|数据透视表': {'tag': '数据透视表', 'concept': '数据透视表快速汇总多维度数据，支持拖拽操作'},
            '条件格式|条件标记': {'tag': '条件格式', 'concept': '条件格式根据规则自动设置单元格格式，便于发现异常值和趋势'},
            '图表|可视化|图|柱状|折线|饼图': {'tag': '图表制作', 'concept': 'Excel图表：折线图看趋势、柱状图比大小、饼图看占比、散点图看相关性'},
            '函数|公式|AVERAGE|MAX|MIN|COUNT': {'tag': '统计函数', 'concept': '常用统计函数：SUM求和、AVERAGE平均、MAX/MIN极值、COUNT计数'},
            '引用|绝对|相对|A1|\\$': {'tag': '单元格引用', 'concept': '相对引用复制时变化，绝对引用($A$1)固定不变，混合引用部分固定'},
            '分列|文本|格式|TEXT': {'tag': '文本处理', 'concept': '数据分列按分隔符拆分文本，TEXT函数格式化数字为文本'},
            '日期|DATEDIF|NOW|TODAY|时间': {'tag': '日期函数', 'concept': 'TODAY返回当前日期，DATEDIF计算日期间隔，NOW返回当前时间'},
        }},
    3: {'name': 'Python数据分析', 'base_tags': ['Python', '编程基础', '数据分析'],
        'keywords': {
            'pandas|Pandas|PANAS|panda': {'tag': 'Pandas', 'concept': 'Pandas是Python数据分析核心库，提供DataFrame和Series数据结构'},
            'read_csv|read_excel|读取|导入|load': {'tag': '数据读取', 'concept': 'pd.read_csv()读取CSV，pd.read_excel()读取Excel文件'},
            'DataFrame|Series|数据框|数据结构': {'tag': '数据结构', 'concept': 'DataFrame是二维表格，Series是一维数组，是Pandas核心数据结构'},
            '清洗|缺失值|null|NaN|isnull|dropna|fillna|缺失': {'tag': '数据清洗', 'concept': '处理缺失值：isnull检测、dropna删除、fillna填充；drop_duplicates去重'},
            '筛选|query|布尔索引|loc|iloc|过滤': {'tag': '数据筛选', 'concept': 'df.loc[]基于标签索引，df.iloc[]基于位置索引，布尔索引按条件筛选'},
            'groupby|分组|聚合|agg|group by': {'tag': '数据聚合', 'concept': 'groupby分组后配合聚合函数，类似SQL的GROUP BY'},
            'merge|join|concat|合并|连接|关联': {'tag': '数据合并', 'concept': 'pd.merge类似SQL JOIN，pd.concat沿轴堆叠数据，df.join按索引合并'},
            '排序|sort_values|sort_index|排名': {'tag': '数据排序', 'concept': 'df.sort_values()按列值排序，ascending控制升降序'},
            'numpy|NumPy|数组|array': {'tag': 'NumPy', 'concept': 'NumPy提供ndarray数组，支持向量化运算，是Pandas、Scikit-learn的基础'},
            '循环|for|while|遍历|loop': {'tag': '循环控制', 'concept': 'for循环遍历序列，while循环按条件迭代，优先使用列表推导式'},
            '函数|def|lambda|参数|返回值': {'tag': '函数定义', 'concept': 'def定义命名函数，lambda创建匿名函数，可设置默认参数和可变参数'},
            '列表|字典|元组|集合|List|Dict|数据类型': {'tag': '数据类型', 'concept': '列表可变有序，字典键值对，元组不可变，集合自动去重'},
            '切片|索引|下标': {'tag': '索引切片', 'concept': 'Python切片s[start:end:step]左闭右开，索引从0开始，负数从末尾倒序'},
            'apply|map|applymap|映射': {'tag': '元素映射', 'concept': 'apply对列/行应用函数，map对Series元素映射，applymap逐元素处理'},
            'datetime|时间|日期|to_datetime|时间戳': {'tag': '时间处理', 'concept': 'pd.to_datetime()转换日期，dt.year/month/day/weekday提取时间维度'},
            'matplotlib|seaborn|plot|画图|可视化': {'tag': '可视化', 'concept': 'Matplotlib基础绘图库，Seaborn提供更美观的统计图表接口'},
            'describe|info|head|shape|查看|探索': {'tag': '探索性分析', 'concept': 'df.head()查看前几行，df.describe()统计摘要，df.info()查看结构'},
            'pivot|melt|重塑|长宽表|透视图': {'tag': '数据重塑', 'concept': 'pivot_table创建透视表，melt将宽表转为长表，类似Excel透视功能'},
        }},
    4: {'name': '数据可视化原理', 'base_tags': ['数据可视化', '图表设计', '可视化原则'],
        'keywords': {
            '折线|趋势|时间序列|line|折线图': {'tag': '折线图', 'concept': '折线图展示数据随时间变化的趋势，适合时间序列分析'},
            '柱状|条形|比较|对比|bar|column': {'tag': '柱状图', 'concept': '柱状图用于对比不同类别数据的大小，适合展示分类变量的数值'},
            '饼图|占比|比例|pie': {'tag': '饼图', 'concept': '饼图展示各部分占总体的比例，类别过多时不宜使用'},
            '散点|相关性|关系|scatter': {'tag': '散点图', 'concept': '散点图展示两个数值变量间的关系，可识别相关性和异常值'},
            '直方图|分布|频率|hist|histogram': {'tag': '直方图', 'concept': '直方图展示数值变量的分布形态，识别集中趋势和离散程度'},
            '箱线图|四分位|离群值|box|箱形图': {'tag': '箱线图', 'concept': '箱线图展示四分位数结构，便于识别离群值和多组数据分布对比'},
            '热力图|密度|heatmap|热度图': {'tag': '热力图', 'concept': '热力图用颜色深浅表示数值大小，适合展示相关性矩阵和空间密度'},
            '雷达|多维|radar|雷达图': {'tag': '雷达图', 'concept': '雷达图展示多维度指标，适合综合评价和能力对比'},
            '气泡图|bubble': {'tag': '气泡图', 'concept': '气泡图在散点图基础上增加气泡大小表示第三维度，可展示多变量'},
            '桑基|流向|sankey|流量': {'tag': '桑基图', 'concept': '桑基图展示数据从一组到另一组的流动路径和流量大小'},
            '图表选择|选图|如何选': {'tag': '图表选择', 'concept': '图表选择原则：比较→柱状/条形、趋势→折线、构成→饼图/堆叠柱、相关→散点'},
            '设计原则|原则|简洁|清晰|美学|美观': {'tag': '可视化设计', 'concept': '可视化设计原则：KISS简洁、突出重点、保持一致性、避免误导性图表'},
            '颜色|配色|色彩|color|配色方案': {'tag': '色彩搭配', 'concept': '配色应考虑语义、色盲友好、对比度和情感表达'},
            '仪表盘|dashboard|仪表板|面板': {'tag': '仪表盘', 'concept': '仪表盘整合多个相关指标图表，提供全局视图，支持交互式筛选'},
            '误导|错误|陷阱|误区': {'tag': '可视化陷阱', 'concept': '常见陷阱：Y轴不从0开始放大差异、饼图超过5类、3D图表降低可读性'},
            '数据墨水|ink|墨水': {'tag': '数据墨水比', 'concept': 'Tufte数据墨水比原则：最大化数据墨水，删除多余的非数据装饰元素'},
            '讲故事|story|叙事|故事': {'tag': '数据叙事', 'concept': '好的可视化不仅展示数据，更能讲述故事，引导读者理解发现和结论'},
        }},
    5: {'name': '商业智能与报表', 'base_tags': ['BI', '报表系统', '数据分析'],
        'keywords': {
            'BI|商业智能|Business Intelligence': {'tag': '商业智能', 'concept': 'BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策'},
            '数据仓库|Data Warehouse|DW|数仓': {'tag': '数据仓库', 'concept': '数据仓库是面向主题、集成、相对稳定、反映历史变化的数据集合'},
            '星型|雪花|schema|维度建模|星型模型': {'tag': '维度建模', 'concept': '星型模式：中心事实表+多个维度表；雪花模式对维度表进一步规范化'},
            '维度|事实|Dimension|Fact': {'tag': '维度与事实', 'concept': '维度表描述分析角度（时间、地区、产品），事实表存储度量数据（销售额）'},
            'ETL|抽取|转换|加载|ETL流程': {'tag': 'ETL', 'concept': 'ETL即数据抽取/转换/加载，将分散源系统数据经清洗转换后加载到数据仓库'},
            'DAX|度量值|计算列|度量': {'tag': 'DAX', 'concept': 'DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列'},
            'Power BI|Tableau|FineBI|BI工具': {'tag': 'BI工具', 'concept': '主流BI工具：Power BI微软生态友好，Tableau可视化强大，FineBI适合国内企业'},
            '报表|Report|日报|周报|月报|报告': {'tag': '业务报表', 'concept': '业务报表按周期呈现核心指标，是管理层了解业务状况的主要渠道'},
            'KPI|关键指标|Key Performance|KPI指标': {'tag': 'KPI', 'concept': 'KPI是衡量业务表现的核心指标，应与战略目标紧密相关'},
            'OLAP|钻取|切片|切块|旋转': {'tag': 'OLAP分析', 'concept': 'OLAP支持多维度分析操作：钻取查看详情、切片筛选特定维度、旋转改变视角'},
            'Slicer|切片器|筛选器': {'tag': '交互式筛选', 'concept': '切片器提供直观的可视化筛选控件，用户可快速过滤数据'},
            '钻取|drill|Drill-through|下钻|上钻': {'tag': '数据钻取', 'concept': '钻取从汇总数据深入明细数据，可向上钻取（汇总）或向下钻取（明细）'},
            '指标体系|指标|指标系统': {'tag': '指标体系', 'concept': '指标体系是业务衡量的框架，包含结果指标、过程指标、领先指标和健康指标'},
            '同比|环比|增长率|YOY|MOM|同比增长|环比增长': {'tag': '同比环比', 'concept': '同比与去年同期比消除季节性，环比与上期比看短期趋势变化'},
        }},
    6: {'name': '商务数据分析实战', 'base_tags': ['商务分析', '业务分析', '实战案例'],
        'keywords': {
            '商业模式|收入|盈利|盈利模式|business model': {'tag': '商业模式', 'concept': '商业模式描述企业如何创造价值、传递价值和获取价值'},
            '用户|客户|分析|生命周期|CLV|客户价值': {'tag': '客户分析', 'concept': '客户分析包括画像、价值分层（RFM）、生命周期、留存和流失分析'},
            'RFM|最近购买|购买频率|购买金额|RFM模型': {'tag': 'RFM分析', 'concept': 'RFM基于Recency最近、Frequency频率、Monetary金额三维度对客户价值分层'},
            '销售|Sales|销售额|销量|业绩|销售分析': {'tag': '销售分析', 'concept': '销售分析包括趋势、产品结构、区域分布、渠道效果和团队绩效分析'},
            '营销|Campaign|ROI|转化率|营销分析': {'tag': '营销分析', 'concept': '营销分析衡量渠道ROI、用户获取成本、转化率和归因，优化营销投入'},
            '产品|Product|SKU|品类|产品分析': {'tag': '产品分析', 'concept': '产品分析评估SKU表现、ABC分类、产品生命周期、交叉销售和捆绑销售效果'},
            '定价|价格|pricing|定价策略|定价模型': {'tag': '定价策略', 'concept': '定价策略包括成本加成、竞争定价、价值定价、动态定价，需结合数据制定'},
            '市场|Market|份额|竞争|竞品|市场分析': {'tag': '市场分析', 'concept': '市场分析评估市场规模、份额趋势、竞品策略，识别市场机会和威胁'},
            'A/B测试|AB测试|对照实验|A/B试验': {'tag': 'A/B测试', 'concept': 'A/B测试将用户随机分组接受不同策略，通过统计检验比较效果差异'},
            '漏斗|转化|流失|funnel|conversion|转化分析': {'tag': '漏斗分析', 'concept': '漏斗分析追踪用户从浏览到购买各步骤的转化率，识别流失严重环节'},
            '留存|churn|churn率|retention|留存率': {'tag': '留存分析', 'concept': '留存率衡量用户持续使用情况，cohort分析按用户分组观察留存曲线'},
            '获客|CAC|customer|获取成本|获客成本': {'tag': '获客分析', 'concept': 'CAC（客户获取成本）应与LTV对比评估业务健康度，LTV/CAC>3是健康标准'},
            '增长|Growth|增长黑客|增长分析': {'tag': '增长分析', 'concept': '增长分析关注AARRR漏斗：获客→激活→留存→收入→推荐，寻找增长杠杆'},
            '库存|Inventory|库存周转|存货': {'tag': '库存分析', 'concept': '库存分析关注库存周转率、缺货率、滞销品识别、安全库存优化和ABC分类管理'},
            '成本|Cost|利润|Margin|毛利率|成本分析': {'tag': '财务分析', 'concept': '财务分析关注收入、成本、毛利率、净利润，帮助企业评估经营健康度'},
        }},
    7: {'name': '统计分析基础', 'base_tags': ['统计学', '统计分析', '数据统计'],
        'keywords': {
            '均值|平均|mean|平均数': {'tag': '均值', 'concept': '均值是数据总和除以个数，对极端值敏感，适合近似对称分布的数据'},
            '中位数|median|中位数|中间值': {'tag': '中位数', 'concept': '中位数将数据排序后取中间值，不受极端值影响，适合偏态分布'},
            '众数|mode|出现频率|最多': {'tag': '众数', 'concept': '众数是出现频率最高的值，可用于类别数据，可能有多个或不存在'},
            '方差|标准差|variance|std|standard': {'tag': '离散程度', 'concept': '方差衡量数据与均值的偏离程度，标准差是方差的平方根，更易解释'},
            '最大值|最小值|max|min|极值|范围|range': {'tag': '极值', 'concept': '最大值/最小值描述数据范围，极值易受异常值影响'},
            '四分位|分位数|quantile|percentile|IQR|四分位距': {'tag': '分位数', 'concept': '四分位数将数据四等分，IQR度量中间50%数据的离散程度，对极端值稳健'},
            '描述性统计|describe|描述统计': {'tag': '描述性统计', 'concept': '描述性统计用数值和图表概括数据特征，包括集中趋势、离散程度、分布形态'},
            '假设检验|p值|P-value|显著性|t检验|检验': {'tag': '假设检验', 'concept': '假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性拒绝原假设'},
            '正态分布|高斯分布|normal distribution|钟形|正态': {'tag': '正态分布', 'concept': '正态分布呈钟形对称，约68%数据在均值±1σ、95%在±2σ、99.7%在±3σ'},
            '相关性|correlation|r值|相关系数|皮尔逊': {'tag': '相关性分析', 'concept': '皮尔逊相关系数r∈[-1,1]衡量线性相关程度，注意相关≠因果'},
            '回归|regression|预测|线性回归': {'tag': '回归分析', 'concept': '线性回归建立因变量与自变量的线性关系Y=a+bX，可用于预测和解释'},
            '卡方|chi-square|独立性|拟合优度': {'tag': '卡方检验', 'concept': '卡方检验用于分类变量间的独立性检验，比较观察频数与期望频数'},
            '置信区间|confidence|interval|置信度|置信水平': {'tag': '置信区间', 'concept': '置信区间给出参数估计的范围，95%置信区间意味着重复抽样有约95%概率覆盖真值'},
            '样本|sample|抽样|总体|population|抽样方法': {'tag': '抽样方法', 'concept': '总体是研究的全部对象，样本是从中抽取的部分，常用简单随机/分层/整群抽样'},
            '偏态|skew|skewness|峰度|kurtosis|分布形态': {'tag': '分布形态', 'concept': '偏态系数>0右偏长尾在右，<0左偏；峰度>0比正态尖峭，<0更平坦'},
            '概率|probability|分布|概率分布': {'tag': '概率分布', 'concept': '常用概率分布：二项（n次成功次数）、泊松（单位时间事件数）、正态（连续随机变量）'},
            '贝叶斯|bayes|后验|先验|条件概率': {'tag': '贝叶斯统计', 'concept': '贝叶斯定理：后验概率∝先验概率×似然，将先验知识与观测数据结合更新认知'},
            '因果|causal|因果推断|相关不等于因果': {'tag': '因果推断', 'concept': '相关不等于因果！因果推断需要实验设计或特定方法（DID、断点回归、工具变量）'},
        }},
    8: {'name': '机器学习入门', 'base_tags': ['机器学习', '算法', '模型'],
        'keywords': {
            '监督学习|supervised|标签|分类|回归': {'tag': '监督学习', 'concept': '监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值'},
            '无监督学习|unsupervised|聚类|降维|无标签': {'tag': '无监督学习', 'concept': '无监督学习处理无标签数据，聚类发现分组，降维如PCA可视化高维数据'},
            '分类|classifier|预测类别|分类器': {'tag': '分类算法', 'concept': '常用分类算法：逻辑回归、决策树、随机森林、SVM、KNN、朴素贝叶斯'},
            '回归|regression|线性回归|预测值': {'tag': '回归算法', 'concept': '回归预测连续值，线性回归最基础，随机森林/GBDT/XGBoost是非线性回归常用方法'},
            '聚类|cluster|K-means|K均值|分组|聚类算法': {'tag': '聚类算法', 'concept': 'K-means最常用聚类算法，通过迭代将数据分为K簇，对初始质心敏感'},
            'KNN|k近邻|K-Nearest|neighbor|近邻': {'tag': 'KNN', 'concept': 'KNN基于距离分类，简单直观但计算量大，对高维数据和不相关特征敏感'},
            '决策树|tree|Decision Tree|分裂|节点': {'tag': '决策树', 'concept': '决策树按特征递归分裂，易解释但易过拟合，CART二叉树是常用类型'},
            '随机森林|Random Forest|集成|ensemble|集成学习': {'tag': '随机森林', 'concept': '随机森林是Bagging集成方法，训练多棵决策树投票预测，减少过拟合，稳定性好'},
            '过拟合|overfit|欠拟合|underfit|泛化|拟合': {'tag': '过拟合与欠拟合', 'concept': '过拟合在训练集表现好但测试集差（记忆了噪声），欠拟合都差（模型太简单）'},
            '特征工程|feature|特征选择|特征提取|特征': {'tag': '特征工程', 'concept': '特征工程将原始数据转化为模型可用的特征，包括缺失值处理、编码、缩放和交互特征'},
            '训练集|测试集|验证集|train|test|划分|split|数据集': {'tag': '数据集划分', 'concept': '数据划分为训练集训练模型、验证集调参、测试集最终评估，70-30或80-20常见比例'},
            '准确率|accuracy|精确率|precision|召回率|recall|F1|混淆矩阵': {'tag': '分类评估', 'concept': '分类评估：准确率=预测正确数/总数；精确率/召回率/F1对类别不平衡场景更重要'},
            'MAE|MSE|RMSE|R²|决定系数|均方误差|回归评估': {'tag': '回归评估', 'concept': '回归评估：MAE平均绝对误差、MSE均方误差、R²决定系数越大越好'},
            '交叉验证|cross-validation|CV|KFold|k折|交叉验证': {'tag': '交叉验证', 'concept': 'K折交叉验证将数据K等分，每次用K-1份训练、1份验证，轮换K次更稳定评估'},
            '网格搜索|grid search|超参数|调参|parameter|参数优化': {'tag': '超参数调优', 'concept': '网格搜索遍历超参数组合，配合交叉验证寻找最优参数；随机搜索在大范围更高效'},
            '梯度下降|gradient descent|学习率|learning rate|优化器': {'tag': '优化算法', 'concept': '梯度下降沿负梯度方向迭代更新参数，学习率控制步长，Adam自适应是常用变体'},
            'SVM|支持向量机|Support Vector|核函数|向量机': {'tag': 'SVM', 'concept': 'SVM寻找最大间隔超平面分类，通过核函数（线性/RBF/多项式）处理非线性分类问题'},
            '逻辑回归|Logistic|sigmoid|概率|LR': {'tag': '逻辑回归', 'concept': '逻辑回归用sigmoid函数将线性组合压缩到[0,1]作为类别概率，可解释性强'},
            '神经网络|Neural Network|deep learning|深度学习|CNN': {'tag': '神经网络', 'concept': '神经网络由多层神经元组成，深度学习是多层神经网络；CNN用于图像，RNN/LSTM用于序列'},
            'scikit-learn|sklearn|Python机器学习': {'tag': 'sklearn', 'concept': 'Scikit-learn是Python最流行的ML库，提供统一API，涵盖分类/回归/聚类/降维/预处理'},
        }},
    9: {'name': 'SQL与数据库', 'base_tags': ['SQL', '数据库', '数据查询'],
        'keywords': {
            'SELECT|查询|选择|select': {'tag': 'SELECT查询', 'concept': 'SELECT列名 FROM表名 WHERE条件；SELECT *选择所有列，SELECT DISTINCT去重查询'},
            'WHERE|条件|过滤|筛选|where': {'tag': 'WHERE筛选', 'concept': 'WHERE子句筛选行，配合AND/OR/NOT组合多条件，可用IN、BETWEEN、LIKE'},
            'JOIN|连接|LEFT|RIGHT|INNER|FULL|连接表|关联表': {'tag': 'JOIN连接', 'concept': 'INNER JOIN返回匹配行，LEFT JOIN保留左表所有行，RIGHT JOIN保留右表，FULL JOIN保留两表'},
            'GROUP BY|分组|聚合|分组查询|group by': {'tag': '分组聚合', 'concept': 'GROUP BY按列分组，配合聚合函数；WHERE在分组前筛行，HAVING在分组后筛组'},
            'ORDER BY|排序|ASC|DESC|升序|降序|order by': {'tag': '排序', 'concept': 'ORDER BY列名 ASC/DESC，ASC升序（默认）、DESC降序，可按多列排序'},
            '子查询|subquery|嵌套|嵌套查询|子查询|IN|EXISTS': {'tag': '子查询', 'concept': '子查询嵌套在主查询中，可出现在WHERE/FROM/SELECT中，IN/EXISTS/ANY/ALL配合使用'},
            '窗口函数|window|ROW_NUMBER|RANK|DENSE_RANK|OVER|开窗函数': {'tag': '窗口函数', 'concept': '窗口函数在分组内计算但不压缩行数：OVER(PARTITION BY列 ORDER BY列)；ROW_NUMBER/RANK/DENSE_RANK排名'},
            '聚合函数|COUNT|SUM|AVG|MAX|MIN|聚合': {'tag': '聚合函数', 'concept': 'COUNT计数、SUM求和、AVG平均、MAX/MIN极值，聚合函数忽略NULL值'},
            'INSERT|插入|新增|insert': {'tag': '插入数据', 'concept': 'INSERT INTO表(列) VALUES(值)；可插入单行、多行，或通过INSERT...SELECT从其他表批量插入'},
            'UPDATE|更新|修改|update': {'tag': '更新数据', 'concept': 'UPDATE表 SET列=值 WHERE条件；务必加WHERE否则修改全行！事务保护和先SELECT验证很重要'},
            'DELETE|删除|delete|删除数据': {'tag': '删除数据', 'concept': 'DELETE FROM表 WHERE条件；务必加WHERE否则清空表；TRUNCATE快速清空整表（不可回滚）'},
            'CREATE TABLE|建表|创建表|表结构|CREATE': {'tag': '建表语句', 'concept': 'CREATE TABLE表(列名 数据类型 约束)，常用约束：PRIMARY KEY、FOREIGN KEY、NOT NULL、UNIQUE'},
            '主键|PRIMARY KEY|PK|外键|FOREIGN KEY|FK|键|约束': {'tag': '键与约束', 'concept': '主键唯一标识行（非空且唯一），外键引用其他表主键保证引用完整性，UNIQUE保证列值唯一'},
            '索引|index|性能|查询优化|索引优化': {'tag': '索引优化', 'concept': '索引加速查询但占用空间和写入成本，常用B树索引；SELECT前使用EXPLAIN分析执行计划'},
            '事务|transaction|ACID|commit|rollback|事务处理': {'tag': '事务', 'concept': '事务是原子操作单元，ACID特性：原子性Atomic、一致性Consistent、隔离性Isolated、持久性Durable'},
            '视图|VIEW|虚拟表|视图': {'tag': '视图', 'concept': '视图是存储的查询结果，像虚拟表一样使用，简化复杂查询，提供安全层，隐藏表结构细节'},
            'NULL|空值|IS NULL|IS NOT NULL|空值处理': {'tag': '空值处理', 'concept': 'NULL表示缺失值，判断必须用IS NULL/IS NOT NULL（=NULL永远为false），COALESCE返回第一个非空值'},
            'LIKE|模糊匹配|通配符|%|_|模糊查询': {'tag': '模糊查询', 'concept': 'LIKE模糊匹配，%匹配0或多个字符、_匹配单个字符，也可用REGEXP正则匹配'},
            'HAVING|分组筛选|having|分组条件': {'tag': 'HAVING', 'concept': 'HAVING筛选GROUP BY后的分组结果，必须与GROUP BY配合，WHERE在分组前筛选'},
            'LIMIT|TOP|限制行数|分页|LIMIT': {'tag': '限制行数', 'concept': 'LIMIT限制返回行数，MySQL用LIMIT m,n或LIMIT n OFFSET m实现分页；SQL Server用TOP'},
            'CTE|WITH|公用表表达式|Common Table|WITH子句': {'tag': 'CTE', 'concept': 'WITH别名AS(子查询)定义CTE，将复杂查询模块化，比嵌套子查询更易读，也可递归使用'},
        }},
    10: {'name': '数据思维与行业应用', 'base_tags': ['数据思维', '行业应用', '数据分析'],
        'keywords': {
            '思维|数据驱动|mindset|数据思维|思维方式': {'tag': '数据思维', 'concept': '数据思维是基于数据而非直觉进行决策的思维方式，强调客观、可度量、可验证'},
            '电商|零售|e-commerce|电子商务': {'tag': '电商分析', 'concept': '电商数据分析关注GMV、转化率、客单价、复购率、退货率、用户增长和商品策略优化'},
            '金融|银行|Fintech|风控|风险|金融分析': {'tag': '金融分析', 'concept': '金融数据分析应用于风控评分、反欺诈、客户分群、营销响应预测和合规监管'},
            '医疗|健康|healthcare|医院|医学|医疗分析': {'tag': '医疗分析', 'concept': '医疗数据应用于疾病预测模型、临床路径优化、医院运营分析和药物研发'},
            '教育|learning|学习|学生|教育分析': {'tag': '教育分析', 'concept': '教育数据分析学生学习行为、预测辍学风险、优化教学内容和个性化推荐效果'},
            '物流|供应链|supply chain|库存|仓储|物流分析': {'tag': '物流供应链', 'concept': '物流分析关注路径优化、库存管理、需求预测、成本控制、供应商评价和网络规划'},
            '互联网|产品|App|用户行为|互联网分析': {'tag': '互联网分析', 'concept': '互联网数据分析关注用户行为、产品迭代效果、DAU/MAU增长、渠道ROI和推荐系统优化'},
            '房地产|地产|房产|地产分析': {'tag': '地产分析', 'concept': '房地产分析评估房价走势、地段价值、投资回报率、客户画像和市场供需动态'},
            '制造业|工业|工厂|production|生产分析': {'tag': '制造业分析', 'concept': '制造业数据分析用于预测性维护、生产效率优化、质量控制、供应链协同和能耗管理'},
            '新媒体|内容|media|社交|social|内容分析': {'tag': '内容分析', 'concept': '新媒体分析关注内容阅读量、互动率、粉丝增长、传播路径和内容效果归因分析'},
            '指标|metric|KPI|指标体系|北极星|指标系统': {'tag': '指标体系', 'concept': '好的指标体系包含北极星指标、一级指标、二级指标，层层关联支撑业务'},
            '数据质量|脏数据|质量|数据质量|数据清洗': {'tag': '数据质量', 'concept': '数据质量五维度：准确性、完整性、一致性、及时性、唯一性；垃圾进垃圾出'},
            '数据驱动|数据化|数据决策|culture|数据文化': {'tag': '数据驱动文化', 'concept': '数据驱动文化将数据作为决策基础，需要数据素养、工具支持、高层推动和激励机制'},
            '商业洞察|insight|洞察|发现|洞察报告': {'tag': '商业洞察', 'concept': '商业洞察是从数据中发现的有价值信息，应回答"所以是什么"，可转化为行动建议'},
            '沟通|storytelling|表达|汇报|呈现|数据故事': {'tag': '数据沟通', 'concept': '有效数据沟通需将技术发现转化为业务语言，用故事线串联分析发现，配可视化辅助理解'},
            '伦理|隐私|合规|ethical|GDPR|个人信息|数据伦理': {'tag': '数据伦理', 'concept': '数据伦理关注隐私保护、数据合规、算法偏见和公平性，是数据从业者的职业责任'},
            '数据治理|治理|数据资产|元数据|主数据|治理': {'tag': '数据治理', 'concept': '数据治理管理数据资产，包含数据标准、元数据管理、主数据管理、数据质量和数据安全'},
            '数据产品|data product|推荐|画像|数据产品': {'tag': '数据产品', 'concept': '数据产品将数据能力封装为产品，如推荐系统、用户画像、精准营销、风控评分等'},
        }},
}


# ============================================================
# 2. 内容生成函数
# ============================================================

def get_course_id(item_id):
    m = re.search(r'(?:ex-|q|task-)(\d+)', item_id)
    if m:
        return int(m.group(1))
    return 1


def find_best_concept(question, course_info):
    combined_text = question
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


def generate_explanation(item_id, question, q_type, options_str, answer_text):
    course_id = get_course_id(item_id)
    course_info = COURSE_KNOWLEDGE.get(course_id, COURSE_KNOWLEDGE[1])
    
    # 优先基于 answer_text 匹配关键词，其次是 question，最后是 options
    match = find_best_concept(str(answer_text), course_info)
    if not match:
        match = find_best_concept(question, course_info)
    if not match:
        match = find_best_concept(options_str, course_info)
    
    # 判断题：将 true/false 转为中文
    display_answer = str(answer_text)
    if display_answer.lower() in ('true', 'false'):
        display_answer = '正确' if display_answer.lower() == 'true' else '错误'
    
    if q_type == 'essay':
        return '本题考查' + course_info['name'] + '综合应用能力。建议回答框架：定义与背景、核心概念解释3-4个要点、结合实际案例、个人理解总结。评分要点：完整性、准确性、深度、表达。'
    
    if q_type == 'truefalse':
        if match:
            return '【答案】' + display_answer + '。【解析】' + match['concept'] + '这是' + course_info['name'] + '的重要基础概念。'
        return '【答案】' + display_answer + '。【解析】本题考查' + course_info['name'] + '基础概念。'
    
    if match:
        return '【答案】' + display_answer + '。【解析】' + match['concept'] + '这一知识点在' + course_info['name'] + '中具有重要地位。'
    return '【答案】' + display_answer + '。【解析】本题考查' + course_info['name'] + '核心知识点。正确选项准确描述了该概念的核心内涵。'


def generate_tags(item_id, question, q_type, options_str, answer_text=''):
    course_id = get_course_id(item_id)
    course_info = COURSE_KNOWLEDGE.get(course_id, COURSE_KNOWLEDGE[1])
    # 优先：answer > question > options
    combined_text = str(answer_text) + ' ' + question + ' ' + options_str
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
    
    if q_type == 'multiple':
        tags.append('多选题')
    elif q_type == 'single':
        tags.append('单选题')
    elif q_type == 'truefalse':
        tags.append('判断题')
    elif q_type == 'essay':
        tags.append('论述题')
    
    if len(tags) > 6:
        tags = tags[:6]
    return tags


def generate_difficulty(item_id, question, q_type):
    score = 0
    if q_type == 'essay':
        score += 2
    elif q_type == 'multiple':
        score += 1
    elif q_type == 'truefalse':
        score -= 1
    
    hard_keywords = ['原理', '算法', '推断', '综合', '应用', '实现', '优化', '高级', '进阶', '模型', '测试', '验证', '贝叶斯', '卡方', '窗口', 'DAX', 'RFM', '神经网络', '因果']
    easy_keywords = ['什么是', '定义', '目的', '第一步', '包括', '快捷键', '函数', '基础', '概念', '概述']
    
    for kw in hard_keywords:
        if kw in question:
            score += 1
            break
    for kw in easy_keywords:
        if kw in question:
            score -= 1
            break
    
    course_id = get_course_id(item_id)
    if course_id >= 8:
        score += 1
    elif course_id <= 2:
        score -= 1
    
    if score <= -1:
        return 1
    elif score <= 1:
        return 2
    else:
        return 3


def generate_task_tags(item_id, title, description):
    course_id = get_course_id(item_id)
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
    
    task_keywords = {
        r'数据|导入|清洗|处理': '数据处理',
        r'分析|汇总|透视|统计': '数据分析',
        r'可视化|图表|画图|图': '数据可视化',
        r'报告|呈现|汇报|展示': '数据报告',
        r'模型|预测|机器学习|聚类|分类': '数据建模',
        r'案例|实战|项目|业务': '实战项目',
    }
    for pattern, tag in task_keywords.items():
        if re.search(pattern, combined_text):
            if tag not in tags:
                tags.append(tag)
    
    if len(tags) > 8:
        tags = tags[:8]
    return tags


def escape_for_template(text):
    """将文本转义，可放入TypeScript反引号字符串"""
    # 先转义反斜杠，再处理反引号和 ${}
    text = text.replace('\\', '\\\\')
    text = text.replace('`', '\\`')
    text = text.replace('${', '\\${')
    return text


# ============================================================
# 3. 主处理逻辑 - 精确识别题目/任务对象边界
# ============================================================

def process_file(input_file, output_file=None):
    print(f"读取文件: {input_file}")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_len = len(content)
    print(f"原始文件大小: {original_len} 字符")
    
    # 将内容按行分割
    lines = content.split('\n')
    
    # 找到所有题目和任务的位置
    items = []
    
    for i in range(len(lines)):
        line = lines[i]
        if re.search(r"id\s*:\s*['\"]ex-", line):
            items.append(('exercise', i))
        elif re.search(r"id\s*:\s*['\"]q\d+-", line):
            items.append(('quiz', i))
        elif re.search(r"id\s*:\s*['\"]task-", line):
            items.append(('task', i))
    
    print(f"找到 {len([x for x in items if x[0]=='exercise'])} 道练习题, "
          f"{len([x for x in items if x[0]=='quiz'])} 道测验题, "
          f"{len([x for x in items if x[0]=='task'])} 个项目任务")
    
    # 找到每个题目/任务对象的边界（{ 和 }）
    processed = set()
    new_lines = lines[:]  # 复制一份
    
    # 从后向前处理，避免影响行号
    for item_type, id_line_idx in sorted(items, key=lambda x: -x[1]):
        if id_line_idx in processed:
            continue
        
        # 向前找对应的 {
        start_idx = id_line_idx
        while start_idx >= 0 and '{' not in new_lines[start_idx]:
            start_idx -= 1
        
        if start_idx < 0:
            continue
        
        # 从 start_idx 找匹配的 }
        brace_level = 0
        end_idx = -1
        for j in range(start_idx, len(new_lines)):
            for ch in new_lines[j]:
                if ch == '{':
                    brace_level += 1
                elif ch == '}':
                    brace_level -= 1
            if brace_level <= 0 and j > start_idx:
                end_idx = j
                break
        
        if end_idx < 0:
            continue
        
        # 检查是否已包含目标字段
        obj_content = '\n'.join(new_lines[start_idx:end_idx + 1])
        if item_type in ('exercise', 'quiz') and 'explanation:' in obj_content:
            continue
        if item_type == 'task' and re.search(r"\n\s*tags:\s*\[", obj_content):
            continue
        
        # 找到"最后一个简单属性"的位置
        # 策略：从 end_idx-1 向前找，找到最后一行符合 pattern: "      属性名: 值" 的行
        # 这行应该在 对象的顶级属性中（不在子数组或 solution 字符串中）
        
        # 更简单的方法：直接在 end_idx（即 } 行）之前插入新字段
        # 先看 } 行：如果是 `},` 或 `}`, 我们就在它前面插入
        
        insert_before = end_idx
        
        # 计算缩进（根据对象开始行的缩进）
        indent_match = re.match(r'(\s*)', new_lines[start_idx])
        outer_indent = indent_match.group(1) if indent_match else '    '
        inner_indent = outer_indent + '  '
        
        # 提取题目信息
        obj_lines = new_lines[start_idx:end_idx + 1]
        item_id = None
        for line in obj_lines:
            m = re.search(r"id\s*:\s*['\"]([^'\"]+)['\"]", line)
            if m:
                item_id = m.group(1)
                break
        
        if not item_id:
            continue
        
        # 生成新字段
        if item_type in ('exercise', 'quiz'):
            # 收集信息
            question = ''
            q_type = 'single'
            options_parts = []
            answer_val = ''
            
            in_options = False
            in_answer_array = False
            answer_array = []
            for line in obj_lines:
                qm = re.search(r"question\s*:\s*['\"`]([^'\"`]+)['\"`]", line)
                if qm:
                    question = qm.group(1)
                tm = re.search(r"type\s*:\s*['\"]([^'\"]+)['\"]", line)
                if tm:
                    q_type = tm.group(1)
                
                # 处理 boolean answer
                am = re.search(r"answer\s*:\s*(true|false)(\s|,|$)", line, re.IGNORECASE)
                if am:
                    answer_val = am.group(1)
                elif in_answer_array:
                    # 在 answer 数组中
                    for am in re.finditer(r"['\"`]([^'\"`]+?)['\"`]", line):
                        answer_array.append(am.group(1))
                    if ']' in line:
                        in_answer_array = False
                        answer_val = '、'.join(answer_array[:3])
                        if len(answer_array) > 3:
                            answer_val += '等'
                else:
                    # 检查是否是 answer 数组开始
                    am = re.search(r"answer\s*:\s*\[", line)
                    if am:
                        in_answer_array = True
                        # 本行可能包含一些元素
                        for am2 in re.finditer(r"['\"`]([^'\"`]+?)['\"`]", line):
                            answer_array.append(am2.group(1))
                        if ']' in line[am.end():]:
                            # 单行数组
                            in_answer_array = False
                            answer_val = '、'.join(answer_array[:3])
                            if len(answer_array) > 3:
                                answer_val += '等'
                    else:
                        # 普通单值 answer
                        am = re.search(r"answer\s*:\s*['\"`]([^'\"`,]+?)['\"`]", line)
                        if am:
                            answer_val = am.group(1)
                
                # 收集options数组
                if re.search(r"options\s*:\s*\[", line):
                    in_options = True
                if in_options:
                    for om in re.finditer(r"['\"`]([^'\"`]+?)['\"`]", line):
                        options_parts.append(om.group(1))
                    if ']' in line and line.find('options:') == -1:
                        # 也可能单行 options 数组
                        pass
                if in_options and ']' in line:
                    in_options = False
            
            options_str = ' '.join(options_parts)
            
            explanation = generate_explanation(item_id, question, q_type, options_str, answer_val)
            tags = generate_tags(item_id, question, q_type, options_str, answer_val)
            difficulty = generate_difficulty(item_id, question, q_type)
            
            tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'
            exp_escaped = escape_for_template(explanation)
            
            # 先检查：最后一个顶级属性行是否有逗号
            # 策略：找到最后一个 points 行（对exercise/quiz）
            last_prop_idx = -1
            for j in range(end_idx - 1, start_idx, -1):
                if re.match(r'^\s*points\s*:', new_lines[j]):
                    last_prop_idx = j
                    break
            
            if last_prop_idx < 0:
                # 找不到 points 行，退而求其次：
                # 找到最后一个非空的顶级属性（不包含 [] 和 {}）
                for j in range(end_idx - 1, start_idx, -1):
                    stripped = new_lines[j].strip()
                    if stripped and ':' in stripped and stripped[0] not in '[]{}':
                        # 确保不是 solution 的多行内容（solution 通常在反引号开始）
                        if not stripped.startswith('`'):
                            last_prop_idx = j
                            break
            
            if last_prop_idx < 0:
                continue
            
            # 确保最后一个属性行有末尾逗号
            if not new_lines[last_prop_idx].rstrip().endswith(','):
                new_lines[last_prop_idx] = new_lines[last_prop_idx].rstrip() + ','
            
            # 插入新字段
            insert_lines = [
                inner_indent + f"explanation: `{exp_escaped}`,",
                inner_indent + f"tags: {tags_str},",
                inner_indent + f"difficulty: {difficulty}"
            ]
            
            # 在 last_prop_idx 之后插入
            insert_pos = last_prop_idx + 1
            new_lines[insert_pos:insert_pos] = insert_lines
            
        elif item_type == 'task':
            # 任务：只添加 tags
            title = ''
            description = ''
            for line in obj_lines:
                tm = re.search(r"title\s*:\s*['\"`]([^'\"`]+)['\"`]", line)
                if tm:
                    title = tm.group(1)
                dm = re.search(r"description\s*:\s*['\"`]([^'\"`]+)['\"`]", line)
                if dm:
                    description = dm.group(1)
            
            tags = generate_task_tags(item_id, title, description)
            tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'
            
            # 找到 solution: 这一行
            solution_idx = -1
            for j in range(start_idx, end_idx):
                if re.match(r'^\s*solution\s*:', new_lines[j]):
                    solution_idx = j
                    break
            
            if solution_idx < 0:
                # 没有 solution，找最后一个顶级属性
                for j in range(end_idx - 1, start_idx, -1):
                    stripped = new_lines[j].strip()
                    if stripped and ':' in stripped and stripped[0] not in '[]{}':
                        if not stripped.startswith('`'):
                            solution_idx = j
                            break
            
            if solution_idx < 0:
                continue
            
            # 找到 solution 字符串的结束行
            # 如果是反引号字符串，需要找到结束的 `
            solution_start = solution_idx
            first_line = new_lines[solution_start]
            if '`' in first_line:
                # 反引号字符串，需要找到匹配的结束
                # 统计反引号数量
                total_backticks = 0
                for ch in first_line:
                    if ch == '`':
                        total_backticks += 1
                
                if total_backticks < 2:
                    # 多行反引号字符串，继续向下查找
                    for j in range(solution_start + 1, end_idx + 1):
                        for ch in new_lines[j]:
                            if ch == '`':
                                total_backticks += 1
                        if total_backticks >= 2:
                            solution_idx = j
                            break
                else:
                    # 单行反引号字符串，solution_idx 已经是正确的
                    pass
            
            # 确保这行末尾有逗号（后面要加新字段）
            if not new_lines[solution_idx].rstrip().endswith(','):
                # 检查是否是 `...`, 形式
                if new_lines[solution_idx].rstrip().endswith('`'):
                    new_lines[solution_idx] = new_lines[solution_idx].rstrip() + ','
                elif new_lines[solution_idx].rstrip().endswith(']'):
                    new_lines[solution_idx] = new_lines[solution_idx].rstrip() + ','
                else:
                    new_lines[solution_idx] = new_lines[solution_idx].rstrip() + ','
            
            # 在 solution 结束行后插入 tags
            insert_pos = solution_idx + 1
            new_lines[insert_pos:insert_pos] = [inner_indent + f"tags: {tags_str}"]
    
    # 重新构建文件内容
    new_content = '\n'.join(new_lines)
    
    if output_file is None:
        output_file = input_file
    
    print(f"\n写入文件: {output_file}")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    final_len = len(new_content)
    print(f"完成！文件大小: {final_len} 字符（增加了 {final_len - original_len} 字符）")
    
    # 简单验证统计
    exp_count = new_content.count('explanation:')
    tag_count = new_content.count('tags:')
    diff_count = new_content.count('difficulty:')
    print(f"\nexplanation: {exp_count} 处, tags: {tag_count} 处, difficulty: {diff_count} 处")


if __name__ == '__main__':
    data_file = '/workspace/src/utils/data.ts'
    if len(sys.argv) > 1:
        data_file = sys.argv[1]
    
    if not os.path.exists(data_file):
        print(f"错误：文件不存在 {data_file}")
        sys.exit(1)
    
    process_file(data_file)
    print("\n数据增强完成！")
