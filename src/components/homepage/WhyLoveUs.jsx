import {
    HiOutlineAcademicCap,
    HiOutlineCurrencyDollar,
    HiOutlineLightningBolt,
    HiOutlineBadgeCheck,
} from "react-icons/hi";

export default function WhyLoveUs() {

    const features = [
        {
            icon: <HiOutlineAcademicCap className="w-10 h-10" />,
            title: "Quiet Environment",
            description:
                "Carefully selected spaces designed for focus and productivity.",
        },
        {
            icon: <HiOutlineCurrencyDollar className="w-10 h-10" />,
            title: "Affordable Pricing",
            description:
                "Flexible hourly rates suitable for every student budget.",
        },
        {
            icon: <HiOutlineLightningBolt className="w-10 h-10" />,
            title: "Easy Booking",
            description:
                "Reserve your study room in just a few clicks.",
        },
        {
            icon: <HiOutlineBadgeCheck className="w-10 h-10" />,
            title: "Verified Listings",
            description:
                "Reliable room information from trusted contributors.",
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                        Why Choose StudyNook
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
                        Why Students Love Us
                    </h2>

                    <p className="mt-4 text-slate-600 text-lg">
                        Everything you need to find the perfect study space and stay
                        productive throughout your learning journey.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>


                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>


                <div className="mt-16 bg-linear-to-r from-indigo-600 to-blue-600 rounded-3xl px-8 py-10 text-center text-white">
                    <h3 className="text-2xl font-bold mb-3">
                        Thousands of students trust StudyNook
                    </h3>

                    <p className="max-w-2xl mx-auto text-blue-100">
                        Discover quiet, comfortable, and affordable study spaces that help
                        you stay focused and achieve your academic goals.
                    </p>
                </div>
            </div>
        </section>
    );
}
