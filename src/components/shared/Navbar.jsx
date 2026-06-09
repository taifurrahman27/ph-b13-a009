"use client";

import React, { useState } from "react";
import Image from "next/image";
import MyNavLink from "./MyNavLink";
import Link from "next/link";
import { ArrowRightToSquare, PersonPencil } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const user = true;

    const publicNavItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/rooms",
            text: "All Rooms",
        },
    ];

    const privateNavItems = [

        {
            path: "/",
            text: "Home",
        },
        {
            path: "/rooms",
            text: "All Rooms",
        },
        {
            path: "/add-room",
            text: "Add Room",
        },
        {
            path: "/my-listings",
            text: "My Listings",
        },
        {
            path: "/my-bookings",
            text: "My Bookings",
        },
    ];


    return (
        <nav className="shadow-xl bg-slate-100 sticky top-0 z-50">
            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center py-2">

                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="StudyNook Logo"
                            height={60}
                            width={60}
                            className="cursor-pointer rounded-full p-1 bg-[#2415f46b]"
                        />
                    </Link>

                    {
                        user == true ? (<ul className="hidden md:flex items-center gap-3">
                            {privateNavItems.map((item, index) => (
                                <MyNavLink key={index} href={item.path}>
                                    {item.text}
                                </MyNavLink>
                            ))}
                        </ul>) : (<ul className="hidden md:flex items-center gap-3">
                            {publicNavItems.map((item, index) => (
                                <MyNavLink key={index} href={item.path}>
                                    {item.text}
                                </MyNavLink>
                            ))}
                        </ul>)
                    }

                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login">
                            <Button className="w-full rounded-none bg-[#2415f4d0]">
                                <ArrowRightToSquare />
                                Login
                            </Button>
                        </Link>

                        <Link href="/signup">
                            <Button variant="secondary" className="w-full rounded-none bg-[#5b50f029]">
                                <PersonPencil />
                                Sign Up
                            </Button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
                    >
                        {isOpen ? (
                            <HiX className="text-3xl" />
                        ) : (
                            <HiOutlineMenuAlt3 className="text-3xl" />
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden pb-4">

                        <ul className="flex flex-col gap-2">

                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <MyNavLink href={item.path}>
                                        {item.text}
                                    </MyNavLink>
                                </li>
                            ))}

                        </ul>

                        <div className="flex flex-col gap-3 mt-4">

                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                            >
                                <Button className="w-full rounded-none bg-[#2415f4d0]">
                                    <ArrowRightToSquare />
                                    Login
                                </Button>
                            </Link>

                            <Link
                                href="/signup"
                                onClick={() => setIsOpen(false)}
                            >
                                <Button
                                    variant="secondary"
                                    className="w-full rounded-none bg-[#5b50f029]"
                                >
                                    <PersonPencil />
                                    Sign Up
                                </Button>
                            </Link>

                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;