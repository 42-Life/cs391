"use client"

import BackButton from "@/components/back-button";
import Artwork from "@/components/artwork";
import {getKeyColor} from "@/getKeyColor";

export default function DisplayPage() {
    const colorToUse = getKeyColor()

    // temporary
    const imageURL = `https://ids.lib.harvard.edu/ids/view/46473675`;
    const altText = `test`;
    // temporary

    return (
        <div className="flex flex-col align-items-center">
            <Artwork color={colorToUse}/>
            <img
                src={imageURL} alt={altText}
                className="w-md h-md border-2 m-3"
            />
            {/*<DisplayPage/>*/}
            <BackButton />
        </div>
    );
}