import { useEffect, useState } from "react";
import { fetchBanners, fetchMovies, fetchTvs } from "../api"
import Featured from "../components/featured/featured";
import Loading from "../components/loading/Loading";
import Carousel from "../components/carousel/carousel";

function App() {
  const [jsonBanns, setJsonBanns] = useState([]);
  const [jsonMovies, setJsonMovies] = useState([]);
  const [jsonTvs, setJsonTvs] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [bannersResponse, moviesResponse, tvsResponse] = await Promise.all([
          fetchBanners(),
          fetchMovies(),
          fetchTvs(),
        ]);
  
        setJsonBanns(bannersResponse);
        setJsonMovies(moviesResponse);
        setJsonTvs(tvsResponse);
  
      } catch (error) {
        setErrorMsg(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if(loading){return <Loading />}
  else{ return (
    <div>
      <div className="my-8 mx-4">
        <Carousel banners={jsonBanns} autoSlide={true} />
      </div>
      <div className="my-8 mx-4">
        <Featured arrMedia={jsonMovies.splice(0,6)} type={"movies"}/>
      </div>
      <div className="my-8 mx-4">
        <Featured arrMedia={jsonTvs.splice(0,6)} type={"tvs"}/>
      </div>
    </div>
  )}
}

export default App;
