"use client"

import ActionBox from "@/components/action-box";
import {errorBG, goodBG} from "@/lib/text-styles";
import {condDisplayTypes, outputURL, urlInfo} from "@/types";
import Link from "next/link";
import {useEffect, useState} from "react";
import getLastData from "@/lib/get-last-data";

const subtitleStyle = `font-semibold underline underline-offset-3 mb-2`;

export default function CondDisplay({props}:{props:condDisplayTypes}){

    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");

    function setBoth(response:urlInfo) {
        setUrl(response.url);
        setAlias(response.alias);

    // DISPLAY
        console.log("most recent url: " + url);
        // console.log("alias: " + alias);
        // console.log("id:" + response.id);
    }

    // need to param getLastData with the ID of the most recently entered value
    useEffect(()=> {
        getLastData(props.targetID)
            .then(response => setBoth(response));
            // ADD HANDLING IN CASE RESPONSE IS NULL
    })

    const path = outputURL.toString() + "/" + alias

    const badMessage =
        <div className={`text-center`}>
            <p className={subtitleStyle}>Alias or URL is invalid</p>
            <p>Please ensure URL is a valid link</p>
            <p>Please ensure alias is unique and non-empty</p>
        </div>

    const goodMessage =
        <div className={`text-center`}>
            <p className={subtitleStyle}>Here is your compact URL!</p>
            <Link href={alias} className={`hover:underline hover:opacity-70 hover:text-green-300`}> {path} </Link>
            {/*  NEED TO BIND PATH TO INPUT URL NOW. FIX URL UNDEFINED  */}
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