import { Link } from 'react-router-dom';

import './Post.css';

const Post = ({ post }) => {
  const { userId, id, title } = post;
  
  return (
    <div className='post'>
      {userId} {id} {title}
      <Link to={id.toString()} state={{ ...post }}><button className='btn'>Post Details</button> </Link>
    </div>
  )
};

export { Post };