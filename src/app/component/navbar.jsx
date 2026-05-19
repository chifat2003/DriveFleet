"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Car } from "lucide-react"; // Using 'Car' icon as a placeholder for 'Drive'
import { navLinks } from "./navlinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600 tracking-tight">
                            <Car className="h-6 w-6" />
                            <span>Drive<span className="text-gray-900">Fleet</span></span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 animate-fadeIn">
                    <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-2 px-3 space-y-2">
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                onClick={() => setIsOpen(false)}
                                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
