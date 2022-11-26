import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Comment() {
    const [comment , setComment] = useState({});
    const router = useRouter();
    const id = router.query.id
    useEffect(() => {
        fetch( `https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[id])
  return (
    <div>
     <h1>{comment?.name}</h1>
     <p>{comment?.email}</p>
     <h3>{comment?.body}</h3>
  
    </div>
  )
}
