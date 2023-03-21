import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(movie);
  };
  const { id } = useParams();
  useEffect(() => {
    getMovie();
  }, []);
  return <div>
    <h1>Detail</h1>
    <h2>{movie.title_long}</h2>
    <img src={movie.large_cover_image}/>
    <h3>Rating: {movie.rating}</h3>
    <h3>Genres: </h3>
    <ul>
        {movie.genres.map((item,index)=><li key={index}>{item}</li>)}
    </ul>
    <p>{movie.description_intro}</p>

  </div>;
}
export default Detail;
