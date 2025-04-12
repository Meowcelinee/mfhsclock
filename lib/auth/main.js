import ADMIN_LOGIN from '../../secret.js';

const form = document.querySelector('form');
const pwInput = document.getElementById('password');
const [login] = document.getElementsByClassName('login-container');

const handleIncorrect = () => {
    const p = document.createElement('p');
    p.style.color = '#f38ba8';
    p.textContent = 'incorrect password.';
    login.appendChild(p);

    setTimeout(() => {
        login.removeChild(p);
    }, 2000);
};

const handleCorrect = () => {
    const p = document.createElement('p');
    p.style.color = '#a6e3a1';
    p.textContent = 'access granted';
    login.appendChild(p);

    setTimeout(() => {
        login.removeChild(p);
        window.location.replace('/admin');
    }, 1500);
};

form.addEventListener('submit', event => {
    event.preventDefault();
    const pw = pwInput.value;

    if (pw === ADMIN_LOGIN) handleCorrect();
    else handleIncorrect();
});
