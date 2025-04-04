"use client"

import {ButtonStylingOut} from "@/components/get-user-info";
import Link from "next/link";
{/*  bg-red-200 bg-blue-200 bg-yellow-200 bg-green-200 bg-purple-200 bg-orange-200  */}

export default function BackButton() {

    return (
        // API RETURN GOES HERE
        <Link href={"/"}>
            <button
                type="button"
                className={ButtonStylingOut + `bg-blue-200`}
            >
                Pick Another Colour
            </button>
        </Link>
    );
}