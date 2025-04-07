import Description from "@/components/description";
import ActionBox from "@/components/action-box";
import {darkBG, medDarkBG} from "@/lib/text-styles";
import EnterInfo from "@/components/enter-info";
{/* bg-slate-700 bg-slate-500 */}


export default function Home() {
    return (
      <div>
          <Description/>
          {/*<h3>Enter a URL, and a custom alias in the fields below</h3>*/}
          <ActionBox colorStyling={darkBG}>
              <EnterInfo/>

              {/*<label htmlFor="enter-info">Enter info</label>*/}
              {/*<input type="text" id="enter-info" />*/}


              <ActionBox colorStyling={medDarkBG} addtl={`mb-4 w-lg`}>
                  <button type="submit" className={'m-5'}
                          // onClick={() => console.log("submit")}
                  >
                      Shorten URL
                  </button>
              </ActionBox>
          </ActionBox>
      </div>
  );
}

{/*<ActionBox>*/}
{/*    <Link href={"/"} className={'my-10'}>test2</Link>*/}
{/*</ActionBox>*/}