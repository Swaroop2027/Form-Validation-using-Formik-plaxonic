import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
