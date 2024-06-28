import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/Pages/HomePage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Reservation from "./Components/Pages/Reservation/Reservation";
import About from "./Components/Pages/About";
import OnlineOrders from "./Components/Pages/OnlineOders";
import Login from "./Components/Login";
import Specials from "./Components/Pages/Specials";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  // const handleHomeClick = () => {
  //   navigate("/");
  // };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage navigate={navigate} />} />
        <Route path="/menu" element={<Specials />} />
        <Route
          path="/reservation/*"
          element={<Reservation navigate={navigate} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/online-orders" element={<OnlineOrders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
