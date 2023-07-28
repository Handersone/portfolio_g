import React from "react";

function AccueilCard({ icon, }) {
  return (
    <div className="text-white animation duration-300 mb-12">
      <div className="grid place-items-center w-12 h-12 bg-black rounded-full mb-12">{icon}</div>
    </div>
  );
}

export default AccueilCard;
// bg-[url('https://owlcrea.com/wp-content/uploads/2022/10/background-owl.png')]