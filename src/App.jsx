import {createContext} from "react";
import UserProvider from "./component/UserProvider";
import Action from "./component/Action.jsx";
import Challenges from "./component/Challenges.jsx";
import Ref from "./component/Ref.jsx";
import FocusInput from "./component/FocusInput.jsx";
export const ThemeContext = createContext();
export const Theme2 = createContext();
import Timer from "./component/Timer.jsx";
function App(){
  return(
    <>
    <UserProvider/>
    <Action/>
    <h5>Challenges</h5>
    <Challenges/>
    <FocusInput />
    <Ref/>
    <Timer/>
    </>
  )
}
export default App;