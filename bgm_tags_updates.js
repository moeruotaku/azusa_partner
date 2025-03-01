// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.2.28.560
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  36599: "",
  112396: "漫画|搞笑|百合|日常|ユキヲ|邪神与厨二病少女|人外娘|血腥|COMICメテオ|邪神|萝莉",
  114189: "漫画|恋爱|校园|山本崇一朗|搞笑|狗粮|甜|日常|2013|小学馆|闪光弹",
  132067: "漫画|城平京|推理|恋爱|片瀬茶柴|悬疑|鬼神|講談社|2015|少年マガジンR|奇幻",
  134663: "朝森瑞季|漫画|已完结|性感娇妻玛莉亚|VITAMAN|成年コミック|工口|长篇|恋爱|漫画系列|2009",
  140704: "已完结|青年漫画|漫画系列|限制|全21卷|八月薫|漫画|R18",
  141549: "漫画|工口|R18|青年漫画|已完结|漫画系列|成年コミック",
  198591: "漫画|卖肉|异世界|奇幻|后宫|R18|战斗|佐藤健悦|穿越|連載中|吸奶",
  213924: "卖肉|漫画|搞笑|女教师|恋爱|年上|御姐|蘇募ロウ|週刊ヤングジャンプ|校园|講談社",
  215198: "Galgame|AVG|游戏|PC|文字ADV",
  221460: "CLOCKUP|Galgame|昏式龍也|钟表社|PC|硬核浪漫|狂气|2017|GAL|阿久津亮|ADV",
  226660: "Galgame|秋之回忆|5pb.|Memories-off|GAL|纯爱|最终章|MO|秋之回憶|2018|PC",
  228467: "漫画|卖肉|后宫|小说改|复仇|轻改|黑暗|异世界|转生|R18|KADOKAWA",
  269615: "Galgame|秋之回忆|5pb.|最終作|Memories_off|GAL|NS|PS4|5pb|PSV|FD",
  282708: "漫画|异世界|后宫|轻改|轻小说改|冒险|小说改|2019|漫画系列|茂村モト|奇幻",
  285452: "吉田秋生|漫画|日常|一般向漫画|系列|小学館|少女漫|生活|治愈|2019|漫画系列",
  288241: "FTG|PS4|STEAM|格斗|PC|NS|ACT|游戏|续作|arcsystem|2020",
  296466: "漫画|后宫|搞笑|恋爱|集英社|校园|沙雕|野澤ゆき子|2019|中村力斗|画风好",
  302956: "漫画|异世界|小说改|凤傲天|日常|轻小说改|长寿种|连载中|日本|漫画系列|B漫",
  306292: "小说改|漫画系列",
  307237: "漫画|体育|热血|运动|竞技|滑冰|つるまいかだ|励志|2020|日本|講談社",
  311289: "漫画|网游|轻小说改|战斗|冒险|週刊少年マガジン|2020|不二涼介|热血|奇幻|爽片",
  314591: "伊藤明弘|漫画|漫画系列|日本漫画|战斗|已完结|1993|枪械漫画|全3卷",
  315767: "漫画|末世|治愈|2020|さいとー栄|公路|系列|原创|漫画系列|后末日|连载中",
  317530: "羊おじさん倶楽部|同人|百合|Galgame|短篇|2020|全年龄|PC|AVG|雰囲気がいい|游戏",
  319309: "漫画|安田佳澄|科幻|悬疑|連載中|2020|青年漫画|活下去|智斗|マンガ|反乌托邦",
  321062: "轻小说|野村美月|悬疑|推理|恋爱|小说系列|小说|日本|連載中|2020|日本轻小说",
  324416: "漫画|恋爱|后宫|日常|2021|搞笑|多女主|内藤マーシー|党争|日本",
  327286: "講談社|悬疑|推理|剧情|系列|漫画|漫画系列",
  332202: "Galgame|CLOCKUP|2021|昏式龍也|PC|游戏|ADV|のりざね|2021-08|拔作|さいとうよしえ",
  332298: "小说改|恋爱|漫画|漫画系列|2021|日漫|荻原沙優",
  375007: "漫画|日常|后宫|小说改|刀剑神域|单行本|没啥好看",
  390675: "漫画|日常|恋爱|搞笑|社畜|地主|2022|月刊ビッグガンガン|欢乐|月刊BIGGANGAN|漫画系列",
  399501: "漫画|后宫|异世界|卖肉|福利|工口|zunta|2022|原创|月刊ドラゴンエイジ|日漫",
  403551: "漫画|恋爱|奇幻|漫画系列|ミトガワワタル|日本|集英社|已完结|系列|搞笑|原创",
  409285: "漫画|校园|小说改|爱情|重来人生|穿越|日常|たん旦|一般向|奇幻|慶野由志",
  414879: "漫画|搞笑|水無月すう|卖肉|2022|一般向|KADOKAWA|月刊少年エース|天降之物|续作|腰斩",
  432211: "漫画|猎奇|小说改|百合|一般向|轻小说|漫画系列|白毛",
  433727: "漫画|格斗|热血|2023|百合|MAAM|卖肉|原创|小学馆|サンドロビッチ・ヤバ子|神展开",
  440323: "Galgame|妹|海豹社|拔作|白毛|あざらしそふと|纯爱|PC|白裤袜|2023|密语",
  449498: "FTG|PS5|2024|PC|arcsystem|PS4|游戏|NS",
  483860: "2024",
  484776: "百合|轻小说|入間人間|扭曲|师生|出轨|校园|反伦常|恋爱|2024|胃痛",
  509334: "设定集",
  534727: "Galgame|纯爱|汉化|iMel|变身|PC|2025|R18|奇幻|魔法少女|萌拔"
};
