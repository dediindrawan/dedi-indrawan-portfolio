// create fake loading
let loading = document.querySelector('.loading');
window.addEventListener('load', function () {
    // remove loading after content has loaded
    loading.style.display = 'none';
});

// create function when button about me on click
document.querySelector('.btn-about-me').addEventListener('click', function () {
    // direct to page file
    document.location.href = '#about';
});

// create function when button download cv on click
document.querySelector('.btn-download-cv').addEventListener('click', function () {
    // direct to cv file
    window.location.href = 'https://drive.google.com/file/d/1kULSXpFBpf-jIHPNyXeKRfUEONz65e6e/view';
});

// create function when button demo-1 on click
document.querySelector('.btn-demo-1').addEventListener('click', function () {
    // direct to demo file
    window.location.href = 'https://dediindrawan.github.io/the-coffeebeans-marketplace-website/';
});

// create function when button demo-2 on click
document.querySelector('.btn-demo-2').addEventListener('click', function () {
    // direct to demo file
    window.location.href = 'https://dediindrawan.github.io/My-To-Do-List-with-Local-Storage/';
});

// create function when button demo-3 on click
document.querySelector('.btn-demo-3').addEventListener('click', function () {
    // direct to demo file
    window.location.href = 'https://dediindrawan.github.io/digital-wedding-invitation/';
});

// create dark and light mode feature
const lightModeIcon = document.querySelector('.light-mode-icon i');
const darkModeIcon = document.querySelector('.dark-mode-icon i');

// initialize local storage name
let themes = localStorage.getItem('theme');

// theme default
if (!themes) {
    localStorage.setItem('theme', 'light');
};

// run function dark mode
const switchDarkMode = () => {
    // add class list on body
    document.body.classList.add('dark-mode');

    // change icon style
    lightModeIcon.style.display = 'none';
    darkModeIcon.style.display = 'block';

    // set key and value on local storage
    localStorage.setItem('theme', 'dark');
};

// run function light mode
const switchLightMode = () => {
    // remove class list on body
    document.body.classList.remove('dark-mode');

    // change icon style
    lightModeIcon.style.display = 'block';
    darkModeIcon.style.display = 'none';

    // set key and value on local storage
    localStorage.setItem('theme', 'light');
};

// set condition
if (themes === 'dark') {
     // activate function
    switchDarkMode();
};

// activate funtion when light mode icon on click
lightModeIcon.addEventListener('click', function () {
    themes = localStorage.getItem('theme');
    // get key item on local storage
    if (themes === 'light') {
        // activate function
        switchDarkMode();
    };
});

// activate funtion when dark mode icon on click
darkModeIcon.addEventListener('click', function () {
    // get key item on local storage
    themes = localStorage.getItem('theme');
    // set condition
    if (themes === 'dark') {
        // activate function
        switchLightMode();
    };
});

// create lazy load every window are scrolling on reveal right
window.addEventListener('scroll', reveal);

// activated funtion
function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    // create looping for all elements
    for (let i = 0; i < reveals.length; i++) {
        // set height window
        let windowHeight = window.innerHeight;
        // set gap window
        let revealTop = reveals[i].getBoundingClientRect().top;
        // set size scrolling
        let revealPoint = 150;

        // run funtion
        if (revealTop < windowHeight - revealPoint) {
            // add classlist
            reveals[i].classList.add('active');
        } else {
            // remove classlist
            reveals[i].classList.remove('active');
        };
    };
};

// initialize variable to executed hide & show back-to-top button
let lastScrollUp = 0;
const backToTop = document.querySelector('.back-to-top');

// create show & hide every window are scrolling
window.addEventListener('scroll', function () {
    // create condition
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollUp) {
        // show button
        backToTop.style.bottom = '80px';
    } else {
        // hide button
        backToTop.style.bottom = '-20%';
    };
    // return condition
    lastScrollUp = scrollTop;
});

// create animation of progress bar values
window.addEventListener('load', () => {
    // initialize element
    let progressBars = document.querySelectorAll('.progress-bar');
    // initialize array
    let progressValue = ['65%', '65%', '20%'];
    progressBars.forEach((progress, i) => {
        // executed function
        progress.style.width = progressValue[i];
    });
});

// create interval values
let value1 = 65;
let point1 = 0;

// initialize element
const percentage1 = document.querySelector('.percentage-1');

// set interval funtion
count1 = setInterval(function () {
    // run progress
    percentage1.textContent = `${point1 += 1}%`;

    // set clear interval function
    if (point1 == value1) {
        clearInterval(count1);
        // show this after interval are stoped
        percentage1.innerHTML = `${point1}%`;
    };

}, 148); //set timing event

// create interval values
let value2 = 65;
let point2 = 0;

// initialize element
const percentage2 = document.querySelector('.percentage-2');

// set interval funtion
count2 = setInterval(function () {
    // run progress
    percentage2.textContent = `${point2 += 1}%`;

    // set clear interval function
    if (point2 == value2) {
        clearInterval(count2);
        // show this after interval are stoped
        percentage2.innerHTML = `${point2}%`;
    };

}, 148); //set timing event

// create interval values
let value3 = 20;
let point3 = 0;

// initialize element
const percentage3 = document.querySelector('.percentage-3');

// set interval funtion
count3 = setInterval(function () {
    // run progress
    percentage3.textContent = `${point3 += 1}%`;

    // set clear interval function
    if (point3 == value3) {
        clearInterval(count3);
        // show this after interval are stoped
        percentage3.innerHTML = `${point3}%`;
    };

}, 485); //set timing event


// add event when user are click button text me by email
document.querySelector('.btn-get-email').addEventListener('click', () => {
    // create new function
    getEmail();
});

// executed get email function
function getEmail() {
    // // direct to email link address
    window.open('mailto:dediindrawan812@gmail.com?subject=Call To Action From Portfolio&body=Hallo, Dedi..');
};

// add event when user are click button text me by whatsapp
document.querySelector('.btn-get-phone').addEventListener('click', () => {
    // create new function
    getMessage();
});

// executed get message function
function getMessage() {
    // // direct to whatsapp number
    window.open('https://api.whatsapp.com/send?phone=+628974523500&text=Hallo, Dedi..');
};

// set year on copyright
const year = new Date();
document.querySelector('.year').innerHTML = year.getFullYear();