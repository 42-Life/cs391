import Header from "../primary-tags/Header.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import {TieredUL} from "../ui/TieredUL.tsx";
import {StyledWrapper, TwoColumnLayout, GroupedContent} from "../ui/StyledDivs.tsx";
import {PageTitle, StyledSubtitle} from "../ui/StyledText.tsx";

export default function EntrepAndOutreach() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <PageTitle>Entrepreneurship & Outreach</PageTitle>
                    <p>Developmental experiences and volunteer projects outside of employment can be found here.</p>

                    <GroupedContent>
                        <StyledSubtitle>AH Photography</StyledSubtitle>
                        <TieredUL props={{
                            listLevel1: ["Exhibited artwork in galleries and exhibitions in Kingston, Jamaica and Boston, USA; wrote artist statements and descriptions of works.", "Photographed events, commercial product shoots, Airbnb & hotel shoots, and portrait shoots.", "Provided professionally edited photo packages to clients, curated to clients’ needs."], listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <StyledSubtitle>AH Graphic Design</StyledSubtitle>
                        <TieredUL props={{
                            listLevel1: ["Produced documents for organisations and teams, inclusive of front cover and interior page designs.", "Adjusted draft designs, selected images, and created charts and diagrams.", "Wrote and edited existing written content to suit clients’ needs and preferences."], listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <StyledSubtitle>Robotics Volunteer Work</StyledSubtitle>
                        <TieredUL props={{
                            listLevel1: ["Planned and successfully implemented Jamaica’s first national elementary school level robotics competition for two consecutive years, in collaboration with an executive board.", "Provided consistent on-call virtual support and on-site STEM training (engineering, robot design and programming) to students and coaches in twenty-two elementary schools across the country.", "Planned and led capacity development and technical training workshops for teachers and principals.", "Led a team of outreach facilitators and trained volunteers in robotics programming."], listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>
                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>

    );
}