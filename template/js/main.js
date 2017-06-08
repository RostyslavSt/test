let dashboard = document.querySelector('.main-dashboard');
let kitchen = document.querySelector('.kitchen');
let hall = document.querySelector('.hall');

console.dir(dashboard);

function clearActive() {
    let content = document.querySelector('.content');
    let contentItem = content.querySelector('.active');
    console.log(contentItem);
    if (contentItem !== null) {
        contentItem.classList.remove('active');
    }

}
dashboard.addEventListener('click', () => {
    clearActive();
    let imgDash = document.querySelector('.indicators');
    imgDash.classList.add('active');

});

kitchen.addEventListener('click', () => {
    console.log('www');
    // kitchen.preventDefault();
    clearActive();
    let imgDash = document.querySelector('.kitchen-devices');
    imgDash.classList.add('active');

});