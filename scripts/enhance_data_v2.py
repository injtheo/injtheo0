#!/usr/bin/env python3
"""
数据增强脚本 V2：为所有练习题、测验题和项目任务添加完整字段

采用逐行处理，更安全地处理多行字符串
"""

import re
import os
import sys
import json

# ============================================================
# 1. 知识库（课程知识点映射）
# ============================================================

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
            'OMTM': {'tag': '北极星指标', 'concept': 'OMTM即唯一关键指标/北极星指标，聚焦核心业务目标'},
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
            'VLOOKUP|HLOOKUP|查找': {'tag': 'VLOOKUP函数', 'concept': 'VLOOKUP按列垂直查找，支持精确匹配和近似匹配'},
            'SUMIF|COUNTIF|条件': {'tag': '条件函数', 'concept': 'SUMIF/COUNTIF按条件汇总数据，SUMIFS支持多条件汇总'},
            'IF|嵌套|判断': {'tag': 'IF函数', 'concept': 'IF函数进行条件判断，可多层嵌套实现复杂逻辑'},
            'INDEX.*MATCH|INDEX|MATCH': {'tag': 'INDEX-MATCH', 'concept': 'INDEX+MATCH组合比VLOOKUP更灵活，支持左向查找和多条件匹配'},
            '透视表|PivotTable|数据透视表': {'tag': '数据透视表', 'concept': '数据透视表可快速汇总分析多维度数据，支持拖拽操作，实时更新'},
            '条件格式': {'tag': '条件格式', 'concept': '条件格式根据规则自动设置单元格格式，便于发现异常值和趋势'},
            '图表|可视化|折线|柱状|饼图': {'tag': '图表制作', 'concept': 'Excel图表：折线图看趋势、柱状图比大小、饼图看占比、散点图看相关性'},
            '函数|SUM|AVERAGE|MAX|MIN|COUNT': {'tag': '统计函数', 'concept': '常用统计函数：SUM求和、AVERAGE平均、MAX/MIN极值、COUNT计数'},
            '绝对引用|\\$|相对引用': {'tag': '单元格引用', 'concept': '相对引用(A1)复制时会变化，绝对引用($A$1)固定不变'},
            '文本|分列|TEXT': {'tag': '文本处理', 'concept': '数据分列可按分隔符拆分文本，TEXT函数可格式化数字为文本'},
            '日期|DATEDIF|NOW|TODAY': {'tag': '日期函数', 'concept': 'TODAY返回当前日期，DATEDIF可计算日期间隔'},
        }
    },
    3: {  # Python数据分析
        'name': 'Python数据分析',
        'base_tags': ['Python', '编程基础', '数据分析'],
        'style': 'code',
        'keywords': {
            'pandas|Pandas': {'tag': 'Pandas', 'concept': 'Pandas是Python数据分析核心库，提供DataFrame和Series数据结构'},
            'read_csv|read_excel|读取|导入': {'tag': '数据读取', 'concept': 'pd.read_csv()读取CSV，pd.read_excel()读取Excel，read_sql从数据库读取'},
            'DataFrame|Series|数据结构': {'tag': '数据结构', 'concept': 'DataFrame是二维表格，Series是一维数组，是Pandas核心数据结构'},
            '清洗|缺失值|null|NaN|isnull|dropna|fillna': {'tag': '数据清洗', 'concept': '处理缺失值：isnull检测、dropna删除、fillna填充；drop_duplicates去重'},
            '筛选|query|布尔索引|loc|iloc': {'tag': '数据筛选', 'concept': 'df.loc[]基于标签索引，df.iloc[]基于位置索引，布尔索引按条件筛选'},
            'groupby|分组|聚合|agg': {'tag': '数据聚合', 'concept': 'groupby分组后配合agg/sum/mean等聚合，类似SQL的GROUP BY'},
            'merge|join|concat|合并|连接': {'tag': '数据合并', 'concept': 'pd.merge类似SQL JOIN，pd.concat沿轴堆叠数据，df.join按索引合并'},
            '排序|sort_values|sort_index|排名': {'tag': '数据排序', 'concept': 'df.sort_values()按列值排序，ascending控制升降序'},
            'numpy|NumPy|数组|array': {'tag': 'NumPy', 'concept': 'NumPy提供ndarray数组，支持向量化运算，是Pandas、Scikit-learn的基础'},
            '循环|for|while|遍历': {'tag': '循环控制', 'concept': 'for循环遍历序列，while循环按条件迭代，优先使用列表推导式'},
            '函数|def|lambda|参数': {'tag': '函数定义', 'concept': 'def定义命名函数，lambda创建匿名函数，可设置默认参数和可变参数'},
            '列表|字典|元组|List|Dict': {'tag': '数据类型', 'concept': '列表可变有序，字典键值对，元组不可变，集合自动去重'},
            '切片|索引': {'tag': '索引切片', 'concept': 'Python切片s[start:end:step]左闭右开，索引从0开始，负数索引从末尾倒序'},
            'apply|map|映射': {'tag': '元素映射', 'concept': 'apply对列/行应用函数，map对Series元素映射，applymap逐元素处理'},
            'datetime|时间|日期|to_datetime': {'tag': '时间处理', 'concept': 'pd.to_datetime()转换日期，dt.year/month/day等提取时间维度'},
            'matplotlib|seaborn|plot|画图': {'tag': '可视化', 'concept': 'Matplotlib基础绘图库，Seaborn提供更美观的统计图表接口'},
            'describe|info|head|shape|查看': {'tag': '探索性分析', 'concept': 'df.head()查看前几行，df.describe()统计摘要，df.info()查看结构'},
            'pivot|melt|重塑': {'tag': '数据重塑', 'concept': 'pivot_table创建透视表，melt将宽表转为长表，类似Excel数据透视功能'},
        }
    },
    4: {  # 数据可视化原理
        'name': '数据可视化原理',
        'base_tags': ['数据可视化', '图表设计', '可视化原则'],
        'style': 'chart',
        'keywords': {
            '折线|趋势|时间序列|line': {'tag': '折线图', 'concept': '折线图展示数据随时间变化的趋势，适合时间序列数据分析'},
            '柱状|条形|比较|对比|bar': {'tag': '柱状图', 'concept': '柱状图用于对比不同类别数据的大小，适合展示分类变量数值对比'},
            '饼图|占比|比例|pie': {'tag': '饼图', 'concept': '饼图展示各部分占总体的比例，类别过多时不宜使用'},
            '散点|相关性|关系|scatter': {'tag': '散点图', 'concept': '散点图展示两个数值变量间的关系，可识别相关性和异常值'},
            '直方图|分布|频率|histogram': {'tag': '直方图', 'concept': '直方图展示数值变量的分布形态，识别数据的集中趋势和离散程度'},
            '箱线图|四分位|离群值|box': {'tag': '箱线图', 'concept': '箱线图展示四分位数结构，便于识别离群值和多组数据分布对比'},
            '热力图|密度|heatmap': {'tag': '热力图', 'concept': '热力图用颜色深浅表示数值大小，适合展示相关性矩阵'},
            '雷达|多维|radar': {'tag': '雷达图', 'concept': '雷达图展示多维度指标，适合综合评价和能力对比'},
            '气泡图|bubble': {'tag': '气泡图', 'concept': '气泡图在散点图基础上增加气泡大小表示第三维度，可同时展示多变量'},
            '桑基|流向|sankey': {'tag': '桑基图', 'concept': '桑基图展示数据从一组到另一组的流动路径和流量大小'},
            '图表选择|选择图表': {'tag': '图表选择', 'concept': '图表选择原则：比较→柱状/条形、趋势→折线、构成→饼图/堆叠柱、相关→散点'},
            '设计原则|原则|简洁|清晰': {'tag': '可视化设计', 'concept': '可视化设计原则：KISS简洁、突出重点、保持一致性、避免误导性图表'},
            '颜色|配色|色彩|color': {'tag': '色彩搭配', 'concept': '配色应考虑语义、色盲友好、对比度和情感表达'},
            '仪表盘|dashboard|Dashboard': {'tag': '仪表盘', 'concept': '仪表盘整合多个相关指标图表，提供全局视图，支持交互式筛选'},
            '误导|错误|陷阱': {'tag': '可视化陷阱', 'concept': '常见陷阱：Y轴不从0开始放大差异、饼图超过5类、3D图表降低可读性'},
            '数据墨水|ink': {'tag': '数据墨水比', 'concept': 'Tufte数据墨水比原则：最大化数据墨水，删除多余的非数据装饰元素'},
            '讲故事|story|叙事': {'tag': '数据叙事', 'concept': '好的可视化不仅展示数据，更能讲述故事，引导读者理解发现和结论'},
        }
    },
    5: {  # 商业智能与报表
        'name': '商业智能与报表',
        'base_tags': ['BI', '报表系统', '数据分析'],
        'style': 'business',
        'keywords': {
            'BI|商业智能': {'tag': '商业智能', 'concept': 'BI将数据转化为洞察，通过报表、仪表盘、OLAP分析支持决策'},
            '数据仓库|Data Warehouse|DW': {'tag': '数据仓库', 'concept': '数据仓库是面向主题、集成、相对稳定、反映历史变化的数据集合'},
            '星型|雪花|schema|维度建模': {'tag': '维度建模', 'concept': '星型模式：中心事实表+多个维度表；雪花模式对维度表进一步规范化'},
            '维度|事实|Dimension|Fact': {'tag': '维度与事实', 'concept': '维度表描述分析角度（时间、地区、产品），事实表存储度量数据'},
            'ETL|抽取|转换|加载': {'tag': 'ETL', 'concept': 'ETL即数据抽取/转换/加载，将分散源系统数据经清洗转换后加载到数据仓库'},
            'DAX|度量值|计算列': {'tag': 'DAX', 'concept': 'DAX是Power BI的数据分析表达式语言，用于创建度量值和计算列'},
            'Power BI|Tableau|FineBI': {'tag': 'BI工具', 'concept': '主流BI工具：Power BI微软生态友好，Tableau可视化强大，FineBI适合国内企业'},
            '报表|Report|日报|周报': {'tag': '业务报表', 'concept': '业务报表按周期呈现核心指标，是管理层了解业务状况的主要渠道'},
            'KPI|关键指标|Key Performance': {'tag': 'KPI', 'concept': 'KPI是衡量业务表现的核心指标，应与战略目标紧密相关'},
            'OLAP|钻取|切片|切块': {'tag': 'OLAP分析', 'concept': 'OLAP支持多维度分析操作：钻取查看详情、切片筛选特定维度'},
            '切片器|Slicer|筛选器': {'tag': '交互式筛选', 'concept': '切片器提供直观的可视化筛选控件，用户可快速过滤数据'},
            '钻取|drill|Drill-through': {'tag': '数据钻取', 'concept': '钻取从汇总数据深入明细数据，可向上钻取汇总或向下钻取明细'},
            '指标体系': {'tag': '指标体系', 'concept': '指标体系是业务衡量的框架，包含结果指标、过程指标、领先指标和健康指标'},
            '同比|环比|增长率|YOY|MOM': {'tag': '同比环比', 'concept': '同比与去年同期比消除季节性，环比与上期比看短期趋势变化'},
        }
    },
    6: {  # 商务数据分析实战
        'name': '商务数据分析实战',
        'base_tags': ['商务分析', '业务分析', '实战案例'],
        'style': 'case',
        'keywords': {
            '商业模式|收入|盈利': {'tag': '商业模式', 'concept': '商业模式描述企业如何创造价值、传递价值和获取价值'},
            '用户|客户|RFM|生命周期|CLV': {'tag': '客户分析', 'concept': '客户分析包括客户画像、价值分层（RFM）、生命周期和留存分析'},
            'RFM|最近购买|购买频率|购买金额': {'tag': 'RFM分析', 'concept': 'RFM基于Recency最近、Frequency频率、Monetary金额三维度对客户价值分层'},
            '销售|Sales|销售额|销量': {'tag': '销售分析', 'concept': '销售分析包括销售趋势、产品结构、区域分布、渠道效果和团队绩效'},
            '营销|Campaign|ROI|转化率': {'tag': '营销分析', 'concept': '营销分析衡量渠道ROI、用户获取成本、转化率和归因优化'},
            '产品|Product|SKU|品类': {'tag': '产品分析', 'concept': '产品分析评估SKU表现、ABC分类、产品生命周期和交叉销售效果'},
            '定价|价格|pricing|定价策略': {'tag': '定价策略', 'concept': '定价策略包括成本加成、竞争定价、价值定价和动态定价'},
            '市场|Market|份额|竞争|竞品': {'tag': '市场分析', 'concept': '市场分析评估市场规模、份额趋势、竞品策略，识别市场机会和威胁'},
            'A/B测试|AB测试|对照实验': {'tag': 'A/B测试', 'concept': 'A/B测试将用户随机分组接受不同策略，通过统计检验比较效果差异'},
            '漏斗|转化|流失|funnel': {'tag': '漏斗分析', 'concept': '漏斗分析追踪用户从浏览到购买各步骤的转化率，识别流失严重环节'},
            '留存|churn|churn率|retention': {'tag': '留存分析', 'concept': '留存率衡量用户持续使用情况，cohort分析按用户分组观察留存曲线'},
            '获客|CAC|customer|获取成本': {'tag': '获客分析', 'concept': 'CAC（客户获取成本）应与LTV对比评估业务健康度'},
            '增长|Growth|增长黑客': {'tag': '增长分析', 'concept': '增长分析关注AARRR漏斗：获客→激活→留存→收入→推荐'},
            '库存|Inventory|库存周转': {'tag': '库存分析', 'concept': '库存分析关注库存周转率、缺货率、滞销品识别和安全库存优化'},
            '成本|Cost|利润|Margin': {'tag': '财务分析', 'concept': '财务分析关注收入、成本、毛利率、净利润，评估经营健康度'},
        }
    },
    7: {  # 统计分析基础
        'name': '统计分析基础',
        'base_tags': ['统计学', '统计分析', '数据统计'],
        'style': 'statistics',
        'keywords': {
            '均值|平均|mean': {'tag': '均值', 'concept': '均值是数据总和除以个数，对极端值敏感，适合近似对称分布'},
            '中位数|median': {'tag': '中位数', 'concept': '中位数将数据排序后取中间值，不受极端值影响，适合偏态分布'},
            '众数|mode|出现频率': {'tag': '众数', 'concept': '众数是出现频率最高的值，可用于类别数据，可能有多个或不存在'},
            '方差|标准差|variance|std': {'tag': '离散程度', 'concept': '方差衡量数据与均值的偏离程度，标准差是方差的平方根，更易解释'},
            '最大值|最小值|max|min|极值': {'tag': '极值', 'concept': '最大值/最小值描述数据范围，极值易受异常值影响'},
            '四分位|分位数|quantile|IQR': {'tag': '分位数', 'concept': '四分位数将数据四等分，IQR度量中间50%数据的离散程度，对极端值稳健'},
            '描述性统计|describe': {'tag': '描述性统计', 'concept': '描述性统计用数值和图表概括数据特征，包括集中趋势和离散程度'},
            '假设检验|p值|显著性|t检验': {'tag': '假设检验', 'concept': '假设检验验证关于总体的假设，p<0.05通常认为具有统计显著性'},
            '正态分布|高斯分布|normal': {'tag': '正态分布', 'concept': '正态分布呈钟形对称，约68%数据在均值±1σ、95%在±2σ'},
            '相关性|correlation|相关系数': {'tag': '相关性分析', 'concept': '皮尔逊相关系数r∈[-1,1]衡量线性相关程度，注意相关≠因果'},
            '回归|regression|线性回归': {'tag': '回归分析', 'concept': '线性回归建立因变量与自变量的线性关系，可用于预测和解释'},
            '卡方|chi-square': {'tag': '卡方检验', 'concept': '卡方检验用于分类变量间的独立性检验，比较观察频数与期望频数'},
            '置信区间|confidence': {'tag': '置信区间', 'concept': '置信区间给出参数估计的范围，95%置信区间意味着重复抽样有约95%概率覆盖真值'},
            '样本|sample|抽样|总体|population': {'tag': '抽样方法', 'concept': '总体是研究的全部对象，样本是从中抽取的部分，常用简单随机/分层/整群抽样'},
            '偏态|skew|峰度|kurtosis': {'tag': '分布形态', 'concept': '偏态系数>0右偏长尾在右，<0左偏；峰度>0比正态尖峭，<0更平坦'},
            '概率|probability|概率分布': {'tag': '概率分布', 'concept': '常用概率分布：二项、泊松、正态、均匀分布'},
            '贝叶斯|bayes|后验|先验': {'tag': '贝叶斯统计', 'concept': '贝叶斯定理：后验概率∝先验概率×似然，将先验知识与观测数据结合'},
            '因果|causal|因果推断|相关': {'tag': '因果推断', 'concept': '相关不等于因果！因果推断需要实验设计或特定方法（如DID、断点回归）'},
        }
    },
    8: {  # 机器学习入门
        'name': '机器学习入门',
        'base_tags': ['机器学习', '算法', '模型'],
        'style': 'ml',
        'keywords': {
            '监督学习|supervised|标签|分类|回归': {'tag': '监督学习', 'concept': '监督学习使用带标签数据训练模型，分类预测离散类别，回归预测连续数值'},
            '无监督学习|unsupervised|聚类|降维': {'tag': '无监督学习', 'concept': '无监督学习处理无标签数据，聚类发现分组，降维如PCA可视化高维数据'},
            '分类|classifier|预测类别': {'tag': '分类算法', 'concept': '常用分类算法：逻辑回归、决策树、随机森林、SVM、KNN、朴素贝叶斯'},
            '回归|regression|线性回归': {'tag': '回归算法', 'concept': '回归预测连续值，线性回归最基础，随机森林/GBDT/XGBoost是非线性回归常用方法'},
            '聚类|cluster|K-means|K均值|分组': {'tag': '聚类算法', 'concept': 'K-means最常用聚类算法，通过迭代将数据分为K簇，对初始质心敏感'},
            'KNN|k近邻|neighbor': {'tag': 'KNN', 'concept': 'KNN基于距离分类，简单直观但计算量大，对高维数据和不相关特征敏感'},
            '决策树|tree|Decision Tree': {'tag': '决策树', 'concept': '决策树按特征递归分裂，易解释但易过拟合'},
            '随机森林|Random Forest|集成|ensemble': {'tag': '随机森林', 'concept': '随机森林是Bagging集成方法，训练多棵决策树投票预测，减少过拟合'},
            '过拟合|overfit|欠拟合|underfit|泛化': {'tag': '过拟合与欠拟合', 'concept': '过拟合在训练集表现好但测试集差（记忆了噪声），欠拟合都差（模型太简单）'},
            '特征工程|feature|特征选择|特征提取': {'tag': '特征工程', 'concept': '特征工程将原始数据转化为模型可用的特征，包括缺失值处理、编码、缩放和交互特征'},
            '训练集|测试集|验证集|train|test|划分': {'tag': '数据集划分', 'concept': '数据划分为训练集训练模型、验证集调参、测试集最终评估，70-30或80-20常见'},
            '准确率|accuracy|精确率|precision|召回率|recall|F1': {'tag': '分类评估', 'concept': '分类评估：准确率=预测正确数/总数；精确率/召回率/F1对类别不平衡更重要'},
            'MAE|MSE|RMSE|R²|决定系数': {'tag': '回归评估', 'concept': '回归评估：MAE平均绝对误差、MSE均方误差、R²决定系数越大越好'},
            '交叉验证|cross-validation|CV|KFold': {'tag': '交叉验证', 'concept': 'K折交叉验证将数据K等分，每次用K-1份训练、1份验证，轮换K次评估模型'},
            '网格搜索|grid search|超参数|调参': {'tag': '超参数调优', 'concept': '网格搜索遍历超参数组合，配合交叉验证寻找最优参数'},
            '梯度下降|gradient descent|学习率|learning rate': {'tag': '优化算法', 'concept': '梯度下降沿负梯度方向迭代更新参数，学习率控制步长，Adam自适应常用'},
            'SVM|支持向量机': {'tag': 'SVM', 'concept': 'SVM寻找最大间隔超平面分类，通过核函数处理非线性分类问题'},
            '逻辑回归|Logistic|sigmoid': {'tag': '逻辑回归', 'concept': '逻辑回归用sigmoid函数将线性组合压缩到[0,1]作为类别概率，可解释性强'},
            '神经网络|Neural Network|深度学习': {'tag': '神经网络', 'concept': '神经网络由多层神经元组成，CNN用于图像、RNN/LSTM用于序列'},
            'scikit-learn|sklearn': {'tag': 'sklearn', 'concept': 'Scikit-learn是Python最流行的ML库，提供统一API，涵盖分类/回归/聚类/降维'},
        }
    },
    9: {  # SQL与数据库
        'name': 'SQL与数据库',
        'base_tags': ['SQL', '数据库', '数据查询'],
        'style': 'sql',
        'keywords': {
            'SELECT|查询|选择': {'tag': 'SELECT查询', 'concept': 'SELECT列名 FROM表名 WHERE条件；SELECT *选择所有列，SELECT DISTINCT去重查询'},
            'WHERE|条件|过滤|筛选': {'tag': 'WHERE筛选', 'concept': 'WHERE子句筛选行，配合AND/OR/NOT组合多条件，可用IN/BETWEEN/LIKE'},
            'JOIN|连接|LEFT|RIGHT|INNER|FULL': {'tag': 'JOIN连接', 'concept': 'INNER JOIN返回匹配行，LEFT JOIN保留左表所有行，RIGHT JOIN保留右表'},
            'GROUP BY|分组|聚合': {'tag': '分组聚合', 'concept': 'GROUP BY按列分组，配合聚合函数；WHERE在分组前筛行，HAVING在分组后筛组'},
            'ORDER BY|排序|ASC|DESC': {'tag': '排序', 'concept': 'ORDER BY列名 ASC/DESC，ASC升序、DESC降序，可按多列排序'},
            '子查询|subquery|嵌套|EXISTS': {'tag': '子查询', 'concept': '子查询嵌套在主查询中，可出现在WHERE/FROM/SELECT中，IN/EXISTS配合使用'},
            '窗口函数|window|ROW_NUMBER|RANK|OVER': {'tag': '窗口函数', 'concept': '窗口函数在分组内计算但不压缩行数：OVER(PARTITION BY列 ORDER BY列)'},
            '聚合函数|COUNT|SUM|AVG|MAX|MIN': {'tag': '聚合函数', 'concept': 'COUNT计数、SUM求和、AVG平均、MAX/MIN极值，聚合函数忽略NULL值'},
            'INSERT|插入|新增': {'tag': '插入数据', 'concept': 'INSERT INTO表(列) VALUES(值)，可插入单行、多行或通过INSERT...SELECT批量插入'},
            'UPDATE|更新|修改': {'tag': '更新数据', 'concept': 'UPDATE表 SET列=值 WHERE条件；务必加WHERE否则修改全行！'},
            'DELETE|删除': {'tag': '删除数据', 'concept': 'DELETE FROM表 WHERE条件；务必加WHERE否则清空表！TRUNCATE快速清空（不可回滚）'},
            'CREATE TABLE|建表|创建表': {'tag': '建表语句', 'concept': 'CREATE TABLE表(列名 数据类型 约束)，常用约束：PRIMARY KEY、FOREIGN KEY、NOT NULL、UNIQUE'},
            '主键|PRIMARY KEY|PK|外键|FOREIGN KEY|FK': {'tag': '键与约束', 'concept': '主键唯一标识行（非空且唯一），外键引用其他表主键保证引用完整性'},
            '索引|index|性能|查询优化': {'tag': '索引优化', 'concept': '索引加速查询但占用空间和写入成本，常用B树索引，EXPLAIN分析执行计划'},
            '事务|transaction|ACID|commit|rollback': {'tag': '事务', 'concept': '事务是原子操作单元，ACID特性：原子性、一致性、隔离性、持久性'},
            '视图|VIEW|虚拟表': {'tag': '视图', 'concept': '视图是存储的查询结果，像虚拟表一样使用，简化复杂查询提供安全层'},
            'NULL|空值|IS NULL|IS NOT NULL': {'tag': '空值处理', 'concept': 'NULL表示缺失值，必须用IS NULL/IS NOT NULL判断，=NULL永远为false'},
            'LIKE|模糊匹配|通配符|%': {'tag': '模糊查询', 'concept': 'LIKE模糊匹配，%匹配0或多个字符、_匹配单个字符，也可用REGEXP正则匹配'},
            'HAVING|分组筛选': {'tag': 'HAVING', 'concept': 'HAVING筛选GROUP BY后的分组结果，必须与GROUP BY配合'},
            'LIMIT|TOP|限制行数|分页': {'tag': '限制行数', 'concept': 'LIMIT限制返回行数，MySQL用LIMIT m,n实现分页'},
            'CTE|WITH|公用表表达式': {'tag': 'CTE', 'concept': 'WITH别名AS(子查询)定义CTE，将复杂查询模块化，比嵌套子查询更易读'},
        }
    },
    10: {  # 数据思维与行业应用
        'name': '数据思维与行业应用',
        'base_tags': ['数据思维', '行业应用', '数据分析'],
        'style': 'thinking',
        'keywords': {
            '思维|数据驱动|mindset|数据思维': {'tag': '数据思维', 'concept': '数据思维是基于数据而非直觉进行决策的思维方式，强调客观、可度量、可验证'},
            '电商|零售|e-commerce': {'tag': '电商分析', 'concept': '电商数据分析关注GMV、转化率、客单价、复购率、退货率和用户增长'},
            '金融|银行|Fintech|风控|风险': {'tag': '金融分析', 'concept': '金融数据分析应用于风控评分、反欺诈、客户分群和营销响应预测'},
            '医疗|健康|healthcare|医院': {'tag': '医疗分析', 'concept': '医疗数据应用于疾病预测模型、临床路径优化、医院运营分析和药物研发'},
            '教育|learning|学习|学生': {'tag': '教育分析', 'concept': '教育数据分析学生学习行为、预测辍学风险、优化教学内容和个性化推荐'},
            '物流|供应链|supply chain|库存': {'tag': '物流供应链', 'concept': '物流分析关注路径优化、库存管理、需求预测、成本控制和供应商评价'},
            '互联网|产品|App|用户行为': {'tag': '互联网分析', 'concept': '互联网数据分析关注用户行为、产品迭代效果、DAU/MAU增长和渠道ROI'},
            '房地产|地产|房产': {'tag': '地产分析', 'concept': '房地产分析评估房价走势、地段价值、投资回报率、客户画像和市场供需'},
            '制造业|工业|工厂|production': {'tag': '制造业分析', 'concept': '制造业数据分析用于预测性维护、生产效率优化、质量控制和能耗管理'},
            '新媒体|内容|media|社交|social': {'tag': '内容分析', 'concept': '新媒体分析关注内容阅读量、互动率、粉丝增长、传播路径和内容效果归因'},
            '指标|metric|KPI|指标体系': {'tag': '指标体系', 'concept': '好的指标体系包含北极星指标、一级指标、二级指标，层层关联支撑业务'},
            '数据质量|脏数据|质量': {'tag': '数据质量', 'concept': '数据质量五维度：准确性、完整性、一致性、及时性、唯一性'},
            '数据驱动|数据化|数据决策|culture': {'tag': '数据驱动文化', 'concept': '数据驱动文化将数据作为决策基础，需要数据素养、工具支持和高层推动'},
            '商业洞察|insight|洞察|发现': {'tag': '商业洞察', 'concept': '商业洞察是从数据中发现的有价值信息，可转化为具体行动建议'},
            '沟通|storytelling|表达|汇报': {'tag': '数据沟通', 'concept': '有效数据沟通需将技术发现转化为业务语言，用故事线串联分析发现'},
            '伦理|隐私|合规|ethical|GDPR|个人信息': {'tag': '数据伦理', 'concept': '数据伦理关注隐私保护、数据合规、算法偏见和公平性'},
            '数据治理|治理|数据资产|元数据|主数据': {'tag': '数据治理', 'concept': '数据治理管理数据资产，包含数据标准、元数据、主数据、数据质量、数据安全'},
        }
    }
}


