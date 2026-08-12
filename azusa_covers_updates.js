// ==UserScript==
// @name        azusa_partner_library_azusa_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.08.12.78
// @description azusa_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const azusa_covers = {
  33895: "https://lain.bgm.tv/r/400/pic/cover/l/58/91/241800_HhnPD.jpg",
  33896: "https://img.azusa.wiki/i/2026/08/a59d2dca-c0a4-407f-9344-a090a0ba0d57.jpg",
  33899: "https://img.azusa.wiki/i/2026/08/a2c6e86f-ee1d-4561-ae90-8b44219b0ca6.jpg",
  33909: "https://img.azusa.wiki/i/2026/08/e97f675a-0e39-49ff-bfb0-60064cb770f4.jpg",
  33910: "https://img.azusa.wiki/i/2026/08/5af796e7-2011-401c-8364-1c87f8608ac1.jpg",
  33911: "https://img.azusa.wiki/i/2026/08/7b8338ac-d916-4b27-805e-342104a53fab.jpg",
  33912: "https://img.azusa.wiki/i/2026/08/dc6399de-364e-4463-b6fc-363de2c2e467.jpg",
  33913: "https://img.azusa.wiki/i/2026/08/d086d289-7856-422a-8e9e-ed9b82e350ed.jpg",
  33914: "https://img.azusa.wiki/i/2026/08/1743a358-7dcf-4989-8107-3e39464bb5b7.jpg",
  33926: "https://img.azusa.wiki/i/2026/08/2a694301-15e2-459c-aa85-f1b2e79ae720.jpg",
  33927: "https://img.azusa.wiki/i/2026/08/76588e3a-2051-4061-a65e-14f0b8e95d91.jpg",
  33930: "https://img.azusa.wiki/i/2026/08/c557889d-cf99-43a3-8826-78f4d39d83ce.jpg",
  33932: "https://img.azusa.wiki/i/2026/08/22270e9a-a67f-4da5-a0a4-47f24de6fcb6.jpg",
  33933: "https://img.azusa.wiki/i/2026/08/af06ee0d-8254-40ac-9957-556e02ec3d0c.jpg",
  33934: "https://img.azusa.wiki/i/2026/08/95912490-10df-4428-8cc3-f62904b031e0.jpg",
  33941: "https://img.azusa.wiki/i/2026/08/1a9a4fc6-6e20-4a13-9220-8ad9660b7685.jpg",
  33942: "https://img.azusa.wiki/i/2026/08/595c14c0-146e-4c6b-b654-c35c1ba69488.jpg",
  33943: "https://img.azusa.wiki/i/2026/08/a3917b13-e8cd-428c-ab91-6890df8f4ce8.jpg",
  33952: "https://img.azusa.wiki/i/2026/08/9b6c6d5a-fad3-408a-83eb-d29eef804993.jpg",
  33954: "https://img.azusa.wiki/i/2026/08/e4023892-9078-4bd2-a723-c2235ff81ec0.jpg",
  33958: "https://img.azusa.wiki/i/2026/08/ef9302da-a99a-4ce3-b03a-a826f16b8ef6.jpg",
  33962: "https://img.azusa.wiki/i/2026/08/27438c91-00f2-456a-a1d3-a3a80af8beca.jpg",
  33966: "https://img.azusa.wiki/i/2026/08/b5778593-c034-44f7-b8bd-b4bcddc5392d.jpg",
  33967: "https://img.azusa.wiki/i/2026/08/472ad69d-ccf5-4fdd-b5af-02eb3c9b4d08.jpg",
  33990: "https://img.azusa.wiki/i/2026/08/4231655a-4deb-4e25-9d88-238facf56641.jpg",
  33992: "https://img.azusa.wiki/i/2026/08/421a767f-f9fb-4db0-a4fa-9beb30a8bdc7.jpg",
  33995: "https://img.azusa.wiki/i/2026/08/12c686fe-0522-4934-b9e1-aaa4604d9e74.jpg",
  33997: "https://img.azusa.wiki/i/2026/08/ce82e24c-6c43-49b5-8f9f-9ef17262951a.jpg",
  34001: "https://img.azusa.wiki/i/2026/08/1b36f368-dc2f-40f9-8164-4838ec5e33f5.jpg",
  34004: "https://img.azusa.wiki/i/2026/08/ea768421-33ad-4914-b254-9291cdf40c1f.jpg",
  34007: "https://img.azusa.wiki/i/2026/08/6c9de7a9-673e-4f5d-9ed0-3a4735032eb8.jpg",
  34008: "https://img.azusa.wiki/i/2026/08/779ba587-8003-46c6-ae3c-7046d8be83f4.jpg",
  34010: "https://img.azusa.wiki/i/2026/08/a876ce0d-a3ab-4ef0-b1df-a1da010859d0.jpg",
  34011: "https://img.azusa.wiki/i/2026/08/a4d377e3-d9ea-447c-9559-30f82bd33360.jpg",
  34012: "https://img.azusa.wiki/i/2026/08/d179d5c0-d764-4442-bd6b-cd636f62e7ec.jpg",
  34014: "https://img.azusa.wiki/i/2026/08/5450e86b-7a94-4c54-b726-f86df2d79cae.jpg",
  34022: "https://img.azusa.wiki/i/2026/08/a38ea11e-6298-4d4d-bb94-9999cad46761.jpg",
  34023: "https://img.azusa.wiki/i/2026/08/7e0fd0af-d7e5-42c3-89fc-1864a184050b.jpg"
};
