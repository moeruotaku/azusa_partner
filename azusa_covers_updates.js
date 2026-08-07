// ==UserScript==
// @name        azusa_partner_library_azusa_covers_updates
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2026.08.07.42
// @description azusa_covers_updates
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       none
// ==/UserScript==

const azusa_covers = {
  33739: "https://lain.bgm.tv/r/400/pic/cover/l/4b/35/461481_TO8Om.jpg",
  33744: "https://img.azusa.wiki/i/2026/07/921f5dc6-2b61-438a-a5b4-e3b593376bdc.jpg",
  33748: "https://img.azusa.wiki/i/2026/07/3cbe58f2-559a-4347-be65-2a1dea965061.jpg",
  33751: "https://img.azusa.wiki/i/2026/07/aa83b563-f8bc-481b-9c5b-be5465b2eb94.jpg",
  33771: "https://img.azusa.wiki/i/2026/07/7904217b-29e8-469f-a46c-94512581ef50.jpg",
  33773: "https://img.azusa.wiki/i/2026/07/67973b60-1d3f-4962-b9bd-9162693c5207.jpg",
  33774: "https://img.azusa.wiki/i/2026/07/a762f5f3-b0f8-49af-a231-382fe684a906.jpg",
  33775: "https://img.azusa.wiki/i/2026/07/5be30632-761b-4b0e-a3b1-254a1fc934ae.jpg",
  33777: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2981450/c3022277e5d68b5bbabe49e238163ac17c7bc764/header.jpg?t=1766111132",
  33804: "https://lain.bgm.tv/r/400/pic/cover/l/c4/f2/611546_8pus3.jpg",
  33807: "https://img.azusa.wiki/i/2026/08/4428fed8-bf1b-48e4-a70a-53474bf6608f.jpg",
  33808: "https://img.azusa.wiki/i/2026/08/0112ab18-9451-4102-ba28-60c22add32c6.jpg",
  33809: "https://img.azusa.wiki/i/2026/08/acf33f8b-a917-4c90-8f52-da020ecdcf7c.jpg",
  33810: "https://img.azusa.wiki/i/2026/08/b7a38e91-a8cb-446f-8fb1-10acb7a0aa50.jpg",
  33811: "https://img.azusa.wiki/i/2026/08/64c60617-638f-42e9-ac81-65f402b811b5.jpg",
  33812: "https://img.azusa.wiki/i/2026/08/b60c6b8a-7356-45b0-94f2-c8622f1aca24.jpg",
  33813: "https://img.azusa.wiki/i/2026/08/591759f0-95e3-49d1-822d-5f204d5f0c70.jpg",
  33814: "https://img.azusa.wiki/i/2026/08/90b7a573-3f8c-4b85-954b-f2a6c60458fd.jpg",
  33815: "https://img.azusa.wiki/i/2026/08/6cc3c3f2-fb53-42b8-bf16-697f5e06c798.jpg",
  33816: "https://img.azusa.wiki/i/2026/08/862ffb0a-c866-4aca-8a49-fc2d25c35566.jpg",
  33817: "https://img.azusa.wiki/i/2026/08/a59d2dca-c0a4-407f-9344-a090a0ba0d57.jpg",
  33820: "https://img.azusa.wiki/i/2026/08/d5455dd3-2b36-43d4-8e15-77949af48ae9.jpg",
  33821: "https://img.azusa.wiki/i/2026/08/43ee2960-ad46-475a-b536-822e687792f1.jpg",
  33822: "https://img.azusa.wiki/i/2026/08/c060f2cd-e379-44dd-9413-b2fc40b37e5c.jpg",
  33823: "https://img.azusa.wiki/i/2026/08/d4374bb9-ad92-4a35-980c-1bf007cb3195.jpg",
  33824: "https://img.azusa.wiki/i/2026/08/e96494b3-23cd-4160-b426-3452e8701100.jpg",
  33825: "https://img.azusa.wiki/i/2026/08/cf685e20-8c7a-490c-8412-bd97ae7706c5.jpg",
  33826: "https://img.azusa.wiki/i/2026/08/0a6565f4-5205-4d88-85a3-f1b0e60f974e.jpg",
  33827: "https://img.azusa.wiki/i/2026/08/527c43fd-e0f4-499b-874f-41bd0b7bd62b.jpg",
  33828: "https://img.azusa.wiki/i/2026/08/26ea34a2-1df9-4233-bcce-0548e2705df5.jpg",
  33829: "https://img.azusa.wiki/i/2026/08/d4b55aa8-0e6c-4aa0-8b39-02db8e736b2d.jpg",
  33830: "https://img.azusa.wiki/i/2026/08/d241dabc-f41a-4180-893d-de0b6ee64e4c.jpg",
  33831: "https://img.azusa.wiki/i/2026/08/905059e2-2410-4432-9e07-bda9f2c1a445.jpg",
  33832: "https://img.azusa.wiki/i/2026/08/2d2bb693-ee57-4c18-a7fb-0b8b9c7d94a9.jpg",
  33833: "https://img.azusa.wiki/i/2026/08/d20c590d-d162-4734-b0dc-10460247f5fc.jpg",
  33835: "https://img.azusa.wiki/i/2026/08/f275c793-2980-47e2-bfa3-6e64d0c0b0fc.jpg",
  33836: "https://img.azusa.wiki/i/2026/08/443b679d-ee64-489f-bf70-2050b3d4ed64.jpg",
  33840: "https://img.azusa.wiki/i/2026/08/19c5bbcf-cd35-4cc6-b81a-6b37d03ca964.jpg",
  33841: "https://img.azusa.wiki/i/2026/08/47fa77cb-55f3-4074-aa8a-f9a51a6b3f1c.jpg",
  33842: "https://img.azusa.wiki/i/2026/08/c82571ce-3187-4908-b5c3-8a390ff43984.jpg",
  33846: "https://lain.bgm.tv/r/400/pic/cover/l/08/29/272436_KhK88.jpg",
  33847: "https://img.azusa.wiki/i/2026/08/a36fd66f-30a2-4628-b89d-fdb81da64ee9.jpg",
  33864: "https://lain.bgm.tv/r/400/pic/cover/l/de/76/241816_J4Uof.jpg",
  33878: "https://lain.bgm.tv/r/400/pic/cover/l/0f/68/332161_0mg8D.jpg",
  33881: "https://img.azusa.wiki/i/2026/08/4728472e-589b-4c53-95af-1c10d3d7e890.jpg",
  33882: "https://img.azusa.wiki/i/2026/08/33efff66-977c-4e8d-b550-43c53132e37b.jpg",
  33887: "https://lain.bgm.tv/r/400/pic/cover/l/59/df/297159_oLj9u.jpg",
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
  33934: "https://img.azusa.wiki/i/2026/08/95912490-10df-4428-8cc3-f62904b031e0.jpg"
};
