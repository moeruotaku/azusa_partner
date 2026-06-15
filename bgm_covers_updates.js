// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.06.15.71
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
  43562: "db/9c/43562_TKzhV.jpg",
  44591: "1e/51/44591_aPQDQ.jpg",
  48090: "1e/90/48090_sESKT.jpg",
  65458: "4d/4d/65458_BpeYr.jpg",
  66368: "e6/a0/66368_9uy09.jpg",
  70861: "c1/44/70861_XPeB7.jpg",
  80730: "9f/d3/80730_sL4mn.jpg",
  94009: "ec/a5/94009_BF8J7.jpg",
  100392: "8c/96/100392_52255.jpg",
  128839: "fc/53/128839_xT72m.jpg",
  140704: "1e/dd/140704_RI4zY.jpg",
  143791: "ac/d6/143791_LL4V9.jpg",
  153175: "f7/08/153175_ZvKxO.jpg",
  161375: "97/51/161375_YG3sq.jpg",
  170746: "ed/bf/170746_cu64U.jpg",
  195692: "7a/92/195692_YtUMe.jpg",
  210895: "24/21/210895_52GFU.jpg",
  221948: "3f/db/221948_QS022.jpg",
  253441: "b8/7f/253441_FG1Hi.jpg",
  266498: "f1/5b/266498_3188F.jpg",
  272351: "dd/3b/272351_l07i8.jpg",
  288315: "f8/90/288315_zXJ2m.jpg",
  298455: "51/9e/298455_05JE0.jpg",
  298752: "62/a0/298752_A44F0.jpg",
  299228: "f3/1a/299228_rn18G.jpg",
  304293: "0f/7a/304293_4w4hN.jpg",
  305824: "41/71/305824_n1ESo.jpg",
  310827: "36/4c/310827_GrhNy.jpg",
  320180: "f2/0d/320180_UU7db.jpg",
  326285: "3a/03/326285_rQAhA.jpg",
  333829: "bb/44/333829_oW3F8.jpg",
  340384: "e4/67/340384_b8FUA.jpg",
  348344: "70/a4/348344_0cccn.jpg",
  354383: "b8/98/354383_ryhBI.jpg",
  357988: "35/d4/357988_6FN51.jpg",
  373830: "8a/4e/373830_b4A5x.jpg",
  374355: "64/dc/374355_KoDKO.jpg",
  377013: "78/86/377013_1W4tO.jpg",
  386666: "19/87/386666_DTttZ.jpg",
  390286: "8d/e0/390286_KU67x.jpg",
  390287: "53/7e/390287_hFmfO.jpg",
  391572: "18/d8/391572_DK5tZ.jpg",
  392893: "41/d5/392893_sdjTd.jpg",
  398601: "08/49/398601_6O83H.jpg",
  402768: "01/9b/402768_299F7.jpg",
  403581: "1b/cb/403581_coNZ0.jpg",
  405000: "48/b7/405000_lnwn5.jpg",
  406476: "9c/79/406476_fP6nf.jpg",
  417220: "f5/e3/417220_td6el.jpg",
  417234: "ec/24/417234_V3X3Z.jpg",
  440076: "e5/86/440076_cZ1oR.jpg",
  444076: "39/28/444076_pZcAf.jpg",
  445751: "a2/f8/445751_fmj8h.jpg",
  448453: "41/bf/448453_A1j1j.jpg",
  448626: "6e/62/448626_7lXrn.jpg",
  461564: "28/ee/461564_w4R2W.jpg",
  471549: "00/85/471549_nEWAs.jpg",
  479588: "a4/d5/479588_7Wez7.jpg",
  482298: "84/61/482298_66U6u.jpg",
  490753: "7d/81/490753_QI0Yq.jpg",
  499667: "47/ff/499667_P7Uqv.jpg",
  531577: "0e/c1/531577_U0zAm.jpg",
  536292: "64/cc/536292_75Cii.jpg",
  543455: "33/00/543455_KTt7A.jpg",
  546321: "db/24/546321_nADiJ.jpg",
  553472: "fd/9a/553472_DCEa8.jpg",
  601268: "bc/67/601268_KcKeE.jpg",
  617946: "41/79/617946_kqPp1.jpg"
};
