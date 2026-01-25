// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.01.25.46
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  76385: "96/aa/76385_o3dQE.jpg",
  122776: "bb/a1/122776_5hEUc.jpg",
  128202: "95/00/128202_XlnAd.jpg",
  137427: "1b/f0/137427_ur2v1.jpg",
  180060: "85/dc/180060_oaza9.jpg",
  181018: "0e/ae/181018_EI6Vw.jpg",
  189208: "cc/9e/189208_ppBpt.jpg",
  211728: "d9/15/211728_WEL34.jpg",
  212189: "b1/c4/212189_Y1WOa.jpg",
  212997: "78/01/212997_Rvy5y.jpg",
  217833: "b7/c1/217833_7wZfN.jpg",
  220361: "d7/21/220361_g3Zi4.jpg",
  220844: "ab/c2/220844_VUU6U.jpg",
  242129: "fd/f9/242129_Acd3G.jpg",
  242602: "c3/bc/242602_8O3p3.jpg",
  245274: "d4/c2/245274_iW1XA.jpg",
  250520: "19/45/250520_q2w2V.jpg",
  254885: "88/28/254885_e8VFK.jpg",
  270190: "0b/f5/270190_jVZ7V.jpg",
  272026: "d4/84/272026_loLDj.jpg",
  286892: "a6/ec/286892_8Zs7W.jpg",
  287300: "1c/c3/287300_tJy0l.jpg",
  289602: "ce/29/289602_gGU7p.jpg",
  293355: "a0/7e/293355_d2ZBK.jpg",
  296863: "a2/3d/296863_4BBxm.jpg",
  300270: "ec/bf/300270_M30S6.jpg",
  307721: "a3/a2/307721_7C2PN.jpg",
  308287: "b5/d6/308287_Qj65Q.jpg",
  308976: "07/cd/308976_kKaAR.jpg",
  311834: "6e/c6/311834_J3Wc4.jpg",
  316965: "c4/67/316965_DcGaC.jpg",
  326724: "9e/57/326724_ykiIp.jpg",
  343241: "1c/ba/343241_TWFSN.jpg",
  347240: "97/9e/347240_y3QvW.jpg",
  355888: "45/46/355888_5ajbT.jpg",
  358187: "61/01/358187_H6L70.jpg",
  362117: "26/e8/362117_16b1D.jpg",
  376422: "9e/14/376422_Ga1Ao.jpg",
  426967: "ee/d3/426967_9T9A9.jpg",
  433726: "b7/bf/433726_WlOz0.jpg",
  453000: "2e/b4/453000_qUZef.jpg",
  460819: "f0/ce/460819_u5H0Z.jpg",
  476978: "58/eb/476978_CZXxm.jpg",
  489436: "55/91/489436_skq4F.jpg",
  493365: "a4/3e/493365_w5RBV.jpg",
  497178: "12/a5/497178_I7Jjj.jpg",
  501181: "d2/43/501181_Zuh9Y.jpg",
  505355: "3f/30/505355_33ssh.jpg",
  527456: "27/91/527456_4F34p.jpg",
  529128: "2b/63/529128_bz23Q.jpg",
  570431: "11/e8/570431_h5hkq.jpg"
};
