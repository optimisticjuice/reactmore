import { useContext } from "react";
import { ThemeContext } from "../App";

const ComponentA = () => {
    const nameContext = useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {nameContext => <h1>Component A : {nameContext} </h1>}
    </ThemeContext.Consumer>
)
}

export default ComponentA
// Props Drilling