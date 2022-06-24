
import React from "react";
import { MyProvider } from "./myProvider";

// Usa el contexto de usuario
export const LoggedUser = () => {
    const { username } = React.useContext(MyContext);
    return (
        <>
            <div>
                <h3>{username}</h3>
            </div>
        </>
    );

};