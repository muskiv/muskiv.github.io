import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {

  let {item} = props;
  let {name, id} = item;

  return (
  <div>
    {id} - {name} 
    <button>
      <Link to={'/layout/users/' + id}
        state={item}>
          details about user
      </Link>
    </button>

    <button>
      <Link to={`/layout/users/${id}/posts`} >
        posts of this user
      </Link>
    </button>
  </div>
  )
};

export default User;
