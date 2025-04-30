/* Universal The universal images, styles and scripts for my web projects.

Copyright (C) 2025 Jonathan Chiu

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */
    
let lang = document.documentElement.lang;
// lang = 'zh-CN';
if (!lang) {
    console.warn('Language tag not found. Defaulting to "en-US".');
    document.documentElement.lang = 'en-US';
    lang = 'en-US';
} else {
    console.log(lang);
}

function getLocalization(key) {
    const LOCALIZATION_MAP = {
        'en-US': {
            'universal.footer.updated_date.title': 'Updated Date: ',
            'universal.footer.updated_date.locale.options': {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            },
            'universal.footer.updated_date.replace.pattern': null,
            'universal.footer.updated_date.replace.replacement': null,
            'universal.footer.copyright.notice': 'All rights reserved.',
            'universal.footer.license.front': 'Licensed under the ',
            'universal.footer.license.back': '.',
            'universal.footer.links.repo': 'Repository',
            'universal.footer.links.jon_web': 'Jonathan\'s Bytecraft',
            'universal.footer.links.twitter': '\ud835\udd4f',
            'universal.footer.links.weibo': 'Weibo'
        },
        'zh-CN': {
            'universal.footer.updated_date.title': '更新日期：',
            'universal.footer.updated_date.locale.options': {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            },
            'universal.footer.updated_date.replace.pattern': /(\d{4})\/(\d{2})\/(\d{2})/,
            'universal.footer.updated_date.replace.replacement': '$1 年 $2 月 $3 日',
            'universal.footer.copyright.notice': '保留所有权利。',
            'universal.footer.license.front': '根据 ',
            'universal.footer.license.back': ' 授权。',
            'universal.footer.links.repo': '存储库',
            'universal.footer.links.jon_web': '煊名的字节世界',
            'universal.footer.links.twitter': '\ud835\udd4f (推特)',
            'universal.footer.links.weibo': '微博'
        }
    }

    const localization = LOCALIZATION_MAP[lang][key];
    if (localization !== undefined) {
        return localization;
    } else {
        console.warn(`Localization for "${key}" not found.`);
        return key;
    }
}

(function() {
    let baseUri = 'https://quinn0823.github.io/universal/'
    baseUri = document.baseURI;
    const domain = baseUri.split('/')[2];
    const githubUserName = domain.split('.')[0];
    const githubRepoName = baseUri.split('/')[3];
    const githubRepoUrl = `https://github.com/${githubUserName}/${githubRepoName}`;
    console.log(baseUri, domain, githubUserName, githubRepoName, githubRepoUrl);

    const LICENSE_MAP = {
        'GPL-3.0': 'GNU General Public License v3.0'
    };
    const LINK_MAP = {
        'repo': {
            'text': getLocalization('universal.footer.links.repo'),
            'url': githubRepoUrl
        },
        'jon-web': {
            'text': getLocalization('universal.footer.links.jon_web'),
            'url': `https://${domain}`
        },
        'github': {
            'text': 'GitHub',
            'url': `https://github.com/${githubUserName}`
        },
        'x': {
            'text': getLocalization('universal.footer.links.twitter'),
            'url': 'https://x.com/jonathanchiu'
        },
        'weibo': {
            'text': getLocalization('universal.footer.links.weibo'),
            'url': 'https://weibo.com/quinn0823'
        }
    }

    const metaContent = {
        'author': 'Jonathan Chiu',
        'license': null,
        'copyright-year': new Date().getFullYear().toString(),
        'updated-date': null,
    };   
    Object.keys(metaContent).forEach(key => {
        metaContent[key] = document.querySelector(`meta[name="${key}"]`)?.content || metaContent[key];
    });
    console.log(metaContent);

    let footerHtmlArray = [];

    // Updated Date
    if (metaContent['updated-date']) {
        const updatedDate = new Date(metaContent['updated-date']).toLocaleDateString(lang, getLocalization('universal.footer.updated_date.locale.options')).replace(getLocalization('universal.footer.updated_date.replace.pattern'), getLocalization('universal.footer.updated_date.replace.replacement'));
        const updatedDateHtml = `${getLocalization('universal.footer.updated_date.title')}<time datetime="${metaContent['updated-date']}">${updatedDate}</time>`
        footerHtmlArray.push(updatedDateHtml);
    }

    // Copyright & License
    if (metaContent['license']) {
        const copyrightHtml = `Copyright © ${metaContent['copyright-year']} ${metaContent['author']}`;
        const license = LICENSE_MAP[metaContent['license']];
        const licenseHtml = `${getLocalization('universal.footer.license.front')}<a href="${githubRepoUrl}/blob/main/LICENSE" target="_blank">${license}</a>${getLocalization('universal.footer.license.back')}`;
        footerHtmlArray.push(copyrightHtml, licenseHtml);
    } else {
        const copyrightHtml = `Copyright © ${metaContent['copyright-year']} ${metaContent['author']} ${getLocalization('universal.footer.copyright.notice')}`;
        footerHtmlArray.push(copyrightHtml);
    }

    // Links
    const links = Object.keys(LINK_MAP).map(key => {
        const text = LINK_MAP[key]['text'];
        const url = LINK_MAP[key]['url'];
        return `<a href="${url}" target="_blank">${text}</a>`;
    });
    const linksHtml = links.join(' | ');
    footerHtmlArray.push(linksHtml);

    console.log(footerHtmlArray);

    footerHtmlArray = footerHtmlArray.map(item => `<p>${item}</p>`);
    const footerHtml = `<hr />${footerHtmlArray.join('')}`;

    const footerElement = document.getElementById('universal-footer');
    footerElement.innerHTML = footerHtml;
})();