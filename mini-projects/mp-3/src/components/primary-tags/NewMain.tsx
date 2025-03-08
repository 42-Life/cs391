import styled from 'styled-components';
import {SmallScreenWidth} from "../MediaQuery.tsx";

export const NewMain = styled.main`
    width: 70%;
    padding: 1vh 1vw;
    flex: 75%;
    margin: 0 1vw;
    ${SmallScreenWidth};
    @media screen and (max-width: 768px) {
        height: 100vh;
        overflow-wrap: break-word;
        overflow-anchor: auto;
    }
`;