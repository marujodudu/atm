$(document).ready(function(){
    $('#openModalButton').click(function(){
        $('#profileModal').modal('show');
    });
});

$(document).ready(function(){
    $('.button-item').click(function(){
        $('#pixModal').modal('show');
    });
});

$(document).ready(function(){
    $('.btn-confirm').click(function(){
        $('#confirmationPopup').modal('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-balance');
    const balanceSpan = document.getElementById('account-balance');
    const eyeIcon = document.getElementById('eye-icon');
    let balanceVisible = true;

    toggleButton.addEventListener('click', function () {
        balanceVisible = !balanceVisible;
        if (balanceVisible) {
            balanceSpan.textContent = 'R$ 1.092,05';
            eyeIcon.src = '../assets/olho.png'; // Ícone de olho aberto
        } else {
            balanceSpan.textContent = '••••••••';
            eyeIcon.src = '../assets/olhos.png'; // Ícone de olho fechado
        }
    });
});
