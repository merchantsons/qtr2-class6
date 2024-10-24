import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function Home() {
  return (
     <div className="w-screen h-[180vmin] bg-[#F3F3F3]">       
        <Navbar />
        <Body />
        <Footer />           
     </div>
  );
}
