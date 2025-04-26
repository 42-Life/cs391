import {titleStyle} from "@/lib/text-styles";
import LoginForm from "@/components/login-form";

export default function Home() {
  return(
      <>
          <h1 className={titleStyle}>
              Google Authorisation
          </h1>
          <LoginForm />
      </>
  );
}