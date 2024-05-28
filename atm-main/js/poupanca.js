document.addEventListener('DOMContentLoaded', function () {
    const aplicacaoMensalCheck = document.getElementById('aplicacao-mensal-check');
    const aplicacaoMensalContainer = document.getElementById('aplicacao-mensal-container');

    aplicacaoMensalCheck.addEventListener('change', function () {
        aplicacaoMensalContainer.style.display = this.checked ? 'block' : 'none';
    });
});

function openPixModal() {
    $('#pixModal').modal('show');
}