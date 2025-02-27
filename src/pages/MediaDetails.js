import { useEffect, useState } from "react";
import DetailsCard from "../components/details_card/DetailsCard";
import { fetchMovieId, fetchTvId } from "../api"
import { useParams } from "react-router";
import Loading from "../components/loading/Loading";


function MediaDetails() {
  let {type, id} = useParams();
  const [jsonMedia, setJsonMedia] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if(type === "movies"){
      fetchMovieId(id)
      .then((response) => {setJsonMedia(response)})
      .catch((error) => {setErrorMsg(error)})
      .finally(setLoading(false));
    }else{
      fetchTvId(id)
      .then((response) => {setJsonMedia(response)})
      .catch((error) => {setErrorMsg(error)})
      .finally(setLoading(false));
    }
  }, []);

  if(loading){return <Loading />}
  else{ return (
    <div 
      className="h-screen mt-8 mx-4"
      key={jsonMedia.id}>
        <DetailsCard
          id={jsonMedia.id}
          title={jsonMedia.title}
          year={jsonMedia.year}
          genre={jsonMedia.genre}
          cast={jsonMedia.cast}
          synopsis={jsonMedia.synopsis}
          img={jsonMedia.img}
        />
    </div>
  )}
}

export default MediaDetails;
