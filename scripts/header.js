/* Universal
The MIT License (MIT)
Copyright (c) 2025 Jonathan Chiu */

(function () {
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