// ==UserScript==
// @name        azusa_partner_library_azusa_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.08.15.61
// @description azusa_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const azusa_covers = {
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
  34023: "https://img.azusa.wiki/i/2026/08/7e0fd0af-d7e5-42c3-89fc-1864a184050b.jpg",
  34029: "https://img.azusa.wiki/i/2026/08/1f84289d-2b75-4325-b5bc-574f9b6a7506.jpg",
  34030: "https://img.azusa.wiki/i/2026/08/ad93dea4-ef0b-49b3-b3e3-242626458ae8.jpg",
  34031: "https://img.azusa.wiki/i/2026/08/99b0ba01-67c5-4de5-8faf-42cd5876f0b8.jpg",
  34032: "https://img.azusa.wiki/i/2026/08/6ab0c31c-ca1a-4ef6-a745-edc857cef567.jpg",
  34034: "https://img.azusa.wiki/i/2026/08/3848a2ce-6c9f-4343-96de-a96db36b5226.jpg",
  34039: "https://img.azusa.wiki/i/2026/08/cad15175-2002-4670-b0ee-d3da72880100.jpg",
  34051: "https://img.azusa.wiki/i/2026/08/4628b74a-9050-400c-b8c0-ca7343c1e6a4.jpg",
  34052: "https://img.azusa.wiki/i/2026/08/c18396b5-1fbb-4f4f-b56b-7667b6455318.jpg",
  34055: "https://img.azusa.wiki/i/2026/08/ade2134b-dc9a-496f-8264-8123678fca1d.jpg",
  34057: "https://img.azusa.wiki/i/2026/08/325a6a18-ed6b-4c4d-9470-d20e0b01f426.jpg",
  34058: "https://img.azusa.wiki/i/2026/08/f3ea0b44-4f83-499c-be3f-fb9c61b5b3ca.jpg",
  34060: "https://img.azusa.wiki/i/2026/08/61427438-cd0f-4b79-9453-d4de94eefd9d.jpg",
  34068: "https://img.azusa.wiki/i/2026/08/86b6d76c-3a39-4e7f-978d-2e6bedc3e8c1.jpg"
};
