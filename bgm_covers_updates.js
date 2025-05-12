// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.05.12.45
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  4923: "4f/b8/4923_rg33v.jpg",
  29993: "4f/d1/29993_kz3UD.jpg",
  55911: "6f/a2/55911_n7jf7.jpg",
  89062: "03/69/89062_ddEjT.jpg",
  89419: "b3/fa/89419_NpVYx.jpg",
  105074: "e8/0f/105074_8US7Q.jpg",
  136477: "97/b8/136477_14Dps.jpg",
  146063: "f6/5c/146063_o5609.jpg",
  163966: "73/d9/163966_fY8hC.jpg",
  168675: "39/56/168675_C7hMt.jpg",
  175459: "81/5a/175459_RAH87.jpg",
  177997: "4d/63/177997_1Z663.jpg",
  211736: "c2/a2/211736_3qC0b.jpg",
  212189: "b1/c4/212189_Y1WOa.jpg",
  213503: "9c/1f/213503_I884B.jpg",
  214007: "b9/56/214007_o0YDl.jpg",
  216582: "1b/8a/216582_Wi51p.jpg",
  221157: "05/66/221157_005zF.jpg",
  223845: "00/ef/223845_uYfpL.jpg",
  234489: "2e/f0/234489_333nt.jpg",
  240256: "0b/46/240256_4wI91.jpg",
  241554: "49/05/241554_y9TCY.jpg",
  252958: "84/aa/252958_ny2P5.jpg",
  254437: "49/28/254437_V0nL4.jpg",
  270112: "d2/10/270112_h7PPc.jpg",
  282324: "cb/a9/282324_l2i2l.jpg",
  289325: "e7/57/289325_uJB3K.jpg",
  292902: "78/8a/292902_97Zf3.jpg",
  298144: "be/9b/298144_kvT9z.jpg",
  300270: "ec/bf/300270_M30S6.jpg",
  301226: "8b/8c/301226_9z9M9.jpg",
  305282: "31/d8/305282_77Wp4.jpg",
  305872: "5d/58/305872_mVwvR.jpg",
  313079: "51/f1/313079_WhghL.jpg",
  321869: "dd/0b/321869_JoWzG.jpg",
  324331: "26/a9/324331_6F6HF.jpg",
  326686: "1b/6a/326686_ggH11.jpg",
  329860: "09/50/329860_7imUW.jpg",
  329957: "2e/40/329957_6AvA3.jpg",
  334762: "03/78/334762_ZVehk.jpg",
  338969: "2a/9a/338969_ZVL8v.jpg",
  339092: "96/b6/339092_zZK9L.jpg",
  340000: "0d/33/340000_1Z8I9.jpg",
  340469: "5c/31/340469_xGwq4.jpg",
  349274: "3a/bb/349274_U0IXd.jpg",
  354130: "14/d8/354130_7CjwZ.jpg",
  375683: "31/b6/375683_zy46P.jpg",
  376861: "ed/20/376861_8M88b.jpg",
  388479: "60/b5/388479_jagls.jpg",
  389483: "d3/ff/389483_lO6ql.jpg",
  398182: "f8/13/398182_QaI8x.jpg",
  420844: "3f/fc/420844_sgyHB.jpg",
  436747: "6c/ff/436747_A0S6f.jpg",
  443107: "61/19/443107_VlssV.jpg",
  457000: "cb/ee/457000_H3j1l.jpg",
  498299: "24/6f/498299_4exHQ.jpg",
  506640: "fb/74/506640_Yy5FK.jpg",
  507999: "cc/40/507999_000ZA.jpg",
  514896: "a9/24/514896_H4u4p.jpg",
  525894: "30/16/525894_JgQfg.jpg",
  552663: "ce/aa/552663_AS120.jpg"
};
