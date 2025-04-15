// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.04.15.58
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  1651: "甲斐谷忍|漫画|心理|推理|智斗|欺诈游戏|集英社|2005|欺诈|必胜法|悬疑",
  5168: "画集|高达|双葉社",
  5397: "轻小说|川原砾|SAO|刀剑神域|网游|电击文库|亚丝娜|桐人|電撃文庫|起点文|神展开",
  5412: "伪娘|魔法少女|脑洞|糟糕|漫画|塩野干支郎次|少年画报社|恋爱|校园|2003|搞笑",
  11735: "galgame|詩月カオリ|KOTOKO|神曲|VOCAL|2003|Ive|井内舞子|C.G_mix|高瀬一矢|EDM",
  16867: "VOCAL|galgame|C.G_mix|高瀬一矢|GameMusic|2007|O.S.T.|Ive|井内舞子|居中|EDM",
  17752: "浅田弘幸|漫画|奇幻|治愈|信蜂|少年漫画|正太|JumpSQ|集英社|王道|战斗",
  21098: "key|OST|麻枝准|水月陵|Rewrite|折户伸治|井内舞子|galgame|细井聪司|多田葵|治愈",
  39677: "少女漫画|漫画|月刊プリンセス|少女|秋田書店|总|あしべゆうほ|池田悦子",
  43563: "漫画|头文字D|运动|竞技|1995|しげの秀一|AE86|90年代|热血沸腾|已完结",
  45021: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|悬疑|集英社|战斗|热血|荒木飞吕彦|2011|四个蛋",
  48678: "军事|科幻|潜艇|战争|漫画|海上自卫队|モーニング|系列|自卫|漫画系列|沈黙の艦隊",
  60976: "漫画|后宫|校园|已完结|池田晃久|吸血鬼|画风飞跃|恋爱|全十卷|肉番",
  61104: "漫画|后宫|池田晃久|恋爱|搞笑|卖肉|画风飞跃|校园|喂屎|已完结|少年漫画",
  64063: "高达|画集|双葉社",
  64064: "画集|高达|双葉社",
  75116: "漫画|内藤泰弘|集英社|战斗|王道|已完结|漫画系列|血界战线|2009|ジャンプSQ.|热血",
  87015: "松田奈緒子|小学館|漫画|月刊!スピリッツ|职场|日常|2012|连载中|治愈|系列|青年",
  95712: "漫画系列|漫画|已完结|¬|全28卷",
  129311: "漫画|战斗|集英社|科幻|赛博格|义体|カラスマタスク|2014|2013|漫画系列|2013年",
  130226: "漫画系列|已完结|¬",
  134064: "漫画|搞笑|校园|Gファンタジー|田中まい|连载中|漫画系列|日常|★マンガ|重复|少年",
  139050: "漫画|内藤泰弘|集英社|2015|战斗|少年漫画|奇幻|漫画系列|血界战线|系列|单元剧",
  184894: "漫画|异世界|生存|奈央晃徳|山川直輝|奇幻|2016|穿越|讲谈社|战斗|生存游戏",
  185099: "漫画|已完结|日本|不良|暴走族|小沢としお",
  185101: "漫画|校园|不良|暴走族|小沢としお",
  185450: "OP|千の刃濤、桃花染の皇姫|中恵光城|galgame|2016|片头曲|August|音乐专辑|OPED|GameMusic",
  194786: "漫画|已完结|一般向|日常|てりてりお",
  203938: "茶太|Lia|真理絵|霜月はるか|片霧烈火|M14|ゲーム|榊原ゆい",
  212710: "",
  225705: "漫画|小说改|异世界|转生|少女|藤小豆|2018|魔法|日本漫画|轻改|漫画系列",
  240279: "漫画|异世界|龙傲天|小说改|穿越|战斗|轻改|漫画系列|2018|轻小说改|天羽銀",
  249058: "漫画|井上敏樹|横島一|特摄|青年漫画|2014|假面骑士|石ノ森章太郎|日本漫画|奇幻|空我",
  252255: "百合|漫画|姐妹|日常|妹控姐姐与天然妹妹|桐灰きねそ|搞笑|动漫之家|有英化版|漫画系列",
  257721: "漫画",
  268279: "藤本タツキ|漫画|战斗|邪道|热血|周刊少年JUMP|集英社|自由人|少年JUMP|2018|藤本树",
  272490: "恋爱|少女|漫画系列|慎本真|2019",
  272951: "异世界|漫画|转生|小说改|战斗|轻改|皇ハマオ|开挂无敌|轻小说改|漫画系列|后宫",
  279136: "漫画|异世界|小说改|轻改|恋爱|龙傲天|轻小说改|漫画系列|B漫|总|治愈",
  281927: "轻小说|误解系|槻影|迪化|日本轻小说|2018|小说系列|小説家になろう|误解向|异世界|系列",
  291900: "少女漫画|恋爱|リカチ|漫画|魔法|日本漫画|2019|漫画系列|战斗|冒险|BE・LOVE",
  292589: "漫画|推理|系列|小说改|2019|京極夏彦|漫画系列|志水アキ|悬疑",
  295004: "国产|AVG|粤语|红茶Games|全年龄|Galgame|女性视角|STEAM|PC|2021|警匪",
  296610: "轻小说|恋爱|小说系列|日本|ガガガ文庫|猿渡かざみ|1～4分",
  298217: "漫画|恋爱|小说改|漫画系列|校园|倒贴|三河ごーすと|一般向|恋爱喜剧|日本漫画|日常",
  298276: "轻小说|恶役千金|女性主角|恶役|异世界|恶役令媛|2019|转生|七夕さとり|小说系列|奇幻",
  298651: "卡牌|Roguelike|PC|STEAM|独立游戏|RPG|二次元|DBG|韩国|rogue|卡牌rougelike",
  302980: "漫画|性转|异世界|小说改|轻小说改|微エロ|2020|あし|内々けやき|講談社|弱智",
  307237: "漫画|体育|运动|热血|滑冰|竞技|励志|つるまいかだ|日本|2020|原创",
  307800: "漫画|恋爱|2020|少女漫画|集英社|少女漫|マーガレット|日本|漫画系列|少女|日下あき",
  308400: "漫画|漫画系列|已完结|全5卷|版本",
  309007: "恋爱|漫画|奇幻|异世界|漫画系列|小说改",
  311737: "漫画|卖肉|搞笑|人不如狗|讲谈社|动物|微エロ|漫画系列|いつつせ|2020|后宫",
  311891: "漫画|恋爱|短篇|校园|青春|JUMP|三浦糀|2020|週刊少年ジャンプ|动作|社团",
  312164: "轻小说|穿越|动物|小说系列|猪和美少女恋爱|奇幻|推理|系列|优先|异世界|恋爱",
  312642: "漫画|正太|转生|异世界|龙傲天|轻改|后宫|战斗|漫画系列|未完结漫画|2020",
  316122: "漫画|推理|天野明|悬疑|侦探|2020|集英社|悬疑漫画|推理漫画|日本漫画|少年漫",
  319309: "漫画|安田佳澄|科幻|悬疑|連載中|2020|青年漫画|智斗|活下去|マンガ|反乌托邦",
  329860: "轻小说|恋爱|校园|青春|電撃文庫|2021年|小说|七菜なな|小说系列|首饰花艺|党争",
  332250: "漫画|龍幸伸|战斗|怪谈|奇幻|集英社|JUMP+|搞笑|少年ジャンプ＋|2021|龙幸伸",
  335119: "ADV|韩国",
  337013: "轻小说|恋爱|桜木桜|桃文|KADOKAWA|纯爱|小说|狗粮|clear|小说系列|日本",
  340296: "漫画|轻小说改|异世界|漫画系列|小说改|2021|凤傲天|恋爱|日本|轻改|未完结",
  347031: "荒木飛呂彦|漫画|jojo|2023|ジョジョの奇妙な冒険|战斗|集英社|热血|漫画系列|青年|系列",
  348205: "轻小说|校园|歌改|恋爱|青春|三月みどり|小说|说不出来的遗憾|轻书架|wenku8|哩哔",
  348476: "漫画|冬虫カイコ|轻恐怖|短篇|2021|奇幻|漫画系列|心理|现实|系列",
  363158: "漫画|奇幻|纯爱|异世界|精灵|猎奇|治愈|2021|重口|漫画系列|残疾",
  370029: "漫画|治愈|日常|やませちか|鉴定|宝石|漫画系列|日本|原创|系列|连载中",
  375316: "漫画|恋爱|幼驯染|搞笑|校园|2022|后宫|日常|党争|講談社|三簾真也",
  376424: "漫画|奇幻|漫画系列|搞笑|悬疑|恋爱|猎奇|黑暗|复仇|炮弹|异世界",
  377475: "异世界|小说改|漫画系列",
  393594: "轻小说|Hiten|小说系列|岬鷺宮|系列",
  402768: "漫画系列|gal改|游戏改|漫画|2023|萝莉|治愈|机器人|末世",
  414664: "漫画|卖肉|守月史貴|講談社|成年コミック|ヤンマガWeb|2023",
  449330: "漫画|轻百合|2024|搞笑|音乐|动画改|动漫改|講談社|マガジンポケット",
  456969: "秋之回忆|Galgame|GAL|林直孝|PC|阿保剛|2024|PS5|PS4|ささきむつみ|ADV",
  484353: "轻小说|小说系列|小说|2023|有象利路|连载中|狗粮|系列|奇幻",
  487413: "HOOKSOFT|Galgame|幼驯染|废萌|K子|纯爱|2024|渡辺僚一|PC|青梅|拔作",
  490908: "轻小说|螃蟹光线",
  496300: "PC|STEAM|ADV|RPG|游戏|德州扑克|赌博|读博|扑克|解密",
  505214: "御影|Galgame|Purplesoftware|机器人|科幻|PC|秋野花|ADV|剧情作|2024",
  520341: "OP|BanGDream!|Ave_Mujica|动画|2025|日本|单曲|CD|ED|颂乐人偶|AveMujica",
  521669: "2022|CD|中国|pop"
};
