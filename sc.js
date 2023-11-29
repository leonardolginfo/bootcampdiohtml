document.addEventListener('DOMContentLoaded', function() {
    var nome = prompt('Olá! Qual é o seu nome?');
    
    if (nome != null && nome !== '') {
        var saudacao = document.createElement('h1');
        saudacao.textContent = 'Olá, ' + nome + '! Bem-vindo à página de Introdução à Web!';
        document.body.insertBefore(saudacao, document.body.firstChild);
    } else {
        alert('Você não inseriu um nome. Por favor, recarregue a página e insira seu nome.');
    }
});
