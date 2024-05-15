import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Reservation from "./Components/Reservation";
import About from "./Components/About";
import OnlineOrders from "./Components/OnlineOders";
import Login from "./Components/Login";
import Specials from "./Components/Specials";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/online-orders" element={<OnlineOrders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
