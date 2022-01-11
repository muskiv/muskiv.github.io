import {useEffect, useState} from "react";
import Comment from '../Comment/Comment'

let Comments = () => {
    let[comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => setComments(value))
    }, [])
    return (
        <div className='comments'>
            {comments.map(value => <Comment postId={value.postId} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
};

export default Comments;