import { FaSortAmountDownAlt } from "react-icons/fa";


const SortBar = () => {
    return ( 
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

     );
}
 
export default SortBar;