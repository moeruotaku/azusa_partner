// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.08.25.61
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  4675: "6c/2e/4675_CD9if.jpg",
  5363: "5d/bc/5363_Ve6Y5.jpg",
  5364: "46/cd/5364_66ZCX.jpg",
  13370: "36/6c/13370_jp.jpg",
  15165: "90/ec/15165_SlMrj.jpg",
  18965: "cb/7f/18965_jp.jpg",
  26405: "96/f4/26405_45zQ2.jpg",
  113074: "bc/6d/113074_jp.jpg",
  158434: "8b/84/158434_jp.jpg",
  160276: "c7/6c/160276_jp.jpg",
  181993: "aa/55/181993_2uEQN.jpg",
  189208: "cc/9e/189208_ppBpt.jpg",
  191037: "78/30/191037_BsB2Z.jpg",
  196949: "5c/7c/196949_1L1c8.jpg",
  196954: "ed/12/196954_E3QTF.jpg",
  201573: "7f/26/201573_jp.jpg",
  216554: "ae/ad/216554_8LRQr.jpg",
  217598: "29/d6/217598_HJ7jJ.jpg",
  217833: "b7/c1/217833_7wZfN.jpg",
  220792: "e7/88/220792_ZpDgx.jpg",
  220844: "ab/c2/220844_VUU6U.jpg",
  221040: "ed/5c/221040_fCa9I.jpg",
  237424: "44/1f/237424_C1Ilx.jpg",
  244959: "09/72/244959_7p1Y8.jpg",
  270199: "f0/3f/270199_10udD.jpg",
  272351: "dd/3b/272351_l07i8.jpg",
  279877: "a6/d6/279877_R8th0.jpg",
  287300: "1c/c3/287300_tJy0l.jpg",
  289304: "51/9b/289304_1KOOK.jpg",
  289325: "e7/57/289325_uJB3K.jpg",
  293551: "f9/84/293551_5YY66.jpg",
  295492: "a5/a9/295492_3N3wU.jpg",
  301356: "e8/a4/301356_lrY4Q.jpg",
  311456: "56/c6/311456_b5887.jpg",
  315631: "8f/77/315631_HfvvH.jpg",
  326724: "9e/57/326724_ykiIp.jpg",
  328376: "ac/97/328376_5ZgtM.jpg",
  334753: "3b/69/334753_aRslA.jpg",
  339092: "96/b6/339092_zZK9L.jpg",
  349339: "10/4b/349339_81282.jpg",
  366616: "41/29/366616_6uOUB.jpg",
  368804: "0e/b5/368804_xm7p0.jpg",
  378649: "4d/93/378649_iE3YD.jpg",
  380006: "c6/87/380006_NuGMr.jpg",
  382508: "5a/5c/382508_jse2K.jpg",
  395984: "70/8c/395984_2eSoP.jpg",
  398575: "b8/c0/398575_c7Geh.jpg",
  403378: "1d/06/403378_nQ1tn.jpg",
  419551: "cb/ed/419551_vvYu2.jpg",
  421419: "bb/d8/421419_HOAUA.jpg",
  423149: "8a/31/423149_jB7E2.jpg",
  429425: "89/ce/429425_Qbcjv.jpg",
  457605: "65/cb/457605_Fs52j.jpg",
  469153: "12/cf/469153_6c62z.jpg",
  477401: "aa/ed/477401_EsqMk.jpg",
  486053: "00/8a/486053_2lqM2.jpg",
  498929: "c0/c6/498929_Z4fX9.jpg",
  500226: "61/8f/500226_GmXmg.jpg",
  503688: "26/21/503688_4BPeG.jpg",
  509166: "c3/e5/509166_8mQ9W.jpg",
  509948: "69/f5/509948_OAZy6.jpg",
  513795: "08/e3/513795_b4ntL.jpg",
  530363: "6b/2c/530363_cWp62.jpg",
  538910: "f2/c8/538910_1fbvM.jpg",
  546570: "4e/3a/546570_c8Euk.jpg",
  571638: "48/5b/571638_mc14f.jpg"
};
