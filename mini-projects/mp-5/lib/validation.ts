"use server"

// REMEMBER:
// For links, allow HTTPS & HTTP, and allow links with subdomains
// Allow links with subdomains
// For alias, don't allow "?", "&", "=", "/"

// import {urlInfo} from "@/types";
//
// export async function validateAlias (alias: string|null) : Promise<boolean> {
//     return (
//         (alias != null) && (alias != "") &&
//         !(alias.includes("?")) && !(alias.includes("&"))
//         && !(alias.includes("=")) && !(alias.includes("/"))
//     );
// }
//
// export async function validateURL (url: string|null) : Promise<boolean> {
//     return (url != null) && (url != "");
// }
//
// export default async function validation({props}:{props:urlInfo}) : Promise<boolean> {
//     return await validateAlias(props.alias) && validateURL(props.url);
// }