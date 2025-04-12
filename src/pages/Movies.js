import { useEffect, useState } from "react";
import { fetchMediaByName, fetchMovies } from "../api"
import MediaCard from "../components/media_card/mediaCard";
import Loading from "../components/loading/Loading";

function Movie() {
  const [jsonMovies, setJsonMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchMovies()
    .then((response) => {setJsonMovies(response)})
    .catch((error) => {setErrorMsg(error)})
    .finally(setLoading(false));
  }, []);

  const filterMovies = async (name) =>{
    try{
      if(name){
        const listMovies = await fetchMediaByName(name);
        setJsonMovies(listMovies);
      }else{
        const listMovies = await fetchMovies();
        setJsonMovies(listMovies);
      }
    }catch(err){
      console.log(err);
    }
    
  }

  if(loading){return <Loading />}
  else{ return (
    <div>
      <div className="mt-16 container mx-auto">
      <input
        className="p-2 border-1 max-h-[38px] shadow-sm shadow-red bg-gray-300"
        placeholder="Search Movies"
        value={search} onChange={(e) => setSearch(e.target.value)}
      />
      <button 
      className="px-6 py-2 bg-red-800 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition duration-300"
      onClick={()=>{filterMovies(search)}}>
        Search
      </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-8 mx-8">
        {jsonMovies.map((movie) => (
          <MediaCard
            key={movie.id}
            id={movie.id}
            name={movie.name}
            rentPrice={movie.rentPrice}
            largePoster={movie.largePoster}
            type={"movies"}
          />
        ))}
      </div>
    </div>
  )}
}

export default Movie;
