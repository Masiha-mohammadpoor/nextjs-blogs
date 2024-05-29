"use client";
import { useState } from "react";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";

const PostComments = ({ post }) => {
  const [comment, setComment] = useState("");

  return (
    <div>
      <h1 className="mb-5 text-3xl font-black">نظرات</h1>
      {post.comments.map((comment, index) => {
        if (!comment.responseTo && comment.status === 2) {
          return (
            <>
              <SingleComment key={comment._id} comment={comment} />
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
              />
            </>
          );
        }
      })}

      {/* comment form */}
      <form className="mt-10">
        <h2 className="font-bold mb-4">ارسال دیدگاه جدید</h2>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          placeholder="دیدگاه خود را بنویسید...."
          className="mb-5 p-3 border-2 border-gray-500 rounded-md w-full h-32"
        ></textarea>
        <button className="py-2 px-3 rounded-full bg-blue-600 text-white">
          ارسال نظر
        </button>
      </form>
    </div>
  );
};

export default PostComments;
