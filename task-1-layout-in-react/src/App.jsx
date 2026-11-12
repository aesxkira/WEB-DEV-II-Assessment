
import Header from "./components/Header";
import Article from "./components/Article";
import AlbumGallery from "./components/AlbumGallery";
import Author from "./components/Author";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="website">
      <Header />

      <main className="main-container">
        <Article />
        <AlbumGallery />
        <Author />
        <Comments />
      </main>

      <Footer />
    </div>
  );
}

export default App;
