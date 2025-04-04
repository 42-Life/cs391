import {NewMain} from "../primary-tags/NewMain.tsx";
import {TwoColumnLayout, StyledWrapper} from "./StyledDivs.tsx";
import Header from "../primary-tags/Header.tsx";
import Footer from "../primary-tags/Footer";
import Nav from "../primary-tags/Nav";

export default function PageWrap() {
    return (
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain></NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}