import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import {TwoColumnLayout} from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import Title from "../ui/Title.tsx";
import {GroupedContent} from "../ui/GroupedContent.tsx";
import Subtitle from "../ui/Subtitle.tsx";
import {TieredUL} from "../ui/TieredUL.tsx";

export default function EntrepAndOutreach() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <Title text={"Entrepreneurship & Outreach"}></Title>
                    <p>Developmental experiences and volunteer projects outside of employment can be found here.</p>

                    <GroupedContent>
                        <Subtitle text={"AH Photography"}/>
                        <TieredUL props={{
                            listLevel1: ["Exhibited artwork in galleries and exhibitions in Kingston, Jamaica and Boston, USA; wrote artist statements and descriptions of works.", "Photographed events, commercial product shoots, Airbnb & hotel shoots, and portrait shoots.", "Provided professionally edited photo packages to clients, curated to clients’ needs."], listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <Subtitle text={"AH Graphic Design"}/>
                        <TieredUL props={{
                            listLevel1: ["Produced documents for organisations and teams, inclusive of front cover and interior page designs.", "Adjusted draft designs, selected images, and created charts and diagrams.", "Wrote and edited existing written content to suit clients’ needs and preferences."], listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <Subtitle text={"Robotics Volunteer Work"}/>
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