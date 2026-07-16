import BookingSection from "@/components/BookingSection";
import OwnerControl from "@/components/OwnerControl";
import Image from "next/image";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Study Room Details",
};

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return <h2 className="text-center py-20">Unauthorized</h2>;
    }

    const token = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token?.token}`,
            },
            cache: "no-store",
        }
    );

    if (!res.ok) {
        notFound();
    }

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
            <OwnerControl ownerId={room.userId} room={room} />

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
                    <h1 className="text-4xl font-bold">{roomName}</h1>

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
                        {amenities.map((item) => (
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