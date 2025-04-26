"use server"
import {signIn} from "@/lib/auth";

// runs on form submit
export async function login() {
    await signIn("github", {redirectTo: "/landing"});
}