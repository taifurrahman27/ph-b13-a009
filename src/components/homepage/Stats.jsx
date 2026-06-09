import React from "react";
import { BookOpen, Person, Clock } from "@gravity-ui/icons";

const stats = [
    {
        value: "100+",
        label: "Study Rooms",
        icon: <BookOpen width={24} height={24} />,
        accent: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
        text: "text-blue-600",
    },
    {
        value: "1K+",
        label: "Happy Students",
        icon: <Person width={24} height={24} />,
        accent: "from-cyan-500 to-indigo-500",
        bg: "bg-cyan-50",
        text: "text-cyan-600",
    },
    {
        value: "24/7",
        label: "Booking Access",
        icon: <Clock width={24} height={24} />,
        accent: "from-indigo-500 to-purple-500",
        bg: "bg-indigo-50",
        text: "text-indigo-600",
    },
];

const Stats = () => {
    return (
        <section className="my-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
                >

                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-4xl font-black tracking-tight text-slate-900">
                                {stat.value}
                            </h3>

                            <p className="mt-2 text-sm font-medium text-slate-500">
                                {stat.label}
                            </p>
                        </div>

                        <div
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bg} ${stat.text} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                        >
                            {stat.icon}
                        </div>
                    </div>

                    <div
                        className={`absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-linear-to-br ${stat.accent} opacity-10 transition-all duration-500 group-hover:scale-125`}
                    />
                </div>
            ))}
        </section>
    );
};

export default Stats;