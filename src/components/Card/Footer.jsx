import React from "react";

function Footer({ icon, }) {
  return (
    <div className="text-[#78716c] animation duration-300 mb-12">
      <div className="grid rounded-full mb-12">{icon}</div>
    </div>
  );
}

export default Footer;