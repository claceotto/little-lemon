import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Reservation from "./Components/Reservation";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
