import {InOut, Input, InputDiv, Label} from "./InputAndOutput.tsx";
import {Button, ButtonDiv} from "./Button.tsx";


export default function CalculatorSkeleton() {
    return (
        <>
            <h4>Please enter two numbers, and select an operation</h4>

            <InputDiv>
                <InOut>
                    <Input
                        id={"num1"}
                        onChange={() => {}}
                    >
                    </Input>
                    <Label htmlFor="num1">First Number</Label>
                </InOut>
                <InOut>
                    <Input id={"num2"}></Input>
                    <Label htmlFor="num1">Second Number</Label>
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
        </>
    );
}