import "./App.css";
import ContenedorTarjetas from "./componentes/ContenedorTarjetas/ContenedorTarjetas";
import Footer from "./componentes/Footer/Footer";
import Navbar from "./componentes/Navbar/Navbar";
import Login from "./componentes/Login/Login";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/tarjetas" element={<ContenedorTarjetas />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
