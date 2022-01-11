
let User = (props) => {
    let{id, name, surname, email} = props;
    
    return (
        <div>
            {id}  {name}  {surname}  {email}
        </div>
    );
    };
export default User;