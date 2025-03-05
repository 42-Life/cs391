import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import TwoColumnLayout from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Main from "../primary-tags/Main.tsx";
import Footer from "../primary-tags/Footer.tsx";

export default function ProfExps() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <Main props={{
                    pageTitle: "Professional Experience",
                    subtitle: "Current and previous employment and corresponding responsibilities can be found here.",
                    hasImage: false
                }}>
                </Main>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}