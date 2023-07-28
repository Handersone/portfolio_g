import React from "react";

function ClientCard({ url, title, description }) {
  return (
    <div className="text-white animation duration-300 px-5 mx-3 my-5  bg-[#1a1a1a] py-12 rounded-lg flex flex-col gap-12">
      <img src={url} alt="" className="h-20 w-30  hover:scale-105" />
      {/* <div>{image}</div>
      <div className="flex flex-col gap-3">
        <span className="font-bold text-[18px]">{title}</span>
        <span className="text-gray">{description}</span>
      </div> */}
    </div>
  );
}

export default ClientCard;
