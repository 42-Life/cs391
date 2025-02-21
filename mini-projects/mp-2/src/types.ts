export type Card = {
    code: string; // card ID
    value: number;
    suit: string;
    image: string;
}

export type Deck = {
    success: boolean;
    deck_id: string;
    remaining: number;
    cards: Card[];
}