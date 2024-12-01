// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.1.1260
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
  48620: "bf/7f/48620_MxH7J.jpg",
  57143: "ea/49/57143_RPWeW.jpg",
  91572: "f7/c0/91572_MV9v1.jpg",
  121927: "1e/0e/121927_2bGf8.jpg",
  127364: "20/ef/127364_qP17p.jpg",
  128968: "11/07/128968_uC4m0.jpg",
  132528: "78/9c/132528_rM8ym.jpg",
  167301: "b2/08/167301_jp.jpg",
  177598: "24/e2/177598_7xlLw.jpg",
  187573: "7a/f5/187573_J69Q3.jpg",
  188112: "31/ec/188112_whDha.jpg",
  212189: "b1/c4/212189_Y1WOa.jpg",
  218051: "e4/d0/218051_Yr6qD.jpg",
  235100: "6c/f3/235100_k4XXA.jpg",
  236546: "84/97/236546_9Jzv3.jpg",
  247878: "19/97/247878_71673.jpg",
  254437: "49/28/254437_V0nL4.jpg",
  258160: "cb/3f/258160_fkwx8.jpg",
  266498: "f1/5b/266498_3188F.jpg",
  267222: "42/d2/267222_u22Rt.jpg",
  273292: "86/7f/273292_rdjj2.jpg",
  291900: "5c/16/291900_AJcps.jpg",
  295492: "a5/a9/295492_3N3wU.jpg",
  306339: "a8/f8/306339_7J7YN.jpg",
  307237: "14/fa/307237_5KNYE.jpg",
  307721: "a3/a2/307721_7C2PN.jpg",
  308976: "07/cd/308976_kKaAR.jpg",
  309385: "84/11/309385_dLsuy.jpg",
  312429: "6e/87/312429_yKG6Y.jpg",
  317087: "0b/b9/317087_jvTUe.jpg",
  319012: "68/58/319012_3z1Fo.jpg",
  320495: "78/d7/320495_i7gGW.jpg",
  326686: "1b/6a/326686_ggH11.jpg",
  329957: "2e/40/329957_6AvA3.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  337920: "c2/3d/337920_Ue74v.jpg",
  339307: "71/61/339307_Yga0v.jpg",
  343657: "29/63/343657_CwKsS.jpg",
  348390: "c9/f5/348390_Df3F5.jpg",
  350855: "44/32/350855_0w5Zg.jpg",
  363133: "0a/f5/363133_UYUUs.jpg",
  368650: "23/a2/368650_L2Zad.jpg",
  368813: "fc/62/368813_L4I49.jpg",
  372015: "99/ad/372015_3t6mL.jpg",
  372591: "80/cd/372591_Sx9Sq.jpg",
  373168: "bd/8d/373168_G7aB3.jpg",
  388241: "b8/d1/388241_SHnwX.jpg",
  393678: "42/ad/393678_10C22.jpg",
  398897: "89/cf/398897_rNWcE.jpg",
  399863: "54/97/399863_24YvF.jpg",
  401823: "b4/cd/401823_fIg2K.jpg",
  408208: "c2/0c/408208_BHC2r.jpg",
  409281: "b0/ea/409281_GtgG7.jpg",
  410208: "77/fa/410208_UCneP.jpg",
  416714: "2f/7d/416714_hSIhm.jpg",
  423390: "bf/1b/423390_tptkG.jpg",
  431617: "46/52/431617_oCyAW.jpg",
  434772: "56/7a/434772_JpnFB.jpg",
  444472: "89/23/444472_gY9Tt.jpg",
  459461: "be/b2/459461_Qq847.jpg",
  466038: "45/0f/466038_Bi5g4.jpg",
  473184: "cf/28/473184_o5rkx.jpg",
  492138: "24/1b/492138_Hd4KI.jpg",
  492734: "64/8a/492734_NvwBs.jpg",
  507670: "18/4c/507670_DYVT7.jpg",
  507672: "21/c2/507672_I7oVL.jpg",
  518714: "46/bb/518714_ikjvM.jpg"
};
