import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
const Home = () => {
  
  return (
    <main className="grid gap-3 md:grid-cols-12 md:grid-rows-2">
      {/* category */}
      <section className="md:col-span-3">
        <div>
          <div className="p-3 rounded-t-xl flex justify-between items-center cursor-pointer bg-purple-300">
            <p>دسته بندی مقالات</p>
            <FaChevronDown/>
          </div>
          <div className="rounded-b-xl overflow-hidden ">
            <Link href="#"><div className="transition-all duration-300 p-3 bg-slate-100 hover:bg-gray-300">ریکت</div></Link>
            <Link href="#"><div className="transition-all duration-300 p-3 bg-slate-100 hover:bg-gray-300">نکست</div></Link>
            <Link href="#"><div className="transition-all duration-300 p-3 bg-slate-100 hover:bg-gray-300">تیلویند</div></Link>
          </div>
        </div>
      </section>
      <section className="col-span-9 flex flex-col gap-3">
        <section className="bg-blue-300">sort</section>
        <section className="bg-blue-300">blogs</section>
      </section>
    </main>
  );
}
 
export default Home;