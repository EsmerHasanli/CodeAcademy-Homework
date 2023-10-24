let form = document.querySelector('form');
let input = document.querySelector('input');
let todoList = document.querySelector('.todo-app-list');
let clearBtn = document.querySelector('.clear-all')
let text = document.createElement('li');
let error = document.querySelector('.error')

// while(todoList.innerHTML === ""){
//     text.textContent = `"You have nothing to do"`;
//     text.appendChild(todoList);
// }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const listItem = document.createElement('li');
    listItem.innerHTML += `
    <span>${input.value}</span>
    <div>
    <button class="complete"><i class="fa-solid fa-check"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    todoList.appendChild(listItem);
    input.value = '';

    const deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener('click', (e) =>{
        e.target.closest('li').remove();
    })

    const completeBtn = document.querySelector('.complete');
    completeBtn.addEventListener('click', (e) =>{
        e.target.closest('li').style.textDecoration = 'line-through';
        e.target.closest('li').style.color= 'gray'
    })

    // if(input.value === ''){
    //     error.style.display = 'block';
    //     listItem.innerHTML = '';
    // }

});

clearBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    window.confirm('Are you sure you want to delete all your toDo?');
    while(window.confirm){
        todoList.innerHTML = '';
        break;
    }
})











