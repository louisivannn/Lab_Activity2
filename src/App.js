import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Menu from "./Contents";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

export default App;
