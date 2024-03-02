"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay";
import Navlink from "./Navlink";

const NavLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className = "fixed mx-auto border-b-2 border-[#d8d8d8] top-0 left-0 right-0 z-10 bg-[#f7f7f7] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-xl md:text-3xl text-black font-semibold">
                    Anant's portfolio
                </Link>
            <div className="mobile-menu block md:hidden">
                {!navbarOpen ? (
                    <button
                    onClick={() => {setNavbarOpen(true)}}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-black hover:text-white hover:border-white"
                    >
                        <Bars3Icon className="h-5 w-5"/>
                    </button>
                ) : (
                    <button
                    onClick={() => {setNavbarOpen(false)}}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-black hover:text-white hover:border-white"
                    >
                        <XMarkIcon className="w-5 h-5"/>
                    </button>
                )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {NavLinks.map((link, index) => (
                        <li key={index}>
                            <Navlink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen? <MenuOverlay links={NavLinks}/> : null}
    </nav>
  );
};

export default Navbar;