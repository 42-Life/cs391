"use server"

import {DFProps} from "@/types";

export default async function getArtWork():Promise<DFProps> {
    const API_KEY = process.env["HARVARD_API_KEY "];
    const API_URL = `https://api.harvardartmuseums.org/object/304070/?apikey=${API_KEY}`

    let title:string = "";
    let primaryimageurl:string = "";

    try {
        console.log("Fetching Art");
        const response = await fetch(API_URL);
        console.log("Got Art");
        const data = await response.json();
        console.log("Got JSON");
        title = data.title;
        primaryimageurl = data.primaryimageurl;

    } catch(e) {
        console.log("Fetch error" + e);
    }

    return(
        {
            title,
            primaryimageurl
        }
    )
}