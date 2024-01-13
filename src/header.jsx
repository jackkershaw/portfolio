function Header({onHeaderClick}) {
    return (
        <>
        <header className="bg-ykb-500 text-white min-w-100">
        <navbar className="mx-10 container flex justify-between items-center py-4 flex-col lg:flex-row sm:text-xl md:text-3xl">
              <h1 onClick={() => onHeaderClick('openingPage')} className="hover:text-ykb-50 active:text-ykb-200">Jack Kershaw</h1>
              <button  id="hamburger-button" class="relative h-8 w-8 cursor-pointer text-3xl md:hidden">&#9776;</button>
              <h1 onClick={() => onHeaderClick('coding')} className="hover:text-ykb-50 active:text-ykb-200" >Coding</h1>
              <h1 onClick={() => onHeaderClick('design')} className="hover:text-ykb-50 active:text-ykb-200" >Design</h1>
              <h1 onClick={() => onHeaderClick('videos')} className="hover:text-ykb-50 active:text-ykb-200" >Video</h1>
              <h1 onClick={() => onHeaderClick('contact')} className="hover:text-ykb-50 active:text-ykb-200" >Contact</h1>
        </navbar>
      </header>
    </>
    )
}

export default Header;
