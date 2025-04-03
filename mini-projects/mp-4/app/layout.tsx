"use client"

import React from "react";
import {Funnel_Display} from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import {getKeyColor} from "@/getKeyColor";
// import {textColorsLight} from "@/components/get-user-info";
{/*  bg-red-400 bg-blue-400 bg-yellow-400 bg-green-400 bg-purple-400 bg-orange-400  */}

const funnelFont = Funnel_Display({
    subsets: ["latin"]
});

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
) {

    const KeyColor = getKeyColor();

    const bodyStyle = `
        w-full items-center p-0 pb-5 flex flex-col bg-${KeyColor}-400
    `;


    return (
        <html lang="en" className={funnelFont.className}>
            <body className={bodyStyle}>
            <Header color={KeyColor} />
                {children}
            </body>
        </html>
    );
}