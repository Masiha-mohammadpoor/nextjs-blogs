"use client";
import { FaChevronDown , FaSortAmountDownAlt} from "react-icons/fa";
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
      <section className="bg-blue-300 col-span-12 md:col-span-9 grid grid-cols-6 gap-5">
        {["nextjs.jpg","nodejs.jpg","nuxtjs.jpg","reactjs.jpg","tailwind.jpg","vuejs.jpg"].map(i => {
          return <div className="bg-gray-200 rounded-lg col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <div className="aspect-w-16 aspect-h-9">
                <img src={`/images/${i}`} alt={i} className="w-full object-cover"/>
              </div>
          </div>
        })}
      </section>
    </div>
    </main>
  );
}
 
export default Home;