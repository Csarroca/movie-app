import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FilteredPage from "./pages/FilteredPage/FilteredPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/genre/:genre" element={<FilteredPage />} />
      </Routes>
    </>
  );
}

export default App;
