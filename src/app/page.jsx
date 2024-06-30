"use client"
import Link from "next/link";


const Home = () => {

  return (
      <main>
        <div className="w-screen flex justify-center mt-52">
          <Link href="/blogs">
            <button className="text-white bg-blue-500 rounded-md px-4 py-1.5">go to blogs page</button>
          </Link>
        </div>
      </main>
  );
};

export default Home;
