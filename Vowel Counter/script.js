/**Grabbing the form, input area, area for displaying the result and error msg */
const form = document.getElementById('form');
const input = document.getElementById('input');
const post = document.getElementById('post');
const error = document.getElementById('error');

/**
 * Take a user's input
 * Run a match of the input against a regular expression that identifies vowels
 * Return the result to the screen with the number of vowels found
*/

const data = {};

/**
 * Accepting the data
 * Storing the data
 * Running the data against a regex
*/

const vowelRegex = /[aeiou]/gi;

const outputData = () => {
    
    console.log(data.content.match(vowelRegex));
    post.innerHTML = `<p>The vowel count is ${data.content.match(vowelRegex).length}</p>`;
}

const acceptData = () => {
    data['content'] = input.value;
    outputData();
    input.value = '';
}


/**Validating the form */
const formValidate = () => {
    if (input.value === '') {
        console.log('Cannot count empty text');
        error.innerHTML = '<strong>Cannot Count Empty String</strong>';
    }
    else {
        error.innerHTML = '';
        console.log('success');
        acceptData();
    }
}

/**Adding an event handler to the form */
form.addEventListener('submit', e => {
    e.preventDefault();
    formValidate();
})