# ============================================================
# 2. 内容生成函数
# ============================================================

def get_course_id(item_id):
    m = re.search(r'(?:ex-|q|task-)(\d+)', item_id)
    if m:
        return int(m.group(1))
    return 1


def extract_answer_text(answer):
    if isinstance(answer, list):
        if len(answer) > 3:
            return '、'.join(answer[:3]) + '等'
        return '、'.join(answer)
    if isinstance(answer, bool):
        return '正确' if answer else '错误'
    return str(answer)


def find_best_concept(question, options_str, course_info):
    """匹配最佳知识点解释"""
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
    course_id = get_course_id(item_id)
    course_info = COURSE_KNOWLEDGE.get(course_id, COURSE_KNOWLEDGE[1])
    options_str = ' '.join(options) if isinstance(options, list) else ''
    
    if q_type == 'essay':
        return '本题考查' + course_info['name'] + '综合应用能力。建议回答框架：①核心概念定义；②关键要点展开（至少3-4个要点）；③结合实际案例或应用场景；④个人理解总结与启示。评分要点：完整性、准确性、深度、表达。'
    
    if q_type == 'truefalse':
        answer_text = '正确' if answer in (True, '正确', 'true', 'True') else '错误'
        match = find_best_concept(question, options_str, course_info)
        if match:
            return '【答案】' + answer_text + '。【解析】' + match['concept'] + '这是' + course_info['name'] + '的重要基础概念。'
        return '【答案】' + answer_text + '。【解析】本题考查' + course_info['name'] + '基础概念，需准确理解核心定义。'
    
    answer_text = extract_answer_text(answer)
    match = find_best_concept(question, options_str, course_info)
    
    if match:
        return '【答案】' + answer_text + '。【解析】' + match['concept'] + '这一知识点在' + course_info['name'] + '中具有重要地位。'
    
    return '【答案】' + answer_text + '。【解析】本题考查' + course_info['name'] + '核心知识点。正确选项准确描述了该概念的核心内涵。'


