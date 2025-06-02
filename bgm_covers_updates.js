// ==UserScript==
// @name        azusa_partner_library_bgm_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.06.02.80
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
  11254: "50/f9/11254_ZZ900.jpg",
  26854: "03/01/26854_NnlaA.jpg",
  35572: "21/51/35572_mAB08.jpg",
  38736: "33/a5/38736_a76Zu.jpg",
  45234: "d9/a4/45234_fTZoh.jpg",
  49153: "36/64/49153_rY7R2.jpg",
  61671: "1d/9f/61671_UOO94.jpg",
  90813: "b5/6f/90813_F2WEE.jpg",
  117115: "1b/c6/117115_06dtl.jpg",
  134362: "8e/0a/134362_Hn9GH.jpg",
  175459: "81/5a/175459_RAH87.jpg",
  186677: "0a/34/186677_0jT7d.jpg",
  193910: "73/e4/193910_DWrNj.jpg",
  218102: "62/df/218102_1ACAI.jpg",
  222583: "6d/1b/222583_biI39.jpg",
  225513: "72/bb/225513_rd31O.jpg",
  240662: "99/9b/240662_C40sX.jpg",
  248670: "c5/10/248670_94QK9.jpg",
  270407: "be/52/270407_287Ee.jpg",
  283293: "f3/b3/283293_5DV56.jpg",
  292001: "9f/99/292001_7UJOQ.jpg",
  295589: "15/04/295589_vv9RE.jpg",
  300938: "b9/38/300938_nIMpb.jpg",
  305869: "99/16/305869_r5hbA.jpg",
  307237: "14/fa/307237_5KNYE.jpg",
  308990: "6e/38/308990_TZNRs.jpg",
  327974: "55/95/327974_Ggvuz.jpg",
  330850: "b1/fb/330850_pI52h.jpg",
  335750: "8a/5a/335750_DXVps.jpg",
  336604: "c9/d9/336604_gXegp.jpg",
  338894: "a4/df/338894_g7KTF.jpg",
  340296: "64/34/340296_HgvIg.jpg",
  341376: "9c/bb/341376_5MD5B.jpg",
  343684: "6d/71/343684_nsJlL.jpg",
  348056: "2d/ee/348056_0csbw.jpg",
  355148: "08/7f/355148_vT1kz.jpg",
  355555: "0c/26/355555_F43Vf.jpg",
  375025: "0b/8c/375025_wDKQy.jpg",
  379831: "4e/dc/379831_99a5S.jpg",
  401749: "92/ce/401749_znvV3.jpg",
  404609: "d2/10/404609_d6Jmp.jpg",
  416868: "89/69/416868_SBdja.jpg",
  422182: "b4/72/422182_20p88.jpg",
  432523: "e0/3f/432523_iaqCA.jpg",
  433428: "26/b9/433428_8koGE.jpg",
  439275: "3f/77/439275_9F292.jpg",
  442710: "d5/86/442710_vvTtS.jpg",
  443569: "62/3d/443569_euktu.jpg",
  446647: "ec/cc/446647_U5ZCC.jpg",
  448550: "8c/49/448550_p5p29.jpg",
  452281: "07/71/452281_GlkMo.jpg",
  459617: "5c/5f/459617_9s6Bc.jpg",
  467683: "16/8b/467683_3yL37.jpg",
  481730: "12/df/481730_xaRSj.jpg",
  497214: "7b/e8/497214_9izRM.jpg",
  515211: "15/9b/515211_pjdCU.jpg",
  529662: "ec/3a/529662_uBOfO.jpg"
};
