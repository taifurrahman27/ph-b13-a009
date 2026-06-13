"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiLoader, FiLogIn } from "react-icons/fi";

import { authClient } from "@/lib/auth-client";

const Login = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");

        setIsLoading(true);

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
            });

            console.log(data, error);

            if (error) {
                toast.error(error.message);
                return;
            }

            toast.success("Welcome back to StudyNook!");

            router.push("/");
            router.refresh();

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };


    const handleGoogleLogin = async () => {
        setGoogleLoading(true);

        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            console.error(error);

            toast.error("Google login failed");
            setGoogleLoading(false);
        }
    };


    return (
        <div className="w-full border border-slate-200 bg-white p-6 shadow-xl">

            <div className="mb-5 text-center">

                <h2 className="text-3xl font-black text-slate-900">
                    Login Your Account
                </h2>

            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email Address
                    </label>

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

                <div className="flex items-center justify-end">
                    <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700 hover:underline"
                    >
                        Forgot Password?
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70"
                >
                    {isLoading ? (
                        <>
                            <FiLoader className="animate-spin" />
                            Signing In...
                        </>
                    ) : (
                        <>
                            <FiLogIn />
                            Sign In
                        </>
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
                onClick={handleGoogleLogin}
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

export default Login;