import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div className={styles.container}>
      <Link to={`/movie/${id}`}>
        <img className={styles.poster} src={medium_cover_image} alt={title} />
      </Link>
      <h2 className={styles.title}>{title}</h2>
      <p>{summary.length > 150 ? `${summary.slice(0, 150)}` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
