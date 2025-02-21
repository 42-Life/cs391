/* importing necessary dependencies & packages */
import {useState, useEffect} from "react";
import {Card} from "../types.ts";
import CardsComponent from "./CardsComponent.tsx";

export default function CardsDisplay() {
    const [cards, setCards] = useState<Card[]>([]);
    // const [numCards, setNumCards] = useState(4);

    // useEffect to load the new Deck
    // useEffect(() => {
    //     async function loadDeck(): Promise<void> {
    //         const newDeck = await fetch("https://deckofcardsapi.com/api/deck/new/")
    //         const {results} = await newDeck.json();
    //         setDeck(results);
    //     }
    //     loadDeck()
    //         .then(() => console.log("Loaded NEW deck"))
    //         .catch((e) => console.log("Error loading deck: " + e));
    // }, [deck]);

    // const deckID = deck.deck_id;
    // replacing deckID with "new" creates a new deck and draws cards at the same time
    // const cardAPI = `https://deckofcardsapi.com/api/deck/new/draw/?count=4`;

    // useEffect to select cards from the previously loaded deck
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
                {
                    <CardsComponent cns={cards}/>

                    // cns.map((card) =>
                    //     <div key={card.code} className="card">
                    //
                    //     </div>
                    // )
                    // deck.cards.map((card, i) => (<CardComponent deck={deck} key={i} />))
                    // cards.map((card) => (<CardComponent card={card}/>))
                }
            </div>
        </div>
    )
}