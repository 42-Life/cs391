"use client"

import Description from "@/components/description";
import ActionBox from "@/components/action-box";
import {darkBG} from "@/lib/text-styles";
import EnterInfo from "@/components/enter-info";
import CondDisplay from "@/components/cond-display";
import {condDisplayTypes} from "@/types";
// import {useState} from "react";
// import validation from "@/lib/validation";
{/* bg-slate-700 bg-slate-500 */}

export default function Home() {

    const isHide = false;
    const isGood = true;
    // const [isGood, setIsGood] = useState(false);

    // useEffect(() => {
    //     validation()
    // })

    const userMessage: condDisplayTypes = {
        hide : isHide,
        good : isGood,
    }

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