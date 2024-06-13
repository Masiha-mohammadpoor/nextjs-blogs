"use client";
import { toPersianDigits } from "@/utils/toPersianDigits";
import {
  FaHeart,
  FaRegCommentDots,
  FaBookmark,
  FaRegHeart,
  FaRegBookmark,
} from "react-icons/fa";

const PostInteraction = ({ blog }) => {
  return (
    <div className="flex gap-x-2">
      <button className="transition-all duration-300 hover:bg-gray-600 hover:text-white flex items-center py-1 px-1 rounded-lg text-gray-600 bg-gray-400">
        <FaRegCommentDots />{" "}
        <span className="text-xs font-bold mr-1">
          {toPersianDigits(blog.commentsCount)}
        </span>
      </button>
      <button
        className={`transition-all duration-300 hover:bg-red-600  hover:text-white flex items-center py-1 px-1 rounded-lg text-red-600 bg-red-300`}
      >
        {blog.isLiked ? <FaHeart /> : <FaRegHeart />}{" "}
        <span className="text-xs font-bold mr-1">
          {toPersianDigits(blog.likesCount)}
        </span>
      </button>
      <button
        className={`transition-all duration-300 hover:bg-blue-600 hover:text-white flex items-center py-1 px-1 rounded-lg text-blue-600 bg-blue-300`}
      >
        {blog.isBookmarked ? <FaBookmark /> : <FaRegBookmark />}{" "}
        <span className="text-xs font-bold"></span>
      </button>
    </div>
  );
};

export default PostInteraction;
