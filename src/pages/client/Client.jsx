import React from "react";
import ClientCard from "../../components/Card/ClientCard";
// import Adobe from '../../assets/Adobe.webp';
import pouce from "../../assets/pouce.webp";
import eigb from "../../assets/eigb.webp";
import php from "../../assets/php.webp";
import Driwn from "../../assets/Driwn.webp";
import Eitlab from "../../assets/Eitlab.webp";
import Wakan from "../../assets/Wakan.webp";
import D from "../../assets/D.webp";
import uss from "../../assets/uss.webp";
import Capoch from "../../assets/Capoch.webp";
// https://owlcrea.com/wp-content/uploads/2022/10/background-owl.png

function Client() {
  const clients = [
    
    {
        id: 0,
        url: pouce,
      },
      {
        id: 1,
        url: Driwn,
      },
      {
        id: 3,
        url: eigb,
      },
      {
        id: 4,
        url: Eitlab,
      },
      {
        id: 3,
        url: Wakan,
      },
      {
        id: 1,
        url: D,
      },
      {
        id: 3,
        url: uss,
      },
      {
        id: 1,
        url: Capoch,
      },
  ];

  return (
    <div className="flex flex-row bg-[#1f1f1f] p-12 flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-center">
        <div className="text-white">
            <div className="text-[50px] font-extrabold">Mes Clients</div>
            En Collaboration ou en Prestations de services
        </div>
        
        <div className="grid grid-cols-4">
            {clients.map((item) => {
                return (
                    <ClientCard
                         url={item.url}
                        key={item.id}
                    />
                );
            })}
        </div>
    </div>
  );
}

export default Client;
