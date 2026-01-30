import { createContext, useState } from "react";
import UserProfile from "./UserProfile";
import UpdateUser from "./UpdateUser";

const UserContext = createContext();

const UserProvider = () => {
    const [name, setName] = useState("HuXN");
    const [age, setAge] = useState(22);
    
    return (
        <UserContext.Provider value={{ name, age, setName, setAge }}>
           <UserProfile/>
           <UpdateUser/>
        </UserContext.Provider>
    )
}

export default UserProvider;
export { UserContext };