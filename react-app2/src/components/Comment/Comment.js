const Comment = (props) => {
  let{postId, id, name, email, body} = props;

  return (
    <div className="commentSolo">
      {postId} {id} {name} {email} {body}
    </div>
  );
};

export default Comment