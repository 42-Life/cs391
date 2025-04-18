"use client"

import Description from "@/components/description";
import ActionBox from "@/components/action-box";
import {darkBG, medDarkBG} from "@/lib/text-styles";
import CondDisplay from "@/components/cond-display";
import {condDisplayTypes, inputGroup, urlInfo} from "@/types";
import {useState} from "react";
import addData from "@/lib/add-data";
import InfoDiv from "@/components/info-div";
import validation from "@/lib/validation";
{/* bg-slate-700 bg-slate-500 */}

export default function Home() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [targetID, setTargetID] = useState("");
    const [formState, setFormState] = useState(false);
    // true if form has been submitted

    const urlProps : urlInfo = {
        url : url,
        alias: alias,
    }

    // hide if nothing has been entered so far
    const userMessage: condDisplayTypes = {
        hide : !formState,
        good : validation(urlProps),
        targetID : targetID,
    }

    const propertiesURL:inputGroup = {
        label : "URL",
        id : "url",
        boxLength : 50,
        textAlign: "left",
        type: "url",
    }

    const propertiesAlias : inputGroup = {
        label: "Alias",
        id : "alias",
        boxLength : 50,
        textAlign: "left",
        type: "text",
    }

    function setAll(res:urlInfo) {
        setAlias(res.alias);
        setTargetID(res.id as string);
        setUrl(res.url);
    }

    return (
      <div>
          <Description/>
          <ActionBox colorStyling={darkBG}>
              <form action={(formData) => addData(formData)
                  .then((res) => setAll(res))
                  .then(() => setFormState(!userMessage.good))

              } className={`flex flex-col mb-4`}>
                  <InfoDiv props={propertiesURL} />
                  <InfoDiv props={propertiesAlias} />
                  <ActionBox colorStyling={medDarkBG} addtl={`my-5 w-lg`}>
                      <button type="submit" className={`m-5`}>
                          Shorten URL
                      </button>
                  </ActionBox>
              </form>
          </ActionBox>

          {/* Error or Success Display */}
          <CondDisplay props={userMessage}/>
      </div>
  );
}