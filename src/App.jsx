import {createContext} from "react";
import UserProvider from "./component/UserProvider";

export const ThemeContext = createContext();
export const Theme2 = createContext();

function App(){
  return(
    <>
    <UserProvider/>
    </>
  )
}
export default App;