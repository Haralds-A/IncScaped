import { createContext, useState } from "react";

const TempComents = [
    {
        id: "1",
        storie_ID: "4",
        user_id: "1",
        coment_text: "labs stāsts",
        creation_date: "21/10/2023",        
    },
    {
        id: "2",
        storie_ID: "4",
        user_id: "1",
        coment_text: "zb sitā huiņa",
        creation_date: "21/10/2023",  
    },
    {
        id: "3",
        storie_ID: "4",
        user_id: "1",
        coment_text: "slikts stāsts",
        creation_date: "21/10/2023",  
    },
    {
        id: "4",
        storie_ID: "4",
        user_id: "1",
        coment_text: "meh",
        creation_date: "21/10/2023",  
    },
];

export const ComentContext = createContext({
    coments: null,
    setComents: () => null,
});

export const ComentProvider = ({children}) =>{
    const [coments,setComents] = useState(TempComents);
    const value = {coments, setComents};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}