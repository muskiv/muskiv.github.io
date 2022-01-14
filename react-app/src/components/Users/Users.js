import React, { useState, useEffect } from 'react'

import { userService } from '../services/user.services';
import User from '../User/User';

const Users = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    userService.getAll()
    .then(value => setUsers(value))
  }, [])

  const getUserId = (id) => {
    userService.getById(id)
    .then(value => setUser(value))
  }

  return(
    <div className='main'>
      <div className='users'>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
      {user && <div className='userDetails'>
        <div className='userDetail'>
          <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
              <div>{user.address.street}</div>
              <div>{user.address.suite}</div>
              <div>{user.address.city}</div>
              <div>{user.address.zipcode}</div>
                  <div>{user.address.geo.lat}</div>
                  <div>{user.address.geo.lng}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
              <div>{user.company.name}</div>
              <div>{user.company.catchPhrase}</div>
              <div>{user.company.bs}</div>
        </div>
            <div className='btnPost'><button>Get Posts</button></div>
      </div>}
    </div>
  )
}
export default Users