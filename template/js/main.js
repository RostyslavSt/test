let dashboard = document.querySelector('.main-dashboard');
console.dir(dashboard);
dashboard.addEventListener('click', () => {
    let imgDash = document.querySelector('.indicators');
    imgDash.classList.add('active');

})