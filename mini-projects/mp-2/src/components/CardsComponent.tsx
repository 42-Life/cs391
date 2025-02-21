import styled from "styled-components";
// import CardsDisplay from "./CardsDisplay.tsx";
import { Card } from "../types.ts";

const CardDisplayDiv = styled.div`
    /* CSS styling for Cards Preview Div goes here */
    display: flex;
    flex-direction: column;
`;


export default function CardsComponent(props ) {
    return (
        <>
            {
                props.cns.map((c:Card, i:number) =>
                    <CardDisplayDiv key={i}>
                        <h2>{c.suit}</h2>
                        <img src={c.image} alt={c.suit}/>
                    </CardDisplayDiv>
                )
            }
        </>
        // <CardDisplayDiv className="singleCard">
        //     <img src={cards[cardNum].image} alt="card image" />
        //     <p>{deck.cards[cardNum].value} of {deck.cards[cardNum].suit.toLowerCase()}</p>
        // </CardDisplayDiv>
    )

}
