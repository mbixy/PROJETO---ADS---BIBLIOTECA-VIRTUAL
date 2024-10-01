//Sistema de pequisa dos livros (HTML)


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




// Função para verificar se o usuário está logado
function checkLogin() {
    // Aqui você deve adicionar a lógica para verificar se o usuário está logado
    const verificarUsuario = true; // Alterar para a lógica real
    if (!verificarUsuario) {
        window.location.href = 'login.html'; // Redirecionar para a página de login se não estiver logado
    }
}

function addFavorite(button) {
    // Acessa o elemento <h2> que está acima do botão clicado
    const bookTitle = button.parentElement.querySelector('h2').innerText;
    alert(bookTitle + " adicionado aos favoritos!");
    // Aqui você pode adicionar a lógica para armazenar os favoritos no banco de dados
}


// Função para mostrar ou esconder opções
function toggleOptions() {
    const options = document.getElementById('options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

// Chama a verificação de login quando a página é carregada
window.onload = checkLogin;