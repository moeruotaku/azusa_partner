// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.06.27.46
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  6675: "90/87/6675_sjaut.jpg",
  25950: "ca/8a/25950_NbO7q.jpg",
  32750: "22/3b/32750_WUvv9.jpg",
  48058: "b9/98/48058_HtlCx.jpg",
  49974: "32/c8/49974_In5n8.jpg",
  64273: "88/65/64273_sJ0fN.jpg",
  69649: "60/e9/69649_a8F5n.jpg",
  77532: "a6/a8/77532_6sUbX.jpg",
  89244: "01/e8/89244_4Z45m.jpg",
  96134: "16/2e/96134_Uu7U3.jpg",
  98253: "5f/cd/98253_g0GXq.jpg",
  111083: "09/3a/111083_L4VGL.jpg",
  121380: "4c/5d/121380_JMDRT.jpg",
  132555: "3d/7c/132555_p0TNK.jpg",
  136607: "b1/db/136607_3uO2G.jpg",
  170868: "28/b5/170868_6dLjS.jpg",
  170869: "da/6a/170869_rW7M7.jpg",
  199446: "e0/8c/199446_avgHG.jpg",
  211379: "e3/b5/211379_V83P4.jpg",
  211410: "18/e9/211410_h2Mnj.jpg",
  213068: "f6/e7/213068_57zw9.jpg",
  228579: "ad/18/228579_n7p71.jpg",
  229031: "d8/dd/229031_QEX5e.jpg",
  270585: "4d/9b/270585_j9BD2.jpg",
  274629: "0a/2d/274629_qAT3o.jpg",
  275445: "61/d7/275445_JrF99.jpg",
  277301: "16/5a/277301_OBuht.jpg",
  278297: "06/f4/278297_s0y0Y.jpg",
  296466: "56/0e/296466_be3ke.jpg",
  297926: "6a/2a/297926_Bs5Xx.jpg",
  300723: "28/6c/300723_55f3H.jpg",
  306272: "7f/34/306272_5n3Sh.jpg",
  308450: "cb/c6/308450_eI776.jpg",
  314224: "08/c5/314224_yGXUx.jpg",
  322530: "c0/d6/322530_G6u4k.jpg",
  337417: "e9/03/337417_zYCDW.jpg",
  342547: "a1/5c/342547_8yAcl.jpg",
  385554: "78/0b/385554_IEXCd.jpg",
  391396: "ff/14/391396_j4klO.jpg",
  395179: "72/5a/395179_nAHw5.jpg",
  396405: "e5/8a/396405_jzZ7b.jpg",
  398073: "db/0f/398073_EZ9b0.jpg",
  401119: "ec/93/401119_707jc.jpg",
  406440: "e6/28/406440_V6Ct2.jpg",
  408796: "57/a2/408796_Y72O7.jpg",
  429774: "0e/95/429774_DtS89.jpg",
  431105: "64/df/431105_7tUh5.jpg",
  434176: "1f/9a/434176_CCcuU.jpg",
  446434: "49/2a/446434_0Np3k.jpg",
  456375: "7f/b3/456375_nQY1K.jpg",
  457692: "b5/96/457692_HSTso.jpg",
  490402: "c7/88/490402_7t7v2.jpg",
  497607: "4e/f2/497607_5eEsz.jpg",
  499056: "ee/09/499056_k41e5.jpg",
  503771: "1d/f9/503771_99ls6.jpg",
  506124: "7f/98/506124_kVCil.jpg",
  510155: "64/22/510155_dEn8Y.jpg",
  510299: "86/18/510299_74SiM.jpg",
  510679: "81/14/510679_JmawV.jpg",
  517268: "54/68/517268_L0HpP.jpg",
  520945: "5d/fe/520945_Z11YM.jpg",
  528466: "2f/58/528466_y8mzv.jpg",
  587237: "93/a6/587237_iIuZn.jpg"
};
