import { useState } from "react";

function Todos() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const getAllTodos = () => {
        fetch('/api/todos' , {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setTodos(data))
    }
    const handleTodo = () => {
        fetch('/api/todos',{
            method: 'POST',
            body: JSON.stringify({todo}),
            headers: {'Content-Type': 'application/json'}
        })
        getAllTodos()
    }
    return (
        <div>
            <h1>
             All Todos
            </h1>
            <input onChange={(e)=> setTodo(e.target.value)} type="text" />
            <button onClick={handleTodo}>Add Todo</button> <br />
             <button onClick={getAllTodos}>Load All Todos</button>
             {
                todos.map(todo => {
                    return(
                        <div key={todo.id}>
                        <h2>{todo.id}</h2>
                        <h3>{todo.title}</h3>
                        <p>{todo.userId}</p>
                        </div>
                    )
                })
             }
        </div>
    );
}

export default Todos;