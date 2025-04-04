import BackButton from "@/components/back-button";
import Artwork from "@/components/artwork";

export default function DisplayPage() {

    return (
        <div className="flex flex-col align-items-center">
            <Artwork/>
            <BackButton />
        </div>
    );
}