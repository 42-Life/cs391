// "use client"
//
// import {useSearchParams} from "next/navigation";
//
// export function GetKeyColor():string {
//     const keyParam = useSearchParams().get("colorOut");
//     let colorToUse: string;
//     if (keyParam != null) {
//         colorToUse = keyParam
//     } else {
//         colorToUse = "blue" // default value
//     }
//     return(colorToUse);
// }