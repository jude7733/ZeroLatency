import Events from "./Events/Events";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import bg from "./assets/bg.jpg";
import "./index.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        fontFamily: "Oxanium",
      }}
    >
      <Header />
      {/* <MidSection /> */}
      <Events />
    </div>
  );
}

export default App;
