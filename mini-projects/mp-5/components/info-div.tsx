import {inputGroup} from "@/types";

export default function InfoDiv({props}:{props:inputGroup}) {

    return(
        <div className="flex flex-col mx-4 align-items-center">
            <label htmlFor={props.id} className={`my-3 text-xl font-medium text-${props.textAlign}`}>{props.label}</label>
            <input
                id={props.id} name={props.id}
                placeholder={`Enter ${props.label}`}
                size={props.boxLength} type={props.type}
                className={`border rounded p-2 bg-slate-600`}
            />
        </div>
    );

}