def generate_tags(item_id, question, q_type, options):
    course_id = get_course_id(item_id)
    course_info = COURSE_KNOWLEDGE.get(course_id, COURSE_KNOWLEDGE[1])
    options_str = ' '.join(options) if isinstance(options, list) else ''
    combined_text = question + ' ' + options_str
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


def generate_task_tags(task_id, title, description):
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
# 3. 字符串处理工具
# ============================================================

def escape_for_backtick(text):
    """将文本转义为可放入TypeScript反引号字符串"""
    # 转义反斜杠、反引号和 ${...}
    text = text.replace('\\', '\\\\')
    text = text.replace('`', '\\`')
    text = text.replace('${', '\\${')
    return text


def parse_object_lines(lines, start_idx):
    """从 start_idx 开始解析一个JS对象，返回该对象的所有行（包括起始{和结尾}），使用缩进级别匹配"""
    # 找到起始 { 的行
    start_line = start_idx
    while start_line < len(lines) and '{' not in lines[start_line]:
        start_line += 1
    
    if start_line >= len(lines):
        return start_idx, start_idx
    
    # 计算起始缩进级别
    base_indent = len(lines[start_line]) - len(lines[start_line].lstrip())
    # 计算 { 在这一行的级别
    brace_level = 0
    
    i = start_line
    found_open = False
    while i < len(lines):
        line = lines[i]
        # 计算这一行增加/减少的括号级别（考虑字符串中的括号？简化处理）
        for ch in line:
            if ch == '{':
                brace_level += 1
                found_open = True
            elif ch == '}':
                brace_level -= 1
        # 如果已经找到 { 并且 level 回到了 0 或 遇到了同级的 }
        if found_open and brace_level <= 0:
            return start_line, i
        i += 1
    
    return start_line, len(lines) - 1


