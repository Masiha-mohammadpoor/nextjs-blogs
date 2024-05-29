import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const SingleComment = ({ comment }) => {
  const [reply, setReply] = useState(false);
  const [response , setResponse] = useState("");

  return (
    <div className="mb-4 w-full p-2 sm:p-3 border-2 border-gray-600 rounded-md">
      <div className="flex items-center mb-3">
        <FaRegUserCircle size={40} />
        <div className="mr-4">
          <p className="text-xs text-gray-400">{comment.writer?.name}</p>
          <p className="text-xs text-gray-400">
            {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
      <p className="mb-3">{comment.content}</p>
      <button onClick={() => setReply(!reply)} className="text-blue-500">
        {reply ? "بیخیال" : "پاسخ به"}
      </button>
      {reply && <form className="mt-3">
        <h2 className="font-bold mb-2">پاسخ به {comment.writer?.name}</h2>
        <textarea
          onChange={e => setResponse(e.target.value)}
          value={response}
          placeholder="دیدگاه خود را بنویسید...."
          className="mb-2 p-3 border-2 border-gray-500 rounded-md w-full"
        ></textarea>
        <button className="py-1 px-3 rounded-full bg-purple-600 text-white">
          ارسال نظر
        </button>
      </form>}
    </div>
  );
};

export default SingleComment;
