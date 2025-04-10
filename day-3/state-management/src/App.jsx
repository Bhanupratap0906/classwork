import React, { useReducer, useState } from "react";
const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        },
      ];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text } });
    setText("");
  };

  return (
    <div >
      <h1 >Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit" >
          Add
        </button>
      </form>
      <ul >
        {todos.map((todo) => (
          <li
            key={todo.id}
            
          >
            <span onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
             
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
