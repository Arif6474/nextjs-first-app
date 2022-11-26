import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Todo() {
    const [todo, setTodo] = useState({})
    const router = useRouter();
    const id = router.query.id
    useEffect(() => {
        fetch( `https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => setTodo(data))
    },[id])
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  )
}
