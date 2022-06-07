import React, { useEffect, useState } from 'react';

import { userService } from '../../services/user.service';
import User from '../User/User';


const Users = ({getUse}) => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    userService.getAll()
    .then(value => setUsers(value))
  }, [])

  return (
    <div>{users.map(value => <User key={value.id} user={value} getUse={getUse}/>)}</div>
  )
}

export default Users