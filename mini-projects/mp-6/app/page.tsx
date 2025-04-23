import SignInButton from "@/components/sign-in-button";
import {titleStyle} from "@/lib/text-styles";

export default function Home() {
  return(
      <>
          <h1 className={titleStyle}>
              Google Authorisation
          </h1>
          <SignInButton/>
      </>
  );
}