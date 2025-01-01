// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.1.2.107
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  4066: "leaf|丸户史明|Galgame|三角恋|WA2|PC|神作|郁系|脱宅神作|丸戸史明|GAL",
  4092: "轻小说|松智洋|老湿|完结|已完结|小说|小说系列|系列|かにビーム",
  12818: "小野不由美|十二国記|轻小说|坑|神作|架空历史|小说|东方玄幻|神坑|大坑|講談社",
  19002: "新岛夕|Galgame|SAGAPLANETS|暖人心田|毕业作|初雪樱|治愈|纯爱|虐心|水月陵|fripside",
  28818: "画集|集英社",
  34977: "漫画|樋口橘|少女漫画|白泉社|少女漫|超能力|花とゆめ|爱丽丝学园|少女|校园|漫画系列",
  37044: "轻小说|宅居的她是神的说|みえはる|复数卷|すえばしけん",
  55981: "系列|漫画系列",
  76578: "少女漫画|池山田刚|少女漫|运动|恋爱|年下|漫画|池山田剛",
  94644: "恋爱|漫画|少女向|完结|水泽惠",
  121995: "桜日梯子|BL|BL漫画|漫画|漫画系列|BLコミック|耽美|2013|【BL漫画－系列】|R18|『桜日梯子』",
  128096: "渡瀬悠宇|少女漫画|漫画|2001|小学館|恋爱|少女向|少女漫|漫画系列|少女コミック",
  170184: "漫画|APH|搞笑|漫画系列|2014",
  187009: "漫画|国漫|战斗|奇幻|魔幻|吸血鬼|爱欧|Bloodline|漫画SHOW|童年|国产",
  193910: "漫画|少女漫画|少女|村田真優|校园|漫画系列|恋爱|りぼん|少女漫|狗粮|青春校园，胃疼",
  195862: "漫画|搞笑|影崎由那|阿羅本景|2016|ホーム社|漫画系列",
  209143: "絵夢羅|恋爱|白泉社|伪娘|少女マンガ|演艺圈|女性主人公|男装丽人",
  218102: "漫画|性转|搞笑|萌|日常|性转换|兄控|ねことうふ|别当欧尼酱了|2017|pixiv",
  223845: "漫画|搞笑|小说改|恶役千金|ひだかなみ|逆后宫|转生|山口悟|漫画系列|一迅社|恋爱",
  233186: "マンガ",
  253720: "Galgame|拔作|とこはな|纯爱|WillPlus|动态CG|萌拔|女仆|猫村ゆき|GAL|PC",
  254437: "百合|漫画|战斗|寿命论|あおのなち|奇幻|コミック百合姫|一迅社|2018|悬疑|战争",
  273501: "少女漫画|漫画系列",
  275492: "漫画|搞笑|恋爱|杀必死|已完结|漫画系列|エロ|全6卷|恋爱喜剧|日本漫画|擦边球",
  280628: "漫画|后宫|校园|恋爱|轻小说改|漫画系列|倒贴|R15|杀必死|一般向|卖肉",
  286980: "轻小说|奇幻|一卷全|萝莉|误解向",
  287711: "轻小说|竹井10日|恋爱",
  294934: "FTG|格斗|罪恶装备|PC|ARC|2021|STEAM|3渲2天花板|PS4|GG|格斗类",
  298651: "卡牌|Roguelike|PC|STEAM|RPG|独立游戏|DBG|二次元|rogue|韩国",
  306812: "百合|漫画|恋爱|校园|后宫|轻小说改|2020|日常|みかみてれん|漫画系列|むっしゅ",
  308152: "百合|漫画|七路ゆうき|みかみてれん|三角关系|2020|已完结|校园|漫画系列|恋爱|奇幻",
  308570: "漫画|百合|奇幻|双見酔|双葉社|WEB|webアクション|原创|战斗|漫画系列|系列",
  311289: "漫画|网游|轻小说改|战斗|冒险|週刊少年マガジン|2020|不二涼介|热血|奇幻|爽片",
  315497: "轻小说|恋爱|小说|纯爱|年上",
  319453: "八月八|采和輝|BL|BL漫画|小说改|2020|漫画系列|轻改|异世界|日本",
  320214: "漫画|异世界|轻改|小说改|2020|网游|策略|穿越|战斗|奇幻|搞笑",
  323876: "松本陽介|漫画|百合|全4卷|漫画系列|集英社|已完结|2020|JUMP+",
  336828: "漫画|武田綾乃|むっしゅ|百合|2021|校园|青春|集英社|ウルトラジャンプ|漫画系列|连载中",
  337130: "BL|漫画|日漫|あみだむく|2020",
  343350: "漫画|恋爱|像素风|なるめ|悬疑|日漫|虚构|2020|已完结|现实|科幻",
  354130: "漫画|奇幻|2021|森下真|講談社|月刊少年マガジン|漫画系列|勇者|原创|搞笑|日常",
  354762: "轻小说|恋爱|狗粮|校园|柚本悠斗|小说系列|纯爱|日本",
  356198: "Galgame|同人|短篇|唯美|孤独|氛围作|全年龄|白毛|汉化|絹谷ゆたか|雰囲気がいい",
  384022: "类银河战士恶魔城|2024|PC|独立游戏|赤烛|国产|ACT|横版|台湾|STEAM|科幻",
  397208: "漫画系列|已完结|エロ|全2卷",
  411466: "",
  433962: "",
  437534: "Galgame|国产|全年龄|AVG|萝莉|致郁|2023|GAL|Android|STEAM|压抑",
  440077: "漫画|日常|青春|恋爱|校园|偶像|矢寺圭太|日本|伪娘|治愈|女装",
  442374: "NS|赛马娘|PC|热血|STEAM|派对游戏|Switch|2024|游戏|PS4|iOS",
  450713: "漫画|异世界|战斗|2023|转生|日漫|小出よしと|bug|速通流|伪娘|有趣",
  452349: "漫画|周刊少年JUMP|集英社|战斗|热血|日漫|2023|日本|复仇|外薗健|连载中",
  462140: "轻小说|朝野始|ギャル",
  467913: "轻小说|TS|战记|小说系列|萝莉|女性视角|战争|まさきたま|传记|托莉|2023",
  484353: "轻小说|小说系列|有象利路|2023",
  486415: "小说",
  504703: "轻小说|百合|师生",
  505113: "FAVORITE|FHD|剧情作|Galgame|HD|保住圭|游戏|PC|GAL|2024-11|BGM重置"
};
