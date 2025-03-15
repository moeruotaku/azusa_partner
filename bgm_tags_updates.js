// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.03.15.62
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  4823: "轻小说|后宫|健速|三坪房间的侵略者|搞笑|三坪房间的侵略者！？|治愈|都合大先生|宇宙人|地底人|幽灵",
  22697: "轻小说|乃木坂春香的秘密|软妹的原型|欢乐|天然|五十岚雄策|已完结|后宫|小说系列|软妹",
  24207: "漫画|肉|后宫|佐藤ショウジ|战斗|恋爱|校园|卖肉|福利|漫画系列|系列",
  34179: "秋山瑞人|轻小说|奇幻|战斗|2008",
  39035: "轻小说|山形石雄|推理|奇幻|悬疑|六花的勇者|冒险|集英社|小说系列|テルイ",
  40569: "轻小说|搞笑|恋爱|春日部タケル|后宫|校园|青春|小说系列|已完结|系列",
  49111: "轻小说|野村美月|伪娘|男女通吃|搞笑|野村老师果然是腐女！|karory|野村老师的节操|恋爱|圣罗|后宫",
  55911: "漫画|村田雄介|搞笑|燃|战斗|One|热血|一击男|集英社|一拳超人|少年JUMP",
  103031: "轻小说|野村美月|吸血鬼|竹岡美穂|系列|腰斩|ファミ通文庫|青春|已完结",
  116464: "轻小说|緋月薙|三嶋くろね|HJ文庫|恋爱|系列|2013|小说|萝莉|已完结|套",
  129028: "漫画|妹控|埃罗芒阿老师|伏見つかさ|萝莉|妹妹|兄妹|兄控|萌系|2014|萌",
  235036: "轻小说|小说系列|已完结|博|小说|青春|全8卷|百合|轻百|2017",
  237342: "百合|漫画|猎奇|奇幻|小说改|怪谈|异世界|冒险|2018|悬疑|月刊少年ガンガン",
  238996: "漫画|搞笑|日常|黑道|おおのこうすけ|美食|欢乐|新潮社|2018|極主夫道|日本",
  241026: "轻小说|后宫|复仇|月夜涙|小说系列|垃圾|调教|角川スニーカー文庫|厕纸|web小说|异世界",
  241623: "音游|国产|手游|独立游戏|PC|PeroPeroGames|STEAM|MUG|2018|Android|心动网络",
  271702: "漫画|少女漫画|小说改|高坂りと|顎木あくみ|少女漫|恋爱漫画|2018|日本漫画",
  272351: "格斗|漫画|战斗|2019|だろめおん|打斗|格斗漫画|漫画系列|小学館|老年痴呆|搞笑",
  277772: "轻小说|古宮九時|小说系列|已完结|全4卷",
  287134: "漫画|日常|百合|搞笑|奇幻|ピロヤ|魔女|COMICメテオ|日本|青年漫画|异世界",
  292572: "漫画|眉月じゅん|恋爱|科幻|集英社|2019|週刊ヤングジャンプ|青年漫|少女漫画|連載中|九龙大众浪漫",
  298467: "百合|漫画|师生|双子|百合姫コミックス|恋爱|扭曲|姐妹|桜野いつき|完结|2020",
  300270: "百合|轻小说|みかみてれん|竹嶋えく|欢乐|后宫|屑粉毛|搞笑|2020|恋爱|小说系列",
  302831: "百合|漫画|轻改|业界|2020|轻小说改|腰斩|小说改|巻本梅実|系列|职场",
  303186: "漫画|赤坂アカ|偶像|横槍メンゴ|转生|悬疑|恋爱|集英社|2020|党争|日本",
  306906: "百合|漫画|コミック百合姫|校园|恋爱|一迅社|ゆあま|刀子|2020|漫画系列|日常",
  309218: "轻小说|二語十|小说系列|奇幻|MF文庫J|2019|恋爱|系列|うみぼうず|小说|后宫",
  312861: "漫画|恋爱|日常|治愈|漫画系列|倒贴|日本|原创|系列|奇幻|连载中",
  316252: "轻小说|電撃文庫|2020|小说|小说系列",
  319309: "漫画|安田佳澄|科幻|悬疑|連載中|2020|青年漫画|活下去|智斗|マンガ|反乌托邦",
  323040: "漫画|タヤマ碧|偶像|KPOP|2020|韩团|日本文化趋势观察|日本|新潮社|系列|原创",
  323196: "漫画|励志|久住太陽|小栗帽|热血|外传|竞技|赛马娘|运动|2020|杉浦理史",
  327737: "漫画|后宫|杀必死|卖肉|R15|2021|R18|摆烂|倒贴|三色網戸。|同居",
  331225: "轻小说|恋爱|校园|辣妹|公交车|長岡マキ子|黑长直|日本|小说系列|magako|小说",
  332794: "漫画|搞笑|特摄|奇幻|水崎弘明|原作补完|性转|COMICメテオ|人外|2020|校园",
  336604: "轻小说|凤傲天|小说系列|香坂マト|战斗|异世界|扮猪吃老虎|女性主角|系列|xx|がお",
  342573: "轻小说|后悔系|火葬场文学|恋爱|WEB|校园|御堂ユラギ|2022|后宫|ラブコメ",
  355555: "恋爱|漫画|校园|講談社|青春|三香見サカ|2021|漫画系列|日本|系列|画风好",
  361987: "漫画|エロ|小说改|2021|漫画系列|冒险|奇幻|卖肉|18X|NTR|R18",
  364722: "漫画|后宫|小说改|异世界|轻小说改|奇幻|ユーリ|講談社|系列|连载中|漫画系列",
  368650: "漫画|落语|末永裕樹|馬上鷹将|2022|週刊少年ジャンプ|集英社|大女主|热血|连载中|漫画系列",
  370560: "百合|轻小说|恋爱|校园|羽田宇佐|扭曲|细腻|WEB|2020|小说系列|富士見ファンタジア文庫",
  372015: "百合|Galgame|全年龄|幼驯染|2023|PC|GAL|ADV|仰木サヤ|フカヒレ|1000-REKA",
  379172: "漫画|异世界|轻小说改|转生|三嶋与夢|2021|灘島かい|误解向|コミックガルド|奇幻|异世界转生",
  382269: "轻小说|重生流|校园|纯爱|恋爱|小说系列|败者转换|爱情|日本|小说|重生",
  390716: "STEAM|同人|东方|游戏|STG|东方Project|PC|2023|气球大战",
  397088: "小说|浅倉秋成|推理|悬疑",
  401601: "小说系列|轻小说系列|龙傲天|青梅竹马|战斗|架空|白毛|轻小说|小说|七野りく",
  401823: "STG|PC|上海アリス幻樂団|同人|打飞机|游戏|2024|金发教会",
  405739: "漫画|校园|恋爱|爱情|漫画系列|みいみつき|一迅社|日常|搞笑|2022",
  410317: "轻小说|恋爱|青春|水鏡月聖|轻厉|角川スニーカー文庫|小说|sin|小说系列|ぽりごん|2023",
  414171: "漫画|异世界|母系|后宫|奇幻|R18|久遠まこと|搞笑|整活|石のやっさん|日本",
  416714: "Cygames|FTG|PC|格斗|2023|PS5|碧蓝幻想|STEAM|PS4|多人",
  418615: "轻小说|恋爱|色情|あきらあかつき|2022|角川スニーカー文庫|现代|日本|小说|系列",
  420815: "漫画|日常|7.3|同人合集",
  437534: "Galgame|国产|全年龄|萝莉|致郁|AVG|2023|STEAM|Android|GAL|压抑",
  440060: "轻小说|后宫|恋爱|这不叫朋友|R15|几乎没有正常人系列|桃子|2023|小说|カクヨム|鏡遊",
  442535: "推理|长江俊和|小说|叙诡|悬疑",
  453951: "Galgame|ADV|2025|游戏|NS|PC|神椿",
  457931: "轻小说",
  466924: "",
  469394: "PC|PS5|ACT|XSX|游戏|白金|STEAM|龙珠|CC2|童年|格斗",
  486611: "公式书",
  515749: "轻小说|小说|日本|系列|ネコクロ",
  519774: "",
  539883: ""
};
