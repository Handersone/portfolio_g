
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
// import log from "../../assets/log.jpg";
// import {useNavigate} from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import Formulaire from "../formulaire/Formulaire";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  // const navbars = [
  //   {
  //     id: 0,
  //     url: log,
  //   },
  // ]
    const navigate = useNavigate();

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-gray-400"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Accueil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-gray-400"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-gray-400"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Portfolio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-gray-400"
      >
        <a href="#" className="flex items-center hover:text-white transition-colors">
          Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div class="">
    <Navbar className="fixed  bg-[#1f1f1f] border-none p-2">
      <div className="ml-11 flex items-center justify-between text-blue-gray-900 mr-12 ">
        
          {/* <Avatar
            alt="owlcrea"
            className=" ml-11"
            src="https://owlcrea.com/media/2022/10/owlcrea-logo-2-e1665071521850.png"
          /> */}
          {/* {navbars.map((item) => {
            return (
              <Navbar
                  url={item.url}
                  key={item.id}
              />
            );
          })} */}
        
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="bg-indigo-600 hidden lg:inline-block mr-12">
          {/* <span></span> */}
          
            <Link to="/formulaire">
            Contacter moi
            </Link>
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
          <Button variant="gradient" size="sm" fullWidth className="bg-indigo-600 mb-2 mr-12">
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