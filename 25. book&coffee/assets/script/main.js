import {getAllBooks, deleteBook} from './booksrequest.js'
import {getAllCoffees} from './coffeesrequest.js'

//books page
//get books
let booksWrapper = document.querySelector('.box-wrapper');
document.addEventListener("DOMContentLoaded", async () => {
   const books = await getAllBooks()
   books.forEach((book) =>{
    booksWrapper.innerHTML += `
    <div class="col-3 col-md-6 col-sm-12">
    <div class="box">
        <div class="box-img">
            <img src="${book.coverImage}" id="card-img" class="card-img-top" alt="book cover">
        </div>
        <div class="box-descr">
            <h5>${book.name}</h5>
            <h6>${book.author}     <br>     ${book.year}</h6>
            <p>${book.description}</p>
            <p>${book.pageCount} pages</p>
            <p>${book.genre}</p>
        </div>
        <div class="box-btn">
            <button id="delete" type="button" class="btn" style="color: #ffffff; background-color:#a96030; border: none;"><i class="fa-solid fa-trash"></i></button>
            <button data-id=${book.id} id="favorite" type="button" class="btn favIcon" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-regular fa-heart" style="color: #ffffff;"></i></button>
            <a id="details" class="btn btn-warning" href="detail.html?id=${book.id}"  style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></a>
        </div>
    </div>
</div>
    `

    //search books
    let searchBar = document.querySelector('#book-search')
    // searchBar.addEventListener('keyup', ()=>{

    // })


    //delete buttons
    let deleteBtn = booksWrapper.querySelectorAll('#delete')
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', (e) =>{
             deleteBook()
            e.target.parentElement.parentElement.parentElement.remove();
        })
    })

    //add to fav 
    let favBtn = booksWrapper.querySelectorAll('#favorite') 
    let localFavArray = JSON.parse(localStorage.getItem('fav'))
    let arr = []
    favBtn.forEach((btn) => {
        if(localFavArray){
            arr = localFavArray
        }
        btn.addEventListener('click', function(){
            console.log(this);
            if(!JSON.parse(localStorage.getItem('fav'))){
                localStorage.setItem('fav', JSON.stringify([{id: this.getAttribute('data-id')}]))
                this.children[0].classList.replace('fa-regular', 'fa-solid')
            }else{
                let cardsLocal = JSON.parse(localStorage.getItem('fav'))
                let found = cardsLocal.find((x)=> x.id == this.getAttribute('data-id'))
                if(found){
                    this.children[0].classList.replace('fa-solid', 'fa-regular')
                    let updatedFav = cardsLocal.filter((x)=> x.id != this.getAttribute('data-id'))
                    localStorage.setItem('fav', JSON.stringify(updatedFav))
                }else{
                    this.children[0].classList.replace('fa-regular', 'fa-solid')
                    localStorage.setItem('fav', JSON.stringify([...cardsLocal, {id:  this.getAttribute('data-id')}]))
                }
            }
        })
    })
   })
  });







  //coffee page
  //get elements 
  let coffeeWrapper = document.querySelector('.box-wrapper-coffee')
  document.addEventListener("DOMContentLoaded", async () => {
    const coffees = await getAllCoffees()
    coffees.forEach((coffee) =>{
        coffeeWrapper.innerHTML += `
     <div class="col-3">
     <div class="box">
         <div class="box-img">
             <img src="${coffee.imageLink}" id="card-img" class="card-img-top" alt="coffee">
         </div>
         <div class="box-descr">
             <h5>${coffee.name}</h5>
             <p>${coffee.price}</p>
             <p>${coffee.ingredients} pages</p>
         </div>
         <div class="box-btn">
             <button id="delete" type="button" class="btn" style="color: #ffffff; background-color:#a96030; border: none;"><i class="fa-solid fa-trash"></i></button>
             <button id="favorite" type="button" class="btn favIcon" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-regular fa-heart" style="color: #ffffff;"></i></button>
             <a id="details" class="btn btn-warning" href="detail.html?id=${coffee.id}"  style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></a>
         </div>
     </div>
 </div>
     `
    })
   });
