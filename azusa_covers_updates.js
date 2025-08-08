// ==UserScript==
// @name        azusa_partner_library_azusa_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.08.09.04
// @description azusa_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const azusa_covers = {
  29537: "https://img.azusa.wiki/images/2025/08/03/fef8026c76a53646bc074280de4eb62d3062c360.png310w_.jpg",
  29553: "//lain.bgm.tv/r/400/pic/cover/l/1a/91/441606_aramE.jpg",
  29562: "https://ptpimg.me/56j641.jpg",
  29563: "https://ptpimg.me/thhje5.jpg",
  29573: "https://ptpimg.me/76f64h.jpg",
  29575: "//lain.bgm.tv/pic/cover/l/d0/4a/514431_rV99r.jpg",
  29577: "//lain.bgm.tv/r/400/pic/cover/l/18/43/563754_z76QA.jpg",
  29578: "https://ptpimg.me/47wqx6.jpg",
  29581: "https://img.azusa.wiki/images/2025/08/05/344493_KDk66.jpg",
  29583: "https://lain.bgm.tv/pic/cover/l/45/84/335911_6h5wM.jpg",
  29584: "https://img.azusa.wiki/images/2025/08/05/001001.jpg",
  29585: "https://img.azusa.wiki/images/2024/10/13/image.png",
  29588: "https://img.azusa.wiki/images/2025/08/05/cover.jpg",
  29591: "https://ptpimg.me/d1yr8e.jpg",
  29592: "//lain.bgm.tv/r/400/pic/cover/l/4f/ae/495731_05KKP.jpg",
  29595: "https://ptpimg.me/g75yqs.jpg",
  29630: "https://ptpimg.me/bmyvu0.jpg",
  29631: "https://ptpimg.me/17qu17.jpg",
  29632: "https://ptpimg.me/3m4w41.jpg",
  29636: "https://ptpimg.me/9pf6r3.jpg",
  29638: "https://ptpimg.me/z20927.jpg",
  29645: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3808560/0c0a4659b40d956fd81c9d82ca81c3ba04c7c4a8/header.jpg?t=1753146019",
  29650: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_060752_955.png",
  29653: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_085223_609.png",
  29654: "https://img.pterclub.com/images/2025/08/08/Cover.jpg",
  29663: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_171409_896.png",
  29664: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_172650_037.png",
  29666: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_175249_609.png",
  29669: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_180243_401.png",
  29672: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_185911_244.png",
  29674: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_190309_583.png",
  29675: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_190420_670.png",
  29678: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_194748_261.png",
  29680: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_195053_539.png",
  29681: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_195249_755.png",
  29682: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_195503_086.png",
  29683: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_195711_119.png",
  29685: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_200345_004.png",
  29686: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_200520_711.png",
  29687: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_200653_594.png",
  29689: "https://img.azusa.wiki/images/2025/08/08/cover.jpg",
  29690: "https://img.azusa.wiki/images/2025/08/08/cover2af37fd2de1263ef.jpg",
  29693: "https://img.azusa.wiki/images/2025/08/08/coverdf7dfe15460c3480.jpg",
  29695: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_224633_812.png",
  29696: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_225953_210.png",
  29697: "https://img.azusa.wiki/images/2025/08/08/covera2450236b2a9a299.jpg",
  29698: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_225140_271.png",
  29699: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_225402_100.png",
  29700: "https://img.azusa.wiki/images/2025/08/08/wechat_2025-08-08_225640_598.png",
  29701: "https://img.azusa.wiki/images/2025/08/09/cover.jpg"
};
