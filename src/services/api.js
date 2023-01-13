import axios from "axios";

//URL base:  https://api.themoviedb.org/3/
//URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=aee2db7cca97382b141d3fba0e91bff3&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
