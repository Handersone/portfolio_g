import React from "react";

function LanguageCard({ url, title, description }) {
  return ( 
    // bg-[#1f1f1f]
    <div className="text-white animation duration-300 hover:bg-[#312d58] pt-4 pb-2 rounded-lg flex flex-col gap-4">
      <img src={url} alt="" className="h-60 w-60" />
      <div className="flex flex-col">
        <span className="font-bold text-[20px]">{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default LanguageCard;
