import Description from "@/components/description";
import ActionBox from "@/components/action-box";
import {darkBG, medDarkBG} from "@/lib/text-styles";
import EnterInfo from "@/components/enter-info";
import CondDisplay from "@/components/cond-display";
import {condDisplayTypes} from "@/types";
{/* bg-slate-700 bg-slate-500 */}

export default function Home() {

    const userMessage: condDisplayTypes = {
        hide : false,
        good : false,
    }

    return (
      <div>
          <Description/>
          <ActionBox colorStyling={darkBG}>
              <EnterInfo/>
              <ActionBox colorStyling={medDarkBG} addtl={`my-5 w-lg`}>
                  <button type="submit" className={'m-5'}>
                      Shorten URL
                  </button>
              </ActionBox>
          </ActionBox>

          {/* Error Display */}
          <CondDisplay props={userMessage}/>
      </div>
  );
}