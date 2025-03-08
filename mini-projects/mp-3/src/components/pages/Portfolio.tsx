import Header from "../primary-tags/Header.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import {StyledWrapper, TwoColumnLayout, TableGroup} from "../ui/StyledDivs.tsx";
import {PortfolioImage} from "../ui/PortfolioImage.tsx";
import {PageTitle} from "../ui/StyledText.tsx";

export default function Portfolio() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <PageTitle>Portfolio</PageTitle>
                    <p>Outside of my professional interest in computer science and information technology, I have a vested interest in photography. Samples of my artistic work can be found here.</p>

                    <TwoColumnLayout>
                        <TableGroup>
                            <PortfolioImage src={"/green_photo.jpg"} alt={"Portfolio photo #1"}></PortfolioImage>
                            <PortfolioImage src={"/blue_photo_2.jpg"} alt={"Portfolio photo #2"}></PortfolioImage>
                        </TableGroup>
                        <TableGroup>
                            <PortfolioImage src={"/yellow_photo.jpg"} alt={"Portfolio photo #3"}></PortfolioImage>
                            <PortfolioImage src={"/yellow_photo_2.jpg"} alt={"Portfolio photo #4"}></PortfolioImage>
                        </TableGroup>
                    </TwoColumnLayout>

                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}