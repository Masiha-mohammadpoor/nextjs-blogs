import http from "@/services/httpService";
import { toPersianDigits } from "@/utils/toPersianDigits";
import toast from "react-hot-toast";
import {
  FaHeart,
  FaRegCommentDots,
  FaBookmark,
  FaRegHeart,
  FaRegBookmark,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Router from "next/router";



const PostInteraction = ({ blog }) => {

  const router = useRouter();
  const pathName = usePathname();

  const clickHandler = async (id) => {
    try{
      const {data} = await http.put(`/posts/like/${id}` , {
        catch:"no-store"
      })
      router.push(pathName , {
        scroll:false,
      })
      router.refresh()
    }catch(err){
      toast.error(err?.response?.data?.message)
    }
  }

  const bookmarkHandler = async (id) => {
    try{
      const {data} = await http.put(`/posts/bookmark/${id}` , {
        catch:"no-store"
      })
      router.push(pathName , {
        scroll:false,
        })
        router.refresh()
    }catch(err){
      toast.error(err?.response?.data?.message)
    }
  }

  return (
    <div className="flex gap-x-2">
      <button className="transition-all duration-300 hover:bg-gray-600 hover:text-white flex items-center py-1 px-1 rounded-lg text-gray-600 bg-gray-400">
        <FaRegCommentDots />{" "}
        <span className="text-xs font-bold mr-1">
          {toPersianDigits(blog.commentsCount)}
        </span>
      </button>
      <button
        onClick={() => clickHandler(blog._id)}
        className={`transition-all duration-300 hover:bg-red-600  hover:text-white flex items-center py-1 px-1 rounded-lg text-red-600 bg-red-300`}
      >
        {blog.isLiked ? <FaHeart /> : <FaRegHeart />}{" "}
        <span className="text-xs font-bold mr-1">
          {toPersianDigits(blog.likesCount)}
        </span>
      </button>
      <button
      onClick={() => bookmarkHandler(blog._id)}
        className={`transition-all duration-300 hover:bg-blue-600 hover:text-white flex items-center py-1 px-1 rounded-lg text-blue-600 bg-blue-300`}
      >
        {blog.isBookmarked ? <FaBookmark /> : <FaRegBookmark />}{" "}
        <span className="text-xs font-bold"></span>
      </button>
    </div>
  );
};

export default PostInteraction;
