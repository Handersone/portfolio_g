import React from "react";
import ProjetCard from "../../components/Card/ProjetCard";
import Adobe from '../../assets/Adobe.webp';
import ladyProjet from "../../assets/ladyProjet.jpg";


function Projet() {
  const size = 40;
  const projets = [
    {
      id: 0,
      url: ladyProjet,
    },
  ];

  return (
    <div className="container_land pt-20 flex flex-col gap-12">
      <div className="grid grid-cols-2">
        
        <span className="text-white text-[60px] font-extrabold">Projets</span>
        
      </div>
      <div className=" grid grid-cols-2 bg-[#1f1f1d] pl-12">
        <div className="text-white mt-12 pt-12">
            <div className="text-[40px] font-extrabold pt-12 mt-12">Parlons de votre projet</div>
            Avez-vous un projet ? Un business ? Vous souhaitez encore plus de visibilité, plus de clients, plus de rentabilité ? Plus de visibilité et de clients?
        </div>
        <div>
        {projets.map((item) => {
          return (
            <ProjetCard
              url={item.url}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default Projet;
