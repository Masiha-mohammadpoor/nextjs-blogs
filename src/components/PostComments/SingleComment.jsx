import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import http from "@/services/httpService";
import { usePathname , useRouter} from "next/navigation";
import toast from "react-hot-toast";

const SingleComment = ({ comment , postId}) => {
  const [reply, setReply] = useState(false);
  const [response , setResponse] = useState("");
  const router = useRouter();
  const pathname = usePathname();



  const submitHandler = async (e) => {
    e.preventDefault()
    const data = {
      content : response,
      postId,
      responseTo : comment._id
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
      {reply && <form onSubmit={submitHandler} className="mt-3">
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
