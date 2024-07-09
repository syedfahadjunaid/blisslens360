import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col gap-[1rem] items-center">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/portfolio" Component={Portfolio} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
