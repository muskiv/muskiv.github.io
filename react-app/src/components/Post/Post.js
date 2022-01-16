import React from 'react'

const Post = ({post}) => {
  
  return (
    <>
      <div className='Posts'>
        <div>User Id: {post.userId}</div>
        <div>Post Id: {post.id}</div>
        <div>Title: {post.title}</div>
        <div>Body: {post.body}</div>
      </div>
    </>
  )
}

export default Post
