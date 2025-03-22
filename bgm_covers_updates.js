// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.03.22.93
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
  21418: "db/9a/21418_Ni5D2.jpg",
  22604: "2c/80/22604_f2j7P.jpg",
  66368: "e6/a0/66368_9uy09.jpg",
  69649: "60/e9/69649_a8F5n.jpg",
  77322: "7f/16/77322_UGrCP.jpg",
  119650: "a9/9b/119650_kz073.jpg",
  121486: "b4/ac/121486_yXZkh.jpg",
  145348: "17/ad/145348_oENB8.jpg",
  148724: "3f/c6/148724_MmM4T.jpg",
  167732: "15/9e/167732_hAT3L.jpg",
  193910: "73/e4/193910_DWrNj.jpg",
  212930: "4a/fd/212930_K4E9z.jpg",
  218425: "8e/b1/218425_vbDLL.jpg",
  218561: "ed/25/218561_3Zz3B.jpg",
  222495: "45/2f/222495_OmDgv.jpg",
  223238: "21/f2/223238_iB2KB.jpg",
  236926: "5e/c5/236926_1mmH4.jpg",
  238595: "dc/a9/238595_A1I7w.jpg",
  239336: "17/ce/239336_Hl4hH.jpg",
  241623: "65/f5/241623_PpQo4.jpg",
  259667: "c5/6d/259667_nf0fY.jpg",
  272351: "dd/3b/272351_l07i8.jpg",
  295492: "a5/a9/295492_3N3wU.jpg",
  300431: "e8/6a/300431_YF3m4.jpg",
  304487: "30/03/304487_tTe2r.jpg",
  305429: "a1/bd/305429_axzF3.jpg",
  306253: "90/bb/306253_twPRW.jpg",
  308489: "41/69/308489_mYlmO.jpg",
  311181: "8b/65/311181_TeDt9.jpg",
  330071: "d1/63/330071_yCcAZ.jpg",
  330888: "76/e5/330888_fnLzM.jpg",
  332037: "32/c5/332037_5B49C.jpg",
  333247: "7b/4e/333247_pz40O.jpg",
  334753: "3b/69/334753_aRslA.jpg",
  335516: "ee/2d/335516_Sdg7s.jpg",
  336828: "12/57/336828_k3h9u.jpg",
  339644: "db/1f/359238_w2A22.jpg",
  360810: "68/2a/360810_8e8pa.jpg",
  367415: "2d/20/367415_HH6de.jpg",
  372015: "99/ad/372015_3t6mL.jpg",
  375683: "31/b6/375683_zy46P.jpg",
  405577: "3b/17/405577_5Pf21.jpg",
  409007: "71/95/409007_23yjx.jpg",
  415650: "b4/b2/415650_yRZRW.jpg",
  429771: "33/57/429771_RrRjL.jpg",
  445870: "5e/55/445870_tAomz.jpg",
  447051: "3e/99/447051_E2gh2.jpg",
  448518: "9a/be/448518_6r701.jpg",
  452834: "0d/9e/452834_B0byk.jpg",
  457931: "48/ac/457931_SGPsu.jpg",
  461443: "75/e2/461443_J7DXG.jpg",
  464648: "3d/fc/464648_fLlL9.jpg",
  469394: "d5/5c/469394_c1Iz6.jpg",
  477849: "5e/63/477849_jA338.jpg",
  504143: "63/73/504143_p9H7P.jpg",
  509069: "8d/db/509069_f0Mf0.jpg",
  509948: "69/f5/509948_OAZy6.jpg",
  515749: "98/2c/515749_lPpU9.jpg",
  519774: "18/21/519774_33sr1.jpg",
  534639: "5a/60/534639_ZZQ1E.jpg",
  537756: "ee/85/537756_gv841.jpg",
  542816: "31/12/542816_2BTWb.jpg",
  544637: "d0/38/544637_33HKF.jpg"
};
