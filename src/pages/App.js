import { useEffect, useState } from "react";
import { fetchBanners, fetchFeaturedMedia } from "../api"
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
        const [bannersResponse, featuredMovies, featuredTvShows] = await Promise.all([
          fetchBanners(),
          fetchFeaturedMedia("movies", true),
          fetchFeaturedMedia("tvshows", true),
        ]);
        setJsonBanns(bannersResponse);
        setJsonMovies(featuredMovies);
        setJsonTvs(featuredTvShows);
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
        <Featured arrMedia={jsonMovies} type={"movies"}/>
      </div>
      <div className="my-8 mx-4">
        <Featured arrMedia={jsonTvs} type={"tvshows"}/>
      </div>
    </div>
  )}
}

export default App;
