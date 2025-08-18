// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.08.18.73
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  24410: "fd/53/24410_t47bb.jpg",
  26405: "96/f4/26405_45zQ2.jpg",
  64252: "c8/6b/64252_ee9Jy.jpg",
  80746: "d6/e7/80746_xu6Sw.jpg",
  181993: "aa/55/181993_2uEQN.jpg",
  189789: "a4/94/189789_z99tW.jpg",
  196774: "2b/8b/196774_h4kth.jpg",
  203782: "0f/01/203782_d3Zyx.jpg",
  204748: "79/fc/204748_T8xGw.jpg",
  217598: "29/d6/217598_HJ7jJ.jpg",
  218743: "b4/a0/218743_LLrlY.jpg",
  237704: "09/71/237704_h6xb5.jpg",
  238887: "0f/f8/238887_mohh8.jpg",
  239442: "7f/82/239442_umo85.jpg",
  241547: "c9/7e/241547_P0926.jpg",
  241987: "17/28/241987_1UOhv.jpg",
  250037: "26/d1/250037_klUi4.jpg",
  269903: "96/8b/269903_VgPVf.jpg",
  271065: "ca/31/271065_R8iDA.jpg",
  274307: "3f/a0/274307_I8A12.jpg",
  279507: "ff/ed/279507_6M5zm.jpg",
  286110: "ae/01/286110_7u4qn.jpg",
  289325: "e7/57/289325_uJB3K.jpg",
  291333: "ef/e7/291333_CQiz4.jpg",
  294766: "b9/55/294766_5Z3D2.jpg",
  300101: "87/7d/300101_uaMvu.jpg",
  300112: "e8/26/300112_T6l0O.jpg",
  310707: "b8/ce/310707_h5jjW.jpg",
  310983: "04/51/310983_5KIQs.jpg",
  315394: "46/3c/315394_zpnBN.jpg",
  317314: "fc/22/317314_6pC1z.jpg",
  323829: "eb/6d/323829_8fUKC.jpg",
  329858: "15/60/329858_iJR27.jpg",
  334753: "3b/69/334753_aRslA.jpg",
  336906: "48/27/336906_jWhm2.jpg",
  373629: "f6/ad/373629_7G2y2.jpg",
  392295: "63/a5/392295_AmibU.jpg",
  397777: "43/f8/397777_953G5.jpg",
  402044: "1f/82/402044_SN8eL.jpg",
  403551: "ba/38/403551_9397n.jpg",
  419004: "c0/4e/419004_U5jHT.jpg",
  425931: "0f/fd/425931_pwL0x.jpg",
  428285: "8c/22/428285_nRR0d.jpg",
  456679: "55/c5/456679_90Z7S.jpg",
  463270: "e0/19/463270_1t0tK.jpg",
  465813: "e5/f0/465813_Zve26.jpg",
  466852: "e5/33/466852_A1Smd.jpg",
  470335: "e1/41/470335_Q6Zlk.jpg",
  485015: "fe/a2/485015_46tB6.jpg",
  486061: "64/ba/486061_9l3EY.jpg",
  490057: "68/ce/490057_W23YW.jpg",
  499874: "f0/b1/499874_V0cL0.jpg",
  502328: "59/3c/502328_CO6R6.jpg",
  502404: "e4/24/502404_htpMV.jpg",
  513795: "08/e3/513795_b4ntL.jpg",
  524576: "5e/79/524576_95Cql.jpg",
  537130: "94/96/537130_7Y6VL.jpg",
  545083: "c8/09/545083_NABP0.jpg"
};
