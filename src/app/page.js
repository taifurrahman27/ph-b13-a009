import AvailableRooms from "@/components/homepage/AvailableRooms";
import AvailableRoomsSkeleton from "@/components/homepage/AvailableRoomsSkeleton";
import Banner from "@/components/homepage/Banner";
import HowItWorks from "@/components/homepage/HowItWorks";
import Stats from "@/components/homepage/Stats";
import WhyLoveUs from "@/components/homepage/WhyLoveUs";
import { Suspense } from "react";

export const metadata = {
  title: "StudyNook - Home",
};

export default function Home() {
  return (
    <div>

      <Banner />

      <Suspense fallback={<AvailableRoomsSkeleton />}>
        <AvailableRooms />
      </Suspense>

      <Stats />
      <WhyLoveUs />
      <HowItWorks />

    </div>
  );
}
