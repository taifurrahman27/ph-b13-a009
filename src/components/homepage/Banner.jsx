import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRight, FaPencil } from "react-icons/fa6";
import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-indigo-100 via-white to-blue-100">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="container mx-auto px-4 py-10 lg:py-28">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div className="text-center lg:text-left">

                        <span className="inline-block bg-blue-100 px-4 py-1 text-sm font-medium text-indigo-800 mb-5">
                            📚 Smart Study-Space Booking
                        </span>

                        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Find Your Perfect<br />
                            <span className="text-indigo-600">
                                Study Room
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600 mx-auto lg:mx-0">
                            Browse and book quiet, private study rooms in your
                            library. List your own room and earn while helping
                            others discover productive spaces.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                            <Link href="/rooms">
                                <Button
                                    size="lg"
                                    className="bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-103 transition px-6"
                                >
                                    Explore Rooms
                                    <FaArrowRight className="ml-2" />
                                </Button>
                            </Link>

                            <Link href="/add-room">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-blue-500 text-white hover:bg-blue-600 hover:scale-103 transition px-6"
                                >
                                    List Your Room
                                    <FaPencil className="ml-2" />

                                </Button>
                            </Link>

                        </div>


                    </div>

                    <div className="relative flex justify-center">

                        <div className="relative w-full max-w-md bg-white p-2 shadow-2xl border transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(79,70,229,0.25)]">

                            <div className="mb-2">
                                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                                    Available Now
                                </span>
                            </div>

                            <div className="overflow-hidden">
                                <Image
                                    src="/assets/banner.jpeg"
                                    alt="StudyNook room"
                                    height={600}
                                    width={800}
                                    className="transition-transform duration-700 hover:scale-110"
                                />
                            </div>


                            <div className="absolute -top-4 -right-1 rounded-2xl bg-linear-to-br from-indigo-700 to-blue-700 px-4 py-3 text-white shadow-lg animate-float">
                                ⭐ Trusted by Students
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;