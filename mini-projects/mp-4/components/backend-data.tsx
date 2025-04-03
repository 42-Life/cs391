'use server';

import { NextResponse } from "next/server";

// server-side function; Retrieves and returns API data

export default async function DataFetch() {
    const API_KEY = process.env.HARVARD_API_KEY;
    const API_URL = `https://api.harvardartmuseums.org/object/304069/colors?apikey=${API_KEY}`;

    try {
        const data = await fetch(API_URL);
        if (!data.ok) {
            return NextResponse.json({error: "Data fetch error" + data.statusText}, {status: data.status});
        }
        const dataClean = await data.json();
        return NextResponse.json(dataClean);
    }
    catch (error) {
        console.error("Error occurred: " + error);
    }
}

// export default async function DataFetch() {
//     async function GrabData() {
//         const API_KEY = process.env.HARVARD_API_KEY;
//         const API_URL_Object = `https://api.harvardartmuseums.org/object/304069/colors?apikey=${API_KEY}`
//         console.log("got this far");
//         const data = await fetch(API_URL_Object);
//         const dataClean = await data.json();
//         console.log("SUCCESS:" + dataClean);
//         console.log(dataClean);
//     }
//     GrabData()
//         .then(() => console.log("Got Museum Data"))
//         .catch((e) => console.error("Error in fetch:" + e));
//
//     return(
//         <p>{output}</p>
//     )
// }

