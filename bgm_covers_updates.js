// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.10.29.43
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  8949: "49/af/8949_tpV3b.jpg",
  28773: "4c/1d/28773_lj99q.jpg",
  32290: "61/35/32290_bnxUH.jpg",
  32475: "6f/3d/32475_t773z.jpg",
  36008: "be/f0/36008_Yw7L7.jpg",
  40444: "9e/d8/40444_i5BfH.jpg",
  42435: "8b/f8/42435_c45U6.jpg",
  44121: "1c/86/44121_PNppp.jpg",
  51732: "fe/8f/51732_BauAW.jpg",
  54463: "f0/a4/54463_jp.jpg",
  59118: "bd/ac/59118_eKxkz.jpg",
  76385: "96/aa/76385_KRDmo.jpg",
  76635: "a7/9a/76635_6bYe6.jpg",
  77155: "de/f8/77155_1o30Z.jpg",
  85597: "01/af/85597_778S0.jpg",
  92094: "ee/3b/92094_IRr22.jpg",
  114064: "ce/c6/114064_ltTtt.jpg",
  140154: "5a/7b/140154_dWWJ8.jpg",
  143080: "5b/5e/143080_jp.jpg",
  145280: "69/b7/145280_VLX7j.jpg",
  155705: "9c/a5/155705_Zh3hn.jpg",
  159886: "b9/7a/159886_79775.jpg",
  168238: "7c/6c/168238_o004Q.jpg",
  169710: "cd/08/169710_1rFz8.jpg",
  170007: "75/46/170007_hHT9t.jpg",
  178494: "76/3e/178494_4nySh.jpg",
  182537: "3c/44/182537_55oqc.jpg",
  182858: "f6/10/182858_x24Nx.jpg",
  183681: "5f/49/183681_8q87R.jpg",
  190757: "c9/2e/190757_dE1Rp.jpg",
  201337: "e0/01/201337_6685I.jpg",
  217679: "84/2d/217679_D95Eg.jpg",
  234308: "71/24/234308_9k5G5.jpg",
  237343: "ef/72/237343_KJJmY.jpg",
  257239: "ab/46/257239_CZ8OO.jpg",
  293668: "2a/17/293668_6AHhA.jpg",
  294934: "54/dd/294934_XW8Xf.jpg",
  295693: "cc/76/295693_0EcGr.jpg",
  297286: "12/b0/297286_m2qs8.jpg",
  298405: "10/34/298405_Yf60v.jpg",
  299236: "d0/9a/299236_eCD3S.jpg",
  304270: "11/a0/304270_IS0IG.jpg",
  309385: "84/11/309385_dLsuy.jpg",
  315767: "7a/3c/315767_3D7y0.jpg",
  323191: "8a/c2/323191_GFaFH.jpg",
  324510: "21/d4/324510_3MXDd.jpg",
  326654: "51/76/326654_ogZG5.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  353203: "d9/85/353203_Kc47K.jpg",
  375555: "04/08/375555_W0Ik0.jpg",
  377526: "06/73/377526_9GZ9M.jpg",
  384494: "f4/12/384494_pr2pv.jpg",
  391436: "8f/8b/391436_E4hme.jpg",
  403297: "30/93/403297_uL6cq.jpg",
  409402: "f4/07/409402_1Zxjb.jpg",
  425858: "3e/42/425858_8kSG9.jpg",
  454851: "a8/15/454851_f1aIZ.jpg",
  456679: "55/c5/456679_90Z7S.jpg",
  463771: "bf/83/463771_mHz9Y.jpg",
  464379: "6c/54/464379_GwBzl.jpg",
  467464: "0e/46/467464_uUQ8P.jpg",
  478573: "13/90/478573_93puD.jpg",
  482476: "7c/31/482476_iS71B.jpg",
  497897: "44/4e/497897_LZ43u.jpg",
  506343: "41/bb/506343_HURFH.jpg",
  553103: "64/b3/553103_0nYY1.jpg",
  569616: "5d/0b/569616_ittkT.jpg"
};
