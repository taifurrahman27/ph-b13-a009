import Link from "next/link";
import { Home, BookOpen, TriangleAlert } from "lucide-react";

export const metadata = {
    title: "StudyNook - Not found",
};

const NotFoundPage = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-indigo-100 via-white to-blue-100 px-6">

            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/50 bg-white/80 p-10 text-center shadow-2xl backdrop-blur-xl md:p-14">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
                    <TriangleAlert className="h-12 w-12 text-indigo-600" />
                </div>

                <h1 className="bg-linear-to-r from-indigo-600 to-blue-400  bg-clip-text text-6xl font-extrabold text-transparent md:text-8xl">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                    Study Room Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-600">
                    Oops! The page you&apos;re looking for seems to have been moved,
                    removed, or perhaps never existed. Let&apos;s help you find your
                    way back to the perfect study space.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700"
                    >
                        <Home size={18} />
                        Back Home
                    </Link>

                    <Link
                        href="/rooms"
                        className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-600"
                    >
                        <BookOpen size={18} />
                        Browse Rooms
                    </Link>

                </div>

                <p className="mt-8 text-sm text-slate-500">
                    StudyNook • Find your perfect study environment
                </p>

            </div>
        </div>
    );
};

export default NotFoundPage;