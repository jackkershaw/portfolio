import './App.css';
import Header from './header';
import Footer from './footer';
import OpeningPage from './opening-page';
import Videos from './videos';
import Design from './design';
import Coding from './coding';

function App() {
    return (
    <>
    <Header/>
    <div id="main-content">
    <OpeningPage/>
    <Videos/>
    <Design/>
    <Coding/>
    </div>
    <Footer/>
    </>
  );
}

export default App
