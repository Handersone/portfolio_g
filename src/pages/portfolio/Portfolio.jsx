import React from "react";
import PortfolioCard from "../../components/Card/PortfolioCard";
// import Adobe from '../../assets/Adobe.webp';
import aside from "../../assets/aside.webp";
import { Button } from "@material-tailwind/react";
import Refonte from "../../assets/Refonte.webp";
import coupePouce from "../../assets/coupePouce.webp";
import Augmente from "../../assets/Augmente.webp";
import goumete from "../../assets/goumete.webp";
import interf from "../../assets/interf.webp";


function Portfolio() {
  // const size = 15;
  // const color = gray;
  const portfolios = [
    {
      id: 0,
      url: goumete,
    // <img decoding="async" width="722" height="672" src="https://owlcrea.com/media/2022/10/Frame-13.png" class="elementor-animation-grow attachment-full size-full wp-url-1628" alt="Suite-adobe" loading="lazy" srcset="https://owlcrea.com/media/2022/10/Frame-13.png.webp 722w, https://owlcrea.com/media/2022/10/Frame-13-300x279.png.webp 300w" sizes="(max-width: 722px) 100vw, 722px">
      title: "Gourmet Fin - DIgital Valley",
      description:
        "MAQUETTAGE WEB – SITE WEB",
    },
    {
      id: 1,
      url: coupePouce,
      title: "Coup de pouce - Evry courcouronnes​",
      description:
        "SITE WEB – REFERENCEMENT SEO",
    },
    {
      id: 3,
      url: Refonte,
      title: "WAKANBIO​",
      description:
        "AUDIT UI/UX – REFERENCEMENT SEO",
    },
    {
      id: 4,
      url: Augmente,
      title: "DRWINTECH INC BENIN",
      description:
        "MAQUETTAGE WEB – SITE WEB",
    },
    {
      id: 1,
      url: interf,
      title: "Visuel pour WAKANBIO​",
      description:
        "VISUEL – REFERENCEMENT SMO",
    },
    {
      id: 3,
      url: Refonte,
      title: "Projet refonte web SBEE​",
      description:
        "AUDIT UI/UX – MAQUETTAGE WEB",
    },
  ];

  return (
    <div className="container_land py-20 flex flex-col">
      <div className="px-8 flex items-center justify-between">
        
        <span className="text-white text-[60px] font-extrabold">Portfolios</span>
        <div className="flex items-center gap-4 mt-8 ml-12">
          <Button variant="gradient" size="sm" className="bg-[#1f1f1d] hidden lg:inline-block ">
            Voir mon CV
          </Button>
        </div>      
        
      </div>
      <div className=" grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {portfolios.map((item) => {
          return (
            <PortfolioCard
              url={item.url}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          );
        })}
        ]
      </div>
    </div>
  );
}

export default Portfolio;
