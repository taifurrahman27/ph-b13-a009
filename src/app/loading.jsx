import React from "react";
import { BookOpen } from "@gravity-ui/icons";

const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-100 text-indigo-600 animate-pulse">
                    <BookOpen width={40} height={40} />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                    StudyNook
                </h2>

                <p className="mt-2 text-slate-500">
                    Preparing your perfect study space...
                </p>

                <div className="mt-6 flex justify-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-indigo-500 animate-bounce"></span>
                    <span
                        className="h-3 w-3 rounded-full bg-indigo-500 animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                    ></span>
                    <span
                        className="h-3 w-3 rounded-full bg-indigo-500 animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;