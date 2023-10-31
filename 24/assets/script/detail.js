let id = new URLSearchParams(location.search).get('id');
let dataName = document.querySelector('.data-name');

document.addEventListener('DOMContentLoaded',()=>{
    fetch(`http://localhost:3000/books/${id}`)
    .then(res=>res.json())
    .then(book=>{
        dataName.textContent = book.name;
    })
})