import React, { useState } from "react";
import "./App.css";
import Header from "./common/Header";
import OptionItem from "./Components/OptionItem";
import Footer from "./common/Footer";
import Delivery from "./pages/Delivery";
import DingingOut from "./pages/DingingOut";
import NightLife from "./pages/NightLife";

function App() {
  const [activePage, setActivePage] = useState("Delivery");

  const getPage = (page) => {
    switch (page) {
      case "Delivery":
        return <Delivery />;
        break;

      case "Dining":
        return <DingingOut />;
        break;

      case "NightLife":
        return <NightLife />;
        break;
    }
  };
  return (
    <div>
      <Header />
      <OptionItem activePage= {activePage}  setActivePage={setActivePage} />
      { getPage(activePage)}
      <Footer />
    </div>
  );
}

export default App;
