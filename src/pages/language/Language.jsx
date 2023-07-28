import React from "react";
import LanguageCard from "../../components/Card/LanguageCard";
import Adobe from "../../assets/Adobe.webp";
import html from "../../assets/html.webp";
import php from "../../assets/php.webp";
import codeIgniter from "../../assets/codeIgniter.png";
import vueJs from "../../assets/vueJs.jpeg";
import reactJs from "../../assets/reactJs.png";
import laravel from "../../assets/laravel.png";
import JavaScript from "../../assets/JavaScript.webp";
import wordPress from "../../assets/wordPress.webp";

function Language() {
  const size = 40;
  const abouts = [
    {
      id: 0,
      url: Adobe,
      title: "Adobe Suite",
      description: "25 %",
    },
    {
      id: 3,
      url: html,
      title: "HTML & CSS​",
      description: "90 %",
    },
    {
      id: 4,
      url: JavaScript,
      title: "Javascript",
      description: "65 %",
    },
    {
      id: 1,
      url: php,
      title: "PHP​",
      description: "70%",
    },
    {
      id: 3,
      url: wordPress,
      title: "WordPress & SEM​",
      description: "94%",
    },
    {
      id: 1,
      url: codeIgniter,
      title: "codeIgniter​",
      description: "70%",
    },
    {
      id: 1,
      url: laravel,
      title: "laravel​",
      description: "70%",
    },
    {
      id: 1,
      url: vueJs,
      title: "Vue Js",
      description: "70%",
    },
    {
      id: 1,
      url: reactJs,
      title: "React Js",
      description: "70%",
    },
  ];

  return (
    <div className="container_land py-20 flex flex-col gap-12">
      {/* <span className="text-white text-[60px] font-extrabold">abouts</span> */}

      <div className=" grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-3 gap-x-8">
        {abouts.map((item) => {
          return (
            <LanguageCard
              url={item.url}
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

export default Language;
