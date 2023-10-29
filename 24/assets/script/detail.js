let id = new URLSearchParams(location.search).get('id');
let dataName = document.querySelector('.data-name');

document.addEventListener('DOMContentLoaded',()=>{
    fetch(`${API_BASE_URL}/${id}`)
    .then(res=>res.json())
    .then(data=>{
        dataName.textContent = data.name;
    })
})