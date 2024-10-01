import Logo from "@/public/assets/tahwil logo.svg";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import ResponsiveSidebar from "./ReponsiveBar";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openSidebar = () => {
    setOpen(true);
  };

  const closeSidebar = () => {
    setOpen(false);
  };
  if (typeof window !== "undefined") {
    document.body.style.overflow = open ? "hidden" : "auto";
  }
  const navData = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Service" },
    { id: 4, name: "Blog", route: "#" },
    { id: 5, name: "Contact" },
  ];
  return (
    <>
      <header className="absolute w-full md:px-14 px-3 py-2 ">
        <nav className="w-full text-white flex justify-between items-center">
          <div>
            <img className=" w-40" src={Logo} alt="logo" />
          </div>
          <ul className="md:flex gap-8 hidden ">
            {navData.map((nav) => (
              <li key={nav.id} className="">
                {nav.name}
              </li>
            ))}
          </ul>
          <motion.div
            className=" md:hidden block  bg-white px-2.5 py-2.5 rounded-full  mt-2"
            animate={open ? "open" : "closed"}
          >
            <ToggleButton setOpen={open ? closeSidebar : openSidebar} />
          </motion.div>
        </nav>
      </header>
      {open ? (
        <motion.div className="w-full h-full  bg-[rgba(0,0,0,0.4)] fixed z-30 ">
          <ResponsiveSidebar setOpen={setOpen} />
        </motion.div>
      ) : null}
    </>
  );
};

export default Navbar;
