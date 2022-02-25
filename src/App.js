import './App.css';
import { useEffect, useState } from "react";
import Movie from './Componets/Movie';
import Filter from './Componets/Filter';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=426c4ee9c1c43f7b4343c8b5617f358f&language=en-US&page=1');
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <div className="popular-movies">
        {popular.map(movie => {
          return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
    </div>
  );
}

export default App;
