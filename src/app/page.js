"use client";
import { FaChevronDown , FaSortAmountDownAlt} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


const Home = () => {

  const [showCategoryMenu , setShowCategoryMenu] = useState(true);
  
  return (
    <main className="grid gap-3 md:grid-cols-12 min-h-screen md:grid-rows-[60px_minmax(300px,_1fr)]">
      {/* category */}
      <section className="md:col-span-3 md:row-span-2">
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
        <section className="bg-blue-300 md:col-span-9">blogs</section>
    </main>
  );
}
 
export default Home;