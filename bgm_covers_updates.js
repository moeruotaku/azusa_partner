// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.9.852
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  2867: "1a/99/2867_ZI224.jpg",
  3510: "15/e1/3510_pWiY9.jpg",
  3821: "c0/4c/3821_0rC5R.jpg",
  6068: "b5/ec/6068_jp.jpg",
  15865: "b1/62/15865_dLa9T.jpg",
  41087: "91/2b/41087_61I66.jpg",
  47162: "ee/b0/47162_1XP1P.jpg",
  52518: "b6/ea/52518_jp.jpg",
  55911: "6f/a2/55911_n7jf7.jpg",
  61809: "d1/22/61809_zu6Fo.jpg",
  73726: "21/fe/73726_CGquz.jpg",
  93713: "20/3b/93713_E9weT.jpg",
  102457: "e0/be/102457_Jvqx1.jpg",
  108809: "2a/e7/108809_dcYjP.jpg",
  132823: "fc/7d/132823_GILmw.jpg",
  134712: "7b/5d/134712_3seSg.jpg",
  182429: "f7/73/182429_kzbZP.jpg",
  201197: "6b/38/201197_pE1dD.jpg",
  217707: "82/1e/217707_jfGGg.jpg",
  231088: "45/1f/231088_9Dx1y.jpg",
  239508: "7c/64/239508_X1ep1.jpg",
  240279: "3b/0d/240279_r3EeM.jpg",
  242602: "c3/bc/242602_8O3p3.jpg",
  244401: "c8/fc/244401_bEo8g.jpg",
  248914: "91/c7/248914_E5uXx.jpg",
  273389: "3f/46/273389_K2t28.jpg",
  279379: "c6/ab/279379_Bjc7O.jpg",
  283316: "ba/e7/283316_3M19I.jpg",
  285882: "a1/f1/285882_XFchu.jpg",
  291882: "21/4c/291882_eP3Iu.jpg",
  291965: "37/62/291965_0zF63.jpg",
  292589: "48/aa/292589_7XfV4.jpg",
  293806: "33/4e/293806_j7jjK.jpg",
  293809: "0e/58/293809_0r288.jpg",
  296410: "8a/20/296410_pAHK3.jpg",
  297818: "31/2b/297818_x0BHI.jpg",
  297824: "b3/35/297824_B2caM.jpg",
  297825: "4d/f3/297825_LdDC9.jpg",
  303246: "ce/c1/303246_lClcC.jpg",
  310215: "58/3f/310215_7qz0q.jpg",
  312057: "0e/10/312057_N7w87.jpg",
  314005: "53/3b/314005_kFI3v.jpg",
  318247: "2e/92/318247_99cjf.jpg",
  319453: "e4/f1/319453_P44rI.jpg",
  325521: "21/16/325521_22mm2.jpg",
  329088: "de/21/329088_NN28f.jpg",
  336697: "99/4e/336697_5PdzC.jpg",
  340222: "e8/42/340222_68663.jpg",
  343812: "1e/58/343812_7FlW9.jpg",
  349339: "10/4b/349339_81282.jpg",
  350992: "83/b3/350992_0977j.jpg",
  368650: "23/a2/368650_L2Zad.jpg",
  372523: "29/fa/372523_A3E66.jpg",
  372605: "bb/09/372605_GO7fj.jpg",
  380004: "46/cc/380004_O6Znd.jpg",
  380653: "ed/b3/380653_FaNAP.jpg",
  390731: "70/e8/390731_1a11n.jpg",
  392895: "27/9d/392895_BR3JF.jpg",
  392944: "b8/c3/392944_yzkSL.jpg",
  394749: "aa/36/394749_y1Ium.jpg",
  398979: "0d/10/398979_7ii4T.jpg",
  403129: "15/a7/403129_5TPp2.jpg",
  403637: "d9/2f/403637_ce6kQ.jpg",
  406361: "26/9a/406361_gzAIz.jpg",
  407429: "27/72/407429_Tb99c.jpg",
  412477: "97/08/412477_KHl15.jpg",
  414825: "0b/53/414825_5Cw7j.jpg",
  417165: "5a/f2/417165_z6Xx5.jpg",
  420914: "60/a2/420914_pFt02.jpg",
  428529: "6c/2f/428529_91AFL.jpg",
  433727: "57/2d/433727_MCEco.jpg",
  433805: "d9/1c/433805_mHQho.jpg",
  436748: "3e/47/436748_QIh5e.jpg",
  439771: "97/7d/439771_MmJqM.jpg",
  448545: "f8/62/448545_JrVy0.jpg",
  453954: "bb/09/453954_JWwFY.jpg",
  468609: "ce/25/468609_498cV.jpg",
  472654: "36/cf/472654_aIwJo.jpg",
  476445: "c8/98/476445_3w2n3.jpg",
  480469: "6b/ae/480469_El6p5.jpg",
  498296: "50/dc/498296_Ycbp9.jpg",
  505113: "68/7c/505113_iyid1.jpg",
  505876: "0c/dc/505876_rwmXX.jpg",
  515385: "f9/2b/515385_ljCTZ.jpg"
};
