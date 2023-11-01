import {getAllBooks} from './booksrequest.js'

let booksWrapper = document.querySelector('.box-wrapper');

document.addEventListener("DOMContentLoaded", async () => {
   const books = await getAllBooks()
   books.forEach((book) =>{
    booksWrapper.innerHTML += `
    <div class="col-3">
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
            <button id="favorite" type="button" class="btn" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-regular fa-heart" style="color: #ffffff;"></i></button>
            <a id="details" class="btn btn-warning" href="detail.html?id=${book.id}"  style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></a>
        </div>
    </div>
</div>
    `
   })
    console.log(books);
  });