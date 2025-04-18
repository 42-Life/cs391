"use server";

import getCollection, {URL_COLLECTION} from "@/db";

export default async function getUrl(alias: string): Promise<string | null> {
    if (!alias) {
        return null;
    }

    const urlCollection = await getCollection(URL_COLLECTION);
    const data = await urlCollection.findOne({ alias });

    if (!data) {
        console.log("get url returned null")
        return null;
    }

    console.log("url in getUrl:", data.url);
    console.log("alias associated:", data.alias);
    return data.url;
}