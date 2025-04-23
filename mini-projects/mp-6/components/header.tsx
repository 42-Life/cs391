import {primaryShade} from "@/lib/text-styles";

const headerTestStyle = `text-4xl font-semibold p-4 text-white w-screen mb-5 ${primaryShade}`;

export default function Header() {
    return(
        <header >
            <h1 className={headerTestStyle}>Authorisation App</h1>
        </header>
    );
}