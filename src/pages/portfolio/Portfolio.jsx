import React from "react";
import { FaEye, FaLink, FaRegUserCircle, FaSearch, FaSitemap, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserClock, FaUserGraduate } from "react-icons/fa";
import PortfolioCard from "../../components/Card/PortfolioCard";
// import Adobe from '../../assets/Adobe.webp';


function Portfolio() {
  const size = 40;
  const portfolios = [
    {
      id: 0,
      image: <FaEye size={size} />,
    // <img decoding="async" width="722" height="672" src="https://owlcrea.com/media/2022/10/Frame-13.png" class="elementor-animation-grow attachment-full size-full wp-image-1628" alt="Suite-adobe" loading="lazy" srcset="https://owlcrea.com/media/2022/10/Frame-13.png.webp 722w, https://owlcrea.com/media/2022/10/Frame-13-300x279.png.webp 300w" sizes="(max-width: 722px) 100vw, 722px">
      title: "Adobe Suite",
      description:
        "85 %",
    },
    {
      id: 1,
      image: <FaLink size={size} />,
      title: "Figma​",
      description:
        "95 %",
    },
    {
      id: 3,
      image: <FaSitemap size={size} />,
      title: "HTML & CSS​",
      description:
        "94 %",
    },
    {
      id: 4,
      image: <FaSearch size={size} />,
      title: "Javascript",
      description:
        "65 %",
    },
    {
      id: 1,
      image: <FaRegUserCircle size={size} />,
      title: "PHP​",
      description:
        "70%",
    },
    {
      id: 3,
      image: <FaUserAltSlash size={size} />,
      title: "WordPress & SEM​",
      description:
        "94%",
    },
  ];

  return (
    <div className="container_land py-20 flex flex-col gap-12">
      <span className="text-white text-[60px] font-extrabold">Portfolios</span>

      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 gap-x-8">
        {portfolios.map((item) => {
          return (
            <PortfolioCard
              image={item.image}
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
