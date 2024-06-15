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
        <section className="hidden md:block md:col-span-9">
        <div className="bg-slate-100 flex rounded-xl overflow-hidden pr-3">
          <div className="flex ml-8 items-center">
            <FaSortAmountDownAlt className="ml-1"/>
            <p>مرتب سازی:</p>
          </div>
          <ul className="flex w-72 justify-between items-center">
            {sortOptions.map(({label , id}) => {
              return <li onClick={() => sortHandler(id)} key={id} className={`py-3 cursor-pointer text-gray-600 ${sort === id ? "text-purple-500" : ""}`}>{label}</li>
            })}
          </ul>
        </div>
      </section>

     );
}
 
export default SortBar;