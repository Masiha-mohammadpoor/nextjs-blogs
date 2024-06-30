"use client";
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
import { useState, useEffect } from "react";

const PostInteraction = ({ blog }) => {
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    const getLikesAndComment = async () => {
      try {
        const {
          data: { data },
        } = await http.get(`/posts/${blog.slug}`);
        setLike(data.isLiked);
        setLikesCount(data.likesCount);
        setBookmark(data.isBookmarked);
      } catch (err) {
        toast.error("please refresh page");
      }
    };
    getLikesAndComment();
  }, []);

  const likeHandler = async (id) => {
    try {
      const likePost = await http.put(`/posts/like/${id}`);
      const {
        data: { data },
      } = await http.get(`/posts/${blog.slug}`);
      setLike(data.isLiked);
      setLikesCount(data.likesCount);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (id) => {
    try {
      const bookmarkPost = await http.put(`/posts/bookmark/${id}`);
      const {
        data: { data },
      } = await http.get(`/posts/${blog.slug}`);
      setBookmark(data.isBookmarked);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex gap-x-2">
      <button className="transition-all duration-300 hover:bg-gray-600 hover:text-white flex items-center py-1 px-1 rounded-lg text-gray-600 bg-gray-400">
        <FaRegCommentDots />{" "}
        <span className="text-xs font-bold mr-1">
          {toPersianDigits(blog.commentsCount)}
        </span>
      </button>
      <button
        onClick={() => likeHandler(blog._id)}
        className={`transition-all duration-300 hover:bg-red-600  hover:text-white flex items-center py-1 px-1 rounded-lg text-red-600 bg-red-300`}
      >
        {like ? <FaHeart /> : <FaRegHeart />}{" "}
        <span className="text-xs font-bold mr-1">
          {toPersianDigits(likesCount)}
        </span>
      </button>
      <button
        onClick={() => bookmarkHandler(blog._id)}
        className={`transition-all duration-300 hover:bg-blue-600 hover:text-white flex items-center py-1 px-1 rounded-lg text-blue-600 bg-blue-300`}
      >
        {bookmark ? <FaBookmark /> : <FaRegBookmark />}{" "}
        <span className="text-xs font-bold"></span>
      </button>
    </div>
  );
};

export default PostInteraction;
