"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHome } from "react-icons/io5";

const MyNavLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`flex items-center gap-2 ${pathname === href ? "bg-[#2415f4d0] text-white font-bold p-2" : ""}`}
        >{href === "/" ? <IoHome /> : ""}

            {children}
        </Link>
    );
};

export default MyNavLink;