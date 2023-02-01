import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FilteredPage from "./pages/FilteredPage/FilteredPage";
import AppStyled from "./AppStyled";

function App() {
  return (
    <AppStyled>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/:genre" element={<FilteredPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