def find_property_line(lines, property_name):
    """在lines中查找第一个 property_name: 出现的行索引"""
    for i, line in enumerate(lines):
        if re.search(r'\b' + re.escape(property_name) + r'\s*:', line):
            return i
    return -1


def extract_id_from_lines(lines):
    """从多行文本中提取 id: 'xxx' 中的xxx"""
    for line in lines:
        m = re.search(r"id\s*:\s*['\"]([^'\"]+)['\"]", line)
        if m:
            return m.group(1)
    return None


def extract_question_from_lines(lines):
    """从多行文本中提取 question 属性值"""
    text = '\n'.join(lines)
    m = re.search(r"question\s*:\s*['\"`]([^'\"`]+)['\"`]", text)
    if m:
        return m.group(1)
    return ''


def extract_type_from_lines(lines):
    """从多行文本中提取 type 属性值"""
    text = '\n'.join(lines)
    m = re.search(r"type\s*:\s*['\"]([^'\"]+)['\"]", text)
    if m:
        return m.group(1)
    return 'single'


def extract_options_from_lines(lines):
    """从多行文本中提取 options 数组"""
    text = '\n'.join(lines)
    m = re.search(r"options\s*:\s*\[([^\]]*)\]", text, re.DOTALL)
    if m:
        return re.findall(r"['\"`]([^'\"`]+?)['\"`]", m.group(1))
    return []


