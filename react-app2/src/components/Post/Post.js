const Post = (props) => {
  let{userId, id, title, body} = props;

  return (
    <div className="postSolo">
      {userId} {id} {title} {body}
    </div>
  );
};

export default Post