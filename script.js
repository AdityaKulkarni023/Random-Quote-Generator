document.addEventListener('DOMContentLoaded', function () {
    const quoteContainer = document.getElementById('quoteContainer');
    const getQuoteBtn = document.getElementById('getQuoteBtn');

    getQuoteBtn.addEventListener('click', function () {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quoteContainer.textContent = `"${data.content}" - ${data.author}`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    });
});