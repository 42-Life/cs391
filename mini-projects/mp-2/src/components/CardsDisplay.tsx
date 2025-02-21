/* importing necessary dependencies & packages */
import {useState, useEffect} from "react";
import {Card} from "../types.ts";
import CardsComponent from "./CardsComponent.tsx";

export default function CardsDisplay() {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        async function pickCards(): Promise<void> {
            const res = await fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=4`);
            const {cards}= await res.json();
            setCards(cards);
            console.log("This is the deck: "+cards);
        }
        pickCards()
            .then(() => console.log(`Selected  cards successfully`))
            .catch((e) => console.log("Error picking cards" + e));
    }, []);

    console.log(cards);  // undefined

    return (
        <div>
            {/*<input*/}
            {/*    type="number"*/}
            {/*    placeholder="Number of cards"*/}
            {/*    value={numCards}*/}
            {/*    onChange={(e) => setNumCards(Number(e.target.value))}*/}
            {/*/>*/}
            <div>

                <CardsComponent cns={cards}/>

            </div>
        </div>
    )
}