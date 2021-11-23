import { useState } from "react";

import TodoItem from "./components/TodoItem";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const addTodo = () => {
    setTodoList((prev) => [...prev, todoValue]);
    setTodoValue("");
  };

  const removeTodo = (id) => {
    const newTodos = todoList.filter((_, index) => index !== id);
    setTodoList(newTodos);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1>ToDo-Liste</h1>
        <div className="todoControls">
          <input
            type="text"
            onChange={(e) => setTodoValue(e.target.value)}
            value={todoValue}
          />
          <button onClick={addTodo} className="button">Hinzufügen</button>
        </div>
        <br />
        <div className="todoItems">
          {todoList.map((entry, index) => (
            <TodoItem
              todoContent={entry}
              key={index}
              id={index}
              onRemove={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
