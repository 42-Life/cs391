import {darkText, medDarkText} from "@/lib/text-styles";
{/* text-slate-700 text-slate-500 */}

export default function Description(){
    return(
        <div className={`flex flex-col items-center justify-center m-5`}>
            <h2 className={`font-bold underline underline-offset-2 mb-2 text-3xl ${darkText} tracking-wide`}>
                Compact URL Tool</h2>
            <p className={`${medDarkText} mb-4 text-lg tracking-wide`}>
                Turn your lengthy URL into a customised, compact link with the tool below</p>
        </div>
    );
}