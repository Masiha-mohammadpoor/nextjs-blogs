"use client";
import "../styles/globals.css"
import Container from "./Container";
import { Provider } from "react-redux";
import { store } from "@/redux/store";


export default function RootLayout({ children }) {

  return (
    <html lang="en" dir="rtl">
      <Provider store={store}>
      <Container>{children}</Container>
      </Provider>
    </html>
  );
}
