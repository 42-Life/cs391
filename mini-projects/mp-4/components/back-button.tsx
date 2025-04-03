import {ButtonStyling} from "@/components/get-user-info";
import Link from "next/link";

export default function BackButton() {
    return (
        // API RETURN GOES HERE
        <Link href={"/"}>
            <button
                type="button"
                className={ButtonStyling}
            >
                Pick Another Colour
            </button>
        </Link>
    );
}