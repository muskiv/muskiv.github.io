import { Link } from 'react-router-dom';

import './User.css';

const User = ({ user }) => {
  const { id, name, username } = user;

  return (
    <div className='user'>
      {id} {name} {username}
      <Link to={id.toString()} state={{ ...user }}><button className='btn'>User Details</button></Link>
      <Link to={id.toString() + '/albums'} state={{...user }}><button className='btn'>Albums</button></Link>
    </div>
  )
};

export { User };