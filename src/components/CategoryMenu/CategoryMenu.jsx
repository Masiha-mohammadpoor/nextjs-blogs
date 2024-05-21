"use client"
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";


const CategoryMenu = ({categories}) => {

    const [showCategoryMenu , setShowCategoryMenu] = useState(true);

    return (
      <>
        <section className="md:col-span-3 md:row-span-2">
        <div className="hidden md:block ">
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
      <div className="col-span-12 pb-5 flex md:hidden overflow-auto">
      <button className="transition-all duration-300 hover:bg-gray-500 hover:text-white whitespace-nowrap border-2 rounded-2xl border-gray-600 text-gray-700 mx-1.5 px-2 py-1">
          <Link href={`/blogs`}>All Posts</Link>
      </button>
      {categories.data.map(category => {
        return <button className="transition-all duration-300 hover:bg-gray-500 hover:text-white whitespace-nowrap border-2 rounded-2xl border-gray-600 text-gray-700 mx-1.5 px-2 py-1" key={category._id}>
          <Link href={`/blogs/${category.englishTitle}`}>{category.title}</Link>
        </button>
      })}
      </div>
      </>
    
    );
}
 
export default CategoryMenu;