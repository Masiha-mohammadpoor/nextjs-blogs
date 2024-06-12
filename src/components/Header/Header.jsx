"use client";
import { useAuth, useAuthActions } from "@/context/AuthProvider";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
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
            <li>
              <button
                onClick={() => dispatch({ type: "SIGNOUT" })}
                className="bg-red-600 text-white p-1 rounded-md flex justify-between items-center"
              >
                خروج <FaPowerOff className="mr-2" />
              </button>
            </li>
            <li>
              <Link href="/profile">پروفایل</Link>
            </li>
          </div>
        ) : <div></div>}
      </>
    );
  };

  return (
    <header className="mb-6 flex justify-between prose-ul:flex shadow-md p-3.5 py-4 px-20 prose-li:px-4">
      <ul>
        <li>
          <Link href="/">خانه</Link>
        </li>
        <li>
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
