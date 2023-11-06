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

//#region get data 
let cardsWrapper = document.querySelector('.cards-wrapper');

document.addEventListener('DOMContentLoaded', async ()=>{
    const sliders = await getAllSliders();
    sliders.forEach((slider) => {
        //get cards
        cardsWrapper.innerHTML += `
        <div class="card mt-2 col-4">
            <div class="images-wrapper h-75">
                <a href="${slider.imageURL}" data-lightbox="image-${slider.id}" data-title="${slider.title}">
                    <img src="${slider.imageURL}" alt="">
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title">${slider.title}</h5>
            </div>
            <div class="card-body">
                <button id="edit" type="button" class="btn btn-secondary"">
                    <i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i>
                </button>
                <button id="delete" type="button" class="btn btn-danger"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
            </div>
      </div>
        `

        //edit button
        let editBtn =cardsWrapper.querySelectorAll('#edit');
        let editModal = document.querySelector('#edit-modal');
        editBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                editModal.className += 'active'
            });
        });
        
        //delete buton
        let deleteBtn = cardsWrapper.querySelectorAll('#delete');
        deleteBtn.forEach((btn) =>{
            btn.addEventListener('click', function (){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                    this.parentElement.parentElement.remove()
                    deleteSliderByID(`${slider.id}`)
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
            })
        })

    })
    
    //lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true
    })

})
//#endregion

//#region add new data
let addForm = document.querySelector('#add-form');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let link = document.querySelector('#link').value;

    //regex
    const titleRegex = /.{3,}/;
    const imageRegex = /.{10,}/;

    //validation
    if (!titleRegex.test(title)) {
        toastr.error('Title should has at least 3 characters');
        return;
    }

    if (!imageRegex.test(link)) {
        toastr.error('Image should has at least 10 characters');
        return;
    }

    //post data
    postSlider({ title: title, imageURL: link });

    //toaster
    toastr.success('Data added successfully');
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 300;

    //reset form
    
});

//#endregion

 


