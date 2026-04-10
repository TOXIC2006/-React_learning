import axios from "axios";

const unsplashapiKey = import.meta.env.VITE_UNSPLASH_API
const pexelsapiKey = import.meta.env.VITE_PEXELS_API
const gifykey = import.meta.env.VITE_GIFEY_API

export async function fetchphotoes(query, page = 1, perpage = 20) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page: perpage },
        headers: {
            Authorization: `Client-ID ${unsplashapiKey}`
        }
    })


    return response.data
}

export async function fetchvideos(query, page = 1, perpage = 20) {
    const response = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page, per_page: perpage },
        headers: {
            Authorization: pexelsapiKey
        }
    })
    return response.data
}
// har website ke  liye  alag alag function banana padega aur param  headers hota hia
export async function fetchgifey(query, page = 1, perpage = 10) {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: { api_key: gifykey, q: query, limit: perpage, offset: (page - 1) * perpage },
    })
    return response.data
}