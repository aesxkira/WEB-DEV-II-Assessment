
function AlbumGallery() {
  return (
    <section className="album-gallery">
      <div className="featured-album">
        <img
          src="/assets/eulogy-for-evolution.jpg"
          alt="Featured album"
        />
      </div>

      <div className="album-grid">
        <img src="/assets/articulation.jpg" alt="Articulation album" />
        <img src="/assets/all-encores.jpg" alt="All Encores album" />
        <img src="/assets/encores-2.jpg" alt="Encores album" />
        <img src="/assets/the-cell.jpg" alt="The Cell album" />
      </div>
    </section>
  );
}

export default AlbumGallery;
