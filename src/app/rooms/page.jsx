import RoomCard from '@/components/RoomCard';
import React from 'react';

const AllRoomsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`)
    const rooms = await res.json();


    return (
        <div className="max-w-7xl mx-auto">
            <div className='flex justify-between items-center'>
                <h1 className="my-4 text-3xl md:text-4xl font-bold">All Rooms</h1>
                <p className='text-2xl font-bold text-indigo-600'>Total Available Rooms: {`${rooms.length}`}</p>
            </div>


            {rooms.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
                    <div className="mx-auto max-w-md">
                        <div className="mb-4 text-6xl">
                            📚
                        </div>

                        <h2 className="text-2xl font-bold text-slate-800">
                            No rooms found
                        </h2>

                        <p className="mt-3 text-slate-500">
                            There are currently no study rooms
                            available. Please check back later.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
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