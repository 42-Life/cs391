import styled from "styled-components";

const PageTitle = styled.h2`
    margin: 1vw 0;
    font-size: calc(15px + 0.7vw);
`;

export default function Title({text}:{text: string}) {
    return (
        // <PageTitle>{props.mainTitle}</PageTitle>
        <PageTitle>{text}</PageTitle>
    );
}