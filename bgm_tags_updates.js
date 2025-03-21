// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.03.22.93
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
  21418: "漫画|战舰|人工智能|ArkPerformance|苍蓝钢铁的琶音|萝莉|画工赞|热血|动画化|诉述故事能力赞|科幻",
  22604: "轻小说|妹妹|佛学男主|兄控|妹控|日向今日子|妹|夏緑|已完结|复数卷|全9卷",
  66368: "漫画|恋爱|集英社|アミュー|少年漫画|古筝|音乐|热血|竞技|桜アミュー|ジャンプスクエア",
  69649: "漫画|春河35|朝霧カフカ|文豪Stray-dogs|格斗|热血|文豪超能力|2012|战斗|少年漫|文豪野犬",
  77322: "漫画|苇原大介|周刊少年JUMP|战斗|热血|集英社|少年JUMP|智斗|2013|少年漫画|集团战",
  119650: "漫画|治愈|奇幻|樫木祐人|日常|百合|温暖|2012|哈库梅伊与蜜珂析|搞笑|轻百",
  121486: "漫画|木城雪户|战斗|科幻|赛博朋克|2014|木城ゆきと|SF|太空歌剧|8分|20年代",
  145348: "国漫|漫画|热血|颜开|科幻|战斗|2010|知音漫客|古风|王道|奇幻",
  148724: "轻小说|奉|后宫|ミユキルリア|战争|オーバーラップ文庫|已完结|完结|2015|异世界|真后宫",
  167732: "漫画|异世界|小说改|转生|馬場翁|穿越|かかし朝浩|爽文|轻小说改|练级|奇幻",
  193910: "漫画|少女漫画|少女|村田真優|校园|漫画系列|恋爱|狗粮|りぼん|青春校园，胃疼|少女漫",
  212930: "轻小说|支倉凍砂|狼与羊皮纸|文倉十|赫萝|2016|古典|甜|连载中|小说系列|狗粮",
  218425: "漫画|日常|百合|异世界|轻改|小说改|奇幻|2017|搞笑|シバユウスケ",
  218561: "漫画|轻改|异世界|冒险|小说改|2017|KADOKAWA|魔法|轻小说改|连载中|漫画系列",
  222495: "漫画系列",
  223238: "漫画|搞笑|日常|欢乐向|奇幻|昆布わかめ|漫画系列|黑皮|萌|魔法|百合",
  236926: "漫画|恋爱|畑健二郎|狗粮|日常|2018|总之就是非常羡慕|周刊少年sunday|爱情|恋爱漫画|总之就是非常酸",
  238595: "漫画|恋爱|チョモラン|人外|猎奇|2018|鲲|奇幻|开大车|少年漫画|系列",
  239336: "漫画|恋爱|校园|金丸祐基|胃药|2018|KADOKAWA|爱情|狗血|YOUNGACE|NTR",
  241623: "音游|国产|手游|独立游戏|PC|PeroPeroGames|STEAM|MUG|2018|Android|心动网络",
  259667: "漫画|悬疑|ソウマトウ|萝莉|集英社|剧情|治愈|黑暗|百合|2018|猎奇",
  272351: "格斗|漫画|战斗|2019|だろめおん|打斗|格斗漫画|漫画系列|小学館|老年痴呆|搞笑",
  295492: "漫画|漫画系列|转生|小说改编|搞笑|奇幻|战斗|异世界|小说改",
  300431: "漫画|峰浪りょう|恋爱|青春|阴间|病娇|胃药|2020|青年漫|集英社|扭曲",
  304487: "中国|漫画|唐家三少|美食|国漫|中国漫画|国产|奇幻|2015|原作是黄文|网文改",
  305429: "漫画|寿命论|旅行|奇幻|治愈|山田鐘人|2020|小学館|勇者|周刊少年sunday|异世界",
  306253: "漫画|异世界|2019|漫画系列|新潮社|とうろう|原创|魔王|マンガ|意义|くらげバンチ",
  308489: "国漫|三番熊|腾讯系|漫画|中國|国产|中国|条漫",
  311181: "Type-Moon|画集系列|设定集&画集|Fate|设定集|根目录|画集|fgo",
  330071: "国漫|武侠|条漫|网文改|小说改|未完结漫画|国产|漫画|系列|普通|妖刀记",
  330888: "易次元|WEB|2019",
  332037: "漫画|恋爱|青春|运动|校园|三浦糀|週刊少年ジャンプ|2021|集英社|JUMP|日本",
  333247: "漫画|中国|异世界|恋爱|国漫|国产|中国漫画|神漫|网络小说|网文改|玄幻",
  334753: "Galgame|韩国|全年龄|短篇|STEAM|电影视觉小说|MidnightWorks|时空跳跃|PC|2021|科幻",
  335516: "漫画|恋爱|奇幻|漫画系列|吸血鬼|2021|KADOKAWA|fmt.Manga",
  336828: "漫画|武田綾乃|むっしゅ|百合|校园|2021|青春|集英社|日本|原创|系列",
  339644: "百合|漫画|欢乐|漫画系列|治愈|恋爱|日常|2021|パデラポッロのりお",
  360810: "中国|国漫|小说改|漫画|科幻|日常|书籍|国产|三体|系列",
  367415: "漫画|2021|漫画系列|奇幻|系列|治愈|東立|连载中|幻想|日本|原创",
  372015: "百合|Galgame|全年龄|幼驯染|2023|PC|GAL|ADV|仰木サヤ|フカヒレ|1000-REKA",
  375683: "漫画系列",
  405577: "恋爱|漫画|年龄差|芳文社|偶像|2022|じゃが|萝莉|治愈|漫画系列|系列",
  409007: "百合|漫画|机器人|日常|小妈文学|梶川岳|完结|雷毒|複数巻|校园|マンガ",
  415650: "全年龄|国产|AVG|STEAM|PC|奇幻|Galgame|Android|超能力|反转|Unity",
  429771: "国漫|中国|网文改|穿越|玄幻|修真|系统",
  445870: "轻小说|误解系|搞笑|异世界|后宫|日本|小说|系列|急川回レ",
  447051: "中国|逆袭|重生|网文改|系统",
  448518: "",
  452834: "国漫|中国|原创",
  457931: "轻小说",
  461443: "",
  464648: "动态CG|Galgame|PC|国产|AVG|2024|STEAM|游戏|纯爱|芒果派对|金发教会",
  469394: "PC|PS5|ACT|XSX|游戏|白金|STEAM|龙珠|CC2|童年|格斗",
  477849: "漫画|战斗|漫画系列",
  504143: "国产|百合|Galgame|全年龄|PC|游戏|2024|VN",
  509069: "国漫|热血|漫画|战斗|武侠|魔幻",
  509948: "JRPG|PC|炼金工房|2025|RPG|PS5|光荣特库摩|Gust|Switch|游戏|XSX",
  515749: "轻小说|小说|日本|系列|ネコクロ",
  519774: "STEAM",
  534639: "Galgame|PC|游戏|Windows|AVG|国产|全年龄|视觉小说|VN|百合",
  537756: "Galgame|PC|国产|巫女|无语音",
  542816: "",
  544637: "Galgame|PC|全年龄|血腥|ADV|校园|VN|猎奇|欢乐|后宫|短篇"
};
