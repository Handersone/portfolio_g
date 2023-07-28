import React from "react";
import {  FaFacebook, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import FormulaireCard from "../../components/Card/FormulaireCard";
// import { lady } from "../../assets/lady.jpg";

function Formulaire() {
  return (
    <div className="container_land  flex flex-col gap-12">
        
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto lg:max-w-xl">
        <form className="">
          <div className="mb-4">
            <label>
              <input
                type="text"
                name="name"
                className="
                  block w-full px-4 py-2 mt-2 text-indigo-700 
                  bg-transparent border-2 border-[#404040] placeholder-[#404040]
                  rounded-md focus:border-indigo-400 
                  focus:ring-indigo-300 focus:outline-none 
                  focus:ring focus:ring-opacity-40
                  focus:placeholder-gray-500
                "
                placeholder="Nom   Makamto Handersone"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <input
                name="email"
                type="email"
                className="
                  block w-full px-4 py-2 mt-2 text-indigo-700 
                  bg-transparent border-2 border-[#404040]  placeholder-[#404040]
                  rounded-md focus:border-indigo-400 
                  focus:ring-indigo-300 focus:outline-none 
                  focus:ring focus:ring-opacity-40
                "
                placeholder="Email  handersonemakamto@gmail.com"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <textarea
                name="message"
                className="
                  block w-full px-4 py-2 mt-2 text-indigo-700 
                  bg-transparent border-2 border-[#404040]  placeholder-[#404040]
                  rounded-md focus:border-indigo-400 
                  focus:ring-indigo-300 focus:outline-none 
                  focus:ring focus:ring-opacity-40
                "
                placeholder="Ecrire un message"
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
           
            px-8 py-3
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Envoyer
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Formulaire;
