import React from 'react'

const Post = ({post}) => {
  return (
    <div className='Posts'>
      <div>userId: {post.userId}</div>
      <div>id: {post.id}</div>
      <div>title: {post.title}</div>
      <div>body: {post.body}</div>
    </div>
  )
}

export default Post