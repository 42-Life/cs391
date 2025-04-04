"use server"

import {DFProps} from "@/types";

export default async function pullArtwork(
    title: string,
    primaryimageurl: string
):Promise<DFProps> {
    console.log("generating artwork");

    return {
        title: title,
        primaryimageurl: primaryimageurl
    }
}