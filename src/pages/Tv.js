import { useEffect, useState } from "react";
import { fetchTvs } from "../api"
import MediaCard from "../components/media_card/mediaCard";
import Loading from "../components/loading/Loading";

function Tv() {
  const [jsonTvs, setJsonTvs] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTvs()
    .then((response) => {setJsonTvs(response)})
    .catch((error) => {setErrorMsg(error)})
    .finally(setLoading(false));
  }, []);

  if(loading){return <Loading />}
  else{ return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 my-8 mx-8">
      {jsonTvs.map((tv) => (
          <MediaCard
            key={tv.id}
            id={tv.id}
            title={tv.title}
            year={tv.year}
            img={tv.img}
            type={"tvs"}
          />
      ))}
    </div>
  )}
}

export default Tv;
