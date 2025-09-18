// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.09.18.81
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  565: "cb/cb/565_pWWbW.jpg",
  13982: "6e/a1/13982_FXZ6Z.jpg",
  26942: "fe/69/26942_2z4zV.jpg",
  32290: "61/35/32290_bnxUH.jpg",
  40064: "b3/57/40064_YSvYS.jpg",
  40643: "74/18/40643_zrCWC.jpg",
  41633: "05/9b/41633_jp.jpg",
  66438: "74/de/66438_jp.jpg",
  73892: "98/03/73892_jp.jpg",
  89062: "03/69/89062_ddEjT.jpg",
  115721: "0b/80/115721_66269.jpg",
  128839: "fc/53/128839_xT72m.jpg",
  148464: "59/56/148464_E2q2d.jpg",
  180060: "85/dc/180060_oaza9.jpg",
  184894: "bd/11/184894_qcyyQ.jpg",
  217598: "29/d6/217598_HJ7jJ.jpg",
  219305: "fc/0b/219305_jp.jpg",
  237342: "1b/d7/237342_72pgM.jpg",
  239442: "7f/82/239442_umo85.jpg",
  242093: "0e/19/242093_h2zkK.jpg",
  245920: "d2/4f/245920_44J8f.jpg",
  246317: "30/b2/246317_ZVn1x.jpg",
  259667: "c5/6d/259667_nf0fY.jpg",
  262151: "d5/cc/262151_54jjR.jpg",
  264797: "36/4d/264797_rx888.jpg",
  266498: "f1/5b/266498_3188F.jpg",
  271719: "5b/f3/271719_dqVGQ.jpg",
  282109: "98/8f/282109_qRVFJ.jpg",
  287723: "8f/13/287723_esWpN.jpg",
  293358: "88/1f/293358_700Z0.jpg",
  294762: "31/6e/294762_pPqzK.jpg",
  294766: "b9/55/294766_5Z3D2.jpg",
  299227: "4e/ed/299227_V0RyP.jpg",
  309385: "84/11/309385_dLsuy.jpg",
  310827: "36/4c/310827_GrhNy.jpg",
  311106: "0f/ce/311106_8wXBx.jpg",
  313766: "56/c9/313766_JU635.jpg",
  314332: "7d/df/314332_3l3IA.jpg",
  319309: "87/6a/319309_0Uk8k.jpg",
  336442: "54/12/336442_NS2Xt.jpg",
  344647: "38/df/344647_0xf1j.jpg",
  354775: "d2/88/354775_UY9PX.jpg",
  375316: "b5/16/375316_7Lu75.jpg",
  386098: "cc/a3/386098_Hx0Qt.jpg",
  394485: "76/47/394485_hv8HK.jpg",
  401972: "e4/9d/401972_UHovh.jpg",
  427473: "9f/c7/427473_v7HG3.jpg",
  431560: "be/e1/431560_5wtZd.jpg",
  445721: "ac/2d/445721_7QW71.jpg",
  455423: "c2/4d/455423_HJ0qF.jpg",
  460819: "f0/ce/460819_u5H0Z.jpg",
  464609: "5d/ea/464609_ZCRGd.jpg",
  469081: "98/85/469081_JJOJi.jpg",
  483044: "3c/63/483044_pdgpp.jpg",
  492705: "29/48/492705_VImvA.jpg",
  496527: "fa/a8/496527_az9u2.jpg",
  511869: "f1/9b/511869_n5J5i.jpg",
  524576: "5e/79/524576_95Cql.jpg",
  536972: "83/3b/536972_bxxnZ.jpg"
};
