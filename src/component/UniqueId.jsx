import { useId } from "react"

const UniqueId = () => {
    const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>Name:</label>
      <input id={`${id}-name`} type="text" />
     <label htmlFor={`${id}-email`}>Email:</label>
      <input id={`${id}-email`} type="email"/> 
    </div>
  )
}

export default UniqueId