import {TieredInfo} from "../../types.ts";

function generateListLevel1({props}:{props: TieredInfo}) {
    const schoolInfo = props.listLevel1;

    return(
        schoolInfo.map((info:string) =>
            <li>{info}</li>
        )
    );
}

function generateListLevel2({props}:{props: TieredInfo}) {
    const subs = props.listLevel2;

    return(
        subs.map((subject:string) =>
            <li>{subject}</li>
        )
    );
}

export function TieredUL({props}:{props: TieredInfo}) {
    return(
        <ul>
            {generateListLevel1({props})}
            <ul>
                {generateListLevel2({props})}
            </ul>
        </ul>
    );
}