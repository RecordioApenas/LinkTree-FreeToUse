// Seleciona o botão de compartilhar
const shareBtn = document.getElementById('share-btn');

// Adiciona o evento de clique
shareBtn.addEventListener('click', () => {
    // Obtém a URL da página atual
    const currentUrl = window.location.href;

    // Copia para a área de transferência do usuário
    navigator.clipboard.writeText(currentUrl)
        .then(() => {
            // Feedback visual rápido
            alert('Link da página copiado com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar o link: ', err);
        });
});