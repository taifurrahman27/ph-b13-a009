import React from "react";

const RoomCardSkeleton = () => {
    return (
        <div className="animate-pulse overflow-hidden rounded-3xl border bg-white shadow-sm">

            <div className="h-56 w-full bg-slate-200" />

            <div className="p-6 space-y-4">

                <div className="h-5 w-3/4 rounded bg-slate-200" />

                <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-slate-200" />
                    <div className="h-3 w-5/6 rounded bg-slate-200" />
                    <div className="h-3 w-2/3 rounded bg-slate-200" />
                </div>

                <div className="flex justify-between">
                    <div className="h-4 w-20 rounded bg-slate-200" />
                    <div className="h-4 w-16 rounded bg-slate-200" />
                </div>

                <div className="flex gap-2">
                    <div className="h-6 w-16 rounded-full bg-slate-200" />
                    <div className="h-6 w-16 rounded-full bg-slate-200" />
                    <div className="h-6 w-16 rounded-full bg-slate-200" />
                </div>

                <div className="h-10 w-full rounded bg-slate-200" />
            </div>
        </div>
    );
};

export default RoomCardSkeleton;