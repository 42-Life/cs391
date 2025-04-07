import React from "react"

export type actionTypes = {
    children: React.ReactNode,
    colorStyling: string
    addtl?:string;
}

export type inputGroup = {
    id: string,
    label: string,
}