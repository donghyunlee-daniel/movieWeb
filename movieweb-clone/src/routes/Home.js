import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Header from "../components/Header";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=7.8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    
  };
  useEffect(() => {
    getMovies();
  }, []);
  
  return (
    <div className={styles.container}>
      <Header/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movie} >
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;