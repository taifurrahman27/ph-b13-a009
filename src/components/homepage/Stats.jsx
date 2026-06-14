"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Person, Clock } from "@gravity-ui/icons";


const useInView = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    return [ref, isVisible];
};


const useCountUp = (end, startTrigger, duration = 1200) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startTrigger) return;

        let startTime = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const progress = Math.min((currentTime - startTime) / duration, 1);

            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, startTrigger, duration]);

    return count;
};


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
        value: "10000+",
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


const StatCard = ({ stat, isVisible }) => {
    const [ref] = useInView({ threshold: 0.3 });

    const getNumber = (value) => {
        const num = parseInt(value);
        return isNaN(num) ? 0 : num;
    };

    const animatedValue = useCountUp(
        getNumber(stat.value),
        isVisible,
        1200
    );

    const displayValue = stat.value.includes("+")
        ? `${animatedValue}+`
        : stat.value.includes("/")
            ? stat.value
            : animatedValue;

    return (
        <div
            ref={ref}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
        >
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-4xl font-black tracking-tight text-slate-900">
                        {displayValue}
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
    );
};


const Stats = () => {
    const [ref, isVisible] = useInView({ threshold: 0.3 });

    return (
        <section ref={ref} className="bg-blue-100 rounded-3xl p-8 my-14">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Trusted by Students Everywhere
                </h2>

                <p className="mt-3 text-slate-600">
                    Real numbers that show how StudyNook is helping students study better and book smarter.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                    <StatCard
                        key={stat.label}
                        stat={stat}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </section>
    );
};

export default Stats;