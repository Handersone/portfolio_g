import React from "react";

function AboutCard({ url, title, description }) {
  return (
    <div className="text-white animation duration-300 bg-[#1f1f1f] px-12 hover:bg-[#312d58] pt-4 pb-2 rounded-lg flex flex-col gap-12">
      <div>{url}</div>
      <img src={url} alt="" className="w-32 h-32" />
      <div className="flex flex-col gap-3">
        <span className="font-bold text-[18px]">{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default AboutCard;
