// User's post-login info is shown here
// Include : name, username, email address, profile photo

import {auth} from "@/lib/auth";
// import {redirect} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {primaryShade} from "@/lib/text-styles";

export default async function LandingPage(){

    const session= await auth();
    console.log("session:", session);

    // Return to home if no one has logged in
    if (!session?.user) {
        console.log("Not logged in; no session exists");
        // redirect("/");
        return(
            <div className="flex flex-col items-center justify-center m-20 gap-1">
                <p>Login was unsuccessful</p>
                <Link href={"/"} className={'text-purple-500 underline font-semibold'}>Return home</Link>
            </div>
        );
    } else {
        console.log("Login successful");

        // TODO: Add styling and formatting to name, email, image
        return (
            <div className={`flex flex-col items-center justify-center m-10`}>
                <h1 className={`font-semibold text-3xl`}>Welcome, {session?.user.name}</h1>
                <p className={`m-2 underline underline-offset-5`}>{session?.user.email}</p>
                <Image
                    src={session.user.image as string}
                    alt={session.user.name as string ?? "Profile image"}
                    width={400}
                    height={400}
                    className={`${primaryShade} p-3 m-10`}
                />
                {/* if session exists, user image and name should exist as strings (and not null or undefined) */}
                <Link href={"/"} className={'text-purple-500 hover:opacity-50 underline font-semibold'}>Return home</Link>
            </div>
        );
    }
}