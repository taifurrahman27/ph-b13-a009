"use client";

import { useRouter, useSearchParams } from "next/navigation";

const amenities = [
    "Wi-Fi",
    "Whiteboard",
    "Projector",
    "Air Conditioning",
    "Power Outlets",
    "Quiet Zone",
];

export default function RoomFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const selected =
        searchParams.get("amenities")?.split(",") || [];

    const handleChange = (amenity) => {
        let updated = [...selected];

        if (updated.includes(amenity)) {
            updated = updated.filter(item => item !== amenity);
        } else {
            updated.push(amenity);
        }

        const params = new URLSearchParams(searchParams);

        if (updated.length) {
            params.set("amenities", updated.join(","));
        } else {
            params.delete("amenities");
        }

        router.push(`/rooms?${params.toString()}`);
    };

    return (
        <div className="mb-8 rounded-xl border bg-white p-5 shadow">
            <h3 className="mb-4 text-lg text-blue-600 font-bold">
                Filter by Amenities
            </h3>

            <div className="flex flex-wrap gap-4">
                {amenities.map((item) => (
                    <label
                        key={item}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(item)}
                            onChange={() => handleChange(item)}
                        />

                        {item}
                    </label>
                ))}
            </div>
        </div>
    );
}