import React from "react";
import { HeroSection, Navbar, Footer, Service, Portfolio, About } from "./index";
import Landinglayout from "../layouts/Landinglayout";

function Landingpage() {
  return (
    <Landinglayout>
      <>
        {/* <HeroSection /> */}
        <About />
        <Service />
        <Portfolio />
      </>
    </Landinglayout>
  );
}

export default Landingpage;
