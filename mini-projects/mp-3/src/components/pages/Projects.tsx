import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import {TwoColumnLayout} from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import Title from "../ui/Title.tsx";

export default function Projects() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <Title text={"Projects"}></Title>
                    <p>A functional JavaScript calculator can be found on this page.</p>
                    <p>Please try it out!</p>
                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}