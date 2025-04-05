export default function EnterInfo(){

    // const fields : Record<string, string> = {
    //     "long-url":"URL",
    //     "alias":"Alias"
    // }
    // const items:string[] = [fields[0], fields[1]];

    // DRY ! --> TURN DIVS W/ LABELS AND INPUTS INTO COMPONENTS W PROPS
    // ALSO better style the input field

    return (
        <div className="flex flex-row mb-4">
            <div className="flex flex-col mx-4 align-items-center">
                <label htmlFor="long-url" className="my-3 font-medium">URL</label>
                <input type="text" id="long-url" className="border rounded p-2"/>
            </div>
            <div className="flex flex-col mx-4">
                <label htmlFor="alias" className="my-3 font-medium">Alias</label>
                <input type="text" id="alias" className="border rounded p-2"/>
            </div>
        </div>
    );
}