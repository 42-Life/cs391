import styled from "styled-components";
import {courseRecord} from "../../types.ts";

const StyledTD = styled.td`
    padding: 0 1vw;
    text-align: left;
    font-size: calc(11px + 0.4vw);
`;


export default function TableRow({props}:{props:courseRecord}) {
    return(
        props.courseInfo.map(field =>
            <StyledTD>{field}</StyledTD>
        )
    );
}