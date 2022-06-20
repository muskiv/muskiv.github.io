import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { usersService } from '../../services/users.service';
import './UserDetailsPage.css';

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const { state: userDetails } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (userDetails) {
      setUser(userDetails);
      return;
    };

    usersService.getUserId(id).then(value => setUser(value));
  }, [id, userDetails]);

  return (
    <div className='user_details_page'>
      {user &&
        <div className='details_page'>
          <ul>
            <li>Id: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>User Name: {user.username}</li>
            <li>Email: {user.email}</li>
            <ul>
              <li>Street: {user.address.street}</li>
              <li>Suite: {user.address.suite}</li>
              <li>City: {user.address.city}</li>
              <li>Zip Code: {user.address.zipcode}</li>
              <ul>
                <li>Lat: {user.address.geo.lat}</li>
                <li>LNG: {user.address.geo.lng}</li>
              </ul>
            </ul>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
            <ul>
              <li>Company Name: {user.company.name}</li>
              <li>Catch Phrase: {user.company.catchPhrase}</li>
              <li>BS: {user.company.bs}</li>
            </ul>
          </ul>
          <Link to={'posts'}><button className='btn_user_details_post'>All Post Users</button></Link>
        </div>
      }
      <div className='user_posts'>
        <Outlet />
      </div>
    </div>
  )
};

export { UserDetailsPage };