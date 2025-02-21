import styled from "styled-components";
import { Deck } from "../types.ts";

const CardDisplayDiv = styled.div`
    /* CSS styling for Cards Preview Div goes here */
`;

export default function CardComponent({deck}: {deck: Deck}, {cardNum} : {cardNum: number}) {
    return (
        <CardDisplayDiv className="singleCard">
            <img src={deck.cards[cardNum].image} alt="card image" />
            <p>{deck.cards[cardNum].value} of {deck.cards[cardNum].suit.toLowerCase()}</p>
        </CardDisplayDiv>
    )

}
