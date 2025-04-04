"use client"

import getArtWork from "@/lib/getArtWork";
import {useEffect, useState} from "react";
import {DFProps} from "@/types";
// text-blue-500 text-red-500 text-green-500 text-purple-500 text-orange-500 text-yellow-500

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

    return (
        <div>
            <h4 className={`text-2xl font-bold underline mb-5 text-blue-50`}>
                Behold, the artwork {artwork?.title}</h4>
            <img className={`border-2 w-auto h-auto`}
                src={artwork?.primaryimageurl}
                alt={artwork?.title + " : Harvard Art Gallery"}
            />
        </div>
    );
}