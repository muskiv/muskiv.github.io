import { useEffect, useState } from 'react';

import './App.css';
import Form from './components/Form';
import Users from './components/Users';
import { userService } from './services/user.service';

function App() {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(()=>{
    userService.getAll()
    .then(value => {
      setUsers([...value])
      setFilter([...value])
    })
  }, []);

  const getFilter = (data) =>{

    let filterArr = [...users]

    if(data.name){
      filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
    }

    if(data.username){
      filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
    }

    if(data.email){
      filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
    }

    setFilter(filterArr)
  }



  return (
    <>
    <Form getFilter={getFilter}/>
    <Users users={filter}/>
    </>
  )
}

export default App;
