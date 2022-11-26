import Link from "next/link";
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
    const deleteTodo =(id) => {
     fetch(`/api/todos/${id}` , {
      method: 'DELETE',
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
                      <Link href={`todos/${todo.id}`}>  <button>{todo.id}</button></Link>
                        <h3>{todo.title}</h3>
                        
                        <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
                        <hr />
                        </div>
                    )
                })
             }
        </div>
    );
}

export default Todos;