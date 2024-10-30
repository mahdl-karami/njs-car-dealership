import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
};

export default Layout;
