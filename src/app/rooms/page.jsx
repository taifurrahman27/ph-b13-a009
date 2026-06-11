import RoomCard from '@/components/RoomCard';
import React from 'react';

const AllRoomsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`)
    const rooms = await res.json();
    console.log(rooms, 'rooms from db');


    return (
        <div className="max-w-7xl mx-auto">
            <div className='flex justify-between items-center'>
                <h1 className="my-4 text-3xl md:text-4xl font-bold">All Rooms</h1>
                <p className='text-2xl font-bold text-indigo-600'>Total Available Rooms: {`${rooms.length}`}</p>
            </div>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rooms.map((room) => (
                    <RoomCard
                        key={room._id}
                        room={room}
                    />
                ))}
            </div>

        </div>
    );
};

export default AllRoomsPage;