// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.11.30.120
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  502: "久米田康治|漫画|絕望先生|黑色幽默|绝望|讽刺|愤青|讲谈社|2005|治愈系|講談社",
  2867: "轻小说|緋弾のアリア|赤松中学|后宫|色狼体质|开洞|福尔摩斯|扯远了吧|乱入|MF文庫J|已全弃",
  44750: "漫画|搞笑|恐怖|岡野剛|真倉翔|少年JUMP|穷老师|周刊少年JUMP|童年|集英社|1994",
  57143: "漫画|恋爱|校园|Tiv|后宫|搞笑|政宗君的复仇|竹岡葉月|竹冈叶月|一迅社|月刊ComicREX",
  91572: "少女漫画|漫画|校园|少女漫|りぼん|兄妹|双子|恋爱|槙ようこ|少女マンガ|集英社",
  121927: "轻小说|長月達平|穿越|Re:从零开始异世界生活|奇幻|轮回|异世界|MF文庫J|虐男主|SL大法|系列",
  128968: "轻小说|德棍|战争|カルロ・ゼン|穿越|历史|角川|篠月しのぶ|异世界|战斗|动画推销成功",
  132528: "新島夕|Galgame|恋×シンアイ彼女|水月陵|暖人心田|Us:track|新岛夕|きみしま青|PC|治愈|2015",
  167301: "画集|tony",
  182957: "PC|FTG|格斗|龙珠|PS4|草尾毅|XboxOne|2016|日系|漫改|ドラゴンボール",
  187573: "轻小说|小说系列|地下城|异世界|よう太|鬼影スパナ",
  188112: "漫画|大童澄瞳|校园|2016|月刊!スピリッツ|漫画系列|连载中|动画制作|小学館|Manga",
  195862: "漫画|搞笑|影崎由那|阿羅本景|2016|ホーム社|漫画系列",
  212189: "漫画|足球|体育|小林有吾|竞技|运动|小学館|2015|青春|体育漫画|热血",
  218051: "轻小说|后宫|小说系列|集英社|连载|WEB|森田季节",
  235100: "推理|漫画|金田一|侦探|2018|講談社|漫画系列|イブニングKC|悬疑|佐藤文也|有英化版",
  247878: "漫画|漫画系列|講談社|叶王|少年マガジンエッジ|A级|情怀向",
  254437: "百合|漫画|战斗|寿命论|あおのなち|奇幻|コミック百合姫|一迅社|2018|战争|悬疑",
  258160: "恋爱|漫画|校园|狗粮|2018|川村拓|漫画系列|网漫",
  266498: "漫画|足球|講談社|ノ村優介|2018|金城宗幸|运动|週刊少年マガジン|体育漫画|中二",
  273292: "少女漫|漫画|小说改|漫画系列|少女漫画|一迅社|喜久田ゆい",
  291900: "少女漫画|リカチ|恋爱|漫画|战斗|日本漫画|魔法|漫画系列|致郁|冒险|一般向",
  295492: "漫画|漫画系列|转生|小说改编|搞笑|奇幻|战斗|异世界|小说改",
  306339: "漫画|恐怖|猎奇|百合|田口翔太郎|搞笑|小学館|2020|黑暗|未完结漫画|悬疑",
  307237: "漫画|体育|つるまいかだ|热血|竞技|2020|滑冰|講談社|月刊アフタヌーン|励志|运动",
  307721: "漫画|轻改|异世界|小说改|搞笑|轻小说改|日本|奇幻|漫画系列|穿越|连载中",
  308976: "漫画|伦理|科幻|講談社|剧情|うめざわしゅん|战斗|連載中|2020|月刊アフタヌーン|漫画系列",
  312429: "百合|漫画|U-temo|日常|2020|轻百合|校园|一迅社|生活|短篇|20年代",
  319012: "漫画|鈴木祐斗|战斗|周刊少年JUMP|杀手|2020|日常|搞笑|JUMP|連載中|週刊少年ジャンプ",
  326686: "小说改|漫画|漫画系列|少女漫画|异世界",
  329957: "轻小说|ぶんころり|异世界|超能力|カントク|小说|小说系列|缝合怪|恋爱|奇幻|KADOKAWA",
  339307: "PC|ACT|银河城|国产|ARPG|横板|STEAM|游戏|RPG|PS5|5+20",
  348390: "漫画|小说改|校园|轻小说改|青梅竹馬|2021|恋爱|青梅竹马|没啥好看|桃子|雲雀湯",
  350855: "轻小说|背德系|党争|扭曲|恋爱|白学|官能|西条陽|修罗场|2021|KADOKAWA",
  363133: "百合|漫画|漫画系列|やまだしゅら|宇佐楢春|マンガUP！|已完结|2021",
  368650: "漫画|末永裕樹|馬上鷹将|落语|2022|大女主|集英社|週刊少年ジャンプ|连载中|漫画系列|热血",
  368813: "漫画系列|漫画|小说改|异世界",
  372591: "百合|漫画|幼驯染|ヒジキ|恋爱|校园|2022|漫画系列|竹書房|实体",
  373168: "少女漫画|白泉社|异世界|漫画系列|酒井ゆかり|2022",
  388241: "百合|漫画|卖肉|cosplay|漫画系列|2022|微エロ",
  393678: "漫画|恋爱|校园|日常|小说改|搞笑|一般向|轻小说改|日向あずり|尾野凛|たかた",
  399863: "小说系列|轻小说|轻书架|周藤蓮|wenku8|哩哔",
  401823: "STG|PC|上海アリス幻樂団|同人|打飞机|游戏|2024|金发教会",
  409281: "黑暗|犯罪|漫画|悬疑|战斗|少年|智斗|杀手",
  410208: "漫画|工口|校园|一般向|恋爱|限制|卖肉|已完结|魅魔",
  416714: "Cygames|FTG|PC|格斗|PS5|2023|STEAM|PS4|碧蓝幻想|日系",
  423390: "韩漫|韩国|Neon.B|webtoon|An_Narae",
  431617: "Galgame|游戏|PC|Android",
  444472: "百合|漫画|北尾タキ|轻百合|2023",
  451181: "STEAM",
  473184: "Galgame|桐葉|ルクル|全年龄|分割商法|rkr|PC|百合|同人|游戏|2024",
  492138: "轻小说|百合|轻百合|电击文库|小说系列|公路文",
  492734: "轻小说|恋爱|校园|和尚|小说1|BG|ミュシャ",
  507670: "",
  507672: "",
  518714: "漫画"
};
