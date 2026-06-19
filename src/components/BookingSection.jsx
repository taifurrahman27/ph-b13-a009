"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import BookingModal from "./BookingModal";
import { authClient } from "@/lib/auth-client";

const BookingSection = ({ room }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

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