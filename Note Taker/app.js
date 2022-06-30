const form = document.getElementById('form');
const input = document.getElementById('input-field');
const error = document.getElementById('error');
error.style.color = 'purple';
const shortened = document.querySelector('#trunc');
const long = document.querySelector('#full-version');
// console.log(long.innerHTML);

/*
    Problem:
    To display the content of the textarea
    to the screen.
    The content is added to the first section(shortened version) and also
    to the modal-second section(full content)
    With a button on each content to display the modal with the content(full version)
    when clicked
    The modal will have a button to close the modal when clicked 

*/

/*
    Breakdown of the problem:
    1. Collect the content of the textarea(user's input)
    2. Store the collected data
    3. Log out the data to the two sections
    4. Change the content of modal depending on the button that is clicked, i.e.
    if the button in the first note is clicked, the modal displays the full content of 
    the first note; the same goes for other buttons

*/



/*
    To collect the data;
    We validate the form to make sure the user doesn't submit an empty form
    To store the data(We can store the data as an array of objects/ as an object/pure array)
    Storing the content as an array => 
    create an empty array,
    add the collected data to the array,
    loop through the array
    display each element to the screen and add to the modal
    add the functionality of the view buttons and close buttons inside the for loop

*/

const data = {};
// console.log(shortened.innerHTML.includes('ipsum'));
/**Logging the data to the screen */
const logData = () => {
    shortened.innerHTML += `
        <p class='test'> ${data.content.slice(0, 101) + '...'} <br><button class='view' onclick='viewModal(this.parentElement.textContent)'>View Details</button>
    `;
        
    long.innerHTML = `
        <p id='full-content'>${data.content}<br><button id='close' onclick='closeModal()'>Close</button></p>
    `;

    // console.log(shortened.innerText);

}


/**Collecting the input data from the user */
const collectData = () => {
    // put the data into the object
    data['content'] = input.value;
    // console.log(data);
    input.value = '';
    // logging the data to the screen
    logData();
}


/**Validating the form */
const formValidate = () => {
    if (input.value === '') {
        error.innerHTML = '<strong>Cannot Create Empty Note</strong>';
        // console.log('empty form not submitted');
    }
    else {
        error.innerHTML = '';
        // console.log('Received data');
        collectData();
    }
}


/**
 Logging out the data to the two sections:
 set the content of the section the data content
*/

/**
 *Displaying the modal
 Create a function to change the display of the modal
 from none to block
 For closing the modal
 Create a function to change the display of the modal 
 from block to none
 */

/**Adding event listener to the form to respond to a user's submit action */
form.addEventListener('submit', e => { e.preventDefault(); formValidate() });

/**Adding functionality to the view buttons */
function viewModal(param) {
    long.style.display = 'block';
}

/**Adding functionality to the close button */
function closeModal() {
    long.style.display = 'none';
}

window.addEventListener('click', e => {
    if (e.target === long) {
        long.style.display = 'none';
    }
});