def extract_answer_from_lines(lines):
    """从多行文本中提取 answer 值"""
    text = '\n'.join(lines)
    # 尝试数组
    m = re.search(r"answer\s*:\s*\[([^\]]*)\]", text, re.DOTALL)
    if m:
        items = re.findall(r"['\"`]([^'\"`]+?)['\"`]", m.group(1))
        if items:
            return items
    # 尝试 boolean
    m = re.search(r"answer\s*:\s*(true|false)", text, re.IGNORECASE)
    if m:
        return m.group(1).lower() == 'true'
    # 尝试字符串
    m = re.search(r"answer\s*:\s*['\"`]([^'\"`,\n]+?)['\"`]", text)
    if m:
        return m.group(1)
    return ''


# ============================================================
# 4. 主要处理逻辑 - 逐行处理
# ============================================================

def process_items_in_text(text, item_type='exercise'):
    """在文本中查找并增强所有题目/任务对象
    
    策略：通过查找 id: 'ex-' / id: 'q' / id: 'task-' 识别对象，
    找到对象的开始 { 和结束 }，然后在其中插入新字段。
    """
    lines = text.split('\n')
    result_lines = []
    
    # 1. 识别所有题目/任务对象的位置
    #    我们遍历所有行，找到包含 id: 'xxx-' 的行，然后向前找到其所属对象的 {，
    #    然后匹配到对应的 }，然后处理整个对象。
    
    id_prefixes = {
        'exercise': r"id\s*:\s*['\"]ex-",
        'quiz': r"id\s*:\s*['\"]q\d+-",
        'task': r"id\s*:\s*['\"]task-",
    }
    
    processed_ranges = set()  # 已经处理过的行范围
    
    # 为了找到对象边界，先找所有包含 id 的行
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # 检查这一行是否是题目/任务的 id
        is_match = False
        if re.search(id_prefixes[item_type], line):
            is_match = True
        
        if not is_match:
            result_lines.append(line)
            i += 1
            continue
        
        # 找到了一个id行，现在要找到所属对象的边界
        # 向上找到对象的开始 {
        obj_start = i
        while obj_start >= 0 and '{' not in lines[obj_start]:
            obj_start -= 1
        
        if obj_start < 0:
            result_lines.append(line)
            i += 1
            continue
        
        # 从 obj_start 开始找到匹配的 }
        brace_level = 0
        obj_end = -1
        for j in range(obj_start, len(lines)):
            for ch in lines[j]:
                if ch == '{':
                    brace_level += 1
                elif ch == '}':
                    brace_level -= 1
            if brace_level <= 0 and j > obj_start:
                obj_end = j
                break
        
        if obj_end < 0:
            result_lines.append(line)
            i += 1
            continue
        
        # 现在 obj_start 到 obj_end 是一个对象
        # 先把 obj_start 之前未输出的行输出
        # 实际上我们应该检查：result_lines 已经到哪里了
        
        # 处理这个对象
        obj_lines = lines[obj_start:obj_end + 1]
        
        # 检查是否已包含 explanation（避免重复处理）
        obj_text = '\n'.join(obj_lines)
        if 'explanation:' in obj_text and (item_type in ['exercise', 'quiz']):
            # 已处理过，直接输出
            result_lines.extend(obj_lines)
            i = obj_end + 1
            continue
        if 'tags:' in obj_text and item_type == 'task':
            result_lines.extend(obj_lines)
            i = obj_end + 1
            continue
        
        # 处理
        enhanced_lines = enhance_item_lines(obj_lines, item_type)
        
        # 检查是否有未处理的 obj_start 和当前位置之间的行
        # 实际上 result_lines 已经输出到了 obj_start 之前的行
        # 因为我们按顺序遍历，并且当前 i 在 obj_start 之后
        # 所以需要把 result_lines 回退到 obj_start 之前的状态
        # 简化：在遍历到 obj_start 之前的每一行都已被添加到 result_lines
        # 让我们确保 result_lines 中没有超过 obj_start 的内容
        # 实际上因为我们是顺序处理，当 i > obj_start 时，中间的行都被append了
        # 我们需要裁剪 result_lines 到正确的位置
        
        # 为了安全起见，采用另一种策略：直接把 enhanced_lines 加入 result_lines，
        # 但需要先移除 result_lines 中已经 append 的 obj_start 和 i 之间的行
        
        # 更简单的策略：从 obj_start 到 i-1 的行已经被 append 到 result_lines
        # 所以我们需要删除这些行，然后 append enhanced_lines
        if len(result_lines) >= (i - obj_start):
            # 删除错误添加的行
            del result_lines[-(i - obj_start):]
        else:
            pass  # 安全起见，继续执行
        
        result_lines.extend(enhanced_lines)
        i = obj_end + 1
    
    return '\n'.join(result_lines)


