"use client";
import { FaChevronDown , FaSortAmountDownAlt , FaRegClock , FaRegCommentDots , FaRegHeart , FaRegBookmark} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


const Home = () => {

  const [showCategoryMenu , setShowCategoryMenu] = useState(true);
  
  return (
    <main className="mx-auto lg:max-w-screen-xl">
    <div className="container mx-auto grid gap-3 md:grid-cols-12 min-h-screen md:grid-rows-[60px_minmax(300px,_1fr)]">
      {/* category */}
      <section className="hidden md:block md:col-span-3 md:row-span-2">
        <div>
          <div onClick={() => setShowCategoryMenu(prev => !prev)} className="p-3 rounded-t-xl flex justify-between items-center cursor-pointer bg-purple-300">
            <p className="text-purple-600">دسته بندی مقالات</p>
            <FaChevronDown className={`text-purple-600 transition-all duration-300 ${showCategoryMenu ? "rotate-180" : "rotate-0"}`}/>
          </div>
          <div className={`rounded-b-xl overflow-hidden ${showCategoryMenu ? "block" : "hidden"}`}>
            <Link href="#"><div className="transition-all duration-300 p-3 bg-slate-100 hover:bg-gray-300">ریکت</div></Link>
            <Link href="#"><div className="transition-all duration-300 p-3 bg-slate-100 hover:bg-gray-300">نکست</div></Link>
            <Link href="#"><div className="transition-all duration-300 p-3 bg-slate-100 hover:bg-gray-300">تیلویند</div></Link>
          </div>
        </div>
      </section>
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
      <section className="col-span-12 md:col-span-9 grid grid-cols-6 gap-5">
        {["nextjs.jpg","nodejs.jpg","nuxtjs.jpg","reactjs.jpg","tailwind.jpg","vuejs.jpg"].map((i,index)=> {
          return <div className="flex flex-col overflow-hidden bg-gray-200 rounded-lg col-span-6 md:col-span-3 lg:col-span-2" key={i}>
            {/* blogs image */}
            <div className="aspect-w-16 aspect-h-10">
              <img src={`/images/${i}`} alt={i} className="w-full object-cover"/>
            </div>
            {/*blogs info */}
            <div className="p-3 flex flex-col justify-between flex-1">
              <p className="font-bold mb-4">{index !== 1 ? "بررسی کامل ریکت و ریداکس" : "یک عنوان تستی و طولانی که دو خط یا بیشتر از دو خط و غیره باشد ...."}</p>
              <div className="flex flex-col">
              <div className="mb-3 w-full flex justify-between items-center">
                <div className="flex items-center">
                  <img src="/images/reactjs.jpg" alt="admin" className="rounded-full ml-2 w-7 h-7 object-cover"/>
                  <p className="text-sm text-gray-600">مسیحا محمدپور</p>
                </div>
                <button className="transition-all duration-300 px-2 rounded-2xl bg-blue-400 text-blue-700 hover:bg-blue-700 hover:text-white">ریکت</button>
              </div>
              {/* reaction */}
              <div className="w-full flex justify-between">
                <div className="flex">
                  <button className="transition-all duration-300 hover:bg-gray-600 hover:text-white flex items-center py-1 px-1 ml-1 rounded-lg text-gray-600 bg-gray-400"><FaRegCommentDots/> <span className="text-xs font-bold mr-1">4</span></button>
                  <button className="transition-all duration-300 hover:bg-red-600 hover:text-white flex items-center py-1 px-1 ml-1 rounded-lg text-red-600 bg-red-300"><FaRegHeart/> <span className="text-xs font-bold mr-1">16</span></button>
                  <button className="transition-all duration-300 hover:bg-blue-600 hover:text-white flex items-center py-1 px-1 ml-1 rounded-lg text-blue-600 bg-blue-300"><FaRegBookmark/> <span className="text-xs font-bold"></span></button>
                </div>
                <div className="flex items-center">
                  <FaRegClock size={14}  className="text-gray-400"/>
                  <p className="text-xs text-gray-500 font-bold mr-1">زمان مطالعه:20 دقیقه</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        })}
      </section>
    </div>
    </main>
  );
}
 
export default Home;