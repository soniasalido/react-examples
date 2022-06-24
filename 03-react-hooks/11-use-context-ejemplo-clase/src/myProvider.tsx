import React from "react";


interface UserContext {
    username: string;
    setUsername: (username:string) => void;
}


// Creamos el contexto
export const MyContext = React.createContext< UserContext >({
    username: "",
    setUsername: (u) => {},
});


// Creamos el componente que usará el contexto
interface Props {
    children: React.ReactNode;
}


// Provider
export const MyProvider = (props) => {
    const {children} = props;
    const [username, setUsername] = React.useState<string>("");

    return (
        <MyContext.Provider value={{username, setUsername}}>
            { children}
        </MyContext.Provider>
    )
}
