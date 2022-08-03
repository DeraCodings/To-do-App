const form = document.getElementById('form');
const button = document.getElementById('btn');
const input = document.getElementById('text');
const post = document.getElementById('post');
const error = document.getElementById('error');
// console.log(form.innerHTML);
error.style.color = '#f00';


const data = {};


//uploading the data to the screen

const uploadData = () => {
    post.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <button class='red'
    </span>
    </div>
    `;
    input.value = '';
}

// accepting data and storing it

const acceptData = () => {
    data['text'] = input.value;
    // console.log(data);
    uploadData();
}


// Validating the form
const formValidate = () => {
    if (input.value === '') {
        // console.log('Empty task not created');
        error.innerHTML = '<strong>Empty Task Not Created</strong>';
    }
    else {
        // console.log('Success');
        acceptData();
        error.innerHTML = '';
    }
}



// adding event listener to my form

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(input.value);
    formValidate();
});

// const deleteBtn = document.createElement('button');
// deleteBtn.classList.add('red');
// deleteBtn.innerText = 'Delete';
// const span = document.querySelector('.options');
// span.appendChild(deleteBtn);

// deleting post
const deletePost = (x) => {
    x.parentElement.parentElement.remove();
    console.log('deleted');
}

// deleteBtn.addEventListener('click', deletePost(this));

// editing post

const editPost = (x) => {
    input.value = x.parentElement.previousElementSibling.innerHTML;
    x.parentElement.parentElement.remove();
}

// export {data}