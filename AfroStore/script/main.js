
let i = 0;

const imgArr = [];

imgArr[0] = '../images/pexels-photo-7637618.jpeg';
imgArr[1] = '../images/pexels-photo-7637617.jpeg';
imgArr[2] = '../images/pexels-photo-6582761.jpeg';
imgArr[3] = '../images/pexels-photo-11170088.jpeg';
imgArr[4] = '../images/pexels-photo-4404567.jpeg';

const len = imgArr.length;

function changeImg() {
    document.getElementById('img').setAttribute('src', imgArr[i]);
    
    if (i < imgArr.length-1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout('changeImg()', 3500);
}


// let j = 0;
// const time = 3000;
// let images = [];

// images[0] = 'card5.jpg';
// images[1] = 'card4.jpg';
// images[2] = 'card6.jpg';

// const img = document.body;

// function changeImg() {
//     document.slide.src = images[i];
//     // img.style.backgroundImage = `url(${images[i]})`;
//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout('changeImg()', time);
// }

document.onload = changeImg();