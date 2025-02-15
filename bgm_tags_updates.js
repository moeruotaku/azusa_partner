// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.2.16.31
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  2867: "轻小说|緋弾のアリア|赤松中学|后宫|色狼体质|开洞|福尔摩斯|扯远了吧|乱入|MF文庫J|已全弃",
  10028: "漫画|灾难|生存|望月峰太郎|末日|望月峯太郎|恐怖|黑暗|悬疑|1994|画风压抑",
  15335: "漫画|片岡人生|近藤一馬|黑暗系|死囚乐园|黑暗|战斗|猎奇|一看就停不下来|死囚|小白",
  19696: "百合|漫画|阿卡林|摇曳百合|搞笑|一迅社|なもり|日常|校园|百合姬|萌",
  26476: "鸟山明|漫画|龙珠|热血|JUMP|集英社|神作|已完结|童年|鳥山明|1984",
  32338: "漫画|佐藤ショウジ|丧尸|学园默示录|肉|佐藤大輔|腰斩|卖肉|遗作|战斗|福利",
  34373: "漫画|岸本齐史|热血|JUMP|民工|火影忍者|战斗|集英社|少年JUMP|岸本斉史|NARUTO",
  37947: "亚树直|漫画|漫画系列|治愈|冲本秀|2004|超長篇|系列|モーニング|完结|講談社",
  52417: "漫画|橘贤一|战斗|集英社|橘賢一|猎奇|燃|週刊ヤングジャンプ|漫画系列|系列|科幻",
  86984: "漫画|手塚治虫|1974|漫画系列|少年漫画|奇幻|日本漫画|搜索用|CC",
  93619: "棒球|田中モトユキ|体育漫画|已完结|体育|全26卷|日本漫画|漫画系列|7分|2005",
  93981: "百合|漫画|校园|蔵王大志|已完结|エロ|影木栄貴|战斗|漫画系列|完结待补|全2卷",
  102468: "轻小说|鸭志田一|青春|青春野狼系列|校园|恋爱|电击文库|鴨志田一|溝口ケージ|2014|学姐",
  111105: "全年龄|PC|ADV|Galgame|一般向|和风|AVG|游戏|VisualArt",
  119650: "漫画|奇幻|治愈|樫木祐人|日常|百合|温暖|2012|哈库梅伊与蜜珂析|漫画系列",
  121927: "轻小说|長月達平|Re:从零开始异世界生活|穿越|轮回|奇幻|异世界|MF文庫J|虐男主|SL大法|系列",
  132067: "漫画|城平京|推理|恋爱|片瀬茶柴|悬疑|鬼神|講談社|2015|少年マガジンR|奇幻",
  159865: "漫画|萝莉|穿越|轻改|异世界|后宫|奇幻|网游|2014|漫画系列|KADOKAWA",
  184388: "漫画|久保帯人|短篇|奇幻|战斗|2020|周刊少年JUMP|集英社|漫画系列|連載中|週刊少年ジャンプ",
  192277: "少女|拟人化",
  198387: "百合|漫画|日常|四格|一迅社|コミック百合姫|2016|Loli|ソフト百合|お笑い|搞笑",
  208489: "轻小说|百合|异世界|web小说|森田季節|旅游|种田|日常|web改|WEB",
  212271: "轻小说|百合|旅行|奇幻|白石定規|公路|GA文庫|魔女|轻百合|治愈|小说系列",
  218743: "漫画|芳文社|日常|あfろ|四格|百合|2017|轻百合|2017年|有英化版",
  220773: "漫画|异世界|轻改|百合|奇幻|轻小说改|凤傲天|女性主人公|冒险|穿越|小说改",
  226168: "PC|FPS|PS4|NS|微妙福利|VR|RST|過程平淡|日系|STEAM",
  231165: "轻小说|丘野優|オーバーラップ|小说系列|已完结|全9卷|ショウセツ",
  236042: "百合|漫画|岩見樹代子|NTR|一迅社|短篇集|コミック百合姫|2018|百合姬|单行本|百合姫コミックス",
  238614: "轻小说|小说系列",
  240256: "漫画|恋爱|桜井のりお|校园|狗粮|秋田書店|2018|甜|无糖狗粮|日常|连载中",
  261773: "漫画|百合|雨蘭|校园|舞蹈|漫画系列|萝莉|已完结|腰斩|福利|エロ",
  268279: "藤本タツキ|漫画|战斗|邪道|热血|周刊少年JUMP|集英社|自由人|少年JUMP|2018|藤本树",
  276300: "漫画|恋爱|山本崇一朗|校园|搞笑|2019|講談社|週刊少年マガジン|讲谈社|漫画系列|完结",
  278568: "漫画|恋爱|搞笑|校园|横田卓马|少女漫畫|百合|少年漫画|四格|总|奇幻",
  279871: "百合|漫画|魔法少女|卖肉|搞笑|SM|战斗|恶堕|小野中彰大|2019|反英雄",
  282498: "2019|野田彩子|青年漫画|连载中|漫画|戏中戏|日本漫画|日漫|演员|系列|漫画系列",
  285452: "吉田秋生|漫画|日常|一般向漫画|系列|小学館|少女漫|生活|治愈|2019|漫画系列",
  288543: "异世界|轻小说|龙傲天|后宫|奇幻|日常|校园|小说系列|战斗|恋爱|已漫改",
  295589: "轻小说|恋爱|校园|党争|御宮ゆう|角川スニーカー文庫|前任|小说系列|轻小|2019年|小恶魔",
  301803: "漫画|恋爱|若木民喜|职场|结婚|2020|狗粮|小学館|恋爱漫画|連載中|マンガ",
  304298: "漫画|恋爱|漫画系列|竹書房|2020",
  311158: "轻小说|百合|误解系|女性主角|轻百合|小林湖底|完结|小说系列|小鞠可爱就完事了|りいちゅ|GA文庫",
  311834: "百合|轻小说|异世界|奇幻|战斗|恋爱|WEB|小说|鴉ぴえろ|小说系列|KADOKAWA",
  311891: "恋爱|漫画|短篇|JUMP|校园|青春|三浦糀|2020|週刊少年ジャンプ|动作|社团",
  313666: "漫画|奇幻|七尾ナナキ|冒险|异世界|搞笑|2020|欢乐向|漫画系列|連載中|小学館",
  334762: "轻小说|科幻|電撃文庫|恋爱|电击文库|2021|小说系列|小说|菊石まれほ|轻小说系列|人与机械",
  343241: "轻小说|恋爱|校园|败犬|搞笑|雨森たきび|青春|恋爱喜剧|GAGAGA文库|2021|小说",
  344493: "轻小说|龙傲天|小说|奇幻|正太|异世界|小说系列",
  356074: "漫画系列|完结|已完结|全26卷",
  360163: "轻小说|恋爱|纯爱|狗粮|小说系列|校园|2021|辣妹|桃子文|漫画|桃文",
  361379: "百合|轻小说|战纪|WEB|反差萌|小说|小说系列|史诗|賽目和七|风傲天",
  365461: "轻小说|平坂读|平坂読|奇幻|群像|日常|カントク|ガガガ文庫|轻书架|小学館|小说系列",
  369127: "轻小说|性转|橘公司|百合|奇幻|战斗|校园|魔法|2021|百合？|つなこ",
  384699: "轻小说|恋爱|小说系列|内衣|校园|青春日常",
  385729: "跑团|PC|CRPG|国产|克苏鲁|独立游戏|RPG|悬疑|AVG|2022|2024",
  391552: "百合|漫画|エロ|檜原フキ|2022|卖肉|未完结漫画|后宫|講談社|漫画系列|マンガ",
  400290: "短篇集|科幻|漫画系列|已完结|全2卷",
  402404: "漫画|少女漫|天乃忍|恋爱|少女漫画|漫画系列|少女|奇幻|重生|2022",
  406468: "漫画|搞笑|恋爱|2022|战斗|集英社|连载中|千葉侑生|漫画系列|系列",
  407864: "漫画|年上|倉地千尋|漫画系列|コミックDAYS|2022|講談社",
  408211: "漫画|校园|系列|日本|恋爱|原创|週刊少年マガジン|漫画系列|连载中",
  410492: "百合|漫画|恋爱|新井すみこ|校园|音乐|KADOKAWA|2023|反差|GL|连载中",
  424382: "",
  437740: "轻小说|后宫|战斗|奇幻|龙傲天",
  446826: "轻小说|2022|奉|真后宫|异世界|连载|奇幻|WEB|オーバーラップ文庫|扮猪吃虎",
  453395: "",
  456679: "",
  458722: "漫画|画集",
  470276: "falcom|轨迹系列|JRPG|RPG|PS5|法老控|PS4|2024-09|PC|游戏|2024",
  475219: "轻小说|木の芽|异世界|后宫|2023|连载中|幼驯染|连载|真后宫|富士见",
  476448: "轻小说|赤城大空|迷宫|爽文|风傲天|异世界|小学馆|2023|直播系",
  493495: "百合",
  496150: "Galgame|方糖社|海豹社|废萌|兽耳|萌木原ふみたけ|萌木原|あざらしそふと|保桜|ADV",
  505808: "日本|小说|原创"
};
