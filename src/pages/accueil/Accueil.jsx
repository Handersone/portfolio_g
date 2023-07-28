import React from "react";
import {  FaFacebook, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import AccueilCard from "../../components/Card/AccueilCard";
// import { lady } from "../../assets/lady.jpg";

function Accueil() {
  const size = 20;
  const accueils = [
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
    <div className="container_land pt-20 flex flex-col gap-12 bg-gray-500">
        
        <div className="grid grid-cols-1">
                <p className="text-justify grid grid-cols-2 ml-8 pl-8 text-white text-[130px] font-extrabold">Wonder Luck</p>
                <p className=" grid grid-cols-2 ml-12 pl-12 text-white text-[px] font-extrabold">FREELANCER UI/UX DESIGNER & DÉVELOPPEUR WEB</p>
            {/* <img src="	https://owlcrea.com/media/2022/10/ret.png.webp" alt="" className="mr-12 h-50 w-50" /> */}
        </div>
      <div className="grid grid-cols-5 md:grid-cols-12 lg:grid-cols-12 ml-12 pl-12">
            {accueils.map((item) => {
                return (
                    <AccueilCard
                        icon={item.icon}
                        key={item.id}
                    />
                );
            })}
        </div>
    </div>
  );
}

export default Accueil;
