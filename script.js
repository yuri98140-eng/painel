window.addEventListener('message', function(event) {
    const data = event.data;

    // Abrir/Fechar painel via Lua
    if (data.action === "show") {
        document.body.style.display = data.status ? "flex" : "none";
    }

    // Inserir conteúdo HTML dinâmico enviado pelo Lua
    if (data.action === "setContent") {
        const contentDiv = document.getElementById('content');
        if (contentDiv) {
            contentDiv.innerHTML = data.html;
        }
    }
});
