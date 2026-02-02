import { UserContext } from "./UserProvider";
import { useContext } from "react";

const UpdateUser = () => {
  const { name, age, setName, setAge } = useContext(UserContext);
  
  const handleUpdate = () => {
    setName("John Doe");
    setAge(30);
  };
 
  return (
    <div>
      <h1>UpdateUser : {name}</h1>
      <h3>Age : {age}</h3>
      <button onClick={handleUpdate}>Update User</button>
    </div>
  )
}

export default UpdateUser;