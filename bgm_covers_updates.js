// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.6.594
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  502: "b5/b4/502_jDKH9.jpg",
  2867: "1a/99/2867_ZI224.jpg",
  6068: "b5/ec/6068_jp.jpg",
  47162: "ee/b0/47162_1XP1P.jpg",
  48620: "bf/7f/48620_MxH7J.jpg",
  91572: "f7/c0/91572_MV9v1.jpg",
  102457: "e0/be/102457_Jvqx1.jpg",
  108809: "2a/e7/108809_dcYjP.jpg",
  127364: "20/ef/127364_qP17p.jpg",
  132528: "78/9c/132528_rM8ym.jpg",
  132823: "fc/7d/132823_GILmw.jpg",
  162097: "bf/0b/162097_hGt64.jpg",
  177598: "24/e2/177598_7xlLw.jpg",
  182429: "f7/73/182429_kzbZP.jpg",
  201197: "6b/38/201197_pE1dD.jpg",
  210895: "24/21/210895_52GFU.jpg",
  236546: "84/97/236546_9Jzv3.jpg",
  236624: "41/9b/236624_O7MnA.jpg",
  239508: "7c/64/239508_X1ep1.jpg",
  242602: "c3/bc/242602_8O3p3.jpg",
  267222: "42/d2/267222_u22Rt.jpg",
  267399: "e4/87/267399_3vrqK.jpg",
  279379: "c6/ab/279379_Bjc7O.jpg",
  291965: "37/62/291965_0zF63.jpg",
  297818: "31/2b/297818_x0BHI.jpg",
  297824: "b3/35/297824_B2caM.jpg",
  297825: "4d/f3/297825_LdDC9.jpg",
  303246: "ce/c1/303246_lClcC.jpg",
  309385: "84/11/309385_dLsuy.jpg",
  310215: "58/3f/310215_7qz0q.jpg",
  317087: "0b/b9/317087_jvTUe.jpg",
  318247: "2e/92/318247_99cjf.jpg",
  320495: "78/d7/320495_i7gGW.jpg",
  322890: "42/df/322890_fThjv.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  337920: "c2/3d/337920_Ue74v.jpg",
  343657: "29/63/343657_CwKsS.jpg",
  349339: "10/4b/349339_81282.jpg",
  354774: "54/8b/354774_slvDq.jpg",
  368650: "23/a2/368650_L2Zad.jpg",
  372015: "99/ad/372015_3t6mL.jpg",
  372523: "29/fa/372523_A3E66.jpg",
  380004: "46/cc/380004_O6Znd.jpg",
  392895: "27/9d/392895_BR3JF.jpg",
  398897: "89/cf/398897_rNWcE.jpg",
  403129: "15/a7/403129_5TPp2.jpg",
  403637: "d9/2f/403637_ce6kQ.jpg",
  408208: "c2/0c/408208_BHC2r.jpg",
  420914: "60/a2/420914_pFt02.jpg",
  433727: "57/2d/433727_MCEco.jpg",
  433805: "d9/1c/433805_mHQho.jpg",
  434772: "56/7a/434772_JpnFB.jpg",
  444472: "89/23/444472_gY9Tt.jpg",
  448545: "f8/62/448545_JrVy0.jpg",
  453954: "bb/09/453954_JWwFY.jpg",
  459461: "be/b2/459461_Qq847.jpg",
  466038: "45/0f/466038_Bi5g4.jpg",
  476445: "c8/98/476445_3w2n3.jpg",
  498296: "50/dc/498296_Ycbp9.jpg",
  505113: "68/7c/505113_iyid1.jpg",
  505876: "0c/dc/505876_rwmXX.jpg",
  507967: "96/01/507967_b6cop.jpg",
  519040: "66/87/519040_oO7sF.jpg"
};
