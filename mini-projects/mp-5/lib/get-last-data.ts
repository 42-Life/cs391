"use server";
import getCollection, {URL_COLLECTION} from "@/db";
import {urlInfo} from "@/types";
import {ObjectId} from "mongodb";

async function pullData(lastId: string): Promise<urlInfo|null> {

    let data;
    const collection = await getCollection(URL_COLLECTION);
    console.log('got collection: ', collection);

    // Hex string must be 24 characters
    if (lastId.length !== 24) {
        return null;
    }

    try {
        const urlID = ObjectId.createFromHexString(lastId);
        data = await collection.findOne({ _id: urlID });
    } catch (error) {
        data = null;
        console.log("data error", error);
    }

    if (data === null) {
        return null;
    }

    return {
        id : lastId,
        alias : data.alias,
        url : data.url,
    };
}

export default async function getLastData(lastId: string):Promise<urlInfo> {
    let response2 = null;
    try {
        const response = await pullData(lastId);
        console.log(response);
        if (!(response === null)) {
            console.log(response);
            response2 = response;
        }

    } catch (error) {
        console.log(error);
    }

    // const response = await retrieveLastData();
    if (response2 !== null && response2 !== undefined) {
        return ({alias: response2.alias, url : response2.url, id: response2.id as string});
    }
    const alias = "";
    const url = "";
    const id = ""

    return ({alias: alias, url: url, id: id});
}