// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.1.17.526
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  800: "7a/53/800_B7t72.jpg",
  1674: "75/7f/1674_iZDEe.jpg",
  1713: "46/4d/1713_AwIsO.jpg",
  2763: "f8/04/2763_9OlXd.jpg",
  3510: "15/e1/3510_pWiY9.jpg",
  3582: "9d/68/3582_JKSTo.jpg",
  14673: "5f/35/14673_NddkP.jpg",
  26111: "4e/de/26111_Y238R.jpg",
  27684: "69/20/27684_D4ySY.jpg",
  29137: "1c/55/29137_JPi0Z.jpg",
  34373: "ef/25/34373_8O8nm.jpg",
  44978: "85/3b/44978_YnAaf.jpg",
  44996: "88/64/44996_Gg1JJ.jpg",
  45021: "de/0f/45021_4Y76a.jpg",
  48678: "00/1d/48678_lo2y2.jpg",
  52828: "98/ad/52828_kNZSy.jpg",
  52967: "30/a4/52967_TIa4v.jpg",
  52968: "ff/12/52968_888w4.jpg",
  52969: "bc/45/52969_73m3c.jpg",
  64141: "ab/75/64141_X26Dc.jpg",
  74259: "4c/ad/74259_8MHFB.jpg",
  77889: "fd/51/77889_AIo7D.jpg",
  84162: "63/93/84162_PCyTw.jpg",
  89062: "03/69/89062_ddEjT.jpg",
  90813: "b5/6f/90813_F2WEE.jpg",
  91776: "70/c4/91776_CzCqc.jpg",
  109616: "10/6a/109616_jp.jpg",
  114017: "af/bd/114017_1f2S1.jpg",
  123804: "eb/b4/123804_70Kge.jpg",
  138475: "7e/5b/138475_r4H1Q.jpg",
  138652: "9d/39/138652_plM14.jpg",
  148732: "d6/72/148732_45Q47.jpg",
  156126: "02/fa/156126_k1wDM.jpg",
  168886: "4b/7a/168886_ojgzh.jpg",
  173562: "c6/8d/173562_aBRZv.jpg",
  177997: "4d/63/177997_1Z663.jpg",
  204354: "a8/67/204354_iFAfF.jpg",
  207749: "41/31/207749_MIW99.jpg",
  208146: "51/85/208146_E98lC.jpg",
  217598: "29/d6/217598_HJ7jJ.jpg",
  217833: "b7/c1/217833_7wZfN.jpg",
  234799: "37/81/234799_v8GWv.jpg",
  247867: "4d/91/247867_NoNn8.jpg",
  252542: "a3/51/252542_dZ2wg.jpg",
  260734: "a5/8d/260734_nois1.jpg",
  262170: "69/4c/262170_L2ctt.jpg",
  270199: "f0/3f/270199_10udD.jpg",
  270708: "dc/83/270708_G62Gj.jpg",
  271005: "8b/bf/271005_P1j2c.jpg",
  279871: "92/3d/279871_4a7Zi.jpg",
  282922: "fb/66/282922_Z0Bp3.jpg",
  300334: "8c/82/300334_fXSFl.jpg",
  300797: "c2/61/300797_hPZut.jpg",
  307237: "14/fa/307237_5KNYE.jpg",
  307954: "f7/68/307954_1jE1H.jpg",
  314005: "53/3b/314005_kFI3v.jpg",
  316965: "c4/67/316965_DcGaC.jpg",
  318247: "2e/92/318247_99cjf.jpg",
  319012: "68/58/319012_3z1Fo.jpg",
  324865: "69/b6/324865_2H7hh.jpg",
  325588: "6a/d6/325588_A7tW6.jpg",
  326654: "51/76/326654_ogZG5.jpg",
  326899: "9b/69/326899_Ik22I.jpg",
  337013: "90/72/337013_W3wo2.jpg",
  343241: "1c/ba/343241_TWFSN.jpg",
  344035: "f8/4b/344035_363Yn.jpg",
  351025: "f3/9f/351025_f3A3z.jpg",
  363195: "bf/86/363195_NClM6.jpg",
  368804: "0e/b5/368804_xm7p0.jpg",
  389739: "5c/cc/389739_Kirzg.jpg",
  399434: "3f/66/399434_e5Xy2.jpg",
  410127: "ee/86/410127_x4YCG.jpg",
  421548: "34/57/421548_whwPa.jpg",
  428918: "9c/e7/428918_7ADtU.jpg",
  439204: "a6/61/439204_6by06.jpg",
  453351: "8c/95/453351_Up534.jpg",
  456990: "2c/aa/456990_BBCCD.jpg",
  462250: "26/0a/462250_9ApRs.jpg",
  507565: "7f/f0/507565_73an5.jpg",
  513311: "1b/3c/513311_KWzRr.jpg",
  529181: "a0/b8/529181_IKDM4.jpg"
};
