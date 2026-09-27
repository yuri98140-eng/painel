window.addEventListener('message', function(event) {
    const data = event.data;

    // Exemplo: Mostrar ou esconder o painel pelo Lua
    if (data.action === "showPanel") {
        document.querySelector('.panel').style.display = data.status ? "block" : "none";
    }

    // Exemplo: Atualizar conteúdo dinamicamente enviado pelo Lua
    if (data.action === "updateContent") {
        const panel = document.querySelector('.panel');
        if (panel) {
            panel.innerHTML = data.htmlContent;
        }
    }
});
