// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.16.541
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  2265: "轻小说|半分の月がのぼる空|桥本纺|仰望半月之空|秋庭里香|病弱少女|泪腺崩坏|神作|最像小说的轻小说|恋爱|小说",
  3510: "海贼王|尾田荣一郎|JUMP|热血|漫画|少年漫画|集英社|燃|神作|OP|少年JUMP",
  3821: "绿川幸|治愈|漫画|白泉社|夏目友人帳|温暖画风|妖怪志|緑川ゆき|催泪弹|治愈系|怪谈",
  5566: "轻小说|入间人间|骗你的|猎奇|推理|扭曲|入間人間|说谎男坏掉女|崩坏|说谎的男孩与坏掉的女孩|坏掉",
  19002: "新岛夕|Galgame|SAGAPLANETS|暖人心田|毕业作|初雪樱|治愈|纯爱|虐心|水月陵|fripside",
  26659: "轻小说|后宫|幼馴染|中二拯救世界|完结|中二|软妹|天然|热血|百合",
  27684: "藤子・F・不二雄|童年|漫画|哆啦A梦|科幻|小学館|友情|没看完|小学馆|冒险|藤子·F·不二雄",
  30212: "轻小说|翅田大介|CUTTING|文笔绝佳|文青|氛围好|翅田大介伤痕|系列|西周澪|小说",
  35609: "画集|伊东杂音|凉宫春日|いとうのいぢ|2009|凉宫春日的物语|已购|天闻角川|中文已购",
  49043: "桂正和|漫画|短篇|M|福利|2005|コミックス|全一卷|超短篇|恋爱|集英社",
  49365: "画集|伊东杂音|灼眼的夏娜|いとうのいぢ|夏娜|高橋弥七郎|萌|天闻角川|已购|画集灼眼のシャナ",
  57143: "漫画|恋爱|校园|Tiv|后宫|搞笑|政宗君的复仇|竹岡葉月|竹冈叶月|一迅社|月刊ComicREX",
  57160: "画集|灼眼的夏娜|伊东杂音|いとうのいぢ|高橋弥七郎|メディアワークス|画集灼眼のシャナ|已购",
  72863: "画集|伊东杂音|いとうのいぢ|凉宫春日|谷川流|2013|凉宫春日的物语|已购入|已购|随意数列|奇幻",
  73088: "画集|鳥山明|已购|2013|画集・設定資料集",
  122223: "漫画|糟糕|日本|小说改|奇幻|新妹魔王の契約者|后宫|漫画系列|轻改|卖肉|魔幻",
  123700: "画集|いとうのいぢ|灼眼的夏娜|高橋弥七郎|萝莉|伊东杂音|中文已购|已购",
  148236: "零之使魔|漫画|已完结|恋爱|ヤマグチノボル|山口升|短篇|奇幻|望月奈々|设绘|小说改",
  168457: "STEAM|国产|推理|AVG|PC|6~7分|致意|国产单机|2017|Mac|Galgame",
  169932: "夏目イサク|漫画|BLコミック|BL漫画|BL|漫画系列|耽美",
  187087: "漫画|国漫|知音漫客|修仙|中国|国产|奇幻|2007|陈翔|Q版|top100",
  193081: "漫画|博|校园|少女|治愈|百合|2016|集英社|明日酱的水手服|我他妈舔爆！",
  202557: "轻小说|异世界|冬原パトラ|web改|龙傲天|小说系列|萝莉|金发|弱智|ホビージャパン",
  210221: "轻小说|异世界|WEB|くまなの|熊熊勇闯异世界|熊傲天|小説家になろう|系列|小说系列|主婦と生活社|百合",
  212930: "轻小说|支倉凍砂|狼与羊皮纸|文倉十|赫萝|2016|古典|甜|连载中|小说系列|狗粮",
  219288: "漫画|BL|R18|BL漫画",
  221460: "CLOCKUP|Galgame|昏式龍也|钟表社|PC|狂气|硬核浪漫|GAL|阿久津亮|2017|ADV",
  238756: "漫画|小说改|推理|古风|倉田三ノ路|日向夏|小学馆|小学館|漫画系列|少女漫画",
  238887: "漫画|芥見下々|集英社|热血|战斗|少年JUMP|2018|少年漫画|JUMP|週刊少年ジャンプ|芥見下",
  241855: "青年漫画|已完结",
  262151: "漫画|真岛浩|上田敦夫|讲谈社|热血|漫画系列|妖精尾巴|講談社|日漫|未完結|2018",
  265151: "异世界|漫画|轻改|后宫|无双|真綿|小说改|转生|智商低|穿越|浪费设定",
  265515: "漫画|异世界|轻改|冒险|2018|战斗|末世流|ラルサン|小说改|奇幻|校园",
  266652: "PC|推理|中国",
  279871: "百合|漫画|魔法少女|卖肉|搞笑|SM|战斗|恶堕|小野中彰大|2019|反英雄",
  285237: "BLコミック|BL|BL漫画|2019",
  286397: "恋爱|职场|漫画|狗粮|漫画系列|一般向",
  288509: "轻小说|恋爱|恵ノ島すず|已完结|KADOKAWA|小説家になろう|奇幻|WEB|全2卷|小说系列|2018",
  288543: "异世界|轻小说|龙傲天|后宫|奇幻|日常|校园|小说系列|战斗|恋爱|已漫改",
  295217: "轻小说|河野裕|智斗|架見崎系列|科幻|幻想|小说|系列|神作|越島はぐ|小说系列",
  296863: "漫画|奇幻|少女漫画|少女漫|妖怪|女性主人公|少女|恋爱|一迅社|战斗|漫画系列",
  303246: "小说改|恋爱|少女|少女漫|轻小说改|漫画系列",
  303347: "小说系列|成长|夜宵草|ReLIFE",
  307607: "漫画|异世界|左藤真通|网游|搞笑|奇幻|游戏|战斗|2020|bug|連載中",
  311289: "漫画|网游|轻小说改|战斗|冒险|週刊少年マガジン|2020|不二涼介|热血|奇幻|爽片",
  311313: "BL|BLコミック|漫画|2020|角川書店|角川|BL漫画|ドラマ|小林裕介|小林千晃",
  311833: "百合|漫画|异世界|轻改|轻小说改|2020|奇幻|南高春告|KADOKAWA|小说改|漫画系列",
  312161: "轻小说|小说系列|小说",
  312483: "漫画|历史|漫画系列",
  313020: "漫画|奇幻|魔女|渡辺静|喜剧|中世纪|魔术|搞笑|穿越|已完结|漫画系列",
  313079: "轻小说|异世界|穿越|系列|小说系列|转生|校园|恋爱",
  313379: "百合|漫画|コミック百合姫|舞蹈|2020|漫画系列|うたたね游|校园|一迅社|Manga|细腻",
  325234: "漫画|松井優征|历史|周刊少年JUMP|可爱的男孩子|2021|搞笑|集英社|週刊少年ジャンプ|日漫|連載中",
  330890: "漫画|漫画系列",
  332202: "Galgame|CLOCKUP|2021|昏式龍也|拔作|2021-08|PC|のりざね|马可|ADV|STEAM",
  348635: "BL|2021|BLコミック|恋爱|奇幻|漫画|角川書店|梢子|KADOKAWA",
  349268: "漫画|真冬日|2021|异世界|连载化|恶役千金|恶役|B漫|漫画系列|やましろ梅太",
  349842: "漫画系列|小说改|漫画|奇幻|异世界|2021.",
  354986: "漫画|藤本タツキ|短篇集|藤本树|奇幻|2021|短篇|集英社|日漫|青年|搞笑",
  355057: "小说改|奇幻|講談社|少女漫画|系列|漫画|少女漫|星彼方|2021|连载中|漫画系列",
  370633: "轻小说|后宫|奇幻|小说|异世界|连载中|R18|电子书|原创|小说系列|系列",
  376464: "漫画|后宫|官能|恋爱|战斗|漫画系列|工口|小说改|R18|一般向|奇幻",
  379983: "BL|BLコミック|腐|漫画|鮭田ねね",
  380844: "",
  381968: "BL|BL漫画",
  384494: "漫画|恋爱|搞笑|2022|雌小鬼|漫画系列|校园|講談社|週刊少年マガジン|nonco|少年漫画",
  384500: "系列|漫画系列|神鬼|地主|奇幻|日常|土|除灵",
  385417: "",
  392095: "漫画|恋爱|校园|小说改|纯爱|漫画系列|2022|轻小说改|轻改|网络连载|講談社",
  392673: "",
  392686: "",
  402045: "全年龄|STEAM|百合|Galgame|PC|游戏|2022|池田大輝",
  405395: "川原砾|轻小说|小说系列|日常|日本|堀口悠紀子|2022",
  406468: "漫画|搞笑|恋爱|2022|战斗|集英社|千葉侑生|连载中|漫画系列|少女漫画",
  419220: "轻小说|三河ごーすと|2022|地雷男|小说系列",
  422014: "轻小说|恋爱|榛名丼|奇幻|校园|2023|迷惘|人心|复制人",
  429824: "同人|Galgame|STEAM|AVG|视觉小说|PC|奇幻|ADV|冰岛|短篇|游戏",
  436748: "轻小说|2023|岡田麿里|小说|51-100",
  439530: "百合|轻小说|恋爱|犬甘あんず|校园|日常|幼驯染|2022|WEB|ぽめぞーん|系列",
  462533: "漫画|恋爱|战斗|杀手|2024|連載中|黑暗|漫画系列|8分|黑道|可爱",
  466653: "",
  469394: "PC|PS5|XSX|CC2|白金|ACT|游戏|龙珠|STEAM|童年|经典",
  486165: "Galgame|kazuki|2024|全年龄|亲情|游戏|PC|穿越|视觉小说",
  487470: "",
  499920: "RPG|PC|游戏|NS|PS5|PS4",
  515385: "小说|系列"
};
