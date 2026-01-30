import { UserContext } from "./UserProvider";
import { useContext } from "react";

const UserProfile = () => {
   const {name, age} = useContext(UserContext);

  return (
    <div>
      <h1>User Profile : {name}</h1>
      <h3>Age : {age}</h3>
    </div>
  )
}

export default UserProfile;