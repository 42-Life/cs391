import styled from "styled-components";
import {TableHeadData} from "../../types.ts";

export default function TableHead({props}:{props:TableHeadData}) {
    const StyledTH = styled.th`
        width: ${props.headerWidth}%;
        padding: 0 1vw;
        text-align: left;
    `;

    return(
        <StyledTH>{props.headerName}</StyledTH>
    );
}