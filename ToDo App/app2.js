/**
 * Grabbing the form, button, error div and post div
*/

const form = document.getElementById('form');
const text = document.querySelector('textarea');
const button = document.querySelector('button');
const error = document.getElementById('error');
const post = document.getElementById('post');
const list = post.querySelector('ul');
/**
 * adding some styles
*/

error.style.textTransform = 'capitalize';
error.style.color = 'rgba(255,0,0,0.8)';
list.style.listStyleType = 'none';
post.style.padding = '0.5em 2em'
// post.style.textAlign = 'center';
list.style.textTransform = 'capitalize';


/**Creating the edit function */
const editPost = (x) => {
    text.value = x.previousElementSibling.innerText;
    x.parentElement.innerText = '';
}


/**Creating the delete function */
const deletePost = (x) => {
    x.parentElement.innerText = '';
}

/**Crossing off done tasks */
const crossOff = (x) => {
    x.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through';
}


const data = {}; //this is where the user input will be stored

// accepting the input data
const acceptData = () => {
    data['content'] = text.value; //creating a content property and assigning text.value as the value
    list.innerHTML += `
        <li>
            <strong>${data.content}</strong>
            <button class='edit' onclick='editPost(this)'>Edit</button>
            <button class='delete' onclick='deletePost(this)'>Delete</button>
            <button class='cross-off' onclick='crossOff(this)'>Done</button>
        </li><br>`;
    text.value = '';
}

// validating the form
const formValidate = () => {
    if (text.value === '') {
        console.log('Empty Task Not Created');
        error.innerHTML = '<strong>Empty task not created</strong>';
    }
    else {
        error.innerHTML = '';
        console.log('Received');
        acceptData();
    }
}




/**
 * Adding event handler to the form
*/
form.addEventListener('submit', e => {
    e.preventDefault();
    formValidate();
})