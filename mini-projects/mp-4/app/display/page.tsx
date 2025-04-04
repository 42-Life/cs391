
import BackButton from "@/components/back-button";
import Artwork from "@/components/artwork";
// import getArtWork from "@/lib/getArtWork";
// import {getKeyColor} from "@/lib/getKeyColor";
// import Image from "next/image";

export default function DisplayPage() {
    // const colorToUse = getKeyColor()

    // temporary
    // const imageURL = `https://ids.lib.harvard.edu/ids/view/46473675`;
    // const altText = `test`;


    return (
        <div className="flex flex-col align-items-center">
            <Artwork/>
            {/*<DisplayPage/>*/}
            <BackButton />
        </div>
    );
}