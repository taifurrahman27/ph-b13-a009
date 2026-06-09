import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { Button, Input } from "@heroui/react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-10">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/assets/logo.png"
                                alt="StudyNook Logo"
                                width={60}
                                height={60}
                                className="bg-indigo-600/40 p-1.5"
                            />

                            <h2 className="text-4xl font-extrabold">
                                <span className="text-indigo-500">
                                    Study
                                </span>
                                <span className="text-blue-400">
                                    Nook
                                </span>
                            </h2>
                        </div>

                        <p className="text-sm leading-7 text-slate-400">
                            Find your perfect study space with StudyNook.
                            Discover rooms, connect with hosts, and create
                            productive learning experiences from anywhere.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-5">
                            Useful Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/rooms"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Rooms
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-indigo-500 transition"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/faq"
                                    className="hover:text-indigo-500 transition"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <MdEmail className="text-indigo-400 text-xl" />

                                <span>
                                    support@studynook.com
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdPhone className="text-indigo-400 text-xl" />

                                <span>
                                    +880 1234-567890
                                </span>
                            </div>

                            <p className="text-sm text-slate-400 leading-6 pt-2">
                                Available: Saturday – Thursday
                                <br />
                                8:00 AM – 6:00 PM
                            </p>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Stay Updated
                        </h3>

                        <p className="text-sm text-slate-400 mb-4">
                            Subscribe to receive study tips, updates, and new
                            room listings.
                        </p>

                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full"
                            />

                            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                                Subscribe
                            </Button>
                        </div>

                        <div className="flex gap-3 mt-6">

                            <Link
                                href="#"
                                className="p-3 rounded-full bg-slate-800 hover:bg-blue-700 transition"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="p-3 rounded-full bg-slate-800 hover:bg-black transition"
                            >
                                <FaXTwitter />
                            </Link>

                            <Link
                                href="#"
                                className="p-3 rounded-full bg-slate-800 hover:bg-blue-700 transition"
                            >
                                <FaLinkedinIn />
                            </Link>

                            <Link
                                href="#"
                                className="p-3 rounded-full bg-slate-800 hover:bg-red-800 transition"
                            >
                                <FaInstagram />
                            </Link>

                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-slate-400 text-center md:text-left">
                        © {new Date().getFullYear()} StudyNook. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-slate-400">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-indigo-400 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-indigo-400 transition"
                        >
                            Terms of Service
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;