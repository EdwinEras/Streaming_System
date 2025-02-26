import axios from "axios";
const BASE_URL = "https://json-server-cepl.onrender.com";

export const fetchMovies = async () => {
    const movies = await axios.get(BASE_URL+"/movies")
    .then(response =>{return response.data})
    .catch(error => {return error});
    return movies;
}

export const fetchTvs = async () => {
    const tvs = await axios.get(BASE_URL+"/tvs")
    .then(response =>{return response.data})
    .catch(error => {return error});
    return tvs;
}

export const fetchBanners = async () => {
    const tvs = await axios.get(BASE_URL+"/banners")
    .then(response =>{return response.data})
    .catch(error => {return error});
    return tvs;
}

export const fetchMovieId = async (id) => {
    const MovieId = await axios.get(BASE_URL+`/movies/${id}`)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return MovieId;
}

export const fetchTvId = async (id) => {
    const TvId = await axios.get(BASE_URL+`/tvs/${id}`)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return TvId;
}