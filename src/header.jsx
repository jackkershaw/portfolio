import DarkMode from "./darkmode";


function Header({onHeaderClick}) {
    return (
        <>
        <header>
      <navbar id="navbar" className="text-white">
        <section id="navbar-text">
          <h1 onClick={() => onHeaderClick('openingPage')}>About</h1>
          <h1 onClick={() => onHeaderClick('coding')}>Coding</h1>
          <h1 onClick={() => onHeaderClick('design')}>Design</h1>
          <h1 onClick={() => onHeaderClick('videos')}>Video</h1>
          <DarkMode></DarkMode>
        </section>
      </navbar>
      </header>
    </>
    )
}

export default Header;
