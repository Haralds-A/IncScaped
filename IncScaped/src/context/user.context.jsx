import { createContext, useState } from "react";

const TempCurrentUser = [
    {
        id: "1",
        Username: "1",
        password: "23e34",
        email: "kkas@gmail.com",
        registration_date: "21/10/2023",
        role: 0,
    },
];

const TempUsers = [
    {
        id: "1",
        username: "azimuts",
        password: "23e34",
        email: "kkas@gmail.com",
        registration_date: "21/10/2023",
        role: 0,
    },
    {
        id: "2",
        username: "bibis",
        password: "23e34",
        email: "kkas@gmail.com",
        registration_date: "21/10/2023",
        role: 0,
    },
    {
        id: "3",
        username: "kihakiks",
        password: "23e34",
        email: "kkas@gmail.com",
        registration_date: "21/10/2023",
        role: 0,
    },
    {
        id: "4",
        username: "rudzmanis",
        password: "23e34",
        email: "kkas@gmail.com",
        registration_date: "21/10/2023",
        role: 0,
    },
];

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

    allUsers: null,
    setAllUsers: () => null,

    userToken: null,
    setUserToken: () => null,
});

export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(TempCurrentUser);
    const [allUsers,setAllUsers] = useState(TempUsers);
    const [userToken,_setUserToken] = useState(localStorage.getItem('TOKEN') || '');
    
    
    const setUserToken = (token) =>{
        if(token){
            localStorage.setItem('TOKEN',token);
        }else{
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token);
    }
    const value = {currentUser, setCurrentUser,allUsers,setAllUsers,userToken,setUserToken};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}