import React, { useState, useEffect } from 'react'

import { userService } from '../../services/user.services';
import User from '../User/User';

const Users = ({getUse}) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll()
    .then(value => setUsers(value))
  }, [])

  return(
    <div>{users.map(value => <User key={value.id} user={value} getUse={getUse}/>)}</div>
  )
}

export default Users