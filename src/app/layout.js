import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <AuthProvider>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
