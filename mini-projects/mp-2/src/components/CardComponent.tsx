import styled from "styled-components";
import { Card, Deck } from "../types.ts";

const CardDisplayDiv = styled.div`
    /* CSS styling for Cards Preview Div goes here */
`;

export default function CardComponent({card}: {card: Card}) {
    return (
        <CardDisplayDiv className="singleCard">
            <img src={card.image} alt="card image" />
            <p>{card.value} of {card.suit.toLowerCase()}</p>
        </CardDisplayDiv>
    )

}
