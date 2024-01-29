import Events from "./Events/Events";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import bg from "./assets/bg.jpg";
import { Music } from "./components/Music";
import "./App.css";
import Reg from "./Events/Reg";
import Sponsers from "./components/Sponsers";

function App() {
  return (
    <div
      className="parent"
      style={{
        backgroundImage: `url(${bg})`,
        fontFamily: "Oxanium",
      }}
    >
      <div className="cursor"></div>
      <Music />
      <Header />
      <MidSection />  
      <Events />
      <Reg />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default App;
