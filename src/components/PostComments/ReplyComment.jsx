import SingleComment from "./SingleComment";

const ReplyComment = ({ parentCommentId, comments }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
      <div className="mr-4 mb-3">
        <SingleComment comment={comment} />
        <ReplyComment comments={comments} parentCommentId={comment._id}/>
      </div>
      )
    );
  });
};

export default ReplyComment;
