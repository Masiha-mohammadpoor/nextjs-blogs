"use client"
import { useState } from "react";
import { useRouter , usePathname , useSearchParams} from "next/navigation";
import { FaSortAmountDownAlt } from "react-icons/fa";


const sortOptions = [
  {label : "جدید ترین" , id : "newest"},
  {label : "پربازدید ترین" , id : "most"},
  {label : "محبوب ترین" , id : "popular"},
];


const SortBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchparams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchparams.entries()));
  const [sort , setSort] = useState("newest");


  const sortHandler = (id) => {
    setSort(id);
    current.set("sort", id);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}` , {
      scroll:false
    });
    // router.push(pathName , {
    //   scroll : false
    // })
  }


    return ( 
        <section className=" md:block md:col-span-9 overflow-x-auto col-span-12">
        <div className="flex rounded-xl overflow-hidden pr-3">
          <div className="flex ml-4 md:ml-8 items-center">
            <FaSortAmountDownAlt className="ml-1"/>
            <p className="text-xs font-bold md:text-base">مرتب سازی:</p>
          </div>
          <ul className="flex pl-2 md:pl-0 w-80 justify-between items-center">
            {sortOptions.map(({label , id}) => {
              return <li onClick={() => sortHandler(id)} key={id} className={`flex flex-col text-xs md:text-base font-bold md:font-normal items-center justify-center relative py-3 cursor-pointer text-gray-600 ${sort === id ? "text-purple-500" : ""}`}>
                {label}
                <span className={`${sort === id ? "w-12" : "w-0"} rounded-full transition-all duration-200 absolute inline-block h-1 bg-purple-500 bottom-0`}></span>
              </li>
            })}
          </ul>
        </div>
      </section>

     );
}
 
export default SortBar;