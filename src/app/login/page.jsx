import Login from "@/components/Login";
import Link from "next/link";
import {
    FiBookOpen,
    FiClock,
    FiBookmark,
    FiTrendingUp,
    FiShield,
    FiCoffee,
    FiLogIn,
} from "react-icons/fi";

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-blue-100">
            <div className="container mx-auto px-4 py-10 lg:py-16">
                <div className="overflow-hidden border border-slate-200 bg-white shadow-2xl lg:grid lg:grid-cols-2">

                    <div className="relative hidden overflow-hidden bg-indigo-600 p-10 text-white lg:flex lg:flex-col lg:justify-between">

                        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-400/20" />
                        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-400/20" />

                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                                <FiLogIn />
                                Welcome Back
                            </span>

                            <h1 className="mt-8 text-5xl font-black leading-tight">
                                Continue your
                                <span className="block text-blue-300">
                                    learning journey.
                                </span>
                            </h1>

                            <p className="mt-10 max-w-md text-lg leading-relaxed text-slate-200">
                                Sign in to access your booked study rooms,
                                manage reservations, and stay focused in
                                environments designed to help you achieve
                                your academic goals.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 space-y-5">

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiBookmark className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Manage Bookings
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        View and organize all your upcoming study sessions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiClock className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Quick Reservations
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Book your favorite rooms in just a few clicks.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiTrendingUp className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Stay Productive
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Build consistent study habits with dedicated spaces.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <FiCoffee className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Comfortable Experience
                                    </h3>

                                    <p className="text-sm text-slate-300">
                                        Return to inspiring environments built for focus.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>



                    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
                        <div className="w-full max-w-md">

                            <div className="mb-8 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                                    <FiBookOpen className="text-2xl text-blue-600" />
                                </div>

                                <span className="mt-4 inline-block bg-indigo-50 px-4 py-1 text-4xl font-bold text-indigo-700">
                                    Welcome Back
                                </span>

                                <p className="mt-3 text-slate-500">
                                    Sign in to continue booking your perfect study spaces.
                                </p>
                            </div>

                            <Login />

                            <p className="mt-8 text-center text-sm text-slate-600">
                                Don&apos;t have an account?{" "}
                                <Link
                                    href="/signup"
                                    className="font-bold text-indigo-600 transition-all hover:text-indigo-700 hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;