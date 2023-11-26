import React, { useState, useEffect, useReducer } from "react";
import Counter from "./assets/Counter";
import Todo from "./assets/Todo";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <Todo />
    </>
  );
}

export default App;
