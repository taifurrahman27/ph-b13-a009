import React from "react";
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineClock,
} from "react-icons/hi";

export const metadata = {
    title: "Contact Us",
};

const ContactPage = () => {
    return (
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center">
                    <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
                        Get In Touch
                    </span>

                    <h1 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
                        Contact StudyNook
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        Have questions about room bookings, availability, or your
                        reservations? Our support team is here to help.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">

                    {/* Email */}
                    <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">
                            <HiOutlineMail className="text-3xl text-indigo-600" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-900">
                            Email Support
                        </h3>

                        <p className="mt-3 text-slate-600">
                            support@studynook.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                            <HiOutlinePhone className="text-3xl text-green-600" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-900">
                            Call Us
                        </h3>

                        <p className="mt-3 text-slate-600">
                            +880 1234-567890
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                            <HiOutlineClock className="text-3xl text-amber-600" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-900">
                            Working Hours
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Saturday – Thursday
                        </p>

                        <p className="font-medium text-slate-800">
                            8:00 AM – 6:00 PM
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 rounded-3xl bg-linear-to-r from-indigo-600 to-blue-600 p-10 text-center text-white">
                    <h2 className="text-3xl font-bold">
                        Need Help With a Booking?
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-indigo-100">
                        Whether you&apos;re reserving a study room, managing your
                        bookings, or facing any issue, our team is ready to assist
                        you.
                    </p>

                    <a
                        href="mailto:support@studynook.com"
                        className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-slate-100"
                    >
                        Email Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;