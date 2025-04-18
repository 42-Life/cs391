// "use server"

// REMEMBER:
// For links, allow HTTPS & HTTP, and allow links with subdomains
// Allow links with subdomains
// For [alias], don't allow "?", "&", "=", "/"

import {urlInfo} from "@/types";

function validateAlias (alias: string|null) {
    return !(alias === null || alias === undefined || alias.length === 0 || alias.includes(" ") ||
        alias.includes("?") || alias.includes("&") || alias.includes("=") || alias.includes("/"));

    // also check if alias is already in database
}

function validateURL (url: string|null) {
    const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return ((url == null) || regex.test(url));
}

export default function validation(props:urlInfo) {
    // console.log("URL was well-formed?", validateURL(props.url));
    // console.log("Alias was well-formed?", validateAlias(props.alias));
    // console.log("Validation returns:", validateAlias(props.alias) && validateURL(props.url));
    return (validateAlias(props.alias) && validateURL(props.url));
}