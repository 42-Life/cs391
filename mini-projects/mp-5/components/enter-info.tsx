import InfoDiv from "@/components/info-div";
import {inputGroup} from "@/types";

const propertiesURL:inputGroup = {
    label : "URL",
    id : "long-url"
}

const propertiesAlias : inputGroup = {
    label: "Alias",
    id : "alias"
}

export default function EnterInfo(){
    return (
        <div className="flex flex-row mb-4">
            <InfoDiv props={propertiesURL}/>
            <InfoDiv props={propertiesAlias}/>
        </div>
    );
}