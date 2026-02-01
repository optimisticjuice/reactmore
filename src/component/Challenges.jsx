import {useReducer, useState} from "react";
const initialState = {count: 0};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + action.payload};        
            case "decrement":
                return {count: state.count - action.payload};
            case "reset":
                return initialState;
            default:
                return state;
    }
}
function Challenges(){
    const [state,dispatch] = useReducer(reducer,initialState);
    const [adjust, setAdjust] = useState(1);
        return(
        <>
        <h4>Count : {state.count}</h4>
        <button onClick={() => dispatch({type: "increment", payload: adjust})}>+</button>
        <button onClick={() => dispatch({type: "decrement", payload: adjust})}>-</button>
        <button onClick={() => {
        dispatch({type: "reset"})   
        setAdjust(1)
        }}>Reset</button>
 
         <h5>Adjust : {adjust}</h5>
         <button onClick={() => {
         setAdjust(adjust + 1)
         }}>+</button>
         <button onClick={() => {
         setAdjust(adjust - 1)
         }}>-</button>
        </>
    )
}
export default Challenges;
