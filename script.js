document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const livros = document.querySelectorAll('#livrosList li');

    livros.forEach(function(livro) {
        const titulo = livro.querySelector('h3').textContent.toLowerCase();
        const autor = livro.querySelector('h4').textContent.toLowerCase();
        const categoria = livro.querySelector('p').textContent.toLowerCase();

        if (titulo.includes(searchTerm) || autor.includes(searchTerm) || categoria.includes(searchTerm)) {
            livro.style.display = '';
        } else {
            livro.style.display = 'none';
        }
    });
});