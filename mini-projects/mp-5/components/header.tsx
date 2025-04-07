import {darkBG} from "@/lib/text-styles";
{/* bg-slate-700 */}

export default function Header() {
    return(
        <header>
            <h1 className={`text-4xl font-semibold p-4 text-white w-screen ${darkBG} mb-5`}>URL Shortener</h1>
        </header>
    );
}