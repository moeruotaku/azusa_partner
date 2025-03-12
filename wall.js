// ==UserScript==
// @name        azusa_partner_wall
// @namespace   https://greasyfork.org/users/1396048-moeruotaku
// @version     2025.3.12.1396
// @description add wall to azusa
// @author      moeruotaku
// @license     MIT
// @match       https://azusa.wiki/torrents.php*
// @match       https://zimiao.icu/torrents.php*
// @icon        https://bgm.tv/img/favicon.ico
// @grant       unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    let table = document.getElementsByClassName('torrents')[0];
    if (!table) return;

    let [card_width, card_height] = [240, 360];

    let azusa_partner_wall_css = new CSSStyleSheet();
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, azusa_partner_wall_css];
    azusa_partner_wall_css.replaceSync(`
#nexus-preview {
    border: 1px solid #000;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    display: flex;
    flex-direction: column;
    width: ${card_width}px;
    margin: 8px;
    background-color: #F5F5F5;
    border-radius: 8px;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.32), 0 3px 6px 0 rgba(0, 0, 0, 0.24), 0 5px 12px 4px rgba(0, 0, 0, 0.18);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.64), 0 3px 6px 0 rgba(0, 0, 0, 0.48), 0 5px 12px 4px rgba(0, 0, 0, 0.36);
}

.card_cover {
    position: relative;
}

.card_cover:hover .card_bgm_tags span {
    display: initial;
}

.card_image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${card_height}px;
    overflow: hidden;
    background-color: #CCC;
    border-radius: 8px 8px 0 0;
}

.card_image img {
    width: auto;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.card_free {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    line-height: 1;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 8px 0 0 0;
}

.card_free img {
    border-radius: 8px 0 0 0;
}

.card_bgm_score {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    padding: 4px;
    text-align: center;
    font-size: 18px;
    color: #E800A4;
    background-color: rgba(255, 255, 255, 0.75);
    border: 2px solid #E800A4;
    border-radius: 50%;
}

.card_bgm_tags {
    position: absolute;
    left: 0;
    bottom: 26px;
    display: flex;
    flex-wrap: wrap;
    pointer-events: none;
}

.card_bgm_tags span {
    display: none;
    padding: 0 4px;
    margin: 4px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.75);
    border: 1px solid #CCC;
    border-radius: 2px;
}

.card_tags {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 8px);
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.5);
}

.card_tags span {
    border-radius: 2px !important;
}

.card_title {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 2px;
    text-align: center;
}

.card_footer {
    display: flex;
    justify-content: space-evenly;
    font-family: auto;
}
`);

    table.parentNode.insertBefore(document.createElement('div'), table).outerHTML = `
<div name="switch_view" style="display: flex; margin-bottom: 4px; color: #FFF; font-weight: bold">
    <div style="padding: 4px; border: 1px solid #CCC; cursor: pointer" onclick="window.azusa_partner_wall('table')">表格</div>
    <div style="padding: 4px; border: 1px solid #CCC; cursor: pointer; margin-left: 4px" onclick="window.azusa_partner_wall('cards')">卡片</div>
</div>`;

    (unsafeWindow.azusa_partner_wall = (view) => {
        let buttons = document.querySelector('div[name=switch_view]');
        buttons.children[0].style['background-color'] = view === 'table' ? '#FF9718' : '#CCC';
        buttons.children[1].style['background-color'] = view === 'cards' ? '#FF9718' : '#CCC';

        let settings = JSON.parse(localStorage.getItem('azusa_partner') || '{}');
        settings.last_view = view;
        localStorage.setItem('azusa_partner', JSON.stringify(settings));

        let table = document.getElementsByClassName('torrents')[0];
        if (table) table.style.display = view === 'table' ? 'table' : 'none';

        let cards = document.getElementsByClassName('cards')[0];
        if (cards) cards.style.display = view === 'cards' ? 'flex' : 'none';
    })(JSON.parse(localStorage.getItem('azusa_partner') || '{}').last_view || 'table');

    unsafeWindow.azusa_partner_callback = () => {
        let rows = Array.from(table.children[0].children);

        let cards = document.getElementsByClassName('cards')[0];
        if (!cards) (cards = table.parentNode.insertBefore(document.createElement('div'), table)).className = 'cards';
        cards.style.display = (JSON.parse(localStorage.getItem('azusa_partner') || '{}').last_view || 'table') === 'cards' ? 'flex' : 'none';
        cards.innerHTML = '';

        // ['类型', '封面', '标题', '评论数', '存活时间', '大小', '种子数/下载数/完成数']
        let headers = Array.from(rows[0].children).map((e) => e.children.length > 0 ? Array.from(e.children).map((e) => (e.children.length > 0 ? e.children[0].title : e.innerText)).join('/') : e.innerText);

        let bodies = rows.slice(1).map((tr) => {
            let o = {};
            Array.from(tr.children).forEach((td, i) => {
                if (false);
                else if (headers[i] === '类型') o.cat = td.querySelector('a')?.href?.replace(/^.*cat=([^&]+).*$/, '$1');
                else if (headers[i] === '封面') o.cover = td.querySelector('img')?.src;
                else if (headers[i] === '标题') {
                    o.href = td.querySelector('a')?.href;

                    o.process = td.querySelector('td>div:last-child');
                    if (o.process && (o.process.getAttribute('name') === 'tags' || o.process.tagName === 'SPAN')) o.process = undefined;

                    o.bgm_tags = td.querySelector('div[name=tags]');
                    if (o.bgm_tags) o.bgm_tags = o.bgm_tags.innerText.split('|').filter((e) => e.length);

                    o.bgm_score = td.querySelector('td[name=score]');
                    if (o.bgm_score) o.bgm_score = `<a href="${o.bgm_score.querySelector('a')?.href || '#'}"><div class="card_bgm_score">${o.bgm_score.innerText === 'N/A' ? '-' : o.bgm_score.innerText}</div></a>`;

                    let titles = Array.from(td.querySelector('td').childNodes);
                    let ai = titles.findIndex((e) => e.tagName === 'A');
                    let ii = titles.slice(ai).findIndex((e) => e.tagName === 'IMG');
                    let bi = titles.findIndex((e) => e.tagName === 'BR');
                    o.pins = titles.slice(0, ai).map((e) => e.outerHTML);
                    o.title = titles.slice(ai)[0].outerHTML;
                    o.free = ii !== -1 ? titles.slice(ai + ii, ai + ii + 3).map((e) => e.outerHTML).join('') : undefined;
                    o.tags = titles.slice(bi).filter((e) => e.tagName === 'SPAN').map((e) => e.outerHTML).join('');
                    o.info = titles.slice(bi).find((e) => e.nodeType === 3)?.textContent;
                    o.buttons = Array.from(td.querySelector('td:last-child').querySelectorAll('a')).map((e) => e.outerHTML).join('');
                } else if (headers[i] === '评论数') o.comment = td.innerHTML;
                else if (headers[i] === '存活时间') o.datetime = td.innerHTML.replace(/<br>/g, '');
                else if (headers[i] === '大小') o.size = td.innerText.replace(/\n/g, ' ');
                else if (headers[i] === '种子数/下载数/完成数') o.pt = td.innerText.split(' / ');
                return td.innerHTML;
            });
            return o;
        });

        let cat_names = { 402: 'Comic', 403: 'Light Novel', 404: 'Game', 407: 'CG', 409: 'Music' };
        let cat_colors = { 402: '#E195A3', 403: '#E49ACB', 404: '#AA96EB', 407: '#E7BC8F', 409: '#90C0EB' };

        bodies.forEach((body, i) => {
            let card = cards.appendChild(document.createElement('div'));
            card.className = 'card';
            card.innerHTML = `
                <div class="card_cover">
                    <a class="card_image" href="${body.href}">${body.cover ? `<img class="nexus-lazy-load preview" src="${body.cover}" />` : `<div style="width: ${card_width}px; height: ${card_height}px"></div>`}</a>
                    ${body.free || body.pins.length > 0 ? `<div class="card_free">${body.free ?? ''}${body.pins.join('') ?? ''}</div>` : ''}
                    ${body.bgm_score ? body.bgm_score : ''}
                    ${body.bgm_tags && body.bgm_tags.length > 0 ? `<div class="card_bgm_tags">${body.bgm_tags.map((e) => `<span>${e}</span>`).join('')}</div>` : ''}
                    <div class="card_tags"><span style="background-color: ${cat_colors[body.cat]}; color: #FFF; border-radius: 0; font-size:12px; margin: 0 4px 0 0; padding: 1px 2px">${cat_names[body.cat]}</span>${body.tags ? `${body.tags}` : ''}</div>
                </div>
                <div class="card_title">
                    <div>${body.title}</div>
                    ${body.info ? `<div style="color: #555; font-size: 8pt">${body.info}</div>` : ''}
                </div>
                ${body.process ? body.process.outerHTML : '<div style="padding: 1px; margin-top: 2px; border: 1px solid #838383"><div style="width: 100%; height: 2px; background-color: white"></div></div>'}
                <div class="card_footer"><span>${body.size}</span>${body.datetime}${body.buttons}<span style="color: green">↑${body.pt[0]}</span><span style="color: red">↓${body.pt[1]}</span><span>✓${body.pt[2]}</span></div>`;

            if (i < bodies.length - 1 && !body.pins.length !== !bodies[i + 1].pins.length) cards.appendChild(document.createElement('div')).outerHTML = `<div style="width: 100%; height: 2px; background-color: #AAA"></div>`;
        });
    };
})();
