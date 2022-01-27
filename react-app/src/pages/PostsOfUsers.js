import { Outlet, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Posts from './Posts';

const PostsOfUsers = () => {

  let {id} = useParams;

  let [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/'+ id + '/posts')
    .then(value => value.json())
    .then(value => {
      setPosts([...value])
    })
  }, [])

  return (
  <div>
    {posts.map(value => <Posts key={value.id} item={value}/>)}

<Outlet/>
  </div>
  )
};

export default PostsOfUsers;
