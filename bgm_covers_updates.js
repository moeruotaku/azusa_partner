// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.06.28.90
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  3582: "9d/68/3582_JKSTo.jpg",
  15841: "e6/49/15841_67W1c.jpg",
  19597: "6c/73/19597_VkC09.jpg",
  25338: "9b/98/25338_RqZaZ.jpg",
  38807: "f8/e1/38807_fxGil.jpg",
  57143: "ea/49/57143_RPWeW.jpg",
  99397: "1c/b4/99397_9nNLn.jpg",
  131504: "fa/03/131504_qqvpi.jpg",
  134910: "1e/cd/134910_Ko1Ra.jpg",
  138986: "4d/2e/138986_9Z3Uv.jpg",
  159865: "ca/18/159865_kevBj.jpg",
  172279: "6c/93/172279_AIvfw.jpg",
  180932: "4d/eb/180932_T4242.jpg",
  189167: "fa/d7/189167_cZ7Cc.jpg",
  192295: "ec/af/192295_eVUmQ.jpg",
  211665: "cf/2a/211665_1MfWG.jpg",
  227347: "4d/47/227347_vzgem.jpg",
  229644: "3e/d1/229644_HF133.jpg",
  235397: "ce/1c/235397_X9ajA.jpg",
  239656: "d7/fb/239656_aya25.jpg",
  242972: "73/5e/242972_re0ak.jpg",
  247798: "6b/f8/247798_zHhv7.jpg",
  252452: "61/9c/252452_MyM6M.jpg",
  264546: "e2/1c/264546_5La51.jpg",
  283254: "34/ff/283254_W6tM6.jpg",
  284160: "88/54/284160_dOeI0.jpg",
  286140: "85/c0/286140_ZZny4.jpg",
  292706: "7a/fb/292706_9PKZo.jpg",
  297267: "44/e3/297267_5euea.jpg",
  299584: "7f/eb/299584_3tZuA.jpg",
  307237: "14/fa/307237_5KNYE.jpg",
  322890: "42/df/322890_fThjv.jpg",
  326285: "3a/03/326285_rQAhA.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  333572: "15/ff/333572_E89aH.jpg",
  338544: "98/cd/338544_rLSOE.jpg",
  340052: "c3/44/340052_S0U31.jpg",
  347780: "c2/4d/347780_70gvI.jpg",
  357433: "9b/dd/357433_zyYc7.jpg",
  368813: "fc/62/368813_L4I49.jpg",
  377599: "7a/2d/377599_5cY50.jpg",
  402768: "01/9b/402768_299F7.jpg",
  406468: "be/f7/406468_OVJrP.jpg",
  426302: "26/0f/426302_b2byx.jpg",
  446724: "d5/98/446724_UbU22.jpg",
  449330: "0f/8e/449330_ZT0wB.jpg",
  464323: "fc/4e/464323_b86TG.jpg",
  475241: "5e/60/475241_ez166.jpg",
  486509: "75/52/486509_qj5zj.jpg",
  492138: "24/1b/492138_Hd4KI.jpg",
  505952: "d0/2f/505952_9Jcfc.jpg",
  506124: "7f/98/506124_kVCil.jpg",
  551639: "26/fc/551639_9OR93.jpg"
};
