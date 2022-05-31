const User = (props) => {
  let{id, name, username, email} = props;
  
  return (
    <div className="userSolo">
      {id} {name} {username} {email}
    </div>
  );
};

export default User;