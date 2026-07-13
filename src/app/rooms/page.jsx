import RoomCard from "@/components/RoomCard";
import RoomFilter from "@/components/RoomFilter";

const AllRoomsPage = async ({ searchParams }) => {
    const params = await searchParams;

    const amenities = params.amenities || "";

    const url = amenities
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?amenities=${encodeURIComponent(amenities)}`
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`;

    const res = await fetch(url, {
        cache: "no-store",
    });

    const rooms = await res.json();

    return (
        <div className="max-w-7xl mx-auto">

            <div className="flex items-center justify-between my-4">
                <h1 className="text-4xl font-bold">
                    All Rooms
                </h1>

                <p className="text-xl font-bold text-indigo-600">
                    Total Rooms: {rooms.length}
                </p>
            </div>

            <RoomFilter />

            {rooms.length === 0 ? (
                <div className="py-20 text-center">
                    No rooms found.
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map(room => (
                        <RoomCard
                            key={room._id}
                            room={room}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllRoomsPage;