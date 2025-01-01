// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.1.2.99
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  4066: "a1/98/4066_E6YA6.jpg",
  4092: "77/34/4092_Bco7e.jpg",
  12818: "60/10/12818_9pvqv.jpg",
  19002: "f1/78/19002_nO49l.jpg",
  28818: "ef/a4/28818_jp.jpg",
  34977: "fe/44/34977_WBU9F.jpg",
  37044: "29/b3/37044_a22r5.jpg",
  55981: "27/f4/55981_EtZEt.jpg",
  76578: "f0/f6/76578_rEzt0.jpg",
  94644: "af/ec/94644_niIBv.jpg",
  121995: "13/94/121995_BOOuS.jpg",
  128096: "ac/d4/128096_KY9VU.jpg",
  170184: "7b/94/170184_ZR7MP.jpg",
  187009: "b8/ec/187009_Anv3Z.jpg",
  193910: "73/e4/193910_DWrNj.jpg",
  195862: "f6/70/195862_1vg10.jpg",
  209143: "7f/f1/209143_RRLFR.jpg",
  218102: "62/df/218102_1ACAI.jpg",
  223845: "00/ef/223845_uYfpL.jpg",
  233186: "f9/8b/233186_lFGvg.jpg",
  253720: "eb/d6/253720_dQ004.jpg",
  254437: "49/28/254437_V0nL4.jpg",
  273501: "e8/57/273501_5OocC.jpg",
  275492: "de/dc/275492_AA4jS.jpg",
  280628: "bd/25/280628_Bo00b.jpg",
  286980: "1a/02/286980_oGUGY.jpg",
  287711: "80/5b/287711_8q6fS.jpg",
  294934: "54/dd/294934_XW8Xf.jpg",
  298651: "12/68/298651_B9IiO.jpg",
  306812: "8d/e8/306812_3NMbn.jpg",
  308152: "a7/ff/308152_4qU6M.jpg",
  308570: "f8/51/308570_8hxh0.jpg",
  311289: "e0/cc/311289_s0jJJ.jpg",
  315497: "56/82/315497_VffSS.jpg",
  319453: "e4/f1/319453_P44rI.jpg",
  320214: "c9/b8/320214_33e5P.jpg",
  323876: "8b/bb/323876_YO4Qb.jpg",
  336828: "12/57/336828_k3h9u.jpg",
  337130: "33/65/337130_mTzPY.jpg",
  343350: "6f/69/343350_XNx5m.jpg",
  354130: "14/d8/354130_7CjwZ.jpg",
  354762: "d3/d1/354762_559R9.jpg",
  356198: "6b/9b/356198_YFoor.jpg",
  384022: "2b/90/384022_Ms01U.jpg",
  397208: "40/1a/397208_YlCQd.jpg",
  411466: "17/cc/411466_DebY4.jpg",
  433962: "92/77/433962_XhdY8.jpg",
  437534: "01/bb/437534_4Arr5.jpg",
  440077: "4e/e9/440077_19yTp.jpg",
  442374: "55/7b/442374_414Ad.jpg",
  450713: "3d/53/450713_xq67Q.jpg",
  452349: "3c/74/452349_8qi18.jpg",
  462140: "4a/58/462140_vaC47.jpg",
  467913: "be/95/467913_vbq8v.jpg",
  484353: "60/0e/484353_T6L53.jpg",
  486415: "de/80/486415_Ww610.jpg",
  504703: "f0/a5/504703_lI4JH.jpg",
  505113: "68/7c/505113_iyid1.jpg"
};
