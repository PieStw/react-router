import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutus" element={<AboutUsPage />}></Route>
          <Route path="/postpage" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
