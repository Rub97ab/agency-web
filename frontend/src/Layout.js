import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="px-4 md:px-12 py-8">{children}</main>
      <Footer />
    </div>
  );
}