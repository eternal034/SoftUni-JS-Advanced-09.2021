function getArticleGenerator(articles) {
    let divContent = document.getElementById('content')
    return function () {
        if (articles.length > 0) {
            let firstArticle = articles.shift();
            let articleToAppend = document.createElement('article');
            articleToAppend.textContent = firstArticle;
            divContent.appendChild(articleToAppend);
        }
    }
}
