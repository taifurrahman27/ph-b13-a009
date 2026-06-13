"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    Button
} from "@heroui/react";

import {
    ArrowRightToSquare,
    PersonPencil,
} from "@gravity-ui/icons";

import {
    CalendarDays,
    ChevronDown,
    LogOut,
    User,
} from "lucide-react";

import {
    HiOutlineMenuAlt3,
    HiX,
} from "react-icons/hi";

import toast from "react-hot-toast";

import MyNavLink from "./MyNavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const [mobileOpen, setMobileOpen] = useState(false);

    const publicNavItems = [
        { path: "/", text: "Home" },
        { path: "/rooms", text: "All Rooms" },
    ];

    const privateNavItems = [
        { path: "/", text: "Home" },
        { path: "/rooms", text: "All Rooms" },
        { path: "/add-room", text: "Add Room" },
        { path: "/my-listings", text: "My Listings" },
        { path: "/my-bookings", text: "My Bookings" },
    ];

    const navItems = user ? privateNavItems : publicNavItems;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await authClient.signOut();

            toast.success("Logged out successfully");

            router.push("/");
            router.refresh();
        } catch (error) {
            toast.error("Failed to logout");
        }
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4">

                <div className="flex h-20 items-center justify-between">

                    <Link href="/" className="flex items-center gap-3">

                        <Image
                            src="/assets/logo.png"
                            alt="StudyNook Logo"
                            width={48}
                            height={48}
                            className=" bg-indigo-200 p-1"
                        />

                        <div>
                            <h2 className="text-2xl font-extrabold tracking-tight">
                                <span className="text-indigo-600">
                                    Study
                                </span>

                                <span className="text-blue-500">
                                    Nook
                                </span>
                            </h2>
                        </div>

                    </Link>

                    <ul className="hidden lg:flex items-center gap-2">
                        {navItems.map((item) => (
                            <MyNavLink
                                key={item.path}
                                href={item.path}
                            >
                                {item.text}
                            </MyNavLink>
                        ))}
                    </ul>

                    <div className="hidden lg:flex items-center gap-3">

                        {!user ? (
                            <>
                                <Link href="/login">
                                    <Button className="bg-indigo-600 rounded-none text-white">
                                        <ArrowRightToSquare />
                                        Login
                                    </Button>
                                </Link>

                                <Link href="/signup">
                                    <Button
                                        variant="bordered"
                                        className="rounded-none bg-blue-100"
                                    >
                                        <PersonPencil />
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50"
                                >
                                    <Image
                                        src={user.image || `https://ui-avatars.com/api/?name=${user.name ?? "User Name"}`}
                                        alt={user.name || "User Name"}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <div className="hidden xl:flex flex-col items-start">
                                        <span className="font-semibold text-slate-800">{user.name}</span>
                                        <span className="max-w-37.5 truncate text-xs text-slate-500">{user.email}</span>
                                    </div>
                                    <ChevronDown className="h-4 w-4 text-slate-500" />
                                </button>

                                {dropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                                        <div className="absolute right-0 z-20 mt-2 w-48 rounded-xl border border-slate-200 bg-white shadow-lg py-1">
                                            <button
                                                onClick={() => { router.push("/profile"); setDropdownOpen(false); }}
                                                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                            >
                                                <User size={16} /> Profile
                                            </button>
                                            <button
                                                onClick={() => { router.push("/my-bookings"); setDropdownOpen(false); }}
                                                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                            >
                                                <CalendarDays size={16} /> My Bookings
                                            </button>
                                            <button
                                                onClick={() => { handleLogout(); setDropdownOpen(false); }}
                                                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                                            >
                                                <LogOut size={16} /> Logout
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>


                    <button
                        onClick={() =>
                            setMobileOpen(!mobileOpen)
                        }
                        className="p-2 hover:bg-slate-100 lg:hidden"
                    >
                        {mobileOpen ? (
                            <HiX className="text-3xl" />
                        ) : (
                            <HiOutlineMenuAlt3 className="text-3xl" />
                        )}
                    </button>
                </div>

                {mobileOpen && (
                    <div className="border-t py-5 lg:hidden">

                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li
                                    key={item.path}
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                >
                                    <MyNavLink href={item.path}>
                                        {item.text}
                                    </MyNavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">

                            {!user ? (
                                <div className="space-y-3">

                                    <Link
                                        href="/login"
                                        onClick={() =>
                                            setMobileOpen(false)
                                        }
                                    >
                                        <Button
                                            className="w-full rounded-none bg-indigo-600 text-white"
                                        >
                                            <ArrowRightToSquare />
                                            Login
                                        </Button>
                                    </Link>

                                    <Link
                                        href="/signup"
                                        onClick={() =>
                                            setMobileOpen(false)
                                        }
                                    >
                                        <Button
                                            variant="bordered"
                                            className="w-full rounded-none bg-blue-100"
                                        >
                                            <PersonPencil />
                                            Sign Up
                                        </Button>
                                    </Link>

                                </div>
                            ) : (
                                <div className="rounded-2xl border border-slate-200 p-4">

                                    <div className="flex items-center gap-3">

                                        <Image
                                            src={
                                                user.image ||
                                                `https://ui-avatars.com/api/?name=${user.name}`
                                            }
                                            alt={user.name || "User"}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />

                                        <div>
                                            <p className="font-semibold">
                                                {user.name}
                                            </p>

                                            <p className="text-sm text-slate-500">
                                                {user.email}
                                            </p>
                                        </div>

                                    </div>

                                    <div className="mt-4 space-y-2">

                                        <Button
                                            variant="bordered"
                                            className="w-full rounded-none justify-start"
                                            onPress={() => {
                                                router.push("/profile");
                                                setMobileOpen(false);
                                            }}
                                        >
                                            <User size={18} />
                                            Profile
                                        </Button>

                                        <Button
                                            variant="bordered"
                                            className="w-full rounded-none justify-start"
                                            onPress={() => {
                                                router.push("/my-bookings");
                                                setMobileOpen(false);
                                            }}
                                        >
                                            <CalendarDays size={18} />
                                            My Bookings
                                        </Button>

                                        <Button
                                            color="danger"
                                            className="w-full rounded-none justify-start"
                                            onPress={handleLogout}
                                        >
                                            <LogOut size={18} />
                                            Logout
                                        </Button>

                                    </div>

                                </div>
                            )}

                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;