// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.20.843
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  1488: "8a/14/1488_zY592.jpg",
  26659: "71/5b/26659_k3v7g.jpg",
  34225: "0f/eb/34225_00J8x.jpg",
  42232: "a0/1e/42232_ZkW8w.jpg",
  47162: "ee/b0/47162_1XP1P.jpg",
  49043: "07/c2/49043_jp.jpg",
  118165: "0f/2f/118165_f0m8c.jpg",
  148236: "f9/05/148236_mqcIn.jpg",
  168457: "23/86/168457_47Jy5.jpg",
  202557: "89/6a/202557_gpOOR.jpg",
  210505: "41/4f/210505_1G4D9.jpg",
  214685: "fb/6c/214685_6ZHlS.jpg",
  236467: "a0/0a/236467_mTCcO.jpg",
  236926: "5e/c5/236926_1mmH4.jpg",
  238887: "0f/f8/238887_mohh8.jpg",
  241855: "50/3d/241855_9Ykgw.jpg",
  254885: "88/28/254885_e8VFK.jpg",
  262151: "d5/cc/262151_54jjR.jpg",
  265151: "c0/1f/265151_5F7Vf.jpg",
  266652: "fe/66/266652_u67JU.jpg",
  268279: "85/aa/268279_9rynK.jpg",
  273292: "86/7f/273292_rdjj2.jpg",
  277134: "d1/65/277134_yrhyr.jpg",
  277772: "88/e8/277772_2xHDs.jpg",
  279871: "92/3d/279871_4a7Zi.jpg",
  286397: "8f/f2/286397_tE1bo.jpg",
  288048: "fa/93/288048_752wZ.jpg",
  288509: "ec/77/288509_wHam9.jpg",
  288543: "f6/88/288543_bAhk4.jpg",
  289325: "e7/57/289325_uJB3K.jpg",
  292902: "78/8a/292902_97Zf3.jpg",
  295217: "31/37/295217_GQKWX.jpg",
  296457: "00/e1/296457_Y0CR0.jpg",
  303246: "ce/c1/303246_lClcC.jpg",
  303347: "ae/42/303347_6sjPl.jpg",
  307607: "e4/5b/307607_zUD7N.jpg",
  311289: "e0/cc/311289_s0jJJ.jpg",
  312161: "76/98/312161_xA5gs.jpg",
  312483: "4e/69/312483_X0HDm.jpg",
  313020: "f3/56/313020_31dQw.jpg",
  317612: "84/b7/317612_889y3.jpg",
  320214: "c9/b8/320214_33e5P.jpg",
  326724: "9e/57/326724_ykiIp.jpg",
  349842: "da/4a/349842_u5ug7.jpg",
  351918: "9b/83/351918_Skukq.jpg",
  354986: "9d/d4/354986_IL6cK.jpg",
  355057: "4f/ef/355057_aHZAz.jpg",
  375683: "31/b6/375683_zy46P.jpg",
  377765: "69/0f/377765_hkkJw.jpg",
  384494: "f4/12/384494_pr2pv.jpg",
  384500: "3c/5e/384500_EDeX9.jpg",
  402045: "61/0b/402045_C10Ue.jpg",
  405395: "7f/06/405395_mkLMh.jpg",
  406468: "be/f7/406468_OVJrP.jpg",
  422014: "39/f2/422014_dSfmy.jpg",
  423295: "e8/bc/423295_cU84S.jpg",
  429824: "a7/7a/429824_6e5ZP.jpg",
  432940: "dc/e4/432940_Bb0Kx.jpg",
  436748: "3e/47/436748_QIh5e.jpg",
  439530: "54/05/439530_Madf8.jpg",
  462533: "de/6c/462533_0IF5L.jpg",
  466653: "57/6d/466653_JUAO1.jpg",
  469394: "d5/5c/469394_c1Iz6.jpg",
  486165: "71/e5/486165_CtccO.jpg",
  487470: "51/05/487470_ff8l8.jpg",
  509336: "de/9b/509336_4r0r4.jpg"
};
