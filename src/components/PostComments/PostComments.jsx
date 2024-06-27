"use client";
import { useState } from "react";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";
import http from "@/services/httpService";
import toast from "react-hot-toast";
import { usePathname , useRouter} from "next/navigation";

const PostComments = ({ post }) => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      content : comment,
      postId: post._id,
      responseTo : null
    }

    try{
      const {data : res} = await http.post("/post-comment/save-comment" , data);
      toast.success(res.message);
      router.push(pathname , {
        scroll:false
      })
    }catch(err){
      console.log(err)
      toast.error(err?.response?.data?.message)
    }
  }

  return (
    <div className="px-2">
      <h1 className="mb-5 text-3xl font-black">نظرات</h1>
      {post.comments.map((comment, index) => {
        if (!comment.responseTo && comment.status === 2) {
          return (
            <>
              <SingleComment key={comment._id} comment={comment} postId={post._id}/>
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
                postId={post._id}
              />
            </>
          );
        }
      })}

      {/* comment form */}
      <form onSubmit={submitHandler} className="mt-10">
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
