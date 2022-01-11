import{useEffect, useState} from 'react';
import User from '../User/User';
import Comment from '../Comment/Comment'
import Post from '../Post/Post';

export let Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => setUsers(value))
    }, [])
    return (
        <div className='user'>
            {users.map(value => <User key={value.id} id={value.id} name={value.name} surname={value.surname} email={value.email}/>)}
        </div>
    );
};


export let Comments = () => {
    let[comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => setComments(value))
    }, [])
    return (
        <div className='comments'>
            {comments.map(value => <Comment key={value.id} postId={value.postId} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
};



export let Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => setPosts(value))
    }, [])
    return (
        <div className='posts'>
            {posts.map(value => <Post key={value.id} userId={value.userId} id={value.id} title={value.title} body={value.body}/>)}
        </div>
    );
};
