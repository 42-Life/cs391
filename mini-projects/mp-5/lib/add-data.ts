"use server";
import getCollection, {URL_COLLECTION} from "@/db";
import {urlInfo} from "@/types";

export default async function addData(formData: FormData) {
    const url = formData.get('url') as string;
    const alias = formData.get('alias') as string;
    // const id = "";

    const collection = await getCollection(URL_COLLECTION);
    console.log('got collection: ', collection);
    return await collection.insertOne({ url, alias })
        .then((result):urlInfo => {
            return {
                id: result.insertedId.toHexString(),
                alias: alias,
                url: url};
        })
        // .catch((err) => {console.log(err)});

    // return [url, alias];
}

