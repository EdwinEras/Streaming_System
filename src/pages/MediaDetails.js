import { useEffect, useState } from "react";
import DetailsCard from "../components/details_card/DetailsCard";
import { fetchMediaId } from "../api"
import { useParams } from "react-router";
import Loading from "../components/loading/Loading";


function MediaDetails() {
  var { type, id } = useParams();
  const [jsonMedia, setJsonMedia] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMediaId(id)
    .then((response) => {setJsonMedia(response)})
    .catch((error) => {setErrorMsg(error)})
    .finally(setLoading(false));
    
  }, []);

  if(loading){return <Loading />}
  else{ return (
    <div 
      className="h-screen mt-8 mx-4"
      key={jsonMedia.id}>
        <DetailsCard
          objMedia={jsonMedia}
        />
    </div>
  )}
}

export default MediaDetails;
