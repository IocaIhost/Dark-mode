const elDarkModeBtn = document.querySelector('.site-header-dark');
const elLightModeBtn = document.querySelector('.site-header-light');

elDarkModeBtn.addEventListener('click', function () {
    document.body.classList.add('dark-mode');
})


elLightModeBtn.addEventListener('click', function () {
    document.body.classList.remove('dark-mode');
})