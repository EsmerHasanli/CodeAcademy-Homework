import React, { useState } from 'react';
import PropTypes from 'prop-types';


function AddToDo({ addToDo }) {
    const [value, setValue] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.length > 2){
            addToDo(value);
            
        }else{
            alert('olmaz tak')
        }
        setValue('');
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)} value={value} placeholder="What is your task?" type="text"
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}


AddToDo.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
};


export default AddToDo