import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { usersService } from '../../services/users.service';
import './UserPostsPage.css';

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    usersService.getUserPosts(id).then(value => setPosts(value))
  }, [id]);

  return (
    <div className='posts'>
      {posts.map(post =>
        <div key={post.id}>
          <p>User Id: {post.userId}</p>
          <p>Id: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>)}
    </div>
  )
};

export { UserPosts };