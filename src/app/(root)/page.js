import Banner from "@/components/home/Banner";
import CustomProductsView from "@/components/home/CustomProductsView";
import Features from "@/components/home/Features";
import LastestProd from "@/components/home/LastestProd";
import PopularBrands from "@/components/home/PopularBrands";
import PopulerCategories from "@/components/home/PopularCategories";
import TopSelling from "@/components/home/TopSelling";
import TopViewed from "@/components/home/TopViewed";
import Upcoming from "@/components/home/Upcoming";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <PopularBrands />
      <TopSelling />
      <PopulerCategories />
      <LastestProd />
      <CustomProductsView />
      <Upcoming />
      <TopViewed />
      <Features />
    </div>
  );
}
