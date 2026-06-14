import AvailableRooms from "@/components/homepage/AvailableRooms";
import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import WhyLoveUs from "@/components/homepage/WhyLoveUs";

export default function Home() {
  return (
    <div>

      <Banner />
      <AvailableRooms />
      <Stats />
      <WhyLoveUs />

    </div>
  );
}
