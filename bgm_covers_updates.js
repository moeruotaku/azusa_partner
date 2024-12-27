// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.27.904
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
  4066: "a1/98/4066_E6YA6.jpg",
  19002: "f1/78/19002_nO49l.jpg",
  46090: "08/a3/46090_r6dEi.jpg",
  47646: "03/45/47646_mm9Sl.jpg",
  66451: "b4/cb/66451_QkhRq.jpg",
  69358: "80/de/69358_jp.jpg",
  118165: "0f/2f/118165_f0m8c.jpg",
  137806: "60/99/137806_7Nd7J.jpg",
  165241: "76/62/165241_XCX3v.jpg",
  177863: "77/13/177863_gZ3zg.jpg",
  182057: "c0/14/182057_MB7bQ.jpg",
  193081: "e5/e0/193081_LK4M2.jpg",
  195862: "f6/70/195862_1vg10.jpg",
  214685: "fb/6c/214685_6ZHlS.jpg",
  236467: "a0/0a/236467_mTCcO.jpg",
  242942: "bf/6a/242942_qW767.jpg",
  272951: "23/ad/272951_YYYRX.jpg",
  286980: "1a/02/286980_oGUGY.jpg",
  287711: "80/5b/287711_8q6fS.jpg",
  294934: "54/dd/294934_XW8Xf.jpg",
  295217: "31/37/295217_GQKWX.jpg",
  306284: "44/bc/306284_ttlYp.jpg",
  311456: "56/c6/311456_b5887.jpg",
  315497: "56/82/315497_VffSS.jpg",
  316280: "70/4c/316280_p7oVC.jpg",
  316809: "f3/be/316809_76ua8.jpg",
  327060: "18/ce/327060_rVHvH.jpg",
  328458: "18/e1/328458_q896V.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  347240: "97/9e/347240_y3QvW.jpg",
  354762: "d3/d1/354762_559R9.jpg",
  356198: "6b/9b/356198_YFoor.jpg",
  360070: "38/11/360070_4iIuo.jpg",
  372294: "16/a6/372294_5TtTR.jpg",
  375145: "3f/85/375145_5O22N.jpg",
  376200: "61/3e/376200_Z5N33.jpg",
  377765: "69/0f/377765_hkkJw.jpg",
  406361: "26/9a/406361_gzAIz.jpg",
  406538: "68/47/406538_t9WKW.jpg",
  417054: "91/39/417054_SCfbR.jpg",
  425732: "25/25/425732_A78o8.jpg",
  430016: "44/15/430016_Nxfiu.jpg",
  431400: "5b/87/431400_iC5x6.jpg",
  433962: "92/77/433962_XhdY8.jpg",
  437765: "93/f2/437765_lWw5y.jpg",
  453125: "50/90/453125_kn4oW.jpg",
  460743: "c9/5b/460743_ZSCcm.jpg",
  464648: "3d/fc/464648_fLlL9.jpg",
  476445: "c8/98/476445_3w2n3.jpg",
  480469: "6b/ae/480469_El6p5.jpg",
  484353: "60/0e/484353_T6L53.jpg",
  486415: "de/80/486415_Ww610.jpg",
  498287: "12/91/498287_Ll225.jpg",
  505113: "68/7c/505113_iyid1.jpg",
  511412: "91/13/511412_FpfCf.jpg",
  512180: "39/3e/512180_GZqCu.jpg",
  512789: "96/a1/512789_S131b.jpg"
};
