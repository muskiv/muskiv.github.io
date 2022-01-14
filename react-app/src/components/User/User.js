import React from 'react';

const User = ({user, getUse}) => {
const {id, name, username, email} = user;

return (
  <div className='users'>
    <div className='usersBody'>{id} {name} {username} {email}</div>
    <button className='btn' onClick={()=>{getUse(user)}}>User Details</button>
  </div>
)
}

export default User
