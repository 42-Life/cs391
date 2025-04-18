// "use server"

// REMEMBER:
// For links, allow HTTPS & HTTP, and allow links with subdomains
// Allow links with subdomains
// For [alias], don't allow "?", "&", "=", "/"

import {urlInfo} from "@/types";

export function validateAlias (alias: string|null) {
    return (
        (alias != null) && (alias != "") &&
        !(alias.includes("?")) && !(alias.includes("&"))
        && !(alias.includes("=")) && !(alias.includes("/"))
    );
}

export function validateURL (url: string|null) {
    return (url != null) && (url != "");
}

export default function validation(props:urlInfo) {
    return (validateAlias(props.alias) && validateURL(props.url));
}