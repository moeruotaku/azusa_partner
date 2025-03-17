// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.03.17.36
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
  24207: "漫画|肉|后宫|佐藤ショウジ|战斗|恋爱|校园|卖肉|福利|漫画系列|系列",
  39035: "轻小说|山形石雄|推理|奇幻|悬疑|六花的勇者|冒险|集英社|小说系列|テルイ",
  40569: "轻小说|搞笑|恋爱|春日部タケル|后宫|校园|青春|小说系列|已完结|系列",
  49111: "轻小说|野村美月|伪娘|男女通吃|搞笑|野村老师果然是腐女！|karory|野村老师的节操|恋爱|圣罗|后宫",
  55911: "漫画|村田雄介|搞笑|燃|战斗|One|热血|一击男|集英社|一拳超人|少年JUMP",
  66368: "漫画|恋爱|集英社|アミュー|少年漫画|古筝|音乐|热血|竞技|桜アミュー|ジャンプスクエア",
  121486: "漫画|木城雪户|战斗|科幻|赛博朋克|木城ゆきと|2014|太空歌剧|SF|日本|冒险",
  193910: "漫画|少女漫画|少女|村田真優|校园|漫画系列|恋爱|狗粮|りぼん|青春校园，胃疼|少女漫",
  212930: "轻小说|支倉凍砂|狼与羊皮纸|文倉十|赫萝|2016|古典|甜|连载中|小说系列|狗粮",
  222495: "漫画系列",
  237342: "百合|漫画|猎奇|奇幻|小说改|怪谈|异世界|冒险|2018|悬疑|月刊少年ガンガン",
  241026: "轻小说|后宫|复仇|月夜涙|小说系列|垃圾|调教|角川スニーカー文庫|厕纸|web小说|异世界",
  241623: "音游|国产|手游|独立游戏|PC|PeroPeroGames|STEAM|MUG|2018|Android|心动网络",
  259667: "漫画|悬疑|ソウマトウ|萝莉|集英社|剧情|治愈|黑暗|百合|2018|猎奇",
  277772: "轻小说|古宮九時|小说系列|已完结|全4卷",
  287134: "漫画|日常|百合|搞笑|奇幻|ピロヤ|魔女|COMICメテオ|日本|青年漫画|异世界",
  298467: "百合|漫画|师生|双子|百合姫コミックス|恋爱|扭曲|姐妹|桜野いつき|完结|2020",
  300431: "漫画|峰浪りょう|恋爱|青春|阴间|病娇|胃药|2020|青年漫|集英社|扭曲",
  302831: "百合|漫画|轻改|业界|2020|轻小说改|腰斩|小说改|巻本梅実|系列|职场",
  303186: "漫画|赤坂アカ|偶像|横槍メンゴ|转生|悬疑|恋爱|集英社|2020|党争|日本",
  304487: "中国|漫画|唐家三少|美食|国漫|中国漫画|国产|奇幻|2015|原作是黄文|网文改",
  306253: "漫画|异世界|2019|漫画系列|新潮社|とうろう|原创|魔王|マンガ|意义|くらげバンチ",
  306906: "百合|漫画|コミック百合姫|校园|恋爱|一迅社|ゆあま|刀子|2020|漫画系列|日常",
  311181: "Type-Moon|画集系列|设定集&画集|Fate|设定集|根目录|画集|fgo",
  312861: "漫画|恋爱|日常|治愈|漫画系列|倒贴|日本|原创|系列|奇幻|连载中",
  323040: "漫画|タヤマ碧|偶像|KPOP|2020|韩团|日本文化趋势观察|日本|新潮社|系列|原创",
  327737: "漫画|后宫|杀必死|卖肉|R15|2021|R18|摆烂|倒贴|三色網戸。|同居",
  330888: "易次元|WEB|2019",
  332037: "漫画|恋爱|青春|运动|校园|三浦糀|週刊少年ジャンプ|2021|集英社|JUMP|日本",
  332794: "漫画|搞笑|特摄|奇幻|水崎弘明|原作补完|性转|COMICメテオ|人外|2020|校园",
  334753: "Galgame|韩国|全年龄|短篇|STEAM|电影视觉小说|MidnightWorks|时空跳跃|PC|2021|科幻",
  355555: "恋爱|漫画|校园|講談社|青春|三香見サカ|2021|漫画系列|日本|系列|画风好",
  368650: "漫画|落语|末永裕樹|馬上鷹将|2022|週刊少年ジャンプ|集英社|大女主|热血|连载中|漫画系列",
  372015: "百合|Galgame|全年龄|幼驯染|2023|PC|GAL|ADV|仰木サヤ|フカヒレ|1000-REKA",
  379172: "漫画|异世界|轻小说改|转生|三嶋与夢|2021|灘島かい|误解向|コミックガルド|奇幻|异世界转生",
  390716: "STEAM|同人|东方|游戏|STG|东方Project|PC|2023|气球大战",
  397088: "小说|浅倉秋成|推理|悬疑",
  401823: "STG|PC|上海アリス幻樂団|同人|打飞机|游戏|2024|金发教会",
  405739: "漫画|校园|恋爱|爱情|漫画系列|みいみつき|一迅社|日常|搞笑|2022",
  414171: "漫画|异世界|母系|后宫|奇幻|R18|久遠まこと|搞笑|整活|石のやっさん|日本",
  416714: "Cygames|FTG|PC|格斗|2023|PS5|碧蓝幻想|STEAM|PS4|多人",
  437534: "Galgame|国产|全年龄|萝莉|致郁|AVG|2023|STEAM|Android|GAL|压抑",
  442535: "推理|长江俊和|小说|叙诡|悬疑",
  445870: "误解系|轻小说|搞笑|异世界|日本|小说|后宫|系列",
  453951: "Galgame|ADV|2025|游戏|NS|PC|神椿",
  457931: "轻小说",
  464648: "动态CG|Galgame|PC|STEAM|2024|AVG|国产|SLG|纯爱|芒果派对|游戏",
  469394: "PC|PS5|ACT|XSX|游戏|白金|STEAM|龙珠|CC2|童年|格斗",
  486611: "公式书",
  504143: "国产|百合|Galgame|全年龄|PC|游戏|2024|VN",
  515749: "轻小说|小说|日本|系列|ネコクロ",
  519774: "",
  534639: "Galgame|PC|游戏|Windows|AVG|国产|全年龄|视觉小说|VN|百合",
  537756: "Galgame|PC|国产|巫女|无语音"
};
