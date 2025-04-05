import React from "react";
import {actionTypes} from "@/types";
import {boxStyleOut} from "@/lib/text-styles";


export default function ActionBox({children, colorStyling, addtl}:Readonly<actionTypes>) {

    let moreStyle:string;
    if (!addtl) {
        moreStyle = "";
    } else {
        moreStyle = addtl;
    }

    return (
        <div className={boxStyleOut + `${colorStyling} ${moreStyle}`}>
            {children}
        </div>
    );
}