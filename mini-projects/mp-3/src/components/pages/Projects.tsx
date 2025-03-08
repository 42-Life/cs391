import {StyledWrapper} from "../ui/StyledWrapper.tsx";
import Header from "../primary-tags/Header.tsx";
import {TwoColumnLayout} from "../ui/TwoColumnLayout.tsx";
import Nav from "../primary-tags/Nav.tsx";
import Footer from "../primary-tags/Footer.tsx";
import {NewMain} from "../primary-tags/NewMain.tsx";
import Title from "../ui/Title.tsx";
import {InOut, Input, Label} from "../calculator/InOut.tsx";
import {Button} from "../calculator/Button.tsx";
import {ButtonDiv} from "../calculator/ButtonDiv.tsx";
import {InputDiv} from "../calculator/InputDiv.tsx";

export default function Projects() {
    return(
        <StyledWrapper>
            <Header/>
            <TwoColumnLayout>
                <Nav></Nav>
                <NewMain>
                    <Title text={"Projects"}></Title>
                    <p>A functional JavaScript calculator can be found on this page.</p>
                    <p>Please try it out!</p>

                    <h4>Please enter two numbers, and select an operation</h4>

                    <InputDiv>
                        <InOut>
                            <Input id={"num1"}></Input>
                            <Label htmlFor="num1">Num1</Label>
                        </InOut>
                        <InOut>
                            <Input id={"num2"}></Input>
                            <Label htmlFor="num1">Num2</Label>
                        </InOut>
                    </InputDiv>

                    <ButtonDiv>
                        <Button>+</Button>
                        <Button>-</Button>
                    </ButtonDiv>
                    <ButtonDiv>
                        <Button>/</Button>
                        <Button>**</Button>
                    </ButtonDiv>
                    <ButtonDiv>
                        <Button>Clear</Button>
                    </ButtonDiv>

                </NewMain>
            </TwoColumnLayout>
            <Footer/>
        </StyledWrapper>
    );
}