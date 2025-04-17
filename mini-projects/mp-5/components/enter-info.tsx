"use client"

import InfoDiv from "@/components/info-div";
import {inputGroup} from "@/types";
// import retrieveTextInput from "@/lib/retrieve-text-input";

const propertiesURL:inputGroup = {
    label : "URL",
    id : "long-url",
    boxLength : 55,
    textAlign: "left",
}

const propertiesAlias : inputGroup = {
    label: "Alias",
    id : "alias",
    boxLength : 55,
    textAlign: "left",
}

// export const enterInfo = () => {}

export default function EnterInfo(){
    return (
        <form className="flex flex-col mb-4">
            <InfoDiv props={propertiesURL}/>
            <InfoDiv props={propertiesAlias}/>
        </form>
    );
}