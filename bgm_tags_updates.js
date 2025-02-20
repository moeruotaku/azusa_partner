// ==UserScript==
// @name        azusa_partner_library_bgm_tags_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.2.21.516
// @description bgm_tags_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_tags = {
  3510: "海贼王|尾田荣一郎|JUMP|热血|漫画|少年漫画|集英社|燃|神作|OP|少年JUMP",
  21418: "漫画|战舰|人工智能|ArkPerformance|苍蓝钢铁的琶音|萝莉|画工赞|热血|动画化|诉述故事能力赞|科幻",
  38246: "轻小说|恋爱|异世界|全3卷|奇幻|小说系列|已完结",
  41228: "轻小说|犬洞あん|已完结|系列|妹|小说系列|夏希のたね|复数卷",
  46328: "轻小说|原田源五郎|GAGAGA文库|魔王|幼驯染|2011|复数卷|nyanya",
  68509: "特兰克斯|鸟山明|资料书|¬|画集系列",
  76693: "轻小说|小说系列",
  85150: "漫画|永安巧|文学作品改编漫画|全一卷|淺田次朗|剧情|2015|日本漫画|CC|單卷|浅田次郎",
  123463: "王雀孫|轻小说|喜剧|恋爱|青春|校园|小说|小说系列|系列|腰斩|sin",
  180060: "漫画|搞笑|公主|奇幻|熊之股鍵次|魔王|小学馆|欢乐向|在魔王城说晚安|2016|欢乐",
  182434: "漫画|超能力|推理|悬疑|るーすぼーい|校园|智斗|古屋庵|2016|斗智|无能的奈奈",
  218701: "漫画|异世界|轻小说改|小说改|轻改|战斗|穿越|转生|日常|2017|日本",
  226168: "PC|FPS|PS4|NS|微妙福利|VR|RST|過程平淡|日系|STEAM",
  226660: "Galgame|秋之回忆|5pb.|Memories-off|GAL|纯爱|最终章|MO|秋之回憶|2018|PC",
  240256: "漫画|恋爱|桜井のりお|校园|狗粮|秋田書店|2018|甜|无糖狗粮|日常|连载中",
  250037: "漫画|异世界|后宫|转生|开挂无敌|小说改|轻小说改|奇幻|轻改|厕纸|2018",
  262884: "漫画|异世界|轻小说改|小说改|后宫|2018|奇幻|异世界转生|恋爱|潮里潤|漫画系列",
  267399: "漫画|搞笑|冒险|末世|丧尸|高田康太郎|2018|僵尸|麻生羽吕|小学館|麻生羽呂",
  277134: "漫画|恐怖|猎奇|战斗|萝莉|近藤憲一|病娇|2019|惊悚|灵异|集英社",
  282498: "2019|野田彩子|青年漫画|连载中|漫画|戏中戏|日本漫画|日漫|演员|系列|漫画系列",
  282708: "漫画|异世界|后宫|轻改|轻小说改|冒险|小说改|2019|漫画系列|茂村モト|奇幻",
  289325: "漫画|战斗|搞笑|恋爱|周刊少年JUMP|幼驯染|2019|集英社|権平ひつじ|漫画系列|原创",
  301904: "漫画|搞笑|奇幻|异世界|小说改|轻小说改|2019|轻改|神经病|温馨|るれくちぇ",
  311289: "漫画|网游|轻小说改|战斗|冒险|週刊少年マガジン|2020|不二涼介|热血|奇幻|爽片",
  311891: "恋爱|漫画|短篇|JUMP|校园|青春|三浦糀|2020|週刊少年ジャンプ|动作|社团",
  312057: "漫画|小说改|转生|纯爱|柚アンコ|轻改|奇幻|少女漫|漫画系列|异世界|轻小说改",
  315946: "FPS|NS|汉化|萝莉|2021-02|STEAM|Switch|游戏|STG|PC",
  316122: "漫画|推理|天野明|悬疑|侦探|集英社|2020|推理漫画|悬疑漫画|日本漫画|少年漫",
  326724: "漫画|恋爱|校园|喜剧|搞笑|久世蘭|杀必死|講談社|2021|逆推|日常",
  331539: "画集|言叶之庭|已购|画集・設定資料集|美术集",
  348344: "漫画|BL|2021|悬疑|惊悚|モクモクれん|耽美|克系|KADOKAWA|BL漫画|日本漫画",
  349040: "漫画|系列|未完结|漫画系列",
  364960: "craftwork|長岡建蔵|Galgame|狂气|GAL|AVG|旭|猎奇|2022|PC|はましま薫夫",
  373629: "漫画|金田陽介|2022|校园|マガジンポケット|講談社|异世界|奇幻|讲谈社|漫画系列|魔法",
  375801: "师生|なかだまお|开大车|漫画|一般向|反差萌|漫画系列",
  377121: "漫画|辣妹|恋爱|魚住さかな|搞笑|のりしろちゃん|校园|日常|漫画系列|一般向|系列",
  385729: "跑团|PC|CRPG|国产|克苏鲁|独立游戏|RPG|悬疑|AVG|2022|2024",
  386043: "漫画|百合|科幻|冒险|蒸汽朋克|黒イ森|島崎無印|2022|集英社|生化人|末世后",
  391552: "百合|漫画|エロ|檜原フキ|卖肉|2022|漫画系列|日本|实体|禁漫|2022年",
  394754: "ACT|PC|横版|NS|2023|银河恶魔城|STEAM|横版ACT|rouge|Switch",
  407358: "漫画|西尾維新|岩崎優次|推理漫画|2022|集英社|少年漫画|密码|系列|連載中|周刊少年JUMP",
  410492: "百合|漫画|恋爱|新井すみこ|音乐|校园|KADOKAWA|2023|反差|GL|连载中",
  424382: "",
  433727: "漫画|格斗|热血|2023|百合|MAAM|卖肉|原创|小学馆|サンドロビッチ・ヤバ子|神展开",
  448518: "",
  456679: "",
  457028: "轻小说|kakao",
  458722: "漫画|画集",
  462533: "漫画|恋爱|战斗|杀手|黑暗|連載中|2024|大瀬戸陸|暴力|分镜爽|黑道",
  464603: "全1巻|漫画|短篇集|コミックス|多作者|同人|全一卷|已完结|7.5",
  466687: "轻小说|四辻いそら",
  470276: "falcom|轨迹系列|JRPG|RPG|PS5|法老控|PC|PS4|游戏|2024-09|2024",
  496150: "Galgame|方糖社|海豹社|废萌|萌木原|兽耳|あざらしそふと|萌木原ふみたけ|PC|游戏",
  507670: "",
  524528: "百合|轻小说|恋爱|日本|校园|扭曲|ラノベ",
  529743: "画集",
  533058: "轻小说|主婦と生活社|小说|系列|2023|さくら青嵐"
};
