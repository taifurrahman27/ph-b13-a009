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

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${_id}/cancel`,
                { method: "PATCH" }
            );

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            toast.success("Booking cancelled");
            router.refresh();
        } catch (err) {
            toast.error(err.message || "Failed to cancel booking");
        }
    };

    return (
        <>
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:flex">

                <div className="relative h-56 w-full md:h-auto md:w-1/3">
                    <Image
                        src={roomImage}
                        alt={roomName}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">

                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                                {roomName}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Booking Date: {bookingDate}
                            </p>
                        </div>

                        <span
                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold capitalize animate-status-glow ${status === "confirmed"
                                ? "bg-green-100 text-green-700 shadow-[0_0_14px_rgba(34,197,94,0.55)]"
                                : "bg-red-100 text-red-700 shadow-[0_0_14px_rgba(239,68,68,0.55)]"
                                }`}
                        >
                            {status}
                        </span>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-slate-500">Time</p>
                            <p className="font-semibold">
                                {startTime} - {endTime}
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-500">Total Cost</p>
                            <p className="text-lg font-bold text-indigo-600">
                                ${totalCost}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <AlertDialog>
                            <Button
                                color="danger"
                                isDisabled={status === "cancelled"}
                            >
                                {status === "cancelled"
                                    ? "Booking Cancelled"
                                    : "Cancel Booking"}
                            </Button>

                            <AlertDialog.Backdrop>
                                <AlertDialog.Container>
                                    <AlertDialog.Dialog className="sm:max-w-100">

                                        <AlertDialog.CloseTrigger />

                                        <AlertDialog.Header>
                                            <AlertDialog.Icon status="danger" />
                                            <AlertDialog.Heading>
                                                Cancel booking permanently?
                                            </AlertDialog.Heading>
                                        </AlertDialog.Header>

                                        <AlertDialog.Body>
                                            <p>
                                                This will cancel your booking for{" "}
                                                <strong>{roomName}</strong>.
                                            </p>
                                        </AlertDialog.Body>

                                        <AlertDialog.Footer>
                                            <Button variant="tertiary" slot="close">
                                                Keep Booking
                                            </Button>

                                            <Button
                                                variant="danger"
                                                onPress={handleCancel}
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