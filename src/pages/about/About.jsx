import React from "react";
import AboutCard from "../../components/Card/AboutCard";
import ladyCopie from "../../assets/ladyCopie.jpg";
import { Button } from "@material-tailwind/react";

function About() {
  const abouts = [
    {
      id: 0,
      url: ladyCopie,
    //   title: "Adobe Suite",
    //   description: "Owlcrea est un ensemble de prestations de services en design numérique, en développement et construction d’interfaces Web. Elle est auto-entreprenante créer et administrer par Luc Ahonoukoun M.",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">

      {/* <div class="grid grid-cols-5">
          <img src="../../assets/aside.webp" />
          <div className="text-gray-400">Owlcrea est un ensemble de prestations de services en design numérique, en développement et construction d’interfaces Web. Elle est auto-entreprenante créer et administrer par Luc Ahonoukoun M.</div>
        </div> */}
      <div className="grid grid-cols-2">
        {abouts.map((item) => {
          return (
            <AboutCard
              url={item.url}
            //   title={item.title}
            //   description={item.description}
              key={item.id}
            />
          );
        })}
        <div className="text-gray-400 text-left mt-12 pt-12">
            <div className="text-white mb-5 text-[15px] font-extrabold">À propos de moi</div>
            <div>Développeur Front-end diplômé, passionné par l’univers TIC et son évolution croissante. J’ambitionne avec des compétences convenables en résolution de problèmes et une expérience reconnue dans la création et la conception de site web, de me mettre au service d’un particulier, d’une entreprise à la culture innovante, enthousiaste et audacieuse.</div>
           <div className="flex items-center gap-4 mt-8">
                <Button variant="gradient" size="sm" className="bg-blue-900 hidden lg:inline-block rounded-full">
                    <span>Voir mon CV</span>
                </Button>
                <Button variant="gradient" size="sm" className="text-blue-900 border border-blue-900 hidden lg:inline-block rounded-full">
                    <span>contacter nous</span>
                </Button>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
