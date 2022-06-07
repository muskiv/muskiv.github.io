import React, { useEffect, useState } from 'react'

import { postService } from '../../services/post.service';
import Post from '../Post/Post';

const Posts = ({postId}) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    postService.getAll(postId)
    .then(value => setPosts(value))
  },[postId])

  return (
    <div className='posts'>
      {posts.map(value => <Post key={value.id} post={value}/>)}
    </div>
  )
}

export default Posts