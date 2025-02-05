// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.2.6.7
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
  17316: "轻小说|丹特丽安的书架|三雲岳斗|萝莉|哥特|奇幻|妲丽安傲娇真心萌|推理|Dantalian|黑暗|哥特系黑暗轻小说",
  22798: "漫画|河下水希|恋爱|后宫|校园|青春|恋爱佳作|纯爱|西野司|2002|后宫启蒙作",
  26476: "鸟山明|漫画|龙珠|热血|JUMP|集英社|神作|已完结|童年|鳥山明|1984",
  29920: "轻小说|后宫|上月司|标准后宫|完结|小说系列|大师傅|¬|文字|搜索用",
  31808: "漫画|哆啦A梦|童年|藤子·F·不二雄|科幻|藤子・F・不二雄|超长篇|小学館|冒险|友情|1980",
  38080: "手冢治虫|漫画|手塚治虫|医学漫画|医学|1973|青年漫|单元剧|青年漫画|已完结",
  41322: "漫画|青春|松本泉|恋爱|1984|まつもと泉|爱情|鲇川|周刊少年JUMP|80年代3女神|madoka",
  45431: "安彦良和|漫画|高达|科幻|GUNDAM|2001|0079|已完结|神作|机战|萝卜",
  55911: "漫画|村田雄介|搞笑|燃|战斗|One|热血|一击男|集英社|一拳超人|少年JUMP",
  64273: "光永康則|漫画|漫画系列|已完结|吸血鬼|全20卷|怪物|后宫？|公主|搜索用",
  93783: "手塚治虫|漫画|1967|魔幻|手冢治虫|少年漫画|秋田书店|奇幻|百鬼丸|60年代",
  119476: "ASa_Project|Galgame|萌え|纯爱|雪都大法|初恋|ADV|游戏|糖|欢乐|PC",
  129974: "押見修造|漫画|猎奇|吸血鬼|黑暗|2015|押见修造|講談社|社会人性|別冊少年マガジン|悬疑惊悚",
  130998: "漫画|异世界|穿越|冒险|小说改|轻改|关于我转生后成为史莱姆的那件事|2015|川上泰樹|轻小说改|小说系列",
  146458: "百合|病娇|漫画|鍵空とみやき|猎奇|黑化|月刊GANGANJOKER|神经病|2015|致郁|黑暗",
  157710: "萝卜|漫画系列|系列|¬|漫画|201x|科幻|2015|カサハラテツロー|未完结漫画",
  177176: "漫画|芳文社|百合|漫画系列|日常|Kirara|连载中|四格漫画|欢乐|萌",
  180460: "漫画|搞笑|校园|恋爱|短篇集|治愈|奇幻|热血|短篇|科幻|單卷",
  209535: "异世界|漫画|轻改|性转|すえみつぢっか|穿越|小说改|搞笑|性转换|2016|漫画系列",
  210068: "Galgame|悬疑|范乃秋晴|SF|景の海のアペイリア|意外之作|シルキーズプラス|2017|PC|科幻|妹",
  217833: "漫画|艺术|山口つばさ|校园|講談社|成长|2017|青年漫画|月刊アフタヌーン|美术生|美术",
  218102: "漫画|性转|搞笑|萌|日常|性转换|兄控|ねことうふ|别当欧尼酱了|2017|pixiv",
  225848: "Galgame|FD|景の海のアペイリア|范乃秋晴|シルキーズプラス|后宫|2017|範乃秋晴|ADV|汉化|悬疑",
  230374: "漫画|八木教広|八木教广|战斗|2017|漫画系列|週刊少年サンデー|连载中|マンガ|原创|系列",
  235408: "漫画|异世界|龙傲天|轻改|2015|转生|轻小说|轻小说改|再见龙生，你好人生|くろの|漫画系列",
  237704: "漫画|日常|钓鱼|小坂泰之|2017|校园|海洋|搞笑|画风|青春",
  241623: "音游|国产|手游|独立游戏|PeroPeroGames|PC|STEAM|MUG|2018|心动网络|Android",
  245274: "漫画|小说改|轻改|异世界|玉岡かがり|2018|ビス|日本漫画|女主是作品女配|女性视角",
  268279: "藤本タツキ|漫画|战斗|邪道|热血|周刊少年JUMP|集英社|自由人|少年JUMP|2018|藤本树",
  281418: "高橋留美子|漫画|日本漫画|王道|漫画系列|2019|系列|恋爱|少年漫画",
  282324: "漫画|恋爱|小说改|轻改|紙城境介|草壁レイ|KADOKAWA|2019|校园|日常|轻小说改",
  287486: "漫画|伪娘|搞笑|小林キナ|恋爱|校园|漫画系列|日漫|已完结|ニコニコ静画|全3卷",
  292572: "漫画|眉月じゅん|恋爱|科幻|集英社|2019|少女漫画|青年漫|週刊ヤングジャンプ|連載中|九龙大众浪漫",
  292901: "百合|漫画|一迅社|校园|樫風|恋爱|百合姫コミックス|コミック百合姫|2019|日常|漫画系列",
  298651: "卡牌|Roguelike|PC|STEAM|RPG|独立游戏|DBG|二次元|rogue|韩国",
  299096: "漫画|转生|奇幻|异世界|2019|凤傲天|搞笑|小说改|少女漫画|漫画系列|轻改",
  305746: "百合|漫画|搞笑|校园|くゥ|日常|2020|已完结|漫画系列",
  306288: "漫画|恋爱|异世界|日常|纯爱|轻改|轻小说改|治愈|奇幻|小说改|2020",
  306812: "百合|漫画|恋爱|校园|后宫|轻小说改|2020|日常|みかみてれん|漫画系列|むっしゅ",
  307921: "Galgame|国产|蓝莲安|国产AVG|单恋|反浪漫|全年龄|STEAM|8A_studio|国g|2020",
  308287: "漫画|神鬼|悬疑|怪谈|萝莉|ぬじま|奇幻|小学館|女性主人公|2019年|漫画系列",
  311889: "漫画|治愈|日常|二階堂幸|搞笑|講談社|宠物|一般向漫画|漫画系列|2020|20年代",
  322220: "漫画|异世界|轮回|恶役千金|穿越|2020|女性向|恋爱|轻改|恶役|木乃ひのき",
  336224: "",
  337560: "Galgame|NanaWind|PC|藤崎紗矢香|2022年|ADV|游戏|白毛好评|奶子|GPT机翻|奶奶闻的",
  337711: "漫画|人外|少女|限制|优先|富睿控是吧",
  341656: "Galgame|废萌|游戏|PC|NS|PS4|dw|meta",
  347066: "百合|漫画|コミック百合姫|きぃやん|一迅社|2021|漫画系列|恋爱|2022|3卷|百合漫画",
  354130: "漫画|奇幻|2021|森下真|講談社|月刊少年マガジン|漫画系列|勇者|原创|搞笑|日常",
  358510: "小说改|漫画系列|恋爱|异世界",
  366790: "漫画|怪怪守护神|限制",
  366792: "漫画|限制|怪怪守护神|官方下海",
  377761: "漫画|校园|恋爱|いたち|雨森たきび|轻小说改|小说改|败犬|搞笑|小学館|2022",
  379803: "轻小说|恋爱|NTR|校园|小说系列|小说|学姐|2020|日本|角川スニーカー文庫|日常",
  382500: "SF|韩国|超能力|韩漫|webtoon|ASURA|masatoki",
  382508: "漫画|搞笑|漫画系列",
  383455: "galgame|国产|STEAM|PC|AVG|GAL|中国|纯爱",
  384022: "类银河战士恶魔城|2024|PC|独立游戏|赤烛|国产|ACT|横版|台湾|STEAM|科幻",
  388852: "恋爱|漫画|校园|漫画系列|日常",
  390508: "falcom|伊苏|ARPG|JRPG|PS5|2023|RPG|PC|NS|日本ファルコム|PS4",
  392095: "漫画|恋爱|小说改|校园|纯爱|漫画系列|2022|轻小说改|轻改|网络连载|講談社",
  401945: "恋爱|集英社|校园|漫画系列|男视角|2022",
  403555: "PC|横版|roguelike|动作|ACT|国产|2023|类银河战士恶魔城",
  441435: "Roguelike|ACT|横版|国产|STEAM|PC|动作|2024|独立游戏|单机",
  441439: "轻小说|青季ふゆ|恋爱|校园|sune|5分|日轻|小说",
  446410: "",
  447955: "Galgame|国产|AVG|PC|纯爱|GAL|游戏|青梅竹马|白裤袜|STEAM",
  470276: "falcom|轨迹系列|JRPG|RPG|PS5|法老控|PS4|2024-09|PC|游戏|2024",
  476445: "轻小说",
  477119: "",
  490905: "",
  509955: "传说系列|RPG|2025|JRPG|PC|NS|PS5|Switch|XboxOne|日系",
  516074: "日本|漫画|原创|系列|已完结",
  524477: ""
};
