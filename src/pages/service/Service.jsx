import React from "react";
import { FaEye, FaLink, FaRegUserCircle, FaSearch, FaSitemap, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserClock, FaUserGraduate } from "react-icons/fa";
import ServiceCard from "../../components/Card/ServiceCard";

function Service() {
  const size = 40;
  const services = [
    {
      id: 0,
      icon: <FaEye size={size} />,
      title: "Création d'identité visuelle",
      description:
        "À savoir le logo, la typographie, les couleurs ou encore les pictogrammes et les icônes. Elle doit permettre aux consommateurs de reconnaître la marque au premier coup d'œil.",
    },
    {
      id: 1,
      icon: <FaLink size={size} />,
      title: "Conception de Site Web​",
      description:
        "Un site internet permet de vous positionner comme tout en haut dans votre secteur d'activité et d'attirer 55 %, visiteurs en plus, maintenir et développer votre chiffre d'affaires, vendre vos produits et services en ligne, augmenter votre notoriété et d'occuper ...",
    },
    {
      id: 3,
      icon: <FaSitemap size={size} />,
      title: "Maquettage web et mobile​",
      description:
        "Concrétiser des idées à travers des interfaces UI, votre site web, application web, ou mobile, grâce votre identité visuelle.",
    },
    // {
    //   id: 4,
    //   icon: <FaSearch size={size} />,
    //   title: "Référencement SEO et SMO",
    //   description:
    //     "Accroître sa visibilité naturellement dans les moteurs de recherches Google et par ailleurs grâce aux réseaux sociaux.",
    // },
    // {
    //   id: 1,
    //   icon: <FaRegUserCircle size={size} />,
    //   title: "Réalisation de support de communication​",
    //   description:
    //     "Rendez-vous visible et exploser vos ventes, grâce aux affiches, étiquettes, kakemono, brochure ...",
    // },
    {
      id: 3,
      icon: <FaUserAltSlash size={size} />,
      title: "Aide et formations en TIC​",
      description:
        "Finir les difficultés dans les langages de programmation (Html, CSS, PHP, MySQL, Javascript…). Encore plus astuces et de lumière sur les bonnes manières en User Experience et User Interface.",
    },
  ];

  return (
    <div className="container_land py-20 flex flex-col gap-12">
      <span className="text-white text-[60px] font-extrabold">Services</span>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 gap-x-8">
        {services.map((item) => {
          return (
            <ServiceCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Service;
