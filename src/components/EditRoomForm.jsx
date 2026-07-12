"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const amenitiesOptions = [
    "Whiteboard",
    "Projector",
    "WiFi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
];

const EditRoomForm = ({ room }) => {
    console.log(room);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        roomName: room?.roomName || "",
        image: room?.image || "",
        description: room?.description || "",
        floor: room?.floor || "",
        seatCapacity: room?.seatCapacity || "",
        hourlyRate: room?.hourlyRate || "",
        amenities: room?.amenities || [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAmenityChange = (amenity) => {
        setFormData((prev) => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter((item) => item !== amenity)
                : [...prev.amenities, amenity],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data?.message || "Failed to update room"
                );
            }

            toast.success("Room updated successfully!");

            router.refresh();

            router.push(`/rooms/${room._id}`);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (

        <section className="container mx-auto px-4 py-5">
            <div className="grid gap-8 lg:grid-cols-2">

                <div className="border border-slate-200 bg-white p-8 shadow-sm">

                    <div className="mb-8">
                        <span className="inline-flex  bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
                            Edit Listing
                        </span>

                        <h1 className="mt-4 text-3xl font-bold text-slate-900">
                            Update Study Room
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Keep your StudyNook listing accurate and up to date.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Room Name
                            </label>

                            <input
                                type="text"
                                name="roomName"
                                value={formData.roomName}
                                onChange={handleChange}
                                required
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Image URL
                            </label>

                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Description
                            </label>

                            <textarea
                                rows={5}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Floor
                                </label>

                                <input
                                    type="number"
                                    name="floor"
                                    value={formData.floor}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Capacity
                                </label>

                                <input
                                    type="text"
                                    name="seatCapacity"
                                    value={formData.seatCapacity}
                                    onChange={handleChange}
                                    placeholder="2–4"
                                    required
                                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Rate ($/hr)
                                </label>

                                <input
                                    type="number"
                                    name="hourlyRate"
                                    value={formData.hourlyRate}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="mb-4 block text-sm font-semibold text-slate-700">
                                Amenities
                            </label>

                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

                                {amenitiesOptions.map((amenity) => {
                                    const selected =
                                        formData.amenities.includes(amenity);

                                    return (
                                        <button
                                            key={amenity}
                                            type="button"
                                            onClick={() =>
                                                handleAmenityChange(amenity)
                                            }
                                            className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-all
                                                ${selected
                                                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                                                    : "border-slate-300 text-slate-600 hover:border-indigo-300 hover:bg-slate-50"
                                                }`}
                                        >
                                            {amenity}
                                        </button>
                                    );
                                })}

                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-2xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70"
                        >
                            {loading
                                ? "Updating Room..."
                                : "Save Changes"}
                        </button>
                    </form>
                </div>

                <div className="sticky top-24 h-fit">

                    <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">

                        <span className="inline-flex mb-2 bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
                            Preview Changes
                        </span>

                        <div className="relative h-72">
                            <Image
                                src={formData.image}
                                alt={formData.roomName}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6">

                            <h2 className="text-2xl font-bold text-slate-900">
                                {formData.roomName}
                            </h2>

                            <p className="mt-3 text-slate-600">
                                {formData.description}
                            </p>

                            <div className="mt-6 space-y-3 text-sm">

                                <div className="flex justify-between">
                                    <span className="text-slate-500">
                                        Floor
                                    </span>

                                    <span className="font-semibold">
                                        {formData.floor}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-slate-500">
                                        Capacity
                                    </span>

                                    <span className="font-semibold">
                                        {formData.seatCapacity}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-slate-500">
                                        Rate
                                    </span>

                                    <span className="font-semibold text-indigo-600">
                                        ${formData.hourlyRate}/hr
                                    </span>
                                </div>

                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">

                                {formData.amenities.map((amenity) => (
                                    <span
                                        key={amenity}
                                        className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                                    >
                                        {amenity}
                                    </span>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EditRoomForm;