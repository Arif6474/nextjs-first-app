import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Comments() {
    const [comments , setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
  return (
    <div>
      <h1>Comments: {comments.length}</h1>
     {
        comments.map(comment => {
            return (
                <div key={comment.id}>
                       <Link  href={`comments/${comment.id}`}><button>{comment.id}</button></Link>
                    <h1>{comment.name}</h1>
                    <hr />
                </div>
            )
        })
     }
    </div>
  )
}
