import React from "react";
import {
  FaEye,
  FaLink,
  FaRegUserCircle,
  FaSearch,
  FaSitemap,
  FaUserAltSlash,
} from "react-icons/fa";
import AboutCard from "../../components/Card/AboutCard";
import Adobe from "../../assets/Adobe.webp";

function About() {
  const size = 40;
  const abouts = [
    {
      id: 0,
      url: Adobe,
      title: "Adobe Suite",
      description: "85 %",
    },
    {
      id: 1,
      url: "Adobe",
      title: "Figma​",
      description: "95 %",
    },
    {
      id: 3,
      url: Adobe,
      title: "HTML & CSS​",
      description: "94 %",
    },
    {
      id: 4,
      url: Adobe,
      title: "Javascript",
      description: "65 %",
    },
    {
      id: 1,
      url: <FaRegUserCircle size={size} />,
      title: "PHP​",
      description: "70%",
    },
    {
      id: 3,
      url: <FaUserAltSlash size={size} />,
      title: "WordPress & SEM​",
      description: "94%",
    },
  ];

  return (
    <div className="container_land py-20 flex flex-col gap-12">
      <span className="text-white text-[60px] font-extrabold">abouts</span>

      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 gap-x-8">
        {abouts.map((item) => {
          return (
            <AboutCard
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

export default About;
