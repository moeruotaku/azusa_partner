// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.07.26.96
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
  207479: "漫画|美食|小山愛子|治愈|小学館|生活|2016|日常|2016年|連載中",
  227176: "女装|Galgame|キャラメルBOX|伪娘|のり太|2018|嵩夜あや|PC|银发少女（？）|ADV|雰囲気がいい",
  229644: "漫画|治愈|亲情|浅野りん|美食|和菓子|2016|恋爱|KADOKAWA|漫画系列|连载中",
  230858: "漫画|格斗|奇幻|梅村真也|战斗|动作|2017|アジチカ|漫画系列|日本|コアミックス",
  248086: "漫画|搞笑|穿越|馬場康誌|异世界|普京|战斗|脑洞|2018|大统领|奇幻",
  268992: "BL|漫画|紺吉|搞笑|BLコミック|2018|BL漫画|祥伝社|日漫|降智|女性向",
  296863: "漫画|少女漫画|奇幻|少女漫|妖怪|女性主人公|少女|恋爱|一迅社|战斗|漫画系列",
  297341: "轻小说|小说系列|奇幻|舔狗之汪",
  303186: "漫画|赤坂アカ|偶像|横槍メンゴ|转生|悬疑|恋爱|集英社|2020|党争|日本",
  304298: "漫画|恋爱|漫画系列|竹書房|2020|搞笑|职场|巨乳萝莉|斎創",
  307858: "PC|STEAM|沙盒|2020|XSX|模拟|游戏|神作|奇幻|抄袭",
  318135: "漫画|异世界|穿越|轻小说改|2020|小说改|种田|漫画系列|游戏|マガジンポケット|儿戏",
  318611: "漫画|战斗|异世界|魔法|大森藤ノ|奇幻|青井聖|漫画系列|2020|热血|校园",
  319012: "漫画|鈴木祐斗|战斗|周刊少年JUMP|杀手|2020|搞笑|日本|日常|JUMP|連載中",
  323040: "漫画|タヤマ碧|偶像|KPOP|2020|韩团|日本文化趋势观察|日本|新潮社|系列|原创",
  325008: "漫画系列|已完结|全4卷",
  342552: "漫画|恋爱|日常|兄妹|2021|轻小说改|KADOKAWA|一般向|奏ユミカ|三河ごーすと|小说改",
  349268: "漫画|真冬日|2021|异世界|连载化|恶役千金|恶役|B漫|漫画系列|やましろ梅太",
  380821: "漫画|恋爱|校园|2022|阿賀沢紅茶|搞笑|少年ジャンプ＋|辣妹|集英社|系列|日本",
  401227: "NS|PC|2025|游戏|符文工房|JRPG|マーベラス|Switch|种田|符文工廠|其他",
  406468: "漫画|搞笑|恋爱|2022|战斗|集英社|千葉侑生|连载中|杀手|漫画系列",
  441435: "Roguelike|ACT|横版|国产|STEAM|动作|PC|2024|独立游戏|单机|游戏",
  449498: "FTG|PS5|2024|PC|arcsystem|PS4|游戏|NS",
  451585: "战争|漫画|TS|性转|异世界|恋爱|2023|BL|魔法|まさきたま|KADOKAWA",
  452349: "漫画|周刊少年JUMP|热血|战斗|集英社|日漫|2023|日本|复仇|连载中|外薗健",
  462533: "漫画|恋爱|战斗|杀手|暴力|黑暗|連載中|大瀬戸陸|2024|分镜爽|黑道",
  488392: "AVG|2025|STEAM|ADV|PC|魔法少女|Galgame|同人|NS|游戏|悬疑",
  498299: "轻小说|恋爱|塩本",
  509948: "JRPG|炼金工房|PC|RPG|2025|Gust|PS5|游戏|光荣特库摩|NS|STEAM",
  519041: "Windows|PC|游戏|猎奇|EROGE|R18"
};
