
import { useState } from 'react';

import './App.css';
import Posts from './components/Posts/Posts';
import UserDetails from './components/UserDetails/UserDetails';
import Users from './components/Users/Users';

function App() {

  const [user, setUser] = useState(null);
  const [postId, setPostId] = useState(null);


  const getUse = (user)=>{
    setUser(user)
    setPostId(null)
  }
  
  const getPostId = (id) =>{
    setPostId(id)
  }

  return (
<div>
  <div className='wrap'>
    <Users getUse={getUse}/>
    {user && <UserDetails user={user} getPostId={getPostId} />}
  </div>
  <div>
    {postId && <Posts postId={postId}/>}
  </div>
</div>
  );
}

export default App;
