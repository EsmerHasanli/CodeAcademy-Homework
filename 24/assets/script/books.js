let API_BASE_URL = "http://localhost:3000/books";
let selectMenu = document.querySelector('#select-menu');
let sortBtn = document.querySelector('#sortByYear');
let addNewBtn = document.querySelector('#addNew');
let searchForm = document.querySelector('#searchBooks');
let searchInput = document.querySelector('#searchInput');
let boxWrapper = document.querySelector('.box-wrapper');
let bookName = document.querySelectorAll('h5');
let deleteBtn = document.querySelectorAll('#delete');
let editBtn = document.querySelectorAll('#change');
let detailsBtn = document.querySelectorAll('#details');
let showMoreBtn = document.querySelector('#showMore');
let submitBtn  = document.querySelector(".submitBtn")
let modal = document.querySelector(".modal");
let modalWrapper = document.querySelector(".modal_wrapper");

//#region add new book
const getBooks = async () => {
  const res = await fetch(API_BASE_URL);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error('Failed to fetch data');
  }
};

const addNewBook = async (e) => {
  e.preventDefault();
  let name = document.querySelector(".name").value;
  let pageCount = document.querySelector(".pg-count").value;
  let imgLink = document.querySelector(".img-link").value;
  let author = document.querySelector(".author").value;
  let description = document.querySelector(".description").value;
  let genre = document.querySelector(".genre").value;
  let createDate = document.querySelector(".description").value;

  const booksData = await getBooks();

  const lastBook = booksData[booksData.length - 1];
  const lastElementId = lastBook ? lastBook.id + 1 : 1;

  const data = {
    name,
    pageCount,
    imgLink,
    author,
    description,
    genre,
    createDate,
    id: lastElementId
  };

  console.log(data);

  await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
//добовляем
submitBtn.addEventListener("click", (e) => addNewBook(e));
submitBtn.addEventListener("click", (e) => addNewBook(e))
// закрывает модалку
modal.addEventListener("click", () => {
  modal.className = "modal"
 
})
// не реагирует на клик по белому окну в модалке
modalWrapper.addEventListener("click", (e) =>  e.stopPropagation())
// открывает модалку
addNewBtn.addEventListener("click" , () => {
    console.log("hello")
  modal.className += " active"
})
//#endregion 

//#region sort by year
sortBtn.addEventListener('click', () =>{
    
    boxWrapper.innerHTML = ''
    fetch(API_BASE_URL)
    .then((response) => response.json())
    .then((books) => {
        const yearsOfBook = books.sort((a, b) => a.year - b.year)
        yearsOfBook.forEach((obj) => boxWrapper.innerHTML += `
        <div class="col-3">
            <div class="box">
                <div class="box-img">
                    <img src="${obj.coverImage}" id="card-img" class="card-img-top" alt="book cover">
                </div>
                <div class="box-descr">
                    <h5>${obj.name}</h5>
                    <h6>${obj.author}    <br>     ${obj.year}</h6>
                    <p>${obj.description}</p>
                    <p>${obj.pageCount} pages</p>
                    <p>${obj.genre}</p>
                </div>
                <div class="box-btn">
                    <button id="delete" type="button" class="btn btn-danger" style="background-color:#a96030; border: none;"><i class="fa-solid fa-trash"></i></button>
                    <button id="change" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-solid fa-edit"></i></button>
                    <button id="details" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></button>
               </div>
            </div>
        </div>
        `)
    })  
});
//#endregion sort by

//#region search books
searchForm.addEventListener('keyup', (e)=>{
    e.preventDefault();
    boxWrapper.innerHTML = ''
        fetch(API_BASE_URL)
        .then((response) => response.json())
        .then((books) => {
            books.forEach(function(book){
                if(book.name.toLowerCase().trim().includes(searchInput.value.toLowerCase().trim())){
                    boxWrapper.innerHTML += `
                    <div class="col-3">
                        <div class="box">
                            <div class="box-img">
                                <img src="${book.coverImage}" id="card-img" class="card-img-top" alt="book cover">
                            </div>
                            <div class="box-descr">
                                <h5>${book.name}</h5>
                                <h6>${book.author}    <br>     ${book.year}</h6>
                                <p>${book.description}</p>
                                <p>${book.pageCount} pages</p>
                                <p>${book.genre}</p>
                            </div>
                            <div class="box-btn">
                                <button id="delete" type="button" class="btn btn-danger" style="background-color:#a96030; border: none;"><i class="fa-solid fa-trash"></i></button>
                                <button id="change" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-solid fa-edit"></i></button>
                                <button id="details" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></button>
                              </div>
                        </div>
                    </div>
                    `
                }
            })
        });
    })
//#endregion

//#region about modal
bookName.forEach((name) => {
  name.addEventListener('click', (e) => {
      e.preventDefault();
      fetch(API_BASE_URL)
      .then((response) => response.json())
      .then((books) => {
          books.forEach(function(book){
              if(book.name.toLowerCase().trim() === name.textContent.toLowerCase().trim()) {
                  Swal.fire({
                      title: `${book.name}`,
                      text: `${book.author}`,
                      imageUrl: `${book.coverImage}`,
                      imageWidth: 400,
                      imageHeight: 500,
                      imageAlt: 'Custom image',
                  });
              }
          });
      });
  });
});

//#endregion

//#region to details page
detailsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
})
//#endregion

