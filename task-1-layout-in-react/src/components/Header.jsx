
function Header() {
  return (
    <header className="site-header">
      <div className="header-logo">
        <img src="/assets/logo.svg" alt="Erased Tapes Records" />
      </div>

      <nav className="main-navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  );
}

export default Header;
