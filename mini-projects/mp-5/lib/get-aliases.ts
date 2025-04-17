import getCollection, {URL_COLLECTION} from "@/db";
import {urlInfo} from "@/types";

export default async function getAliases() : Promise<urlInfo[]> {
    const urlCollection = await getCollection(URL_COLLECTION);
    const data = await urlCollection.find().toArray();

    const urlRecords : urlInfo[] = data.map((p) => ({
        alias : p.alias.toHexString(),
        url : p.givenURL.toHexString(),
    }));

    return urlRecords.reverse();
}