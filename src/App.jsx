import {createContext} from "react";
import UserProvider from "./component/UserProvider";
import Action from "./component/Action.jsx";
import Challenges from "./component/Challenges.jsx";
export const ThemeContext = createContext();
export const Theme2 = createContext();

function App(){
  return(
    <>
    <UserProvider/>
    <Action/>
    <h5>Challenges</h5>
    <Challenges/>
    </>
  )
}
export default App;