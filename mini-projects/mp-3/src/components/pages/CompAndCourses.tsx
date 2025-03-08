import Header from "../primary-tags/Header.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import {PageText, PageTitle, StyledSubtitle} from "../ui/StyledText.tsx";
import {TieredUL} from "../ui/TieredUL.tsx";
import TableHead from "../ui/TableHead.tsx";
import TableRow from "../ui/TableRow.tsx";
import {StyledWrapper, TableGroup, TwoColumnLayout} from "../ui/StyledDivs.tsx";

export default function CompAndCourses() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <PageTitle>Competencies & Coursework</PageTitle>
                    <PageText>Skills, competencies, and relevant university coursework can be found here.</PageText>

                    <StyledSubtitle>Computer Science Coursework</StyledSubtitle>
                    <table>
                        <tr>
                            <TableHead props={{headerWidth: 10, headerName: "Class#"}}></TableHead>
                            <TableHead props={{headerWidth: 40, headerName: "Course Name"}}></TableHead>
                            <TableHead props={{headerWidth: 50, headerName: "Skills Developed"}}></TableHead>
                        </tr>
                        <tr><TableRow props={{courseInfo: ["CS111", "Intro to Computer Science 1", "Python, Recursion"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["CS112", "Intro to Computer Science 2", "Java, ADTs, Search & Sort"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["CS131", "Combinatoric Structures", "Proof-writing, Program invariants"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["CS132", "Geometric Algorithms", "Linear algebra, Image processing"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["CS210", "Intro to Computer Systems", "C, Assembly, Computer Architecture"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["CS237", "Probability in Computing", "Visualisation, Randomised algorithms"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["CS320", "Concepts of PLs", "OCaml, Interpreter Design, PLs"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["CS391", "Web Application Development", "HTML, CSS, JavaScript, React, Node.js"]}}/></tr>
                    </table>

                    <StyledSubtitle>Elective Coursework</StyledSubtitle>
                    <table>
                        <tr>
                            <TableHead props={{headerWidth: 10, headerName: "Class#"}}></TableHead>
                            <TableHead props={{headerWidth: 40, headerName: "Course Name"}}></TableHead>
                            <TableHead props={{headerWidth: 50, headerName: "Potential Professional Benefit"}}></TableHead>
                        </tr>
                        <tr><TableRow props={{courseInfo: ["DS380", "Data, Society, and AI Ethics", "Ethical considerations in computing"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["LX250", "Intro to Linguistics", "Syntax, semantics and NLP application"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["WR153", "Every Life, A Story", "Storytelling and written communication"]}}/></tr>
                        <tr><TableRow props={{courseInfo: ["PH256", "Philosophy of Gender & Sexuality", "Argumentation, logic, and public speaking"]}}/></tr>
                    </table>
                    
                    <TwoColumnLayout>
                        <TableGroup>
                            <StyledSubtitle>Languages and Software</StyledSubtitle>
                            <TieredUL props={{
                                listLevel1: ["Python", "Java", "C", "OCaml", "HTML, CSS, JavaScript", "React & Node.js", "Adobe Photoshop & Lightroom", "Adobe InDesign & Illustrator"],
                                listLevel2: []
                            }}></TieredUL>
                        </TableGroup>

                        <TableGroup>
                            <StyledSubtitle>Soft Skills</StyledSubtitle>
                            <TieredUL props={{
                                listLevel1: ["Leadership", "Dedication", "Public Speaking", "Commitment to learning", "Communication & Writing"],
                                listLevel2: ["Written Communication", "Verbal Communication", "Technical Documentation"]
                            }}></TieredUL>
                        </TableGroup>
                    </TwoColumnLayout>
                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}
