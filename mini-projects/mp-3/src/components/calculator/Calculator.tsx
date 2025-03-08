import {useState} from "react";
import {InOut, Input, InputDiv} from "./InputAndOutput.tsx";
import {Button, ButtonDiv} from "./Button.tsx";
import styled from "styled-components";

function power(x: number, y: number): number {
    let out = 1;
    if (y >= 0) {
        for (let i = 0; i < y; i++) {
            out *= x;
        }
    } else {
        for (let i = 0; i < (y*-1); i++) {
            out *= x;
        }
        out = 1/out;
    }
    return out;
}

export default function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [output, setOutput] = useState("");

    function Calculate(num1:number, num2:number, operation:string) {
        const x:number = Number(num1);
        const y:number = Number(num2);

        switch(operation) {
            case "+" :
                // return x + y;
                setOutput((x+y).toString());
                break;
            case "-" :
                // return x - y;
                setOutput((x-y).toString());
                break;
            case "*":
                setOutput((x*y).toString());
                break;
            case "/":
                y === 0 ? setOutput("Cannot divide by zero") : setOutput((x/y).toString());
                break;
            case "**" :
                setOutput(power(x,y).toString());
                break;
            case "clear" :
                setOutput("");
                setNum1("")
                setNum2("")
        }
    }

    function EitherEmpty(x:string,y:string):boolean {
        return (x === "" || y === "");
    }

    function Add() { return(Calculate(Number(num1), Number(num2), "+")); }
    function Sub() { return(Calculate(Number(num1), Number(num2), "-")); }
    function Mul() { return(Calculate(Number(num1), Number(num2), "*")); }
    function Div() { return(Calculate(Number(num1), Number(num2), "/")); }
    function Pow() { return(Calculate(Number(num1), Number(num2), "**")); }
    function Cls() { return(Calculate(Number(num1), Number(num2), "clear")); }

    const OutputArea = styled.h4`
        color: ${Number(output) < 0 ? "red" : "black"};
        align-self: center;
        font-size: calc(20px + 0.5vw);
    `;

    return(
        <>
        <InputDiv>
            <InOut>
                <Input
                    id={"num1"}
                    value={num1}
                    type={"number"}
                    onChange={(e) => {setNum1(e.target.value)}}
                />
            </InOut>
            <InOut>
                <Input
                    id={"num2"}
                    value={num2}
                    type={"number"}
                    onChange={(e) => {setNum2(e.target.value)}}
                />
            </InOut>
        </InputDiv>
            <ButtonDiv>
                <Button onClick={Add}>+</Button>
                <Button onClick={Sub}>-</Button>
                <Button onClick={Mul}>*</Button>
            </ButtonDiv>
            <ButtonDiv>
                <Button onClick={Div}>/</Button>
                <Button onClick={Pow}>**</Button>
            </ButtonDiv>
            <ButtonDiv>
                <Button onClick={Cls}>Clear</Button>
            </ButtonDiv>

            <InputDiv>
                {/* If either field is empty, no output number is shown*/}
                <OutputArea>{EitherEmpty(num1, num2) ? "" : output}</OutputArea>
            </InputDiv>
        </>
    );
}