// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2024.12.25.616
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
  34225: "0f/eb/34225_00J8x.jpg",
  42232: "a0/1e/42232_ZkW8w.jpg",
  46090: "08/a3/46090_r6dEi.jpg",
  47162: "ee/b0/47162_1XP1P.jpg",
  47646: "03/45/47646_mm9Sl.jpg",
  66451: "b4/cb/66451_QkhRq.jpg",
  69358: "80/de/69358_jp.jpg",
  118165: "0f/2f/118165_f0m8c.jpg",
  137806: "60/99/137806_7Nd7J.jpg",
  165241: "76/62/165241_XCX3v.jpg",
  177863: "77/13/177863_gZ3zg.jpg",
  182057: "c0/14/182057_MB7bQ.jpg",
  193081: "e5/e0/193081_LK4M2.jpg",
  210505: "41/4f/210505_1G4D9.jpg",
  214685: "fb/6c/214685_6ZHlS.jpg",
  236467: "a0/0a/236467_mTCcO.jpg",
  236926: "5e/c5/236926_1mmH4.jpg",
  242942: "bf/6a/242942_qW767.jpg",
  254885: "88/28/254885_e8VFK.jpg",
  272951: "23/ad/272951_YYYRX.jpg",
  277134: "d1/65/277134_yrhyr.jpg",
  288048: "fa/93/288048_752wZ.jpg",
  295217: "31/37/295217_GQKWX.jpg",
  296457: "00/e1/296457_Y0CR0.jpg",
  306284: "44/bc/306284_ttlYp.jpg",
  311456: "56/c6/311456_b5887.jpg",
  316280: "70/4c/316280_p7oVC.jpg",
  320214: "c9/b8/320214_33e5P.jpg",
  327060: "18/ce/327060_rVHvH.jpg",
  328458: "18/e1/328458_q896V.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  347240: "97/9e/347240_y3QvW.jpg",
  351918: "9b/83/351918_Skukq.jpg",
  360070: "38/11/360070_4iIuo.jpg",
  372294: "16/a6/372294_5TtTR.jpg",
  375145: "3f/85/375145_5O22N.jpg",
  375683: "31/b6/375683_zy46P.jpg",
  377765: "69/0f/377765_hkkJw.jpg",
  406361: "26/9a/406361_gzAIz.jpg",
  406538: "68/47/406538_t9WKW.jpg",
  417054: "91/39/417054_SCfbR.jpg",
  423295: "e8/bc/423295_cU84S.jpg",
  425732: "25/25/425732_A78o8.jpg",
  430016: "44/15/430016_Nxfiu.jpg",
  431400: "5b/87/431400_iC5x6.jpg",
  432940: "dc/e4/432940_Bb0Kx.jpg",
  437765: "93/f2/437765_lWw5y.jpg",
  453125: "50/90/453125_kn4oW.jpg",
  460743: "c9/5b/460743_ZSCcm.jpg",
  464648: "3d/fc/464648_fLlL9.jpg",
  476445: "c8/98/476445_3w2n3.jpg",
  480469: "6b/ae/480469_El6p5.jpg",
  484353: "60/0e/484353_T6L53.jpg",
  498287: "12/91/498287_Ll225.jpg",
  511412: "91/13/511412_FpfCf.jpg",
  512180: "39/3e/512180_GZqCu.jpg",
  512789: "96/a1/512789_S131b.jpg"
};
