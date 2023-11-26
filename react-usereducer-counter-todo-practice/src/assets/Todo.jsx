import React, { useReducer, useState } from "react";

//actions - this is like the name of actions that we want to do
const ACTIONS = {
  ADD: "add",
  MARK_AS_DONE: "mark_as_done",
  DELETE: "delete",
  EDIT: "edit",
};

// reducer function - we set this to useRedducer
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, action.payload];

    case ACTIONS.MARK_AS_DONE:
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    case ACTIONS.DELETE:
      return todos.filter((x) => x.id !== action.id);

    default:
      return todos;
  }
} 

//todo app
const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  return (
    <>
      {/* add form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: ACTIONS.ADD,
            payload: { id: Date.now().toString(), name, isDone: false },
          });
          setName("");
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <button type="submit">add</button>
      </form>

      {/* todos list */}
      {todos &&
        todos.map((todo, i) => {
          return (
            <li key={i}>
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.name}
              </span>
              <button
                onClick={() => {
                  dispatch({ type: ACTIONS.MARK_AS_DONE, id: todo.id });
                }}
              >
                {todo.isDone ? "undo" : "done"}
              </button>
              <button
                onClick={() => {
                  dispatch({ type: ACTIONS.DELETE, id: todo.id });
                }}
              >
                delete
              </button>
            </li>
          );
        })}
    </>
  );
};

export default Todo;