import Main from "../primary-tags/Main.tsx";
import Header from "../primary-tags/Header.tsx";
import Footer from "../primary-tags/Footer";
import Nav from "../primary-tags/Nav";
import TwoColumnLayout from "./TwoColumnLayout.tsx";
import {StyledWrapper} from "./StyledWrapper.tsx";

export default function PageWrap() {
    return (
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <Main props={{
                    pageTitle: "",
                    subtitle: "",
                    hasImage: false
                }}>
                </Main>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}