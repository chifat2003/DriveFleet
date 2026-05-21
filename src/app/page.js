import Image from "next/image";
import Herobanner from "./component/home/hero";
import FeatureCars from "./component/home/featured-card";
import StatsCounter from "./component/home/stat";
import WhyChooseUs from "./component/home/whychoseus";


export default function Home() {
  return (
    <div className="bg-blue-50">
      <Herobanner></Herobanner>
      <h2 className="text-blue-600 text-3xl font-bold text-center my-3">Featured Cars</h2>
      <FeatureCars></FeatureCars>
      <StatsCounter></StatsCounter>
      <WhyChooseUs></WhyChooseUs>
    </div>
      
  );
}
