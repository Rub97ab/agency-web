import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsnCondition from "./components/TermsnCondition";
 import Layout from "./Layout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy"  element={  <Layout> <PrivacyPolicy />   </Layout> } />
          <Route path="/terms-conditions"  element={  <Layout> <TermsnCondition />   </Layout> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;