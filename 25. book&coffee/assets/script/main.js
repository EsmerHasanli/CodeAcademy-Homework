import { getAllBooks, deleteBook } from "./booksrequest.js";
import { getAllCoffees } from "./coffeesrequest.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const userBar = document.querySelector("#loged")
    const username = document.querySelector("#username")
    const registerBar = document.querySelector('#register')
    const loggedUserId = JSON.parse(localStorage.getItem('users'));
    console.log(loggedUserId)
    if (loggedUserId.id) {

      userBar.classList.replace('d-none', 'd-flex')
      registerBar.classList.replace('d-flex', 'd-none')

      username.textContent = loggedUserId.email
      }
})


const path = window.location.pathname;

if (path == "/books.html") {
  //whish count
  if (JSON.parse(localStorage.getItem("fav"))) {
    let wishCount = JSON.parse(localStorage.getItem("fav")).length;
    let wishCountSpan = document.querySelector("#whish-list-count");
    wishCountSpan.textContent = wishCount;
  }

  //cart count
  if (JSON.parse(localStorage.getItem("cart"))) {
    let basketCount = JSON.parse(localStorage.getItem("cart")).length;
    let basketCountSpan = document.querySelector("#basket-quantity");
    basketCountSpan.textContent = basketCount;
  }

  let booksWrapper = document.querySelector(".box-wrapper");

  document.addEventListener("DOMContentLoaded", async () => {
    //get books
    const books = await getAllBooks();
    books.forEach((book) => {
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
                 <button data-id=${book.id} id="favorite" type="button" class="btn favIcon" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-regular fa-heart favIcon" style="color: #ffffff;"></i></button>
                 <a id="details" class="btn btn-warning" href="detail.html?id=${book.id}"  style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></a>
             </div>
         </div>
     </div>
         `;

      //add to favorite
      let favBtn = booksWrapper.querySelectorAll("#favorite");
      favBtn.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const arrFromLocal = JSON.parse(localStorage.getItem("fav"));
          const id = btn.getAttribute("data-id");
          if (!arrFromLocal) {
            const arr = [id];
            localStorage.setItem("fav", JSON.stringify(arr));
          } else {
            arrFromLocal.push(id);
            localStorage.setItem("fav", JSON.stringify(arrFromLocal));
          }
        });
      });

      //delete buttons
      let deleteBtn = booksWrapper.querySelectorAll("#delete");
      deleteBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          deleteBook();
          e.target.parentElement.parentElement.parentElement.remove();
        });
      });
    });
  });

  //search books
  let searchBar = document.querySelector("#book-search");

  searchBar.addEventListener("keyup", async (e) => {
    e.preventDefault();
    booksWrapper.innerHTML = "";
    const books = await getAllBooks();

    books.forEach((book) => {
      if (
        book.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim())
      ) {
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
                `;
      }
    });
  });

  //sort by year
  let sortByYearBtn = document.querySelector("#sortByYear");
  if (sortByYearBtn) {
    sortByYearBtn.addEventListener("click", async () => {
      const books = await getAllBooks();
      booksWrapper.innerHTML = "";
      const yearsOfBook = books.sort((a, b) => a.year - b.year);
      yearsOfBook.forEach((book) => {
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
                        `;
      });
    });
  }

}

if (path == "/whislist.html") {
  //whish count
  if (JSON.parse(localStorage.getItem("fav"))) {
    let wishCount = JSON.parse(localStorage.getItem("fav")).length;
    let wishCountSpan = document.querySelector("#whish-list-count");
    wishCountSpan.textContent = wishCount;
  }

  //cart count
  if (JSON.parse(localStorage.getItem("cart"))) {
    let basketCount = JSON.parse(localStorage.getItem("cart")).length;
    let basketCountSpan = document.querySelector("#basket-quantity");
    basketCountSpan.textContent = basketCount;
  }

  const wishList = document.querySelector("#wish-list");
  document.addEventListener("DOMContentLoaded", async () => {
    const books = await getAllBooks();
    const dataFromLocal = JSON.parse(localStorage.getItem("fav"));
    if (!dataFromLocal) {
      wishList.innerHTML = `<span>Your Whish list is empty!</span>`;
    } else {
      let i = 0;
      const newArr = [];
      while (i < dataFromLocal.length) {
        const findedBook = books.find((book) => book.id == dataFromLocal[i]);
        if (findedBook) {
          newArr.push(findedBook);
        }
        i++;
      }
      let count;
      newArr.forEach((book) => {
        count++;
        wishList.innerHTML += `
                    <tr>
                        <td>${count}</td>
                        <td><img style="height: 125px; width:80px;" src="${book.coverImage}" alt=""></td>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.year}</td>
                        <td>${book.genre}</td>
                        <td><button id="delete" type="button" class="btn" style="color: #ffffff; background-color:#a96030; border: none;"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    `;
        const deleteBook = document.querySelectorAll("#delete");
        deleteBook.forEach((btn) => {
          btn.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
          });
        });
      });
    }
  });
}

if (path == "/coffee.html") {
  //whish count
  if (JSON.parse(localStorage.getItem("fav"))) {
    let wishCount = JSON.parse(localStorage.getItem("fav")).length;
    let wishCountSpan = document.querySelector("#whish-list-count");
    wishCountSpan.textContent = wishCount;
  }

  //cart count
  if (JSON.parse(localStorage.getItem("cart"))) {
    let basketCount = JSON.parse(localStorage.getItem("cart")).length;
    let basketCountSpan = document.querySelector("#basket-quantity");
    basketCountSpan.textContent = basketCount;
  }

  let coffeeWrapper = document.querySelector(".box-wrapper-coffee");
  document.addEventListener("DOMContentLoaded", async () => {
    //get elements
    const coffees = await getAllCoffees();
    coffees.forEach((coffee) => {
      coffeeWrapper.innerHTML += `
            <div class="col-3 col-md-6 col-sm-12">
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
                    <button data-id=${coffee.id} id="cart" class="btn btn-warning" href="detail.html?id=${coffee.id}"  style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-cart-shopping" style="color: #fcfcfc;"></i></button>
                </div>
            </div>
        </div>
         `;
    });

    //add to cart
    let cartBtn = coffeeWrapper.querySelectorAll("#cart");
    cartBtn.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const arrFromLocal = JSON.parse(localStorage.getItem("cart"));
        const id = btn.getAttribute("data-id");
        if (!arrFromLocal) {
          const arr = [{ id: id }];
          localStorage.setItem("cart", JSON.stringify(arr));
        } else {
          let coffeeId = {
            id: id,
          };
          arrFromLocal.push(coffeeId);
          localStorage.setItem("cart", JSON.stringify(arrFromLocal));
        }
      });
    });

    //delete button
    let deleteBtn = coffeeWrapper.querySelectorAll("#delete");
    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.remove();
      });
    });
  });
}

if (path == "/orders.html") {
  //whish count
  if (JSON.parse(localStorage.getItem("fav"))) {
    let wishCount = JSON.parse(localStorage.getItem("fav")).length;
    let wishCountSpan = document.querySelector("#whish-list-count");
    wishCountSpan.textContent = wishCount;
  }

  //cart count
  if (JSON.parse(localStorage.getItem("cart"))) {
    let basketCount = JSON.parse(localStorage.getItem("cart")).length;
    let basketCountSpan = document.querySelector("#basket-quantity");
    basketCountSpan.textContent = basketCount;
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const basket = document.querySelector("#basket-elements");
    const coffees = await getAllCoffees();
    const dataFromLocal = JSON.parse(localStorage.getItem("cart"));
    if (!dataFromLocal) {
      basket.innerHTML = `<div>Empty</div>`;
    } else {
      let i = 0;
      const newArr = [];
      while (i < dataFromLocal.length) {
        const findedCoffee = coffees.find(
          (order) => order.id == dataFromLocal[i].id
        );
        if (findedCoffee) {
          newArr.push(findedCoffee);
        }

        i++;
      }

      newArr.forEach((coffee) => {
        basket.innerHTML += `
            <tr>
                <td class="coffeeID">${coffee.id}</td>
                <td><img  style="width:100px; height:100px" src= ${coffee.imageLink}></td>        
                <td>${coffee.name}</td>
                <td class="price">${coffee.price}</td>
                <td class="totalPrice">${coffee.price}</td>
                <td><button id="increase" type="button" class="btn" style="color: white; background-color:rgb(109,126,94); border: none;"><i class="fa-solid fa-plus"></i></button></td>
                <td><button id="decrease" type="button" class="btn" style="color: white; background-color:rgb(27,56,62); border: none;"><i class="fa-solid fa-minus"></i></button></td>
                <td><button id="delete" type="button" class="btn" style="color: #ffffff; background-color:rgb(159,107,57); border: none;"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            `;
        //delete
        let deleteBtn = basket.querySelectorAll("#delete");
        deleteBtn.forEach((btn) => {
          btn.addEventListener("click", function () {
            console.log(this.parentElement.parentElement);
            this.parentElement.parentElement.remove();
          });
        });

        //increase

        let increaseBtn = basket.querySelectorAll("#increase");
        increaseBtn.forEach((btn) => {
          btn.addEventListener("click", function () {
            const price =
              this.parentElement.parentElement.querySelector(
                ".price"
              ).textContent;
            const totalPriceContext =
              this.parentElement.parentElement.querySelector(
                ".totalPrice"
              ).textContent;
            const totalPrice =
              this.parentElement.parentElement.querySelector(".totalPrice");
            totalPrice.textContent = (
              Number(totalPriceContext) + Number(price)
            ).toFixed(2);
          });
        });

        //decrease
        let dereaseBtn = basket.querySelectorAll("#decrease");
        dereaseBtn.forEach((btn) => {
          btn.addEventListener("click", function () {
            const price =
              this.parentElement.parentElement.querySelector(
                ".price"
              ).textContent;
            const totalPriceContext =
              this.parentElement.parentElement.querySelector(
                ".totalPrice"
              ).textContent;
            const totalPrice =
              this.parentElement.parentElement.querySelector(".totalPrice");

            if (Number(totalPriceContext) <= Number(price)) {
              alert("You cannot decrease");
            } else {
              totalPrice.textContent = (
                Number(totalPriceContext) - Number(price)
              ).toFixed(2);
            }
          });
        });
      });
    }
  });
}
