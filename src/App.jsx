import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <MidSection />
    </div>
  );
}

export default App;
