// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.12.21.76
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  1594: "0e/bc/1594_v2794.jpg",
  40064: "b3/57/40064_YSvYS.jpg",
  45278: "f2/9d/45278_CQqzE.jpg",
  48816: "fc/80/48816_97cc1.jpg",
  66368: "e6/a0/66368_9uy09.jpg",
  70196: "7a/ba/70196_97109.jpg",
  84495: "42/b9/84495_96nzh.jpg",
  90813: "b5/6f/90813_F2WEE.jpg",
  134064: "92/12/134064_qFg8g.jpg",
  148464: "59/56/148464_E2q2d.jpg",
  182434: "05/13/182434_PF45n.jpg",
  187871: "e2/79/187871_i33v3.jpg",
  217552: "45/80/217552_31zsp.jpg",
  220792: "e7/88/220792_ZpDgx.jpg",
  227220: "b9/2e/227220_oKeqz.jpg",
  230297: "4a/bc/230297_nHcQh.jpg",
  234799: "37/81/234799_v8GWv.jpg",
  236926: "5e/c5/236926_1mmH4.jpg",
  240256: "0b/46/240256_4wI91.jpg",
  241491: "8e/36/241491_ak8z0.jpg",
  248086: "ec/b2/248086_3IrO5.jpg",
  262161: "3b/6e/262161_in2b6.jpg",
  266498: "f1/5b/266498_3188F.jpg",
  273389: "3f/46/273389_K2t28.jpg",
  285882: "a1/f1/285882_XFchu.jpg",
  292589: "48/aa/292589_7XfV4.jpg",
  302980: "7c/a9/302980_6PFgW.jpg",
  305429: "a1/bd/305429_axzF3.jpg",
  306212: "93/0b/306212_abazo.jpg",
  311891: "1d/5d/311891_2iIAu.jpg",
  316635: "c7/f6/316635_n4d42.jpg",
  320981: "76/61/320981_Yn31S.jpg",
  322890: "42/df/322890_fThjv.jpg",
  326654: "51/76/326654_ogZG5.jpg",
  336906: "48/27/336906_jWhm2.jpg",
  340296: "64/34/340296_HgvIg.jpg",
  347553: "93/53/347553_5JHov.jpg",
  355555: "0c/26/355555_F43Vf.jpg",
  384494: "f4/12/384494_pr2pv.jpg",
  385211: "61/d9/385211_ZLbQS.jpg",
  385970: "d6/84/385970_9Ny4e.jpg",
  406424: "47/0e/406424_QD777.jpg",
  408753: "f5/9b/408753_T2kg4.jpg",
  409281: "b0/ea/409281_GtgG7.jpg",
  409402: "f4/07/409402_1Zxjb.jpg",
  413366: "43/42/413366_tSuU2.jpg",
  414664: "02/1d/414664_Rq7ou.jpg",
  453555: "2a/37/453555_7AaAH.jpg",
  466654: "9a/46/466654_suBzO.jpg",
  467924: "67/cc/467924_8igOH.jpg",
  469407: "89/8c/469407_obzYL.jpg",
  487772: "11/07/487772_M0ZiI.jpg",
  502328: "59/3c/502328_CO6R6.jpg",
  506124: "7f/98/506124_kVCil.jpg",
  509947: "8f/03/509947_yEeWw.jpg",
  509955: "92/31/509955_5gPr2.jpg",
  510108: "77/35/510108_5svMh.jpg",
  515527: "a3/1b/515527_T8RR9.jpg",
  522187: "1a/27/522187_HvQ16.jpg",
  522390: "9e/f5/522390_m5555.jpg",
  545934: "ff/90/545934_oo5P7.jpg",
  547340: "62/1b/547340_ZQ8TX.jpg",
  569608: "dc/92/569608_pFB9q.jpg",
  570429: "24/f5/570429_rYwcy.jpg"
};
