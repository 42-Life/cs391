"use client"

import {inputGroup} from "@/types";
import {useState} from "react";

export default function InfoDiv({props}:{props:inputGroup}) {

    const [input, setInput] = useState("");

    return(
        <div className="flex flex-col mx-4 align-items-center">
            <label htmlFor={props.id} className={`my-3 text-xl font-medium text-${props.textAlign}`}>{props.label}</label>
            <input
                type="text" id={props.id} size={props.boxLength}
                className={`border rounded p-2 bg-slate-600`}
                onChange={(e)=> setInput(e.target.value)}
            />
            <p>{input}</p>
        </div>
    );

}