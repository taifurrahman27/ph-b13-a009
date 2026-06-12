"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import BookingModal from "./BookingModal";

const BookingSection = ({ room }) => {

    const user = true;
    if (!user) {
        return (
            <div className="mt-10">

                <Link href="/login">

                    <Button className="bg-indigo-600 text-white">
                        Login to Book
                    </Button>

                </Link>

            </div>
        );
    }

    return (
        <div className="mt-10">

            <BookingModal room={room} />

        </div>
    );
};

export default BookingSection;