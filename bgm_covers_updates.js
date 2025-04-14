// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.04.14.39
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  1651: "be/3e/1651_8gpPt.jpg",
  5168: "88/5b/5168_jp.jpg",
  5397: "01/da/5397_S6jRK.jpg",
  5412: "56/dc/5412_h4kuq.jpg",
  16867: "72/c2/16867_98X9b.jpg",
  17752: "58/ca/17752_xfX5F.jpg",
  39677: "bb/4e/39677_U17un.jpg",
  45021: "de/0f/45021_4Y76a.jpg",
  48678: "00/1d/48678_lo2y2.jpg",
  60976: "43/5a/60976_fufFP.jpg",
  61104: "db/77/61104_FnvgJ.jpg",
  64063: "08/23/64063_TXTxn.jpg",
  75116: "18/f9/75116_Ep0Qj.jpg",
  118165: "0f/2f/118165_f0m8c.jpg",
  130226: "59/16/130226_8kZmC.jpg",
  139050: "63/5e/139050_d6n81.jpg",
  185099: "72/db/185099_x6J6b.jpg",
  185101: "80/06/185101_Sggf5.jpg",
  194786: "b2/9a/194786_3O58u.jpg",
  203938: "59/05/203938_a7oO7.jpg",
  212710: "e8/f7/212710_Ajsb7.jpg",
  252255: "5f/f1/252255_ldVHF.jpg",
  257721: "79/84/257721_q99QM.jpg",
  268279: "85/aa/268279_9rynK.jpg",
  272490: "95/19/272490_2nNAn.jpg",
  279379: "c6/ab/279379_Bjc7O.jpg",
  281927: "48/11/281927_6u6on.jpg",
  291900: "5c/16/291900_AJcps.jpg",
  295004: "37/51/295004_C82CM.jpg",
  296610: "46/df/296610_0e1Ze.jpg",
  298276: "fd/4b/298276_2SdPY.jpg",
  298651: "12/68/298651_B9IiO.jpg",
  302980: "7c/a9/302980_6PFgW.jpg",
  307237: "14/fa/307237_5KNYE.jpg",
  308400: "c2/fe/308400_ozrnf.jpg",
  311737: "e1/48/311737_S3bF9.jpg",
  311891: "1d/5d/311891_2iIAu.jpg",
  312057: "0e/10/312057_N7w87.jpg",
  312164: "c4/5c/312164_ukKtP.jpg",
  312642: "f2/cf/312642_t7v7b.jpg",
  316122: "9d/77/316122_fF4iv.jpg",
  319309: "87/6a/319309_0Uk8k.jpg",
  329860: "09/50/329860_7imUW.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  334440: "08/4a/334440_h32oS.jpg",
  335119: "20/cd/335119_f5BkK.jpg",
  337013: "90/72/337013_W3wo2.jpg",
  340296: "64/34/340296_HgvIg.jpg",
  347031: "c3/7a/347031_Rrrrq.jpg",
  348205: "fa/1f/348205_GeZ19.jpg",
  348476: "f4/a0/348476_u6jop.jpg",
  363158: "fc/3f/363158_Dleuq.jpg",
  368650: "23/a2/368650_L2Zad.jpg",
  370029: "3b/4b/370029_EmoE2.jpg",
  375316: "b5/16/375316_7Lu75.jpg",
  376424: "c7/98/376424_r858w.jpg",
  377475: "12/8e/377475_QSwdQ.jpg",
  383976: "cc/5c/383976_LF1pL.jpg",
  393151: "66/18/393151_uVT00.jpg",
  393594: "33/73/393594_Tt9Tm.jpg",
  456969: "ef/4d/456969_YsmfI.jpg",
  484353: "60/0e/484353_T6L53.jpg",
  487413: "b5/da/487413_PgeRG.jpg",
  490908: "71/b9/490908_ATCx0.jpg",
  496300: "c1/f3/496300_KPNrM.jpg",
  505214: "d2/ec/505214_n93N5.jpg",
  509948: "69/f5/509948_OAZy6.jpg",
  520341: "49/17/520341_S3u8s.jpg",
  521669: "c3/4a/521669_87t2s.jpg"
};
