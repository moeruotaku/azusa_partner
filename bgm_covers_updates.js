// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.12.12.35
// @description bgm_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const bgm_covers = {
  103535: "2d/29/103535_5fVWo.jpg",
  111234: "d7/63/111234_jp.jpg",
  119403: "3d/f7/119403_XsJWX.jpg",
  121365: "95/20/121365_80u77.jpg",
  132823: "fc/7d/132823_GILmw.jpg",
  154936: "96/fb/154936_jp.jpg",
  155587: "f8/91/155587_YrELD.jpg",
  185741: "72/31/185741_oK9z4.jpg",
  187715: "c1/49/187715_12H22.jpg",
  207478: "cc/29/207478_q60qo.jpg",
  212037: "cd/2a/212037_2f8kE.jpg",
  218561: "ed/25/218561_3Zz3B.jpg",
  218701: "df/f1/218701_Ss9VJ.jpg",
  221759: "8e/6f/221759_505o5.jpg",
  236546: "84/97/236546_9Jzv3.jpg",
  240256: "0b/46/240256_4wI91.jpg",
  247383: "f1/cb/247383_eSsr0.jpg",
  255324: "f6/0c/255324_8wP9o.jpg",
  260215: "da/98/260215_cmD2V.jpg",
  267399: "e4/87/267399_3vrqK.jpg",
  272961: "80/22/272961_uE9Cs.jpg",
  273878: "94/06/273878_Wp4W8.jpg",
  299168: "39/2a/299168_DY0AJ.jpg",
  303246: "ce/c1/303246_lClcC.jpg",
  307237: "14/fa/307237_5KNYE.jpg",
  308999: "6a/46/308999_k6K2y.jpg",
  317314: "fc/22/317314_6pC1z.jpg",
  322229: "1f/97/322229_bsx4b.jpg",
  326285: "3a/03/326285_rQAhA.jpg",
  326654: "51/76/326654_ogZG5.jpg",
  328376: "ac/97/328376_5ZgtM.jpg",
  331609: "2a/83/331609_1K7U8.jpg",
  333709: "eb/0b/333709_A9Kl7.jpg",
  337906: "ea/89/337906_53qLz.jpg",
  344667: "b5/6e/344667_8QFDu.jpg",
  348056: "2d/ee/348056_0csbw.jpg",
  357823: "bf/ed/357823_uGGSK.jpg",
  372294: "16/a6/372294_5TtTR.jpg",
  373153: "a1/2d/373153_u2rs5.jpg",
  388039: "e1/cd/388039_DJ7GF.jpg",
  389637: "c0/c5/389637_FKK3F.jpg",
  393603: "09/af/393603_c2uC4.jpg",
  394482: "46/af/394482_E6Z9e.jpg",
  411978: "4c/55/411978_UuMbY.jpg",
  433428: "26/b9/433428_8koGE.jpg",
  433526: "49/c8/433526_dUGLB.jpg",
  451195: "be/3a/451195_40t1L.jpg",
  456344: "98/5d/456344_WcdJ9.jpg",
  467520: "ec/71/467520_l1mxX.jpg",
  470830: "37/7a/470830_JWj93.jpg",
  475219: "08/8c/475219_dr5Rd.jpg",
  476442: "c6/af/476442_L9x2u.jpg",
  493365: "a4/3e/493365_w5RBV.jpg",
  506840: "ac/c1/506840_RdBrM.jpg",
  511444: "cc/6d/511444_oIzT2.jpg",
  525894: "30/16/525894_JgQfg.jpg",
  557554: "96/c7/557554_4lOgo.jpg",
  590822: "6a/ca/590822_iMmM5.jpg"
};
