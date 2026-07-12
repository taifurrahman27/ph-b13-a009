"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { HiOutlineX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingModal = ({ room }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please login first");
            return;
        }

        if (!startTime || !endTime) {
            toast.error("Please select time");
            return;
        }

        const start = Number(startTime.split(":")[0]);
        const end = Number(endTime.split(":")[0]);

        if (end <= start) {
            toast.error("End time must be after start time");
            return;
        }

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,

            roomName: room.roomName,
            roomImage: room.image,
            roomId: room._id,

            bookingDate: formData.get("bookingDate"),
            startTime,
            endTime,
        };


        const { data: tokenData } = await authClient.token();

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", authorization: `Bearer ${tokenData?.token}` },
                    body: JSON.stringify(bookingData),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Booking failed");
                return;
            }

            toast.success("Room booked successfully!");

            setStartTime("");
            setEndTime("");
            setIsOpen(false);

        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const calculateTotalCost = () => {
        if (!startTime || !endTime) {
            return { totalHours: 0, totalCost: 0 };
        }

        const start = parseInt(startTime.split(":")[0]);
        const end = parseInt(endTime.split(":")[0]);

        if (end <= start) {
            return { totalHours: 0, totalCost: 0 };
        }

        const totalHours = end - start;
        const totalCost = totalHours * room.hourlyRate;

        return { totalHours, totalCost };
    };

    const { totalHours, totalCost } = calculateTotalCost();

    return (
        <>
            <Button
                size="lg"
                className="bg-indigo-600 text-white hover:bg-indigo-700"
                onPress={() => setIsOpen(true)}
            >
                Book This Room
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

                    <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-5 top-5 z-10 rounded-full p-2 transition hover:bg-slate-100"
                        >
                            <HiOutlineX className="text-2xl" />
                        </button>

                        <div className="rounded-t-3xl bg-linear-to-r from-indigo-600 to-blue-600 px-8 py-6 text-white">
                            <h2 className="text-3xl font-bold">
                                Reserve Your Study Room
                            </h2>
                            <p className="mt-2 text-indigo-100">
                                Complete your booking details below.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2">

                            <div className="bg-slate-50 p-6">
                                <Image
                                    src={room.image}
                                    alt={room.roomName}
                                    width={600}
                                    height={400}
                                    className="h-64 w-full rounded-2xl object-cover"
                                />

                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold">
                                        {room.roomName}
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        {room.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 lg:p-8">

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    <div>
                                        <label className="mb-2 block font-medium">
                                            Booking Date
                                        </label>

                                        <input
                                            required
                                            type="date"
                                            name="bookingDate"
                                            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-indigo-500"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">

                                        <div>
                                            <label className="mb-2 block font-medium">
                                                Start Time
                                            </label>
                                            <select
                                                required
                                                name="startTime"
                                                value={startTime}
                                                onChange={(e) => setStartTime(e.target.value)}
                                                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-indigo-500"
                                            >
                                                <option value="">Select</option>
                                                <option value="08:00">08:00 AM</option>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="13:00">01:00 PM</option>
                                                <option value="14:00">02:00 PM</option>
                                                <option value="15:00">03:00 PM</option>
                                                <option value="16:00">04:00 PM</option>
                                                <option value="17:00">05:00 PM</option>
                                                <option value="18:00">06:00 PM</option>
                                                <option value="19:00">07:00 PM</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="mb-2 block font-medium">
                                                End Time
                                            </label>
                                            <select
                                                required
                                                name="endTime"
                                                value={endTime}
                                                onChange={(e) => setEndTime(e.target.value)}
                                                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-indigo-500"
                                            >
                                                <option value="">Select</option>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="13:00">01:00 PM</option>
                                                <option value="14:00">02:00 PM</option>
                                                <option value="15:00">03:00 PM</option>
                                                <option value="16:00">04:00 PM</option>
                                                <option value="17:00">05:00 PM</option>
                                                <option value="18:00">06:00 PM</option>
                                                <option value="19:00">07:00 PM</option>
                                                <option value="20:00">08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                                        <h4 className="font-semibold text-slate-900">
                                            Booking Summary
                                        </h4>

                                        <div className="mt-4 space-y-2 text-sm">

                                            <div className="flex justify-between">
                                                <span className="text-slate-600">
                                                    Hourly Rate
                                                </span>
                                                <span className="font-medium">
                                                    ${room.hourlyRate}/hr
                                                </span>
                                            </div>

                                            <div className="flex justify-between">
                                                <span className="text-slate-600">
                                                    Total Hours
                                                </span>
                                                <span className="font-medium">
                                                    {totalHours} hour{totalHours !== 1 ? "s" : ""}
                                                </span>
                                            </div>

                                            <div className="border-t pt-3 mt-3 flex justify-between">
                                                <span className="font-semibold text-slate-900">
                                                    Total Cost
                                                </span>
                                                <span className="text-xl font-bold text-indigo-600">
                                                    ${totalCost}
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-2">

                                        <Button
                                            type="button"
                                            className="flex-1"
                                            onPress={() => setIsOpen(false)}
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            isDisabled={loading}
                                            className="flex-1 bg-indigo-600 text-white hover:bg-indigo-700"
                                        >
                                            {loading ? "Booking..." : "Confirm Booking"}
                                        </Button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
};

export default BookingModal;