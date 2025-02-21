import styled from "styled-components";
import { Card } from "../types.ts";

const CardDisplayDiv = styled.div`
    /* CSS styling for Cards Preview Div goes here */
    display: flex;
    flex-direction: column;
`;


export default function CardsComponent({cns}: {cns: Card[]} ) {
    return (
        <>
            {
                cns.map((c:Card, i:number) =>
                    <CardDisplayDiv key={i}>
                        <h2>{c.value} OF {c.suit}</h2>
                        <img src={c.image} alt={c.suit}/>
                    </CardDisplayDiv>
                )
            }
        </>

    )

}
