// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.03.14.49
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  4823: "0f/08/4823_vu3z9.jpg",
  22697: "fa/28/22697_fV4FV.jpg",
  24207: "ef/1f/24207_4wvBT.jpg",
  34179: "1e/1e/34179_a2wsW.jpg",
  39035: "c5/cd/39035_DG8AY.jpg",
  40569: "d4/d3/40569_Jlqc8.jpg",
  49111: "19/b8/49111_oowGe.jpg",
  55911: "6f/a2/55911_n7jf7.jpg",
  103031: "e4/bb/103031_ny7I7.jpg",
  116464: "7a/4d/116464_L00pW.jpg",
  129028: "e5/05/129028_5t99Z.jpg",
  235036: "3d/3a/235036_915DO.jpg",
  237342: "1b/d7/237342_72pgM.jpg",
  238996: "25/4b/238996_iEeEx.jpg",
  241026: "5b/8a/241026_Jj5Jl.jpg",
  271702: "d8/7d/271702_0D3WO.jpg",
  272351: "dd/3b/272351_l07i8.jpg",
  277772: "88/e8/277772_2xHDs.jpg",
  287134: "d0/69/287134_uJ66S.jpg",
  292572: "b5/1f/292572_6ZZ3l.jpg",
  293355: "a0/7e/293355_d2ZBK.jpg",
  298467: "bd/9d/298467_EEcEb.jpg",
  300270: "ec/bf/300270_M30S6.jpg",
  302831: "ca/82/302831_8XZAx.jpg",
  303186: "35/b2/303186_oE6Bo.jpg",
  304293: "0f/7a/304293_4w4hN.jpg",
  306906: "ab/3a/306906_apuf1.jpg",
  309218: "6e/d5/309218_MGfC8.jpg",
  312861: "5a/94/312861_X11mZ.jpg",
  316252: "19/4d/316252_ZvHav.jpg",
  319309: "87/6a/319309_0Uk8k.jpg",
  323040: "22/b9/323040_UFK2I.jpg",
  323196: "33/64/323196_DKgp3.jpg",
  327737: "b2/ad/327737_PiHZm.jpg",
  331225: "65/60/331225_NAwBE.jpg",
  336604: "c9/d9/336604_gXegp.jpg",
  342573: "4f/84/342573_mP7n8.jpg",
  355555: "0c/26/355555_F43Vf.jpg",
  361987: "a6/f7/361987_dvP0c.jpg",
  364722: "83/56/364722_OX90o.jpg",
  368650: "23/a2/368650_L2Zad.jpg",
  370560: "0d/e8/370560_sgCDF.jpg",
  379172: "c4/5d/379172_Qqe5c.jpg",
  382269: "a1/d8/382269_5rvJX.jpg",
  390716: "21/8a/390716_MwLmk.jpg",
  397088: "b9/46/397088_0EtZy.jpg",
  401601: "68/d1/401601_vah8h.jpg",
  401823: "b4/cd/401823_fIg2K.jpg",
  405739: "b0/f9/405739_9sE1T.jpg",
  410317: "7a/91/410317_fqTEC.jpg",
  414171: "aa/e5/414171_JmTIx.jpg",
  416714: "2f/7d/416714_hSIhm.jpg",
  418615: "4e/b5/418615_au2Cu.jpg",
  420815: "26/d7/420815_CPOop.jpg",
  437534: "01/bb/437534_4Arr5.jpg",
  440060: "78/84/440060_4453a.jpg",
  442535: "c8/97/442535_8KEzG.jpg",
  453901: "0a/ad/453901_TyxyW.jpg",
  453951: "13/08/453951_iPIx5.jpg",
  466924: "0e/98/466924_7ICjM.jpg",
  470276: "87/aa/470276_UjXuf.jpg",
  486611: "f7/f1/486611_whZzr.jpg",
  539883: "d7/a3/539883_L4RKF.jpg"
};
