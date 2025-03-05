// import TextX from "./TextX.tsx";
import styled from "styled-components";

const StyledSubtitle = styled.h2`
    color: darkolivegreen;
    font-size: calc(14px + 0.5vw);
`
export default function Subtitle({text}: {text: string}) {
    return(
        <StyledSubtitle>
            {text}
        </StyledSubtitle>
    );
}