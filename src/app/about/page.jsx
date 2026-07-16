import React from "react";
import Link from "next/link";
import {
    FaBookOpen,
    FaUsers,
    FaClock,
    FaWifi,
    FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
    title: "About Us",
};

const AboutPage = () => {
    return (
        <section className="bg-slate-50">
            <div className="bg-linear-to-r from-indigo-700 via-indigo-600 to-purple-600 py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold">
                        About StudyNook
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
                        StudyNook is a modern study room booking platform that
                        helps students, professionals, and educators discover,
                        reserve, and manage comfortable study spaces with ease.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Our Mission
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We believe everyone deserves access to a peaceful
                            and productive environment for studying,
                            collaborating, and preparing for success.
                        </p>

                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            StudyNook connects learners with quality study
                            spaces while providing room owners with an easy way
                            to list and manage their available rooms.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-10 shadow-lg">
                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <FaBookOpen className="mt-1 text-3xl text-indigo-600" />
                                <div>
                                    <h3 className="font-semibold text-xl">
                                        Better Learning
                                    </h3>

                                    <p className="text-slate-600">
                                        Find quiet and comfortable study
                                        environments anytime.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaUsers className="mt-1 text-3xl text-indigo-600" />
                                <div>
                                    <h3 className="font-semibold text-xl">
                                        Community Driven
                                    </h3>

                                    <p className="text-slate-600">
                                        Connect students and study room owners
                                        through one simple platform.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaClock className="mt-1 text-3xl text-indigo-600" />
                                <div>
                                    <h3 className="font-semibold text-xl">
                                        Instant Booking
                                    </h3>

                                    <p className="text-slate-600">
                                        Reserve available study rooms in just a
                                        few clicks.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="mt-24 text-center">
                    <h2 className="text-4xl font-bold">
                        What StudyNook Offers
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Everything you need to find and manage study rooms.
                    </p>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-3xl bg-white p-8 shadow">
                            <FaBookOpen className="mx-auto text-4xl text-indigo-600" />

                            <h3 className="mt-5 text-xl font-bold">
                                Smart Listings
                            </h3>

                            <p className="mt-3 text-slate-500">
                                Browse rooms with detailed descriptions,
                                pricing, and amenities.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow">
                            <FaWifi className="mx-auto text-4xl text-indigo-600" />

                            <h3 className="mt-5 text-xl font-bold">
                                Modern Amenities
                            </h3>

                            <p className="mt-3 text-slate-500">
                                Wi-Fi, projectors, whiteboards, AC, power
                                outlets and more.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow">
                            <FaClock className="mx-auto text-4xl text-indigo-600" />

                            <h3 className="mt-5 text-xl font-bold">
                                Flexible Booking
                            </h3>

                            <p className="mt-3 text-slate-500">
                                Choose your preferred date and time slot with
                                instant confirmation.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow">
                            <FaUsers className="mx-auto text-4xl text-indigo-600" />

                            <h3 className="mt-5 text-xl font-bold">
                                Owner Dashboard
                            </h3>

                            <p className="mt-3 text-slate-500">
                                Add, edit, delete and manage your room listings
                                easily.
                            </p>
                        </div>

                    </div>
                </div>


                <div className="mt-24 rounded-3xl bg-indigo-50 p-10">
                    <h2 className="text-center text-4xl font-bold">
                        Why Choose StudyNook?
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">

                        {[
                            "Easy room discovery",
                            "Secure authentication",
                            "Real-time availability",
                            "Modern responsive interface",
                            "Simple booking process",
                            "Room management dashboard",
                            "Affordable hourly pricing",
                            "Clean and user-friendly experience",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-green-600" />

                                <span className="text-lg text-slate-700">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>
                </div>




                <div className="mt-24 rounded-3xl bg-indigo-600 px-8 py-16 text-center text-white">
                    <h2 className="text-4xl font-bold">
                        Ready to Find Your Perfect Study Space?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
                        Join StudyNook today and discover comfortable study
                        rooms, book instantly, or list your own study space for
                        others.
                    </p>

                    <Link
                        href="/rooms"
                        className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 transition hover:bg-slate-100"
                    >
                        Explore Study Rooms
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default AboutPage;