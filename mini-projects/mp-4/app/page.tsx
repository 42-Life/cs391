"use client"

// import TestDataDisplay from "@/components/client-side";
import GetUserInfo from "@/components/get-user-info";
// import Header from "@/components/header";
import ColorContextProvider from "@/components/color-context";

export default function Home() {

    const twoColStyling = `
        justify-center items-center flex flex-col
    `;

    const textStyling = `
        text-gray-100
    `;

    return(
          <>
              {/*<Header />*/}
              <GetUserInfo/>
              <p className={textStyling}>The Harvard Art Gallery features works of a variety of colours.</p>
              <p className={textStyling}>Select a colour above to see some of them.</p>
          </>
    );
}