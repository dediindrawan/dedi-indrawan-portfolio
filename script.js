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

// activated switching dark mode
document.querySelector('.light-mode').addEventListener('click', () => {
    // switching icon light to display none
    const lightMode = document.querySelector('.light-mode');
    lightMode.style.display = 'none';

    // add classlist on body
    document.querySelector('body').classList.add('dark');

    // switching icon dark to display block
    const darkMode = document.querySelector('.dark-mode');
    darkMode.style.display = 'block';
});

// activated switching light mode
document.querySelector('.dark-mode').addEventListener('click', () => {
    // switching icon dark to display none
    const darkMode = document.querySelector('.dark-mode');
    darkMode.style.display = 'none';

    // remove classlist on body
    document.querySelector('body').classList.remove('dark');

    // switching icon light to display block
    const lightMode = document.querySelector('.light-mode');
    lightMode.style.display = 'block';
});