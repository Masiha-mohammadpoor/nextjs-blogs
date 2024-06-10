"use client"
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { useState , useEffect} from "react";

const Header = () => {

  const [userData , setUserData] = useState(null);
  const data = useAuth();

  useEffect(() => {
    const printUser = async () => {
      const user = await data;
      setUserData(user);
    };  
    printUser();  
  })

  if(userData) console.log(userData.user)

  return (
    <header className="mb-6 flex justify-between prose-ul:flex shadow-md p-3.5 px-20 prose-li:px-4">
      <ul>
        <li>
          <Link href="/">خانه</Link>
        </li>
        <li>
          <Link href="/blogs">بلاگ ها</Link>
        </li>
      </ul>
      <ul>
        {userData?.user !== null ? (
          <li>
            <Link href="/profile">پروفایل</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/signup">ثبت نام</Link>
            </li>
            <li>
              <Link href="/signin">ورود</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
