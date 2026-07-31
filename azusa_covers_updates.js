// ==UserScript==
// @name        azusa_partner_library_azusa_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.07.31.61
// @description azusa_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const azusa_covers = {
  33625: "https://img.azusa.wiki/i/2026/07/f9ca81a6-f824-43dc-a054-0ecaaf36a096.jpg",
  33629: "https://img.azusa.wiki/i/2026/07/ae0e1e8d-eddb-499a-8a59-9ee2d15a8434.jpg",
  33644: "https://img.azusa.wiki/i/2026/07/87ddfc8f-3b86-4663-ad31-c8e2368bc460.jpg",
  33662: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4778760/d6e240e18acf90c2265100f12c0227440eaa881b/header.jpg?t=1780813045",
  33663: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3818900/c839a76c69aea43d9cb794be1090fe1b17a16e83/header_schinese.jpg?t=1780935577",
  33668: "https://img.azusa.wiki/i/2026/07/3e2add04-dc4f-4da4-83f2-aa74c76a5c85.jpg",
  33674: "https://img.azusa.wiki/i/2026/07/3bb1f450-b5e0-4de1-906b-464b3723de5a.jpg",
  33680: "https://img.azusa.wiki/i/2026/07/f7732d53-f36f-4a31-ada2-e51499c14a8b.jpg",
  33685: "https://img.azusa.wiki/i/2026/07/34c2b31a-bd01-49d5-a5bd-3f4a55a6d113.jpg",
  33689: "https://lain.bgm.tv/r/400/pic/cover/l/65/f7/581457_xCh1x.jpg",
  33690: "https://lain.bgm.tv/r/400/pic/cover/l/fd/6b/29416_4qcgd.jpg",
  33693: "https://lain.bgm.tv/r/400/pic/cover/l/46/ce/639874_P3phZ.jpg",
  33694: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4567710/c98f2875b4209e755a04ed9d60d85c85745198fa/header_schinese.jpg?t=1784325042",
  33709: "https://img.azusa.wiki/i/2026/07/c7a30f0b-474e-4da7-9d45-36fe5d746b1b.jpg",
  33719: "https://img.azusa.wiki/i/2026/07/16316748-3b8b-453c-94ef-26fc0b8cdef3.jpg",
  33727: "https://img.azusa.wiki/i/2026/07/258b020e-c73e-4911-bf2b-120c25d580d3.png",
  33732: "https://lain.bgm.tv/r/400/pic/cover/l/b9/2c/566727_fEk9Y.jpg",
  33733: "https://img.azusa.wiki/i/2026/07/f2c335fe-7b4d-4179-8fe1-87a5409a40ac.jpg",
  33739: "https://lain.bgm.tv/r/400/pic/cover/l/4b/35/461481_TO8Om.jpg",
  33744: "https://img.azusa.wiki/i/2026/07/921f5dc6-2b61-438a-a5b4-e3b593376bdc.jpg",
  33748: "https://img.azusa.wiki/i/2026/07/3cbe58f2-559a-4347-be65-2a1dea965061.jpg",
  33751: "https://img.azusa.wiki/i/2026/07/aa83b563-f8bc-481b-9c5b-be5465b2eb94.jpg"
};
