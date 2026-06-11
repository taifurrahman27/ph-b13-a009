import React from "react";
import RoomCardSkeleton from "./RoomCardSkeleton";

const RoomsGridSkeleton = ({ count = 6 }) => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: count }).map((_, i) => (
                <RoomCardSkeleton key={i} />
            ))}
        </div>
    );
};

export default RoomsGridSkeleton;