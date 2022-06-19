import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

import './Layout.css';


const Layout = () => {
  return (
    <>
    <Header/>
    <div className='main'>
      <Outlet/>
    </div>
    </>
  )
}

export {Layout}