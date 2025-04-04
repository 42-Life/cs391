"use client"

import {DFProps} from "@/types";
import Image from "next/image";

export default function DisplayArt({props}:{props: DFProps}) {
    return(
        <div>
            <h2>{props.title}</h2>
            <Image
                src={props.primaryimageurl}
                alt={props.title + ": Harvard Art Gallery"}
            />
        </div>
    );
}