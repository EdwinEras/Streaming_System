/*
- Usefull preconfigured parameters and functions for HTTP requests
- Automatic transform when getting json data
- Automatic object data serialization multipart/form-data and x-www-form-urlencoded 
when posting json data
*/

import axios from "axios";
import dbjson from "./db.json";
const BASE_URL = "http://localhost:8080";
const BASE_URL2 = "https://movieapi-koqu.onrender.com";

export const fetchMovies = async () => {
    const movies = await axios.get(BASE_URL2+"/movies")
    .then(response =>{
        console.log(response);
        return response.data
    })
    .catch(error => {return error});
    console.log(movies);
    return movies;
}

export const fetchTvShows = async () => {
    const tvs = await axios.get(BASE_URL2+"/tvshows")
    .then(response =>{return response.data})
    .catch(error => {return error});
    return tvs;
}

export const fetchBanners = async () => {
    // const tvs = await axios.get(BASE_URL+"/banners")
    // .then(response =>{return response.data})
    // .catch(error => {return error});
    // return tvs;
    return dbjson.banners
}

export const fetchMediaByName = async (name) => {
    const media = await axios.get(BASE_URL2+`/medias/search?name=${name}`)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return media;
}

export const fetchFeaturedMedia = async (type, value) => {
    const media = await axios.get(BASE_URL+`/featured/${type}?featured=${value}`)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return media;
}

export const fetchMediaId = async (id) => {
    const media = await axios.get(BASE_URL2+`/media/${id}`)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return media;
}

export const createMedia = async (formData) => {
    const media = await axios.post(BASE_URL2+"/media/", formData)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return media;
}

export const updateMediaId = async (id, formData) => {
    const media = await axios.put(BASE_URL2+`/media/${id}`, formData)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return media;
}

export const deleteMediaId = async (id) => {
    const media = await axios.delete(BASE_URL2+`/media/${id}`)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return media;
}

