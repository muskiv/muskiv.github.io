import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { postService } from "../../services/posts.service";

const PostCommentsPage = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    postService.getCommentsPost(id).then(value => setComments(value))
  }, [id]);


  return (
    <div className='comments'>
      {comments.map(comment =>
        <div key={comment.id}>
          <p>Post Id: {comment.postId}</p>
          <p>Id: {comment.id}</p>
          <p>Name: {comment.name}</p>
          <p>Email: {comment.email}</p>
          <p>Body: {comment.body}</p>
        </div>
      )}
    </div>
  )
};

export { PostCommentsPage };