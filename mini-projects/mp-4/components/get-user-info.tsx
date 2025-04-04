// client side component : user enters the colour they want from a finite list
"use client"

import {useState, useEffect} from "react";
import Link from "next/link";

const color = "blue"
export const ButtonStyling = `w-96 rounded-x1 p-4 m-5 border-2 border-black-200 bg-${color.toLowerCase()}-200 rounded-xl`;
const inputStyle = `m-5 size-5`;
const colors: string[] = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"]
{/*  bg-red-800 bg-blue-800 bg-yellow-800 bg-green-800 bg-purple-800 bg-orange-800  */}
{/*  bg-red-200 bg-blue-200 bg-yellow-200 bg-green-200 bg-purple-200 bg-orange-200  */}

export default function GetUserInfo() {
    const [color, setColor] = useState<string>("blue");
    const ButtonStyling = `w-96 rounded-x1 p-4 m-5 border-2 border-black-200 bg-blue-200 rounded-xl`;

    return(
        <div className={ButtonStyling}>
            <h4 className={`text-lg underline underline-offset-3 m-2 text-blue-800`}>What is your favourite colour?</h4>
            <form className="flex flex-col">
                {colors.map(formColor => (
                    <div key={formColor}>
                        <input
                            type="radio" id={formColor}
                            name="color-select" className={inputStyle}
                            value={formColor}
                            onClick={() => console.log("last selection: "+formColor)}
                            onChange={(e) =>
                                    setColor(e.target.value)
                            }
                        />
                        <label htmlFor={formColor} className="text-md">{formColor}</label>
                    </div>
                ))}
                <Link href={{ pathname: '/display', query : {colorOut : color.toLowerCase()} }}
                      className={`bg-${color.toLowerCase()}-800 m-5 px-3 py-2 text-white rounded-full text-center`}>
                    Show me art!
                </Link>
            </form>
        </div>
    );
}