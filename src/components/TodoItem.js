import { useState } from "react";

const TodoItem = ({ todoContent, id, onRemove }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className={completed ? "todoWrapper completed" : "todoWrapper"}>
      <p>{todoContent}</p>
      <button onClick={() => setCompleted(!completed)} className="button">Done</button>
      <button onClick={() => onRemove(id)} className="button">Remove</button>
    </div>
  );
};

export default TodoItem;
