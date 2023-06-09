import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="text-white animation duration-300 bg-[#1f1f1f] px-12 hover:bg-[#312d9b] pt-24 pb-32 rounded-lg flex flex-col gap-12">
      <div>{icon}</div>
      <div className="flex flex-col gap-3">
        <span className="font-bold text-[18px]">{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default ServiceCard;
