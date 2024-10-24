"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <div className="text-white font-poppins bg-[#F3F3F3]">
            {/* Full navbar for larger screens */}
            <div className="hidden md:flex justify-between items-center mx-auto w-[140vmin]">
                <a href="/"><div className='logo mt-[9vmin]'></div></a>
                <ul className="flex space-x-4 justify-center mt-[9vmin]">
                    <li><Link href="/work" className="text-[2vmin] font-semibold text-black pr-6 pl-6 pt-2 pb-2 hover:bg-yellow-600 hover:text-white rounded">Work</Link></li>
                    <li><Link href="#"     className="text-[2vmin] font-semibold text-black pr-6 pl-6 pt-2 pb-2 hover:bg-yellow-600 hover:text-white rounded">About</Link></li>
                    <li><Link href="#"     className="text-[2vmin] font-semibold text-black pr-6 pl-6 pt-2 pb-2 hover:bg-yellow-600 hover:text-white rounded">Playground</Link></li>
                    <li><Link href="#"     className="text-[2vmin] font-semibold text-black pr-6 pl-6 pt-2 pb-2 hover:bg-yellow-600 hover:text-white rounded">Contact</Link></li>                    
                </ul>
            </div>






            {/* Hamburger menu for small screens */}
            <div className="md:hidden flex justify-between items-center p-8 bg-[#F3F3F3]">
                <a href="/"><div className='logo'></div></a>
                <button onClick={toggleMenu} className="text-black text-2xl">
                    {/* Hamburger icon */}
                    {isMenuOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Dropdown menu for small screens */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-[43vw] bg-gray-300 shadow-lg text-center">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-black border-2 border-red-900 p-1 rounded-sm">
                            ✖
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-4 p-5">
                        <div className='bg-black border-red-900 text-white'>STORE MENU</div>
                        <li><Link href="/work" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Work</Link></li>
                        <li><Link href="#" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>About</Link></li>
                        <li><Link href="#" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Playground</Link></li>
                        <li><Link href="#" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Contact</Link></li>                        
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;