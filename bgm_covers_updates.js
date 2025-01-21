// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.1.21.847
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  800: "7a/53/800_B7t72.jpg",
  1713: "46/4d/1713_AwIsO.jpg",
  2669: "0b/ed/2669_rav75.jpg",
  14673: "5f/35/14673_NddkP.jpg",
  24822: "21/9b/24822_R940j.jpg",
  32435: "55/57/32435_6AJ3H.jpg",
  34373: "ef/25/34373_8O8nm.jpg",
  38080: "eb/78/38080_AFtTX.jpg",
  43563: "ae/77/43563_zC8RP.jpg",
  51721: "6d/78/51721_jp.jpg",
  58074: "9b/45/58074_nwxoW.jpg",
  64141: "ab/75/64141_X26Dc.jpg",
  84162: "63/93/84162_PCyTw.jpg",
  86984: "75/6d/86984_8E8fm.jpg",
  91776: "70/c4/91776_CzCqc.jpg",
  111083: "09/3a/111083_L4VGL.jpg",
  114017: "af/bd/114017_1f2S1.jpg",
  148732: "d6/72/148732_45Q47.jpg",
  156126: "02/fa/156126_k1wDM.jpg",
  168886: "4b/7a/168886_ojgzh.jpg",
  177997: "4d/63/177997_1Z663.jpg",
  180061: "09/e9/180061_v8K7Z.jpg",
  217598: "29/d6/217598_HJ7jJ.jpg",
  252542: "a3/51/252542_dZ2wg.jpg",
  270199: "f0/3f/270199_10udD.jpg",
  270708: "dc/83/270708_G62Gj.jpg",
  279871: "92/3d/279871_4a7Zi.jpg",
  282922: "fb/66/282922_Z0Bp3.jpg",
  296466: "56/0e/296466_be3ke.jpg",
  297267: "44/e3/297267_5euea.jpg",
  300334: "8c/82/300334_fXSFl.jpg",
  300797: "c2/61/300797_hPZut.jpg",
  311181: "8b/65/311181_TeDt9.jpg",
  316965: "c4/67/316965_DcGaC.jpg",
  318247: "2e/92/318247_99cjf.jpg",
  325236: "3d/30/325236_0hkFQ.jpg",
  326654: "51/76/326654_ogZG5.jpg",
  326899: "9b/69/326899_Ik22I.jpg",
  332250: "56/9a/332250_XmrMI.jpg",
  337013: "90/72/337013_W3wo2.jpg",
  343241: "1c/ba/343241_TWFSN.jpg",
  351025: "f3/9f/351025_f3A3z.jpg",
  352430: "5e/aa/352430_74QGn.jpg",
  373153: "a1/2d/373153_u2rs5.jpg",
  389739: "5c/cc/389739_Kirzg.jpg",
  393816: "55/76/393816_569ZW.jpg",
  428918: "9c/e7/428918_7ADtU.jpg",
  453351: "8c/95/453351_Up534.jpg",
  456990: "2c/aa/456990_BBCCD.jpg",
  462250: "26/0a/462250_9ApRs.jpg",
  479162: "19/e1/479162_Rv971.jpg",
  507565: "7f/f0/507565_73an5.jpg",
  513311: "1b/3c/513311_KWzRr.jpg"
};
