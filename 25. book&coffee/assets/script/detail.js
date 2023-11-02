import { getBookByID } from "./booksrequest.js";

let id = new URLSearchParams(location.search).get('id');

let booksWrapper = document.querySelector('.box-wrapper');
console.log(booksWrapper);
document.addEventListener("DOMContentLoaded",  async() => {
    const book = await getBookByID(id);
    booksWrapper.innerHTML = `
    <div class="col-12">
    <div class="box" style="height:500px; width:80%">
        <div class="box-img">
            <img src="${book.coverImage}" id="card-img" style="width:100%; heigth:70%" class="card-img-top" alt="book cover">
        </div>
        <div class="box-descr style="width:100%; heigth:30%"">
            <h5>${book.name}</h5>
            <h6>${book.author}     <br>     ${book.year}</h6>
            <p>${book.description}</p>
            <p>${book.page} pages</p>
            <p>${book.genre}</p>
        </div>
    </div>
</div>
        `
})


