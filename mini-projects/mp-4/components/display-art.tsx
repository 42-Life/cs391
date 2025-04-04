"use client"

import {DFProps} from "@/types";

export default function DisplayArt({props}:{props: DFProps}) {
    return(
        <div>
            <h2>{props.title}</h2>
            <img
                src={props.primaryimageurl}
                alt={props.title + ": Harvard Art Gallery"}
            />
        </div>
    );
}