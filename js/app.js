const btn = document.getElementById('menu');
const menu = document.querySelector('ul');

const addShow = () => {
    menu.classList.toggle('show');
};

btn.addEventListener('click', addShow);
const loginBtn = document.getElementById('loginBtn');
const loginBack = document.getElementById('login-back');
const username = document.getElementById('username');

const checkInput = () => {
    let user = username.value.trim();
    if(user !== "") {
        localStorage.setItem("username", user);
        loginBack.classList.add('login-back-hidden');
        console.log(localStorage);
    } else {
        alert("Enter username!");
    }
};

loginBtn.addEventListener('click', checkInput);