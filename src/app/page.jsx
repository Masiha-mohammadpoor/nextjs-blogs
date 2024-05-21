import { FaSortAmountDownAlt } from "react-icons/fa";
import PostList from "@/components/post/PostList";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import axios from "axios";

const getAllPosts = async () => {
  try{
    const {data} = await axios.get("http://localhost:5000/api/posts?limit=6");
    return data;
  }catch(err){
    console.error(err);
  }
}

const getCategories = async () => {
  try{
    const {data} = await axios.get("http://localhost:5000/api/post-category");
    return data;
  }catch(err){
    console.error(err);
  }
}



const Home = async () => {
  const blogs = await getAllPosts();
  const categories = await getCategories();

  return (
    <main className="container mx-auto lg:max-w-screen-xl px-3">
    <div className="grid gap-5 md:grid-cols-12 min-h-screen md:grid-rows-[60px_minmax(300px,_1fr)]">
      {/* category */}
      <CategoryMenu categories={categories}/>
      {/* sortBar */}
        <section className="hidden md:block md:col-span-9">
          <div className="bg-slate-100 flex rounded-xl overflow-hidden pr-3">
            <div className="flex ml-8 items-center">
              <FaSortAmountDownAlt className="ml-1"/>
              <p>مرتب سازی:</p>
            </div>
            <ul className="flex w-72 justify-between items-center">
              <li className="py-3 cursor-pointer text-gray-600">جدید‌ترین</li>
              <li className="py-3 cursor-pointer text-gray-600">پر‌بازدیدترین</li>
              <li className="py-3 cursor-pointer text-gray-600">محبوب‌ترین</li>
            </ul>
          </div>
        </section>
        {/* blogs */}
        <PostList blogData={blogs}/>
    </div>
    </main>
  );
}
 
export default Home;