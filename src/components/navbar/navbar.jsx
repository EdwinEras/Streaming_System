import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";// Ensure correct import

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(0);

    useEffect(() => {
        console.log(active)
    }, [active])

    const arrLink = [
        {id:0, path:"/", name:"Home"},
        {id:1, path:"/movies", name:"Movies"},
        {id:2, path:"/tvs", name:"Tvs"},
        {id:3, path:"/register", name:"Register"},
        {id:4, path:"/login", name:"Log In"},
    ];

    return (
        <nav className="border-red-200 bg-red-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/cinema.png" className="h-16" alt="Cinema Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Cinema
                    </span>
                </Link>
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-red-700 focus:outline-none focus:ring-red-600 focus:ring-red-200 text-red-400"
                >
                    <span className="sr-only">Open main menu</span>
                    {menuOpen ? (
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    )}
                </button>
                <div className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 bg-red-800 md:bg-red-900 p-4 md:p-0 rounded-lg border md:border-0">
                        {arrLink.map((link) => (
                            <li key={link.id} onClick={() => {setActive(link.id)}}>
                                <Link to={link.path}
                                className={`py-2 px-3 rounded-lg text-white hover:bg-red-700
                                    ${active===link.id ? "bg-red-700" : "text-red-900"}
                                `}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
            <Outlet />
        </nav>
    );
};

export default NavBar;
