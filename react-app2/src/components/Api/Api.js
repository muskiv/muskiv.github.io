import {useEffect, useState} from 'react';

import User from '../User/User';
import Comment from '../Comment/Comment';
import Post from '../Post/Post';

export let Users = () =>{
  let [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => setUsers(value))
  }, [])
  return(
    <div className='user'>
      {users.map(value => <User key={value.id} id={<div className='id'>id {value.id}</div>} name={<div className='name'>name {value.name}</div>} username={<div className='username'>username {value.username}</div>} email={<div className='email'>email {value.email}</div>}/>)}
    </div>
  );
};

export let Posts = () =>{
  let[posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => setPosts(value))
  }, [])
  return(
    <div className='post'>
      {posts.map(value=><Post key={value.id} userId={<div className='userId'>userId {value.userId}</div>} id={<div className='id'>id {value.id}</div>} title={<div className='title'>title {value.title}</div>} body={<div className='body'>body {value.body}</div>}/>)}
    </div>
  );
};

export let Comments = () =>{
  let [comments, setComments] =  useState([]);

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(value =>value.json())
  .then(value => setComments(value))
}, [])
  return(
    <div className='comment'>
      {comments.map(value=> <Comment key={value.id} postId={<div className='postId'>postId {value.postId}</div>} id={<div className='id'>id {value.id}</div>} name={<div className='name'>name {value.name}</div>} email={<div className='email'>email {value.email}</div>} body={<div className='body'>body {value.body}</div>}/>)}
    </div>
  );
};