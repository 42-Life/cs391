import styled from "styled-components";
import {Card} from "../types";

const CardsPreviewDiv = styled.div`
    /* CSS styling for Cards Preview Div goes here */
`;

export default function CardsPreview({card}: {card: Card}) {
    return (
        <CardsPreviewDiv>
            <img src={card.image} alt="{card.value} of {card.suit}"/>
            <p>{card.value} of {card.suit}</p>
        </CardsPreviewDiv>
    )
}

