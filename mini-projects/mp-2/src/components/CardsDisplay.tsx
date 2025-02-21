/* importing necessary dependencies & packages */
import {useState, useEffect} from "react";
import {Card, /* Deck */} from "../types.ts";
import CardComponent from "./CardComponent.tsx";

export default function CardsDisplay() {
    // const [deck, setDeck] = useState<Deck>();
    const [cards, setCards] = useState<Card[]>([]);
    const [numCards, setNumCards] = useState(4);

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
    const cardAPI = `https://deckofcardsapi.com/api/deck/new/draw/?count=${numCards}`;

    // useEffect to select cards from the previously loaded deck
    useEffect(() => {
        async function pickCards(): Promise<void> {
            const cards = await fetch(cardAPI);
            const {results} = await cards.json();
            setCards(results);
        }
        pickCards()
            .then(() => console.log(`Selected ${numCards} cards successfully`))
            .catch((e) => console.log("Error picking cards" + e));
    }, [cards]);

    return (
        <div>
            <input
                type="number"
                placeholder="Number of cards"
                value={numCards}
                onChange={(e) => setNumCards(Number(e.target.value))}
            />
            <div>
                {
                    cards.map((card) => (<CardComponent card={card}/>))
                }
            </div>
        </div>
    )
}