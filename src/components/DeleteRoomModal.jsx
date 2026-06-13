"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";

export function DeleteRoomModal({ room }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteRoom = async () => {
        setIsDeleting(true);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.message || "Failed to delete room"
                );
            }

            toast.success("Room deleted successfully!");

            router.push("/rooms");
            router.refresh();
        } catch (error) {
            console.error("Delete room error:", error);

            toast.error(
                error.message || "Something went wrong"
            );
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <AlertDialog>
            <Button
                variant="danger"
                className="bg-red-500 font-bold px-4 py-3 shadow-md hover:bg-red-600 hover:shadow-lg"
            >
                <BiTrash className="text-xl" />
                <span>Delete</span>
            </Button>

            <AlertDialog.Backdrop className="bg-slate-900/60 backdrop-blur-md">
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header className="flex flex-col items-center px-8 pt-6 pb-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                                <BiTrash className="text-3xl text-red-500" />
                            </div>

                            <AlertDialog.Heading className="mt-5 text-center text-2xl font-bold text-slate-900">
                                Delete this room?
                            </AlertDialog.Heading>

                        </AlertDialog.Header>

                        <AlertDialog.Body className="px-8 text-center text-slate-600">
                            <p className="mt-1 bg-slate-50 px-4 py-2 font-bold text-slate-900">
                                {room?.roomName}
                            </p>
                            <p className="mt-4 text-sm text-slate-500">
                                This action cannot be undone. All associated
                                room information will be removed permanently.
                            </p>

                        </AlertDialog.Body>

                        <AlertDialog.Footer className="flex px-8 gap-3 pb-8 pt-6">

                            <Button
                                slot="close"
                                disabled={isDeleting}
                                className="px-5 border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                onClick={handleDeleteRoom}
                                disabled={isDeleting}
                                className="px-5 bg-red-500 text-white hover:bg-red-600 disabled:opacity-70"
                            >
                                {isDeleting ? (
                                    <>
                                        <FiLoader className="animate-spin" />
                                        Deleting...
                                    </>
                                ) : (
                                    <>
                                        Delete
                                    </>
                                )}
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}