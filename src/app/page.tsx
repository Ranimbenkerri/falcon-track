import Hero from "@/components/hero/hero";
import Navbar from "@/components/Navbar/navbar";
import Services from "@/components/services/services";
import Agences from "@/components/agences/agences";
import Qualities from "@/components/qualities/qualities";
import Tarifs from "@/components/tarifs/tarifs";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/> 
        <Agences/>
        <Qualities/>
        <Tarifs/>
    </div>
  );
}