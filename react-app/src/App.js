import{Routes, Route, Link, } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';

const App = () => {
  return(
  <div>
    <ul>
      <li>
        <Link to={'/'}>Home</Link></li>
      <li>
        <Link to={'/layout'}>Layout</Link></li>
    </ul>

    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/layout'} element={<Layout/>}>
        <Route path={'/layout/users'} element={<Users/>}/>
        <Route path={'/layout/posts'} element={<Posts/>}/>
        <Route path={'/layout/comments'} element={<Comments/>}/>
      </Route>

    </Routes>
  </div>
  );
};

export default App;
