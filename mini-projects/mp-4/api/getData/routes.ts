// "use server"
//
// import {DFProps} from "@/types";
// import {NextResponse} from "next/server";
//
// export default async function getArtWork() {
//     const API_KEY = process.env["HARVARD_API_KEY"];
//     const API_URL = `https://api.harvardartmuseums.org/object/304070/?apikey=${API_KEY}`
//
//     const response = await fetch(API_URL);
//     const data = await response.json();
//
//
//     // const title:string = data.title;
//     // console.log("this is the title: "+ title);
//     // const primaryimageurl:string = data.primaryimageurl;
//     // console.log("title & link:" + JSON.stringify(data.title) + "and" + JSON.stringify(primaryimageurl));
//     // console.log(JSON.stringify(data));
//
//     // let title:string = "";
//     // let primaryimageurl:string = "";
//
//     // try {
//     //     console.log("Fetching Art");
//     //     const response = await fetch(API_URL);
//     //     console.log("Got Art");
//     //     const data = await response.json();
//     //     console.log("This is the data"+data);
//     //     title = data.title;
//     //     primaryimageurl = data.primaryimageurl;
//     //
//     //     if (primaryimageurl == "") {
//     //         console.log("No Primary Image URL");
//     //     }
//     //
//     //     if (title == "") {
//     //         console.log("No Title");
//     //     }
//     //
//     // } catch(e) {
//     //     console.log("Fetch error" + e);
//     // }
//
//     return(
//         response
//         // {
//         //     title,
//         //     primaryimageurl
//         // }
//     )
// }