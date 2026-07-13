"use client";

import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import { DeleteRoomModal } from "./DeleteRoomModal";

const OwnerControl = ({ ownerId, room }) => {
    const { data: session, isPending } = authClient.useSession();

    const currentUserId = session?.user?.id;

    if (isPending) return null;

    if (currentUserId !== ownerId) return null;

    return (
        <div className="my-4 flex items-center justify-end gap-2 border-b pt-4">
            <DeleteRoomModal room={room} />

            <Link
                href={`/rooms/${room._id}/edit`}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 font-bold text-white shadow-md transition hover:bg-indigo-700"
            >
                <BiEdit />
                Edit
            </Link>
        </div>
    );
};

export default OwnerControl;