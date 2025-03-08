import styled from "styled-components";
import {SmallScreenWidth} from "../MediaQuery.tsx";

export const GroupedContent = styled.div`
    margin: 2vw 0;
    @media screen and (max-width: 768px) {
        //width: 40%;
        align-content: center;
    }
`

export const TextWrapper = styled.div`
    @media screen and (max-width: 768px) {
        width: 70%;
        align-content: center;
        background-color: red;
    }
`;

export const ImageHolder = styled.div`
    display: flex;
`;

export const StyledWrapper = styled.div`
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    width: 70%;
    height: 100%;
    margin: 0 auto;
    background-color: blanchedalmond;
    ${SmallScreenWidth};
`;

export const TableGroup = styled(GroupedContent)`
     display: flex;
     flex-direction: column;
     float: left;
     width: 50%;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;

export const TwoColumnLayout = styled.div`
    display: flex;
    flex-direction: row;
    
    ${SmallScreenWidth};
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TwoColumnsPortfolio = styled(TwoColumnLayout)`
    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;