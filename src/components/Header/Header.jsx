import Link from "next/link";


const Header = () => {
    return (
        <header className="mb-6 flex justify-between prose-ul:flex shadow-md p-3.5 px-20 prose-li:px-4">
        <ul>
          <li><Link href="/">خانه</Link></li>
          <li><Link href="/blogs">بلاگ ها</Link></li>
        </ul>
        <ul>
          <li><Link href="/signup">ثبت نام</Link></li>
          <li><Link href="/signin">ورود</Link></li>
          <li><Link href="/profile">پروفایل</Link></li>
        </ul>
      </header>
    );
}
 
export default Header;