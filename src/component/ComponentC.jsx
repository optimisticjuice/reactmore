import { ThemeContext, Theme2 } from "../App";

const ComponentC = () => {
  return (
    <>
     <ThemeContext.Consumer>
      {name => <>
      <h1>{name}</h1>
    <h3> Component C </h3>
      
    </>}
     </ThemeContext.Consumer>
     <Theme2.Consumer>
      {age => <>
      <h1>{age}</h1>
    <h3> Component C </h3>
      </>}
      {/* Just place the ThemeContext.Consumer contents and the Theme2.Consumer contents inside the {} (expression) */}
       
     </Theme2.Consumer>
    </>
  )
}

export default ComponentC