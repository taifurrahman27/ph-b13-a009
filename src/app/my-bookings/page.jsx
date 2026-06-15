import MyBookingsCard from "@/components/MyBookingsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    if (!user) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
                    <div className="mb-4 text-6xl">🔐</div>

                    <h2 className="text-3xl font-bold text-slate-900">
                        Please Sign In
                    </h2>

                    <p className="mt-3 text-slate-500">
                        You need to be logged in to view your bookings.
                    </p>
                </div>
            </div>
        );
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`,
        {
            cache: "no-store",
        }
    );

    const result = await res.json();
    const bookings = result?.data || [];

    return (
        <section className="container mx-auto px-4 py-10">
            <div className="overflow-hidden bg-linear-to-r from-indigo-600 to-blue-600 p-8 text-white shadow-xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="inline-block bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur">
                            📚 StudyNook Dashboard
                        </span>

                        <h1 className="mt-4 text-4xl font-bold">
                            My Bookings
                        </h1>

                        <p className="mt-3 max-w-2xl text-indigo-100">
                            Welcome back,{" "}
                            <span className="font-bold text-xl text-blue-100">
                                {user.name}!
                            </span>
                            <br />Manage your study room reservations and keep
                            track of your upcoming sessions.
                        </p>
                    </div>

                    <div className="bg-white/10 px-8 py-6 backdrop-blur">
                        <p className="text-sm text-indigo-100">
                            Total Bookings
                        </p>

                        <h2 className="mt-2 text-5xl font-black">
                            {bookings.length}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                {bookings.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
                        <div className="mx-auto max-w-md">
                            <div className="mb-6 text-7xl">
                                📖
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900">
                                No Bookings Yet
                            </h2>

                            <p className="mt-4 text-slate-500">
                                You haven&apos;t booked any study rooms yet.
                                Explore available spaces and reserve your
                                perfect study environment.
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Your Reservations
                                </h2>

                                <p className="text-slate-500">
                                    Showing {bookings.length} booking
                                    {bookings.length > 1 ? "s" : ""}
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {bookings.map((booking) => (
                                <MyBookingsCard
                                    key={booking._id}
                                    booking={booking}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default MyBookingsPage;