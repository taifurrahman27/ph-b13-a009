import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
    ArrowRight,
    House,
    Persons,
    FileDollar,
} from "@gravity-ui/icons";

const RoomCard = ({ room }) => {
    console.log(room);
    const {
        _id,
        roomName,
        image,
        description,
        floor,
        seatCapacity,
        hourlyRate,
        amenities = [],
    } = room;

    const shortDescription =
        description?.length > 100
            ? `${description.slice(0, 100)}...`
            : description;

    const visibleAmenities = amenities.slice(0, 3);
    const remainingAmenities =
        amenities.length - visibleAmenities.length;

    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={roomName}
                    height={200}
                    width={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">

                <h3 className="text-xl font-bold text-slate-900">
                    {roomName}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 flex-1">
                    {shortDescription}
                </p>

                <div className="mt-5 space-y-3">

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <House className="text-indigo-600" />
                        <span>{floor}</span>
                    </div>

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Persons className="text-indigo-600" />
                            <span>
                                {seatCapacity} People
                            </span>
                        </div>

                        <div className="flex items-center gap-2 font-semibold text-indigo-600">
                            <FileDollar />
                            <span>
                                ${hourlyRate}/hr
                            </span>
                        </div>

                    </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">

                    {visibleAmenities.map((amenity) => (
                        <span
                            key={amenity}
                            className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                        >
                            {amenity}
                        </span>
                    ))}

                    {remainingAmenities > 0 && (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            +{remainingAmenities} more
                        </span>
                    )}

                </div>

                <div className="mt-6">

                    <Link href={`/rooms/${_id}`}>
                        <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                            View Details
                            <ArrowRight />
                        </Button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default RoomCard;
