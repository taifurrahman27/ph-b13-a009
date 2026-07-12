"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const MyListings = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyRooms = async () => {
            try {
                const { data: tokenData } = await authClient.token();

                if (!tokenData?.token) {
                    throw new Error("Please login first.");
                }

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-listings`,
                    {
                        cache: "no-store",
                        headers: {
                            authorization: `Bearer ${tokenData.token}`,
                        },
                    }
                );

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message);
                }

                setRooms(result.data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMyRooms();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (rooms.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed py-20 text-center">
                <h2 className="text-2xl font-bold">No Listings Found</h2>
                <p className="mt-2 text-slate-500">
                    You have not added any study rooms yet.
                </p>

                <Link
                    href="/add-room"
                    className="mt-5 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white"
                >
                    Add Room
                </Link>
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
                <div
                    key={room._id}
                    className="overflow-hidden rounded-2xl border bg-white shadow"
                >
                    <Image
                        src={room.image}
                        alt={room.roomName}
                        width={500}
                        height={300}
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-5">
                        <h2 className="text-xl font-bold">
                            {room.roomName}
                        </h2>

                        <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                            {room.description}
                        </p>

                        <div className="mt-4 flex justify-between text-sm">
                            <span>Floor {room.floor}</span>
                            <span className="font-semibold text-indigo-600">
                                ${room.hourlyRate}/hr
                            </span>
                        </div>

                        <div className="mt-5 flex gap-2">
                            <Link
                                href={`/rooms/${room._id}`}
                                className="flex-1 rounded-lg border px-4 py-2 text-center"
                            >
                                View
                            </Link>

                            <Link
                                href={`/rooms/${room._id}/edit`}
                                className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-center text-white"
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyListings;