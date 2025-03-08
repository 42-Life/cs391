import styled from 'styled-components';

export const InOut = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3vh 0.5vw;
    align-items: center;
`;

export const Label = styled.label`
    font-size: calc(11px + 0.4vw);
    margin: 0;
`;

export const Input = styled.input`
    border-radius: 15%;
    border-color: darkolivegreen;
    border-style: dashed;
    height: calc(10px + 4vw);
    width: calc(10px + 4vw);
    background-color: cornsilk;
    margin-bottom: 1vh;
`;