import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
    const focusRef = useRef(null);
    const Focus = () => {
        focusRef.current.focus();
    }
  return (
    <>
    <div>FocusInput</div>
    <input type="text" ref={focusRef} />
    <button onClick={() => Focus()}>Focus</button>
    </>
)
}

export default FocusInput