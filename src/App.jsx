// App.js
import React, { useState } from "react";
import Header from "./header";
import OpeningPage from "./opening-page";
import Design from "./design";
import Coding from "./coding-page/coding";
import Footer from "./footer";
import Contact from "./contact";

function App() {
  const [currentContent, setCurrentContent] = useState("openingPage");

  const handleHeaderClick = (content) => {
    setCurrentContent(content);
  };

  let contentToShow;

  switch (currentContent) {
    case "videos":
      contentToShow = <Videos />;
      break;
    case "design":
      contentToShow = <Design />;
      break;
    case "coding":
      contentToShow = <Coding />;
      break;
    case "contact":
      contentToShow = <Contact />;
      break;
    default:
      contentToShow = <OpeningPage />;
  }

  return (
    <div className="overflow-x-hidden">
      <Header onHeaderClick={handleHeaderClick} />
      <div id="main-content">{contentToShow}</div>
      <Footer />
    </div>
  );
}

export default App;
