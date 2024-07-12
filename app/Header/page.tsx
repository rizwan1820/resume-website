import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-5 font-mono">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Heading Section */}
                <div className="flex items-center space-x-4">
                    <a href="#about">
                        <img src="/logo.png" alt="Logo" className="w-12 h-12 ml-9 rounded-full" />
                    </a>
                    <h2 className="text-xl font-bold">Muhammad Rizwan Sajid</h2>
                </div>
                {/* Navigation Section */}
                <nav className="flex-grow">
                    <ul className="flex justify-center space-x-6">

                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>

                    </ul>
                </nav>
                {/* Button Section */}
                <div className="flex items-center space-x-4">
                    <a href="https://www.upwork.com/freelancers/~0110bd1793d059374e" className="bg-gray-700 text-white text-lg md:text-xl px-3 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out font-bold">
                        Hire On Upwork <span className="ml-2">→</span>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~0110bd1793d059374e" target="_blank" rel="noopener noreferrer">
                        <img src="/upwork-logo.png" alt="Upwork Logo" className="w-12 h-12 ml-2 rounded-full" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
