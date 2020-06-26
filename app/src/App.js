import React from 'react';
import logo from './logo.svg';
import Artist from "./components/Artist";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./css/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Artist />
      <Footer />
    </div>
  );
}

export default App;
