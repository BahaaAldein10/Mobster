"use client";

import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import { links } from "@/constants";
import { navVariants } from "@/utils/motion";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(true);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex justify-between items-center m-auto p-4 sm:w-[80%] w-[90%]"
    >
      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-10" />
        <h1 className="text-2 text-color">Mobster</h1>
      </Link>

      {/* Links */}
      <ul className="lg:flex hidden gap-2">
        {links.map((link, index) => (
          <li key={`link-${index}`} className="relative p-2">
            <Link
              href={link.url}
              className="text-1 hover:text-white duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:rounded-2xl hover:before:w-full before:duration-300"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu */}
      <div onClick={handleMenu} className="lg:hidden block cursor-pointer">
        <img src="/menu.png" alt="menu" className="w-10" />
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Menu handleClick={handleClick} />}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
