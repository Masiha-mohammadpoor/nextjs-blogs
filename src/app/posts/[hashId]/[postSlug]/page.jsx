import axios from "axios";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { FaRegBookmark , FaLink } from "react-icons/fa";
import Link from "next/link";

const getPostData = async (params) => {
  try {
    const { data : {data} } = await axios.get(
      `http://localhost:5000/api/posts/${params.postSlug}`,
      { catch: "no-store" }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

const PostPage = async ({ params }) => {
  const post = await getPostData(params);
  console.log(post.category)

  return (
    <div className="container mx-auto lg:max-w-screen-xl px-52">
      <header className="flex justify-between items-center">
        <article className="flex">
          <img src="/images/nuxtjs.jpg" alt="writer" className="ml-4 w-16 h-16 rounded-full object-cover"/>
          {/* info */}
          <div>
            <div className="flex justify-between items-center mb-0.5">
              <p className="font-bold">{post.author.name}</p>
              <Link href={`/blogs/${post.category.englishTitle}`}><button className="px-2 rounded-2xl border border-blue-600 text-xs text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">{post.category.title}</button></Link>
            </div>
            <p className="text-xs mb-1">{post.author.biography}</p>
            <p className="text-sm">
              {new Date(post.createdAt).toLocaleDateString("fa-IR")} &bull; خواندن{" "}
              {toPersianDigits(`${post.readingTime}`)} دقیقه
            </p>
          </div>
        </article>
        <article className="w-36 flex justify-between">
          <button className="flex items-center border border-gray-600 rounded-2xl transition-all duration-300 hover:bg-gray-600 hover:text-white px-2 py-1">لینک <FaLink className="mr-1"/> </button>
          <button className="flex items-center border border-gray-600 rounded-2xl transition-all duration-300 hover:bg-gray-600 hover:text-white px-2 py-1">ذخیره <FaRegBookmark className="mr-1"/> </button>
        </article>
      </header>
    </div>
  );
};

export default PostPage;
