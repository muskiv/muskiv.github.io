
// const User = ({user: {id, name, username, email}, getUserId}) => {
//     return (
//         <div>
//             {id} {name} {username} {email}
//             <button onClick={()=>getUserId(id)}>getId</button>
//         </div>
//     );
// };

// export default User;


const User = ({user:{id, name, username, email}, getUserId}) => {
  return (
    <div>
      {id} {name} {username} {email}
      <button onClick={()=>getUserId(id)}>getId</button>
    </div>
  )
}

export default User