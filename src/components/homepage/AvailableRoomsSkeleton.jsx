// components/homepage/AvailableRoomsSkeleton.jsx

import RoomsGridSkeleton from "../skeletens/RoomsGridSkeleton";

export default function AvailableRoomsSkeleton() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="mb-12 text-center">
                <div className="mx-auto h-6 w-40 rounded-full bg-slate-200 animate-pulse" />
                <div className="mx-auto mt-4 h-10 w-80 rounded bg-slate-200 animate-pulse" />
                <div className="mx-auto mt-4 h-4 w-full max-w-2xl rounded bg-slate-200 animate-pulse" />
                <div className="mx-auto mt-2 h-4 w-3/4 max-w-xl rounded bg-slate-200 animate-pulse" />
            </div>

            <RoomsGridSkeleton count={6} />
        </section>
    );
}