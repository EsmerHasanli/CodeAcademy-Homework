import React from 'react';
import TodoItem from "./TodoItem";

function ToDoList({ todos, setTodos }) {
    // console.log(todos);
    return (

            <ul>
                {
                    todos && todos.map((todo) => (
                        <TodoItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos}/>
                    ))
                }
            </ul>

    );
}

export default ToDoList;
