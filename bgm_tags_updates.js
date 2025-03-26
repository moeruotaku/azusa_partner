// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.03.26.63
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  870: "轻小说|支仓冻砂|萌狼|狼と香辛料|赫萝|经济|治愈系|古典|小说|文仓十|治愈",
  10157: "NDS|RPG|NDS最强3D？|汉化|单机|游戏",
  21418: "漫画|战舰|人工智能|ArkPerformance|苍蓝钢铁的琶音|萝莉|画工赞|热血|动画化|科幻|诉述故事能力赞",
  22604: "轻小说|妹妹|佛学男主|兄控|妹控|日向今日子|妹|夏緑|已完结|复数卷|全9卷",
  45524: "种村有菜|少女漫画|漫画|少女|種村有菜|2004|校园|少女漫|灰姑娘物语|少女マンガ|年代久远无印象派",
  69649: "漫画|春河35|朝霧カフカ|文豪Stray-dogs|格斗|热血|文豪超能力|2012|战斗|少年漫|文豪野犬",
  77322: "漫画|苇原大介|战斗|周刊少年JUMP|热血|集英社|少年JUMP|智斗|2013|少年漫画|集团战",
  105978: "OP|东京喰种|2014|TK|凛として时雨|凛として時雨|东京食尸鬼|动画|燃|アニソン|anime",
  119393: "漫画|冒险|致郁|来自深渊|奇幻|つくしあきひと|猎奇|竹書房|幼女|連載中|硬奇幻",
  119650: "漫画|治愈|奇幻|樫木祐人|日常|百合|温暖|2012|哈库梅伊与蜜珂析|搞笑|轻百",
  148724: "轻小说|奉|后宫|ミユキルリア|战争|オーバーラップ文庫|已完结|完结|2015|异世界|真后宫",
  152901: "漫画|已完结|川本貴裕|A书|成人漫画|素人AV女優|工口|全8卷|卖肉|青年漫画|白泉社",
  167732: "漫画|异世界|小说改|转生|馬場翁|穿越|かかし朝浩|爽文|轻小说改|练级|奇幻",
  191414: "",
  210317: "漫画|后宫|恋爱|腰斩|骨科|已完结|2016|日常|画风|喜剧|搞笑",
  217552: "漫画|推理|古风|轻改|小说改|少女漫画|少女|2017|恋爱|日向夏|搞笑",
  218425: "漫画|日常|百合|异世界|轻改|小说改|奇幻|2017|搞笑|シバユウスケ",
  218561: "漫画|轻改|异世界|冒险|小说改|2017|KADOKAWA|魔法|轻小说改|连载中|漫画系列",
  223238: "漫画|搞笑|日常|欢乐向|奇幻|昆布わかめ|漫画系列|黑皮|萌|魔法|百合",
  239336: "漫画|恋爱|校园|金丸祐基|胃药|2018|KADOKAWA|爱情|狗血|YOUNGACE|NTR",
  256049: "漫画|治愈|萌|坂本遊也|幼女|白泉社|奇幻|异世界|漫画系列|连载中|2019年",
  265141: "漫画|异世界|轻改|转生|小说改|漫画系列|大堀ユタカ|弱智|系列|日本|奇幻",
  272351: "格斗|漫画|战斗|2019|だろめおん|漫画系列|小学館|格斗漫画|打斗|老年痴呆|搞笑",
  275676: "小说|轻小说|夕鷺かのう",
  289325: "漫画|战斗|搞笑|恋爱|周刊少年JUMP|幼驯染|2019|集英社|権平ひつじ|漫画系列|原创",
  295492: "漫画|漫画系列|转生|小说改编|搞笑|奇幻|战斗|异世界|小说改",
  305429: "漫画|寿命论|旅行|奇幻|治愈|山田鐘人|2020|小学館|勇者|周刊少年sunday|异世界",
  305876: "漫画|转生|小说改|悪役|搞笑|轻小说改|迪化|餅月望|2019|漫画系列|异世界",
  316809: "漫画|恋爱|美食|ハナツカシオリ|爱情|日常|講談社|日漫|2020|漫画系列|日本",
  317672: "key|Galgame|竜騎士07|全年龄|望月けい|2021|GAL|小品|PC|ADV|萝莉",
  332037: "漫画|恋爱|青春|运动|校园|三浦糀|週刊少年ジャンプ|2021|集英社|JUMP|日本",
  335516: "漫画|恋爱|奇幻|漫画系列|吸血鬼|2021|KADOKAWA|fmt.Manga",
  336828: "漫画|武田綾乃|むっしゅ|校园|百合|2021|青春|集英社|系列|原创|日本",
  339644: "百合|漫画|欢乐|漫画系列|治愈|恋爱|日常|2021|パデラポッロのりお",
  349040: "漫画|未完结|系列|漫画系列",
  367415: "漫画|奇幻|2021|漫画系列|東立|治愈|系列|连载中|幻想|日本|世界观",
  375683: "漫画系列",
  385297: "国产|PC|RPG|Galgame|全年龄|GAL|游戏|经营|2024|中國產|视觉小说",
  409007: "百合|漫画|机器人|日常|小妈文学|梶川岳|完结|雷毒|複数巻|校园|マンガ",
  415650: "全年龄|国产|AVG|STEAM|PC|奇幻|Galgame|Android|超能力|反转|Unity",
  434772: "漫画|恋爱|日常|江户|战斗|欢乐|漫画系列|2023",
  477849: "漫画|战斗|漫画系列",
  509948: "JRPG|炼金工房|PC|2025|RPG|PS5|Gust|光荣特库摩|游戏|Switch|XSX",
  509955: "传说系列|JRPG|2025|RPG|PS5|PC|PS4|NS|Switch|ACT",
  519774: "STEAM",
  542816: "汉化|Galgame|全年龄|纯爱|AVG|GAL|PC|ADV|2025|甜作|废萌"
};
