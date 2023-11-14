import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, setTodos, todos }) {

    const handleDelete = () => {
        let filteredTodos = todos.filter((elem)=> elem.id != todo.id)
        setTodos(filteredTodos)
    }

    const handleComplete = (e) => {
        e.target.parentElement.style.textDecoration = 'line-through'
        todo.completed = true
        console.log(todo);
    }

    return (
        <li>
           <span>{todo.description}</span>
           <button onClick={handleDelete}>delete</button>
           <button onClick={handleComplete}>complete</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    setTodos: PropTypes.func,
    todos: PropTypes.object,
  };

export default TodoItem
