import {redirect} from "next/navigation";
import getUrl from "@/lib/get-url";

export default async function AliasRedirect({params,}:{params: Promise<{alias:string}>;}) {
    // const path = usePathname();
    const {alias} = await params;

    if (alias) {
        console.log("path: ", alias);
    } else {
        console.log("no path");
    }

    const url = await getUrl(alias);
    console.log("got alias: " + alias);

    if (url) {
        redirect(url);
    }

    redirect("/");
}