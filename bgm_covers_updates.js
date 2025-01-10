// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.1.10.926
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  505: "e8/c0/505_ju16J.jpg",
  1713: "46/4d/1713_AwIsO.jpg",
  2763: "f8/04/2763_9OlXd.jpg",
  3582: "9d/68/3582_JKSTo.jpg",
  16866: "18/0a/16866_8eTsv.jpg",
  24401: "64/60/24401_zR388.jpg",
  29218: "33/77/29218_pIPiJ.jpg",
  46627: "f5/a6/46627_auazl.jpg",
  49871: "ab/e1/49871_O20O6.jpg",
  52828: "98/ad/52828_kNZSy.jpg",
  52967: "30/a4/52967_TIa4v.jpg",
  52968: "ff/12/52968_888w4.jpg",
  119650: "a9/9b/119650_kz073.jpg",
  142869: "47/d8/142869_d50ib.jpg",
  144257: "99/2c/144257_7kmK7.jpg",
  167732: "15/9e/167732_hAT3L.jpg",
  168463: "69/95/168463_PPqs4.jpg",
  188576: "14/2b/188576_faaVX.jpg",
  208146: "51/85/208146_E98lC.jpg",
  208886: "7e/00/208886_izuOB.jpg",
  210895: "24/21/210895_52GFU.jpg",
  216582: "1b/8a/216582_Wi51p.jpg",
  220773: "2c/26/220773_Pi9kp.jpg",
  229515: "38/db/229515_g2mT0.jpg",
  238887: "0f/f8/238887_mohh8.jpg",
  247867: "4d/91/247867_NoNn8.jpg",
  248914: "91/c7/248914_E5uXx.jpg",
  249726: "14/05/249726_FfOfs.jpg",
  283293: "f3/b3/283293_5DV56.jpg",
  291344: "26/e6/291344_GzswI.jpg",
  296774: "0c/a0/296774_aIubC.jpg",
  299096: "14/5f/299096_yz7si.jpg",
  303186: "35/b2/303186_oE6Bo.jpg",
  306051: "20/6e/306051_3ghHH.jpg",
  306812: "8d/e8/306812_3NMbn.jpg",
  310763: "10/02/310763_uV0IL.jpg",
  311891: "1d/5d/311891_2iIAu.jpg",
  313379: "47/9d/313379_L84Gd.jpg",
  313666: "46/26/313666_s9IY7.jpg",
  324865: "69/b6/324865_2H7hh.jpg",
  326654: "51/76/326654_ogZG5.jpg",
  345272: "57/58/345272_QiAzS.jpg",
  355555: "0c/26/355555_F43Vf.jpg",
  363195: "bf/86/363195_NClM6.jpg",
  379566: "02/6f/379566_AxxZ5.jpg",
  392095: "0d/3a/392095_nNBn9.jpg",
  408902: "6a/e8/408902_mGvKN.jpg",
  420196: "72/87/420196_bb9aB.jpg",
  421548: "34/57/421548_whwPa.jpg",
  439204: "a6/61/439204_6by06.jpg",
  443706: "bd/33/443706_6IvL3.jpg",
  444392: "07/c9/444392_yW265.jpg",
  448682: "ff/61/448682_r6d8H.jpg",
  457341: "33/78/457341_O3fdC.jpg",
  462200: "f2/a9/462200_sK1kr.jpg",
  474806: "5b/04/474806_QhJMK.jpg",
  496783: "35/94/496783_4qb7n.jpg",
  499988: "5b/db/499988_VXlw3.jpg",
  513882: "e4/aa/513882_AaakA.jpg"
};
