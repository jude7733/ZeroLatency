import { Music } from "./components/Music";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import Reg from "./Events/Reg";
import Sponsers from "./components/Sponsers";
import Footer from "./Footer/Footer";
import bg from "./assets/bg.jpg";
import ToastComponent from "./components/ToastComponent";

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
      <Reg />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default App;
