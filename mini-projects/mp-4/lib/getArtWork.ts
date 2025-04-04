"use server"

export default async function getArtWork() {
    const API_KEY = process.env["HARVARD_API_KEY"];
    const API_URL = `https://api.harvardartmuseums.org/object/304070/?apikey=${API_KEY}`

    const response = await fetch(API_URL);
    const data = await response.json();

    return(
        data
    )
}