"use client"

import ActionBox from "@/components/action-box";
import {errorBG, goodBG} from "@/lib/text-styles";
import {condDisplayTypes, outputURL} from "@/types";
import Link from "next/link";
import {usePathname} from "next/navigation";

const subtitleStyle = `font-semibold underline underline-offset-3 mb-2`;

export default function CondDisplay({props}:{props:condDisplayTypes}){

    const path = outputURL.toString() + usePathname() + "alias-here"

    const badMessage =
        <div className={`text-center`}>
            <p className={subtitleStyle}>Alias or URL is invalid</p>
            <p>Please ensure URL is a valid link</p>
            <p>Please ensure alias is unique and non-empty</p>
        </div>

    const goodMessage =
        <div className={`text-center`}>
            <p className={subtitleStyle}>Here is your compact URL!</p>
            <Link href={"https://google.com"} className={`hover:underline hover:opacity-70 hover:text-green-300`}> {path} </Link>
            {/*  LINK IS A PLACEHOLDER FOR OUTPUT URL  */}
        </div>

    return(
        props.hide ?
            <></>
        :
        <ActionBox colorStyling={props.good ? goodBG : errorBG} addtl={`p-5 m-3`}>
            {props.good ? goodMessage : badMessage}
        </ActionBox>
    );
}