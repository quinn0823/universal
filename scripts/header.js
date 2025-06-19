/* Universal
The MIT License (MIT)
Copyright (c) 2025 Jonathan Chiu */

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


    const metaContent = {
        'description': null
    };
    Object.keys(metaContent).forEach(key => {
        metaContent[key] = document.querySelector(`meta[name="${key}"]`)?.content || metaContent[key];
    });
    // console.log(metaContent);

    // Description
    const description = metaContent['description'];
    const descriptionHtml = `<p id="universal-description">${description}</p>`;
    headerHtmlArray.push(descriptionHtml);

    headerHtml = headerHtmlArray.join('');

    const headerElement = document.getElementById('universal-header');
    headerElement.innerHTML = headerHtml;
})();