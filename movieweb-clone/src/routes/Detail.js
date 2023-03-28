import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

import {Link} from 'react-router-dom';
function Detail() {
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    
  };
  const { id } = useParams();
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Detail</h1>
      <h2>{movie.title_long}</h2>
      <h3>Rating: {movie.rating}</h3>
      <div className={styles.infoBox}>
        <img className={styles.poster} src={movie.large_cover_image} />
        <div>
          <p>Year: {movie.year}</p>
          <p>Genres: </p>
          <ul>
            {movie?.genres.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div>
            <h4>Watch this Movie!</h4>
            <Link to={movie.url}>
              <button className={styles.watchBtn}>▶Watch Now!</button>
            </Link>
          </div>
          <h4>Torrents</h4>
          <div>
            {movie.torrents.map((item,index) => (
              <Link to={item.url}><button className={styles.torrentBtn}>
                😀Link {index+1}</button></Link>
            ))}
          </div>
        </div>
      </div>
      <p>{movie.description_full}</p>
    </div>
  );
}
export default Detail;
