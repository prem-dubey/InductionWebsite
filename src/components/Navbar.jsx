import React, { useState } from 'react'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                    <img src="./src/assets/iitkgp-logo.png" alt="IIT KGP Logo" className="w-10"/>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12" // X icon
                                        : "M4 6h16M4 12h16M4 18h16" // Hamburger
                                }
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex flex-grow justify-center">
                    <ul className="flex space-x-6 text-lg">
                        <li><a href="http://localhost:5173/#" className="hover:text-blue-300">Home</a></li>
                        <li><a href="http://localhost:5173/#about" className="hover:text-blue-300">About Campus</a></li>
                        <li><a href="http://localhost:5173/#clubs" className="hover:text-blue-300">Clubs and Societies</a></li>
                        <li><a href="http://localhost:5173/contact" className="hover:text-blue-300">Contact Us</a></li>
                        <li><a href="https://gymkhana.iitkgp.ac.in/" className="hover:text-blue-300">TSG Website</a></li>
                        <li><a href="https://www.iitkgp.ac.in/" className="hover:text-blue-300">IIT KGP Website</a></li>
                        <li><a href="http://localhost:5173/#faq" className="hover:text-blue-300">FAQ</a></li>
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden mt-4">
                    <ul className="flex flex-col space-y-4 text-lg items-center">
                        <li><a href="http://localhost:5173/#" className="hover:text-blue-300">Home</a></li>
                        <li><a href="http://localhost:5173/#about" className="hover:text-blue-300">About Campus</a></li>
                        <li><a href="http://localhost:5173/#clubs" className="hover:text-blue-300">Clubs and Societies</a></li>
                        <li><a href="http://localhost:5173/contact" className="hover:text-blue-300">Contact Us</a></li>
                        <li><a href="https://gymkhana.iitkgp.ac.in/" className="hover:text-blue-300">TSG Website</a></li>
                        <li><a href="https://www.iitkgp.ac.in/" className="hover:text-blue-300">IIT KGP Website</a></li>
                        <li><a href="http://localhost:5173/#faq" className="hover:text-blue-300">FAQ</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar
