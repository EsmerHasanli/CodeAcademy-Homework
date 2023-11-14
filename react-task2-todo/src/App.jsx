import React, { useState } from 'react';
import ToDo from './assets/Components/ToDo.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <ToDo todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
