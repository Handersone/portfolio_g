import React from "react";
import { HeroSection, Navbar, Footer, Service, Portfolio, Language, About, Client, Accueil, Projet, Formulaire } from "./index";
import Landinglayout from "../layouts/Landinglayout";

function Landingpage() {
  return (
    <Landinglayout>
      <>
        {/* <HeroSection /> */}
        <Accueil />
        <About />
        <Language />
        <Service />
        {/* <Portfolio /> */}
        <Client />
        <Projet />
        <Formulaire />
      </>
    </Landinglayout>
  );
}

export default Landingpage;