def enhance_item_lines(obj_lines, item_type):
    """增强一个对象的多行内容
    
    策略：找到对象中最后一个简单属性（如 points: 或 solution:）的行，
    在该行后面添加新字段。
    
    或者更简单：找到对象的最后一个属性行（在最后一个 , 之后的 } 之前），
    并在此之前插入新字段。
    """
    # 找到最后一个属性行（即最后一个包含 : 的行，在 } 之前）
    # 简化做法：从倒数第二行开始向前找，找到包含 ':' 的一行
    
    last_property_idx = -1
    for j in range(len(obj_lines) - 2, max(0, len(obj_lines) - 10), -1):
        if ':' in obj_lines[j] and obj_lines[j].strip():
            last_property_idx = j
            break
    
    if last_property_idx < 0:
        # 没找到，直接返回原内容
        return obj_lines
    
    # 获取缩进
    indent_match = re.match(r'(\s*)', obj_lines[last_property_idx])
    indent = indent_match.group(1) if indent_match else '        '
    
    # 解析内容
    item_id = extract_id_from_lines(obj_lines) or ''
    
    if item_type in ['exercise', 'quiz']:
        question = extract_question_from_lines(obj_lines)
        q_type = extract_type_from_lines(obj_lines)
        options = extract_options_from_lines(obj_lines)
        answer = extract_answer_from_lines(obj_lines)
        
        explanation = generate_explanation(item_id, question, q_type, options, answer)
        tags = generate_tags(item_id, question, q_type, options)
        difficulty = generate_difficulty(item_id, question, q_type)
        
        # 构建新字段
        tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'
        exp_escaped = escape_for_backtick(explanation)
        
        new_fields = [
            indent + f"explanation: `{exp_escaped}`,",
            indent + f"tags: {tags_str},",
            indent + f"difficulty: {difficulty}"
        ]
        
        # 检查是否需要在最后一个属性行末尾添加逗号
        last_line = obj_lines[last_property_idx]
        if not last_line.rstrip().endswith(','):
            # 添加逗号
            obj_lines[last_property_idx] = last_line.rstrip() + ','
        
        # 在 last_property_idx 之后插入新字段
        enhanced = obj_lines[:last_property_idx + 1] + new_fields + obj_lines[last_property_idx + 1:]
        return enhanced
    
    elif item_type == 'task':
        title = ''
        description = ''
        for line in obj_lines:
            m = re.search(r"title\s*:\s*['\"`]([^'\"`]+)['\"`]", line)
            if m:
                title = m.group(1)
            m = re.search(r"description\s*:\s*['\"`]([^'\"`]+)['\"`]", line)
            if m:
                description = m.group(1)
        
        tags = generate_task_tags(item_id, title, description)
        tags_str = '[' + ', '.join([f"'{t}'" for t in tags]) + ']'
        
        new_fields = [
            indent + f"tags: {tags_str}"
        ]
        
        # 检查最后一个属性行末尾是否需要加逗号
        last_line = obj_lines[last_property_idx]
        if not last_line.rstrip().endswith(','):
            obj_lines[last_property_idx] = last_line.rstrip() + ','
        
        enhanced = obj_lines[:last_property_idx + 1] + new_fields + obj_lines[last_property_idx + 1:]
        return enhanced
    
    return obj_lines


