import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import {TwoColumnLayout} from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
// import Main from "../primary-tags/Main.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import Title from "../ui/Title.tsx";


export default function Home() {
    return (
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <Title text={"Home"}></Title>
                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}