const form = document.getElementById('form');
const txt = document.getElementById('text');
const date = document.getElementById('date');
const num = document.getElementById('number');
const tableBody = document.getElementById('table-body');
const error = document.getElementById('error');
const tableFoot = document.querySelector('#table-foot');
const total = document.querySelector('#total');
const sum = document.querySelector('#sum');
const deleteBtn = document.getElementById('delete-sum');

const data = {};
const amountArr = [];

deleteBtn.style.display = 'none';
sum.style.display = 'none';

// spitting the data to the screen
const spitData = () => {
    tableBody.innerHTML += `
        <tr class="table-row">
            <td colspan="2">${data.name}</td>
            <td>${data.date}</td>
            <td>${data.amount}</td>
            <td><button onclick="deleteItem(this)" id="delete">x</button></td>
        </tr>
    `;
    txt.value = '';
    date.value = '';
    num.value = '';
}

// accepting data
const getData = () => {
    data['name'] = txt.value;
    data['date'] = date.value;
    data['amount'] = `$${num.value}`;
    amountArr.push(parseInt(num.value));
    // console.log(data);
    spitData();

    // sumAll();
}

// form validation
const formValidate = () => {
    if ((txt.value === '' && num.value === '') || (txt.value !== '' && num.value === '') || (txt.value === '' && num.value !== '')) {
        // console.log('* are supposed to be empty');
        error.innerHTML = '<strong>*cannot be empty*</strong>';
    }
    else {
        getData();
        error.innerHTML = '';
    }
}

// adding eventListener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidate();
    setTimeout(() => {
        deleteBtn.style.display = 'inline';
        sum.style.display = 'inline';
    }, 700)
});

// total.previousElementSibling.previousSibling
// adding delete function to the delete button
function deleteItem(x){
    x.parentElement.parentElement.remove();
    let elemToRemove = amountArr.indexOf(parseInt(x.previousElementSibling));
    amountArr.splice(elemToRemove, 1);
    console.log(x.previousElementSibling);
}

// Array.prototype.indexOf();
// txt.previousElementSibling
// deleting the whole list

const clearAll = () => {
    // let parent = document.getElementById('table-body');
    // let children = parent.getElementsByTagName('tr');
    if (tableBody.innerText === '') {
        console.log('no list to delete');
        error.innerHTML = '<small>No list to delete</small>';
    }
    else {
        // parent.removeChild(children);
        tableBody.innerHTML = '';
        total.innerText = '';
        // console.log('success');
    }
    // console.log('no list to delete');
    // error.innerHTML = '<small>cant delete empty list</small>';
}

// adding a sum function to the button
const sumAll = () => {
    /**How to check if a button is clicked */
    /**
     * if the button is clicked,
     * I want to remove an element from the amountArr
     * Specifically, the element of the table data that is the sibling of the button
     */
    let ans = amountArr.reduce((x, y) => parseInt(x) + parseInt(y), 0);
    total.innerText = `$${ans}`;
}

//A function that deletes the total sum
function deleteAll() {
    total.innerText = 0;
}


console.log(amountArr);
