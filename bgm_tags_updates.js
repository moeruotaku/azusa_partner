// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.3.11.526
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  232: "key|麻枝准|Galgame|air|鸟之诗|催泪|泣きゲー|观铃|神作|国歌|PC",
  1125: "KID|infinity|打越刚太郎|Galgame|Never7|悬疑|AVG|中泽工|PC|轮回开山作|PSP",
  1126: "Galgame|KID|Ever17|悬疑|神作|打越鋼太郎|infinity|科幻|打越刚太郎|AVG|PC",
  4823: "轻小说|后宫|健速|三坪房间的侵略者|搞笑|三坪房间的侵略者！？|治愈|都合大先生|宇宙人|地底人|幽灵",
  6580: "漫画|杉基イクラ|动画改|夏日大作战|細田守|全三卷|原创动画改编漫画|複数巻|マンガ|漫画シリーズ|コミックス",
  22697: "轻小说|乃木坂春香的秘密|软妹的原型|欢乐|天然|五十岚雄策|已完结|后宫|小说系列|软妹",
  34179: "秋山瑞人|轻小说|奇幻|战斗|2008",
  39035: "轻小说|山形石雄|推理|奇幻|悬疑|六花的勇者|冒险|集英社|小说系列|テルイ",
  39332: "轻小说|伪娘|搞笑|恋爱|明坂つづり|已完结|男扮女装|小说|小说系列|系列",
  40569: "轻小说|搞笑|恋爱|春日部タケル|后宫|校园|青春|小说系列|已完结|系列",
  49111: "轻小说|野村美月|伪娘|男女通吃|搞笑|野村老师果然是腐女！|karory|野村老师的节操|恋爱|圣罗|后宫",
  54887: "轻小说|后宫|柑橘|ゆすら|完结|しゅがすく|插图|复数卷|短篇|搞笑|2013",
  80400: "历史|漫画|宮下英樹|講談社|週刊ヤングマガジン|漫画系列",
  103031: "轻小说|野村美月|吸血鬼|竹岡美穂|系列|腰斩|ファミ通文庫|青春|已完结",
  116464: "轻小说|緋月薙|三嶋くろね|HJ文庫|恋爱|系列|2013|小说|萝莉|已完结|套",
  129028: "漫画|妹控|埃罗芒阿老师|伏見つかさ|萝莉|妹妹|兄妹|兄控|萌系|2014|萌",
  144564: "漫画|智斗|超能力|生存游戏|战斗|2015|みやこかしわ|谋略|小学馆|悬疑|生存",
  187009: "漫画|国漫|战斗|奇幻|魔幻|吸血鬼|爱欧|Bloodline|漫画SHOW|童年|国产",
  214607: "少年漫画|漫画系列|日本漫画|已完结|2002|桜野みねね|全6卷",
  220090: "漫画|后宫|刀剑神域|恋爱|奇幻|日常|小说改|SAO|一般向",
  235036: "轻小说|小说系列|已完结|博|小说|青春|全8卷|百合|轻百|2017",
  238996: "漫画|搞笑|日常|黑道|おおのこうすけ|美食|欢乐|新潮社|2018|極主夫道|日本",
  271702: "漫画|少女漫画|小说改|高坂りと|顎木あくみ|少女漫|恋爱漫画|2018|日本漫画",
  272351: "格斗|漫画|战斗|2019|だろめおん|打斗|格斗漫画|漫画系列|小学館|老年痴呆|搞笑",
  277772: "轻小说|古宮九時|小说系列|已完结|全4卷",
  279871: "百合|漫画|魔法少女|卖肉|搞笑|SM|战斗|恶堕|小野中彰大|2019|反英雄",
  287720: "漫画|搞笑|误解系|日常|已完结|2019|父爱|久川はる|大叔|漫画系列|全3卷",
  288315: "漫画|少女漫画|森下suu|2019|講談社|少女漫|恋爱|少女|デザート|校园|漫画系列",
  292572: "漫画|眉月じゅん|恋爱|科幻|集英社|2019|週刊ヤングジャンプ|青年漫|少女漫画|連載中|九龙大众浪漫",
  293355: "漫画|搞笑|百合|欢乐|电波|轻百合|沙雕|日常|抽象|2019|講談社",
  300270: "百合|轻小说|みかみてれん|竹嶋えく|欢乐|后宫|屑粉毛|搞笑|2020|恋爱|小说系列",
  302831: "百合|漫画|轻改|业界|2020|轻小说改|腰斩|小说改|巻本梅実|系列|职场",
  303186: "漫画|赤坂アカ|偶像|横槍メンゴ|转生|悬疑|恋爱|集英社|2020|党争|日本",
  304293: "漫画|恋爱|校园|青春|漫画系列|2020|轻小说|マンガUP！裕夢|小说改|一般向",
  309218: "轻小说|二語十|小说系列|奇幻|MF文庫J|2019|恋爱|系列|うみぼうず|小说|后宫",
  316252: "轻小说|電撃文庫|2020|小说|小说系列",
  319309: "漫画|安田佳澄|科幻|悬疑|連載中|2020|青年漫画|活下去|智斗|マンガ|反乌托邦",
  323196: "漫画|励志|久住太陽|小栗帽|热血|外传|竞技|赛马娘|运动|2020|杉浦理史",
  331225: "轻小说|恋爱|校园|辣妹|公交车|長岡マキ子|黑长直|日本|小说系列|magako|小说",
  336604: "轻小说|凤傲天|小说系列|香坂マト|战斗|异世界|扮猪吃老虎|女性主角|系列|xx|がお",
  341886: "画集|画集・設定資料集",
  342573: "轻小说|后悔系|火葬场文学|恋爱|WEB|校园|御堂ユラギ|2022|后宫|ラブコメ",
  347780: "Galgame|Qruppo|倉骨治人|监狱|2022|PC|搞笑|骨折王子|GAL|等汉化|R18",
  361987: "漫画|エロ|小说改|2021|漫画系列|冒险|奇幻|卖肉|18X|NTR|R18",
  364722: "漫画|后宫|小说改|异世界|轻小说改|奇幻|ユーリ|講談社|系列|连载中|漫画系列",
  368650: "漫画|落语|末永裕樹|馬上鷹将|2022|週刊少年ジャンプ|集英社|大女主|热血|连载中|漫画系列",
  370560: "百合|轻小说|恋爱|校园|羽田宇佐|扭曲|细腻|WEB|2020|小说系列|富士見ファンタジア文庫",
  376352: "百合|漫画|幼驯染|恋爱|搞笑|矢坂しゅう|漫画系列|竹書房|日常|校园|2022",
  379172: "漫画|异世界|轻小说改|转生|三嶋与夢|2021|灘島かい|误解向|コミックガルド|奇幻|异世界转生",
  380653: "搞笑|漫画|魔法少女|魔法大妈|三倉ゆめ|2022|魔法少妇|少年画報社|魔法阿姨|魔法大姐",
  381400: "轻小说|奇幻|战斗|小说系列|黑暗|白金透|2022|渣男|小说",
  382269: "轻小说|重生流|校园|纯爱|恋爱|小说系列|败者转换|爱情|日本|小说|重生",
  390716: "STEAM|同人|东方|游戏|STG|东方Project|PC|2023|气球大战",
  397789: "漫画|百合|偶像|芳文社|2022|漫画系列|FUZコミックス|系列|得能正太郎|连载中|マンガ",
  399753: "小说系列",
  401601: "小说系列|轻小说系列|龙傲天|青梅竹马|战斗|架空|白毛|轻小说|小说|七野りく",
  402768: "漫画系列|gal改|游戏改|漫画|2023|萝莉|治愈|机器人|末世",
  405739: "漫画|校园|恋爱|爱情|漫画系列|みいみつき|一迅社|日常|搞笑|2022",
  409715: "AVG|STEAM|解谜|游戏|欧美|PC|剧情|iOS|侦探|汉化|Android",
  410317: "轻小说|恋爱|青春|水鏡月聖|轻厉|角川スニーカー文庫|小说|sin|小说系列|ぽりごん|2023",
  418615: "轻小说|恋爱|色情|あきらあかつき|2022|角川スニーカー文庫|现代|日本|小说|系列",
  420815: "漫画|日常|7.3|同人合集",
  440060: "轻小说|后宫|恋爱|这不叫朋友|R15|几乎没有正常人系列|桃子|2023|小说|カクヨム|鏡遊",
  453901: "漫画|恋爱|党争|校园|五十嵐正邦|2023|搞笑|講談社|后宫|日常|午夜心旋律",
  462533: "漫画|恋爱|战斗|杀手|黑暗|連載中|2024|大瀬戸陸|暴力|分镜爽|黑道",
  466924: "",
  470276: "falcom|轨迹系列|JRPG|RPG|PS5|法老控|PC|PS4|游戏|2024-09|2024",
  536088: "OST|ED|OP|galgame|2025",
  539883: ""
};
