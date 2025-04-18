"use server";
import getCollection, {URL_COLLECTION} from "@/db";
import {urlInfo} from "@/types";
import {ObjectId} from "mongodb";

let alias = "";
let url = "placeholder-url";
let id = "placeholder-id"

async function pullData(lastId: string): Promise<urlInfo|null> {
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
        url : data.url,
    };
}

// async function retrieveLastData() {
//     try {
//         const response = await pullData("6800ab25e2b6075d6900a39d");
//         console.log(response);
//         if (!(response === null)) {
//             console.log(response);
//             return response;
//         }
//         return null
//
//     } catch (error) {
//         console.log(error);
//     }
// }

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
        url = response2.url;
        alias = response2.alias;
        id = response2.id as string;
    }
    return ({alias: alias, url: url, id: id});
}