import React from 'react';
import {useLocation} from 'react-router-dom';

const PostDetails = () => {

let {state:post} = useLocation();

  return (
  <div>
  {JSON.stringify(post)}
  </div>
  )
};

export default PostDetails;
