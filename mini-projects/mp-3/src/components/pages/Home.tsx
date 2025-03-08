import Header from "../primary-tags/Header.tsx";
import Nav from "../primary-tags/Nav.tsx";
// import Main from "../primary-tags/Main.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import {GreenLink, PageTitle} from "../ui/StyledText.tsx";
import {StyledWrapper, TwoColumnLayout, ImageHolder} from "../ui/StyledDivs.tsx";
import {Image} from "../ui/Image.tsx";
// import Main from "../primary-tags/Main.tsx";

export default function Home() {
    return (
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <PageTitle>Home</PageTitle>
                    <ImageHolder>
                        <Image src={'/profile.jpg'} alt={'profile picture'}></Image>
                    </ImageHolder>

                    <p>My name is Ajani Hickling. I am a sophomore at Boston University, majoring in Computer Science.
                        This site hosts my online resume. You can explore the webpages linked to learn about my <GreenLink to={'/education'}>educational background</GreenLink>
                        , my <GreenLink to={'/prof-experiences'}>employment opportunities</GreenLink>,
                        my <GreenLink to={'/extra-experiences'}>experiences outside of school and work</GreenLink>
                        , and <GreenLink to={'/competencies-coursework'}>relevant skills and coursework</GreenLink>.
                    </p>
                    <p>The <GreenLink to={'/portfolio'}>Portfolio</GreenLink> page features my artistic work, and
                        the <GreenLink to={'/projects'}>Projects</GreenLink> page features a functioning calculator application.</p>
                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}