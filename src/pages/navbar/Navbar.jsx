// import React from "react";
// import { Typography, Button, IconButton, MobileNav } from "@material-tailwind/react";

// function Navbar() {

//   const [openNav, setOpenNav] = useState(false);
 
//   useEffect(() => {
//     window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
//   }, []);
 
//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//     <Typography as="li"
//     variant="small"
//     color="blue-gray"
//     className="p-1 font-normal"
//   >
//     <a href="#" className="flex items-center">
//       Pages
//     </a>
//     </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );
//   return (
//     <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
//       <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           className="mr-4 cursor-pointer py-1.5 font-medium"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">{navList}</div>
//         <Button variant="gradient" size="sm" className="hidden lg:inline-block">
//           <span>Buy Now</span>
//         </Button>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               className="h-6 w-6"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </IconButton>
//       </div>
//       <MobileNav open={openNav}>
//         <div className="container mx-auto">
//           {navList}
//           <Button variant="gradient" size="sm" fullWidth className="mb-2">
//             <span>Buy Now</span>
//           </Button>
//         </div>
//       </MobileNav>
//     </div>
//   );
// }

// export default Navbar;


import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
// import { logo } from "../../assets/logo.webp";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-slate-200"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Accueil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-slate-200"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-slate-200"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Portfolio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-slate-200"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Contact
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      ><img
      src={logo}
      alt="GitHub logo"
      className="h-8 pr-1 mx-auto"
      >
      </img>
      </Typography> */}
    </ul>
  );
 
  return (
    <div class="bg-current">
    <Navbar className=" container bg-slate-800 ">
      <div className=" ml-11 flex items-center justify-between text-blue-gray-900">
        
          <Avatar
            alt="owlcrea"
            className=" ml-11 h-30 w-14"
            src="https://owlcrea.com/media/2022/10/owlcrea-logo-2-e1665071521850.png"
          />
        
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="bg-indigo-600 hidden lg:inline-block">
          <span>Contacter moi</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="bg-indigo-600 mb-2">
          <span>Contacter moi</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
    </div>
  );
}




// import React from "react";

// function Navbar() {
//   return (
//     <div className="h-[12vh] bg-gray-900 drop-shadow-md w-full container_land pt-4">
//       <span className="text-white">Navbar Here</span>
//     </div>
//   );
// }

// export default Navbar;