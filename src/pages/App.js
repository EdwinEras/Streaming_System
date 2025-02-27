import Carousel from "../components/carousel/carousel";
import { useEffect, useState } from "react";
import { fetchBanners, fetchMovies, fetchTvs } from "../api"
import Featured from "../components/featured/featured";

function App() {
  const [jsonBanns, setJsonBanns] = useState([]);
  const [jsonMovies, setJsonMovies] = useState([]);
  const [jsonTvs, setJsonTvs] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    fetchBanners()
    .then((response) => {
      console.log(response);
      setJsonBanns(response)})
    .catch((error) => {setErrorMsg(error)});

    fetchMovies()
    .then((response) => {
      console.log(response);
      setJsonMovies(response)})
    .catch((error) => {setErrorMsg(error)});

    fetchTvs()
    .then((response) => {
      console.log(response);
      setJsonTvs(response)})
    .catch((error) => {setErrorMsg(error)});
  }, []);

 

  return (
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
  );
}

export default App;
