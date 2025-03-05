import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    padding: 1vh 1vw;
    background-color: darkolivegreen;
`;

const StyledPara = styled.p`
    font-size: calc(11px + 0.4vw);
    color: beige;
`;

const StyledLink = styled(Link)`
    color: beige;
    text-decoration: underline;
`;

export default function Footer() {
    return(
        <StyledFooter>
            <StyledPara>All Rights Reserved by Ajani Hickling <StyledLink to={'/'}>Credits</StyledLink> ©</StyledPara>
        </StyledFooter>

    );
}