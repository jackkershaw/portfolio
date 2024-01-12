function Header({onHeaderClick}) {
    return (
        <>
        <header className="bg-ykb-500 text-white p-4 min-w-100">
        <navbar className="mx-10 container flex  justify-between items-center flex-col lg:flex-row sm:text-xl md:text-3xl">
              <h1 onClick={() => onHeaderClick('openingPage')} className="hover:text-ykb-50 active:text-ykb-200" >About</h1>
              <h1 onClick={() => onHeaderClick('coding')} className="hover:text-ykb-50 active:text-ykb-200" >Coding</h1>
              <h1 onClick={() => onHeaderClick('design')} className="hover:text-ykb-50 active:text-ykb-200" >Design</h1>
              <h1 onClick={() => onHeaderClick('videos')} className="hover:text-ykb-50 active:text-ykb-200" >Video</h1>
        </navbar>
      </header>
    </>
    )
}

export default Header;