# ============================================================
# 5. 主处理流程
# ============================================================

def find_array_block(text, array_name):
    """找到 array_name: [...] 的开始和结束索引，返回数组内容（不含 [ 和 ]）"""
    # 找到所有匹配的数组块
    blocks = []
    pattern = re.escape(array_name) + r'\s*:\s*\['
    
    for match in re.finditer(pattern, text):
        start = match.end()
        # 找到匹配的 ]，通过括号计数
        depth = 1
        i = start
        while i < len(text) and depth > 0:
            if text[i] == '[':
                depth += 1
            elif text[i] == ']':
                depth -= 1
            i += 1
        end = i - 1
        blocks.append((start, end, text[start:end]))
    
    return blocks


def process_file(input_file, output_file=None):
    print(f"读取文件: {input_file}")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_len = len(content)
    print(f"原始文件大小: {original_len} 字符")
    
    # 1. 处理章节练习题
    print("\n=== 处理章节练习题 ===")
    content = process_items_in_text(content, 'exercise')
    print("完成")
    
    # 2. 处理测验题
    print("\n=== 处理测验题 ===")
    content = process_items_in_text(content, 'quiz')
    print("完成")
    
    # 3. 处理项目任务
    print("\n=== 处理项目任务 ===")
    content = process_items_in_text(content, 'task')
    print("完成")
    
    if output_file is None:
        output_file = input_file
    
    print(f"\n写入文件: {output_file}")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    final_len = len(content)
    print(f"完成！文件大小: {final_len} 字符（增加了 {final_len - original_len} 字符）")
    
    return content


if __name__ == '__main__':
    data_file = '/workspace/src/utils/data.ts'
    if len(sys.argv) > 1:
        data_file = sys.argv[1]
    
    if not os.path.exists(data_file):
        print(f"错误：文件不存在 {data_file}")
        sys.exit(1)
    
    process_file(data_file)
    print("\n数据增强完成！")
