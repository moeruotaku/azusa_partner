// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.07.28.37
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  5418: "TypeMoon|奈須きのこ|Galgame|魔法使いの夜|Type-Moon|型月|PC|AVG|蘑菇使いの坑|GAL|小山广和",
  65458: "少女漫画|漫画|白泉社|あきづき空太|恋爱|少女漫|2006|LaLa|少女|秋月空太|奇幻",
  185804: "FTG|BLAZBLUE|自带格斗的galgame|PC|PS4|ARCSYSTEMWORKS|STEAM|ARC|Galgame|ASW|格斗",
  193081: "漫画|博|校园|百合|少女|治愈|2016|集英社|明日酱的水手服|我他妈舔爆！|日本",
  227176: "女装|Galgame|キャラメルBOX|伪娘|のり太|2018|嵩夜あや|PC|银发少女（？）|ADV|雰囲気がいい",
  229644: "漫画|治愈|亲情|浅野りん|美食|和菓子|2016|恋爱|KADOKAWA|漫画系列|连载中",
  297341: "轻小说|小说系列|奇幻|舔狗之汪",
  303186: "漫画|赤坂アカ|偶像|横槍メンゴ|转生|悬疑|恋爱|集英社|2020|党争|日本",
  307858: "PC|STEAM|沙盒|2020|XSX|模拟|游戏|神作|奇幻|抄袭",
  319309: "漫画|安田佳澄|科幻|悬疑|2020|連載中|青年漫画|活下去|智斗|マンガ|反乌托邦",
  323040: "漫画|タヤマ碧|偶像|KPOP|2020|韩团|日本文化趋势观察|日本|新潮社|系列|原创",
  325008: "漫画系列|已完结|全4卷",
  380821: "漫画|恋爱|校园|2022|阿賀沢紅茶|搞笑|少年ジャンプ＋|辣妹|集英社|系列|日本",
  406468: "漫画|搞笑|恋爱|2022|战斗|集英社|千葉侑生|连载中|杀手|漫画系列",
  441435: "Roguelike|ACT|横版|国产|STEAM|动作|PC|2024|独立游戏|单机|游戏",
  449498: "FTG|PS5|2024|PC|arcsystem|PS4|游戏|NS",
  451585: "战争|漫画|TS|性转|异世界|恋爱|2023|BL|魔法|まさきたま|KADOKAWA",
  453901: "漫画|恋爱|党争|校园|五十嵐正邦|搞笑|講談社|2023|日常|后宫|午夜心旋律",
  462533: "漫画|恋爱|战斗|杀手|暴力|黑暗|連載中|大瀬戸陸|2024|分镜爽|黑道",
  488392: "AVG|2025|STEAM|ADV|PC|魔法少女|Galgame|同人|NS|游戏|悬疑",
  498299: "轻小说|恋爱|塩本"
};
