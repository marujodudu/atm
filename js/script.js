document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-balance');
    const balanceSpan = document.getElementById('account-balance');
    const eyeIcon = document.getElementById('eye-icon');
    let balanceVisible = true;

    toggleButton.addEventListener('click', function () {
        balanceVisible = !balanceVisible;
        if (balanceVisible) {
            balanceSpan.textContent = 'R$ 1.092,05';
            eyeIcon.src = 'https://via.placeholder.com/20'; // Ícone de olho aberto
        } else {
            balanceSpan.textContent = '••••••••';
            eyeIcon.src = 'https://via.placeholder.com/20'; // Ícone de olho fechado
        }
    });
});
