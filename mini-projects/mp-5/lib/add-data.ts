"use server";
import getCollection, {URL_COLLECTION} from "@/db";

export default async function addData(formData: FormData) {
    const url = formData.get('url') as string;
    const alias = formData.get('alias') as string;

    const collection = await getCollection(URL_COLLECTION);
    console.log('got collection: ', collection);
    await collection.insertOne({ url, alias });
}

