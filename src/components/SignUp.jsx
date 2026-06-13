"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiLoader } from "react-icons/fi";

import { authClient } from "@/lib/auth-client";

const SignUp = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const imageUrl = formData.get("imageUrl");

        setIsLoading(true);

        try {
            const { error } = await authClient.signUp.email({
                name,
                email,
                password,
                imageUrl
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            toast.success("Account created successfully!");

            router.push("/");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignUp = async () => {
        setGoogleLoading(true);

        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            console.error(error);
            toast.error("Google sign up failed");
            setGoogleLoading(false);
        }
    };


    return (
        <div className="w-full border border-slate-200 bg-white p-6 shadow-xl">

            <div className="mb-6 text-center">

                <h2 className="text-3xl font-black text-slate-900">
                    Create Your Account
                </h2>

                <p className="mt-2 text-slate-500">
                    Join StudyNook and book your perfect study space.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Full Name
                    </label>

                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email Address
                    </label>

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Image URL
                    </label>

                    <input
                        name="imageUrl"
                        type="text"
                        required
                        placeholder="https://example.com/image.jpg"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Password
                    </label>

                    <input
                        name="password"
                        type="password"
                        required
                        minLength={6}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
                    />
                </div>


                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70"
                >
                    {isLoading ? (
                        <>
                            <FiLoader className="animate-spin" />
                            Creating Account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </form>

            <div className="my-6 flex items-center">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="px-4 text-sm text-slate-400">
                    OR
                </span>

                <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button
                onClick={handleGoogleSignUp}
                disabled={googleLoading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-70"
            >
                {googleLoading ? (
                    <>
                        <FiLoader className="animate-spin" />
                        Connecting...
                    </>
                ) : (
                    <>
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </>
                )}
            </button>
        </div>
    );
};

export default SignUp;