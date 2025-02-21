/* importing necessary dependencies & packages */
import {useState, useEffect} from "react";
import {Card, Deck} from "../types.ts";
import CardComponent from "./CardComponent.tsx";

export default function CardsContent() {
    /* useState hook : storage of API data */
    const [cards, setCards] = useState<Card[]>([]);       /* Loads card data */
    const [deck, setDeck] = useState<Deck>();         /* Loads a new deck */

    /* useState hook: number of cards to be displayed */
    const [numCards, setNumCards] = useState(0);

    /* useEffect hook : error handling, re-render logic */
    useEffect(() => {
        async function fetchData(): Promise<void> {                 /* returns a void promise */
            const rawData = await fetch("https://deckofcardsapi.com/api/deck/new/")  /* Deck of cards API */
            const {results} = await rawData.json();                 /* clean data */
            setCards(results);                                      /* cleaned data is used to change the state */
        }
        fetchData()
            .then(() => console.log("Data has been fetched from API"))
            .catch(e => console.log("Error during data fetch: " + e));
    }, [numCards]);     /* when user asks for more cards, site re-renders*/

    return (
        <div>
            <input
                type="number"
                placeholder="Enter number of cards"
                value={numCards}
                onChange={(e) => setNumCards(Number(e.target.value))}
                // when there is a change, set function updates state of numCards
            />

            <div>
                {
                    cards.map((card) => (<CardComponent card={card}/>))
                    // for every card, load an associated CardPreview component
                }
            </div>
        </div>
    );
}