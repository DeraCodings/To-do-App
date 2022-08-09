const log = console.log;

const form = document.getElementById('form');
const caption = document.querySelector('p');
const body = document.querySelector('body');
const input = document.querySelector('#text');
const button = document.querySelector('#btn');
const section = document.getElementById('section');
const themeBtn = document.querySelector('#theme-btn');
const small = document.querySelector('small');
const h1 = document.querySelector('h1');
const error = document.getElementById('error');

error.style.textAlign = 'center';

let clubArr = [
    'Manchester United',
    'Barcelona',
    'Real Madrid',
    'PSG',
    'Manchester City',
    'Liverpool',
    'Chelsea',
    'ATM',
    'Tottenham'
];

const data = {};

button.addEventListener('click', e => {
    e.preventDefault();
    checkMatch();
});

function checkMatch() {
    let wordToMatch = clubArr[Math.floor(Math.random() * clubArr.length)];
    // console.log(wordToMatch);
    data['first'] = wordToMatch.toLowerCase();
    data['second'] = input.value.toLowerCase();

    if (input.value === '') {
        error.innerHTML = `<span>Text field cannot be empty</span>`;
        error.style.color = 'blue';
    }
    else if (data['first'] === data['second']) {
        error.innerHTML = `<span>Wow! You guessed right, ${input.value} matches ${wordToMatch}`;    
        error.style.color = 'green';
    }
    else {
        error.innerHTML = `<span>Wrong! ${input.value} does not match ${wordToMatch}`;
        error.style.color = 'red';
    }
    input.value = '';
    log(data);

}

//adding the function to change theme on click
const changeTheme = () => {

    h1.classList.toggle('h1-dark');

    small.classList.toggle('small-dark');

    themeBtn.classList.toggle('dark-theme');
    themeBtn.classList.toggle('light-theme');

    caption.classList.toggle('caption-dark');

    input.classList.toggle('text-dark');
    input.classList.toggle('text');

    button.classList.toggle('check-match-dark');
    button.classList.toggle('check-match');

    body.classList.toggle('dark-body');
}


// themeBtn.addEventListener('click', e => {
//     e.preventDefault();
//     changeTheme();
// })