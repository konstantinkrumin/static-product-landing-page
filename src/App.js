import React from "react";
import "./styles/main.scss";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
