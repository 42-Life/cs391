import styled from "styled-components";
import {Link} from "react-router-dom";
import {SmallScreenWidth} from "../MediaQuery.tsx";

const StyledNav = styled.nav`
    width: 100%;
    height: 100vh;
    background-color: burlywood;
    flex: 25%;
    align-items: stretch;
    ${SmallScreenWidth};

    @media screen and (max-width: 768px) {
        border-top: 0.25vw solid black;
        border-bottom: 0.25vw solid black;
        word-wrap: break-word;
    }
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 1vw 0 0;
    //background-color: red;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
    }
`;

const NavLi=styled.li`
    list-style: none;
    padding: 3vh 2vw;
    font-size: calc(10px + 0.5vw);
    overflow-wrap: break-word;

    @media screen and (max-width: 768px) {
        text-align: center;
        border-left: 0.25vw solid black;
        align-content: center;
        padding: 2vh 1vw;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: darkslategrey;
`;

const Sidebar = styled.div`
    background-color: burlywood;
    
    @media screen and (max-width: 768px) {
        background-color: white;
        display: flex;
        flex-direction: column;
    }
`;

export default function Nav() {
    return (
        <Sidebar>
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
        </Sidebar>
    );
}

// Main was always #column-right. Nav was always #column-left