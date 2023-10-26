let dataTable = document.querySelector('table');
let dataWrapper = document.querySelector('tbody');
let loading = document.querySelector(".spinner-wrapper");
let API_BASE_URL = "https://jsonplaceholder.typicode.com";
let getDataBtn = document.querySelector(".get-data");
let sortByNameBtn = document.querySelector(".sort-data-name");
let sortByIdBtn = document.querySelector(".sort-data-id");
let clearDataBtn = document.querySelector(".clear-data");

fetch(`${API_BASE_URL}/users`)
.then(response => response.json())
.then((users) => {
    loading.classList.replace('d-block', 'd-none');
    //data get
    getDataBtn.addEventListener('click',()=>{
        users.forEach((user) => {
            dataWrapper.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td><a href="${user.email}">${user.email}</a></td>
                <td>${user.address.city}</td>
                <td>${user.website}</td>
                <td><button id="${user.id}" type="button" class="btn btn-outline-info data-info">Learn More</button></td>
            </tr>
            `;
            //learn more
            let learnMore = dataWrapper.querySelectorAll('.data-info');
            learnMore.forEach((btn) => {
                btn.addEventListener('click', function(){
                    fetch(`${API_BASE_URL}/users/${this.id}`)
                    .then((res)=> res.json())
                    .then((user)=> {
                        Swal.fire({
                            title: `Name: ${user.name}`,
                            text: `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}`,
                            footer: `Phone number: ${user.phone}`
                        })
                    });
                });
            });
        }); 
    });
}).catch((error) => {
    dataTable.style.display = 'none';
    loading.innerHTML+='<span class="d-block h5 m-auto mt-3 text-center border-0 text-danger">Failed to Fetch Data!</span>';
    console.log(error);
})
.finally(() => {
    loading.classList.replace("d-block", "d-none");
}); 

//sort data by name
sortByNameBtn.addEventListener("click", () => {
    dataWrapper.innerHTML = "";
    fetch(`${API_BASE_URL}/users`)
    .then(response => response.json())
    .then((users) => {
    loading.classList.replace('d-block', 'd-none');
    const sortedUsers = users.sort((x, y) => x.name.localeCompare(y.name));
    //data get sorted by name
    sortedUsers.forEach((user) => {
            dataWrapper.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td><a href="${user.email}">${user.email}</a></td>
                <td>${user.address.city}</td>
                <td>${user.website}</td>
                <td><button type="button" class="btn btn-outline-info">Learn More</button></td>
            </tr>
            `;
        }).catch((error) => {
            dataWrapper.innerHTML = "";
            loading.innerHTML+='<span class="d-block h5 m-auto mt-3 text-center border-0 text-danger">Failed to Fetch Data!</span>';
            console.log(error);
        })
        .finally(() => {
            loading.classList.replace("d-block", "d-none");
        }); 
    })
})

//sort data by id
sortByIdBtn.addEventListener("click", () => {
    dataWrapper.innerHTML = "";
    fetch(`${API_BASE_URL}/users`)
    .then(response => response.json())
    .then((users) => {
    loading.classList.replace('d-block', 'd-none');
    const sortedUsersId = users.sort((x, y) => y.id - x.id);
    //data get sorted by id
    sortedUsersId.forEach((user) => {
            dataWrapper.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td><a href="${user.email}">${user.email}</a></td>
                <td>${user.address.city}</td>
                <td>${user.website}</td>
                <td><button type="button" class="btn btn-outline-info">Learn More</button></td>
            </tr>
            `;
        })
        .catch((error) => {
            dataTable.style.display = 'none';
            loading.innerHTML+='<span class="d-block h5 m-auto mt-3 text-center border-0 text-danger">Failed to Fetch Data!</span>';
            console.log(error);
        })
        .finally(() => {
            loading.classList.replace("d-block", "d-none");
        })
    })
})

//clear data
clearDataBtn.addEventListener("click", () =>{
    if(dataWrapper.innerHTML == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Already empty!',
          })
    }
    else{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              dataWrapper.innerHTML = "";
            }
          })
    }
});
