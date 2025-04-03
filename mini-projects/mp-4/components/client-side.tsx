import DataFetch from "@/components/backend-data";

export default function TestDataDisplay() {
    let output = DataFetch();
    console.log(output);

    return (
        <>
            <h2>Data goes here</h2>
            <p>${JSON.stringify(output)}</p>
        </>
    );
}