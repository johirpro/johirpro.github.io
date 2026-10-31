document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('devto-articles');

    if (!container) {
        return;
    }

    const API_URL =
        'https://dev.to/api/articles?username=johirpro&per_page=3';

    function createElement(tag, className, text) {
        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        if (text !== undefined) {
            element.textContent = text;
        }

        return element;
    }

    function renderArticles(articles) {
        container.replaceChildren();

        if (!articles.length) {
            container.textContent = 'No articles found.';
            return;
        }

        articles.forEach(article => {
            const card = createElement('article', 'devto-card');

            if (article.cover_image) {
                const image = document.createElement('img');
                image.src = article.cover_image;
                image.alt = article.title;
                image.loading = 'lazy';

                card.appendChild(image);
            }

            const content = createElement(
                'div',
                'devto-card-content'
            );

            const title = createElement('h3');
            const link = createElement('a');

            link.href = article.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = article.title;

            title.appendChild(link);
            content.appendChild(title);

            content.appendChild(
                createElement('p', '', article.description || '')
            );

            const tags = createElement(
                'div',
                'devto-tags',
                (article.tag_list || [])
                    .map(tag => '#' + tag)
                    .join(' ')
            );

            content.appendChild(tags);

            const publishedDate = new Date(article.published_at);

            const meta = createElement(
                'div',
                'devto-meta',
                publishedDate.toLocaleDateString() +
                ' · ' +
                article.reading_time_minutes +
                ' min read'
            );

            content.appendChild(meta);
            card.appendChild(content);
            container.appendChild(card);
        });
    }

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch DEV.to articles.');
            }

            return response.json();
        })
        .then(articles => {
            renderArticles(articles);
        })
        .catch(error => {
            console.error(error);

            container.textContent =
                'Unable to load articles. Please visit my DEV.to profile.';
        });
});
