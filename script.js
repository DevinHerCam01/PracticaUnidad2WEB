import {changeW,getoneElement} from './firebase.js';

window.addEventListener('DOMContentLoaded', () =>{
    console.log(localStorage.getItem('user'));
    // getoneElement()
})

const logOutBtn = document.getElementById('logOut');

logOutBtn.addEventListener('click', () =>{
    console.log('click');
    changeW('./login.html')
})