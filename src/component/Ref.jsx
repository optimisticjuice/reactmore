import { useRef } from "react";

const Ref = () => {
    const ref = useRef(null);
    // inside the useRef we can pass any initial value
    console.log(ref);
    const focusInput = () => {
        ref.current.focus();
        ref.current.value = "Hi";
    }
    return (
        <>
        <h1>Ref</h1>
        <input type="text" ref={ref} />
        <button onClick={() => focusInput()}>Focus</button>
        </>
    )
}
export default Ref;