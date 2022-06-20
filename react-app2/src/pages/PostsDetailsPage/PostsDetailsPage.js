import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { postService } from "../../services/posts.service";
import "./PostsDetailsPage.css";

const PostsDetailsPage = () => {
  const [post, setPost] = useState(null);
  const { state: postDetails } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (postDetails) {
      setPost(postDetails)
      return;
    };

    postService.getPostId(id).then(value => setPost(value))
  }, [id, postDetails]);

  return (
    <div className="posts_details">
      <div>
        {post &&
          <div>
            <ul>
              <li>User Id: {post.userId}</li>
              <li>Id: {post.id}</li>
              <li>Title: {post.title}</li>
              <li>Body: {post.body}</li>
            </ul>
            <Link to={'comments'}><button className="btn_comments">All Comments Posts</button></Link>
          </div>
        }
      </div>
      <div className="post_comments">
        <Outlet />
      </div>
    </div>
  )
};

export { PostsDetailsPage };