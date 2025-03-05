import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import TwoColumnLayout from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Main from "../primary-tags/Main.tsx";
import Footer from "../primary-tags/Footer.tsx";

export default function Portfolio() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <Main props={{
                    pageTitle: "Portfolio",
                    subtitle: "Outside of my professional interest in computer science and information technology, I have a vested interest in photography. Samples of my artistic work can be found here.",
                    hasImage: false
                }}>
                </Main>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}