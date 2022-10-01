let j = 0;

const arr = [];
arr[0] = './images/quote1.png';
arr[1] = './images/quote2.png';
arr[2] = './images/quote3.png';
arr[3] = './images/quote4.png';
arr[4] = './images/quote5.png';

// const len = arr.length;

function switchImg() {
    document.getElementById('img2').setAttribute('src', arr[j]);

    if (j < arr.length - 1) {
        j++;
    }
    else {
        j = 0;
    }

    setTimeout('switchImg()', 3500);
}

document.onload = switchImg();
