import React from "react";
import "./globals.css";
import Header from "@/components/header";

// fonts & styling
import {Work_Sans} from "next/font/google";
import {secondShade} from "@/lib/text-styles";
const bodyStyling = `w-full items-center p-0 pb-5 flex flex-col ${secondShade}`;
const workSansFont = Work_Sans({
    subsets: ["latin"]
})

export default function RootLayout(
    {children,}:
        Readonly<{children:React.ReactNode;}>
) {
    return(
        <html lang="en" className={workSansFont.className}>
            <body className={bodyStyling}>
                <Header/>
                {children}
            </body>
        </html>
    );
}