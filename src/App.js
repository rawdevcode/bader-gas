import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { Loading } from "./components";
import { Header, Main, Footer } from "./container";
import { dark } from "./styles/Theme";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <ThemeProvider theme={dark}>
        <AnimatePresence>{loaded ? null : <Loading />}</AnimatePresence>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
