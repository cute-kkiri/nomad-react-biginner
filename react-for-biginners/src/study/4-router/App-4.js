import { useState, useEffect } from "react";

// 영화 api 리스트 뿌려주기
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // 비동기 예전 방법
  /*  useEffect(() => {
     fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
       .then(response => response.json())
       .then(json => {
         // console.log(json);
         setMovies(json.data.movies);
         setLoading(false);
       });
   }, []); */
  // async await로 사용하는 방법
  const getMovies = async () => {
    // await하는 방법
    /* const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    const json = await response.json(); */
    // 또다른 await 방법
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies);
  return (
    <div>
      {loading ?
        <h1>Loading...</h1> :
        <div>{movies.map((movie) =>
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt="thumnail" />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(g =>
                <li key={g}>{g}</li>
              )}
            </ul>
          </div>
        )}
        </div>
      }
    </div>
  );
}

export default App;
