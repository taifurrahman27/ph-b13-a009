import Link from "next/link";
import {
    HiOutlineSearch,
    HiOutlineCalendar,
    HiOutlineCreditCard,
    HiOutlineBookOpen,
} from "react-icons/hi";

export default function HowItWorks() {

    const steps = [
        {
            number: "01",
            icon: <HiOutlineSearch className="w-8 h-8" />,
            title: "Browse Rooms",
            description:
                "Explore available study spaces that match your needs.",
        },
        {
            number: "02",
            icon: <HiOutlineCalendar className="w-8 h-8" />,
            title: "Choose Your Time",
            description:
                "Select your preferred room and booking schedule.",
        },
        {
            number: "03",
            icon: <HiOutlineCreditCard className="w-8 h-8" />,
            title: "Book Instantly",
            description:
                "Confirm your reservation securely online.",
        },
        {
            number: "04",
            icon: <HiOutlineBookOpen className="w-8 h-8" />,
            title: "Study Comfortably",
            description:
                "Arrive and enjoy a distraction-free learning environment.",
        },
    ];

    return (

        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
                        Simple Booking Process
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
                        How It Works
                    </h2>

                    <p className="mt-4 text-slate-600 text-lg">
                        Reserve your ideal study space in just a few simple steps.
                    </p>
                </div>


                <div className="relative">

                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="relative group text-center"
                            >

                                <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center shadow-md group-hover:border-indigo-500 group-hover:shadow-xl transition-all duration-300">
                                    <div className="text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                </div>


                                <span className="inline-block mt-5 text-sm font-semibold tracking-widest text-indigo-600">
                                    STEP {step.number}
                                </span>


                                <h3 className="mt-3 text-xl font-bold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 px-8 py-6 rounded-2xl">
                        <div>
                            <h3 className="text-xl font-bold text-blue-700">
                                Ready to find your perfect study space?
                            </h3>

                            <p className="text-slate-600 mt-1">
                                Explore hundreds of study rooms and book instantly.
                            </p>
                        </div>

                        <Link
                            href="/rooms"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition whitespace-nowrap"
                        >
                            Explore Rooms
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
