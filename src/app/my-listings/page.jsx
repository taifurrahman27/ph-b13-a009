import MyListings from "@/components/MyListings";

export const metadata = {
    title: "My Listings",
};

const MyListingsPage = () => {
    return (
        <section className="min-h-screen bg-slate-50 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-900">
                        My Listings
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Manage all of your study room listings.
                    </p>
                </div>

                <MyListings />
            </div>
        </section>
    );
};

export default MyListingsPage;