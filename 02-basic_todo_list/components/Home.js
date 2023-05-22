import styles from "../styles/Home.module.css";
import { useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), content: todo, status: false }]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const cancelTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, status: !todo.status}
        } else {
          return todo
        }
      })
    );
  };

  return (
    <div>
      <div className="header">
        <p>My Todo list</p>
      </div>
      <div className="body">
        <div className="integration">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="my todo"
          ></input>
          <button onClick={addTodo}>Add todo</button>
        </div>
        <div className="content">
          <ul>
            {todos.map((todo) => ( 
              <li
                key={todo.id}
                className={todo.status ? styles.validated : ""}
              >
                <p>{todo.content}</p>
                <button onClick={() => cancelTodo(todo.id)}> done</button>
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
