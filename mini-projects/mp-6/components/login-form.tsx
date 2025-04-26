"use client"

import {login} from "@/lib/login";
import {signInButtonStyle} from "@/lib/text-styles";

export default function LoginForm() {

    return(
        <button
            className={signInButtonStyle}
            onClick={login}
            type="submit"
        >
            Sign in with your GitHub account to continue
        </button>
    );
}