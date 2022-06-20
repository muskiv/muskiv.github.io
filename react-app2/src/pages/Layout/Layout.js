import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

import './Layout.css';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='main'>
        <Outlet />
      </div>
    </>
  )
};

export { Layout };