import { Typography } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <div class="grid grid-cols-5">
          <img src="https://owlcrea.com/media/2022/10/owlcrea-logo-2-e1665071521850.png" alt="logo-ct" className=" ml-11 h-30 w-14 " />
          <div className="text-gray-400">Owlcrea est un ensemble de prestations de services en design numérique, en développement et construction d’interfaces Web. Elle est auto-entreprenante créer et administrer par Luc Ahonoukoun M.</div>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal  text-slate-200 transition-colors hover:text-white focus:text-blue-500  grid grid-cols-3"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-slate-200 transition-colors hover:text-blue-500 focus:text-blue-500 grid grid-cols-4"
            >
              License
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center  text-slate-200 font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}


// import React from "react";

// function Footer() {
//   return (
//     <div className="h-[50vh] bg-gray-900 p-4 w-full container_land">
//       <span className="text-white">Footer Here</span>
//     </div>
//   );
// }

// export default Footer;
