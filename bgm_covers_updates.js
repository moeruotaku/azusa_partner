// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.09.14.58
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
  32290: "61/35/32290_bnxUH.jpg",
  40064: "b3/57/40064_YSvYS.jpg",
  40643: "74/18/40643_zrCWC.jpg",
  66438: "74/de/66438_jp.jpg",
  89062: "03/69/89062_ddEjT.jpg",
  115721: "0b/80/115721_66269.jpg",
  128839: "fc/53/128839_xT72m.jpg",
  180060: "85/dc/180060_oaza9.jpg",
  184894: "bd/11/184894_qcyyQ.jpg",
  187083: "0a/88/187083_lJaMF.jpg",
  207883: "a6/85/207883_qh8ij.jpg",
  219305: "fc/0b/219305_jp.jpg",
  228467: "45/f8/228467_p7xmd.jpg",
  239442: "7f/82/239442_umo85.jpg",
  242093: "0e/19/242093_h2zkK.jpg",
  245920: "d2/4f/245920_44J8f.jpg",
  246317: "30/b2/246317_ZVn1x.jpg",
  259667: "c5/6d/259667_nf0fY.jpg",
  262151: "d5/cc/262151_54jjR.jpg",
  264797: "36/4d/264797_rx888.jpg",
  266498: "f1/5b/266498_3188F.jpg",
  268279: "85/aa/268279_9rynK.jpg",
  271719: "5b/f3/271719_dqVGQ.jpg",
  282109: "98/8f/282109_qRVFJ.jpg",
  292572: "b5/1f/292572_6ZZ3l.jpg",
  293358: "88/1f/293358_700Z0.jpg",
  294762: "31/6e/294762_pPqzK.jpg",
  294766: "b9/55/294766_5Z3D2.jpg",
  299227: "4e/ed/299227_V0RyP.jpg",
  304390: "24/0f/304390_8M6rG.jpg",
  309385: "84/11/309385_dLsuy.jpg",
  311106: "0f/ce/311106_8wXBx.jpg",
  314332: "7d/df/314332_3l3IA.jpg",
  324865: "69/b6/324865_2H7hh.jpg",
  327316: "b4/b0/327316_A310Q.jpg",
  336442: "54/12/336442_NS2Xt.jpg",
  354775: "d2/88/354775_UY9PX.jpg",
  379566: "02/6f/379566_AxxZ5.jpg",
  394485: "76/47/394485_hv8HK.jpg",
  401972: "e4/9d/401972_UHovh.jpg",
  402972: "de/bc/402972_ZwAr6.jpg",
  416278: "92/f0/416278_V13Pv.jpg",
  422014: "39/f2/422014_dSfmy.jpg",
  445721: "ac/2d/445721_7QW71.jpg",
  449427: "99/98/449427_9kFYx.jpg",
  455423: "c2/4d/455423_HJ0qF.jpg",
  459368: "73/ba/459368_k3iHI.jpg",
  464609: "5d/ea/464609_ZCRGd.jpg",
  467935: "9f/17/467935_VwVwW.jpg",
  471368: "42/dd/471368_dlnVM.jpg",
  492705: "29/48/492705_VImvA.jpg",
  500429: "25/ad/500429_ZOm8q.jpg",
  501478: "50/0d/501478_hTH0S.jpg",
  506788: "67/86/506788_ASZAV.jpg",
  527456: "27/91/527456_4F34p.jpg",
  536972: "83/3b/536972_bxxnZ.jpg",
  558742: "55/96/558742_5dz75.jpg"
};
