import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
    width: 100%;
    height: 100vh;
    background-color: burlywood;

    // Column left
    flex: 25%;
    align-items: stretch;
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 1vh 0 0;
`;

const NavLi=styled.li`
    list-style: none;
    padding: 1.5vh 2vw;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: darkslategrey;
`;

export default function Nav() {
    return (
        <StyledNav>
            <NavUl>
                <NavLi>
                    <NavLink to="/">Home</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to="/education">Education</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to="/prof-experiences">Professional Experiences</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to="/extra-experiences">Entrepreneurship & Outreach</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to="/competencies-coursework">Competencies & Coursework</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to="/projects">Projects</NavLink>
                </NavLi>
            </NavUl>
        </StyledNav>
    );
}

// Main was always #column-right. Nav was always #column-left