"use client";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useParams } from 'next/navigation' ;

const CategoryMenu = ({ categories  }) => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(true);
  const {categorySlug} = useParams();

  return (
    <>
      {/* category menu */}
      <section className="md:col-span-3 md:row-span-2">
        <div className="hidden md:block ">
          <div
            onClick={() => setShowCategoryMenu((prev) => !prev)}
            className="p-3 rounded-t-xl flex justify-between items-center cursor-pointer bg-purple-800"
          >
            <p className="text-white">دسته بندی مقالات</p>
            <FaChevronDown
              className={`text-white transition-all duration-300 ${
                showCategoryMenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`rounded-b-xl overflow-hidden ${
              showCategoryMenu ? "block" : "hidden"
            }`}
          >
            <Link href="/blogs">
              <div className={`${!categorySlug ? "text-white bg-purple-400" : "bg-slate-100 text-black"} transition-all duration-300 p-3  hover:bg-gray-300`}>
                All Posts
              </div>
            </Link>
            {categories.data.map((category) => {
              return (
                <Link
                  key={category._id}
                  href={`/blogs/${category.englishTitle}`}
                >
                  <div className={`${categorySlug === category.englishTitle ? "bg-purple-400 text-white" : "bg-slate-100 text-black"} transition-all duration-300 p-3 hover:bg-gray-300`}>
                    {category.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* category mobile */}
      <div className="col-span-12 pb-5 flex justify-center md:hidden overflow-auto">
        <button className={`${!categorySlug ? "bg-purple-400 text-white border-purple-600" : "border-gray-600 text-gray-700"} transition-all duration-300 hover:bg-gray-500 hover:text-white whitespace-nowrap border-2 rounded-2xl mx-1.5 px-2 py-1`}>
          <Link href={`/blogs`}>All Posts</Link>
        </button>
        {categories.data.map((category) => {
          return (
            <button
              className={`${categorySlug === category.englishTitle ? "bg-purple-400 text-white border-purple-600" : "border-gray-600 text-gray-700"} transition-all duration-300 hover:bg-gray-500 hover:text-white whitespace-nowrap border-2 rounded-2xl mx-1.5 px-2 py-1`}
              key={category._id}
            >
              <Link href={`/blogs/${category.englishTitle}`}>
                {category.title}
              </Link>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default CategoryMenu;
