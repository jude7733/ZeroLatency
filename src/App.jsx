import { Container } from "@radix-ui/themes";
import Header from "./Header/Header";

function App() {
  return (
    <Container p="0" style={{ backgroundImage: "url('/img/bg.jpg')" }}>
      <Header />
    </Container>
  );
}

export default App;
