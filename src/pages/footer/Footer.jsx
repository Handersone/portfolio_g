import { Typography } from "@material-tailwind/react";Footer
import Footer from "../../components/Card/Footer";
import {  FaFacebook, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
 
export default function Example() {
  const size = 40;
  const footers = [
    {
      id: 0,
      icon: <FaLinkedin size={size} />,
    },
    {
      id: 1,
      icon: <FaWhatsapp size={size} />,
    },
    {
      id: 3,
      icon: <FaFacebook size={size} />,
    },
    {
      id: 4,
      icon: <FaTelegram size={size} />,
    },
    {
      id: 1,
      icon: <FaGithub size={size} />,
    },
  ];
  return (
    <footer className="w-full p-8">
    <hr className="my-8 border-blue-gray-50" />
      <div className=" container flex flex-row flex-wrap gap-y-6 gap-x-12 mb-12 pb-12 md:justify-between">
        <div class="grid grid-cols-4">
          <div className="text-gray-400 ml-12 pl-12 pt-9">
            <span className="text-justify">
              Je suis une jeune passionnée de l'informatique; plus précisément dans le domaine du développement web et mobile. Je trouve du plaisir à créer des contenus de qualités qui seront visibles et exploitables dans mon entourage.
            </span>
          </div>
          <div className="text-gray-400 ml-12">
            <ul class="list-none">
              <b className="text-white">Menu</b> 
              <li className="pt-3">Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-gray-400 ml-8">
            <ul class="list-none text-justify">
              <b className="text-white">Contacter moi</b> 
              <li className="pt-3">WhatsApp: +237 650 060 900</li>
              <li>Appel: (+237) 650 060 900</li>
              <li>E-mail: handersonemakamt@gmail.com</li>
              <li className="pt-10 pb-2 text-white text-[13px]">Réseaux sociaux</li>
              <li className="grid grid-cols-5 md:grid-cols-12 lg:grid-cols-12">
              </li>
            </ul>
          </div>
          <div className="text-gray-400 ml-12 pt-9 grid grid-cols-5">
                {footers.map((item) => {
                  return (
                    <Footer
                        icon={item.icon}
                        key={item.id}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    <hr className="my-8 border-gray-700" />
      <div class="grid grid-cols-2">
        <Typography color="blue-gray" className="text-center  text-[#404040] font-normal">
          handersone makamto 2023 - Conception et developpement d'application web et mobie
        </Typography>
        <Typography color="blue-gray" className="text-center  text-[#404040] font-normal">
          <u> Terms & Conditions </u>| <u>Privacy Policy</u>
        </Typography>
      </div>
    </footer>
  );
}


// import React from "react";

// function Footer() {
//   return (
//     <div className="h-[50vh] bg-gray-900 p-4 w-full container_land">
//       <span className="text-white">Footer Here</span>
//     </div>
//   );
// }

// export default Footer;
