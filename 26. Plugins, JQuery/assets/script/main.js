import { getAllSliders, getSlidersByID, deleteSliderByID, postSlider, putSlidesByID, patchSliderByID } from "./requests.js";

//#region dark mode js
function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);

  const options = {
    bottom: '64px', 
    right: 'unset',
    left: '32px',
    time: '0.5s', 
    mixColor: '#fff',
    backgroundColor: '#fff', 
    buttonColorDark: '#100f2c', 
    buttonColorLight: '#fff', 
    saveInCookies: false, 
    label: '🌓',
    autoMatchOsTheme: true 
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
//#endregion

//#region get sliders 
let slidersWrapper = document.querySelector(".swiper-wrapper");

document.addEventListener('DOMContentLoaded', async () => {
    const sliders = await getAllSliders();
    sliders.forEach((slider) => {
        slidersWrapper.innerHTML += `
            <div class="swiper-slide">
                <p class="slider-title">${slider.title}</p>
                <img src="${slider.imageURL}" alt="slider-image">
            </div>

        `
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})
//#endregion
