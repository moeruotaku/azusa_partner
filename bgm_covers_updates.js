// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.3.12.701
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  232: "be/83/232_wpE8G.jpg",
  1125: "c2/10/1125_oWcLw.jpg",
  1126: "ff/ee/1126_wtoHO.jpg",
  4823: "0f/08/4823_vu3z9.jpg",
  6580: "1e/f0/6580_6uvto.jpg",
  22697: "fa/28/22697_fV4FV.jpg",
  24207: "ef/1f/24207_4wvBT.jpg",
  34179: "1e/1e/34179_a2wsW.jpg",
  39035: "c5/cd/39035_DG8AY.jpg",
  39332: "f7/28/39332_Cvjgl.jpg",
  40569: "d4/d3/40569_Jlqc8.jpg",
  49111: "19/b8/49111_oowGe.jpg",
  54887: "1c/df/54887_19jYY.jpg",
  80400: "70/c8/80400_WqKw9.jpg",
  103031: "e4/bb/103031_ny7I7.jpg",
  116464: "7a/4d/116464_L00pW.jpg",
  129028: "e5/05/129028_5t99Z.jpg",
  144564: "70/b5/144564_J6zag.jpg",
  214607: "a1/82/214607_a6mZF.jpg",
  220090: "76/f2/220090_jp.jpg",
  235036: "3d/3a/235036_915DO.jpg",
  238996: "25/4b/238996_iEeEx.jpg",
  271702: "d8/7d/271702_0D3WO.jpg",
  272351: "dd/3b/272351_l07i8.jpg",
  277772: "88/e8/277772_2xHDs.jpg",
  279871: "92/3d/279871_4a7Zi.jpg",
  287720: "62/ad/287720_Y88WZ.jpg",
  292572: "b5/1f/292572_6ZZ3l.jpg",
  293355: "a0/7e/293355_d2ZBK.jpg",
  298467: "bd/9d/298467_EEcEb.jpg",
  300270: "ec/bf/300270_M30S6.jpg",
  302831: "ca/82/302831_8XZAx.jpg",
  303186: "35/b2/303186_oE6Bo.jpg",
  304293: "0f/7a/304293_4w4hN.jpg",
  309218: "6e/d5/309218_MGfC8.jpg",
  316252: "19/4d/316252_ZvHav.jpg",
  319309: "87/6a/319309_0Uk8k.jpg",
  323196: "33/64/323196_DKgp3.jpg",
  331225: "65/60/331225_NAwBE.jpg",
  336604: "c9/d9/336604_gXegp.jpg",
  341886: "52/2f/341886_CLlwZ.jpg",
  342573: "4f/84/342573_mP7n8.jpg",
  361987: "a6/f7/361987_dvP0c.jpg",
  364722: "83/56/364722_OX90o.jpg",
  368650: "23/a2/368650_L2Zad.jpg",
  370560: "0d/e8/370560_sgCDF.jpg",
  376352: "3f/43/376352_17LTr.jpg",
  379172: "c4/5d/379172_Qqe5c.jpg",
  380653: "ed/b3/380653_FaNAP.jpg",
  381400: "31/06/381400_8xC8Z.jpg",
  382269: "a1/d8/382269_5rvJX.jpg",
  390716: "21/8a/390716_MwLmk.jpg",
  397088: "b9/46/397088_0EtZy.jpg",
  397789: "65/26/397789_rSC6i.jpg",
  399753: "d4/00/399753_Giz8F.jpg",
  401601: "68/d1/401601_vah8h.jpg",
  402768: "01/9b/402768_299F7.jpg",
  405739: "b0/f9/405739_9sE1T.jpg",
  410317: "7a/91/410317_fqTEC.jpg",
  416714: "2f/7d/416714_hSIhm.jpg",
  418615: "4e/b5/418615_au2Cu.jpg",
  420815: "26/d7/420815_CPOop.jpg",
  440060: "78/84/440060_4453a.jpg",
  442535: "c8/97/442535_8KEzG.jpg",
  453901: "0a/ad/453901_TyxyW.jpg",
  462533: "de/6c/462533_0IF5L.jpg",
  466924: "0e/98/466924_7ICjM.jpg",
  470276: "87/aa/470276_UjXuf.jpg",
  539883: "d7/a3/539883_L4RKF.jpg"
};
