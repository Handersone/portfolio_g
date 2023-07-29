import React from "react";

function PortfolioCard({ url, title, description }) {
  return (
    <div className="text-white animation duration-300 px-8 hover:scale-105 pt-4 pb-2 rounded-lg flex flex-col gap-12">
      <img src={url} alt="" className="h-auto w-96" />
      <div className="flex flex-col gap-3">
        <span className="font-bold text-[18px]">{title}</span>
        <span className="text-">{description}</span>
      </div>
    </div>
  );
}

export default PortfolioCard;
