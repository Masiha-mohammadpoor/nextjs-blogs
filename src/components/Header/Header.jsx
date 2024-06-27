"use client";
import { useAuth, useAuthActions } from "@/context/AuthProvider";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
  const [showProfile , setShowProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  const data = useAuth();
  const dispatch = useAuthActions();

  useEffect(() => {
    const printUser = async () => {
      const user = await data;
      setUserData(user);
    };
    printUser();
  });

  const renderComponent = () => {
    return (
      <>
        {!userData?.user && userData?.loading === false ? (
          <>
            <li>
              <Link href="/signup">ثبت نام</Link>
            </li>
            <li>
              <Link href="/signin">ورود</Link>
            </li>
          </>
        ) : userData?.user ? (
          <div
            className="flex items-center transition-all"
          >
            <li className="text-sm md:text-base font-bold">
              <button
                onClick={() => dispatch({ type: "SIGNOUT" })}
                className="bg-red-600 text-white p-1 rounded-md flex justify-between items-center"
              >
                خروج <FaPowerOff className="mr-2" />
              </button>
            </li>
            <li className="relative text-sm md:text-base font-bold">
              <button onClick={() => setShowProfile(prev => !prev)}>پروفایل</button>
              <span className={`${showProfile ? "inline-block" : "hidden"} z-50 p-3 rounded-md bg-slate-200 shadow-2xl left-10 top-full absolute`}>
                <p>{userData?.user?.name}</p>
                <p>{userData?.user?.phoneNumber}</p>
              </span>
            </li>
          </div>
        ) : <div></div>}
      </>
    );
  };

  return (
    <header className="w-screen mb-6 flex justify-between prose-ul:flex shadow-md p-3.5 py-4 md:px-20 px-0 prose-li:px-4">
      <ul>
        <li className="text-sm md:text-base font-bold">
          <Link href="/">خانه</Link>
        </li>
        <li className="text-sm md:text-base font-bold">
          <Link href="/blogs">بلاگ ها</Link>
        </li>
      </ul>
      <ul>
      {renderComponent()}
      </ul>
    </header>
  );
};

export default Header;
