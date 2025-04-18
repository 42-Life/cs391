"use server"

// REMEMBER:
// For links, allow HTTPS & HTTP, and allow links with subdomains
// Allow links with subdomains
// For [alias], don't allow "?", "&", "=", "/"

import {urlInfo} from "@/types";
import getCollection, {URL_COLLECTION} from "@/db";

async function AliasUniqueCheck(alias: string|null) {
    if (!alias) return false;

    const collection = await getCollection(URL_COLLECTION);
    const urlData = await collection.findOne({ alias: alias });
    if (!urlData) console.log("alias already exists in collection. Alias: ", alias);

    return !urlData;
    // returns whether there exists a record with this alias
}

async function validateAlias (alias: string|null) {
    const isUnique = await AliasUniqueCheck(alias);
    console.log("is", alias, "unique?", isUnique);

    return (isUnique && !(alias === null || alias === undefined || alias.length === 0 || alias.includes(" ") ||
        alias.includes("?") || alias.includes("&") || alias.includes("=") || alias.includes("/")));
}

async function validateURL (url: string|null) {
    const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return ((url == null) || regex.test(url));
}

export default async function validation(props:urlInfo) {
    let isValidAlias: boolean;
    let isValidURL: boolean;

    try {
        isValidAlias = await validateAlias(props.alias);
    } catch (err) {
        isValidAlias = false;
        console.log("alias validation failed: ", err);
    }

    try {
        isValidURL = await validateURL(props.url);
    } catch (err) {
        isValidURL = false
        console.log("URL validation failed: ", err);
    }

    console.log("isValidURL: ", isValidURL);
    return (isValidAlias && isValidURL);
}