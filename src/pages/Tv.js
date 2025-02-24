import { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router";
import { fetchTvs } from "../api"
import MediaCard from "../components/media_card/mediaCard";

function Tv() {
  const [jsonTvs, setJsonTvs] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    fetchTvs()
    .then((response) => {setJsonTvs(response)})
    .catch((error) => {setErrorMsg(error)});
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 my-4 mx-8">
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
  );
}

export default Tv;
