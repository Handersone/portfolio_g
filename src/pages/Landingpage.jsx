import React from "react";
import { HeroSection, Navbar, Footer, Service } from "./index";
import Landinglayout from "../layouts/Landinglayout";

function Landingpage() {
  return (
    <Landinglayout>
      <>
        {/* <HeroSection /> */}
        <Service />
      </>
    </Landinglayout>
  );
}

export default Landingpage;
