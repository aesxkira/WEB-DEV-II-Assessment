
function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="/" className="logo">
          watch.it
        </a>

        <nav className="navigation">
          <a href="#action">Action</a>
          <a href="#comedy">Comedy</a>
          <a href="#romance">Romance</a>
          <a href="#drama">Drama</a>
        </nav>

        <button className="search-button">
          SEARCH
        </button>

      </div>
    </header>
  );
}

export default Header;
