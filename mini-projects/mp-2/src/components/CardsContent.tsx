/* importing necessary dependencies & packages */
import {useState, useEffect} from "react";

export default function CardsContent() {

    /* useState hook : storage of API data */
    const [data, setData] = useState([]);       /* Add array type when API selected */

    /* useEffect hook : error handling, re-render logic */
    useEffect(() => {
        async function fetchData(): Promise<void> {                 /* returns a void promise */
            const rawData = await fetch("https://deckofcardsapi.com/api/deck/new/")  /* Deck of cards API */
            const {results} = await rawData.json();                 /* clean data */
            setData(results);                                       /* cleaned data is used to change the state */
        }
        fetchData()
            .then(() => console.log("Data has been fetched from API"))
            .catch(e => console.log("Error during data fetch: " + e));
    }, [data.length]);                                              /* when data length is updated, site re-renders*/

    return (
        <>
        </>
    );
}