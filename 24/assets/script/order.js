let API_BASE_URL = "http://localhost:3000/books";
let tableBody = document.querySelector("tbody")

fetch(API_BASE_URL)
.then((response) => response.json())
.then((books) => {
    books.forEach((book) =>{
        tableBody.innerHTML +=`
        <tr>
            <th scope="row">${book.id}</th>
            <td><img style="height: 125px; width:80px;" src="${book.coverImage}" alt=""></td>
            <td>${book.name}</td>
            <td>${book.price}</td>
            <td>${book.price}</td>
            <td>
                <button type="button" class="btn btn-success">+</button>
                <button type="button" class="btn btn-warning">-</button>
            </td>
            <td>
                <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        `
    })
})