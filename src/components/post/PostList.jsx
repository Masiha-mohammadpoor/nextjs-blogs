import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import PostInteraction from "./PostInteraction";
import { toPersianDigits } from "@/utils/toPersianDigits";

const PostList = ({ blogData , categoryPage}) => {

  return (
    <section className="mb-5 col-span-12 md:col-span-9 grid grid-cols-6 gap-5 container mx-auto">
      {blogData.map((blog) => {
        return (
          <div
            className={`flex flex-col overflow-hidden ${categoryPage ? "max-h-[320px]" : "max-h-[365px]"} bg-gray-200 rounded-lg col-span-6 min-[480px]:col-span-3 lg:col-span-2`}
            key={blog._id}
          >
            {/* blogs image */}
            <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
              <div className="aspect-w-16 aspect-h-10">
                <img
                  src={blog.coverImage}
                  alt={blog.category.title}
                  className="w-full object-cover"
                />
              </div>
            </Link>
            {/*blogs info */}
            <div className="p-3 flex flex-col justify-between flex-1">
              <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <p className="font-bold mb-4">{blog.title}</p>
              </Link>
              <div className="flex flex-col">
                <div className="mb-3 w-full flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="/images/reactjs.jpg"
                      alt="admin"
                      className="rounded-full ml-2 w-7 h-7 object-cover"
                    />
                    <p className="text-sm text-gray-600">{blog.author.name}</p>
                  </div>
                  <Link href={`/blogs/${blog.category.englishTitle}`}>
                    <button className="text-sm transition-all duration-300 px-2 rounded-2xl bg-blue-400 text-blue-700 hover:bg-blue-700 hover:text-white">
                      {blog.category.title}
                    </button>
                  </Link>
                </div>
                {/* reaction */}
                <div className="w-full flex justify-between">
                  <PostInteraction blog={blog} />
                  <div className="flex items-center">
                    <FaRegClock size={14} className="text-gray-400" />
                    <p className="text-xs text-gray-500 font-bold mr-1">
                      {toPersianDigits(blog.readingTime)} دقیقه
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PostList;
