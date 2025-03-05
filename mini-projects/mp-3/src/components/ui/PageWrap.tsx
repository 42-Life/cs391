import {NewMain} from "../primary-tags/NewMain.tsx";
import {StyledWrapper} from "./StyledWrapper.tsx";
import {TwoColumnLayout} from "./TwoColumnLayout.tsx";
import Header from "../primary-tags/Header.tsx";
import Footer from "../primary-tags/Footer";
import Nav from "../primary-tags/Nav";
// import TwoColumnLayout from "./TwoColumnLayout.tsx";


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