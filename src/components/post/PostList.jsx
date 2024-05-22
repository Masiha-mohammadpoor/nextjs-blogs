import {  FaRegClock , FaRegCommentDots , FaRegHeart , FaRegBookmark} from "react-icons/fa";
import Link from "next/link";

const PostList = ({blogData}) => {

    const blogs = blogData.data.docs;

    return (
        <section className="mb-5 col-span-12 md:col-span-9 grid grid-cols-6 gap-5 container mx-auto">
        {blogs.map(blog => {
          return <div className="flex flex-col overflow-hidden max-h-[320px] bg-gray-200 rounded-lg col-span-6 min-[480px]:col-span-3 lg:col-span-2" key={blog._id}>
            {/* blogs image */}
            <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <div className="aspect-w-16 aspect-h-10">
                <img src={blog.coverImage} alt={blog.category.title} className="w-full object-cover"/>
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
                  <img src="/images/reactjs.jpg" alt="admin" className="rounded-full ml-2 w-7 h-7 object-cover"/>
                  <p className="text-sm text-gray-600">{blog.author.name}</p>
                </div>
                <Link href={`/blogs/${blog.category.englishTitle}`}><button className="text-sm transition-all duration-300 px-2 rounded-2xl bg-blue-400 text-blue-700 hover:bg-blue-700 hover:text-white">{blog.category.title}</button></Link>
              </div>
              {/* reaction */}
              <div className="w-full flex justify-between">
                <div className="flex">
                  <button className="transition-all duration-300 hover:bg-gray-600 hover:text-white flex items-center py-1 px-1 ml-1 rounded-lg text-gray-600 bg-gray-400"><FaRegCommentDots/> <span className="text-xs font-bold mr-1">{blog.commentsCount}</span></button>
                  <button className="transition-all duration-300 hover:bg-red-600 hover:text-white flex items-center py-1 px-1 ml-1 rounded-lg text-red-600 bg-red-300"><FaRegHeart/> <span className="text-xs font-bold mr-1">{blog.likesCount}</span></button>
                  <button className="transition-all duration-300 hover:bg-blue-600 hover:text-white flex items-center py-1 px-1 ml-1 rounded-lg text-blue-600 bg-blue-300"><FaRegBookmark/> <span className="text-xs font-bold"></span></button>
                </div>
                <div className="flex items-center">
                  <FaRegClock size={14}  className="text-gray-400"/>
                  <p className="text-xs text-gray-500 font-bold mr-1">{blog.readingTime} دقیقه</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        })}
      </section>
    );
}
 
export default PostList;