import styled from "styled-components";

const StyledHeader = styled.header`
    color: beige;
    display: flex;
    flex-direction: column;
    background-color: darkolivegreen;
    padding: 2vh 2vw;
`;

export default function Header() {
    return (
            <StyledHeader>
                <h1>Ajani Hickling</h1>
                <p>Welcome to my online resume</p>
            </StyledHeader>
    );
}