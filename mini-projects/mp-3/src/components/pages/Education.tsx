import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import {TwoColumnLayout} from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import Title from "../ui/Title.tsx";
import {TieredUL} from "../ui/TieredUL.tsx";
import {GroupedContent} from "../ui/GroupedContent.tsx";
import Subtitle from "../ui/Subtitle.tsx";
// import Subtitle from "../ui/Subtitle.tsx";

export default function Education() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <Title text={"Education"} />
                    <p>My educational background can be found here.</p>

                    <GroupedContent>
                        <Subtitle text={"Boston University"} />
                        <TieredUL props={{
                            listLevel1: ["Bachelor of Arts in Computer Science", "3.85 GPA (current)", "Set to graduate in May 2027", "Location: Boston, MA"],
                            listLevel2: []
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <Subtitle text={"American International School of Kingston"} />
                        <TieredUL props={{
                            listLevel1: ["International Baccalaureate Diploma", "4.3 GPA (cumulative)", "Graduated in May 2023", "Location: Kingston, Jamaica", "Subjects & IB Exam Scores"],
                            listLevel2: ["6 | Higher Level Art", "6 | Higher Level Economics", "7 | Higher Level English Language & Literature", "7 | Standard Level Math", "6 | Standard Level French", "5 | Standard Level Physics"]
                        }}></TieredUL>
                    </GroupedContent>

                    <GroupedContent>
                        <Subtitle text={"Campion College"}/>
                        <TieredUL props={{
                            listLevel1: ["Jamaican High School Diploma", "4.0 GPA (cumulative)", "Graduated in August 2021", "Location: Kingston, Jamaica", "Subjects & CSEC Exam Scores"],
                            listLevel2: ["1 | English Language", "1 | English Literature", "1 | Mathematics", "1 | French", "1 | Physics", "1 | Economics", "1 | Principles of Business", "1 | Information Technology"]
                        }}></TieredUL>
                    </GroupedContent>
                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}