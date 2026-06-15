import RoomsGridSkeleton from "@/components/skeletens/RoomsGridSkeleton";

export default function Loading() {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="flex justify-between items-center mb-8">
                <div className="h-10 w-48 rounded bg-slate-200 animate-pulse" />

                <div className="h-8 w-64 rounded bg-slate-200 animate-pulse" />
            </div>

            <RoomsGridSkeleton count={6} />
        </div>
    );
}