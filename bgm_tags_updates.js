// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.1.25.79
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  1713: "漫画|八木教广|大剑|奇幻|热血|CLAYMORE|百合|集英社|漂亮大姐姐|八木教広|战斗",
  2669: "漫画|臼井仪人|童年|蜡笔小新|搞笑|史上最无耻小孩|臼井儀人|1990|双叶社|漫画系列|脑洞",
  3582: "漫画|科学超电磁炮|冬川基|鎌池和馬|百合|科幻|超能力系|月刊Comic电击大王|魔法|某科学的超电磁炮|月刊コミック電撃大王",
  23319: "漫画|本名ワコウ|恋爱|擦边球|孔中窥见真理之貌|成长|偷窥|爱与性|NTR|致郁|工口",
  24822: "日漫|漫画|经典|漫画系列|2010",
  27466: "鸟山明|漫画|童年|JUMP|热血|集英社|经典|龙珠|神作|战斗|鳥山明",
  32435: "井上雄彦|漫画|宫本武藏|画功|武士|讲谈社|青年漫画|浪客行|经典|打斗|神作",
  33137: "鸟山明|漫画|搞笑|鳥山明|日常|少年JUMP|集英社|1980|童年|漫画系列|脑洞",
  38080: "手冢治虫|漫画|手塚治虫|医学漫画|医学|1973|青年漫|单元剧|青年漫画|已完结",
  40643: "漫画|許斐剛|运动|ジャンプSQ.|集英社|2009|少年|体育漫画|2009-04|ジャンプスクエア|系列",
  41759: "漫画|宮崎摩耶|工口|已完结|漫画系列|全7卷|2010|吐槽|福利|糟糕|月刊ヤングマガジン",
  43563: "漫画|头文字D|运动|竞技|1995|しげの秀一|AE86|超長篇|90年代|热血沸腾",
  44649: "漫画|雨蘭|后宫|萝莉|小学生|糟糕|校园|卖肉|邪恶|2010|已完结",
  49369: "EGOIST|ED|PSYCHO-PASS|ryo|心理测量者|2012|chelly|anime|动漫主题曲|supercell|single",
  51721: "画集|E-Book",
  58074: "漫画|车田正美|已完结|完全版|漫画系列|热血|1985|Comic|冒险|战斗|友情",
  58659: "2011|同人|c81|歌い手|Vocaloid|同人音乐|柿チョコ|★歌い手|びびあん",
  84159: "轻小说|野崎まど|一卷全|小说|野崎惑",
  84162: "SORAHANE|Galgame|妹|2014|双子妹|系统bug|R18|PC|GAL|盘5|妹！",
  86984: "漫画|手塚治虫|1974|漫画系列|少年漫画|奇幻|日本漫画|搜索用|CC",
  123469: "漫画|哆啦A梦|藤子·F·不二雄|藤子・F・不二雄|2009|漫画系列|科幻|儿童漫画|日本|童年|叮噹",
  143035: "漫画|搞笑|异世界|为美好的世界献上祝福|轻小说改|日常|2014|轻小说|奇幻|素晴|轻改",
  172751: "公式设定集",
  196753: "漫画|集英社|中村光|マンガ|黑暗|搞笑|連載中|漫画系列|系列|日本|一般向漫画",
  207478: "漫画|战斗|妖怪|藍本松|2016|少年漫画|集英社|热血|ジャンプスクエア|ジャンプSQ.|少年漫",
  212037: "漫画|小林大樹|战斗|残酷|2017|漫画系列|异世界|奇幻|连载中",
  221040: "异世界|漫画|战斗|奇幻|游戏改|漫画系列|FF系列",
  227220: "漫画|成田良悟|群像剧|奇幻|反穿|超能力|藤本新太|战斗|2017|异世界|追漫",
  230297: "小川悦司|漫画|系列|料理|美食|日漫|少年漫画|漫画系列|竞技|料理漫画",
  233951: "轻小说|轻文学|桜井美奈|小说|绝症|一卷全|校园|恋爱|青春",
  233997: "轻文学",
  247798: "漫画|异世界|小说改|轻改|抽卡|穿越|晴野しゅー|2018|轻小说改|后宫|コミックライド",
  247867: "漫画|恋爱|小说改|轻改|2018|爱情|しめさば|生活|足立いまる|KADOKAWA|角川",
  248086: "漫画|搞笑|穿越|馬場康誌|异世界|普京|战斗|脑洞|2018|大统领|奇幻",
  249058: "漫画|井上敏樹|横島一|特摄|青年漫画|2014|假面骑士|石ノ森章太郎|日本漫画|奇幻|空我",
  250385: "漫画|小说改|漫画系列|B漫",
  254706: "百合|漫画|短篇集|竹嶋えく|恋爱|百合姫コミックス|コミック百合姫|2018|ガチ百合|日常|漫画单卷",
  260215: "漫画|异世界|小说改|漫画系列|后宫|力蔵|2018|轻改|穿越|战斗|屎",
  265515: "漫画|异世界|轻改|冒险|2018|战斗|末世流|ラルサン|小说改|奇幻|校园",
  266498: "漫画|足球|講談社|ノ村優介|金城宗幸|2018|运动|週刊少年マガジン|体育漫画|中二",
  270407: "百合|漫画|小说改|南方纯|战斗|猎奇|异世界|kiki|冒险|2018|奇幻",
  272611: "漫画|青春|校园|高松美咲|恋爱|講談社|2018|月刊アフタヌーン|日常|少女漫画|成长",
  272768: "漫画|Type-Moon|一迅社|漫画系列|2019|連載中|系列|fgo",
  273878: "异世界|小说改|轻改|恋爱|一迅社|漫画系列|魔法|蒼崎律",
  285270: "漫画|异世界|轻改|转生|小说改|2019|漫画系列|高橋愛|穿越|龙傲天|搞笑",
  288299: "轻小说|久慈マサムネ|后宫|恋爱|异世界|角川スニーカー文庫|日本轻小说|王道|小说系列|奈子|2019",
  289325: "漫画|战斗|恋爱|搞笑|周刊少年JUMP|幼驯染|集英社|2019|漫画系列|権平ひつじ|连载中",
  296466: "漫画|后宫|搞笑|恋爱|集英社|校园|沙雕|野澤ゆき子|2019|中村力斗|画风好",
  299585: "轻小说|小说系列",
  300431: "漫画|峰浪りょう|恋爱|青春|阴间|病娇|胃药|2020|青年漫|集英社|扭曲",
  300763: "百合|漫画|治愈|校园|矢村いち|2020|漫画系列|温柔的世界|日常|Manga",
  302578: "",
  302831: "百合|漫画|轻改|业界|轻小说改|2020|腰斩|巻本梅実|漫画系列|轻小说|日漫",
  308999: "漫画|小说改|异世界|奇幻|战斗|やもりちゃん|B漫|漫画系列|轻小说改|起点水平",
  309811: "漫画|异世界|轻小说改|轻改|奇幻|漫画系列|战斗|小说改|SLG|大乱斗|智斗",
  311181: "Type-Moon|画集系列|设定集&画集|Fate|画集|设定集|根目录",
  318311: "漫画|恋爱|狗粮|甜|校园|色のん|2020|日常|爱情|漫画系列|web改",
  324416: "漫画|恋爱|后宫|日常|2021|搞笑|多女主|内藤マーシー|漫画系列|党争",
  325236: "漫画|搞笑|篠原健太|週刊少年ジャンプ|奇幻|集英社|2021|周刊少年JUMP|超自然日常|校园|連載中",
  325874: "画集|已购|画集・設定資料集|その他|2021|がおう",
  326285: "漫画|漫画系列|战斗|奇幻|2021|铃木央|講談社|日漫|热血|少年漫画",
  326654: "漫画|开大车|恋爱|轻改|异世界|日本漫画|正太|战斗|黑暗|小说改|漫画系列",
  327243: "设定集|九井諒子|美食|奇幻|2021|KADOKAWA|搞笑|漫画|九井谅子|异世界|公式书",
  333519: "小说改|异世界|漫画|开挂无敌|魔法|战斗|穿越|奇幻|漫画系列|龙傲天",
  335289: "中国",
  347844: "BLコミック|❤|笠倉出版社",
  350992: "小说|科幻|奇幻|小说系列|日本|连载中|已完结|轻小说|原创|全2卷|2021",
  352430: "漫画系列",
  352968: "漫画|奇幻|战斗|小说改|异世界|退队流|よねぞう|轻小说改|2021|套路",
  360810: "中国|国漫|小说改|漫画|科幻|日常|书籍|国产|三体|系列",
  362118: "异世界|漫画|2021|轻改|轻小说改|コミックファイア|森山ゆっこ|ホビージャパン|漫画系列|小说改|冒险",
  364059: "",
  364786: "漫画|兄妹|乱伦|妹控|恋爱|骨科|葉乃はるか|2021|伦理|扭曲",
  365099: "漫画|漫画系列",
  366938: "漫画系列|マンガ",
  368622: "设定集",
  373153: "漫画|后宫|稲葉みのり|恋爱|成年コミック|2022|NTR|绿帽男？|职场|性无能",
  377761: "漫画|校园|恋爱|いたち|雨森たきび|轻小说改|小说改|败犬|搞笑|小学館|2022",
  380055: "BLコミック|漫画|黒田くろた",
  380475: "漫画|奇幻|异世界|垃圾|漫画系列|画风一般",
  393816: "拔作|CLOCKUP|Galgame|雌小鬼|凌辱|2023|金发教会|GAL|原画超棒|调教|扶她",
  394485: "内藤泰弘|漫画|少年漫画|漫画系列|战斗|日本漫画|猎奇|奇幻|系列|群像剧|日漫",
  406468: "漫画|搞笑|恋爱|2022|战斗|集英社|连载中|千葉侑生|漫画系列|系列",
  407267: "粉丝书",
  409483: "柚子社|Galgame|Yuzu-Soft|夏和小|废萌|2023|长谷川育美|遥そら|田口宏子|ゆずソフト|GAL",
  419648: "轻小说",
  425201: "漫画|搞笑|校园|すけろく|日常|恋爱|青春|假小子",
  435772: "日本|漫画|原创|连载中",
  453555: "漫画|已完结",
  459904: "",
  470276: "falcom|轨迹系列|JRPG|RPG|PS5|法老控|PS4|2024-09|PC|游戏|2024",
  478795: "画集|ももこ|存盘|2024|已入|计划购入|一般向|已购",
  479162: "轻小说|2023|web文|KADOKAWA",
  485254: "未来|SF|漫画|短篇|太空",
  514416: ""
};
