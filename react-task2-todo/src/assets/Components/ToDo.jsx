import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import AddToDo from "./AddToDo"
import ToDoList from "./TodoList"

function ToDo() {
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        setTodos([...todos, { id: uuidv4(), description: todo, completed: false, createDate: Date.now() }])

    }

    const handleSearch = (value ) =>{
        let filteredTodos = todos.filter((elem) => elem.description.toLowerCase().trim().includes(value.toLowerCase().trim()))
        setTodos(filteredTodos)

    }

    const handleSortByDate = () =>{
        let sortedTodos = todos.sort((a, b)=> b.createDate - a.createDate)
        console.log(sortedTodos);
        setTodos(sortedTodos)
    }

    const handleSortByComplete = () =>{
        let sortedTodos = todos.filter((todo)=> todo.completed)
        setTodos(sortedTodos)
    }
    

    return (
        <>
            <AddToDo addToDo={addToDo}/>
            <ToDoList todos={todos} setTodos={setTodos}/>
            <input onChange={(e)=>handleSearch(e.target.value)}type="text" placeholder='search input' />
            <button onClick={handleSortByDate}>sort by date</button>
            <button onClick={handleSortByComplete}>sort by completed</button>
        </>
    );
}

export default ToDo;
