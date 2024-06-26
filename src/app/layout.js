"use client";
import "../styles/globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <Provider store={store}>
      <AuthProvider>
        <body>
          <Header />
          <main>{children}</main>
          <Toaster />
        </body>
      </AuthProvider>
      </Provider>
    </html>
  );
}
