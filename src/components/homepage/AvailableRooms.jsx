import React from "react";
import RoomCard from "../RoomCard";
import RoomsGridSkeleton from "../skeletens/RoomsGridSkeleton";

const AvailableRooms = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/latest`,
        {
            cache: "no-store",
        }
    );

    const rooms = await res.json();

    if (!rooms) {
        return <RoomsGridSkeleton count={6} />;
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="mb-12 text-center">
                <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
                    🔥 Latest Study Spaces
                </span>

                <h2 className="mt-4 text-4xl font-bold text-slate-900">
                    Available Study Rooms
                </h2>

                <p className="mt-3 mx-auto max-w-2xl text-slate-500">
                    Discover the newest and most popular study rooms
                    available for booking. Hand-picked spaces designed
                    for focus, productivity, and comfort.
                </p>
            </div>

            {rooms.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
                    <div className="mx-auto max-w-md">
                        <div className="mb-4 text-6xl">📚</div>

                        <h2 className="text-2xl font-bold text-slate-800">
                            No rooms available yet
                        </h2>

                        <p className="mt-3 text-slate-500">
                            We are currently adding new study spaces.
                            Please check back soon.
                        </p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="mb-8 flex items-center justify-between text-sm text-slate-500">
                        <p>
                            Showing latest{" "}
                            <span className="font-semibold text-slate-700">
                                {rooms.length}
                            </span>{" "}
                            rooms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {rooms.map((room) => (
                            <RoomCard
                                key={room._id}
                                room={room}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default AvailableRooms;