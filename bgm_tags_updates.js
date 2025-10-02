// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.10.02.46
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  19289: "末次由紀|漫画|少女漫画|热血|讲谈社|少女|青春|燃|少女漫|講談社|ちはやふる",
  32491: "漫画|丧女|日常|谷川ニコ|搞笑|百合|不管我怎么去想我不受欢迎这件事都是你们的错!|后宫|校园|漫画系列|2011",
  104586: "Vocaloid|GUMI|164",
  143372: "茶太|同人|2015|日向そら",
  209535: "漫画|异世界|性转|轻改|すえみつぢっか|穿越|小说改|2016|搞笑|性转换|漫画系列",
  265141: "漫画|异世界|轻改|转生|小说改|漫画系列|大堀ユタカ|弱智|日本|系列|奇幻",
  285114: "漫画|奇幻|治愈|樋口彰彦|搞笑|講談社|历史|漫画系列|百合|日常|2019",
  297267: "漫画|恋爱|党争|吉河美希|搞笑|2020|講談社|周刊少年magazine|週刊少年マガジン|日漫|妹",
  306272: "漫画|2020|奇幻|NAOE|战斗|BLコミック|漫画系列|月刊Gファンタジー|一般向|BL",
  337711: "漫画|日本|系列|原创|少女|人外|Furry|连载中|优先|限制",
  349842: "小说改|漫画系列|漫画|日本|异世界|奇幻|系列|连载中|2021.",
  372262: "漫画系列",
  418009: "恋爱",
  427143: "百合|漫画|田口囁一|日常|吸血鬼|2023|少年ジャンプ＋|欢乐|搞笑|2024|轻百合",
  446065: "系列|一般向|連載中|NTR|复仇|监禁|マンガ",
  447981: "漫画|系列|講談社|NTR|恋爱|マンガ|负反馈大于正反馈|2023|无聊|生肉|連載中",
  489490: "冬茜トム|Galgame|きゃべつそふと|しらたま|CabbageSoft|PC|游戏|萝莉|兽耳|FD|2025",
  505952: "Galgame|全年龄|PC|Aquaplus|2025|ADV|游戏|重制|NS|GAL|アクアプラス",
  511746: "PC|游戏|韩国|iOS|Android",
  515527: "RPG|炼金工房|PC|PS5|游戏|2025|PS4|NS|PS|JRPG",
  523498: "Galgame|拔作|Escu:de|FD|PC|2025|ADV|R18|民俗|银趴|游戏",
  529432: "falcom|ARPG|NS2|伊苏|游戏|2025|7.5|JRPG|2025+|RPG",
  530454: "ADV|NS|PC|游戏|2025"
};
