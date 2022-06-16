import React from 'react'

const User = ({user}) => {

  const {id, name, username, email} = user;
  return (
    <div className='user'>
      {id} {name} {username} {email} 
    </div>
  )
}

export default User