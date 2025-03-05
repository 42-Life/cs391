import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import {TwoColumnLayout} from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
// import {NewMain} from "../primary-tags/NewMain.tsx";
import Title from "../ui/Title.tsx";
import {GroupedContent} from "../ui/GroupedContent.tsx";
import Subtitle from "../ui/Subtitle.tsx";
import {TieredUL} from "../ui/TieredUL.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";

export default function ProfExps() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <Title text={"Professional Experience"}></Title>
                    <p>Current and previous employment and corresponding responsibilities can be found here.</p>

                    <GroupedContent>
                        <Subtitle text={"BU Today"}></Subtitle>
                        <TieredUL props={{
                            listLevel1: ["Photographed weekly events and beauty shots on BU campus, with rapid (<1-3 day) turnaround.", "Professionally edited images in Lightroom, and captioned images per photojournalism conventions.", "Communicated with subjects and points of contact regularly, and incorporated supervisor feedback."],
                            listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <Subtitle text={"Scarlet Safewalk"}></Subtitle>
                        <TieredUL props={{
                            listLevel1: ["Manned a table during night shifts alongside another team member", "Walked students home safely, conversing amicably with clients", "Answered phone calls and logged walk data regularly"],
                            listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <Subtitle text={"Halls of Learning"}></Subtitle>
                        <TieredUL props={{
                            listLevel1: ["Taught weekly robotics & coding classes to students aged 6-16.", "Curated and modified semester-long curricula and activities to suit students of varying proficiency.", "Led STEM courses during summer programmes, including sessions for underprivileged students."],
                            listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}