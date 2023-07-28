import React from "react";

function Navbar({ image, title, description }) {
  return (
    <div className="text-white animation duration-300 px-12 hover:bg-[#312d58] rounded-lg flex flex-col gap-12">
      <div className="px-2">{image}</div>
      {/* <div className="flex flex-col gap-3">
        <span className="font-bold text-[12px]">{title}</span>
        <span>{description}</span>
      </div> */}
    </div>
  );
}

export default Navbar;
