"use client";

import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {
    HiOutlineUser,
    HiOutlineEnvelope,
    HiOutlineBookmark,
    HiOutlineClock,
} from "react-icons/hi2";

const ProfilePage = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

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
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="mx-auto max-w-6xl px-4">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-900">
                        My Profile
                    </h1>

                    <p className="mt-2 text-slate-600">
                        Manage your Study Nook account and activity.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                    <div className="h-48 bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500" />

                    <div className="relative px-8 pb-8">

                        <div className="-mt-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                            <div className="flex flex-col items-center gap-5 md:flex-row">

                                <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl">
                                    <Image
                                        src={
                                            user?.image ||
                                            "https://i.ibb.co/Fq7K5ZB/user.png"
                                        }
                                        alt={user?.name || "User"}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-slate-900">
                                        {user?.name || "Guest User"}
                                    </h2>

                                    <p className="text-slate-500">
                                        Study Nook Member
                                    </p>
                                </div>
                            </div>

                            <Button
                                onPress={() => router.push("/my-bookings")}
                                className="bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                My Bookings
                            </Button>

                        </div>

                        <div className="mt-10 grid gap-6 lg:grid-cols-3">

                            <div className="rounded-2xl border border-slate-200 p-6 lg:col-span-2">

                                <h3 className="mb-5 text-xl font-semibold">
                                    Personal Information
                                </h3>

                                <div className="space-y-5">

                                    <div className="flex items-center gap-4">
                                        <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
                                            <HiOutlineUser size={20} />
                                        </div>

                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Full Name
                                            </p>

                                            <p className="font-semibold">
                                                {user?.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                            <HiOutlineEnvelope size={20} />
                                        </div>

                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Email Address
                                            </p>

                                            <p className="font-semibold">
                                                {user?.email}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="rounded-2xl bg-linear-to-br from-indigo-600 to-blue-600 p-6 text-white">

                                <p className="text-indigo-100">
                                    Membership
                                </p>

                                <h3 className="mt-2 text-3xl font-bold">
                                    Pro
                                </h3>

                                <p className="mt-3 text-sm text-indigo-100">
                                    Enjoy premium study spaces and seamless
                                    room reservations.
                                </p>

                            </div>

                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            <div className="rounded-2xl border bg-white p-5 text-center shadow-sm">
                                <HiOutlineBookmark
                                    size={28}
                                    className="mx-auto text-indigo-600"
                                />

                                <h4 className="mt-3 text-3xl font-bold text-indigo-600">
                                    12
                                </h4>

                                <p className="text-slate-600">
                                    Total Bookings
                                </p>
                            </div>

                            <div className="rounded-2xl border bg-white p-5 text-center shadow-sm">
                                <HiOutlineClock
                                    size={28}
                                    className="mx-auto text-green-600"
                                />

                                <h4 className="mt-3 text-3xl font-bold text-green-600">
                                    48
                                </h4>

                                <p className="text-slate-600">
                                    Study Hours
                                </p>
                            </div>

                            <div className="rounded-2xl border bg-white p-5 text-center shadow-sm">
                                <h4 className="text-3xl font-bold text-amber-600">
                                    5
                                </h4>

                                <p className="mt-2 text-slate-600">
                                    Favorite Rooms
                                </p>
                            </div>

                            <div className="rounded-2xl border bg-white p-5 text-center shadow-sm">
                                <h4 className="text-3xl font-bold text-cyan-600">
                                    ★
                                </h4>

                                <p className="mt-2 text-slate-600">
                                    Premium User
                                </p>
                            </div>

                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button
                                className="bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Edit Profile
                            </Button>

                            <Button
                                color="danger"
                                onPress={handleLogout}
                            >
                                Logout
                            </Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;