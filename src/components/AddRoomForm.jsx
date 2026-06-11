"use client";

import {
    FieldError,
    Input,
    Label,
    TextField,
    TextArea,
    Button,
    Card,
    Checkbox,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const amenitiesOptions = [
    { label: "Whiteboard", icon: "📝" },
    { label: "Projector", icon: "📽️" },
    { label: "Wi-Fi", icon: "📶" },
    { label: "Power Outlets", icon: "🔌" },
    { label: "Quiet Zone", icon: "🤫" },
    { label: "Air Conditioning", icon: "❄️" },
];

const AddRoomForm = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const room = {
            roomName: formData.get("roomName"),
            description: formData.get("description"),
            image: formData.get("image"),
            floor: formData.get("floor"),
            capacity: Number(formData.get("capacity")),
            hourlyRate: Number(formData.get("hourlyRate")),
            amenities: formData.getAll("amenities"),
        };

        console.log(room);

    };

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">

            <div className="text-center mb-8">
                <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
                    Create Listing
                </span>

                <h1 className="mt-4 text-3xl md:text-4xl font-bold">
                    Add a New Study Room
                </h1>

                <p className="mt-2 text-slate-500">
                    Share your study space and help students
                    discover productive environments.
                    <br />
                    You can edit or remove it any time.
                </p>
            </div>

            <Card className="p-6 md:p-10  shadow-xl">

                <form
                    onSubmit={onSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="md:col-span-2">
                            <TextField
                                name="roomName"
                                isRequired
                            >
                                <Label>Room Name</Label>

                                <Input
                                    placeholder="Quiet Reading Room"
                                    className="rounded-2xl"
                                />

                                <FieldError />
                            </TextField>
                        </div>

                        <TextField
                            name="floor"
                            isRequired
                        >
                            <Label>Floor</Label>

                            <Input
                                placeholder="3rd Floor"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        <TextField
                            name="capacity"
                            type="number"
                            isRequired
                        >
                            <Label>Capacity</Label>

                            <Input
                                type="number"
                                placeholder="4"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        <TextField
                            name="hourlyRate"
                            type="number"
                            isRequired
                        >
                            <Label>
                                Hourly Rate ($)
                            </Label>

                            <Input
                                type="number"
                                placeholder="5"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        <TextField
                            name="image"
                            isRequired
                        >
                            <Label>Image URL</Label>

                            <Input
                                type="url"
                                placeholder="https://example.com/room.jpg"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        <div className="md:col-span-2">
                            <TextField
                                name="description"
                                isRequired
                            >
                                <Label>Description</Label>

                                <TextArea
                                    placeholder="Describe the room, atmosphere, facilities, and study experience..."
                                    className="rounded-3xl"
                                />

                                <FieldError />
                            </TextField>
                        </div>

                        {amenitiesOptions.map((amenity) => (
                            <Checkbox
                                key={amenity.label}
                                name="amenities"
                                value={amenity.label}
                                className="group cursor-pointer"
                            >
                                <div className="
    flex h-20 w-full flex-col items-center justify-center gap-2
    rounded-2xl border-2 border-slate-200
    bg-white px-2 text-center
    transition-all duration-200
    hover:border-indigo-400 hover:shadow-md
    group-data-selected:border-indigo-600
    group-data-selected:bg-indigo-50
">
                                    <span className="text-2xl">{amenity.icon}</span>
                                    <span className="font-medium">
                                        {amenity.label}
                                    </span>
                                </div>
                            </Checkbox>
                        ))}

                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full rounded-none"
                            onPress={() =>
                                router.back()
                            }
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            className="w-full rounded-none bg-indigo-600 text-white"
                        >
                            Add Room
                        </Button>

                    </div>

                </form>

            </Card>

        </div>
    );
};

export default AddRoomForm;