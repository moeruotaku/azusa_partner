// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.10.10.68
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  9640: "6f/75/9640_gYJRJ.jpg",
  31731: "5e/c1/31731_39ZCx.jpg",
  94928: "ca/04/94928_eWqVQ.jpg",
  100130: "c7/35/100130_BZ04n.jpg",
  243198: "11/71/243198_C4cz4.jpg",
  245922: "84/3b/245922_O4I55.jpg",
  259816: "1a/a6/259816_06XbO.jpg",
  277134: "d1/65/277134_yrhyr.jpg",
  301622: "27/1c/301622_Zlhf6.jpg",
  304176: "fc/e4/304176_1OsXU.jpg",
  304324: "b4/08/304324_2E26H.jpg",
  315918: "5c/81/315918_p75Jh.jpg",
  319309: "87/6a/319309_0Uk8k.jpg",
  320995: "e2/ff/320995_sJE8S.jpg",
  324366: "40/5c/324366_J5AaM.jpg",
  326699: "a5/c2/326699_85hJR.jpg",
  326724: "9e/57/326724_ykiIp.jpg",
  330004: "1c/a6/330004_C0kFA.jpg",
  332916: "b7/8e/332916_JX0dI.jpg",
  342547: "a1/5c/342547_8yAcl.jpg",
  346060: "47/a4/346060_es0HL.jpg",
  349842: "da/4a/349842_u5ug7.jpg",
  353207: "6a/f0/353207_99c6c.jpg",
  355148: "08/7f/355148_vT1kz.jpg",
  362541: "c9/1e/362541_pcoOn.jpg",
  364863: "af/18/364863_iHxIj.jpg",
  368830: "dc/7a/368830_YK7x4.jpg",
  388268: "a7/1c/388268_525gJ.jpg",
  392778: "e8/6d/392778_vF46S.jpg",
  417220: "f5/e3/417220_td6el.jpg",
  419991: "72/7e/419991_t8Bl6.jpg",
  432940: "dc/e4/432940_Bb0Kx.jpg",
  433315: "e3/74/433315_yFsaT.jpg",
  437954: "97/e5/437954_cDbq0.jpg",
  445870: "5e/55/445870_tAomz.jpg",
  447990: "06/5d/447990_S7d1B.jpg",
  460712: "6f/0c/460712_5NQ4O.jpg",
  460819: "f0/ce/460819_u5H0Z.jpg",
  464364: "c8/ef/464364_ZW62Y.jpg",
  465682: "ba/5c/465682_ORVZ6.jpg",
  466038: "45/0f/466038_Bi5g4.jpg",
  485030: "a8/96/485030_8kMPl.jpg",
  492066: "76/72/492066_RNBwU.jpg",
  505445: "44/c5/505445_b5PNa.jpg",
  505901: "9f/08/505901_hGds7.jpg",
  506840: "ac/c1/506840_RdBrM.jpg",
  511739: "ae/ac/511739_86nE2.jpg",
  524513: "cd/fa/524513_HbF4M.jpg",
  530731: "ad/01/530731_NRu20.jpg",
  535916: "60/66/535916_NzajG.jpg",
  542030: "eb/07/542030_n92ee.jpg",
  556816: "16/73/556816_lKO23.jpg",
  562638: "c3/f1/562638_7m1I6.jpg",
  573423: "d5/c4/573423_N7K8N.jpg",
  574043: "73/8e/574043_NmZsu.jpg",
  631540: "c3/4d/631540_3M838.jpg"
};
