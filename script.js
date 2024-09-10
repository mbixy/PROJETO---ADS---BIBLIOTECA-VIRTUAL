document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search input');
    const livros = document.querySelectorAll('.livros');
    const categoria = document.querySelector('padding h3');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        livros.forEach(function(livro) {
            const title = livro.querySelector('h4').textContent.toLowerCase();
            const author = livro.querySelector('p').textContent.toLowerCase();
            const category = livro.dataset.category ? livro.dataset.category.toLowerCase() : '';

            if (title.includes(searchTerm) || author.includes(searchTerm) || category.includes(searchTerm)) {
                livro.style.display = 'block';
            } else {
                livro.style.display = 'none';
            }
        });
    });
});