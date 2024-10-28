import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <div>
                <img src={coverImg} alt={title} />
                <h2>
                    {/* react-router-dom의 Link는 페이지를 새로고침 하지 않고 URL을 이동해주는 도구. */}
                    <Link to="/movie">{title}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
                    {genres.map(g =>
                        <li key={g}>{g}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;