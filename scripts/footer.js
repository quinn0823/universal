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

    const metaContent = {
        'author': 'Jonathan Chiu',
        'license': null,
        'year': new Date().getFullYear().toString(),
        'updated-date': null,
    };   
    Object.keys(metaContent).forEach(key => {
        metaContent[key] = document.querySelector(`meta[name="${key}"]`)?.content || metaContent[key];
    });
    console.log(metaContent);

    let footerHtmlArray = [];

    // Updated Date
    if (metaContent['updated-date']) {
        const updatedDate = new Date(metaContent['updated-date']).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric'
        });
        const updatedDateHtml = `Updated Date: <time datetime="${metaContent['updated-date']}">${updatedDate}</time>`
        footerHtmlArray.push(updatedDateHtml);
    }

    // Copyright & License
    if (metaContent['license']) {
        const copyrightHtml = `Copyright © ${metaContent['year']} ${metaContent['author']}`;
        const license = LICENSE_MAP[metaContent['license']];
        const licenseHtml = `Licensed under the <a href="${githubRepoUrl}/LICENSE" target="_blank">${license}</a>.`
        footerHtmlArray.push(copyrightHtml, licenseHtml);
    } else {
        const copyrightHtml = `Copyright © ${metaContent['year']} ${metaContent['author']} All rights reserved.`;
        footerHtmlArray.push(copyrightHtml);
    }

    footerHtmlArray = footerHtmlArray.map(item => `<p>${item}</p>`);
    const footerHtml = `<hr />${footerHtmlArray.join('')}`;

    console.log(footerHtmlArray, footerHtml);

    const footer = document.getElementById('universal-footer');
    footer.innerHTML = footerHtml;
})();
