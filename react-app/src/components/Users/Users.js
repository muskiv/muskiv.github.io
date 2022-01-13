// import React from 'react';
// import {useEffect, useState} from 'react';
// import User from '../User/User';


// const Users = ()=>{
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(value => value.json())
//       .then(value => setUsers(value))
//     }, [])

//     const getUserId = (id) => {
//       fetch('https://jsonplaceholder.typicode.com/users/'+id)
//       .then(value => value.json())
//       .then(value => setUser(value))
//     }

//     return () => {
//     <div>
//       {user && <div>{user.id} -- {user.name} -- {user.email}</div>}
//       <div>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
//     </div>
//     }
// }

// export default Users;

import React, { useState, useEffect } from 'react'
import User from '../User/User';

const Users = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => setUsers(value))
  }, [])

  const getUserId = (id) => {
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(value => value.json())
    .then(value => setUser(value))
  }
 
  return(
    <div>
      {user && <div>{user.id} {user.username} {user.email}</div>}
      <div>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
    </div>
  )
}
export default Users