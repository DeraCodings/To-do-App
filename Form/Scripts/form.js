// grab the elements to change their styles
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const email = document.getElementById('email');
const date = document.getElementById('date');
const signUpBtn = document.getElementById('btn');
const selects = document.querySelectorAll('select');
const small = document.querySelector('small');
const body = document.querySelector('body');
const fieldset = document.querySelector('fieldset');
const themeBtn = document.getElementById('theme-btn');
const telephone = document.querySelector('#telephone');
const labels = document.querySelectorAll('label');

function changeTheme() {
    firstName.classList.toggle('first');
    firstName.classList.toggle('first-dark');
    secondName.classList.toggle('second');
    secondName.classList.toggle('second-dark');
    email.classList.toggle('email-lite');
    email.classList.toggle('email-dark');
    date.classList.toggle('date-lite');
    date.classList.toggle('date-dark');
    signUpBtn.classList.toggle('btn-lite');
    signUpBtn.classList.toggle('btn-dark');
    
    selects.forEach(x => {
        x.classList.toggle('select-dark');
    });

    small.classList.toggle('small-dark');
    body.classList.toggle('body-dark');
    fieldset.classList.toggle('bg-color');
    fieldset.classList.toggle('bg-color-dark');
    themeBtn.classList.toggle('lite');
    themeBtn.classList.toggle('dark');
    telephone.classList.toggle('tel-lite');
    telephone.classList.toggle('tel-dark');
    
    labels.forEach(c => {
        c.classList.toggle('labsel-lite');
        c.classList.toggle('label-dark');
    });
}