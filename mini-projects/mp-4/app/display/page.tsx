"use client"

import BackButton from "@/components/back-button";
import Artwork from "@/components/artwork";
import {getKeyColor} from "@/getKeyColor";

export default function DisplayPage() {
    const colorToUse = getKeyColor()

    return (
        <>
            <Artwork color={colorToUse}/>
            <BackButton />
        </>
    );
}