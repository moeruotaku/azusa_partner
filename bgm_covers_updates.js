// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.08.04.43
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  3510: "15/e1/3510_pWiY9.jpg",
  8491: "ae/45/8491_0Oc2Q.jpg",
  24410: "fd/53/24410_t47bb.jpg",
  25266: "d5/4b/25266_wW2sW.jpg",
  29993: "4f/d1/29993_kz3UD.jpg",
  32612: "b7/93/32612_lnwwz.jpg",
  55064: "f5/6e/55064_b9kmb.jpg",
  55911: "6f/a2/55911_n7jf7.jpg",
  64051: "e7/4d/64051_3E2J5.jpg",
  65045: "9a/87/65045_7oNn7.jpg",
  66849: "08/73/66849_y77sz.jpg",
  124332: "08/0d/124332_mjpdI.jpg",
  132067: "9d/ba/132067_beW65.jpg",
  149084: "45/39/149084_jYjnB.jpg",
  162127: "1a/0d/162127_oX969.jpg",
  172279: "6c/93/172279_AIvfw.jpg",
  175459: "81/5a/175459_RAH87.jpg",
  195692: "7a/92/195692_YtUMe.jpg",
  210895: "24/21/210895_52GFU.jpg",
  218102: "62/df/218102_1ACAI.jpg",
  234273: "aa/86/234273_3lczD.jpg",
  241623: "65/f5/241623_PpQo4.jpg",
  245194: "6a/af/245194_9J3CZ.jpg",
  247809: "2a/ee/247809_CD29C.jpg",
  249482: "01/7a/249482_4hLG2.jpg",
  258907: "69/40/258907_K0iIA.jpg",
  269903: "96/8b/269903_VgPVf.jpg",
  282347: "d2/80/282347_apZW3.jpg",
  283459: "c5/f3/283459_ZuMM7.jpg",
  308287: "b5/d6/308287_Qj65Q.jpg",
  311833: "3b/af/311833_e0CLc.jpg",
  311891: "1d/5d/311891_2iIAu.jpg",
  312483: "4e/69/312483_X0HDm.jpg",
  319792: "60/73/319792_p8vgp.jpg",
  321717: "5f/13/321717_2wtEK.jpg",
  325236: "3d/30/325236_0hkFQ.jpg",
  326914: "00/39/326914_RCcrr.jpg",
  330222: "73/5b/330222_8MGJZ.jpg",
  348205: "fa/1f/348205_GeZ19.jpg",
  356907: "cd/89/356907_RABa7.jpg",
  375205: "b0/eb/375205_KanKO.jpg",
  401772: "2c/31/401772_hFhGr.jpg",
  402331: "89/25/402331_MmaZ6.jpg",
  409684: "cb/ed/409684_0bkp6.jpg",
  409689: "5e/bf/409689_IxMDx.jpg",
  414169: "0e/8b/414169_V996v.jpg",
  433000: "0a/f7/433000_xLLLa.jpg",
  439530: "54/05/439530_Madf8.jpg",
  440550: "69/7d/440550_lKxzZ.jpg",
  451364: "10/35/451364_HHHhK.jpg",
  460536: "dd/97/460536_jHhew.jpg",
  460897: "33/fe/460897_Svdkf.jpg",
  468342: "ca/83/468342_3lUCT.jpg",
  469394: "d5/5c/469394_c1Iz6.jpg",
  477849: "5e/63/477849_jA338.jpg",
  477850: "b1/07/477850_1X9Dv.jpg",
  486053: "00/8a/486053_2lqM2.jpg",
  488284: "5c/9f/488284_324Q4.jpg",
  502442: "13/e3/502442_bJ88B.jpg",
  503755: "f3/fd/503755_OmL5e.jpg",
  509948: "69/f5/509948_OAZy6.jpg",
  532476: "0e/b2/532476_S5QYf.jpg",
  532479: "64/41/532479_GrzIL.jpg",
  542478: "1a/36/542478_Cv79S.jpg",
  544235: "39/6c/544235_Q5jsW.jpg",
  548132: "36/8e/548132_JEkbb.jpg",
  553869: "65/2c/553869_FS0g5.jpg",
  557439: "b0/1b/557439_DBW47.jpg"
};
