const tipoTransferenciaFields = document.getElementById('tipoTransferenciaFields');
const bancoFields = document.getElementById('bancoFields');
const agenciaField = document.getElementById('agenciaField');
const contaField = document.getElementById('contaField');
const nomeCompletoField = document.getElementById('nomeCompletoField');
const cpfCnpjField = document.getElementById('cpfCnpjField');
const instituicaoRadio = document.getElementById('instituicaoPagamento');
const bancoRadio = document.getElementById('banco');
const selectBanco = document.getElementById('selectBanco');

function toggleCamposInstituicao(show, tipoConta, labelAgencia) {
    agenciaField.style.display = show ? 'block' : 'none';
    document.querySelector('#agenciaField label').textContent = labelAgencia;
    contaField.innerHTML = show ? `<label for="inputConta">Conta ${tipoConta}</label><input type="text" class="form-control" id="inputConta">` : '<label for="inputConta">Conta e dígito</label><input type="text" class="form-control" id="inputConta">';
}

instituicaoRadio.addEventListener('change', function() {
    if (this.checked) {
        bancoFields.style.display = 'block';
        selectBanco.style.display = 'block';
        toggleCamposInstituicao(true, 'pagamento', 'Agência (Opcional)');
        tipoTransferenciaFields.style.display = 'block';
        nomeCompletoField.style.display = 'block';
        cpfCnpjField.style.display = 'block';
    }
    contaField.innerHTML = '<label for="inputConta">Conta pagamento</label><input type="text" class="form-control" id="inputConta">';
});

bancoRadio.addEventListener('change', function() {
    if (this.checked) {
        bancoFields.style.display = 'block';
        selectBanco.style.display = 'block';
        toggleCamposInstituicao(true, 'e dígito', 'Agência');
        tipoTransferenciaFields.style.display = 'block';
        nomeCompletoField.style.display = 'block';
        cpfCnpjField.style.display = 'block';
    }
    contaField.innerHTML = '<label for="inputConta">Conta e dígito</label><input type="text" class="form-control" id="inputConta">';
});

