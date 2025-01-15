// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.1.15.715
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  800: "轻小说|夏娜|傲娇|高桥弥七郎|灼眼のシャナ|奇幻|贫乳LOLI|蜜瓜包|灼眼的夏娜|三无|小说",
  1674: "小畑健|漫画|大场鸫|推理|Death_Note|死亡笔记|少年JUMP|集英社|小册子在人间|神作|中二",
  1713: "漫画|八木教广|大剑|奇幻|热血|CLAYMORE|百合|集英社|漂亮大姐姐|八木教広|战斗",
  2763: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|热血|荒木飞吕彦|战斗|集英社|1987|神设定|超能力鼻祖",
  3510: "海贼王|尾田荣一郎|JUMP|热血|漫画|少年漫画|集英社|燃|神作|OP|少年JUMP",
  3582: "漫画|科学超电磁炮|冬川基|鎌池和馬|百合|科幻|超能力系|月刊Comic电击大王|魔法|某科学的超电磁炮|月刊コミック電撃大王",
  26111: "由贵香织里|由貴香織里|漫画|少女漫画|耽美|BL漫画|短篇|白泉社|系列|已完结|1990s",
  27684: "藤子・F・不二雄|童年|漫画|哆啦A梦|科幻|小学館|友情|没看完|小学馆|冒险|藤子·F·不二雄",
  29137: "漫画|小山宙哉|励志|梦想|讲谈社|兄弟|講談社|科幻|感人|科幻漫画|2007",
  44978: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|热血|集英社|战斗|荒木飞吕彦|2000|空条徐伦|超能力系",
  44996: "荒木飛呂彦|jojo|漫画|ジョジョの奇妙な冒険|战斗|神作|热血|荒木飞吕彦|集英社|2004|超能力系",
  45021: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|悬疑|集英社|荒木飞吕彦|战斗|热血|2011|四个蛋",
  46627: "高山忍|漫画|奇幻|漫画系列|高山しのぶ|2008|少年漫画|日本漫画|ゼロサムWARD|ゼロサムオンライン",
  48678: "军事|科幻|潜艇|战争|漫画|海上自卫队|モーニング|系列|完结|講談社|自卫",
  49871: "漫画|Type-Moon|同人|Bすけ|搞笑|乱入|2012|日本漫画|搞笑漫画|月世界|搜索用",
  52828: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|热血|战斗|集英社|荒木飞吕彦|1987|JUMP|超能力系",
  52967: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|热血|战斗|荒木飞吕彦|集英社|1989|超能力系|JUMP",
  52968: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|热血|荒木飞吕彦|战斗|集英社|超能力系|1992|JUMP",
  52969: "荒木飛呂彦|漫画|jojo|ジョジョの奇妙な冒険|热血|荒木飞吕彦|集英社|战斗|1995|超能力系|JUMP",
  64141: "漫画|动物|猫|講談社|已完结|¬|治愈|漫画系列|记号|全12卷",
  74259: "漫画|光永康則|マンガ|1卷",
  77889: "百合|日常|治愈|高尾じんぐ",
  84162: "SORAHANE|Galgame|妹|2014|双子妹|系统bug|R18|PC|GAL|盘5|妹！",
  89062: "漫画|热血|助野嘉昭|阴阳师|恋爱|战斗|少年漫画|奇幻|2013|ジャンプSQ|搞笑",
  90813: "二之宫知子|漫画|少女漫画|2013|二ノ宮知子|生活|恋爱|少女|漫画系列|少女マンガ|少女漫",
  91776: "轻小说|海空りく|GA文库|插画赞|燃|小说系列|战斗|系列|复数卷|文字|落第骑士英雄谭",
  109616: "百合|漫画|仓田嘘|短篇集|倉田嘘|コミックス|全1巻|全一巻|治愈|短篇|マンガ",
  114017: "漫画|小林诚|短篇集|小林まこと|一般向漫画|漫画系列",
  123804: "BL|集英社|王道",
  138475: "漫画|恋爱|奇幻|あいだいろ|地缚少年花子君|月刊GFantasy|月刊Gファンタジー|少女漫画|2014|漫画系列|买买买",
  138652: "杀必死|漫画系列|已完结|全2卷",
  142869: "漫画系列",
  144257: "Galgame|拔作|エスクード|妹|escude|后宫|实用|遠野そよぎ|废萌|快餐游戏|Escu:de",
  146063: "轻小说|白鳥士郎|将棋|这本轻小说真厉害！|龙王的工作|萝莉|GA文庫|热血|空银子|しらび|2015",
  156126: "轻小说|推理|日向夏|古风|2011|web改|小説家になろう|连载中|しのとうこ|日本轻小说|宫廷",
  167732: "漫画|异世界|小说改|转生|馬場翁|穿越|かかし朝浩|爽文|轻小说改|练级|奇幻",
  168463: "漫画|游戏改|福利|黒龍眼|卖肉|2016|黑学姐黑屋子|饗庭淵|コミッククリア|恋爱|黑丝",
  168886: "轻小说|后宫|异世界|龙傲天|オーバーラップ文庫|转生流|小说系列|连载|爽文|总|ネコ光一",
  173562: "漫画|地雷系",
  177997: "轻小说|异世界|香月美夜|穿越|女主视角|种田|奇幻|女性主角|商业|椎名優|2015",
  204354: "轻小说|相沢沙呼|轻文学|小说",
  207749: "漫画|科幻|热血|Boichi|稲垣理一郎|集英社|周刊少年JUMP|种田|少年|2017|JUMP",
  208146: "漫画|恋爱|后宫|春場ねぎ|校园|講談社|搞笑|五等分の花嫁|2017|党争|炒股",
  217833: "漫画|艺术|山口つばさ|校园|講談社|成长|2017|青年漫画|月刊アフタヌーン|美术生|美术",
  229515: "漫画|恋爱|校园|狗粮|ナナシ|2017|講談社|不要欺负我、长瀞同学|抖S|日常|上岸",
  234799: "漫画|恋爱|色气|校园|福田晋一|cosplay|辣妹|日常|2018|爱情|少女漫",
  247867: "漫画|恋爱|小说改|轻改|2018|爱情|しめさば|生活|足立いまる|KADOKAWA|角川",
  252542: "轻小说|恋爱|狗粮|紙城境介|青春|校园|角川スニーカー文庫|搞笑|治愈|2017|小说",
  260734: "漫画|已完结|日本|18X|漫画系列|たくじ|全2卷",
  262170: "漫画|搞笑|異世界|穿越|反套路|异世界|2018|殆ど死んでいる|恋爱|精灵|傲娇",
  270708: "轻小说|异世界|后宫|ぶーた|小说系列|连载|搞笑|电波系|爽文|2018|转移",
  271005: "漫画|后宫|福利向|战斗|竹村洋平|奇幻|卖肉|2019|福利|肉|集英社",
  282922: "轻小说|后宫|志瑞祐|奇幻|战斗|异世界|MF文庫J|小说系列|巨乳|白毛|轻小说改",
  300334: "轻小说|百合|二月公|電撃文庫|偶像声优|校园|轻百合|业界|青春|小说系列|JK",
  303186: "漫画|赤坂アカ|横槍メンゴ|偶像|转生|悬疑|恋爱|集英社|2020|党争|週刊ヤングジャンプ",
  306051: "漫画|搞笑|恋爱|校园|TALI|KADOKAWA|青春|颜艺|已完结|系列|短篇",
  306812: "百合|漫画|恋爱|校园|后宫|轻小说改|2020|日常|みかみてれん|漫画系列|むっしゅ",
  307237: "漫画|体育|热血|つるまいかだ|竞技|2020|滑冰|講談社|励志|运动|月刊アフタヌーン",
  307954: "矢吹健太朗|漫画|性转|奇幻|2020|集英社|少年JUMP|連載中|漫画系列|校园|搞笑",
  310763: "百合|漫画|コミック百合姫|一迅社|エロ|伊月クロ|漫画系列|2020|工口|ガチ百合|露点",
  313379: "百合|漫画|コミック百合姫|舞蹈|2020|漫画系列|うたたね游|校园|一迅社|Manga|细腻",
  314005: "漫画|性转|搞笑|异世界|2020|上山道郎|恶役千金|转生|奇幻|漫画系列",
  316965: "漫画|日常|R18|成年コミック|生活感|双龍|恋爱|限制|集英社|2020|未完结漫画",
  318247: "漫画|后宫|福利|搞笑|2020|卖肉|奇幻|西游|性转|クリスタルな洋介|小学館",
  319012: "漫画|鈴木祐斗|战斗|杀手|周刊少年JUMP|2020|日常|搞笑|JUMP|連載中|週刊少年ジャンプ",
  324865: "漫画|人妻|卖肉|2021|漫画系列|节操|エロ|一般向|假面骑士W",
  325588: "异世界|漫画|烈海王|刃牙|刃牙外传|格斗|漫画系列|秋田书店|外传|战斗|日漫",
  326654: "漫画|开大车|恋爱|轻改|异世界|日本漫画|正太|战斗|黑暗|小说改|漫画系列",
  343241: "轻小说|恋爱|校园|败犬|搞笑|雨森たきび|青春|恋爱喜剧|GAGAGA文库|2021|小说",
  344035: "漫画|科幻|校园|某系列|镰池和马|魔禁|超能力|外传|女王万岁|2021|魔法禁书目录",
  363195: "漫画|日常|恋爱|校园|GAL|卖肉|浪费作画|げしゅまろ|辣妹|漫画系列|倒贴",
  368804: "漫画|战斗|奇幻|講談社|2022|裏那圭|漫画系列|遗物|废品|日本",
  392095: "漫画|恋爱|小说改|校园|纯爱|漫画系列|2022|轻小说改|轻改|网络连载|講談社",
  399434: "漫画|搞笑|游戏改|艾尔登法环|2022|飛田ニキイチ|奇幻|漫画系列|角川|连载中|战斗",
  408902: "百合|漫画|深海紺|恋爱|短篇|校园|2023|细腻|漫画系列|OGYAAA!!|青春",
  410127: "轻小说|奇幻|恋爱|晓佳奈",
  420196: "正太|小说改|漫画|日常|奇幻|搞笑",
  421548: "战斗|异世界|漫画|齋藤勁吾|奇幻|萝莉|热血|2023|KADOKAWA|搞笑|致郁",
  428918: "轻小说|恋爱|党争|搞笑|館西夕木",
  439204: "漫画|异世界|2023|奇幻|杉浦次郎|轻改|厕纸系列|うめ丸|コミックウォーカー|轻小说改|搞笑",
  453351: "轻小说|约会大作战|時崎狂三",
  456990: "轻小说|恵比須清司|后宫|恋爱|2023|日轻|日本|小说系列",
  462250: "轻小说|HJ文庫|NSFW|2023|レオナールD",
  496783: "轻小说|恋爱",
  499988: "轻小说|青葉寄|一卷全|青春|2024|伤痛|GAGAGA文库|轻文学|小说|疯狂|完结",
  529181: "PC|ADV|游戏|全年龄|2025"
};
