import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Post } from '../../components';
import { postService } from '../../services/posts.service';
import './PostsPage.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then(value => setPosts(value))
  }, []);

  return (
    <>
      <div className='posts'>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
      <Outlet />
    </>
  )
};

export { PostsPage };