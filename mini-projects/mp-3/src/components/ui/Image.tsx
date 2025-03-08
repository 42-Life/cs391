import styled from "styled-components";

export const Image = styled.img`
    max-width: 100%;
    width: 50%;
    height: 50%;
    margin: 1.5vw auto;
    align-self: center;
    border: 5px solid darkslategrey;
`;

export const PortfolioImage = styled(Image)`
    width: 70%;
    margin: 1vw 1vh;
`;