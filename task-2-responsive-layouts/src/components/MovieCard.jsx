
function MovieCard({ movie, featured = false }) {
  return (
    <article className={`movie-card ${featured ? "featured" : ""}`}>

      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} />
      </div>

      <div className="movie-details">

        <h2>{movie.title}</h2>

        <p>{movie.description}</p>

        <button className="watch-button">
          WATCH NOW
        </button>

      </div>

    </article>
  );
}

export default MovieCard;
