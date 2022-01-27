import React from 'react';


const Posts = (props) => {
  let {item} = props;
  let {title, id} = item;

  return (<div>
    {id} {title}
    <div  state={item} ></div>
  </div>)
};

export default Posts;
