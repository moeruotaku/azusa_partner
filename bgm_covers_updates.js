// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.06.17.81
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  31731: "5e/c1/31731_39ZCx.jpg",
  40643: "74/18/40643_zrCWC.jpg",
  44591: "1e/51/44591_aPQDQ.jpg",
  48090: "1e/90/48090_sESKT.jpg",
  65458: "4d/4d/65458_BpeYr.jpg",
  70861: "c1/44/70861_XPeB7.jpg",
  94009: "ec/a5/94009_BF8J7.jpg",
  100392: "8c/96/100392_52255.jpg",
  128839: "fc/53/128839_xT72m.jpg",
  140704: "1e/dd/140704_RI4zY.jpg",
  143791: "ac/d6/143791_LL4V9.jpg",
  161375: "97/51/161375_YG3sq.jpg",
  170746: "ed/bf/170746_cu64U.jpg",
  195692: "7a/92/195692_YtUMe.jpg",
  210895: "24/21/210895_52GFU.jpg",
  211728: "d9/15/211728_WEL34.jpg",
  221948: "3f/db/221948_QS022.jpg",
  231908: "c8/10/231908_5TYTj.jpg",
  266498: "f1/5b/266498_3188F.jpg",
  272351: "dd/3b/272351_l07i8.jpg",
  282324: "cb/a9/282324_l2i2l.jpg",
  288315: "f8/90/288315_zXJ2m.jpg",
  298752: "62/a0/298752_A44F0.jpg",
  299228: "f3/1a/299228_rn18G.jpg",
  305824: "41/71/305824_n1ESo.jpg",
  310827: "36/4c/310827_GrhNy.jpg",
  313877: "dc/1d/313877_d7Hi7.jpg",
  320180: "f2/0d/320180_UU7db.jpg",
  352392: "86/2e/352392_kFt31.jpg",
  354383: "b8/98/354383_ryhBI.jpg",
  357988: "35/d4/357988_6FN51.jpg",
  373830: "8a/4e/373830_b4A5x.jpg",
  374355: "64/dc/374355_KoDKO.jpg",
  377013: "78/86/377013_1W4tO.jpg",
  382508: "5a/5c/382508_jse2K.jpg",
  386666: "19/87/386666_DTttZ.jpg",
  390286: "8d/e0/390286_KU67x.jpg",
  390287: "53/7e/390287_hFmfO.jpg",
  391572: "18/d8/391572_DK5tZ.jpg",
  392893: "41/d5/392893_sdjTd.jpg",
  403581: "1b/cb/403581_coNZ0.jpg",
  405000: "48/b7/405000_lnwn5.jpg",
  417220: "f5/e3/417220_td6el.jpg",
  417234: "ec/24/417234_V3X3Z.jpg",
  427475: "66/95/427475_880Te.jpg",
  440076: "e5/86/440076_cZ1oR.jpg",
  444076: "39/28/444076_pZcAf.jpg",
  445751: "a2/f8/445751_fmj8h.jpg",
  448453: "41/bf/448453_A1j1j.jpg",
  448626: "6e/62/448626_7lXrn.jpg",
  462719: "94/b4/462719_x0bE3.jpg",
  471549: "00/85/471549_nEWAs.jpg",
  482298: "84/61/482298_66U6u.jpg",
  531577: "0e/c1/531577_U0zAm.jpg",
  543455: "33/00/543455_KTt7A.jpg",
  545047: "6b/1c/545047_HAfWH.jpg",
  601268: "bc/67/601268_KcKeE.jpg",
  617946: "41/79/617946_kqPp1.jpg"
};
