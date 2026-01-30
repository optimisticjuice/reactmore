// Context API
import { ThemeContext } from "../App";

const ComponentB = () => {
  return (
    <ThemeContext.Consumer>
      {name => <h1>Component B : {name}</h1>}
    </ThemeContext.Consumer>
  )
}

export default ComponentB