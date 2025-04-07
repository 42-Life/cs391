import {inputGroup} from "@/types";

export default function InfoDiv({props}:{props:inputGroup}) {
    return(
        <div className="flex flex-col mx-4 align-items-center">
            <label htmlFor={props.id} className="my-3 font-medium">{props.label}</label>
            <input type="text" id={props.id} className="border rounded p-2 bg-slate-600"/>
        </div>
    );

}