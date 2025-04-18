import React from "react"

export type actionTypes = {
    children: React.ReactNode,
    colorStyling: string
    addtl?:string;
}

export type inputGroup = {
    id: string,
    label: string,
    boxLength?: number,
    textAlign: string,
    inputChild?: React.ReactNode,
    isAlias?: boolean,
    type: string,
}

export type urlInfo = {
    id?: string;
    alias : string,
    url : string,
    redirectURL? : string,
    aliasExists? : boolean,
}

export type condDisplayTypes = {
    hide : boolean,
    good : boolean,
    targetID : string,
    // message : React.ReactElement,
}

export const outputURL = "https://mp-5-ajani-hicklings-projects.vercel.app"