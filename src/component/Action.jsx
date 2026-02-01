import { useReducer } from "react";

const initialState = {count: 10};

const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return {...state, count: state.count + 1}
      case "decrement":
        return {...state, count: state.count - 1}
      case "reset":
        return initialState;
        default : return state;
  }
}
function Action(){
  const [state, dispatch ] = useReducer(reducer, initialState);

  return(
    <>
    Count : {state.count}
    <button onClick={() => dispatch({type: "increment"})}>+</button>
    <button onClick={() => dispatch({type: "decrement"})}>-</button>
    <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </>
  )
}
export default Action;