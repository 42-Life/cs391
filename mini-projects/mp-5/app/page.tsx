"use client"

import Description from "@/components/description";
import ActionBox from "@/components/action-box";
import {darkBG, medDarkBG} from "@/lib/text-styles";
import CondDisplay from "@/components/cond-display";
import {condDisplayTypes, inputGroup, urlInfo} from "@/types";
import {useState} from "react";
import addData from "@/lib/add-data";
import InfoDiv from "@/components/info-div";
{/* bg-slate-700 bg-slate-500 */}

export default function Home() {
    const [targetID, setTargetID] = useState("");
    const [formState, setFormState] = useState(false);
    // true if form has been submitted
    const [isDataValid, setIsDataValid] = useState(true);
    // true if data has been validated

    // hide if nothing has been entered so far
    const userMessage: condDisplayTypes = {
        hide : !formState,
        good : isDataValid,
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
        try {
            setTargetID((!res.id) ? "" : res.id) }
        catch(err) {
            console.log("id error", err)
        }
    }

    return (
      <div>
          <Description/>
          <ActionBox colorStyling={darkBG}>
              <form action={(formData) =>
                  addData(formData)
                      .then((res) =>
                      {
                          if (res === null) {
                              setAll({url: "", alias: ""});
                              setIsDataValid(false);
                          } else {
                              setAll(res);
                              setIsDataValid(true);
                          }
                      })
                          .catch((err) => console.log("error in submission:", err))
                      .then(() => setFormState(true))

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