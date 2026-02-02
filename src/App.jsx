import {createContext} from "react";
import UserProvider from "./component/UserProvider";
import Action from "./component/Action.jsx";
import Challenges from "./component/Challenges.jsx";
import Ref from "./component/Ref.jsx";
import FocusInput from "./component/FocusInput.jsx";
export const ThemeContext = createContext();
export const Theme2 = createContext();
import Timer from "./component/Timer.jsx";
import useFetch from "./component/useFetch.jsx";
  
function App(){
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  
  const FetchDataApi = () => {
    return(
    <section>
      {data && data.slice(0,3).map((item) => (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))
      }
      </section>
    )
  }
  return(
    <>
    <UserProvider/>
    <Action/>
    <h5>Challenges</h5>
    <Challenges/>
    <FocusInput />
    <Ref/>
    <Timer/>
    <FetchDataApi/>
    </>
  )
}
export default App;