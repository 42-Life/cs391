import TextX from "./TextX.tsx";

export default function Subtitle() {
    return(
        <TextX props={{
            base: 15,
            increment: 0.7,
            textType: "h2",
            text: "testing",
        }}></TextX>
    );
}