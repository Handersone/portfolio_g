import React from "react";
import { Footer, Navbar } from "../pages";

function Landinglayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Landinglayout;
