// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.06.23.35
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  19597: "6c/73/19597_VkC09.jpg",
  20675: "d3/43/20675_am3d2.jpg",
  36512: "20/06/36512_GguAO.jpg",
  37565: "85/0a/37565_dDo85.jpg",
  38807: "f8/e1/38807_fxGil.jpg",
  40064: "b3/57/40064_YSvYS.jpg",
  40600: "1c/fe/40600_s75GS.jpg",
  48094: "e5/54/48094_nYQxa.jpg",
  72689: "61/95/72689_CCl2M.jpg",
  88870: "76/4a/88870_5aH7x.jpg",
  115291: "ab/ef/115291_dueMt.jpg",
  123241: "b7/7b/123241_0xmuV.jpg",
  130998: "e3/91/130998_1pguy.jpg",
  210505: "41/4f/210505_1G4D9.jpg",
  221531: "1c/32/221531_1q1sn.jpg",
  225278: "c1/98/225278_jx9EG.jpg",
  227220: "b9/2e/227220_oKeqz.jpg",
  236624: "41/9b/236624_O7MnA.jpg",
  236926: "5e/c5/236926_1mmH4.jpg",
  266498: "f1/5b/266498_3188F.jpg",
  267222: "42/d2/267222_u22Rt.jpg",
  270324: "07/be/270324_z3336.jpg",
  279379: "c6/ab/279379_Bjc7O.jpg",
  282199: "03/77/282199_zBNQw.jpg",
  293664: "03/a2/293664_apq5Q.jpg",
  297267: "44/e3/297267_5euea.jpg",
  307955: "53/58/307955_qQDmW.jpg",
  309385: "84/11/309385_dLsuy.jpg",
  328640: "4e/65/328640_WR78x.jpg",
  328644: "40/0c/328644_rwlKF.jpg",
  333299: "3c/87/333299_C6KcD.jpg",
  338544: "98/cd/338544_rLSOE.jpg",
  342106: "11/1d/342106_UUXT0.jpg",
  347171: "a2/f1/347171_5FDdV.jpg",
  347172: "8e/6a/347172_nnriI.jpg",
  348689: "3b/ca/348689_MjLih.jpg",
  352114: "72/ef/352114_ehTdz.jpg",
  352392: "86/2e/352392_kFt31.jpg",
  384494: "f4/12/384494_pr2pv.jpg",
  393731: "4a/5d/393731_9p9aG.jpg",
  397619: "08/e2/397619_FuvDT.jpg",
  409817: "ae/35/409817_w607w.jpg",
  426302: "26/0f/426302_b2byx.jpg",
  433727: "57/2d/433727_MCEco.jpg",
  451664: "0e/eb/451664_pSCZg.jpg",
  451667: "f5/02/451667_oad72.jpg",
  455079: "13/dc/455079_1XHds.jpg",
  495950: "e7/76/495950_TF4TT.jpg",
  505215: "11/ab/505215_Tkllv.jpg",
  505428: "70/db/505428_HVamG.jpg",
  515936: "72/d6/515936_LKsk9.jpg",
  524427: "ee/ac/524427_63oOd.jpg",
  551639: "26/fc/551639_9OR93.jpg"
};
