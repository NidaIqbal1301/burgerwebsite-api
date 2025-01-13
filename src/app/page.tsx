import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Burger from "./components/Burger";
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";





export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Burger/>
      <Banner/>
      <ProductList/>
      <Menu/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>

    </div>
  );
}
