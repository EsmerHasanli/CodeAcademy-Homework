//#region main page slider
let toLeftBtn = document.querySelector('.swipeLeft')
let torightBtn = document.querySelector('.swipeRight')
let firstImg = document.querySelector('#first-img')
let secondImg  = document.querySelector('#second-img')

toLeftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstImg.style.display !== 'none') {
        firstImg.style.display = 'none';
        secondImg.style.display = 'block';
    } else{
        secondImg.style.display = 'none';
        firstImg.style.display = 'block';
    }
})

torightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (secondImg.style.display !== 'none') {
        secondImg.style.display = 'none';
        firstImg.style.display = 'block';
    } else {
        firstImg.style.display = 'none';
        secondImg.style.display = 'block';
    }
});
//#endregion





