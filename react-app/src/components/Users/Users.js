import{useEffect, useState} from 'react';
import User from './components/User/User';

let Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => setUsers(value))
    }, [])
    return (
        <div>
            {users.map(value => <User id={value.id} name={value.name} surname={value.surname} email={value.surname}/>)}
        </div>
    );
};

export default Users;