"use client";

import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label, Button } from "@heroui/react";

import { authClient } from "@/lib/auth-client" // import the auth client
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Car } from "lucide-react";
import { navLinks } from "./navlinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user

    const handleSignOut = async () => {
        await authClient.signOut();
    }


    // console.log(user)


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

                            {user ? (
                                // <CustomTrigger></CustomTrigger>
                                <Dropdown>
                                    <Dropdown.Trigger className="rounded-full">
                                        <Avatar>
                                            <Avatar.Image
                                                referrerPolicy="no-referrer"
                                                alt={user?.name}
                                                src={user?.image}
                                            />
                                            <Avatar.Fallback delayMs={600}>{user?.name}</Avatar.Fallback>
                                        </Avatar>
                                    </Dropdown.Trigger>
                                    <Dropdown.Popover>
                                        <div className="px-3 pt-3 pb-1">
                                            <div className="flex items-center gap-2">
                                                <Avatar size="sm">
                                                    <Avatar.Image
                                                        referrerPolicy="no-referrer"

                                                        alt={user?.name}
                                                        src={user?.image}
                                                    />
                                                    <Avatar.Fallback delayMs={600}>{user?.name}</Avatar.Fallback>
                                                </Avatar>
                                                <div className="flex flex-col gap-0">
                                                    <p className="text-sm leading-5 font-medium">{user?.name}</p>
                                                    <p className="text-xs leading-none text-muted">{user?.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Dropdown.Menu>

                                                                                           <Dropdown.Item id="addCar" textValue="addCar">
                                                    <div className="flex w-full items-center justify-between gap-2">
                    
                                                    <Link href="/add-car"><button> Add car</button></Link>
                                                        
                                                    </div>
                                                </Dropdown.Item>
                                           

                                            <Dropdown.Item id="logout" textValue="Logout" variant="danger" onClick={handleSignOut}>
                                                <div className="flex w-full items-center justify-between gap-2">


                                                    <button> Log Out</button>


                                                    <ArrowRightFromSquare className="size-3.5 text-danger" />
                                                </div>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>
                            ) : (
                                <>
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
                                </>
                            )}






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


                            {/* profile dropdown */}
                            {user ? (
                                <div className="flex justify-center">
                                    {/* <CustomTrigger user = {user} className="text-center"></CustomTrigger> */}
                                    <Dropdown>
                                        <Dropdown.Trigger className="rounded-full">
                                            <Avatar>
                                                <Avatar.Image
                                                    referrerPolicy="no-referrer"

                                                    alt={user?.name}
                                                    src={user?.image}
                                                />
                                                <Avatar.Fallback delayMs={600}>{user?.name}</Avatar.Fallback>
                                            </Avatar>
                                        </Dropdown.Trigger>
                                        <Dropdown.Popover>
                                            <div className="px-3 pt-3 pb-1">
                                                <div className="flex items-center gap-2">
                                                    <Avatar size="sm">
                                                        <Avatar.Image
                                                            referrerPolicy="no-referrer"

                                                            alt={user?.name}
                                                            src={user?.image}
                                                        />
                                                        <Avatar.Fallback delayMs={600}>{user?.name}</Avatar.Fallback>
                                                    </Avatar>
                                                    <div className="flex flex-col gap-0">
                                                        <p className="text-sm leading-5 font-medium">{user?.name}</p>
                                                        <p className="text-xs leading-none text-muted">{user?.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Dropdown.Menu>
                                              
                                               <Dropdown.Item id="addCar" textValue="addCar">
                                                    <div className="flex w-full items-center justify-between gap-2">
                    
                                                    <Link href="/add-car"><button> Add car</button></Link>
                                                        
                                                    </div>
                                                </Dropdown.Item>

                                                <Dropdown.Item id="logout" textValue="Logout" variant="danger" onClick={handleSignOut}>
                                                    <div className="flex w-full items-center justify-between gap-2">


                                                        <button> Log Out</button>


                                                        <ArrowRightFromSquare className="size-3.5 text-danger" />
                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </Dropdown>
                                </div>

                            ) : (
                                <>
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
