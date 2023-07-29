import React from "react";
import PortfolioCard from "../../components/Card/PortfolioCard";
// import Adobe from '../../assets/Adobe.webp';
import { Button } from "@material-tailwind/react";
import CaptureGL from "../../assets/CaptureGL.jpg";
import Generateur from "../../assets/Generateur.jpg";


function Portfolio() {
  // const size = 15;
  // const color = gray;
  const portfolios = [
    {
      id: 0,
      url: CaptureGL,
    // <img decoding="async" width="722" height="672" src="https://owlcrea.com/media/2022/10/Frame-13.png" class="elementor-animation-grow attachment-full size-full wp-url-1628" alt="Suite-adobe" loading="lazy" srcset="https://owlcrea.com/media/2022/10/Frame-13.png.webp 722w, https://owlcrea.com/media/2022/10/Frame-13-300x279.png.webp 300w" sizes="(max-width: 722px) 100vw, 722px">
      title: "E-Orientation",
      description:
        "SITE WEB D'ORIENTATION UNIVERSITAIRES",
    },
    {
      id: 1,
      url: Generateur,
      title: "Generateur​",
      description:
        "GENERATEUR DE RESSOURCES",
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
      <div className=" grid content-center grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
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
