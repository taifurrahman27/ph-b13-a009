import SignUp from "@/components/SignUp";
import React from "react";
import Link from "next/link";
import {
    FiUsers,
    FiClock,
    FiWifi,
    FiCoffee,
    FiBookOpen,
    FiShield,
} from "react-icons/fi";

const SignUpPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-blue-100">
            <div className="container mx-auto px-4 py-10 lg:py-16">
                <div className="grid overflow-hidden rounded-[32px] border border-amber-100 bg-white shadow-2xl lg:grid-cols-2">

                    <div className="relative hidden overflow-hidden bg-indigo-600 p-10 text-white lg:flex lg:flex-col lg:justify-between">

                        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-400/20" />
                        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-400/20" />

                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                                <FiBookOpen />
                                Welcome to StudyNook
                            </span>

                            <h1 className="mt-8 text-5xl font-black leading-tight">
                                Find your
                                <span className="block text-blue-300">
                                    perfect study space.
                                </span>
                            </h1>

                            <p className="mt-10 max-w-md text-lg text-slate-200 leading-relaxed">
                                At StudyNook, we believe great ideas flourish in the right
                                environment. Join a community of dedicated learners exploring
                                inspiring study rooms designed for focus, collaboration, and
                                academic success—one productive session at a time.
                            </p>

                        </div>

                        <div className="relative z-10 mt-12 space-y-5">

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiUsers className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Collaborative Spaces
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Discover rooms designed for teamwork and group discussions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiClock className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Flexible Booking
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Reserve study spaces by the hour that fit your schedule.
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiCoffee className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Comfortable Environment
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Enjoy cozy seating and thoughtfully designed study spaces.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiBookOpen className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Study-Friendly Amenities
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Access whiteboards, projectors, charging outlets, and more.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiShield className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Safe & Quiet Spaces
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Focus better in secure environments built for productivity.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">

                        <div className="w-full max-w-md">

                            <div className="mb-8 text-center">
                                <div className="mx-auto rounded-full flex h-16 w-16 items-center justify-center bg-blue-50">
                                    <FiBookOpen className="text-2xl  text-blue-600" />
                                </div>
                                <span className="mt-4 text-4xl inline-block bg-indigo-50 px-4 py-1 font-bold text-indigo-700">
                                    Join StudyNook
                                </span>

                                <p className="mt-3 text-slate-500">
                                    Join StudyNook and book your perfect study space.
                                </p>
                            </div>

                            <SignUp />

                            <p className="mt-8 text-center text-sm text-slate-600">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="font-bold text-indigo-600 hover:underline transition-all hover:text-indigo-700"
                                >
                                    Sign in
                                </Link>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUpPage;