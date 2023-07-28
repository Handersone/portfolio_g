import React from "react";

function ProjetCard({ url, title, description }) {
  return (
    <div className="text-white animation duration-300  rounded-lg flex flex-col">
      <img src={url} alt="" className="h-auto w-21" />
      <div className="flex flex-col">
        <span className="font-bold text-[18px]">{title}</span>
        <span className="text-">{description}</span>
      </div>
    </div>
  );
}

export default ProjetCard;
