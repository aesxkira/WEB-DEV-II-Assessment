
function Footer() {
  return (
    <footer className="site-footer" id="story">
      <nav className="footer-navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>

      <p>Copyright © 2023 Erased Disks Ltd.</p>

      <div className="footer-socials">
        <img src="/assets/facebook-icon.png" alt="Facebook" />
        <img src="/assets/instagram-icon.svg" alt="Instagram" />
        <img src="/assets/twitter-icon.svg" alt="Twitter" />
      </div>
    </footer>
  );
}

export default Footer;
