"use client"

import {login} from "@/lib/login";
import {signInButtonStyle} from "@/lib/text-styles";

export default function LoginForm() {

    return(
        <form onSubmit={login}>
            <button
                className={signInButtonStyle}
                type="submit"
            >
                Please sign in to continue
            </button>
        </form>
    );
}