"use client"

import getArtWork from "@/lib/getArtWork";
import {useEffect, useState} from "react";
import useSWR from "swr";
import {DFProps} from "@/types";

export default function Artwork() {

    const [artwork, setArtwork] = useState<DFProps>();

    useEffect(() => {

        async function getData(){
            const data=await getArtWork();
            // const whole=data.json();
            setArtwork(data);
        }

        getData()
            .then(() => console.log("okay"))
            .catch((e) => console.log("error during fetch" + e));
    }, []);

    // const {data, error} = useSWR(`/api/getData`, (url) =>
    //     fetch(url).then(res => res.json())
    // );

    // console.log("data: " + data);
    // console.log("error: " + error);

    // alt approach
    // let getData = async () => {
    //     const API_URL = 'harvard/';
    //     const response = await fetch(API_URL);
    //     const artwork = response.json();
    //     console.log(artwork);
    //
    //     return artwork;
    // }
    //
    // // async function getData():Promise<DFProps> {
    // //     const API_URL = 'harvard/';
    // //     const response = await fetch(API_URL);
    // //     const artwork = response.json();
    // //     console.log(artwork);
    // //
    // //     return artwork;
    // // }

    // const artwork = getData()
    //     .then((data) => {console.log("data fetched:" + JSON.stringify(data))})
    //     .catch((error) => {console.log(error)});

    // if(error) return(<h3>Error</h3>)

    return (
        <div>
            <h4>Behold, an artwork!</h4>
            <p>Title: {artwork?.title}</p>
            <img
                src={artwork?.primaryimageurl}
                alt={artwork?.title + " : Harvard Art Gallery"}
            />
        </div>
    );
}