import { useEffect, useState } from "react";
import { fetchTvShows } from "../api"
import MediaCard from "../components/media_card/mediaCard";
import Loading from "../components/loading/Loading";

function Tv() {
  const [jsonTvs, setJsonTvs] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTvShows()
    .then((response) => {setJsonTvs(response)})
    .catch((error) => {setErrorMsg(error)})
    .finally(setLoading(false));
  }, []);

  if(loading){return <Loading />}
  else{ return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 my-8 mx-8">
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
  )}
}

export default Tv;
