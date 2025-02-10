// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.2.10.1051
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  1596: "零|Wii|恐怖|TECMO|月蚀的假面|AVG|零～月蝕の仮面～|和风|剧情良|Switch|快门",
  6833: "漫画|木尾士目|宅|青春|校园|日常|2002|講談社|搞笑|已完结|げんしけん",
  17316: "轻小说|丹特丽安的书架|三雲岳斗|萝莉|哥特|奇幻|妲丽安傲娇真心萌|推理|Dantalian|黑暗|哥特系黑暗轻小说",
  19696: "百合|漫画|阿卡林|摇曳百合|搞笑|一迅社|なもり|日常|校园|百合姬|萌",
  22798: "漫画|河下水希|恋爱|后宫|校园|青春|恋爱佳作|纯爱|西野司|2002|后宫启蒙作",
  23185: "轻小说|打工吧！魔王大人|和ヶ原聡司|欢乐向|魔王|日常|勇者|搞笑|天闻角川引进|世界的秘密|后宫",
  26476: "鸟山明|漫画|龙珠|热血|JUMP|集英社|神作|已完结|童年|鳥山明|1984",
  29920: "轻小说|后宫|上月司|标准后宫|完结|小说系列|大师傅|¬|文字|搜索用",
  31808: "漫画|哆啦A梦|童年|藤子·F·不二雄|科幻|藤子・F・不二雄|超长篇|小学館|冒险|友情|1980",
  32095: "荒川弘|漫画|搞笑|农业|生活|自传|科普|日本漫画|牛姨|系列|2006",
  37947: "亚树直|漫画|漫画系列|治愈|冲本秀|2004|超長篇|系列|モーニング|完结|講談社",
  38080: "手冢治虫|漫画|手塚治虫|医学漫画|医学|1973|青年漫|单元剧|青年漫画|已完结",
  41322: "漫画|青春|松本泉|恋爱|1984|まつもと泉|爱情|鲇川|周刊少年JUMP|80年代3女神|madoka",
  41802: "NTR|宮崎摩耶|漫画|恋爱|成年コミック|R18|工口|官能|限制|集英社|不错",
  52417: "漫画|橘贤一|战斗|集英社|橘賢一|猎奇|燃|週刊ヤングジャンプ|漫画系列|系列|科幻",
  55911: "漫画|村田雄介|搞笑|燃|战斗|One|热血|一击男|集英社|一拳超人|少年JUMP",
  60124: "少女漫|漫画|白泉社|少女漫画|拂晓的尤娜|乙女向|草凪みずほ|少女|冒险|女主奋斗史|花とゆめ",
  75390: "荒川弘|漫画|小说改|講談社|田中芳樹|漫画系列|史歌|亚尔斯兰战记|战争|別冊少年マガジン|讲谈社",
  92725: "漫画|手塚治虫|历史|历史漫画|手冢治虫|系列|1981|BIGCOMIC|日本漫画|87|中篇",
  92981: "轻小说|水城水城|生煮え|后宫|文字|复数卷|妹妹|硬核|搜索用",
  93783: "手塚治虫|漫画|1967|魔幻|手冢治虫|少年漫画|秋田书店|奇幻|百鬼丸|60年代",
  118265: "轻小说|虎走かける|从零开始的魔法书|しずまよしのり|纯爱|奇幻|小说系列|复数卷|電撃文庫|男主弱鸡|兽人",
  132067: "漫画|城平京|推理|恋爱|片瀬茶柴|悬疑|鬼神|講談社|2015|少年マガジンR|奇幻",
  133637: "漫画|日常|恋爱|搞笑|校园|tugeneko|欢乐|2015|神经病|笨拙之极的上野|漫画系列",
  146458: "百合|病娇|漫画|鍵空とみやき|猎奇|黑化|月刊GANGANJOKER|神经病|2015|致郁|黑暗",
  157710: "萝卜|漫画系列|系列|¬|漫画|201x|科幻|2015|カサハラテツロー|未完结漫画",
  159865: "漫画|萝莉|穿越|轻改|异世界|后宫|奇幻|网游|2014|漫画系列|KADOKAWA",
  177176: "漫画|芳文社|百合|漫画系列|日常|Kirara|连载中|四格漫画|欢乐|萌",
  180460: "漫画|搞笑|校园|恋爱|短篇集|治愈|奇幻|热血|短篇|科幻|單卷",
  184388: "漫画|久保帯人|短篇|奇幻|战斗|2020|周刊少年JUMP|集英社|漫画系列|連載中|週刊少年ジャンプ",
  190359: "日本轻小说|2011|已完结|小说|治愈|轻小说|小说系列|全2卷|岡田麿里|38-100",
  192277: "少女|拟人化",
  196774: "漫画|大今良時|奇幻|讲谈社|週刊少年マガジン|2016|連載中|少年漫画|周刊少年magazine|大今良时|講談社",
  198387: "百合|漫画|日常|四格|一迅社|コミック百合姫|2016|Loli|ソフト百合|お笑い|搞笑",
  209535: "异世界|漫画|轻改|性转|すえみつぢっか|穿越|小说改|搞笑|性转换|2016|漫画系列",
  218127: "百合|漫画|萩埜まこと|校园|思慕雪的热带鱼|2017|電撃マオウ|恋爱|水族馆|甜|漫画系列",
  230374: "漫画|八木教広|八木教广|战斗|2017|漫画系列|週刊少年サンデー|连载中|マンガ|原创|系列",
  235408: "漫画|异世界|龙傲天|轻改|2015|转生|轻小说|轻小说改|再见龙生，你好人生|くろの|漫画系列",
  237704: "漫画|日常|钓鱼|小坂泰之|2017|校园|海洋|搞笑|画风|青春",
  239557: "轻小说|地雷原",
  240256: "漫画|恋爱|桜井のりお|校园|狗粮|秋田書店|2018|甜|无糖狗粮|日常|连载中",
  245274: "漫画|小说改|轻改|异世界|玉岡かがり|2018|ビス|日本漫画|女主是作品女配|女性视角",
  263102: "漫画|恋爱|搞笑|芳文社|漫画系列",
  268279: "藤本タツキ|漫画|战斗|邪道|热血|周刊少年JUMP|集英社|自由人|少年JUMP|2018|藤本树",
  278568: "漫画|恋爱|搞笑|校园|横田卓马|少女漫畫|百合|少年漫画|四格|总|奇幻",
  279871: "百合|漫画|魔法少女|卖肉|搞笑|SM|战斗|恶堕|小野中彰大|2019|反英雄",
  285452: "吉田秋生|漫画|日常|一般向漫画|系列|小学館|少女漫|生活|治愈|2019|漫画系列",
  286653: "漫画|平庫ワカ|百合|短篇|治愈|KADOKAWA|2020|女性向青年漫画|角川書店|青年漫画|全一巻",
  287486: "漫画|伪娘|搞笑|小林キナ|恋爱|校园|漫画系列|日漫|已完结|ニコニコ静画|全3卷",
  292901: "百合|漫画|一迅社|校园|樫風|恋爱|百合姫コミックス|コミック百合姫|2019|日常|漫画系列",
  294766: "NTR|漫画|柚木N|卖肉|寝取られ|限制|R18|一般向|爱情|成年コミック|青年漫画",
  299096: "漫画|转生|奇幻|异世界|2019|凤傲天|搞笑|小说改|少女漫画|漫画系列|轻改",
  301803: "漫画|恋爱|若木民喜|职场|结婚|2020|狗粮|小学館|恋爱漫画|連載中|マンガ",
  305746: "百合|漫画|搞笑|校园|くゥ|日常|2020|已完结|漫画系列",
  306288: "漫画|恋爱|异世界|日常|纯爱|轻改|轻小说改|治愈|奇幻|小说改|2020",
  306341: "轻小说|奇幻|漫画|热血|搞笑|美食|创意|荻原数馬|小说系列",
  306812: "百合|漫画|恋爱|校园|后宫|轻小说改|2020|日常|みかみてれん|漫画系列|むっしゅ",
  313666: "漫画|奇幻|七尾ナナキ|冒险|异世界|搞笑|2020|欢乐向|漫画系列|連載中|小学館",
  321212: "轻小说|细音启|奇幻|小说系列|游戏|冒险|智斗",
  326285: "漫画|漫画系列|战斗|奇幻|2021|铃木央|講談社|日漫|热血|少年漫画",
  337711: "漫画|人外|少女|限制|优先|富睿控是吧",
  341656: "Galgame|废萌|游戏|PC|NS|PS4|dw|meta",
  347066: "百合|漫画|コミック百合姫|きぃやん|一迅社|2021|漫画系列|恋爱|2022|3卷|百合漫画",
  350992: "小说|科幻|奇幻|小说系列|日本|连载中|已完结|轻小说|原创|全2卷|2021",
  355494: "灵异|治愈|小说系列|悬疑",
  356074: "漫画系列|完结|已完结|全26卷",
  360758: "小说|小说单卷",
  361379: "百合|轻小说|战纪|WEB|反差萌|小说|小说系列|史诗|賽目和七|风傲天",
  375316: "漫画|恋爱|搞笑|幼驯染|校园|2022|后宫|日常|党争|講談社|三簾真也",
  377761: "漫画|校园|恋爱|いたち|雨森たきび|轻小说改|小说改|败犬|搞笑|小学館|2022",
  379803: "轻小说|恋爱|NTR|校园|小说系列|小说|学姐|2020|日本|角川スニーカー文庫|日常",
  382500: "SF|韩国|超能力|韩漫|webtoon|ASURA|masatoki",
  382508: "漫画|搞笑|漫画系列",
  384022: "类银河战士恶魔城|2024|PC|独立游戏|赤烛|国产|ACT|横版|台湾|STEAM|科幻",
  387554: "小说系列|轻小说|已完结|全3卷|大森藤ノ|2022",
  392095: "漫画|恋爱|小说改|校园|纯爱|漫画系列|2022|轻小说改|轻改|网络连载|講談社",
  393994: "",
  400290: "短篇集|科幻|漫画系列|已完结|全2卷",
  402943: "铃芽|漫画|漫画系列|新海诚|动画改",
  403555: "PC|横版|roguelike|动作|ACT|国产|2023|类银河战士恶魔城",
  406452: "轻小说|小说系列|榛名丼",
  406468: "漫画|搞笑|恋爱|2022|战斗|集英社|连载中|千葉侑生|漫画系列|系列",
  430007: "PC|火影忍者|ACT|粉丝向|万代|羁绊|PPT|青春|STEAM|NS|云",
  441435: "Roguelike|ACT|横版|国产|STEAM|PC|动作|2024|独立游戏|单机",
  441439: "轻小说|青季ふゆ|恋爱|校园|sune|5分|日轻|小说",
  446410: "",
  454905: "",
  468619: "",
  476445: "轻小说",
  477119: "",
  490905: "",
  499920: "RPG|PC|游戏|NS|PS5|PS4",
  501493: "",
  522765: "",
  529681: ""
};
