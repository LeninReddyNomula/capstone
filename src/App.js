import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import BookingPage from "./pages/bookingPage";
import About from "./components/about";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import ConfirmationPage from "./pages/confirmationPage";
import Navgation from "./pages/mobile/navigation";
import MobileMenu from "./pages/mobile/mobileMenu";
import "./styles/main.css";

function App() {
  const [isBiggerScreen, setIsBiggerScreen] = useState(
    window.innerWidth > 800 ? true : false
  );

  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      let windowWidth = window.innerWidth;
      windowWidth > 800 ? setIsBiggerScreen(true) : setIsBiggerScreen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        <Route path="/mobile" element={<MobileMenu />}></Route>
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
