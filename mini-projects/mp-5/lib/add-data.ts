"use server";
import getCollection, {URL_COLLECTION} from "@/db";
import {urlInfo} from "@/types";
import validation from "@/lib/validation";

export default async function addData(formData: FormData) : Promise<urlInfo|null> {
    const url = formData.get('url') as string;
    const alias = formData.get('alias') as string;

    // props needed for validation
    const urlProps : urlInfo = {
        url : url,
        alias: alias,
    }

    const areInputsValid = await validation(urlProps);

    const collection = await getCollection(URL_COLLECTION);
    console.log('got collection: ', collection);

    if (areInputsValid) {
        return await collection.insertOne({ url, alias })
            .then((result):urlInfo => {
                return {
                    id: result.insertedId.toHexString(),
                    alias: alias,
                    url: url};
            })
    }

    return null;

}

