document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle'); // Pega o seu checkbox

    // Função para aplicar ou remover o tema escuro
    function applyTheme() {
        if (themeToggle.checked) {
            // Se o checkbox estiver marcado, aplica o tema escuro
            document.body.classList.add('light-theme');
        } else {
            // Se o checkbox não estiver marcado, remove o tema escuro (volta para o claro)
            document.body.classList.remove('light-theme');
        }
    }

    // Chama a função uma vez ao carregar a página para definir o tema inicial com base no estado do checkbox
    // (Útil se você definir o estado inicial do checkbox no HTML, por exemplo, como checked)
    applyTheme();

    // Adiciona um "listener" para o evento de mudança do checkbox
    themeToggle.addEventListener('change', applyTheme);
});
