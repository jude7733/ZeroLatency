import Events from "./Events/Events";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import bg from "./assets/bg.jpg";
import { Music } from "./components/Music";
import "./App.css";


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
      {/* <MidSection /> */}
      <Events />
      <Footer />
    </div>
  );
}

export default App;
