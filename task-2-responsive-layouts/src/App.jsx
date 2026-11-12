
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import movies from "./movies";
import "./App.css";

function App() {
  return (
    <div className="website">
      <Header />

      <main className="movie-container">
        <div className="movie-layout">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              featured={index === 0}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
