"use server"

import {urlInfo} from "@/types";

// dummy values -- replace with data retrieved from input fields
// alias & content URL retrieved from user entries to text fields
// aliasExists determined by testing data received (is null?)
// redirect URL is the constant `YOUR-APP.com/r/` + alias -- simple function for this
import {outputURL} from "@/types";
import {dummy} from "@/lib/dummy-pls-implement";

const alias : string|null = dummy();
// replace this with meaningful call (get data from alias field)
const contentURL : string = dummy();
// replace this with a DIFFERENT meaningful call (get data from URL field)
const aliasExists : boolean = (alias !== null);
// basically has the alias been retrieved successfully?
const redirectURL : string = aliasExists ? outputURL+alias : "/"
// redirect to homepage if alias doesn't exist
// (can replace this with something more interesting later)

export default async function addData():Promise<urlInfo> {

    // dummy, replace this also.
    // Will want to call a Mongo function to update database with new collection
    return {
        alias: alias,
        redirectURL : redirectURL,
        contentURL : contentURL,
        aliasExists : aliasExists,
    }

}