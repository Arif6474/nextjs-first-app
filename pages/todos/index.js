import { useState } from "react";

function Todos() {
    const [todos, setTodos] = useState([])
    const getAllTodos = () => {
        fetch('/api/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }
    return (
        <div>
            <h1>
             All Todos
            </h1>
             <button onClick={getAllTodos}>Load All Todos</button>
             {
                todos.map(todo => {
                    return(
                        <div key={todo.id}>
                        <h2>{todo.id}</h2>
                        <h3>{todo.title}</h3>
                        <p>{todo.completed}</p>
                        </div>
                    )
                })
             }
        </div>
    );
}

export default Todos;