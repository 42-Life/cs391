import styled from "styled-components";
// import CardsDisplay from "./CardsDisplay.tsx";
import { Card } from "../types.ts";

const CardDisplayDiv = styled.div`
    /* CSS styling for Cards Preview Div goes here */
    display: flex;
    flex-direction: column;
`;


export default function CardsComponent({cns}: {cns: Card[]} ) {
    return (
        <>
            {/*<h3>Welcome to the game. Here is a deck of 4 cards.</h3>*/}
            {
                cns.map((c:Card, i:number) =>
                    <CardDisplayDiv key={i}>
                        <h2>{c.value} OF {c.suit}</h2>
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
