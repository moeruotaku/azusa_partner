// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.12.565
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  2265: "轻小说|半分の月がのぼる空|桥本纺|仰望半月之空|秋庭里香|病弱少女|泪腺崩坏|神作|最像小说的轻小说|恋爱|小说",
  2867: "轻小说|緋弾のアリア|赤松中学|后宫|色狼体质|开洞|福尔摩斯|扯远了吧|乱入|MF文庫J|已全弃",
  3510: "海贼王|尾田荣一郎|JUMP|热血|漫画|少年漫画|集英社|燃|神作|OP|少年JUMP",
  3821: "绿川幸|治愈|漫画|白泉社|夏目友人帳|温暖画风|妖怪志|緑川ゆき|催泪弹|治愈系|怪谈",
  5566: "轻小说|入间人间|骗你的|猎奇|推理|扭曲|入間人間|说谎男坏掉女|崩坏|说谎的男孩与坏掉的女孩|坏掉",
  15865: "alcot|Galgame|双子|家族|PC|GAL|成长|2003|ADV|仁村有志|萌作",
  27684: "藤子・F・不二雄|童年|漫画|哆啦A梦|科幻|小学館|友情|没看完|小学馆|冒险|藤子·F·不二雄",
  30212: "轻小说|翅田大介|CUTTING|文笔绝佳|文青|氛围好|翅田大介伤痕|系列|西周澪|小说",
  35609: "画集|伊东杂音|凉宫春日|いとうのいぢ|2009|凉宫春日的物语|已购|天闻角川|中文已购",
  41087: "车田正美|坑|冥王神话|圣斗士星矢|圣斗士|ND|悬疑|正统|漫画|热血|2006",
  49365: "画集|伊东杂音|灼眼的夏娜|いとうのいぢ|夏娜|高橋弥七郎|萌|天闻角川|已购|画集灼眼のシャナ",
  52518: "伊藤润二|全一卷|伊藤潤二|小说|恐怖漫画|漫画|恐怖|猎奇|单行本|日漫|小学館",
  55911: "漫画|村田雄介|搞笑|燃|战斗|One|热血|一击男|集英社|一拳超人|少年JUMP",
  57143: "漫画|恋爱|校园|Tiv|后宫|搞笑|政宗君的复仇|竹岡葉月|竹冈叶月|一迅社|月刊ComicREX",
  57160: "画集|灼眼的夏娜|伊东杂音|いとうのいぢ|高橋弥七郎|メディアワークス|画集灼眼のシャナ|已购",
  61809: "漫画|已完结|¬",
  72863: "画集|伊东杂音|いとうのいぢ|凉宫春日|谷川流|2013|凉宫春日的物语|已购入|已购|随意数列|奇幻",
  73088: "画集|鳥山明|已购|2013|画集・設定資料集",
  73726: "山根绫乃|BL漫画|耽美|BL|探索者系列|やまねあやの|漫画|BLコミック|黑幫|18X|漫画系列",
  93713: "alcot|Galgame|PC|玲亚|合集|AVG|ADV|游戏|仁村有志|盘1|盘2",
  102457: "濑户口廉也|小说|唐辺葉介|轻小说|虚无感|自传|2013|瀬戸口廉也|致郁|私小说|重小说",
  108809: "BL|BLコミック|耽美|漫画系列|BL漫画|漫畫系列|漫画|日本漫画|爱情|一般向|★マンガ",
  122223: "漫画|糟糕|日本|小说改|奇幻|新妹魔王の契約者|后宫|漫画系列|轻改|卖肉|魔幻",
  123700: "画集|いとうのいぢ|灼眼的夏娜|高橋弥七郎|萝莉|伊东杂音|中文已购|已购",
  134712: "漫画|岸本齐史|火影忍者|热血|集英社|外传|NARUTO|岸本斉史|战斗|JUMP|2015",
  182429: "少女漫画|漫画|小说改|漫画系列",
  187087: "漫画|国漫|知音漫客|修仙|中国|国产|奇幻|2007|陈翔|Q版|top100",
  193081: "漫画|博|校园|少女|治愈|百合|2016|集英社|明日酱的水手服|我他妈舔爆！",
  217707: "漫画|石塚真一|音乐|小学館|2016|青年漫画|爵士乐|漫画系列|ビッグコミック|音乐漫画|完结",
  221460: "CLOCKUP|Galgame|昏式龍也|钟表社|PC|狂气|硬核浪漫|GAL|阿久津亮|2017|ADV",
  231088: "漫画系列",
  238756: "漫画|小说改|推理|古风|倉田三ノ路|日向夏|小学馆|小学館|漫画系列|少女漫画",
  239508: "漫画|轻改|后宫|种田|异世界|穿越|剣康之|内藤騎之介|2018|小说改|流水账",
  240279: "漫画|异世界|小说改|龙傲天|轻改|穿越|战斗|漫画系列|2018|天羽銀|オーバーラップ",
  244401: "小说改|漫画|异世界|基|战斗|狗血|轻小说改|魔物娘|已完结",
  248914: "漫画|轻小说改|奇幻|异世界|战斗|2017|小说改|数值龙傲天|滝乃大祐|画风|黑妹",
  265515: "漫画|异世界|轻改|冒险|2018|战斗|末世流|ラルサン|小说改|奇幻|校园",
  273389: "漫画|异世界|小说改|轻改|漫画系列|龙傲天|搞笑|轻小说改|画风|吞设定|喜剧",
  283316: "漫画|超能力|科幻|战斗|2019|正太|女性主人公|天野雀|系列|讲谈社|冒险",
  285882: "漫画|后宫|校园|恋爱|搞笑|cosplay|肉|橋本悠|集英社|2019|卖肉",
  291882: "漫画|异世界|穿越|野田宏|轻小说改|若松卓宏|小学馆|轻改|搞笑|系列|战斗",
  291965: "漫画|高达|漫画系列|2013|全9卷|已完结",
  292589: "推理|漫画|系列|小说改|漫画系列|2019",
  293806: "漫画|东方|比良坂真琴|搞笑|zun|東方|东方project|東方project|2006|东方三月精|系列",
  293809: "东方|比良坂真琴|漫画|搞笑|東方|zun|东方project|東方project|东方三月精|2009|画风",
  296410: "画集|いみぎむる|画集・設定資料集",
  296863: "漫画|奇幻|少女漫画|少女漫|妖怪|女性主人公|少女|恋爱|一迅社|战斗|漫画系列",
  297818: "BL|BLコミック",
  297824: "漫画|BL|BL漫画",
  297825: "",
  303246: "小说改|恋爱|少女|少女漫|轻小说改|漫画系列",
  311833: "百合|漫画|异世界|轻改|轻小说改|2020|奇幻|南高春告|KADOKAWA|小说改|漫画系列",
  312057: "漫画|小说改|转生|轻改|奇幻|纯爱|柚アンコ|漫画系列|异世界|少女漫|轻小说改",
  313379: "百合|漫画|コミック百合姫|舞蹈|2020|漫画系列|うたたね游|校园|一迅社|Manga|细腻",
  314005: "漫画|性转|搞笑|异世界|2020|转生|上山道郎|恶役千金|漫画系列|奇幻",
  318247: "漫画|福利|后宫|搞笑|2020|奇幻|卖肉|西游|性转|小学館|裸露",
  319453: "八月八|采和輝|BL|BL漫画|小说改|2020|漫画系列|轻改|异世界|日本",
  325234: "漫画|松井優征|历史|周刊少年JUMP|可爱的男孩子|2021|搞笑|集英社|週刊少年ジャンプ|日漫|連載中",
  325521: "画集|立华奏|天使|存盘|ごとP|已购",
  329088: "",
  332202: "Galgame|CLOCKUP|2021|昏式龍也|拔作|2021-08|PC|のりざね|马可|ADV|STEAM",
  336697: "漫画|BLコミック",
  340222: "漫画|奇幻|近本大|新川権兵衛|2021|已完结|战斗|日漫|漫画系列|一话弃",
  343812: "轻小说|恋爱|小说系列|正太",
  349268: "漫画|真冬日|2021|异世界|连载化|恶役千金|恶役|B漫|漫画系列|やましろ梅太",
  350992: "小说系列|轻小说|已完结|全2卷|2021",
  372605: "小说系列|轻小说|佐賀崎しげる",
  380004: "BL|BL漫画",
  380653: "搞笑|漫画|魔法少女|魔法大妈|三倉ゆめ|2022|魔法少妇|少年画報社|魔法阿姨|魔法大姐",
  390731: "BLコミック",
  392095: "漫画|恋爱|校园|小说改|纯爱|漫画系列|2022|轻小说改|轻改|网络连载|講談社",
  392895: "奇幻|漫画系列|漫画|治愈",
  392944: "",
  394749: "BLコミック|BL",
  398979: "漫画|卖肉|异世界|战斗|限制|色|擦边|奇幻|2022|可爱|日漫",
  406361: "Rhythm|アンノウンX|STG|PC|金发教会|NS|东方|游戏|音乐",
  407429: "BLコミック|BL",
  412477: "",
  414825: "国产|Galgame|克苏鲁|模拟经营|PC|2023|全年龄|独立游戏|剧情|养成|白毛",
  417165: "マンガ",
  420914: "BL|BLコミック",
  428529: "推理|轻小说|奇幻|国产|陈浩基",
  436748: "轻小说|2023|岡田麿里|小说|51-100",
  439771: "漫画|小说改|异世界|搞笑|奇幻|开挂|轻小说改|异世界转生|緋呂河とも|2021|なろう系",
  448545: "",
  453954: "MUG|2024|PC|音游|手游|NS|iOS|Android|2020s|游戏",
  468609: "",
  472654: "",
  480469: "2023|宮迫宗一郎",
  505113: "FAVORITE|Galgame|HD|保住圭|PC|ADV|FD|游戏|なかひろ|剧情作|BGM重置",
  515385: "小说|系列"
};
