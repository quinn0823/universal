/* Universal
The MIT License (MIT)
Copyright (c) 2025 Jonathan Chiu */

let lang = document.documentElement.lang;
// lang = 'zh-CN';
if (!lang) {
    console.warn('Language tag not found. Defaulting to "en-US".');
    document.documentElement.lang = 'en-US';
    lang = 'en-US';
} else {
    // console.log(lang);
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

(function () {
    let headerHtmlArray = [];

    // Title
    let title = document.title.split(' | ')[0];
    let titleElement = document.getElementById('universal-title');
    if (titleElement && titleElement.innerHTML) {
        title = titleElement.innerHTML;
    }
    // console.log(title);
    const titleHtml = `<h1 id="universal-title">${title}</h1>`;
    headerHtmlArray.push(titleHtml);


    const headerMetaContent = {
        'description': null
    };
    Object.keys(headerMetaContent).forEach(key => {
        headerMetaContent[key] = document.querySelector(`meta[name="${key}"]`)?.content || metaContent[key];
    });
    // console.log(metaContent);

    // Description
    const description = metaContent['description'];
    const descriptionHtml = `<p id="universal-description">${description}</p>`;
    headerHtmlArray.push(descriptionHtml);

    headerHtml = headerHtmlArray.join('');

    const headerElement = document.getElementById('universal-header');
    headerElement.innerHTML = headerHtml;

    let baseUri = document.baseURI;
    if (!baseUri.includes('github.io')) {
        baseUri = 'https://quinn0823.github.io/universal/';
    }
    const domain = baseUri.split('/')[2];
    const githubUserName = domain.split('.')[0];
    const githubRepoName = baseUri.split('/')[3];
    const githubRepoUrl = `https://github.com/${githubUserName}/${githubRepoName}`;
    // console.log(baseUri, domain, githubUserName, githubRepoName, githubRepoUrl);

    const LICENSE_MAP = {
        'GPL-3.0': 'The GNU General Public License v3.0 (GPL-3.0)',
        'MIT': 'The MIT License (MIT)'
    };
    const LINK_MAP = {
        'repo': {
            'enable': true,
            'text': getLocalization('universal.footer.links.repo'),
            'url': githubRepoUrl
        },
        'jon-web': {
            'enable': false,
            'text': getLocalization('universal.footer.links.jon_web'),
            'url': `https://${domain}`
        },
        'github': {
            'enable': true,
            'text': 'GitHub',
            'url': `https://github.com/${githubUserName}`
        },
        'x': {
            'enable': false,
            'text': getLocalization('universal.footer.links.twitter'),
            'url': 'https://x.com/jonathanchiu'
        },
        'weibo': {
            'enable': false,
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
    // console.log(metaContent);

    let footerHtmlArray = [];

    // Updated Date
    if (metaContent['updated-date']) {
        const updatedDate = new Date(metaContent['updated-date']).toLocaleDateString(lang, getLocalization('universal.footer.updated_date.locale.options')).replace(getLocalization('universal.footer.updated_date.replace.pattern'), getLocalization('universal.footer.updated_date.replace.replacement'));
        const updatedDateHtml = `${getLocalization('universal.footer.updated_date.title')}<time datetime="${metaContent['updated-date']}">${updatedDate}</time>`
        footerHtmlArray.push(updatedDateHtml);
    }

    // License & Copyright
    const licenseName = metaContent['license'];
    const licenseNameFull = LICENSE_MAP[licenseName];
    if (licenseName && licenseNameFull) {
        const copyrightHtml = `Copyright © ${metaContent['copyright-year']} ${metaContent['author']}`;
        const licenseHtml = `<p>${licenseNameFull}</p>`;
        footerHtmlArray.push(licenseHtml, copyrightHtml);
    } else {
        const copyrightHtml = `Copyright © ${metaContent['copyright-year']} ${metaContent['author']} ${getLocalization('universal.footer.copyright.notice')}`;
        footerHtmlArray.push(copyrightHtml);
    }

    // Links
    // const links = Object.keys(LINK_MAP).map(key => {
    //     if (LINK_MAP[key]['enable']) {
    //         const text = LINK_MAP[key]['text'];
    //         const url = LINK_MAP[key]['url'];
    //         return `<a href="${url}" target="_blank">${text}</a>`;
    //     } else {
    //         return null;
    //     }
    // });
    const links = [];
    for (const key in LINK_MAP) {
        if (LINK_MAP[key]['enable']) {
            const text = LINK_MAP[key]['text'];
            const url = LINK_MAP[key]['url'];
            links.push(`<a href="${url}" target="_blank">${text}</a>`);
        }
    }
    const linksHtml = links.join(' | ');
    footerHtmlArray.push(linksHtml);

    // console.log(footerHtmlArray);

    footerHtmlArray = footerHtmlArray.map(item => `<p>${item}</p>`);
    const footerHtml = footerHtmlArray.join('');

    const footerElement = document.getElementById('universal-footer');
    footerElement.innerHTML = footerHtml;
})();