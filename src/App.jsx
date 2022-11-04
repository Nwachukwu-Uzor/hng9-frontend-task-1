import React from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import Links from "./components/Links";
import Logos from "./components/Logos";

const App = () => {
  return (
    <main>
      <Header />
      <Links />
      <Logos />
      <Footer />
    </main>
  );
};

export default App;
