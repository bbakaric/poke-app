const btn = document.getElementById('menu');
const menu = document.querySelector('ul');
const login = document.getElementById('loginBtn');

const addShow = () => {
    menu.classList.toggle('show');
};

btn.addEventListener('click', addShow);
