import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Contact from "./pages/Contact";

import Home from "./pages/Home";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route element={<Contact />} path="/contact" />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