//#region //!edit button


//#endregion

//#region delete button
deleteBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD92A3',
        cancelButtonColor: '#6EB4BC',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.parentElement.parentElement.parentElement.remove();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
           'success'
          )
        }
      })
    })
  })
//#endregion

//#region select menu choose a genre 
selectMenu.addEventListener("change", async (e) => {
  console.log(e.target.value);

  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  let sortedData = [];

  if (e.target.value !== 'all') {
    sortedData = data.filter((obj) => obj.genre.toLowerCase() === e.target.value.toLowerCase());
  } else {
    sortedData = data;
  }

  boxWrapper.innerHTML = "";
  sortedData.forEach((obj) => {
    boxWrapper.innerHTML += `
      <div class="col-3">
          <div class="box">
              <div class="box-img">
                  <img src="${obj.coverImage}" id="card-img" class="card-img-top" alt="book cover">
              </div>
              <div class="box-descr">
                  <h5>${obj.name}</h5>
                  <h6>${obj.author}    <br>     ${obj.year}</h6>
                  <p>${obj.description}</p>
                  <p>${obj.pageCount} pages</p>
                  <p>${obj.genre}</p>
              </div>
              <div class="box-btn">
                  <button id="delete" type="button" class="btn btn-danger" style="background-color:#a96030; border: none;"><i class="fa-solid fa-trash"></i></button>
                  <button id="change" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-solid fa-edit"></i></button>
                  <button id="details" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></button>
                </div>
          </div>
      </div>
    `;
  });

});
//#endregion
 
//#region show more button
showMoreBtn.addEventListener('click', function(e){
  e.preventDefault();

  fetch(API_BASE_URL)
    .then((response) => response.json())
    .then((books) => {
      books.forEach(function(book) {
        boxWrapper.innerHTML += `
          <div class="col-3">
              <div class="box">
                  <div class="box-img">
                      <img src="${book.coverImage}" id="card-img" class="card-img-top" alt="book cover">
                  </div>
                  <div class="box-descr">
                      <h5>${book.name}</h5>
                      <h6>${book.author}    <br>     ${book.year}</h6>
                      <p>${book.description}</p>
                      <p>${book.pageCount} pages</p>
                      <p>${book.genre}</p>
                  </div>
                  <div class="box-btn">
                      <button id="delete" type="button" class="btn btn-danger" style="background-color:#a96030; border: none;"><i class="fa-solid fa-trash"></i></button>
                      <button id="change" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#A98064; border: none;"><i class="fa-solid fa-edit"></i></button>
                      <button id="details" type="button" class="btn btn-warning" style="color: #ffffff; background-color:#88766a; border: none;"><i class="fa-solid fa-gear"></i></button>
                  </div>
              </div>
          </div>
        `;
      });
    })
});

//#endregion


