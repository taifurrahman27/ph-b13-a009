"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AlertDialog, Button } from "@heroui/react";
const MyBookingsCard = ({ booking }) => {
    const router = useRouter();
    const {
        _id,
        roomName,
        roomImage,
        bookingDate,
        startTime,
        endTime,
        totalCost,
        status,
    } = booking;

    const handleCancel = async () => {
        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${_id}/cancel`,
                { method: "PATCH" }
            );

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            toast.success("Booking cancelled");
            setOpen(false);
            router.refresh();
        } catch (err) {
            toast.error(err.message || "Failed to cancel booking");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                <div className="grid md:grid-cols-3">

                    <div className="relative h-56 md:h-full">
                        <Image
                            src={roomImage}
                            alt={roomName}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="md:col-span-2 p-6">

                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {roomName}
                                </h2>

                                <p className="text-sm text-slate-500 mt-1">
                                    Booking Date: {bookingDate}
                                </p>
                            </div>

                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${status === "confirmed"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {status}
                            </span>
                        </div>

                        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">

                            <div>
                                <p className="text-slate-500">Time</p>
                                <p className="font-semibold">
                                    {startTime} - {endTime}
                                </p>
                            </div>

                            <div>
                                <p className="text-slate-500">Total Cost</p>
                                <p className="font-bold text-indigo-600">
                                    ${totalCost}
                                </p>
                            </div>
                        </div>

                        <AlertDialog>
                            <Button>Cancel Booking</Button>
                            <AlertDialog.Backdrop>
                                <AlertDialog.Container>
                                    <AlertDialog.Dialog className="sm:max-w-100">
                                        <AlertDialog.CloseTrigger />
                                        <AlertDialog.Header>
                                            <AlertDialog.Icon status="danger" />
                                            <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                                        </AlertDialog.Header>
                                        <AlertDialog.Body>
                                            <p>
                                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                                data. This action cannot be undone.
                                            </p>
                                        </AlertDialog.Body>
                                        <AlertDialog.Footer>
                                            <Button slot="close" variant="tertiary">
                                                Cancel
                                            </Button>
                                            <Button variant="danger" slot="close"
                                                onClick={handleCancel}
                                            >
                                                Cancel Booking
                                            </Button>
                                        </AlertDialog.Footer>
                                    </AlertDialog.Dialog>
                                </AlertDialog.Container>
                            </AlertDialog.Backdrop>
                        </AlertDialog>

                    </div>
                </div>
            </div>



        </>
    );
};

export default MyBookingsCard;