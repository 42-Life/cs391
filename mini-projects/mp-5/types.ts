import React from "react"

export type actionTypes = {
    children: React.ReactNode,
    colorStyling: string
    addtl?:string;
}

export type inputGroup = {
    id: string,
    label: string,
    boxLength: number,
    textAlign: string,
}

export type urlInfo = {
    alias : string|null,
    redirectURL : string,
    contentURL : string,
    aliasExists : boolean,
}

export type condDisplayTypes = {
    hide : boolean,
    good : boolean,
    // message : React.ReactElement,
}

export const outputURL = "https://mp-5-ajani-hicklings-projects.vercel.app"