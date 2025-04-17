import addData from "@/lib/add-data";
import {medDarkBG} from "@/lib/text-styles";
import ActionBox from "./action-box";
import {inputGroup} from "@/types";
import InfoDiv from "@/components/info-div";

const propertiesURL:inputGroup = {
    label : "URL",
    id : "url",
    boxLength : 50,
    textAlign: "left",
    type: "url",
}

const propertiesAlias : inputGroup = {
    label: "Alias",
    id : "alias",
    boxLength : 50,
    textAlign: "left",
    type: "text",
}

export default function EnterInfo() {

    return (
        <form action={addData} className={`flex flex-col mb-4`}>
            <InfoDiv props={propertiesURL} />
            <InfoDiv props={propertiesAlias} />
            <ActionBox colorStyling={medDarkBG} addtl={`my-5 w-lg`}>
                <button type="submit" className={`m-5`}>
                    Shorten URL
                </button>
            </ActionBox>
        </form>
    );
}