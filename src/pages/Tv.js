import { useEffect, useState } from "react";
import { fetchTvShows } from "../api";
import MediaCard from "../components/media_card/mediaCard";
import Loading from "../components/loading/Loading";
import { fetchMediaByName } from "../api";

function Tv() {
  const [jsonTvs, setJsonTvs] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchTvShows()
      .then((response) => {
        setJsonTvs(response);
      })
      .catch((error) => {
        setErrorMsg(error);
      })
      .finally(setLoading(false));
  }, []);

  const filterShows = async (name) =>{
    try{
      if(name){
        const listShows = await fetchMediaByName(name);
        setJsonTvs(listShows);
      }else{
        const listShows = await fetchTvShows();
        setJsonTvs(listShows);
      }
    }catch(err){
      console.log(err);
    }
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
         <div className="mt-16 container mx-auto">
         <input
          className="p-2 border-1 max-h-[38px] shadow-sm shadow-red bg-gray-300"
          placeholder="Search Tv Shows"
          value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <button 
        className="px-6 py-2 bg-red-800 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition duration-300"
        onClick={()=>{filterShows(search)}}>
          Search
        </button>
         </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-8 mx-8">
          {jsonTvs.map((tvs) => (
            <MediaCard
              key={tvs.id}
              id={tvs.id}
              name={tvs.name}
              rentPrice={tvs.rentPrice}
              largePoster={tvs.largePoster}
              type={"movies"}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Tv;
