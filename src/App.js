import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, [2000]);

  // const [link, setLink] = useState("Home");

  // const heroRef = useRef();
  // const portfolioRef = useRef();

  // const heroRefScroll = () => heroRef.current.scrollIntoView();
  // const portfolioRefScroll = () => portfolioRef.current.scrollIntoView();

  // useEffect(() => {
  //   if (link === "Home") {
  //     heroRefScroll();
  //   } else if (link === "Portfolio") {
  //     portfolioRefScroll();
  //   }
  // }, [link]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <div className={`App flex flex-col gap-[0rem] items-center relative`}>
        {isLoading && (
          <div className="flex items-center justify-center h-full fixed bg-white w-full z-[1000]">
            <div className="loader"></div>
          </div>
        )}
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />
              }
            />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
