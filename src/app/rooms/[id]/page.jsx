import BookingSection from "@/components/BookingSection";
import { DeleteRoomModal } from "@/components/DeleteRoomModal";

import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;


    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`, {

    }
    );

    const room = await res.json();

    const {
        roomName,
        image,
        description,
        floor,
        seatCapacity,
        hourlyRate,
        amenities = [],
    } = room;


    return (
        <section className="container mx-auto px-4 py-10">

            <div className="flex items-center justify-end gap-2 border-b pt-4 my-4">

                <DeleteRoomModal room={room}></DeleteRoomModal>
                <Link
                    href={`/rooms/${room._id}/edit`}
                    className="inline-flex font-bold px-5 py-2 shadow-md items-center gap-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                ><BiEdit />
                    Edit
                </Link>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">

                <div>

                    <Image
                        src={image}
                        alt={roomName}
                        width={800}
                        height={500}
                        className="h-113 w-full rounded-3xl object-cover"
                    />
                </div>

                <div>

                    <h1 className="text-4xl font-bold">
                        {roomName}
                    </h1>

                    <p className="mt-4 text-slate-600">
                        {description}
                    </p>

                    <div className="mt-8 space-y-4">

                        <div>
                            Floor:
                            <span className="ml-2 font-semibold">
                                {floor}
                            </span>
                        </div>

                        <div>
                            Capacity:
                            <span className="ml-2 font-semibold">
                                {seatCapacity} people
                            </span>
                        </div>

                        <div>
                            Hourly Rate:
                            <span className="ml-2 font-semibold text-indigo-600">
                                ${hourlyRate}/hr
                            </span>
                        </div>



                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">

                        {amenities?.map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-700"
                            >
                                {item}
                            </span>
                        ))}

                    </div>

                    <BookingSection room={room} />

                </div>

            </div>

        </section>
    );
};

export default RoomDetailsPage;