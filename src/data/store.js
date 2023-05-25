import { reactive } from "vue";

export const store = reactive({
    keyApi: "aeb9f466c19d1b6c563187701f212a3e",
    urlApi: "https://api.themoviedb.org/3/search/movie?api_key=aeb9f466c19d1b6c563187701f212a3e&language=it_IT&query=",
    urlApiSerie: "https://api.themoviedb.org/3/search/tv?api_key=aeb9f466c19d1b6c563187701f212a3e&language=it_IT&query=",
    urlImg: "https://image.tmdb.org/t/p/w320",
    film: [],
    serieTv: []
})