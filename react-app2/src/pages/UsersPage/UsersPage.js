import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { User } from '../../components';
import { usersService } from '../../services/users.service';
import './UserPage.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService.getAll().then(value => setUsers(value))
  }, []);

  return (
    <>
      <div className='users'>
        {users.map(user => <User key={user.id} user={user} />)}
      </div>
      <Outlet />
    </>
  )
};

export { UsersPage };