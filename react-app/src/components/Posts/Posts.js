import{useEffect, useState} from 'react';
import Post from '../Post/Post';

let Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => setPosts(value))
    }, [])
    return (
        <div className='posts'>
            {posts.map(value => <Post userId={value.userId} id={value.id} title={value.title} body={value.body}/>)}
        </div>
    );
};

export default Posts;