import Events from "./Events/Events";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import bg from "./assets/bg.jpg";
import { Music } from "./components/Music";


function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        fontFamily: "Oxanium",
      }}
    >
      <Music />
      <Header />
      {/* <MidSection /> */}
      <Events />
      <Footer />
    </div>
  );
}

export default App;
