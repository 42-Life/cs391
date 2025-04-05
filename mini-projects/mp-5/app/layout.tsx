import React from "react";
import {Work_Sans} from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const workSansFont = Work_Sans({
    subsets: ["latin"]
})

const bodyStyling = `w-full items-center p-0 pb-5 flex flex-col bg-slate-200`;

export default function RootLayout(
    {children,}:Readonly<{children: React.ReactNode;}>
){
    return (
        <html lang="en" className={workSansFont.className}>
            <body className={bodyStyling}>
                <Header />
                {children}
            </body>
        </html>
    );
}