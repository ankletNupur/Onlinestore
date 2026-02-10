import HeroSection from "./components/home/HeroSection";
import CategorySection from "./components/home/CategorySection";
import NewArrivals from "./components/home/NewArrival";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <NewArrivals />
    </div>
  );
}
