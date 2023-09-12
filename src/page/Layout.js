import React from "react";
import Nav from "../component/nav/Nav";
import Footer from "../component/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-indigo-50 dark:bg-zinc-900">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
