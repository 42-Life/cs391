import styled from "styled-components";

export const GroupedContent = styled.div`
    margin: 2vw 0;
`

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
`;

export const TableGroup = styled(GroupedContent)`
     display: flex;
     flex-direction: column;
     float: left;
     width: 50%;
`;

export const TwoColumnLayout = styled.div`
    display: flex;
    flex-direction: row;
`;
