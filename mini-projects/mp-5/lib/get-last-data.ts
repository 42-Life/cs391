"use server";
import getCollection, {URL_COLLECTION} from "@/db";
import {urlInfo} from "@/types";
import {ObjectId} from "mongodb";

export default async function getLastData(lastId: string): Promise<urlInfo|null> {
    const urlID = ObjectId.createFromHexString(lastId);

    const collection = await getCollection(URL_COLLECTION);
    console.log('got collection: ', collection);
    const data = await collection.findOne({ _id: urlID });

    if (data === null) {
        return null;
    }

    return {
        id : lastId,
        alias : data.alias,
        givenURL : data.givenURL,
    };
}
