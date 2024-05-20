"use client"
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";


const CategoryMenu = () => {

    const [showCategoryMenu , setShowCategoryMenu] = useState(true);

    return (
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
    );
}
 
export default CategoryMenu;