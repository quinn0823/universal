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
    let title = document.title.split(' | ')[0];

    let titleElement = document.getElementById('universal-title');
    if (titleElement && titleElement.innerHTML) {
        title = titleElement.innerHTML;
    }

    console.log(title);

    const headerHtml = `<h1 id="universal-title">${title}</h1><hr />`;

    const headerElement = document.getElementById('universal-header');
    headerElement.innerHTML = headerHtml;
})();