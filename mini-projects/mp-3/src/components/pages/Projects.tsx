import Header from "../primary-tags/Header.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import {PageText, PageTitle, SmallHeading} from "../ui/StyledText.tsx";
import {StyledWrapper, TwoColumnLayout} from "../ui/StyledDivs.tsx";
import Calculator from "../calculator/Calculator.tsx";

export default function Projects() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <PageTitle>Projects</PageTitle>
                    <PageText>A functional JavaScript calculator can be found on this page.
                        It has been designed to resemble a face. Please try it out!</PageText>

                    <SmallHeading>Please enter two numbers, and select an operation</SmallHeading>
                    <Calculator/>
                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}