// App.js
import React, { useState } from 'react';
import Header from './header';
import OpeningPage from './opening-page';
import Videos from './videos';
import Design from './design';
import Coding from './coding-page/coding';
import Footer from './footer';

function App() {
  const [currentContent, setCurrentContent] = useState('openingPage');

  const handleHeaderClick = (content) => {
    setCurrentContent(content);
  };

  let contentToShow;

  switch (currentContent) {
    case 'videos':
      contentToShow = <Videos />;
      break;
    case 'design':
      contentToShow = <Design />;
      break;
    case 'coding':
      contentToShow = <Coding />;
      break;
    default:
      contentToShow = <OpeningPage />;
  }

  return (
    <>
      <Header onHeaderClick={handleHeaderClick} />
      <div id="main-content">{contentToShow}</div>
      <Footer />
    </>
  );
}

export default App;
