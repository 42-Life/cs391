import Description from "@/components/description";
import ActionBox from "@/components/action-box";
import {darkBG} from "@/lib/text-styles";
import EnterInfo from "@/components/enter-info";
import CondDisplay from "@/components/cond-display";
import {condDisplayTypes} from "@/types";
// import getLastData from "@/lib/get-last-data";
{/* bg-slate-700 bg-slate-500 */}

export default function Home() {

    const isHide = false;
    const isGood = true;

    const userMessage: condDisplayTypes = {
        hide : isHide,
        good : isGood,
    }

    // const response = getLastData("6800aa84e2b6075d6900a39c");
    // response.then(data => {console.log(data)});

    return (
      <div>
          <Description/>
          <ActionBox colorStyling={darkBG}>
              <EnterInfo/>
          </ActionBox>

          {/* Error Display */}
          <CondDisplay props={userMessage}/>
      </div>
  );
}