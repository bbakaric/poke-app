const btn = document.getElementById('menu');
const menu = document.querySelector('ul');

const addShow = () => {
    menu.classList.add('show');
};

const removeShow = () => {
    menu.classList.remove('show');
};

btn.addEventListener('click', addShow);
menu.addEventListener('pointerleave', removeShow);