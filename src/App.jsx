import { Music } from "./components/Music";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import Reg from "./Events/Reg";
import Sponsers from "./components/Sponsers";
import Footer from "./Footer/Footer";
import bg from "./assets/bg.jpg";
import ToastComponent from "./components/ToastComponent";
import Events from "./Events/Events";
import CarouselComponent from "./components/Carousel";
import Explore from "./components/Explore";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        fontFamily: "Oxanium",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Music />
      <ToastComponent />
      <Header />
      <MidSection />
      <Explore />
      <CarouselComponent />
      <Events />
      <Reg />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default App;
