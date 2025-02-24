import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchMovies } from "../api"
import MediaCard from "../components/media_card/mediaCard";


function Movie() {
  const [jsonMovies, setJsonMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    fetchMovies()
    .then((response) => {setJsonMovies(response)})
    .catch((error) => {setErrorMsg(error)});
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 my-4 mx-8">
      {jsonMovies.map((movie) => (
          <MediaCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            img={movie.img}
            type={"movies"}
          />
      ))}
    </div>
  );
}

export default Movie;
