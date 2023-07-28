import React from "react";

function AboutCard({ url, title }) {
  return ( 
    // bg-[#1f1f1f]
    <div className="text-white animation duration-300 p-4 pt-4 pb-2 rounded-lg flex flex-col gap-12">
      <img src={url} alt="" className=" ml-12 pl-12 w-96 h-100" />
      {/* <div className="flex flex-col gap-3">
        <span className="font-bold text-[20px]">{title}</span> */}
        {/* <span>{description}</span> */}
      {/* </div> */}
    </div>
  );
}

export default AboutCard;
