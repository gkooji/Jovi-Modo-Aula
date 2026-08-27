import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Funcionalidades from "./pages/Funcionalidades";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
