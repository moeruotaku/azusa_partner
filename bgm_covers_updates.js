// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.11.24.37
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  3600: "8d/76/3600_01Bfb.jpg",
  6133: "c5/df/6133_B8T1B.jpg",
  16324: "1c/7a/16324_ZO254.jpg",
  19333: "e7/89/19333_3eeYY.jpg",
  53399: "14/04/53399_VX6I6.jpg",
  54168: "77/fb/54168_J5XmG.jpg",
  54236: "35/d7/54236_d2r2F.jpg",
  60285: "74/ad/60285_92qq2.jpg",
  66843: "27/50/66843_BB5od.jpg",
  69772: "ab/85/69772_7Lk8O.jpg",
  75094: "35/c0/75094_B5o6K.jpg",
  78670: "e5/dd/78670_zC705.jpg",
  80141: "e6/9d/80141_ZrDtg.jpg",
  81127: "70/34/81127_AKuP8.jpg",
  98114: "66/13/98114_I3izw.jpg",
  110731: "76/a6/110731_NVc0D.jpg",
  125225: "e9/38/125225_jp.jpg",
  143597: "23/fb/143597_zPM0M.jpg",
  149421: "7a/3a/149421_0qJTN.jpg",
  153560: "fa/af/153560_fhCF5.jpg",
  160949: "97/8c/160949_KAK5t.jpg",
  163879: "1e/a2/163879_MOsXl.jpg",
  177064: "90/b3/177064_Cckt7.jpg",
  183647: "bf/6a/183647_aPagG.jpg",
  211626: "8f/33/211626_BHY8w.jpg",
  217598: "29/d6/217598_HJ7jJ.jpg",
  241855: "50/3d/241855_9Ykgw.jpg",
  259816: "1a/a6/259816_06XbO.jpg",
  270199: "f0/3f/270199_10udD.jpg",
  285054: "7a/ec/285054_GuQL6.jpg",
  287385: "d5/8a/287385_xmetF.jpg",
  288315: "f8/90/288315_zXJ2m.jpg",
  289342: "c2/38/289342_8CnzY.jpg",
  297267: "44/e3/297267_5euea.jpg",
  299657: "cc/4f/299657_mCla6.jpg",
  306888: "6a/fe/306888_dCbAg.jpg",
  341418: "af/f8/341418_zM4W7.jpg",
  341648: "c8/c0/341648_Yw3wv.jpg",
  360070: "38/11/360070_4iIuo.jpg",
  364863: "af/18/364863_iHxIj.jpg",
  372172: "4e/95/372172_mCH2j.jpg",
  375683: "31/b6/375683_zy46P.jpg",
  401449: "23/ff/401449_55fbb.jpg",
  402824: "0a/59/402824_7wXF7.jpg",
  403205: "ae/d4/403205_DbD9V.jpg",
  409402: "f4/07/409402_1Zxjb.jpg",
  412013: "e9/64/412013_BffB3.jpg",
  421548: "34/57/421548_whwPa.jpg",
  432211: "9f/40/432211_luvCk.jpg",
  435772: "66/63/435772_U5m4m.jpg",
  439204: "a6/61/439204_6by06.jpg",
  453358: "da/58/453358_03X30.jpg",
  454851: "a8/15/454851_f1aIZ.jpg",
  456375: "7f/b3/456375_nQY1K.jpg",
  501181: "d2/43/501181_Zuh9Y.jpg",
  508307: "b9/ff/508307_4w4kc.jpg"
};
