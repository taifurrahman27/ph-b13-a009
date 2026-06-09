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

    const navItems = user ? privateNavItems : publicNavItems;

    return (
        <nav className="sticky top-0 z-50 bg-slate-100 shadow-xl backdrop-blur">
            <div className="container mx-auto px-4">

                <div className="flex items-center justify-between py-2">

                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/assets/logo.png"
                            alt="StudyNook Logo"
                            height={50}
                            width={50}
                            className="bg-[#2415f46b] p-1"
                        />

                        <div className="hidden sm:block">
                            <h2 className="text-2xl font-extrabold tracking-tight">
                                <span className="text-indigo-600">Study</span>
                                <span className="text-blue-500">
                                    Nook
                                </span>
                            </h2>
                        </div>
                    </Link>

                    <ul className="hidden lg:flex items-center gap-2 xl:gap-4">
                        {navItems.map((item, index) => (
                            <MyNavLink key={index} href={item.path}>
                                {item.text}
                            </MyNavLink>
                        ))}
                    </ul>

                    <div className="hidden lg:flex items-center gap-3">

                        {!user ? (
                            <>
                                <Link href="/login">
                                    <Button className="rounded-none bg-[#2415f4d0]">
                                        <ArrowRightToSquare />
                                        Login
                                    </Button>
                                </Link>

                                <Link href="/signup">
                                    <Button
                                        variant="secondary"
                                        className="rounded-none bg-[#5b50f029]"
                                    >
                                        <PersonPencil />
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Link href="/profile">
                                <Button className="rounded-none bg-[#2415f4d0]">
                                    Profile
                                </Button>
                            </Link>
                        )}

                    </div>

                    <div className="sm:hidden">
                        <h2 className="text-xl font-extrabold tracking-tight">
                            <span className="text-indigo-600">Study</span>
                            <span className="text-blue-500">
                                Nook
                            </span>
                        </h2>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden rounded-md p-2 transition hover:bg-gray-200"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <HiX className="text-3xl" />
                        ) : (
                            <HiOutlineMenuAlt3 className="text-3xl" />
                        )}
                    </button>

                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen
                        ? "max-h-150 pb-4"
                        : "max-h-0"
                        }`}
                >

                    <ul className="flex flex-col gap-2 border-t pt-4">

                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setIsOpen(false)}
                            >
                                <MyNavLink href={item.path}>
                                    {item.text}
                                </MyNavLink>
                            </li>
                        ))}

                    </ul>

                    <div className="mt-5 flex flex-col gap-3">

                        {!user ? (
                            <>
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
                            </>
                        ) : (
                            <Link href="/profile">
                                <Button className="rounded-none bg-[#2415f4d0]">
                                    Profile
                                </Button>
                            </Link>
                        )}

                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;