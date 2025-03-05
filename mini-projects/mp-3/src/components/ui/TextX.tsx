import styled from "styled-components";
import {textSpecs} from "../../types.ts";

// Generalised text component, can render as h1, h2, p, etc to optimise SEO
// Also practice using props
// scalable font size, dependent on props. This is to be consistent with MP1 font sizing (which varied by heading type)

export default function TextX({props}: {props: textSpecs}) {

    const StyledText = styled.p`
        font-size: calc(${props.base}px + ${props.increment}vw);
    `
    return (
        <StyledText>{props.text}</StyledText>
    );
}