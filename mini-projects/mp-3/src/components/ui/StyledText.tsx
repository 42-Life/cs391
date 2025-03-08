import styled from "styled-components";
import {Link} from "react-router-dom";
import {SmallScreenTextStyling} from "../MediaQuery.tsx";

export const GreenLink = styled(Link)`
    text-decoration: none;
    color: darkolivegreen;
`;

export const PageText = styled.p`
    margin-bottom: 1vw;
    padding-top: 0.5vh;
    font-size: calc(11px + 0.4vw);
    ${SmallScreenTextStyling};
`;

export const PageTitle = styled.h1`
    margin: 1vw 0;
    font-size: calc(15px + 0.7vw);
    ${SmallScreenTextStyling};
`;

export const StyledSubtitle = styled.h2`
    color: darkolivegreen;
    font-size: calc(12px + 0.8vw);
    ${SmallScreenTextStyling};
`

export const SmallHeading = styled.h4`
    margin: 2vw 0 0;
    font-size: calc(10px + 0.8vw);
    ${SmallScreenTextStyling};
`;

export const StyledLabel = styled.label`
    font-size: calc(9px + 0.5vw);
`;

export const StyledLi = styled.li`
    margin-bottom: 0.5vw;
    padding-top: 0.5vh;
    font-size: calc(11px + 0.4vw);
    ${SmallScreenTextStyling};
`;
