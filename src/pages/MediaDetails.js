import { useEffect, useState } from "react";
import DetailsCard from "../components/details_card/DetailsCard";
import { fetchMovieId, fetchTvId } from "../api"
import { useParams } from "react-router";


function MediaDetails() {
  let {type, id} = useParams();
  const [jsonMedia, setJsonMedia] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    if(type === "movies"){
      fetchMovieId(id)
      .then((response) => {setJsonMedia(response)})
      .catch((error) => {setErrorMsg(error)});
    }else{
      fetchTvId(id)
      .then((response) => {setJsonMedia(response)})
      .catch((error) => {setErrorMsg(error)});
    }
  }, []);

  return (
    <div 
      className="min-h-[70vh]"
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
  );
}

export default MediaDetails;
