import {TieredInfo} from "../../types.ts";
import {StyledLi} from "./StyledText.tsx";

export function TieredUL({props}:{props: TieredInfo}) {
    function generateListLevel1({props}:{props: TieredInfo}) {
        const schoolInfo = props.listLevel1;

        return(
            schoolInfo.map((info:string) =>
                <StyledLi>{info}</StyledLi>
            )
        );
    }

    function generateListLevel2({props}:{props: TieredInfo}) {
        const subs = props.listLevel2;

        return(
            subs.map((subject:string) =>
                <StyledLi>{subject}</StyledLi>
            )
        );
    }

    return(
        <ul>
            {generateListLevel1({props})}
            <ul>
                {generateListLevel2({props})}
            </ul>
        </ul>
    );
}