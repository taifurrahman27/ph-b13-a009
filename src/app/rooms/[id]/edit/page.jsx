import EditRoomForm from "@/components/EditRoomForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
    title: "StudyNook - Edit Room",
};

const EditRoomPage = async ({ params }) => {
    const { id } = await params;

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

    const room = await res.json();

    return (
        <section className="min-h-screen bg-slate-50 py-6">
            <div className="container mx-auto px-4">

                <div className="mb-4">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Edit Your Study Room
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Update your listing informations and preview
                        changes before saving.
                    </p>
                </div>

                <EditRoomForm room={room} />

            </div>
        </section>
    );
};

export default EditRoomPage;