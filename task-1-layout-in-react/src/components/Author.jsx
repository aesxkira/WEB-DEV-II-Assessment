
function Author() {
  return (
    <section className="author-section" id="artists">
      <div className="author-description">
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc.
          Lobortis eleifend a nam sit turpis nostra.
          Tempus suspendisse libero curae faucibus lobortis
          litora bibendum praesent! Eget quam magna,
          diam commodo interdum sapien magnis.
        </p>
      </div>

      <div className="author-photo">
        <img
          src="/assets/profile_picture.jpg"
          alt="Article author"
        />
      </div>

      <div className="author-socials">
        <a href="#facebook" aria-label="Facebook">
          <img src="/assets/facebook-icon.png" alt="" />
        </a>
        <a href="#instagram" aria-label="Instagram">
          <img src="/assets/instagram-icon.svg" alt="" />
        </a>
        <a href="#twitter" aria-label="Twitter">
          <img src="/assets/twitter-icon.svg" alt="" />
        </a>
      </div>
    </section>
  );
}

export default Author;
