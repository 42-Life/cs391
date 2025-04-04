
import GetUserInfo from "@/components/get-user-info";

export default function Home() {

    const textStyling = `
        text-gray-100
    `;

    return(
          <>
              <GetUserInfo/>
              <p className={textStyling}>The Harvard Art Gallery features works of a variety of colours.</p>
              <p className={textStyling}>Select a colour above to see some of them.</p>
              {/*<DisplayArt props={getArtWork()}/>*/}
          </>
    );
}