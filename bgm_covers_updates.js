// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.04.11.86
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  5397: "01/da/5397_S6jRK.jpg",
  12580: "7a/e7/12580_sF0E0.jpg",
  45021: "de/0f/45021_4Y76a.jpg",
  48678: "00/1d/48678_lo2y2.jpg",
  55911: "6f/a2/55911_n7jf7.jpg",
  72580: "90/99/72580_J2634.jpg",
  118165: "0f/2f/118165_f0m8c.jpg",
  194786: "b2/9a/194786_3O58u.jpg",
  227179: "3c/ad/227179_i2dXu.jpg",
  230853: "bc/70/230853_mNgzT.jpg",
  241088: "45/dc/241088_hOp6G.jpg",
  242224: "61/f0/242224_FhYrF.jpg",
  273590: "e7/f4/273590_2151L.jpg",
  276153: "f7/cb/276153_AShAk.jpg",
  279379: "c6/ab/279379_Bjc7O.jpg",
  281438: "01/4c/281438_W2z1w.jpg",
  281927: "48/11/281927_6u6on.jpg",
  291900: "5c/16/291900_AJcps.jpg",
  296610: "46/df/296610_0e1Ze.jpg",
  298720: "ef/38/298720_cjXcP.jpg",
  302467: "32/f2/302467_qW6mD.jpg",
  302980: "7c/a9/302980_6PFgW.jpg",
  312057: "0e/10/312057_N7w87.jpg",
  312164: "c4/5c/312164_ukKtP.jpg",
  312642: "f2/cf/312642_t7v7b.jpg",
  316122: "9d/77/316122_fF4iv.jpg",
  319309: "87/6a/319309_0Uk8k.jpg",
  322345: "1c/6d/322345_ogWmR.jpg",
  329860: "09/50/329860_7imUW.jpg",
  334440: "08/4a/334440_h32oS.jpg",
  337013: "90/72/337013_W3wo2.jpg",
  340296: "64/34/340296_HgvIg.jpg",
  347031: "c3/7a/347031_Rrrrq.jpg",
  348205: "fa/1f/348205_GeZ19.jpg",
  363158: "fc/3f/363158_Dleuq.jpg",
  368614: "37/19/368614_mj67P.jpg",
  368650: "23/a2/368650_L2Zad.jpg",
  369109: "cf/13/369109_4hUaF.jpg",
  375316: "b5/16/375316_7Lu75.jpg",
  377475: "12/8e/377475_QSwdQ.jpg",
  383976: "cc/5c/383976_LF1pL.jpg",
  392095: "0d/3a/392095_nNBn9.jpg",
  393151: "66/18/393151_uVT00.jpg",
  393594: "33/73/393594_Tt9Tm.jpg",
  409341: "85/00/409341_XXlUa.jpg",
  433061: "6b/6b/433061_P00ny.jpg",
  456969: "ef/4d/456969_YsmfI.jpg",
  469153: "12/cf/469153_6c62z.jpg",
  486165: "71/e5/486165_CtccO.jpg",
  487413: "b5/da/487413_PgeRG.jpg",
  505214: "d2/ec/505214_n93N5.jpg",
  505355: "3f/30/505355_33ssh.jpg",
  505762: "38/61/505762_2z2H6.jpg",
  509948: "69/f5/509948_OAZy6.jpg",
  520341: "49/17/520341_S3u8s.jpg",
  521669: "c3/4a/521669_87t2s.jpg",
  532476: "0e/b2/532476_S5QYf.jpg",
  540029: "60/64/540029_jkn73.jpg"
};
